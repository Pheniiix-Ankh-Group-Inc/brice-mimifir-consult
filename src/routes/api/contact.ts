import { createFileRoute } from "@tanstack/react-router";

import { handleContact } from "../../../api/_lib/security";

/**
 * Preview/dev equivalent of the Vercel function in `api/contact.ts`.
 * On Vercel the platform function handles /api/contact instead.
 */
export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        if (!(request.headers.get("content-type") ?? "").includes("application/json")) {
          return json({ ok: false, error: "invalid_request" }, 400);
        }
        const raw = await request.text();
        const env = (globalThis as { process?: { env?: Record<string, string | undefined> } })
          .process?.env;
        const result = await handleContact(raw, {
          RESEND_API_KEY: env?.["RESEND_API_KEY"],
          CONTACT_TO_EMAIL: env?.["CONTACT_TO_EMAIL"],
          CONTACT_FROM_EMAIL: env?.["CONTACT_FROM_EMAIL"],
        });
        return json(result.body, result.status);
      },
      GET: () => json({ ok: false, error: "method_not_allowed" }, 405),
    },
  },
});

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
