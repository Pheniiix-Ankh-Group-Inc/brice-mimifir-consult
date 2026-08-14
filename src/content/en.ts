import { SITE } from "./site";
import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Brice MIMIFIR | Senior Java & AWS Consultant",
    description:
      "Senior Java consultant in Montréal supporting IT teams with application modernization, AWS, Terraform and continuous delivery.",
    openGraphTitle: "Brice MIMIFIR — Java Modernization, AWS & Continuous Delivery",
    openGraphDescription:
      "Java and AWS expertise embedded with your teams to modernize applications, improve delivery reliability and support change through production.",
  },
  brand: {
    name: "Brice MIMIFIR",
    title: "Senior Java Consultant — Application Modernization & AWS",
    tagline: "Java Modernization, AWS & Continuous Delivery",
  },
  common: {
    menu: "Menu",
    close: "Close",
    skipToContent: "Skip to content",
    language: "Language",
    location: "Montréal, Canada",
    email: SITE.email,
    linkedin: "LinkedIn",
    linkedinLabel: "Brice MIMIFIR’s LinkedIn profile",
    instagram: "Instagram",
    instagramLabel: "Brice MIMIFIR’s Instagram profile",
    anbachain: "ANBACHAIN",
    newTab: "opens in a new tab",
    previous: "Previous",
    next: "Next",
    of: "of",
  },
  nav: [
    { id: "challenge", number: "01", label: "Challenges", short: "Challenges" },
    { id: "how-i-help", number: "02", label: "How I Contribute", short: "How I Contribute" },
    { id: "experience", number: "03", label: "Experience", short: "Experience" },
    { id: "thinking", number: "04", label: "Perspectives", short: "Perspectives" },
    { id: "about", number: "05", label: "About", short: "About" },
    { id: "contact", number: "06", label: "Contact", short: "Contact" },
  ],
  hero: {
    eyebrow: "Brice MIMIFIR — Senior Java & AWS Consultant",
    headlineLines: ["Evolving your systems,", "alongside your teams."],
    body: "I work within IT teams to evolve existing Java applications, automate deployments and support change through production. My experience in banking has taught me to move with discipline while accounting for technical, operational and human constraints.",
    primaryCta: "Plan a conversation",
    secondaryCta: "Explore my approach",
    supportingLine: "Advisory",
    location: "Montréal · Canada",
    scroll: "Scroll",
    imageAlt:
      "Temporary editorial photograph: daylight through tall windows in a quiet stone lobby.",
  },
  challenge: {
    eyebrow: "At the heart of your technical challenges",
    headlineLines: [
      "Technical friction eventually affects",
      "both teams and the value",
      "they deliver.",
    ],
    intro:
      "Modernization challenges rarely come from code alone. They also live in dependencies, delivery processes, production constraints and the knowledge teams have accumulated over time. Before proposing a solution, it is important to understand how those elements work together.",
    findingLabel: "What is happening",
    impactLabel: "The impact",
    slides: [
      {
        number: "01",
        title: "Applications that are difficult to evolve",
        finding:
          "Core applications carry years of business rules, integrations and technical decisions. Every change can have consequences that are difficult to predict while technical debt continues to grow.",
        impact:
          "Teams spend more time protecting the existing environment, new capabilities take longer to deliver and maintenance becomes more expensive.",
      },
      {
        number: "02",
        title: "Long and demanding production releases",
        finding:
          "Deployments still depend on manual steps, inconsistent environments and approvals distributed across several teams.",
        impact:
          "Production releases become stressful events, feedback arrives more slowly and a significant amount of energy goes into coordinating the process rather than improving the product.",
      },
      {
        number: "03",
        title: "Integrations that add complexity",
        finding:
          "Cloud migration, external services, new identity mechanisms and event-driven architectures must connect to systems that remain in operation.",
        impact:
          "Dependencies multiply, responsibilities become less clear and the operational burden on developers increases.",
      },
    ],
    conclusion:
      "The goal is not to replace everything that exists. It is to determine what should evolve, in what order and with what acceptable level of risk.",
    carouselLabel: "Three technical challenges",
  },
  howIHelp: {
    eyebrow: "Integrated and collaborative support",
    headline: "Evolve what exists without disrupting what still works.",
    intro:
      "I support teams that need to modernize Java applications, improve delivery reliability or integrate new services. I begin by understanding the environment, production constraints and existing responsibilities. The engagement is then shaped around the context rather than a predetermined technology.",
    tablistLabel: "The three pillars of my contribution",
    steps: [
      {
        id: "modernization",
        tab: "Application modernization",
        number: "Pillar 01",
        headline: "Evolve applications progressively.",
        body: "I contribute to the modernization of Java components, APIs and interfaces while accounting for existing dependencies. Depending on the context, this can include a Java upgrade, a SOAP-to-REST transition, progressive service decomposition or the evolution of an aging interface.",
        outcomeLabel: "What it supports",
        outcome:
          "A clearer modernization path, better-tested changes and an evolution that teams can absorb without unnecessary disruption.",
      },
      {
        id: "delivery",
        tab: "Delivery reliability",
        number: "Pillar 02",
        headline: "Make deployments more repeatable and easier to control.",
        body: "I work with teams to automate infrastructure and pipelines, reduce differences between environments and make delivery steps more visible. AWS, Terraform, Jenkins, Docker and Kubernetes are used when they fit the organization’s actual constraints.",
        outcomeLabel: "What it supports",
        outcome:
          "Less manual effort, more predictable releases and more time available for useful development work.",
      },
      {
        id: "integrations",
        tab: "Integrations and security",
        number: "Pillar 03",
        headline: "Connect new services without losing sight of operations.",
        body: "I contribute to integrations involving external services, event flows, identity systems and cloud platforms. The objective is to clarify contracts, responsibilities, failure scenarios and monitoring needs before production.",
        outcomeLabel: "What it supports",
        outcome:
          "More understandable integrations, more visible risks and an environment teams can operate and evolve.",
      },
    ],
    engagementLabel: "Engagement models",
    engagementModels: [
      {
        title: "Advisory",
        body: "Focused support to analyze a situation, evaluate options or define a realistic modernization path.",
      },
    ],
    note: "Every engagement begins with a conversation. Scope depends on the existing environment, level of risk, priorities and team capacity.",
    cta: "Discuss your context",
  },
  experience: {
    eyebrow: "Selected experience",
    headline: "Concrete contributions, delivered with the teams involved.",
    intro:
      "The results below came from collective work. They provide context on my responsibilities, the environments in which I have worked and the ways I contributed to moving initiatives forward.",
    tablistLabel: "Selected experience",
    technicalLabel: "View the technical context",
    technicalHideLabel: "Hide the technical context",
    caseStudies: [
      {
        id: "national-bank",
        tab: "National Bank of Canada",
        eyebrow: "Experience 01",
        headline: "National Bank of Canada",
        meta: "Senior Java Developer · January 2021 to May 2025 · 4 years and 5 months",
        contextLabel: "Context",
        context:
          "Within a highly regulated banking environment, I worked with development, architecture, security, infrastructure, operations and product teams on the modernization and operation of enterprise applications.",
        sections: [
          {
            title: "Application modernization",
            paragraphs: [
              "I contributed to the migration of 39 SOAP services to REST APIs by developing Java and Spring services from contracts defined with a specialized team. I also participated in upgrading components from Java 8 to Java 21, supported by automated compatibility testing.",
              "On an application used across more than 2,500 workstations, I owned the migration of three modules from AngularJS 1.7 to React 18.",
            ],
          },
          {
            title: "Delivery and AWS infrastructure",
            paragraphs: [
              "Working with architecture, infrastructure and delivery teams, I contributed to redesigning deployments during the move from IBM UrbanCode Deploy and WebSphere to AWS. Automation with Jenkins and Docker helped reduce one production delivery cycle from six weeks to two.",
              "I designed and developed 13 reusable Terraform modules for Amazon S3, DynamoDB, Lambda, SQS, CloudWatch and EventBridge. I also participated in deploying, configuring, monitoring and troubleshooting containerized applications on Amazon EKS.",
            ],
          },
          {
            title: "Contact Center as a Service — Genesys Cloud CX",
            paragraphs: [
              "I participated in a transition from an on-premises Genesys platform to Genesys Cloud CX. In that context, I configured Amazon EventBridge and the Genesys connector required for integrations, then used Terraform resources to provision and configure Genesys Cloud capabilities in a repeatable way.",
            ],
          },
          {
            title: "Production, security and collaboration",
            paragraphs: [
              "I contributed to Kafka event flows related to transaction and fraud-signal processing, as well as an identity migration to Microsoft Entra ID. I also supported production, participated in post-incident analysis and implemented corrective actions using Splunk, Datadog and CloudWatch.",
              "The work included code reviews, developer mentoring and coordination with architecture, security, platform, operations and product teams.",
            ],
          },
        ],
        indicators: {
          label: "Context and contribution indicators",
          items: [
            "39 services involved in the SOAP-to-REST migration.",
            "Six weeks to two for one production delivery cycle, a collective result to which I contributed.",
            "13 reusable Terraform modules for AWS.",
            "Three modules modernized from AngularJS to React.",
            "More than 2,500 workstations using the application involved.",
            "Java 8 to Java 21 across several backend components.",
            "Four years and five months within National Bank of Canada.",
          ],
        },
        conclusionLabel: "What this experience demonstrates",
        conclusion:
          "The ability to contribute across several layers of modernization — applications, APIs, infrastructure, integrations, identity and production — while working with the specialized teams required in a regulated environment.",
        technical: {
          intro:
            "This technical context contains only the technologies associated with this experience and the responsibilities described above.",
          groups: [
            {
              title: "Applications and interfaces",
              items: [
                "Java 8 through Java 21",
                "Spring and Spring Boot",
                "REST APIs and SOAP services",
                "React 18 and AngularJS 1.7",
              ],
            },
            {
              title: "Cloud, infrastructure and delivery",
              items: [
                "AWS",
                "Amazon EKS",
                "Amazon S3",
                "DynamoDB",
                "AWS Lambda",
                "Amazon SQS",
                "Amazon EventBridge",
                "Terraform and Infrastructure as Code",
                "Docker and Kubernetes",
                "Jenkins and CI/CD",
              ],
            },
            {
              title: "Integrations and identity",
              items: [
                "Apache Kafka",
                "Genesys Cloud CX",
                "Genesys connector and Amazon EventBridge",
                "Microsoft Entra ID",
              ],
            },
            {
              title: "Quality and security",
              items: [
                "Unit, integration and end-to-end testing",
                "SonarQube",
                "Snyk and Snyk Code",
                "Code reviews",
                "Compatibility analysis during migrations",
              ],
            },
            {
              title: "Production and observability",
              items: [
                "Production support and diagnosis",
                "Post-incident analysis",
                "Splunk",
                "Datadog",
                "CloudWatch",
                "BMC Remedy",
                "ServiceNow",
              ],
            },
          ],
        },
      },
      {
        id: "cgi-public-sector",
        tab: "CGI, public sector",
        eyebrow: "Experience 02",
        headline: "CGI, public sector",
        meta: "Java Developer — Consultant · June 2019 to January 2021 · 1 year and 8 months",
        contextLabel: "Overall context",
        context:
          "Two public-sector engagements where translating business rules, connecting existing systems and maintaining service continuity were essential.",
        sections: [
          {
            title: "Engagement A — montreal.ca, City of Montréal",
            paragraphs: [
              "Context — As part of the montreal.ca redesign, the City needed digital forms capable of supporting complex administrative rules while communicating with internal information systems.",
              "Contribution — Embedded in the development team through CGI, I contributed to the Drupal 8 backend by designing and integrating forms for citizen services.",
              "I developed custom forms with the Drupal Form API, including FormBase, business validation, AJAX interactions and multi-step journeys. I also built custom Webform Handlers in PHP and connected Drupal forms to the City’s internal systems through REST APIs.",
              "Value contributed — This work helped translate administrative processes into structured digital journeys while maintaining integration with the applications and data already used by municipal services.",
            ],
          },
          {
            title: "Engagement B — British Columbia Ministry of Health",
            paragraphs: [
              "Context — The engagement involved developing and maintaining applications in a government environment where service continuity and system stability were essential.",
              "Contribution — I developed and maintained components using Oracle Forms, Java, EJB, PrimeFaces and PL/SQL. I also handled production incident diagnosis and resolution, as well as build and deployment activities with Jenkins and Docker.",
              "Value contributed — This experience strengthened my ability to work with existing systems, understand heterogeneous technical environments and address incidents while keeping operational continuity in view.",
            ],
          },
        ],
        conclusionLabel: "What these engagements demonstrate",
        conclusion:
          "The ability to turn complex business rules into digital functions, connect public applications to existing systems and work methodically where service stability matters as much as new delivery.",
        technical: {
          intro:
            "This technical context distinguishes the environments used across the two public-sector engagements described above.",
          groups: [
            {
              title: "City of Montréal",
              items: [
                "Drupal 8 and PHP",
                "Drupal Form API and FormBase",
                "Webform Handlers",
                "AJAX and multistep forms",
                "REST APIs",
              ],
            },
            {
              title: "British Columbia Ministry of Health",
              items: ["Oracle Forms", "Java", "EJB", "PrimeFaces", "PL/SQL"],
            },
            {
              title: "Delivery and operations",
              items: [
                "Jenkins and Docker",
                "Build and deployment",
                "Production incident diagnosis and resolution",
              ],
            },
          ],
        },
      },
    ],
    complementary: {
      label: "Complementary experience",
      hideLabel: "Hide complementary experience",
      intro:
        "These technologies represent complementary work, integrations in progress or prototyping.",
      groups: [
        {
          title: "In progress or prototyping",
          items: [
            "GitHub Copilot",
            "Claude Code",
            "Python and Node.js",
            "Artificial intelligence model and API integrations",
            "Retrieval-augmented generation — RAG",
            "KYC/KYB integrations with Sumsub",
            "OAuth2 and OpenID Connect",
            "Smart-contract prototyping with Solidity",
            "Stellar, Ethereum and Hedera",
            "Web3.js and Ethers.js",
          ],
        },
      ],
      note: "These items represent complementary work, integrations in progress or prototyping. They must not be presented as platforms already delivered to production and do not replace the primary positioning around Java modernization, AWS and delivery.",
    },
  },
  thinking: {
    eyebrow: "Perspectives",
    headline: "Lessons from the field, without universal answers.",
    intro:
      "These notes share observations from modernization and production work. They are not a substitute for understanding each organization’s context.",
    read: "Read the perspective",
    hide: "Close the perspective",
    carouselLabel: "Perspectives, three reflections",
    articles: [
      {
        id: "java-8-to-21",
        title: "Moving from Java 8 to Java 21 without breaking production",
        excerpt:
          "A Java upgrade is more than a compiler change. It requires understanding dependencies, implicit behaviours and the team’s actual ability to observe what changes in production.",
        paragraphs: [
          "Moving from Java 8 to Java 21 may appear to be a mainly technical task: update the version, resolve compilation errors, run tests and deploy. In an enterprise application, the reality is usually broader. The Java version is connected to frameworks, libraries, servers, pipelines, monitoring tools and behaviours on which teams may have relied for years.",
          "A useful first step is therefore to establish a clear picture of the existing environment. Which dependencies are still maintained? Which components share the same runtime? Which tests genuinely protect important functions? Which parts of the system are understood by only a few people? Without that visibility, a migration can be technically correct while simply moving risk into production.",
          "Progressing component by component reduces uncertainty. It allows the team to update a manageable scope, observe incompatibilities, improve tests and evolve the pipeline before expanding the change. Unit tests remain necessary, but they are not enough. Integration tests, end-to-end scenarios and validation of external interactions become essential.",
          "Monitoring matters as much as compilation. Logs, metrics and alerts should make it possible to compare behaviour before and after the upgrade. A team that can quickly detect a regression and understand its origin has a much safer change than a team that relies only on deployment success.",
          "Finally, the migration should leave the environment easier to understand than before. Documenting decisions, removing unnecessary dependencies and sharing what was learned prevents the next evolution from depending again on a few individuals. The real outcome is not only running Java 21. It is making the application easier to maintain and evolve together.",
        ],
      },
      {
        id: "release-weeks",
        title: "Why production releases take weeks",
        excerpt:
          "Delivery time rarely comes from a single pipeline. It accumulates through the dependencies, environments, approvals and decisions surrounding a production release.",
        paragraphs: [
          "When a production release takes several weeks, the first reaction is often to look for a faster tool. Yet the time is not always spent inside the pipeline. It may be spent waiting for an environment, preparing configuration manually, obtaining approval from another team or discovering differences between environments too late.",
          "To understand the issue, it helps to follow a change from the moment it is ready until the moment it is operating in production. Where does it wait? Which information must be entered again? Which step can only be performed by one person? Which checks genuinely protect the service and which exist because the environment is unreliable? Looking at the full journey prevents a systemic problem from being assigned to a single team.",
          "Infrastructure as Code can reduce part of that friction. With Terraform, resources and dependencies become declarative, reviewable and repeatable. The same principles can be applied across environments while changes move through the review and control process already used for code. Terraform does not remove architecture decisions or security requirements. It makes their implementation more visible and consistent.",
          "The pipeline can then automate repeatable steps: build, testing, quality analysis, artifact creation, deployment and verification. Necessary controls remain, but they are placed where they provide useful information. Automation that hides errors or can only be understood by its author simply moves the dependency elsewhere.",
          "Sustainable improvement comes from combining automation, clear responsibilities and better visibility across delivery. The objective is not to deploy faster at any cost. It is to help teams release more regularly, with enough confidence to respond when something does not go as expected.",
        ],
      },
      {
        id: "ai-workflows",
        title: "Integrating AI into development workflows",
        excerpt:
          "AI can accelerate certain tasks, but its value depends on the context provided, the quality of verification and the rules the team applies to its use.",
        paragraphs: [
          "Artificial intelligence assistants can generate code, propose tests, explain an existing codebase or accelerate documentation. These uses can be valuable, but they do not automatically transform how a team delivers software. Without context, the tool produces a plausible response. It may not know the business rules, security constraints or decisions that shaped the system.",
          "The most realistic gains appear in well-bounded tasks: preparing a first test, summarizing a function, proposing a repetitive migration, comparing two approaches or finding information across authorized sources. The developer remains responsible for understanding the proposal, verifying its behaviour and deciding whether it fits the need.",
          "Security should be defined before adoption at scale. What data can be shared? Which repositories can be used as context? How are secrets, personal information and intellectual property protected? A team should not rely on implicit rules when a tool may receive code or sensitive information.",
          "Quality also remains a human and collective responsibility. Generated code should pass through the same tests, analysis and review as the rest of the product. A faster answer is only useful when it remains understandable, maintainable and compatible with the existing architecture.",
          "AI becomes genuinely useful when it reduces mechanical work without reducing judgement. It can help teams spend more time understanding the problem, making architecture decisions and having the conversations required to deliver a reliable system. The useful question is therefore not only “how much code was generated?” but “what can the team now do better, with the same level of responsibility?”",
        ],
      },
    ],
  },
  about: {
    eyebrow: "About Brice",
    headline: "Understand, build and share.",
    biography: [
      "My journey in technology began in 2014, close to users, through support, deployment and incident resolution. That first experience taught me that a system is never only about its code: behind every technical decision are people who work, collaborate and depend on it functioning properly.",
      "Over time, I moved into development and consulting across public-sector, banking and regulated environments. Those experiences shaped the way I contribute: take the time to understand what already exists, listen to the people who know the environment and find a path forward that fits the organization’s reality.",
      "I do not seek to impose a transformation larger than necessary. I prefer to contribute methodically, move forward with the teams and share knowledge so that improvements can continue after my engagement.",
      "Curiosity, learning and knowledge sharing also hold an important place in my journey. I explore emerging technologies when they help clarify a problem, open new possibilities or support the creation of useful solutions. This interest also extends to initiatives connected to the Caribbean and the development of professional communities.",
    ],
    principlesLabel: "What guides the way I contribute",
    principles: [
      {
        title: "Listen before proposing",
        body: "Understand the context, constraints and work already completed before recommending a change.",
      },
      {
        title: "Build with the teams",
        body: "Bring my experience without replacing the knowledge and responsibilities already present in the organization.",
      },
      {
        title: "Move forward progressively",
        body: "Turn decisions into concrete steps that teams can test, observe and manage.",
      },
      {
        title: "Share what was learned",
        body: "Document decisions, pass on knowledge and avoid allowing the consultant’s involvement to create a new dependency.",
      },
    ],
    initiatives: [
      {
        title: "Future Caribbean",
        body: "I participate in the international Future Caribbean buildathon, focused on creating agentic artificial intelligence solutions for real challenges across the Caribbean. This experience allows me to learn from people with different backgrounds, experiment with new approaches and consider how technology can respond to local realities.",
        cta: "Discover Future Caribbean",
        href: SITE.futureCaribbean,
      },
      {
        title: "ANBACHAIN",
        body: "I am also a co-founder of ANBACHAIN, a professional community bringing people together around blockchain, Web3, artificial intelligence and knowledge sharing. Its purpose is to create useful connections, circulate resources and encourage collective learning before seeking to build a more complex structure.",
        cta: "Discover ANBACHAIN",
        href: SITE.anbachain,
      },
    ],
    conclusion:
      "Whether the context is a client engagement, an experiment or a community initiative, I try to contribute in the same way: understand the need, build with the people involved and leave something useful behind.",
  },
  contact: {
    eyebrow: "Get in touch",
    headline: "Start with the context, not the solution.",
    body: "You can contact me if an application is becoming difficult to evolve, if production releases require too much effort or if your team needs Java and AWS support to move an engagement forward. You do not need to arrive with a solution already defined: simply describe the situation, the constraints and what you want to improve.",
    formLabel: "Contact form",
    fields: {
      name: "Full name",
      email: "Work email",
      organization: "Company or agency",
      message: "Describe the context of your engagement, project or need.",
      consent:
        "I agree that Group Pheniiix Ankh Inc. may use this information only to review my inquiry and respond to me.",
    },
    optional: "optional",
    submit: "Send the message",
    sending: "Sending…",
    note: "The first conversation is exploratory and carries no obligation.",
    success:
      "Thank you. Your message has been received. I will respond personally within two business days.",
    error:
      "Your message could not be sent. Your text has been preserved. Please try again or email contact@bricemimifir.com directly.",
    rateLimited:
      "Too many attempts were made from this connection. Your text has been preserved. Please wait ten minutes before trying again.",
    unavailable:
      "Secure message delivery is temporarily unavailable. Your text has been preserved. Please email contact@bricemimifir.com directly.",
    errors: {
      name: "Please enter your full name.",
      email: "Please enter a valid email address.",
      organization: "The organization name must be 120 characters or fewer.",
      messageTooShort: "Please describe your situation in at least 20 characters.",
      messageTooLong: "The message must be 2,000 characters or fewer.",
      consent: "Please confirm your consent so I can respond to you.",
    },
    directLabel: "Direct contact",
    engagementModels: "Advisory",
  },
  footer: {
    statement:
      "Helping IT teams modernize applications and delivery in a progressive, collaborative and controlled way.",
    legalNote:
      "Services presented under the Brice MIMIFIR brand are contracted, administered and invoiced by Group Pheniiix Ankh Inc., a Canadian corporation.",
    navLabel: "Footer navigation",
    connectLabel: "Contact",
    privacy: "Privacy",
    accessibility: "Accessibility",
    copyright: (year: number) =>
      `© ${year} Group Pheniiix Ankh Inc. — Professional website of Brice MIMIFIR.`,
  },
  privacy: {
    title: "Privacy",
    updated: "Last updated: August 2026",
    paragraphs: [
      "Group Pheniiix Ankh Inc. collects only the information you choose to provide through the contact form: your name, work email, organization name when supplied, message and consent.",
      "This information is used only to review your inquiry, respond to you and maintain related business correspondence. Submitting the form does not enroll you in a newsletter or automated marketing communication.",
      "This version of the website does not use advertising or analytics cookies. A local browser preference may be stored to remember your language selection.",
      "Contact form submissions are processed through infrastructure hosted by Vercel and delivered by Resend. These providers may process information only to the extent required to operate the website and transmit the message.",
      "Information is retained only for as long as reasonably necessary to respond to the inquiry, maintain appropriate business records and meet applicable obligations. Access is limited to those who require it for these purposes.",
      "You may request access to, correction of or deletion of personal information associated with your inquiry, subject to applicable requirements. You may also withdraw consent for future use where applicable.",
      "For a privacy question or request, email contact@bricemimifir.com.",
      "This notice may be updated when the website, its providers or its information practices change. A revised date will be displayed on this page.",
    ],
  },
  accessibility: {
    title: "Accessibility",
    paragraphs: [
      "Group Pheniiix Ankh Inc. wants this website to be usable by as many people as possible. The website is designed with WCAG 2.2 Level AA as its accessibility target, without claiming formal certification.",
      "The implementation includes semantic headings and landmarks, keyboard navigation, visible focus states, a skip link, properly labeled form controls, accessible interactive controls, sufficient color contrast, responsive text, meaningful alternative text and support for reduced-motion preferences.",
      "Content and essential actions do not depend on color, hover or animation alone. The site remains usable at common mobile, tablet and desktop widths and with browser zoom up to 200 percent.",
      "If you encounter a barrier or need information in another format, email contact@bricemimifir.com and describe the page, feature or content concerned. A reasonable effort will be made to respond and provide an accessible alternative.",
    ],
  },
  notFound: {
    title: "This page could not be found.",
    body: "The address may have changed, or the page may no longer be available.",
    cta: "Return home",
  },
  generalError: {
    title: "This page could not be loaded.",
    body: "Something went wrong. You can try again or return home.",
    retry: "Try again",
    home: "Return home",
  },
};
