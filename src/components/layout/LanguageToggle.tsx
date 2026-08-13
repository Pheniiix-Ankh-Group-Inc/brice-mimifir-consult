"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { localizePath, type Locale } from "@/i18n/config";

const options: { value: Locale; label: string; longLabel: string }[] = [
  { value: "en", label: "EN", longLabel: "English" },
  { value: "fr", label: "FR", longLabel: "Français" },
];

export function LanguageToggle({
  locale,
  label,
  tone = "dark",
}: {
  locale: Locale;
  label: string;
  tone?: "dark" | "light";
}) {
  const pathname = usePathname();
  const router = useRouter();
  const base = tone === "dark" ? "text-ivory/70" : "text-slate";
  const active = tone === "dark" ? "text-brass" : "text-midnight";

  const selectLocale = async (event: React.MouseEvent<HTMLAnchorElement>, next: Locale) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    try {
      await fetch("/api/locale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: next }),
      });
    } finally {
      router.push(`${localizePath(pathname, next)}${window.location.hash}`);
    }
  };

  return (
    <div className="flex items-center gap-1" role="group" aria-label={label}>
      {options.map((option, index) => (
        <span key={option.value} className="flex items-center">
          {index > 0 && <span className={`px-1 ${base}`}>/</span>}
          <Link
            href={localizePath(pathname, option.value)}
            hrefLang={option.value}
            lang={option.value}
            onClick={(event) => selectLocale(event, option.value)}
            aria-current={locale === option.value ? "page" : undefined}
            className={`inline-flex min-h-11 items-center px-2 text-[13px] font-semibold tracking-[0.16em] transition-colors duration-200 ${
              locale === option.value ? `${active} underline underline-offset-8` : base
            }`}
          >
            {option.label}
            <span className="sr-only"> {option.longLabel}</span>
          </Link>
        </span>
      ))}
    </div>
  );
}
