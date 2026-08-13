import Image from "next/image";

import { HERO_IMAGE } from "@/content/site";
import type { Content } from "@/content/types";

export function Hero({ hero }: { hero: Content["hero"] }) {
  return (
    <section id="top" className="bg-midnight text-ivory">
      <div className="flex min-h-[100svh] flex-col lg:flex-row">
        <div className="flex w-full flex-col justify-end px-[var(--gutter)] pt-32 pb-14 lg:w-[56%] lg:justify-center lg:pt-28 lg:pb-24">
          <div className="mx-auto w-full max-w-[720px]">
            <p className="eyebrow text-brass">{hero.eyebrow}</p>
            <h1 className="display-1 mt-7">
              {hero.headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <div className="rule-brass my-9" />
            <p className="body-lg measure text-ivory/80">{hero.body}</p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <a href="#contact" className="link-editorial text-ivory">
                {hero.primaryCta}
                <span aria-hidden="true">↘</span>
              </a>
              <a href="#how-i-help" className="link-editorial text-ivory">
                {hero.secondaryCta}
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="mt-14 border-t border-ivory/20 pt-7">
              <p className="text-[12px] tracking-[0.18em] text-ivory/70 uppercase">
                {hero.supportingLine}
              </p>
              <p className="mt-4 text-[12px] tracking-[0.18em] text-ivory/50 uppercase">
                {hero.location}
              </p>
              <p
                aria-hidden="true"
                className="mt-6 text-[11px] tracking-[0.24em] text-ivory/40 uppercase"
              >
                {hero.scroll} ↓
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[44%]">
          <Image
            src={HERO_IMAGE}
            alt={hero.imageAlt}
            width={1024}
            height={1536}
            priority
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="aspect-[4/5] h-full w-full object-cover object-center lg:aspect-auto lg:min-h-[100svh]"
          />
        </div>
      </div>
    </section>
  );
}
