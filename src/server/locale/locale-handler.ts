import { LOCALE_COOKIE, isLocale } from "@/i18n/config";

function invalidRequest(): Response {
  return Response.json(
    { ok: false, error: "invalid_request" },
    { status: 400, headers: { "cache-control": "no-store" } },
  );
}

export async function handleLocaleRequest(
  request: Request,
  secureCookie: boolean,
): Promise<Response> {
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return invalidRequest();
  }

  try {
    const body = (await request.json()) as { locale?: unknown };
    if (!isLocale(body.locale)) return invalidRequest();

    const cookie = [
      `${LOCALE_COOKIE}=${body.locale}`,
      "Path=/",
      "Max-Age=31536000",
      "HttpOnly",
      "SameSite=Lax",
      ...(secureCookie ? ["Secure"] : []),
    ].join("; ");

    return new Response(null, {
      status: 204,
      headers: {
        "cache-control": "no-store",
        "set-cookie": cookie,
      },
    });
  } catch {
    return invalidRequest();
  }
}
