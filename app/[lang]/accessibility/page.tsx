import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/layout/PageShell";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { buildLocalizedMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  const description =
    lang === "fr"
      ? "L'approche et la cible d'accessibilité appliquées à ce site."
      : "The accessibility approach and target applied to this website.";
  return buildLocalizedMetadata({
    locale: lang,
    path: "/accessibility",
    title: `${t.accessibility.title} | ${t.brand.name}`,
    description,
    type: "article",
  });
}

export default async function AccessibilityPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <PageShell locale={lang} t={t}>
      <article className="shell pt-32 pb-24 lg:pt-44">
        <h1 className="display-2 text-midnight">{t.accessibility.title}</h1>
        <div className="rule-brass my-9" />
        <div className="measure space-y-6 text-slate">
          {t.accessibility.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
