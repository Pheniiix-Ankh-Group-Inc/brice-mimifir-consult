import { handleLocaleRequest } from "@/server/locale/locale-handler";

export const dynamic = "force-dynamic";

export function POST(request: Request): Promise<Response> {
  const secureCookie =
    process.env.NODE_ENV === "production" || process.env["VERCEL_ENV"] === "production";
  return handleLocaleRequest(request, secureCookie);
}
