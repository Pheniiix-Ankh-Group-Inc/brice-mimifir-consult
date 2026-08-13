import { Reveal } from "@/components/Reveal";
import type { Content } from "@/content/types";

export function About({ about }: { about: Content["about"] }) {
  return (
    <section id="about" className="section-y bg-ivory">
      <div className="shell">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="eyebrow text-brass">{about.eyebrow}</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="display-2 text-midnight">{about.headline}</h2>
            <div className="rule-brass my-9" />
            <div className="measure space-y-6 text-slate">
              {about.biography.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="body-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16 border-t border-border-light pt-10 lg:mt-24">
          <p className="eyebrow text-brass">{about.principlesLabel}</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {about.principles.map((principle, index) => (
              <article key={principle.title} className="border-t border-border-light pt-6">
                <p className="text-[12px] font-semibold tracking-[0.2em] text-brass">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="display-3 mt-4 text-midnight">{principle.title}</h3>
                <p className="mt-4 text-[15px] text-slate">{principle.body}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 border-t border-border-light lg:mt-24">
          {about.initiatives.map((initiative) => (
            <Reveal
              key={initiative.title}
              className="grid gap-6 border-b border-border-light py-10 lg:grid-cols-12 lg:gap-8 lg:py-14"
            >
              <h3 className="display-3 text-midnight lg:col-span-4">{initiative.title}</h3>
              <div className="lg:col-span-8">
                <p className="measure text-slate">{initiative.body}</p>
                <a
                  href={initiative.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-editorial mt-6 text-midnight"
                >
                  {initiative.cta}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-8 lg:py-14">
          <p className="body-lg measure text-midnight lg:col-span-8 lg:col-start-5">
            {about.conclusion}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
