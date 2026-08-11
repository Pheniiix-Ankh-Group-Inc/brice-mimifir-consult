import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/layout/PageShell";
import { useLanguage } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility | Brice Mimifir" },
      {
        name: "description",
        content: "The accessibility approach and target applied to this website.",
      },
      { property: "og:title", content: "Accessibility | Brice Mimifir" },
      {
        property: "og:description",
        content: "The accessibility approach and target applied to this website.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  const { t } = useLanguage();
  return (
    <PageShell>
      <article className="shell pt-32 pb-24 lg:pt-44">
        <h1 className="display-2 text-midnight">{t.accessibility.title}</h1>
        <div className="rule-brass my-9" />
        <div className="measure space-y-6 text-slate">
          {t.accessibility.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
