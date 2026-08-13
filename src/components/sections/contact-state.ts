import type { ContactErrorCode } from "@/server/contact/schema";

export type SubmissionIdentity = {
  submissionId: string;
  formStartedAt: number;
};

type CryptoLike = {
  randomUUID: () => string;
};

export function createSubmissionIdentity(
  cryptoLike: CryptoLike | undefined,
  now: () => number,
): SubmissionIdentity | null {
  if (!cryptoLike || typeof cryptoLike.randomUUID !== "function") return null;

  try {
    return {
      submissionId: cryptoLike.randomUUID(),
      formStartedAt: now(),
    };
  } catch {
    return null;
  }
}

export function retainOrRenewIdentity(
  current: SubmissionIdentity,
  delivered: boolean,
  cryptoLike: CryptoLike | undefined,
  now: () => number,
): SubmissionIdentity | null {
  return delivered ? createSubmissionIdentity(cryptoLike, now) : current;
}

export type ContactOutcome = "success" | ContactErrorCode;

export function interpretContactResponse(status: number, payload: unknown): ContactOutcome {
  if (status === 429) return "rate_limited";
  if (
    status === 200 &&
    payload !== null &&
    typeof payload === "object" &&
    "ok" in payload &&
    payload.ok === true
  ) {
    return "success";
  }
  if (status === 400 || status === 413) return "invalid_request";
  if (status === 502) return "delivery_failed";
  if (status === 503) return "unavailable";
  return "internal_error";
}
