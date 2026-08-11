import { Link, useNavigate } from "@tanstack/react-router";

import { InstagramIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { SITE } from "@/content/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { scrollToSection } from "@/lib/scroll";
import { LanguageToggle } from "./LanguageToggle";

export function Footer() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const go = (id: string) => {
    if (!scrollToSection(id)) void navigate({ to: "/", hash: id });
  };

  return (
    <footer className="bg-deep-midnight text-ivory">
      <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-5">
          <p className="text-[15px] font-semibold tracking-[0.24em] uppercase">{t.brand.name}</p>
          <p className="mt-2 text-[12px] tracking-[0.14em] text-ivory/60 uppercase">
            {t.brand.tagline}
          </p>
          <div className="rule-brass my-7" />
          <p className="measure text-ivory/80">{t.footer.statement}</p>
        </div>

        <nav aria-label={t.footer.navLabel} className="lg:col-span-3">
          <ul className="space-y-3">
            {t.nav.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => go(item.id)}
                  className="min-h-11 border-b border-transparent text-[15px] text-ivory/80 transition-colors duration-200 hover:border-brass hover:text-ivory"
                >
                  {item.short}
                </button>
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
                className="flex h-11 w-11 items-center justify-center text-ivory/80 transition-colors duration-200 hover:text-brass"
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.common.linkedin}
              >
                <LinkedInIcon />
                <span className="sr-only"> ({t.common.newTab})</span>
              </a>
            </li>
            <li>
              <a
                className="flex h-11 w-11 items-center justify-center text-ivory/80 transition-colors duration-200 hover:text-brass"
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.common.instagram}
              >
                <InstagramIcon />
                <span className="sr-only"> ({t.common.newTab})</span>
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <LanguageToggle tone="dark" />
          </div>
        </div>
      </div>

      <div className="border-t border-border-dark/60">
        <div className="shell flex flex-col gap-4 py-6 text-[13px] text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright(year)}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="min-h-11 leading-[44px] hover:text-brass">
              {t.footer.privacy}
            </Link>
            <Link to="/accessibility" className="min-h-11 leading-[44px] hover:text-brass">
              {t.footer.accessibility}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
