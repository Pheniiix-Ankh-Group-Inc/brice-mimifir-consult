export type SiteEnvironment = {
  [key: string]: string | undefined;
  SITE_URL?: string | undefined;
  VERCEL_ENV?: string | undefined;
  VERCEL_PROJECT_PRODUCTION_URL?: string | undefined;
  VERCEL_URL?: string | undefined;
};

function parsePublicUrl(value: string, variableName: string): URL {
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error(`${variableName} must be a valid absolute URL`);
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error(`${variableName} must use http or https`);
  }

  return new URL(parsed.origin);
}

export function getSiteUrl(env: SiteEnvironment): URL {
  if (env.SITE_URL) return parsePublicUrl(env.SITE_URL, "SITE_URL");

  if (env.VERCEL_ENV === "production" && env.VERCEL_PROJECT_PRODUCTION_URL) {
    return parsePublicUrl(
      `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`,
      "VERCEL_PROJECT_PRODUCTION_URL",
    );
  }

  if (env.VERCEL_URL) {
    return parsePublicUrl(`https://${env.VERCEL_URL}`, "VERCEL_URL");
  }

  if (env.VERCEL_PROJECT_PRODUCTION_URL) {
    return parsePublicUrl(
      `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`,
      "VERCEL_PROJECT_PRODUCTION_URL",
    );
  }

  return new URL("http://localhost:3000");
}
