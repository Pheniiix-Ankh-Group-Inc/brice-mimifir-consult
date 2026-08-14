"use client";

import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import type { CaseStudy, Content, TechnicalGroup } from "@/content/types";

type ExperienceContent = Content["experience"];
type LayoutVariant = "desktop" | "mobile";

function TechnicalGroups({ groups }: { groups: TechnicalGroup[] }) {
  return (
    <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <div key={group.title}>
          <dt className="eyebrow text-midnight">{group.title}</dt>
          <dd className="mt-4 text-[15px] text-slate">{group.items.join(" · ")}</dd>
        </div>
      ))}
    </dl>
  );
}

function CaseStudyBody({
  caseStudy,
  technicalLabel,
  technicalHideLabel,
  technicalOpen,
  onTechnicalToggle,
  variant,
}: {
  caseStudy: CaseStudy;
  technicalLabel: string;
  technicalHideLabel: string;
  technicalOpen: boolean;
  onTechnicalToggle: () => void;
  variant: LayoutVariant;
}) {
  const technicalId = `experience-${variant}-${caseStudy.id}-technical`;

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-4">
        <p className="eyebrow text-brass">{caseStudy.eyebrow}</p>
        <p className="mt-5 text-[14px] leading-relaxed text-muted">{caseStudy.meta}</p>
      </div>

      <article className="lg:col-span-8">
        <h3 className="display-3 text-midnight">{caseStudy.headline}</h3>
        <div className="measure mt-7 text-slate">
          <p>
            <strong className="font-semibold text-midnight">{caseStudy.contextLabel} :</strong>{" "}
            {caseStudy.context}
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {caseStudy.sections.map((section) => (
            <section key={section.title} className="border-t border-border-light pt-7">
              <h4 className="eyebrow text-midnight">{section.title}</h4>
              <div className="measure mt-5 space-y-5 text-slate">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {caseStudy.indicators && (
          <div className="mt-10 border-t border-border-light pt-7">
            <h4 className="eyebrow text-brass">{caseStudy.indicators.label}</h4>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {caseStudy.indicators.items.map((item) => (
                <li key={item} className="border-l border-brass pl-4 text-[15px] text-slate">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="measure mt-10 border-t border-border-light pt-7 text-slate">
          <p>
            <strong className="font-semibold text-midnight">{caseStudy.conclusionLabel} :</strong>{" "}
            {caseStudy.conclusion}
          </p>
        </div>

        <div className="mt-10 border-t border-border-light pt-7">
          <h4>
            <button
              type="button"
              onClick={onTechnicalToggle}
              aria-expanded={technicalOpen}
              aria-controls={technicalId}
              className="link-editorial text-midnight"
            >
              {technicalOpen ? technicalHideLabel : technicalLabel}
              <span aria-hidden="true">{technicalOpen ? "−" : "+"}</span>
            </button>
          </h4>
          <div id={technicalId} hidden={!technicalOpen} className="pt-8">
            <p className="measure text-slate">{caseStudy.technical.intro}</p>
            <TechnicalGroups groups={caseStudy.technical.groups} />
          </div>
        </div>
      </article>
    </div>
  );
}

export function Experience({ experience }: { experience: ExperienceContent }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openMobile, setOpenMobile] = useState<string | null>(
    experience.caseStudies[0]?.id ?? null,
  );
  const [technicalOpen, setTechnicalOpen] = useState<Record<string, boolean>>({});
  const [complementaryOpen, setComplementaryOpen] = useState(false);

  function toggleTechnical(key: string) {
    setTechnicalOpen((current) => ({ ...current, [key]: !current[key] }));
  }

  function onTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = experience.caseStudies.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    setActiveIndex(next);
    document.getElementById(`experience-tab-${experience.caseStudies[next]!.id}`)?.focus();
  }

  return (
    <section id="experience" className="section-y bg-ivory">
      <div className="shell">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="eyebrow text-brass">{experience.eyebrow}</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="display-2 text-midnight">{experience.headline}</h2>
            <div className="rule-brass my-9" />
            <p className="body-lg measure text-slate">{experience.intro}</p>
          </div>
        </Reveal>

        <div className="mt-16 hidden lg:block lg:mt-24">
          <div
            role="tablist"
            aria-label={experience.tablistLabel}
            className="flex flex-wrap gap-10 border-b border-border-light"
          >
            {experience.caseStudies.map((caseStudy, index) => (
              <button
                key={caseStudy.id}
                id={`experience-tab-${caseStudy.id}`}
                role="tab"
                type="button"
                aria-selected={activeIndex === index}
                aria-controls={`experience-panel-${caseStudy.id}`}
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`-mb-px min-h-11 border-b-2 pb-4 text-[13px] font-semibold tracking-[0.18em] uppercase transition-colors duration-200 ${
                  activeIndex === index
                    ? "border-brass text-midnight"
                    : "border-transparent text-muted hover:text-midnight"
                }`}
              >
                {caseStudy.tab}
              </button>
            ))}
          </div>

          {experience.caseStudies.map((caseStudy, index) => {
            const technicalKey = `desktop:${caseStudy.id}`;
            return (
              <div
                key={caseStudy.id}
                id={`experience-panel-${caseStudy.id}`}
                role="tabpanel"
                aria-labelledby={`experience-tab-${caseStudy.id}`}
                hidden={activeIndex !== index}
                tabIndex={0}
                className="pt-12"
              >
                <CaseStudyBody
                  caseStudy={caseStudy}
                  technicalLabel={experience.technicalLabel}
                  technicalHideLabel={experience.technicalHideLabel}
                  technicalOpen={Boolean(technicalOpen[technicalKey])}
                  onTechnicalToggle={() => toggleTechnical(technicalKey)}
                  variant="desktop"
                />
              </div>
            );
          })}
        </div>

        <div className="mt-12 border-t border-border-light lg:hidden">
          {experience.caseStudies.map((caseStudy) => {
            const open = openMobile === caseStudy.id;
            const technicalKey = `mobile:${caseStudy.id}`;
            const panelId = `experience-mobile-panel-${caseStudy.id}`;
            return (
              <div key={caseStudy.id} className="border-b border-border-light">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenMobile(open ? null : caseStudy.id)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left text-[13px] font-semibold tracking-[0.18em] text-midnight uppercase"
                  >
                    {caseStudy.tab}
                    <span aria-hidden="true" className="text-brass">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div id={panelId} hidden={!open} className="py-10">
                  <CaseStudyBody
                    caseStudy={caseStudy}
                    technicalLabel={experience.technicalLabel}
                    technicalHideLabel={experience.technicalHideLabel}
                    technicalOpen={Boolean(technicalOpen[technicalKey])}
                    onTechnicalToggle={() => toggleTechnical(technicalKey)}
                    variant="mobile"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 border-t border-border-light pt-8 lg:mt-24">
          <h3>
            <button
              type="button"
              onClick={() => setComplementaryOpen((open) => !open)}
              aria-expanded={complementaryOpen}
              aria-controls="experience-complementary"
              className="link-editorial text-midnight"
            >
              {complementaryOpen
                ? experience.complementary.hideLabel
                : experience.complementary.label}
              <span aria-hidden="true">{complementaryOpen ? "−" : "+"}</span>
            </button>
          </h3>
          <div id="experience-complementary" hidden={!complementaryOpen} className="pt-8">
            <p className="measure text-slate">{experience.complementary.intro}</p>
            <TechnicalGroups groups={experience.complementary.groups} />
            <p className="measure mt-10 border-l border-brass pl-5 text-[14px] text-muted">
              {experience.complementary.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
