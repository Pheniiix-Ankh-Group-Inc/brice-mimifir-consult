import { buildHtml, buildSubject, buildText } from "./email-template";
import type { ContactRequest, HandlerResult } from "./schema";

export type ContactEnvironment = {
  [key: string]: string | undefined;
  RESEND_API_KEY?: string | undefined;
  CONTACT_TO_EMAIL?: string | undefined;
  CONTACT_FROM_EMAIL?: string | undefined;
};

export type ContactFetch = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;

type DeliveryOptions = {
  fetchImpl?: ContactFetch;
  timeoutMs?: number;
  logger?: Pick<Console, "error">;
};

export async function deliverContact(
  data: ContactRequest,
  env: ContactEnvironment,
  options: DeliveryOptions = {},
): Promise<HandlerResult> {
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = env;
  const logger = options.logger ?? console;

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    logger.error("contact_unavailable", {
      status: 503,
      submissionId: data.submissionId,
    });
    return { status: 503, body: { ok: false, error: "unavailable" } };
  }

  try {
    const response = await (options.fetchImpl ?? fetch)("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
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
      signal: AbortSignal.timeout(options.timeoutMs ?? 10_000),
    });

    if (!response.ok) {
      logger.error("contact_delivery_failed", {
        status: response.status,
        submissionId: data.submissionId,
      });
      return { status: 502, body: { ok: false, error: "delivery_failed" } };
    }
  } catch {
    logger.error("contact_delivery_error", {
      status: 502,
      submissionId: data.submissionId,
    });
    return { status: 502, body: { ok: false, error: "delivery_failed" } };
  }

  return { status: 200, body: { ok: true } };
}
