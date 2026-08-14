import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/layout/PageShell";
import { About } from "@/components/sections/About";
import { Challenge } from "@/components/sections/Challenge";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { HowIHelp } from "@/components/sections/HowIHelp";
import { Thinking } from "@/components/sections/Thinking";
import { SITE } from "@/content/site";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { buildLocalizedMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return buildLocalizedMetadata({
    locale: lang,
    path: "",
    title: t.meta.title,
    description: t.meta.description,
    openGraphTitle: t.meta.openGraphTitle,
    openGraphDescription: t.meta.openGraphDescription,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "#brice-mimifir",
        name: t.brand.name,
        jobTitle: t.brand.title,
        description: t.meta.description,
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Montréal",
          addressCountry: "CA",
        },
        sameAs: [SITE.linkedin, SITE.instagram],
        knowsLanguage: ["fr", "en"],
        knowsAbout: [
          "Java 21",
          "Spring Boot",
          "AWS Cloud",
          "Terraform",
          "Apache Kafka",
          "Continuous delivery",
          "Application modernization",
        ],
        worksFor: { "@id": "#organization" },
      },
      {
        "@type": "Organization",
        "@id": "#organization",
        name: lang === "fr" ? "Groupe Pheniiix Ankh Inc." : "Group Pheniiix Ankh Inc.",
        alternateName: lang === "fr" ? "Group Pheniiix Ankh Inc." : "Groupe Pheniiix Ankh Inc.",
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Montréal",
          addressCountry: "CA",
        },
      },
      {
        "@type": "ProfessionalService",
        name: t.brand.name,
        description: t.meta.description,
        slogan: t.brand.tagline,
        provider: { "@id": "#organization" },
        serviceType: [
          "Java application modernization",
          "AWS Cloud",
          "Continuous delivery",
          "Systems integration",
        ],
        areaServed: "Canada",
      },
    ],
  };

  return (
    <PageShell locale={lang} t={t} overlay>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero hero={t.hero} />
      <Challenge challenge={t.challenge} common={t.common} />
      <HowIHelp howIHelp={t.howIHelp} />
      <Experience experience={t.experience} />
      <Thinking thinking={t.thinking} common={t.common} />
      <About about={t.about} />
      <Contact contact={t.contact} locale={lang} />
    </PageShell>
  );
}
