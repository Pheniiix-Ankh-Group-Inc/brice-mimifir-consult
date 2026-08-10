import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/layout/PageShell";
import { Challenge } from "@/components/sections/Challenge";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { HowIHelp } from "@/components/sections/HowIHelp";
import { Thinking } from "@/components/sections/Thinking";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Technology Transformation Consultant in Montréal | Brice Mimifir" },
      {
        name: "description",
        content:
          "I help organizations understand where technology is creating friction, decide what to address first, and support their teams through practical change.",
      },
      {
        property: "og:title",
        content: "Technology Transformation Consultant in Montréal | Brice Mimifir",
      },
      {
        property: "og:description",
        content:
          "Business and technology transformation advisory for regulated and complex organizations.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Brice Mimifir Inc.",
          email: "brice.mimifir.a@gmail.com",
          areaServed: "Canada",
          address: { "@type": "PostalAddress", addressLocality: "Montréal", addressCountry: "CA" },
          sameAs: [
            "https://www.linkedin.com/in/brice-mimifir",
            "https://www.instagram.com/bricemimifir/",
          ],
          founder: {
            "@type": "Person",
            name: "Brice Mimifir",
            jobTitle: "Business & Technology Transformation Advisor",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell overlay>
      <Hero />
      <Challenge />
      <Experience />
      <HowIHelp />
      <Thinking />
      <Contact />
    </PageShell>
  );
}
