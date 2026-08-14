import type { ReactNode } from "react";

import type { Content } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function PageShell({
  children,
  locale,
  t,
  overlay = false,
}: {
  children: ReactNode;
  locale: Locale;
  t: Content;
  overlay?: boolean;
}) {
  return (
    <div className="min-h-screen bg-soft-white">
      <a
        href="#main"
        className="sr-only bg-midnight px-4 py-3 text-ivory focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60]"
      >
        {t.common.skipToContent}
      </a>
      <Header
        locale={locale}
        t={{ brand: t.brand, common: t.common, nav: t.nav }}
        overlay={overlay}
      />
      <main id="main">{children}</main>
      <Footer locale={locale} t={t} />
    </div>
  );
}
