import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Technology Transformation Consultant in Montréal | Brice Mimifir",
    description:
      "I help organizations understand where technology is creating friction, decide what to address first, and support their teams through practical change.",
  },
  brand: {
    name: "Brice Mimifir",
    tagline: "Business & Technology Transformation",
  },
  common: {
    menu: "Menu",
    close: "Close",
    skipToContent: "Skip to content",
    language: "Language",
    location: "Montréal, Canada",
    email: "brice.mimifir.a@gmail.com",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    newTab: "opens in a new tab",
    previous: "Previous",
    next: "Next",
    of: "of",
  },
  nav: [
    { id: "challenge", number: "01", label: "The Challenge", short: "The Challenge" },
    { id: "experience", number: "02", label: "Experience", short: "Experience" },
    { id: "how-i-help", number: "03", label: "How I Help", short: "How I Help" },
    { id: "thinking", number: "04", label: "Thinking", short: "Thinking" },
    { id: "contact", number: "05", label: "Contact", short: "Contact" },
  ],
  hero: {
    eyebrow: "Business & Technology Transformation",
    headlineLines: ["When technology", "slows the business,", "clarity comes", "first."],
    body: "I help regulated and complex organizations identify what is blocking progress, decide what should change first, and lead transformation with clarity and control.",
    cta: "Discuss your challenge",
    location: "Montréal · Canada",
    scroll: "Scroll",
    imageAlt:
      "Temporary editorial photograph: daylight through tall windows in a quiet stone lobby.",
  },
  challenge: {
    eyebrow: "The Challenge",
    headlineLines: ["Progress can slow", "even when everyone", "is working hard."],
    intro:
      "Technology problems rarely stay inside technology. They appear in the way people coordinate, make decisions, manage risk and try to keep important work moving.",
    slides: [
      {
        number: "01",
        title: "Delivery continues. Progress still feels slow.",
        body: "Initiatives move forward, but dependencies, approvals and urgent requests absorb much of the teams' time and energy.",
      },
      {
        number: "02",
        title: "Complexity has become part of everyday work.",
        body: "People compensate for systems and processes that no longer fit by adding coordination, controls and manual effort.",
      },
      {
        number: "03",
        title: "Business and technology are not working from the same picture.",
        body: "Each group understands part of the problem, but priorities, constraints and risks are not shared clearly enough to support confident decisions.",
      },
      {
        number: "04",
        title: "Transformation creates activity, but not always meaningful change.",
        body: "Projects, platforms and governance may change while the same underlying friction returns in another form.",
      },
    ],
    conclusion:
      "Before introducing another solution, understand what is really blocking the business.",
    carouselLabel: "The Challenge, four observations",
  },
  experience: {
    eyebrow: "Experience",
    headline: "Transformation becomes possible when people share a clear view of the problem.",
    paragraphs: [
      "For more than seven years, I have worked within large enterprise environments where technology decisions affect operations, risk, and the people responsible for delivery.",
      "I learned that progress rarely depends on introducing one more tool. It begins by understanding where friction lives, bringing business and technology around the same priorities, and turning difficult decisions into a path that teams can realistically execute.",
      "Today, I combine hands-on engineering experience with a broader transformation perspective. I listen, clarify constraints, challenge assumptions, and help organizations move from uncertainty to controlled, practical change.",
    ],
    signature: [
      "Brice Mimifir",
      "Founder & Business Technology Transformation Advisor",
      "Montréal, Canada",
    ],
    imageAlt:
      "Temporary editorial photograph: an empty meeting room with natural light and brass detailing.",
    caseStudy: {
      eyebrow: "Selected Experience",
      headline: "Creating a clearer path through a complex modernization.",
      paragraphs: [
        "A modernization initiative within a regulated enterprise involved 39 services and several delivery dependencies. The challenge was not simply technical: teams needed a clearer understanding of what could change, in what order, and with what operational risk.",
        "Working from within the delivery environment, I contributed to clarifying dependencies, supporting API modernization, and making the release path more manageable for the teams involved.",
        "Through their combined efforts, one delivery cycle moved from six weeks to two. The meaningful change was not speed alone. Teams gained a clearer path for sequencing work and moving forward with greater control.",
      ],
    },
    technical: {
      label: "View the technical context",
      intro:
        "These technologies are part of the delivery context. They are selected according to the organization's constraints—not treated as the solution by themselves.",
      groups: [
        {
          title: "Application modernization",
          items: ["Java", "Spring Boot", "REST APIs", "Event-driven integration", "Kafka"],
        },
        { title: "Cloud and platforms", items: ["AWS", "EKS", "Kubernetes", "Terraform"] },
        { title: "Delivery and reliability", items: ["CI/CD", "Jenkins", "Splunk", "Datadog"] },
        {
          title: "Additional product experience",
          items: ["React", "Next.js", "Exploratory blockchain solutions"],
        },
      ],
    },
    beyond: {
      label: "Beyond client work",
      body: "I also co-founded ANBACHAIN, a professional community exploring blockchain, education and emerging technology through connection, shared knowledge and events.",
    },
  },
  howIHelp: {
    eyebrow: "How I Help",
    headline: "Clarity before transformation.",
    intro:
      "I don't start with a predetermined technology. I start with what the organization needs to achieve and what is getting in the way.",
    tablistLabel: "How I help",
    steps: [
      {
        id: "diagnose",
        tab: "Diagnose",
        headline: "Understand where progress is getting stuck.",
        paragraphs: [
          "This is useful when delivery feels slow, priorities keep changing, or teams are compensating for systems and processes that no longer support the way the organization needs to work.",
          "Together, we listen to the people closest to the work, examine the path from decision to delivery, and identify the dependencies, constraints, and operational risks creating friction.",
          "You leave with a shared understanding of the problem and a focused view of what deserves attention first.",
        ],
        engagementLabel: "Possible engagement",
        engagementName: "Business & Technology Friction Diagnostic",
        cta: "Discuss your situation",
        detail: {
          paragraphs: [
            "For organizations experiencing recurring delivery friction, unclear priorities, or problems that continue despite previous initiatives.",
            "May include stakeholder conversations, review of current initiatives, mapping of dependencies and decision points, and a working session to distinguish symptoms from underlying causes.",
          ],
          receiveLabel: "You receive:",
          receive:
            "a concise written diagnosis, prioritized observations, and practical questions or next steps to support the next decision.",
        },
      },
      {
        id: "decide",
        tab: "Decide",
        headline: "Choose what should change first—and what should wait.",
        paragraphs: [
          "This is useful when several initiatives compete for attention, business and technology teams see different priorities, or leadership needs to move forward without creating unnecessary disruption.",
          "Together, we compare the available options against business needs, operational risk, existing commitments, team capacity, and technical dependencies.",
          "You leave with a realistic sequence of decisions, a clear rationale for each priority, and a path that people can understand and support.",
        ],
        engagementLabel: "Possible engagement",
        engagementName: "Transformation Roadmap",
        cta: "Discuss your priorities",
        detail: {
          paragraphs: [
            "For leaders who understand that change is needed but need a realistic order of action.",
            "May include evaluation of options, prioritization workshops, dependency and risk analysis, sequencing, and clarification of the decisions required at each stage.",
          ],
          receiveLabel: "You receive:",
          receive:
            "a practical roadmap explaining what should happen first, what can wait, why those choices matter, and where ownership or further validation is required.",
        },
      },
      {
        id: "transform",
        tab: "Transform",
        headline: "Turn agreed decisions into controlled, practical progress.",
        paragraphs: [
          "This is useful when the direction is clear, but execution involves several teams, operational constraints, or dependencies that make change difficult to coordinate.",
          "Together, we clarify responsibilities, sequence the work, surface blockers early, and maintain a shared view of progress, risk, and the decisions still required.",
          "The goal is not change for its own sake. It is to help teams move forward with enough clarity, visibility, and control to make the transformation sustainable.",
        ],
        engagementLabel: "Possible engagement",
        engagementName: "Transformation Leadership",
        cta: "Discuss your transformation",
        detail: {
          paragraphs: [
            "For organizations that have chosen a direction and need experienced support to maintain alignment during execution.",
            "May include coordination between business and technology teams, delivery guidance, management of blockers and dependencies, decision preparation, and adaptation of the roadmap as conditions change.",
          ],
          receiveLabel: "You receive:",
          receive:
            "clearer coordination, visible decisions and risks, and sustained support as the organization moves through the transformation.",
        },
      },
    ],
    note: "Every engagement begins with a conversation. The scope is shaped around the organization's context, constraints, and existing teams.",
  },
  thinking: {
    eyebrow: "Thinking",
    headline: "Notes on clarity, decisions and change.",
    intro:
      "Three reflections drawn from working inside complex delivery environments, written to be read in full.",
    read: "Read the reflection",
    hide: "Close the reflection",
    carouselLabel: "Thinking, three reflections",
    articles: [
      {
        id: "delivery-active",
        title: "When delivery is active but progress still feels slow",
        paragraphs: [
          "A busy delivery environment can create the impression that an organization is moving quickly. Teams complete tickets, attend planning sessions, release changes and respond to urgent requests. Yet important outcomes may still take longer than expected.",
          "The difference often lies between activity and flow. A piece of work can move rapidly inside one team and then wait for an approval, an environment, a dependency or a decision owned elsewhere. Each delay may appear reasonable on its own. Together, they create a system in which people work hard while progress remains difficult to see.",
          "Adding pressure rarely resolves this kind of problem. It can increase parallel work, shorten conversations and make teams protect their own commitments. The organization becomes busier, but the path from an important decision to a useful result becomes less clear.",
          "A better starting point is to follow the work across its full journey. Where does it wait? Which decisions repeatedly arrive late? What information is missing when teams need to move? Which handoffs create uncertainty or rework? These questions shift the conversation away from individual performance and toward the conditions in which people are trying to deliver.",
          "Progress becomes easier to improve when the organization shares a picture of the whole path. The purpose is not to remove every control or dependency. It is to understand which ones protect the business, which ones have become habits, and which ones can be redesigned so that teams spend more energy on meaningful work.",
          "A simple but useful discipline is to make waiting visible alongside completed work. It changes the question from “Who needs to move faster?” to “What is preventing the work from moving?” That shift creates a more constructive basis for improvement.",
        ],
      },
      {
        id: "legacy",
        title: "Legacy is not only a technology problem",
        paragraphs: [
          "A legacy system is often described through its age, programming language or infrastructure. Those details matter, but they rarely explain why changing the system feels so difficult.",
          "Over time, an important application becomes connected to much more than code. It carries business rules, exceptions, controls, reporting needs and knowledge that may live only with a few experienced people. Teams build manual steps around it. Operations learn how to recognize unusual situations. Customers and employees adapt their behaviour to what the system can and cannot do.",
          "This means modernization is not simply the replacement of old technology with new technology. If the organization does not understand what people are compensating for, a new platform can reproduce the same friction behind a different interface. It may even remove safeguards that were never formally documented because everyone assumed they were part of the system.",
          "Before choosing an architecture, it is useful to ask what the existing environment is protecting, where it creates risk, and which workarounds have become essential to daily operations. The people closest to the work often hold answers that are absent from diagrams and inventories.",
          "A responsible modernization preserves what still has value, makes hidden knowledge visible and changes the environment in a sequence the organization can absorb. Sometimes that leads to replacement. Sometimes it leads to gradual simplification, better interfaces or clearer ownership. The objective is not to prove that the old system was wrong. It is to create a safer and more useful way forward.",
          "This perspective also changes how success is measured. A modern platform is not enough if daily work becomes harder or if risk becomes less visible. Success also depends on the ability of people to operate, understand and evolve the new environment after the project team has moved on.",
        ],
      },
      {
        id: "clarify-decision",
        title: "Clarify the decision before choosing the solution",
        paragraphs: [
          "Technology conversations often begin with a solution already in view: move to the cloud, automate a process, introduce artificial intelligence, adopt blockchain or replace a platform. The proposed technology may be valuable, but beginning there can make the organization solve the wrong problem with great efficiency.",
          "A useful decision starts with a clearer description of the situation. What outcome is the organization trying to improve? Who experiences the current friction? What operational constraint cannot be ignored? Which risk must be reduced, and which risk is the organization prepared to accept? What would become possible if the problem were addressed?",
          "These questions do not delay action. They create the conditions for action that can be explained and supported. They also reveal when several problems have been combined under one technology initiative. A platform replacement may contain questions about ownership, process, data quality, skills and governance. Treating them as one purchase makes trade-offs harder to see.",
          "Once the decision is clear, technology options can be compared against the same needs and constraints. The organization can understand why one path is appropriate, why another can wait, and what must be learned before committing further.",
          "Clarity does not remove uncertainty. Transformation always contains assumptions and new information. It does, however, make uncertainty visible and manageable. The goal is not to predict every detail at the beginning. It is to make the next decision with enough shared understanding that people can move forward, observe what changes and adjust without losing the original purpose.",
          "A clear decision can also be communicated beyond the people who made it. Teams can connect their work to the intended outcome, raise a concern when reality changes and understand why an apparently attractive option was deliberately postponed. That shared rationale supports learning during execution.",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Get in Touch",
    headline: "A useful conversation can begin before the solution is clear.",
    body: "If something is slowing progress, creating uncertainty, or becoming harder to manage, you do not need to arrive with a finished brief. Tell me what you are seeing, and we can begin by clarifying the situation.",
    formLabel: "Contact form",
    fields: {
      name: "Name",
      email: "Work email",
      organization: "Organization",
      message: "What would you like to make clearer or move forward?",
      consent:
        "I agree that Group Pheniiix Ankh Inc. may use this information to respond to my inquiry.",
    },
    optional: "optional",
    submit: "Start a conversation",
    sending: "Sending…",
    note: "The first conversation is exploratory and carries no obligation.",
    success:
      "Thank you. Your message has been received. I will respond personally within two business days.",
    error:
      "Your message could not be sent. Your text has been preserved. Please try again or email brice.mimifir.a@gmail.com.",
    errors: {
      name: "Please enter your name (2 to 80 characters).",
      email: "Please enter a valid email address.",
      organization: "Organization must be 120 characters or fewer.",
      message: "Please describe your situation (20 to 2000 characters).",
      consent: "Please confirm your consent so I can respond to you.",
    },
  },
  footer: {
    statement: "Helping organizations move from friction to clear, controlled change.",
    navLabel: "Footer navigation",
    connectLabel: "Connect",
    privacy: "Privacy",
    accessibility: "Accessibility",
    copyright: (year: number) => `© ${year} Group Pheniiix Ankh Inc. — Professional website of Brice Mimifir.`,
  },
  privacy: {
    title: "Privacy",
    updated: "Last updated: August 2026",
    paragraphs: [
      "Group Pheniiix Ankh Inc. collects only the information you choose to provide through the contact form: your name, work email, organization if supplied, message and consent. This information is used only to review your inquiry, respond to you and maintain the related business correspondence.",
      "The website does not use advertising or analytics cookies in this version. A local browser preference may be stored to remember your language selection.",
      "Contact form submissions are processed through infrastructure hosted by Vercel and delivered by Resend. Information may therefore be processed by these service providers solely to operate the website and transmit the message. The website does not sell personal information or use contact submissions for automatic marketing enrollment.",
      "Information is retained only for as long as reasonably necessary to respond to the inquiry, maintain appropriate business records and meet applicable legal obligations. Access is limited to those who need it for these purposes.",
      "You may request access to, correction of or deletion of the personal information associated with your inquiry, subject to applicable requirements. You may also withdraw consent for future use where applicable.",
      "For a privacy question or request, contact Brice Mimifir at brice.mimifir.a@gmail.com.",
      "This notice may be updated when the website, its service providers or its information practices change. A revised date will be displayed on this page.",
    ],
  },
  accessibility: {
    title: "Accessibility",
    paragraphs: [
      "Group Pheniiix Ankh Inc. wants this website to be usable by as many people as possible. The site is designed with WCAG 2.2 Level AA as its accessibility target, without claiming formal certification.",
      "The implementation includes semantic headings and landmarks, keyboard navigation, visible focus states, a skip link, labeled form controls, accessible menu, tabs, accordions and carousels, sufficient color contrast, responsive text, meaningful alternative text and support for reduced-motion preferences.",
      "The website is tested at common mobile, tablet and desktop widths, with keyboard-only navigation and browser zoom up to 200 percent. Content and essential actions must not depend on color, hover or animation alone.",
      "If you encounter a barrier or need information in another format, email brice.mimifir.a@gmail.com and describe the page, feature or content concerned. A reasonable effort will be made to respond and provide an accessible alternative.",
    ],
  },
  notFound: {
    title: "This page could not be found.",
    body: "The address may have changed, or the page may no longer be available.",
    cta: "Return home",
  },
};
