import type { MetadataRoute } from "next";

import { getSiteUrl, type SiteEnvironment } from "@/lib/site-url";

export function buildRobots(env: SiteEnvironment): MetadataRoute.Robots {
  if (env.VERCEL_ENV !== "production") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  const siteUrl = getSiteUrl(env);
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}

export default function robots(): MetadataRoute.Robots {
  return buildRobots(process.env);
}
