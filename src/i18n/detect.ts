export type Locale = "en" | "fr";

export const STORAGE_KEY = "bm-locale";

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "fr";
}

/** Resolve the initial locale: stored preference first, then navigator languages. */
export function detectLocale(stored: string | null, languages: readonly string[]): Locale {
  if (isLocale(stored)) return stored;
  for (const lang of languages) {
    if (typeof lang === "string" && lang.toLowerCase().startsWith("fr")) return "fr";
  }
  return "en";
}
