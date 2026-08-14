import Link from "next/link";

import { InstagramIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { SITE } from "@/content/site";
import type { Content } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { BrandLogo } from "./BrandLogo";
import { LanguageToggle } from "./LanguageToggle";

export function Footer({ locale, t }: { locale: Locale; t: Content }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep-midnight text-ivory">
      <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-5">
          <Link href={`/${locale}`} className="inline-block" aria-label={t.brand.name}>
            <BrandLogo alt="" className="h-16 w-16" />
          </Link>
          <p className="mt-2 text-[12px] tracking-[0.14em] text-ivory/60 uppercase">
            {t.brand.title}
          </p>
          <div className="rule-brass my-7" />
          <p className="measure text-ivory/80">{t.footer.statement}</p>
          <p className="measure mt-6 text-[13px] leading-relaxed text-ivory/60">
            {t.footer.legalNote}
          </p>
        </div>

        <nav aria-label={t.footer.navLabel} className="lg:col-span-3">
          <ul className="space-y-3">
            {t.nav.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/${locale}#${item.id}`}
                  className="inline-flex min-h-11 items-center border-b border-transparent text-[15px] text-ivory/80 transition-colors duration-200 hover:border-brass hover:text-ivory"
                >
                  {item.short}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="eyebrow text-brass">{t.footer.connectLabel}</h2>
          <ul className="mt-5 space-y-3 text-[15px] text-ivory/80">
            <li>{t.common.location}</li>
            <li>
              <a
                className="border-b border-brass/50 hover:text-brass"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>
            </li>
          </ul>
          <ul className="mt-4 flex items-center gap-2">
            <li>
              <a
                className="flex h-11 w-11 items-center justify-center text-ivory transition-colors duration-200 hover:text-brass focus-visible:text-brass"
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.common.linkedinLabel}
              >
                <LinkedInIcon />
                <span className="sr-only"> ({t.common.newTab})</span>
              </a>
            </li>
            <li>
              <a
                className="flex h-11 w-11 items-center justify-center text-ivory transition-colors duration-200 hover:text-brass focus-visible:text-brass"
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.common.instagramLabel}
              >
                <InstagramIcon />
                <span className="sr-only"> ({t.common.newTab})</span>
              </a>
            </li>
            <li>
              <a
                className="flex min-h-11 items-center border-b border-brass/50 text-[13px] hover:text-brass"
                href={SITE.anbachain}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.common.anbachain}
                <span className="sr-only"> ({t.common.newTab})</span>
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <LanguageToggle locale={locale} label={t.common.language} tone="dark" />
          </div>
        </div>
      </div>

      <div className="border-t border-border-dark/60">
        <div className="shell flex flex-col gap-4 py-6 text-[13px] text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright(year)}</p>
          <div className="flex gap-6">
            <Link href={`/${locale}/privacy`} className="min-h-11 leading-[44px] hover:text-brass">
              {t.footer.privacy}
            </Link>
            <Link
              href={`/${locale}/accessibility`}
              className="min-h-11 leading-[44px] hover:text-brass"
            >
              {t.footer.accessibility}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
