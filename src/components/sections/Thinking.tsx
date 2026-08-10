import { useState } from "react";

import { Carousel } from "@/components/Carousel";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Thinking() {
  const { t } = useLanguage();
  const th = t.thinking;
  const [openId, setOpenId] = useState<string | null>(null);
  const openArticle = th.articles.find((article) => article.id === openId) ?? null;

  return (
    <section id="thinking" className="section-y bg-ivory">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brass">{th.eyebrow}</p>
          <h2 className="display-2 mt-7 text-midnight">{th.headline}</h2>
          <p className="body-lg measure mt-8 text-slate">{th.intro}</p>
        </Reveal>

        <div className="mt-16">
          <Carousel label={th.carouselLabel} count={th.articles.length}>
            {th.articles.map((article, index) => {
              const open = openId === article.id;
              return (
                <article
                  key={article.id}
                  className="flex w-[86%] shrink-0 snap-start flex-col border-t border-border-light pt-7 sm:w-[62%] lg:w-[calc(50%-16px)]"
                >
                  <p className="text-[12px] font-semibold tracking-[0.2em] text-brass">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display-3 mt-5 text-midnight">{article.title}</h3>
                  <p className="mt-5 flex-1 text-slate">{article.paragraphs[0]}</p>
                  <div className="mt-7">
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls="thinking-panel"
                      onClick={() => setOpenId(open ? null : article.id)}
                      className="link-editorial text-midnight"
                    >
                      {open ? th.hide : th.read}
                      <span aria-hidden="true">{open ? "↑" : "↓"}</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </Carousel>
        </div>

        <div
          id="thinking-panel"
          hidden={!openArticle}
          className="mt-14 border-t border-border-light pt-10"
        >
          {openArticle && (
            <div className="grid gap-8 lg:grid-cols-12">
              <h3 className="display-3 text-midnight lg:col-span-4">{openArticle.title}</h3>
              <div className="measure space-y-6 text-slate lg:col-span-8">
                {openArticle.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="body-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
