# Experience Interaction Design

**Status:** Approved for implementation

## Objective

Adapt “Réalisations sélectionnées” / “Selected experience” to the interaction language already used by “Une intervention intégrée et collaborative” / “An integrated, collaborative contribution”, without changing the approved case-study narratives, indicators or visual identity.

## Primary experience navigation

- Keep National Bank of Canada and CGI public sector as the only two client realizations.
- On desktop from `1024px`, present the two realizations as an accessible tab list.
- Reuse the offer section's restrained tab treatment: uppercase Manrope labels, fine bottom rule, Brass active indicator and no cards or rounded containers.
- Activate National Bank of Canada initially.
- Support pointer activation and the standard tab keyboard interactions: `ArrowLeft`, `ArrowRight`, `Home` and `End`.
- Associate every tab with one `tabpanel` through stable `id`, `aria-controls` and `aria-labelledby` values.

## Mobile interaction

- Below `1024px`, present the same two realizations as accordions separated by fine rules.
- Open National Bank of Canada initially.
- Use semantic buttons with `aria-expanded` and `aria-controls`.
- Preserve the complete reading order inside each realization: metadata, context, contribution sections, contextual indicators and conclusion.

## Per-realization technical context

- Remove the current global technical-context accordion.
- Add an internal technical-context accordion at the end of each client realization.
- Use localized “Voir le contexte technique” / “View the technical context” and hide labels.
- Each accordion contains only technologies demonstrably associated with that realization.

### National Bank of Canada

- Application: Java 8 through Java 21, Spring, Spring Boot, REST APIs, SOAP services, React 18 and AngularJS 1.7.
- Cloud and delivery: AWS, Amazon EKS, Amazon S3, DynamoDB, AWS Lambda, Amazon SQS, Amazon EventBridge, Terraform, Docker, Kubernetes, Jenkins and CI/CD.
- Integrations and identity: Apache Kafka, Genesys Cloud CX, Genesys connector, Amazon EventBridge and Microsoft Entra ID.
- Quality, security and production: automated compatibility testing, code reviews, production support, post-incident analysis, Splunk, Datadog, CloudWatch, SonarQube, Snyk and Snyk Code.

### CGI, public sector

- Montréal engagement: Drupal 8, PHP, Drupal Form API, FormBase, Webform Handlers, AJAX, multistep forms and REST APIs.
- British Columbia Ministry of Health engagement: Oracle Forms, Java, EJB, PrimeFaces, PL/SQL, Jenkins and Docker.
- Operations: production incident diagnosis and resolution, build and deployment activities.

The dictionaries may phrase and group these items naturally in French and English, but must not introduce technologies absent from the approved v2 technical context or duplicate unrelated items across realizations.

## Complementary experience

- Keep one independent accordion after the two client realizations.
- Label it “Expériences complémentaires” in French and “Complementary experience” in English.
- Do not present it as a third client tab or case study.
- Preserve the current qualification that these items represent complementary work, integrations in progress or prototyping and are not production-delivered platforms.
- Preserve these items: GitHub Copilot, Claude Code, Python, Node.js, AI model and API integrations, RAG, Sumsub KYC/KYB, OAuth2, OpenID Connect, Solidity smart-contract prototyping, Stellar, Ethereum, Hedera, Web3.js and Ethers.js.

## Content model

- Give every case study a stable `id`, localized short tab label and its own technical-context object.
- Move shared technical-context UI labels to the experience level.
- Replace the global technical groups with one complementary-experience object containing its localized label, groups and qualification note.
- Keep all existing client narratives, dates, indicators and conclusions unchanged in both dictionaries.

## Visual and accessibility constraints

- Preserve the current Ivory section surface, Newsreader and Manrope typography, Brass accents, spacing tokens and fine separators.
- Do not introduce new colors, shadows, cards, rounded containers, automatic motion or external dependencies.
- Keep the internal technical accordions independent: opening technical context in one realization does not affect the other realization or the complementary accordion.
- Hidden panels must not remain keyboard-focusable.
- Maintain visible focus states and a minimum interactive height of `44px`.

## Verification

- Confirm desktop tab and mobile accordion behaviour in both languages.
- Confirm each technical context contains only the technologies assigned to its realization.
- Confirm the complementary experience remains separate and qualified.
- Confirm all narratives and indicators remain present.
- Run Prettier, ESLint, TypeScript, the Next.js production build and `git diff --check`.
