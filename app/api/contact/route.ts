import { handleContactRequest } from "@/server/contact/contact-handler";

export async function POST(request: Request): Promise<Response> {
  return handleContactRequest(request, {
    env: process.env,
    fetchImpl: fetch,
  });
}
