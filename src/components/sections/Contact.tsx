"use client";

import { useRef, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SITE } from "@/content/site";
import type { Content } from "@/content/types";
import type { Locale } from "@/i18n/config";
import {
  createSubmissionIdentity,
  interpretContactResponse,
  retainOrRenewIdentity,
  type SubmissionIdentity,
} from "./contact-state";

type Status = "idle" | "sending" | "success" | "error" | "rate_limited" | "unavailable";
type FieldErrors = Partial<
  Record<"name" | "email" | "organization" | "message" | "consent", string>
>;

type ContactValues = {
  name: string;
  email: string;
  organization: string;
  message: string;
  consent: boolean;
  website: string;
};

const emptyValues: ContactValues = {
  name: "",
  email: "",
  organization: "",
  message: "",
  consent: false,
  website: "",
};

function browserCrypto() {
  if (typeof globalThis.crypto?.randomUUID !== "function") return undefined;
  return { randomUUID: () => globalThis.crypto.randomUUID() };
}

export function Contact({ contact, locale }: { contact: Content["contact"]; locale: Locale }) {
  const identity = useRef<SubmissionIdentity | null>(null);
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function ensureIdentity(): SubmissionIdentity | null {
    if (identity.current) return identity.current;
    identity.current = createSubmissionIdentity(browserCrypto(), Date.now);
    if (!identity.current) setStatus("unavailable");
    return identity.current;
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    const name = values.name.trim();
    if (name.length < 2 || name.length > 80) next.name = contact.errors.name;
    const email = values.email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      next.email = contact.errors.email;
    }
    if (values.organization.trim().length > 120) {
      next.organization = contact.errors.organization;
    }
    const message = values.message.trim();
    if (message.length < 20) next.message = contact.errors.messageTooShort;
    if (message.length > 2_000) next.message = contact.errors.messageTooLong;
    if (!values.consent) next.consent = contact.errors.consent;
    return next;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      const firstKey = Object.keys(found)[0]!;
      document.getElementById(`contact-${firstKey}`)?.focus();
      return;
    }

    const submissionIdentity = ensureIdentity();
    if (!submissionIdentity) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submissionId: submissionIdentity.submissionId,
          name: values.name.trim(),
          email: values.email.trim(),
          organization: values.organization.trim() || undefined,
          message: values.message.trim(),
          consent: true,
          website: values.website,
          formStartedAt: submissionIdentity.formStartedAt,
          locale,
        }),
      });
      const outcome =
        response.status === 429
          ? "rate_limited"
          : interpretContactResponse(response.status, await response.json().catch(() => null));

      if (outcome === "success") {
        setStatus("success");
        setValues(emptyValues);
        setErrors({});
        const renewed = retainOrRenewIdentity(submissionIdentity, true, browserCrypto(), Date.now);
        identity.current = renewed;
        if (!renewed) setStatus("unavailable");
      } else if (outcome === "rate_limited") {
        setStatus("rate_limited");
      } else if (outcome === "unavailable") {
        setStatus("unavailable");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "mt-2 w-full border border-border-light bg-soft-white px-4 py-3 text-[16px] text-ink transition-colors duration-200 focus:border-brass focus:outline-none";
  const labelClass = "eyebrow text-slate";
  const feedback =
    status === "success"
      ? contact.success
      : status === "rate_limited"
        ? contact.rateLimited
        : status === "unavailable"
          ? contact.unavailable
          : status === "error"
            ? contact.error
            : null;

  return (
    <section id="contact">
      <div className="bg-midnight text-ivory">
        <div className="shell section-y">
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="eyebrow text-brass">{contact.eyebrow}</p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="display-2">{contact.headline}</h2>
              <div className="rule-brass my-9" />
              <p className="body-lg measure text-ivory/80">{contact.body}</p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="bg-ivory">
        <div className="shell section-y">
          <form
            onSubmit={onSubmit}
            onFocusCapture={ensureIdentity}
            noValidate
            aria-label={contact.formLabel}
            className="grid gap-10 lg:grid-cols-12 lg:gap-8"
          >
            <div className="lg:col-span-7">
              <div className="space-y-7">
                <div>
                  <label className={labelClass} htmlFor="contact-name">
                    {contact.fields.name} *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={values.name}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "error-name" : undefined}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, name: event.target.value }))
                    }
                    className={fieldClass}
                  />
                  {errors.name && (
                    <p id="error-name" className="mt-2 text-[14px] text-midnight">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-email">
                    {contact.fields.email} *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={values.email}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "error-email" : undefined}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, email: event.target.value }))
                    }
                    className={fieldClass}
                  />
                  {errors.email && (
                    <p id="error-email" className="mt-2 text-[14px] text-midnight">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-organization">
                    {contact.fields.organization} — {contact.optional}
                  </label>
                  <input
                    id="contact-organization"
                    name="organization"
                    type="text"
                    autoComplete="organization"
                    value={values.organization}
                    aria-invalid={Boolean(errors.organization)}
                    aria-describedby={errors.organization ? "error-organization" : undefined}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, organization: event.target.value }))
                    }
                    className={fieldClass}
                  />
                  {errors.organization && (
                    <p id="error-organization" className="mt-2 text-[14px] text-midnight">
                      {errors.organization}
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-message">
                    {contact.fields.message} *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    value={values.message}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "error-message" : undefined}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, message: event.target.value }))
                    }
                    className={fieldClass}
                  />
                  {errors.message && (
                    <p id="error-message" className="mt-2 text-[14px] text-midnight">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="contact-consent"
                    name="consent"
                    type="checkbox"
                    required
                    checked={values.consent}
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? "error-consent" : undefined}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, consent: event.target.checked }))
                    }
                    className="mt-1 h-5 w-5 accent-[#b9975b]"
                  />
                  <div>
                    <label htmlFor="contact-consent" className="text-[15px] text-slate">
                      {contact.fields.consent} *
                    </label>
                    {errors.consent && (
                      <p id="error-consent" className="mt-2 text-[14px] text-midnight">
                        {errors.consent}
                      </p>
                    )}
                  </div>
                </div>

                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.website}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, website: event.target.value }))
                    }
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-8">
              <button
                type="submit"
                disabled={status === "sending" || status === "unavailable"}
                className="link-editorial text-midnight disabled:opacity-60"
              >
                {status === "sending" ? contact.sending : contact.submit}
                <span aria-hidden="true">↘</span>
              </button>
              <p className="mt-6 text-[14px] text-muted">{contact.note}</p>

              <div aria-live="polite" className="mt-6 min-h-6">
                {feedback && (
                  <p className="border-l border-brass pl-4 text-[15px] text-midnight">{feedback}</p>
                )}
              </div>

              <div className="mt-10 border-t border-border-light pt-6 text-[14px] text-slate">
                <p className="eyebrow text-midnight">{contact.directLabel}</p>
                <a
                  className="mt-3 inline-block border-b border-brass"
                  href={`mailto:${SITE.email}`}
                >
                  {SITE.email}
                </a>
                <p className="mt-6 text-muted">{contact.engagementModels}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
