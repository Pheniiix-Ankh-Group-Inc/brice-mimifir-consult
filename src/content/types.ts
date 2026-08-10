export type Locale = "en" | "fr";

export type Slide = { number: string; title: string; body: string };

export type HelpStep = {
  id: "diagnose" | "decide" | "transform";
  tab: string;
  headline: string;
  paragraphs: string[];
  engagementLabel: string;
  engagementName: string;
  cta: string;
  detail: { paragraphs: string[]; receiveLabel: string; receive: string };
};

export type Article = { id: string; title: string; paragraphs: string[] };

export type Content = {
  meta: { title: string; description: string };
  brand: { name: string; tagline: string };
  common: {
    menu: string;
    close: string;
    skipToContent: string;
    language: string;
    location: string;
    email: string;
    linkedin: string;
    instagram: string;
    newTab: string;
    previous: string;
    next: string;
    of: string;
  };
  nav: { id: string; number: string; label: string; short: string }[];
  hero: {
    eyebrow: string;
    headlineLines: string[];
    body: string;
    cta: string;
    location: string;
    scroll: string;
    imageAlt: string;
  };
  challenge: {
    eyebrow: string;
    headlineLines: string[];
    intro: string;
    slides: Slide[];
    conclusion: string;
    carouselLabel: string;
  };
  experience: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    signature: string[];
    imageAlt: string;
    caseStudy: { eyebrow: string; headline: string; paragraphs: string[] };
    technical: {
      label: string;
      intro: string;
      groups: { title: string; items: string[] }[];
    };
    beyond: { label: string; body: string };
  };
  howIHelp: {
    eyebrow: string;
    headline: string;
    intro: string;
    steps: HelpStep[];
    note: string;
    tablistLabel: string;
  };
  thinking: {
    eyebrow: string;
    headline: string;
    intro: string;
    articles: Article[];
    read: string;
    hide: string;
    carouselLabel: string;
  };
  contact: {
    eyebrow: string;
    headline: string;
    body: string;
    formLabel: string;
    fields: {
      name: string;
      email: string;
      organization: string;
      message: string;
      consent: string;
    };
    optional: string;
    submit: string;
    sending: string;
    note: string;
    success: string;
    error: string;
    errors: {
      name: string;
      email: string;
      organization: string;
      message: string;
      consent: string;
    };
  };
  footer: {
    statement: string;
    navLabel: string;
    connectLabel: string;
    privacy: string;
    accessibility: string;
    copyright: (year: number) => string;
  };
  privacy: { title: string; updated: string; paragraphs: string[] };
  accessibility: { title: string; paragraphs: string[] };
  notFound: { title: string; body: string; cta: string };
};
