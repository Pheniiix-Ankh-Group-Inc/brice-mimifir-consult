import type { MetadataRoute } from "next";

import { getSiteUrl, type SiteEnvironment } from "@/lib/site-url";

const pagePaths = ["", "/privacy", "/accessibility"] as const;

export function buildSitemap(env: SiteEnvironment): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl(env);
  return pagePaths.flatMap((path) => {
    const languages = {
      en: new URL(`/en${path}`, siteUrl).toString(),
      fr: new URL(`/fr${path}`, siteUrl).toString(),
    };
    return (["en", "fr"] as const).map((locale) => ({
      url: languages[locale],
      changeFrequency: path === "" ? ("monthly" as const) : ("yearly" as const),
      priority: path === "" ? 1 : 0.5,
      alternates: { languages },
    }));
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap(process.env);
}
