import type { ContactRequest } from "./schema";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function normalizeHeaderValue(value: string): string {
  // Header fields must never retain CR, LF, or another control character.
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").trim();
}

export function normalizeMessage(value: string): string {
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim();
}

export function buildSubject(name: string): string {
  return `New website inquiry — ${normalizeHeaderValue(name)}`;
}

export function buildText(data: ContactRequest): string {
  return [
    `Name: ${normalizeHeaderValue(data.name)}`,
    `Email: ${normalizeHeaderValue(data.email)}`,
    `Organization: ${normalizeHeaderValue(data.organization ?? "") || "—"}`,
    "Consent: confirmed",
    `Language: ${data.locale.toUpperCase()}`,
    `Submission: ${data.submissionId}`,
    "",
    "Message:",
    normalizeMessage(data.message),
  ].join("\n");
}

export function buildHtml(data: ContactRequest): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#55616b;">${escapeHtml(label)}</td><td style="padding:4px 0;color:#101e2d;">${escapeHtml(value)}</td></tr>`;

  return [
    '<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#101e2d;">',
    '<h1 style="font-size:18px;margin:0 0 16px;">New website inquiry</h1>',
    "<table>",
    row("Name", normalizeHeaderValue(data.name)),
    row("Email", normalizeHeaderValue(data.email)),
    row("Organization", normalizeHeaderValue(data.organization ?? "") || "—"),
    row("Consent", "Confirmed"),
    row("Language", data.locale.toUpperCase()),
    row("Submission", data.submissionId),
    "</table>",
    '<p style="margin:16px 0 4px;color:#55616b;">Message</p>',
    `<p style="white-space:pre-wrap;margin:0;">${escapeHtml(normalizeMessage(data.message))}</p>`,
    "</div>",
  ].join("");
}
