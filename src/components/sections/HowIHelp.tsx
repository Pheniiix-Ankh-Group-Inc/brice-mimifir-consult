"use client";

import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import type { Content, HelpStep } from "@/content/types";

function StepBody({ step }: { step: HelpStep }) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-7">
        <h3 className="display-3 text-midnight">{step.headline}</h3>
        <p className="measure mt-7 text-slate">{step.body}</p>
      </div>

      <div className="border-t border-border-light pt-7 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
        <p className="eyebrow text-brass">{step.number}</p>
        <p className="eyebrow mt-7 text-midnight">{step.outcomeLabel}</p>
        <p className="mt-4 text-[15px] text-slate">{step.outcome}</p>
      </div>
    </div>
  );
}

export function HowIHelp({ howIHelp }: { howIHelp: Content["howIHelp"] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openMobile, setOpenMobile] = useState<string | null>(howIHelp.steps[0]?.id ?? null);

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = howIHelp.steps.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    setActiveIndex(next);
    document.getElementById(`help-tab-${howIHelp.steps[next]!.id}`)?.focus();
  };

  return (
    <section id="how-i-help" className="section-y bg-soft-white">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brass">{howIHelp.eyebrow}</p>
          <h2 className="display-2 mt-7 text-midnight">{howIHelp.headline}</h2>
          <p className="body-lg measure mt-8 text-slate">{howIHelp.intro}</p>
        </Reveal>

        <div className="mt-16 hidden lg:block">
          <div
            role="tablist"
            aria-label={howIHelp.tablistLabel}
            className="flex flex-wrap gap-10 border-b border-border-light"
          >
            {howIHelp.steps.map((step, index) => (
              <button
                key={step.id}
                id={`help-tab-${step.id}`}
                role="tab"
                type="button"
                aria-selected={activeIndex === index}
                aria-controls={`help-panel-${step.id}`}
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`-mb-px min-h-11 border-b-2 pb-4 text-[13px] font-semibold tracking-[0.18em] uppercase transition-colors duration-200 ${
                  activeIndex === index
                    ? "border-brass text-midnight"
                    : "border-transparent text-muted hover:text-midnight"
                }`}
              >
                {step.tab}
              </button>
            ))}
          </div>

          {howIHelp.steps.map((step, index) => (
            <div
              key={step.id}
              id={`help-panel-${step.id}`}
              role="tabpanel"
              aria-labelledby={`help-tab-${step.id}`}
              hidden={activeIndex !== index}
              tabIndex={0}
              className="pt-12"
            >
              {activeIndex === index && <StepBody step={step} />}
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border-light lg:hidden">
          {howIHelp.steps.map((step) => {
            const open = openMobile === step.id;
            return (
              <div key={step.id} className="border-b border-border-light">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`help-accordion-${step.id}`}
                    onClick={() => setOpenMobile(open ? null : step.id)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left text-[13px] font-semibold tracking-[0.18em] text-midnight uppercase"
                  >
                    {step.tab}
                    <span aria-hidden="true" className="text-brass">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div id={`help-accordion-${step.id}`} hidden={!open} className="pb-10">
                  <StepBody step={step} />
                </div>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-16 border-t border-border-light pt-10 lg:mt-24">
          <p className="eyebrow text-brass">{howIHelp.engagementLabel}</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {howIHelp.engagementModels.map((model) => (
              <div key={model.title} className="border-t border-border-light pt-6">
                <h3 className="display-3 text-midnight">{model.title}</h3>
                <p className="mt-4 text-[15px] text-slate">{model.body}</p>
              </div>
            ))}
          </div>
          <p className="measure mt-10 text-[14px] text-muted">{howIHelp.note}</p>
          <a href="#contact" className="link-editorial mt-8 text-midnight">
            {howIHelp.cta}
            <span aria-hidden="true">↘</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
