import { deliverContact, type ContactEnvironment, type ContactFetch } from "./contact-service";
import { contactSchema, MAX_BODY_BYTES, MIN_FILL_MS, type ContactErrorCode } from "./schema";

type ContactDependencies = {
  env: ContactEnvironment;
  fetchImpl?: ContactFetch;
  now?: () => number;
  timeoutMs?: number;
  logger?: Pick<Console, "error">;
};

function json(
  body: { ok: true } | { ok: false; error: ContactErrorCode },
  status: number,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "cache-control": "no-store",
      "content-type": "application/json; charset=utf-8",
    },
  });
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const requestUrl = new URL(request.url);
  const expectedHost =
    request.headers.get("x-forwarded-host")?.split(",")[0]?.trim() ||
    request.headers.get("host") ||
    requestUrl.host;
  const expectedProtocol =
    request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim() ||
    requestUrl.protocol.replace(":", "");

  try {
    return new URL(origin).origin === new URL(`${expectedProtocol}://${expectedHost}`).origin;
  } catch {
    return false;
  }
}

export async function handleContactRequest(
  request: Request,
  dependencies: ContactDependencies,
): Promise<Response> {
  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.includes("application/json")) {
    return json({ ok: false, error: "invalid_request" }, 400);
  }

  if (!isSameOrigin(request)) {
    return json({ ok: false, error: "invalid_request" }, 400);
  }

  try {
    const bodyBuffer = await request.arrayBuffer();
    if (bodyBuffer.byteLength > MAX_BODY_BYTES) {
      return json({ ok: false, error: "payload_too_large" }, 413);
    }

    let untrusted: unknown;
    try {
      untrusted = JSON.parse(new TextDecoder().decode(bodyBuffer));
    } catch {
      return json({ ok: false, error: "invalid_request" }, 400);
    }

    const parsed = contactSchema.safeParse(untrusted);
    if (!parsed.success) {
      return json({ ok: false, error: "invalid_request" }, 400);
    }

    const now = dependencies.now?.() ?? Date.now();
    if (now - parsed.data.formStartedAt < MIN_FILL_MS) {
      return json({ ok: false, error: "invalid_request" }, 400);
    }

    const result = await deliverContact(parsed.data, dependencies.env, {
      ...(dependencies.fetchImpl !== undefined && { fetchImpl: dependencies.fetchImpl }),
      ...(dependencies.timeoutMs !== undefined && { timeoutMs: dependencies.timeoutMs }),
      ...(dependencies.logger !== undefined && { logger: dependencies.logger }),
    });
    return json(result.body, result.status);
  } catch {
    (dependencies.logger ?? console).error("contact_internal_error", { status: 500 });
    return json({ ok: false, error: "internal_error" }, 500);
  }
}
