"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { en } from "@/content/en";
import { fr } from "@/content/fr";

export default function LocalizedError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  const french = pathname === "/fr" || pathname.startsWith("/fr/");
  const content = french ? fr.generalError : en.generalError;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-soft-white px-4">
      <div className="max-w-md text-center">
        <h1 className="display-3 text-midnight">{content.title}</h1>
        <p className="mt-4 text-slate">{content.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <button type="button" onClick={reset} className="link-editorial text-midnight">
            {content.retry}
          </button>
          <Link href={french ? "/fr" : "/en"} className="link-editorial text-midnight">
            {content.home}
          </Link>
        </div>
      </div>
    </main>
  );
}
