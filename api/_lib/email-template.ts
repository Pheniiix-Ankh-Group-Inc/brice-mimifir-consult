import { escapeHtml, normalize, type ContactRequest } from "./contact-schema";

export function buildSubject(name: string): string {
  return `New website inquiry — ${normalize(name)}`;
}

export function buildText(data: ContactRequest): string {
  return [
    `Name: ${normalize(data.name)}`,
    `Email: ${normalize(data.email)}`,
    `Organization: ${normalize(data.organization ?? "") || "—"}`,
    `Language: ${data.locale.toUpperCase()}`,
    `Submission: ${data.submissionId}`,
    "",
    "Message:",
    normalize(data.message),
  ].join("\n");
}

export function buildHtml(data: ContactRequest): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#55616b;">${escapeHtml(label)}</td><td style="padding:4px 0;color:#101e2d;">${escapeHtml(value)}</td></tr>`;

  return [
    '<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#101e2d;">',
    '<h1 style="font-size:18px;margin:0 0 16px;">New website inquiry</h1>',
    "<table>",
    row("Name", normalize(data.name)),
    row("Email", normalize(data.email)),
    row("Organization", normalize(data.organization ?? "") || "—"),
    row("Language", data.locale.toUpperCase()),
    row("Submission", data.submissionId),
    "</table>",
    '<p style="margin:16px 0 4px;color:#55616b;">Message</p>',
    `<p style="white-space:pre-wrap;margin:0;">${escapeHtml(normalize(data.message))}</p>`,
    "</div>",
  ].join("");
}
