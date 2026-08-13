"use client";

import { useEffect, useRef } from "react";

import { SITE } from "@/content/site";
import type { Content } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { BrandLogo } from "./BrandLogo";
import { LanguageToggle } from "./LanguageToggle";

type MenuContent = Pick<Content, "brand" | "common" | "nav">;

export function FullscreenMenu({
  open,
  onClose,
  onNavigate,
  locale,
  t,
}: {
  open: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
  locale: Locale;
  t: MenuContent;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label={t.common.menu}
      className="fixed inset-0 z-50 overflow-y-auto bg-midnight text-ivory"
    >
      <div className="shell flex min-h-16 items-center justify-between py-6 md:py-8">
        <BrandLogo alt={t.brand.name} className="h-14 w-14" />
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="link-editorial text-ivory"
        >
          {t.common.close}
        </button>
      </div>

      <div className="shell grid gap-14 pt-10 pb-20 lg:grid-cols-12 lg:gap-8 lg:pt-20">
        <nav aria-label={t.common.menu} className="lg:col-span-7">
          <ul className="space-y-3">
            {t.nav.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className="group flex min-h-[56px] w-full items-baseline gap-5 text-left"
                >
                  <span className="text-[12px] font-semibold tracking-[0.2em] text-brass">
                    {item.number}
                  </span>
                  <span className="display-3 border-b border-transparent transition-colors duration-200 group-hover:border-brass group-focus-visible:border-brass">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-5">
          <div className="rule-brass mb-8" />
          <ul className="space-y-4 text-[15px] text-ivory/80">
            <li>{t.common.location}</li>
            <li>
              <a
                className="border-b border-brass/50 hover:text-brass"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                className="border-b border-brass/50 hover:text-brass"
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.common.linkedin}
                <span className="sr-only"> ({t.common.newTab})</span>
              </a>
            </li>
            <li>
              <a
                className="border-b border-brass/50 hover:text-brass"
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.common.instagram}
                <span className="sr-only"> ({t.common.newTab})</span>
              </a>
            </li>
          </ul>
          <div className="mt-8">
            <LanguageToggle locale={locale} label={t.common.language} tone="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
