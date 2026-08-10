import { z } from "zod";

export const contactSchema = z.object({
  submissionId: z.string().uuid(),
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  organization: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(20).max(2000),
  consent: z.literal(true),
  website: z.literal("").optional(),
  formStartedAt: z.number().int().positive(),
  locale: z.enum(["en", "fr"]),
});

export type ContactRequest = z.infer<typeof contactSchema>;

/** Submissions faster than this are treated as automated. */
export const MIN_FILL_MS = 2500;

export const MAX_BODY_BYTES = 16_000;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Strip control characters that could be used for header injection. */
export function normalize(value: string): string {
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").trim();
}
