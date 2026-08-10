import { SITE, HERO_IMAGE } from "@/content/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { scrollToSection } from "@/lib/scroll";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="bg-midnight text-ivory">
      <div className="flex min-h-[100svh] flex-col lg:flex-row">
        <div className="flex w-full flex-col justify-end px-[var(--gutter)] pt-32 pb-14 lg:w-[56%] lg:justify-center lg:pt-28 lg:pb-24">
          <div className="mx-auto w-full max-w-[720px]">
            <p className="eyebrow text-brass">{t.hero.eyebrow}</p>
            <h1 className="display-1 mt-7">
              {t.hero.headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <div className="rule-brass my-9" />
            <p className="body-lg measure text-ivory/80">{t.hero.body}</p>

            <div className="mt-10">
              <button
                type="button"
                onClick={() => scrollToSection("contact", "#contact-name")}
                className="link-editorial text-ivory"
              >
                {t.hero.cta}
                <span aria-hidden="true">↘</span>
              </button>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
              <p className="text-[12px] tracking-[0.18em] text-ivory/60 uppercase">
                {t.hero.location}
              </p>
              <div className="flex items-center gap-5 text-[13px]">
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-11 border-b border-brass/50 leading-[44px] hover:text-brass"
                >
                  {t.common.linkedin}
                  <span className="sr-only"> ({t.common.newTab})</span>
                </a>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-11 border-b border-brass/50 leading-[44px] hover:text-brass"
                >
                  {t.common.instagram}
                  <span className="sr-only"> ({t.common.newTab})</span>
                </a>
              </div>
              <p
                aria-hidden="true"
                className="text-[11px] tracking-[0.24em] text-ivory/40 uppercase"
              >
                {t.hero.scroll} ↓
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[44%]">
          {/* Temporary editorial photograph — replace the file at this path with the final portrait. */}
          <img
            src={HERO_IMAGE}
            alt={t.hero.imageAlt}
            width={1024}
            height={1536}
            fetchPriority="high"
            className="aspect-[4/5] h-full w-full object-cover lg:aspect-auto lg:min-h-[100svh]"
          />
        </div>
      </div>
    </section>
  );
}
