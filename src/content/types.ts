export type Locale = "en" | "fr";

export type Slide = {
  number: string;
  title: string;
  finding: string;
  impact: string;
};

export type HelpStep = {
  id: "modernization" | "delivery" | "integrations";
  tab: string;
  number: string;
  headline: string;
  body: string;
  outcomeLabel: string;
  outcome: string;
};

export type CaseStudySection = {
  title: string;
  paragraphs: string[];
};

export type TechnicalGroup = {
  title: string;
  items: string[];
};

export type TechnicalContext = {
  intro: string;
  groups: TechnicalGroup[];
};

export type CaseStudy = {
  id: "national-bank" | "cgi-public-sector";
  tab: string;
  eyebrow: string;
  headline: string;
  meta: string;
  contextLabel: string;
  context: string;
  sections: CaseStudySection[];
  indicators?: { label: string; items: string[] };
  conclusionLabel: string;
  conclusion: string;
  technical: TechnicalContext;
};

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  paragraphs: string[];
};

export type Content = {
  meta: {
    title: string;
    description: string;
    openGraphTitle: string;
    openGraphDescription: string;
  };
  brand: { name: string; title: string; tagline: string };
  common: {
    menu: string;
    close: string;
    skipToContent: string;
    language: string;
    location: string;
    email: string;
    linkedin: string;
    linkedinLabel: string;
    instagram: string;
    instagramLabel: string;
    anbachain: string;
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
    primaryCta: string;
    secondaryCta: string;
    supportingLine: string;
    location: string;
    scroll: string;
    imageAlt: string;
  };
  challenge: {
    eyebrow: string;
    headlineLines: string[];
    intro: string;
    findingLabel: string;
    impactLabel: string;
    slides: Slide[];
    conclusion: string;
    carouselLabel: string;
  };
  howIHelp: {
    eyebrow: string;
    headline: string;
    intro: string;
    steps: HelpStep[];
    engagementLabel: string;
    engagementModels: { title: string; body: string }[];
    note: string;
    cta: string;
    tablistLabel: string;
  };
  experience: {
    eyebrow: string;
    headline: string;
    intro: string;
    tablistLabel: string;
    technicalLabel: string;
    technicalHideLabel: string;
    caseStudies: CaseStudy[];
    complementary: {
      label: string;
      hideLabel: string;
      intro: string;
      groups: TechnicalGroup[];
      note: string;
    };
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
  about: {
    eyebrow: string;
    headline: string;
    biography: string[];
    principlesLabel: string;
    principles: { title: string; body: string }[];
    initiatives: { title: string; body: string; cta: string; href: string }[];
    conclusion: string;
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
    rateLimited: string;
    unavailable: string;
    errors: {
      name: string;
      email: string;
      organization: string;
      messageTooShort: string;
      messageTooLong: string;
      consent: string;
    };
    directLabel: string;
    engagementModels: string;
  };
  footer: {
    statement: string;
    legalNote: string;
    navLabel: string;
    connectLabel: string;
    privacy: string;
    accessibility: string;
    copyright: (year: number) => string;
  };
  privacy: { title: string; updated: string; paragraphs: string[] };
  accessibility: { title: string; paragraphs: string[] };
  notFound: { title: string; body: string; cta: string };
  generalError: { title: string; body: string; retry: string; home: string };
};
