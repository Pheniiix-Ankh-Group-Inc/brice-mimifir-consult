import { handleContact } from "./_lib/security";

export const config = { runtime: "edge" };

/**
 * Vercel Function: POST /api/contact
 * Requires RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.
 */
export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return json({ ok: false, error: "method_not_allowed" }, 405, { Allow: "POST" });
  }
  if (!(request.headers.get("content-type") ?? "").includes("application/json")) {
    return json({ ok: false, error: "invalid_request" }, 400);
  }

  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return json({ ok: false, error: "invalid_request" }, 400);
      }
    } catch {
      return json({ ok: false, error: "invalid_request" }, 400);
    }
  }

  const raw = await request.text();
  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process
    ?.env;
  const result = await handleContact(raw, {
    RESEND_API_KEY: env?.["RESEND_API_KEY"],
    CONTACT_TO_EMAIL: env?.["CONTACT_TO_EMAIL"],
    CONTACT_FROM_EMAIL: env?.["CONTACT_FROM_EMAIL"],
  });

  return json(result.body, result.status);
}

function json(body: unknown, status: number, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...headers },
  });
}
