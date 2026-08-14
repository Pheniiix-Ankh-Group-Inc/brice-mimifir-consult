import type { Metadata } from "next";

import type { Locale } from "@/i18n/config";
import { getSiteUrl, type SiteEnvironment } from "./site-url";

export type LocalizedPagePath = "" | "/privacy" | "/accessibility";

export function buildLocalizedMetadata({
  locale,
  path,
  title,
  description,
  openGraphTitle = title,
  openGraphDescription = description,
  type = "website",
  env = process.env,
}: {
  locale: Locale;
  path: LocalizedPagePath;
  title: string;
  description: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  type?: "website" | "article";
  env?: SiteEnvironment;
}): Metadata {
  const siteUrl = getSiteUrl(env);
  const localized = (targetLocale: Locale) =>
    new URL(`/${targetLocale}${path}`, siteUrl).toString();
  const canonical = localized(locale);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: localized("en"),
        fr: localized("fr"),
        "x-default": new URL(path || "/", siteUrl).toString(),
      },
    },
    openGraph: {
      title: openGraphTitle,
      description: openGraphDescription,
      url: canonical,
      siteName: "Brice MIMIFIR",
      locale: locale === "fr" ? "fr_CA" : "en_CA",
      alternateLocale: [locale === "fr" ? "en_CA" : "fr_CA"],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description: openGraphDescription,
    },
  };
}

export function isIndexableEnvironment(env: SiteEnvironment): boolean {
  return env.VERCEL_ENV === "production";
}
