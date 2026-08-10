import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { useLanguage } from "@/i18n/LanguageProvider";

export function PageShell({
  children,
  overlay = false,
}: {
  children: ReactNode;
  overlay?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-soft-white">
      <a
        href="#main"
        className="sr-only bg-midnight px-4 py-3 text-ivory focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50"
      >
        {t.common.skipToContent}
      </a>
      <Header overlay={overlay} />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
