import { z } from "zod";

export const MIN_FILL_MS = 2_500;
export const MAX_BODY_BYTES = 16_000;

export const contactSchema = z.object({
  submissionId: z.string().uuid(),
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  organization: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(20).max(2_000),
  consent: z.literal(true),
  website: z.literal("").optional(),
  formStartedAt: z.number().int().positive(),
  locale: z.enum(["en", "fr"]),
});

export type ContactRequest = z.infer<typeof contactSchema>;

export type ContactErrorCode =
  | "invalid_request"
  | "payload_too_large"
  | "rate_limited"
  | "delivery_failed"
  | "unavailable"
  | "internal_error";

export type HandlerResult =
  | { status: 200; body: { ok: true } }
  | {
      status: 400 | 413 | 500 | 502 | 503;
      body: { ok: false; error: ContactErrorCode };
    };
