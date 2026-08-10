import { Carousel } from "@/components/Carousel";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Challenge() {
  const { t } = useLanguage();
  const c = t.challenge;

  return (
    <section id="challenge" className="section-y bg-soft-white">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brass">{c.eyebrow}</p>
          <h2 className="display-2 mt-7 text-midnight">
            {c.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="body-lg measure mt-8 text-slate">{c.intro}</p>
        </Reveal>

        <div className="mt-16 lg:mt-20">
          <Carousel label={c.carouselLabel} count={c.slides.length}>
            {c.slides.map((slide) => (
              <article
                key={slide.number}
                className="w-[86%] shrink-0 snap-start border-t border-border-light pt-7 sm:w-[70%] lg:w-[calc(50%-16px)]"
              >
                <p className="text-[12px] font-semibold tracking-[0.2em] text-brass">
                  {slide.number}
                </p>
                <h3 className="display-3 mt-5 text-midnight">{slide.title}</h3>
                <p className="mt-5 text-slate">{slide.body}</p>
              </article>
            ))}
          </Carousel>
        </div>

        <Reveal className="mt-16 border-t border-border-light pt-10 lg:mt-24">
          <p className="display-3 measure text-midnight">{c.conclusion}</p>
        </Reveal>
      </div>
    </section>
  );
}
