import { contactSchema, MIN_FILL_MS, MAX_BODY_BYTES, type ContactRequest } from "./contact-schema";
import { buildHtml, buildSubject, buildText } from "./email-template";

export type HandlerResult = { status: number; body: Record<string, unknown> };

export type Env = {
  RESEND_API_KEY: string | undefined;
  CONTACT_TO_EMAIL: string | undefined;
  CONTACT_FROM_EMAIL: string | undefined;
};

/**
 * Shared contact handling used by both the Vercel function (`api/contact.ts`)
 * and the local dev/preview server route. Never returns a success result
 * unless Resend actually accepted the message.
 */
export async function handleContact(
  rawBody: string,
  env: Env,
  fetchImpl: typeof fetch = fetch,
): Promise<HandlerResult> {
  if (rawBody.length > MAX_BODY_BYTES) {
    return { status: 400, body: { ok: false, error: "invalid_request" } };
  }

  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(rawBody);
  } catch {
    return { status: 400, body: { ok: false, error: "invalid_request" } };
  }

  const parsed = contactSchema.safeParse(parsedJson);
  if (!parsed.success) {
    return { status: 400, body: { ok: false, error: "invalid_request" } };
  }

  const data: ContactRequest = parsed.data;

  if (data.website) {
    return { status: 400, body: { ok: false, error: "invalid_request" } };
  }
  if (Date.now() - data.formStartedAt < MIN_FILL_MS) {
    return { status: 400, body: { ok: false, error: "invalid_request" } };
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error("contact: email delivery is not configured");
    return { status: 503, body: { ok: false, error: "unavailable" } };
  }

  try {
    const response = await fetchImpl("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
        // Idempotency avoids duplicate emails when a retry occurs.
        "Idempotency-Key": data.submissionId,
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: data.email,
        subject: buildSubject(data.name),
        text: buildText(data),
        html: buildHtml(data),
      }),
    });

    if (!response.ok) {
      console.error(`contact: delivery failed with status ${response.status}`);
      return { status: 502, body: { ok: false, error: "delivery_failed" } };
    }
  } catch (error) {
    console.error("contact: delivery error", error instanceof Error ? error.message : "unknown");
    return { status: 500, body: { ok: false, error: "delivery_failed" } };
  }

  return { status: 200, body: { ok: true } };
}
