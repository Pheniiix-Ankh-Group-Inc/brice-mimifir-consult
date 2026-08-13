"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { en } from "@/content/en";
import { fr } from "@/content/fr";

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
  const content = locale === "fr" ? fr.notFound : en.notFound;

  return (
    <main className="flex min-h-screen items-center justify-center bg-soft-white px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-brass">404</p>
        <h1 className="display-2 mt-5 text-midnight">{content.title}</h1>
        <p className="mt-5 text-slate">{content.body}</p>
        <div className="mt-8">
          <Link href={`/${locale}`} className="link-editorial text-midnight">
            {content.cta}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
