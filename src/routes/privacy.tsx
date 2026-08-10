import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/layout/PageShell";
import { useLanguage } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy | Brice Mimifir Inc." },
      {
        name: "description",
        content: "How Brice Mimifir Inc. handles information submitted through this website.",
      },
      { property: "og:title", content: "Privacy | Brice Mimifir Inc." },
      {
        property: "og:description",
        content: "How Brice Mimifir Inc. handles information submitted through this website.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t } = useLanguage();
  return (
    <PageShell>
      <article className="shell pt-32 pb-24 lg:pt-44">
        <h1 className="display-2 text-midnight">{t.privacy.title}</h1>
        <div className="rule-brass my-9" />
        <p className="eyebrow text-slate">{t.privacy.updated}</p>
        <div className="measure mt-8 space-y-6 text-slate">
          {t.privacy.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
