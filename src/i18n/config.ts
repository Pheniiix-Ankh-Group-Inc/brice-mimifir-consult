export const LOCALES = ["en", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "bm-locale";

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "fr";
}

type LanguagePreference = {
  language: string;
  quality: number;
  order: number;
};

function parseAcceptLanguage(header: string): LanguagePreference[] {
  return header
    .split(",")
    .map((entry, order) => {
      const [range = "", ...parameters] = entry.trim().split(";");
      const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith("q="));
      const parsedQuality = qualityParameter
        ? Number.parseFloat(qualityParameter.trim().slice(2))
        : 1;

      return {
        language: range.trim().toLowerCase(),
        quality: Number.isFinite(parsedQuality) ? parsedQuality : 0,
        order,
      };
    })
    .filter(({ language, quality }) => language !== "" && language !== "*" && quality > 0)
    .sort((left, right) => right.quality - left.quality || left.order - right.order);
}

export function resolveLocale(
  cookieValue: string | undefined,
  acceptLanguage: string | null,
): Locale {
  if (isLocale(cookieValue)) return cookieValue;
  if (!acceptLanguage) return DEFAULT_LOCALE;

  for (const { language } of parseAcceptLanguage(acceptLanguage)) {
    if (language === "fr" || language.startsWith("fr-")) return "fr";
    if (language === "en" || language.startsWith("en-")) return "en";
  }

  return DEFAULT_LOCALE;
}

export function localizePath(pathname: string, locale: Locale): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const withoutLocale = normalized.replace(/^\/(?:en|fr)(?=\/|$)/, "");
  const suffix = withoutLocale === "" || withoutLocale === "/" ? "" : withoutLocale;
  return `/${locale}${suffix}`;
}
