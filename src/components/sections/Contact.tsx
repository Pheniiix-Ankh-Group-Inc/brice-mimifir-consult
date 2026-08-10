import { useMemo, useRef, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SITE } from "@/content/site";
import { useLanguage } from "@/i18n/LanguageProvider";

type Status = "idle" | "sending" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "organization" | "message" | "consent", string>>;

const endpoint = (import.meta.env["VITE_CONTACT_API_URL"] as string | undefined) || "/api/contact";

export function Contact() {
  const { t, locale } = useLanguage();
  const c = t.contact;
  const formStartedAt = useMemo(() => Date.now(), []);
  const submissionId = useRef<string>(
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : "00000000-0000-4000-8000-000000000000",
  );

  const [values, setValues] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
    consent: false,
    website: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    const name = values.name.trim();
    if (name.length < 2 || name.length > 80) next.name = c.errors.name;
    const email = values.email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) next.email = c.errors.email;
    if (values.organization.trim().length > 120) next.organization = c.errors.organization;
    const message = values.message.trim();
    if (message.length < 20 || message.length > 2000) next.message = c.errors.message;
    if (!values.consent) next.consent = c.errors.consent;
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

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submissionId: submissionId.current,
          name: values.name.trim(),
          email: values.email.trim(),
          organization: values.organization.trim() || undefined,
          message: values.message.trim(),
          consent: true,
          website: values.website,
          formStartedAt,
          locale,
        }),
      });
      // Only a 200 with { ok: true } is treated as delivered.
      const payload = (await response.json().catch(() => null)) as { ok?: boolean } | null;
      if (response.ok && payload?.ok === true) {
        setStatus("success");
        setValues({ name: "", email: "", organization: "", message: "", consent: false, website: "" });
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

  return (
    <section id="contact">
      <div className="bg-midnight text-ivory">
        <div className="shell section-y">
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="eyebrow text-brass">{c.eyebrow}</p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="display-2">{c.headline}</h2>
              <div className="rule-brass my-9" />
              <p className="body-lg measure text-ivory/80">{c.body}</p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="bg-ivory">
        <div className="shell section-y">
          <form
            onSubmit={onSubmit}
            noValidate
            aria-label={c.formLabel}
            className="grid gap-10 lg:grid-cols-12 lg:gap-8"
          >
            <div className="lg:col-span-7">
              <div className="space-y-7">
                <div>
                  <label className={labelClass} htmlFor="contact-name">
                    {c.fields.name} *
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
                    onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
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
                    {c.fields.email} *
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
                    onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
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
                    {c.fields.organization} — {c.optional}
                  </label>
                  <input
                    id="contact-organization"
                    name="organization"
                    type="text"
                    autoComplete="organization"
                    value={values.organization}
                    aria-invalid={Boolean(errors.organization)}
                    aria-describedby={errors.organization ? "error-organization" : undefined}
                    onChange={(e) => setValues((v) => ({ ...v, organization: e.target.value }))}
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
                    {c.fields.message} *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    value={values.message}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "error-message" : undefined}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
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
                    checked={values.consent}
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? "error-consent" : undefined}
                    onChange={(e) => setValues((v) => ({ ...v, consent: e.target.checked }))}
                    className="mt-1 h-5 w-5 accent-[#b9975b]"
                  />
                  <div>
                    <label htmlFor="contact-consent" className="text-[15px] text-slate">
                      {c.fields.consent}
                    </label>
                    {errors.consent && (
                      <p id="error-consent" className="mt-2 text-[14px] text-midnight">
                        {errors.consent}
                      </p>
                    )}
                  </div>
                </div>

                {/* Honeypot — must stay empty. */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.website}
                    onChange={(e) => setValues((v) => ({ ...v, website: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-8">
              <button
                type="submit"
                disabled={status === "sending"}
                className="link-editorial text-midnight disabled:opacity-60"
              >
                {status === "sending" ? c.sending : c.submit}
                <span aria-hidden="true">↘</span>
              </button>
              <p className="mt-6 text-[14px] text-muted">{c.note}</p>

              <div aria-live="polite" className="mt-6 min-h-6">
                {status === "success" && (
                  <p className="border-l border-brass pl-4 text-[15px] text-midnight">{c.success}</p>
                )}
                {status === "error" && (
                  <p className="border-l border-brass pl-4 text-[15px] text-midnight">{c.error}</p>
                )}
              </div>

              <p className="mt-10 border-t border-border-light pt-6 text-[14px] text-slate">
                <a className="border-b border-brass" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
