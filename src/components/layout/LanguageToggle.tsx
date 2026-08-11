import { useLanguage } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/detect";

const options: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "fr", label: "FR" },
];

export function LanguageToggle({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { locale, setLocale, t } = useLanguage();
  const base = tone === "dark" ? "text-ivory/70" : "text-slate";
  const active = tone === "dark" ? "text-brass" : "text-midnight";

  return (
    <div className="flex items-center gap-1" role="group" aria-label={t.common.language}>
      {options.map((option, index) => (
        <span key={option.value} className="flex items-center">
          {index > 0 && <span className={`px-1 ${base}`}>/</span>}
          <button
            type="button"
            onClick={() => setLocale(option.value)}
            aria-pressed={locale === option.value}
            className={`min-h-11 px-2 text-[13px] font-semibold tracking-[0.16em] transition-colors duration-200 ${
              locale === option.value ? `${active} underline underline-offset-8` : base
            }`}
          >
            {option.label}
            <span className="sr-only">{option.value === "en" ? " English" : " Français"}</span>
          </button>
        </span>
      ))}
    </div>
  );
}
