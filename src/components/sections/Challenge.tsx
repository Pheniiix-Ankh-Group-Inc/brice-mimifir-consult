import { Carousel } from "@/components/Carousel";
import { Reveal } from "@/components/Reveal";
import type { Content } from "@/content/types";

export function Challenge({
  challenge,
  common,
}: {
  challenge: Content["challenge"];
  common: Content["common"];
}) {
  return (
    <section id="challenge" className="section-y bg-soft-white">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brass">{challenge.eyebrow}</p>
          <h2 className="display-2 mt-7 text-midnight">
            {challenge.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          {challenge.intro && <p className="body-lg measure mt-8 text-slate">{challenge.intro}</p>}
        </Reveal>

        <div className="mt-16 lg:mt-20">
          <Carousel
            label={challenge.carouselLabel}
            count={challenge.slides.length}
            previousLabel={common.previous}
            nextLabel={common.next}
            ofLabel={common.of}
          >
            {challenge.slides.map((slide) => (
              <article
                key={slide.number}
                className="w-[86%] shrink-0 snap-start border-t border-border-light pt-7 sm:w-[70%] lg:w-[calc(50%-16px)]"
              >
                <p className="text-[12px] font-semibold tracking-[0.2em] text-brass">
                  {slide.number}
                </p>
                <h3 className="display-3 mt-5 text-midnight">{slide.title}</h3>
                <div className="mt-5 space-y-4 text-slate">
                  <p>
                    <strong className="font-semibold text-midnight">
                      {challenge.findingLabel} :
                    </strong>{" "}
                    {slide.finding}
                  </p>
                  <p>
                    <strong className="font-semibold text-midnight">
                      {challenge.impactLabel} :
                    </strong>{" "}
                    {slide.impact}
                  </p>
                </div>
              </article>
            ))}
          </Carousel>
        </div>

        {challenge.conclusion && (
          <Reveal className="mt-16 border-t border-border-light pt-10 lg:mt-24">
            <p className="display-3 measure text-midnight">{challenge.conclusion}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
