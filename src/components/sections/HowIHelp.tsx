import { useEffect, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { scrollToSection } from "@/lib/scroll";
import type { HelpStep } from "@/content/types";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

function StepBody({ step }: { step: HelpStep }) {
  const { t } = useLanguage();
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-7">
        <h3 className="display-3 text-midnight">{step.headline}</h3>
        <div className="measure mt-7 space-y-6 text-slate">
          {step.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-9">
          <button
            type="button"
            onClick={() => scrollToSection("contact", "#contact-name")}
            className="link-editorial text-midnight"
          >
            {step.cta}
            <span aria-hidden="true">↘</span>
          </button>
        </div>
      </div>

      <div className="border-t border-border-light pt-7 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
        <p className="eyebrow text-brass">{step.engagementLabel}</p>
        <p className="display-3 mt-4 text-midnight">{step.engagementName}</p>
        <div className="mt-6 space-y-5 text-[15px] text-slate">
          {step.detail.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p>
            <strong className="font-semibold text-midnight">{step.detail.receiveLabel}</strong>{" "}
            {step.detail.receive}
          </p>
        </div>
        <p className="mt-8 border-t border-border-light pt-6 text-[14px] text-muted">
          {t.howIHelp.note}
        </p>
      </div>
    </div>
  );
}

export function HowIHelp() {
  const { t } = useLanguage();
  const h = t.howIHelp;
  const isDesktop = useIsDesktop();
  const [activeIndex, setActiveIndex] = useState(0);
  const [openMobile, setOpenMobile] = useState<string | null>(h.steps[0]?.id ?? null);

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = h.steps.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    setActiveIndex(next);
    document.getElementById(`help-tab-${h.steps[next]!.id}`)?.focus();
  };

  return (
    <section id="how-i-help" className="section-y bg-soft-white">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brass">{h.eyebrow}</p>
          <h2 className="display-2 mt-7 text-midnight">{h.headline}</h2>
          <p className="body-lg measure mt-8 text-slate">{h.intro}</p>
        </Reveal>

        {isDesktop ? (
          <div className="mt-16">
            <div
              role="tablist"
              aria-label={h.tablistLabel}
              className="flex flex-wrap gap-10 border-b border-border-light"
            >
              {h.steps.map((step, index) => (
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

            {h.steps.map((step, index) => (
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
        ) : (
          <div className="mt-12 border-t border-border-light">
            {h.steps.map((step) => {
              const open = openMobile === step.id;
              return (
                <div key={step.id} className="border-b border-border-light">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`help-acc-${step.id}`}
                      onClick={() => setOpenMobile(open ? null : step.id)}
                      className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left text-[13px] font-semibold tracking-[0.18em] text-midnight uppercase"
                    >
                      {step.tab}
                      <span aria-hidden="true" className="text-brass">
                        {open ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div id={`help-acc-${step.id}`} hidden={!open} className="pb-10">
                    <StepBody step={step} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
