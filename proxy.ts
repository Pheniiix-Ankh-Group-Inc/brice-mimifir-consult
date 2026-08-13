import { NextResponse, type NextRequest } from "next/server";

import { LOCALE_COOKIE, isLocale, localizePath, resolveLocale } from "@/i18n/config";

function shouldBypass(pathname: string): boolean {
  return (
    pathname.startsWith("/api/") ||
    pathname === "/api" ||
    pathname.startsWith("/_next/") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/favicon.ico" ||
    /\/[^/]+\.[^/]+$/.test(pathname)
  );
}

export function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  if (shouldBypass(pathname)) return NextResponse.next();

  const firstSegment = pathname.split("/")[1];
  if (isLocale(firstSegment)) return NextResponse.next();

  const locale = resolveLocale(
    request.cookies.get(LOCALE_COOKIE)?.value,
    request.headers.get("accept-language"),
  );
  const destination = request.nextUrl.clone();
  destination.pathname = localizePath(pathname, locale);
  return NextResponse.redirect(destination, 307);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
