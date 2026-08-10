import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { EXPERIENCE_IMAGE } from "@/content/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Experience() {
  const { t } = useLanguage();
  const e = t.experience;
  const [technicalOpen, setTechnicalOpen] = useState(false);

  return (
    <section id="experience" className="section-y bg-ivory">
      <div className="shell">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="eyebrow text-brass">{e.eyebrow}</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="display-2 text-midnight">{e.headline}</h2>
            <div className="rule-brass my-9" />
            <div className="measure space-y-6 text-slate">
              {e.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="body-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-10 border-l border-brass pl-5 text-[15px]">
              {e.signature.map((line, i) => (
                <p key={line} className={i === 0 ? "font-semibold text-midnight" : "text-slate"}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16 lg:mt-24">
          {/* Temporary editorial photograph — replace with the final working photograph. */}
          <img
            src={EXPERIENCE_IMAGE}
            alt={e.imageAlt}
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover lg:aspect-[16/7]"
          />
        </Reveal>

        <Reveal className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="eyebrow text-brass">{e.caseStudy.eyebrow}</p>
          </div>
          <div className="lg:col-span-8">
            <h3 className="display-3 text-midnight">{e.caseStudy.headline}</h3>
            <div className="measure mt-7 space-y-6 text-slate">
              {e.caseStudy.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-border-light pt-8">
          <h3>
            <button
              type="button"
              onClick={() => setTechnicalOpen((open) => !open)}
              aria-expanded={technicalOpen}
              aria-controls="technical-context"
              className="link-editorial text-midnight"
            >
              {e.technical.label}
              <span aria-hidden="true">{technicalOpen ? "−" : "+"}</span>
            </button>
          </h3>
          <div id="technical-context" hidden={!technicalOpen} className="pt-8">
            <p className="measure text-slate">{e.technical.intro}</p>
            <dl className="mt-8 grid gap-8 sm:grid-cols-2">
              {e.technical.groups.map((group) => (
                <div key={group.title}>
                  <dt className="eyebrow text-midnight">{group.title}</dt>
                  <dd className="mt-3 text-slate">{group.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 border-t border-border-light pt-8">
          <p className="eyebrow text-muted">{e.beyond.label}</p>
          <p className="measure mt-4 text-slate">{e.beyond.body}</p>
        </div>
      </div>
    </section>
  );
}
