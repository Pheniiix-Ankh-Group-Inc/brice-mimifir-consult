# Architecture et contenu du projet Brice MIMIFIR

> État documenté : 13 août 2026  
> Branche de travail : `feature/update`  
> Statut : documentation du workspace local, avant publication sur GitHub/Vercel.

## 1. Vue générale

Le projet est le site professionnel bilingue de Brice MIMIFIR. Il est construit avec Next.js App Router et présente une offre de consultation centrée sur la modernisation Java, AWS et la fiabilisation des livraisons.

| Élément                  | Choix actuel                         |
| ------------------------ | ------------------------------------ |
| Framework                | Next.js 16.3                         |
| Interface                | React 19                             |
| Langage                  | TypeScript 6 en mode strict          |
| CSS                      | Tailwind CSS 4                       |
| Validation               | Zod 4                                |
| Runtime                  | Node.js 22                           |
| Gestionnaire de paquets  | npm                                  |
| Hébergement cible        | Vercel                               |
| Source principale prévue | GitHub                               |
| Envoi des courriels      | Resend                               |
| Base de données          | Aucune                               |
| CMS                      | Aucun                                |
| Authentification         | Aucune                               |
| Analytique               | Aucune                               |
| Tests automatisés        | Retirés à la demande du propriétaire |
| Playwright               | Retiré                               |

Les dépendances et scripts sont définis dans [`package.json`](../package.json).

## 2. Architecture des dossiers

```text
brice-mimifir-consult/
├── app/
│   ├── [lang]/
│   │   ├── [...notFound]/page.tsx
│   │   ├── accessibility/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── error.tsx
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── api/
│   │   ├── contact/route.ts
│   │   └── locale/route.ts
│   ├── global-error.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── public/
│   ├── favicon.png
│   └── images/
│       ├── hero-editorial-temporary.jpg
│       └── logo-brice-mimifir.png
│
├── src/
│   ├── assets/fonts/
│   │   ├── manrope-variable.ttf
│   │   ├── newsreader-variable.ttf
│   │   └── OFL.txt
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BrandLogo.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── FullscreenMenu.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── LanguageToggle.tsx
│   │   │   └── PageShell.tsx
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Challenge.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── HowIHelp.tsx
│   │   │   ├── Thinking.tsx
│   │   │   └── contact-state.ts
│   │   ├── icons/SocialIcons.tsx
│   │   ├── Carousel.tsx
│   │   └── Reveal.tsx
│   ├── content/
│   │   ├── en.ts
│   │   ├── fr.ts
│   │   ├── site.ts
│   │   └── types.ts
│   ├── i18n/
│   │   ├── config.ts
│   │   └── get-dictionary.ts
│   ├── lib/
│   │   ├── metadata.ts
│   │   ├── scroll.ts
│   │   └── site-url.ts
│   ├── server/
│   │   ├── contact/
│   │   │   ├── contact-handler.ts
│   │   │   ├── contact-service.ts
│   │   │   ├── email-template.ts
│   │   │   └── schema.ts
│   │   └── locale/
│   │       └── locale-handler.ts
│   └── styles.css
│
├── docs/
│   ├── deployment.md
│   ├── architecture-et-contenu-du-projet.md
│   └── superpowers/
│       ├── plans/
│       └── specs/
│
├── .github/workflows/ci.yml
├── .env.example
├── CHANGELOG.md
├── README.md
├── next.config.ts
├── proxy.ts
├── tsconfig.json
└── vercel.json
```

Le dossier `src` est volontairement conservé. Next.js n’impose pas de placer tous les fichiers dans `app` : `app` contient le routage, tandis que `src` regroupe les composants, contenus, services et utilitaires.

## 3. Architecture fonctionnelle

```text
Navigateur
   ↓
proxy.ts
   ↓
Détection FR/EN
   ↓
app/[lang]/layout.tsx
   ↓
Dictionnaire src/content/fr.ts ou src/content/en.ts
   ↓
app/[lang]/page.tsx
   ↓
PageShell
   ├── Header et menu
   ├── Sections éditoriales
   └── Footer
```

La page d’accueil assemble les sections dans cet ordre :

1. Hero ;
2. Enjeux ;
3. Offre ;
4. Réalisations ;
5. Perspectives ;
6. À propos ;
7. Contact ;
8. Footer.

L’assemblage se trouve dans [`app/[lang]/page.tsx`](../app/[lang]/page.tsx).

## 4. Routes

| Route               | Fonction                                     |
| ------------------- | -------------------------------------------- |
| `/`                 | Redirection selon la préférence linguistique |
| `/fr`               | Accueil français                             |
| `/en`               | Accueil anglais                              |
| `/fr/privacy`       | Politique de confidentialité                 |
| `/en/privacy`       | Privacy policy                               |
| `/fr/accessibility` | Déclaration d’accessibilité                  |
| `/en/accessibility` | Accessibility statement                      |
| `/api/contact`      | Envoi sécurisé du formulaire                 |
| `/api/locale`       | Enregistrement de la langue                  |
| `/robots.txt`       | Directives d’indexation                      |
| `/sitemap.xml`      | Sitemap bilingue                             |
| toute autre route   | Page 404 localisée                           |

Les pages françaises et anglaises sont pré-rendues statiquement pendant le build.

## 5. Gestion des langues

La langue est résolue dans cet ordre :

1. cookie `bm-locale` créé après un choix explicite ;
2. en-tête navigateur `Accept-Language` ;
3. anglais comme langue de repli.

Le visiteur est redirigé avec un statut `307` vers `/fr` ou `/en`.

Le cookie linguistique est :

- valide un an ;
- `HttpOnly` ;
- `SameSite=Lax` ;
- `Secure` en production.

Les contenus sont centralisés dans :

- [`src/content/fr.ts`](../src/content/fr.ts) ;
- [`src/content/en.ts`](../src/content/en.ts) ;
- [`src/content/types.ts`](../src/content/types.ts).

Il n’existe pas de CMS. Toute modification éditoriale passe par ces dictionnaires typés.

## 6. Composants et interactions

### 6.1 Header et menu

- Header transparent au-dessus du Hero.
- Devient compact après le défilement.
- Se masque en descendant et réapparaît en remontant.
- Menu plein écran.
- Fermeture avec `Escape`.
- Piège de focus accessible.
- Navigation directe vers les ancres de la page.
- Sélecteur français/anglais.

### 6.2 Carrousels

Les carrousels sont utilisés pour les enjeux et les perspectives :

- défilement horizontal ;
- boutons précédent/suivant ;
- gestes tactiles ;
- navigation avec les flèches du clavier ;
- aucun défilement automatique ;
- compteur accessible.

### 6.3 Offre

- Onglets sur ordinateur.
- Accordéons sur mobile.
- Navigation clavier avec les flèches, `Home` et `End`.

### 6.4 Réalisations

- Onglets Banque Nationale/CGI sur ordinateur.
- Accordéons sur mobile.
- Contexte technique propre à chaque réalisation.
- Accordéon distinct « Expériences complémentaires ».

### 6.5 Perspectives

- Trois cartes dans un carrousel.
- Chaque réflexion peut être ouverte intégralement sous le carrousel.

### 6.6 Animations

Le composant `Reveal` utilise `IntersectionObserver`. Les animations sont désactivées lorsque l’utilisateur préfère une réduction des mouvements.

## 7. Système visuel

### 7.1 Couleurs

| Token         | Valeur    | Usage                    |
| ------------- | --------- | ------------------------ |
| Midnight      | `#101E2D` | Fonds principaux, titres |
| Deep Midnight | `#0B1621` | Footer                   |
| Ivory         | `#F3EFE6` | Sections éditoriales     |
| Soft White    | `#FBFAF7` | Arrière-plan clair       |
| Brass         | `#B9975B` | Accents et séparateurs   |
| Slate         | `#55616B` | Textes secondaires       |
| Ink           | `#182635` | Texte principal          |
| Muted         | `#6F7A83` | Informations secondaires |

### 7.2 Typographie

- `Newsreader` pour les titres.
- `Manrope` pour les textes, menus et formulaires.
- Polices auto-hébergées dans `src/assets/fonts`.

### 7.3 Hero

- Desktop : contenu 56 %, image 44 %.
- Image : `public/images/hero-editorial-temporary.jpg`.
- Aucun portrait personnel dans le projet.
- Mobile : texte puis image verticale.

Le système complet est défini dans [`src/styles.css`](../src/styles.css).

## 8. Contenu éditorial du site

### 8.1 Identité

| Français                                                 | English                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- |
| Brice MIMIFIR                                            | Brice MIMIFIR                                            |
| Consultant Java senior — Modernisation applicative & AWS | Senior Java Consultant — Application Modernization & AWS |
| Modernisation Java, AWS & livraison continue             | Java Modernization, AWS & Continuous Delivery            |

Entité juridique : `Groupe Pheniiix Ankh Inc.`

Le monogramme officiel détouré est stocké dans `public/images/logo-brice-mimifir.png`. Le composant `BrandLogo` l'affiche dans l'en-tête, le menu plein écran et le pied de page. Une déclinaison 128 × 128 px est utilisée dans `public/favicon.png`.

Coordonnées et liens :

- courriel : `contact@bricemimifir.com` ;
- LinkedIn : <https://www.linkedin.com/in/brice-mimifir> ;
- Instagram : <https://www.instagram.com/bricemimifir/> ;
- ANBACHAIN : <https://www.anbachain.org/> ;
- Future Caribbean : <https://futurecaribbean.com/>.

### 8.2 Navigation

| Nº  | Français     | English          |
| --- | ------------ | ---------------- |
| 01  | Enjeux       | Challenges       |
| 02  | Offre        | How I Contribute |
| 03  | Réalisations | Experience       |
| 04  | Perspectives | Perspectives     |
| 05  | À propos     | About            |
| 06  | Contact      | Contact          |

### 8.3 Hero

#### Français

- Sur-titre : « Brice MIMIFIR — Consultant Java senior & AWS ».
- Titre : « Faire évoluer vos systèmes, avec vos équipes. »
- Positionnement : intégration aux équipes TI pour faire évoluer les applications Java, automatiser les déploiements et accompagner les changements jusqu’en production.
- CTA principal : « Planifier un échange ».
- CTA secondaire : « Découvrir mon approche ».
- Mode affiché : « Consultation ».
- Localisation : « Montréal · Canada ».

#### English

- Eyebrow: “Brice MIMIFIR — Senior Java & AWS Consultant”.
- Headline: “Evolving your systems, alongside your teams.”
- Primary CTA: “Plan a conversation”.
- Secondary CTA: “Explore my approach”.
- Engagement: “Advisory”.

### 8.4 Enjeux

Titre français :

> Des blocages techniques qui finissent par peser sur les équipes et la valeur livrée.

Trois problématiques sont présentées :

1. **Applications difficiles à faire évoluer** — accumulation de règles, d’intégrations, de décisions historiques et de dette technique.
2. **Mises en production longues et exigeantes** — étapes manuelles, environnements différents et validations dispersées.
3. **Intégrations qui ajoutent de la complexité** — cloud, identité, services externes et architectures événementielles à intégrer sans interrompre les systèmes existants.

Conclusion :

> L’objectif n’est pas de remplacer tout ce qui existe. Il est de déterminer ce qui doit évoluer, dans quel ordre et avec quel niveau de risque acceptable.

Version anglaise : “Technical friction eventually affects both teams and the value they deliver.”

### 8.5 Offre

Titre :

> Faire évoluer l’existant sans désorganiser ce qui fonctionne.

L’offre repose sur trois piliers.

#### Pilier 1 — Modernisation applicative

- Java ;
- API ;
- interfaces ;
- migration Java ;
- SOAP vers REST ;
- décomposition progressive ;
- modernisation d’interfaces.

Résultat recherché : une trajectoire lisible et des changements que les équipes peuvent absorber.

#### Pilier 2 — Fiabilisation des livraisons

- AWS ;
- Terraform ;
- Jenkins ;
- Docker ;
- Kubernetes ;
- harmonisation des environnements ;
- automatisation des pipelines.

Résultat recherché : moins d’efforts manuels et des mises en production plus prévisibles.

#### Pilier 3 — Intégrations et sécurité

- services externes ;
- flux événementiels ;
- identité ;
- plateformes cloud ;
- contrats d’intégration ;
- scénarios d’erreur ;
- surveillance.

Résultat recherché : des intégrations compréhensibles et exploitables par les équipes.

#### Mode d’intervention actuel

Uniquement :

- « Consultation » ;
- “Advisory”.

Les modes « Sous-traitance intégrée » et « Mandat au forfait » ont été retirés selon les dernières décisions du propriétaire.

### 8.6 Réalisations sélectionnées

#### Banque Nationale du Canada

- Rôle : Développeur Java senior.
- Période : janvier 2021 à mai 2025.
- Durée : 4 ans et 5 mois.
- Contexte : environnement bancaire fortement réglementé.

Contributions documentées :

- migration de 39 services SOAP vers REST ;
- modernisation de Java 8 vers Java 21 ;
- migration de trois modules AngularJS 1.7 vers React 18 ;
- application utilisée sur plus de 2 500 postes ;
- réduction collective d’un cycle de livraison de six à deux semaines ;
- conception de 13 modules Terraform réutilisables ;
- déploiement et dépannage sur Amazon EKS ;
- transition vers Genesys Cloud CX ;
- configuration EventBridge et connecteur Genesys ;
- flux Kafka liés aux transactions et à la fraude ;
- migration d’identité vers Microsoft Entra ID ;
- production, post-incidents et actions correctives ;
- revues de code et accompagnement de développeurs.

Contexte technique associé :

- Java 8 à 21 ;
- Spring et Spring Boot ;
- REST et SOAP ;
- React et AngularJS ;
- AWS, EKS, S3, DynamoDB, Lambda, SQS et EventBridge ;
- Terraform ;
- Docker et Kubernetes ;
- Jenkins ;
- Kafka ;
- Genesys Cloud CX ;
- Entra ID ;
- SonarQube et Snyk ;
- Splunk, Datadog et CloudWatch ;
- Remedy et ServiceNow.

#### CGI — secteur public

- Rôle : Développeur Java — Consultant.
- Période : juin 2019 à janvier 2021.
- Durée : 1 an et 8 mois.

##### Ville de Montréal

- refonte de montreal.ca ;
- backend Drupal 8 ;
- formulaires pour les services aux citoyens ;
- Form API, FormBase et Webform Handlers ;
- validations métier ;
- AJAX et formulaires en plusieurs étapes ;
- intégrations REST avec les systèmes internes.

##### Ministère de la Santé de la Colombie-Britannique

- développement et maintenance d’applications gouvernementales ;
- Oracle Forms ;
- Java et EJB ;
- PrimeFaces ;
- PL/SQL ;
- diagnostic d’incidents ;
- Jenkins et Docker ;
- build et déploiement.

#### Expériences complémentaires

Présentées dans un accordéon séparé :

- GitHub Copilot ;
- Claude Code ;
- Python et Node.js ;
- intégrations de modèles d’intelligence artificielle ;
- recherche augmentée par récupération — RAG ;
- KYC/KYB avec Sumsub ;
- OAuth2 et OpenID Connect ;
- Solidity ;
- Stellar, Ethereum et Hedera ;
- Web3.js et Ethers.js.

Ces éléments sont présentés comme travaux complémentaires, intégrations en cours ou prototypes, pas comme plateformes déjà livrées en production.

### 8.7 Perspectives

Titre :

> Des réflexions issues du terrain, sans solution universelle.

Trois articles complets sont intégrés dans les dictionnaires :

1. **Passer de Java 8 à Java 21 sans casser la production** — dépendances, tests, migration progressive, observabilité et transmission des connaissances.
2. **Pourquoi les mises en production prennent des semaines** — attentes, dépendances, validations, Infrastructure as Code, pipelines et responsabilités.
3. **Intégrer l’IA dans les workflows de développement** — cas d’usage réalistes, contexte, sécurité, vérification humaine et responsabilité collective.

Chaque article contient cinq paragraphes. Les versions anglaises sont également complètes.

### 8.8 À propos de Brice

Titre :

> Comprendre, construire et transmettre.

Le récit présente :

- un parcours technologique commencé en 2014 ;
- une première expérience proche des utilisateurs dans le soutien, le déploiement et les incidents ;
- une évolution vers le développement et la consultation ;
- une expérience des secteurs public, bancaire et réglementé ;
- une approche progressive et collaborative ;
- l’importance de l’apprentissage et de la transmission ;
- un intérêt pour les technologies émergentes et la Caraïbe.

#### Principes

1. Écouter avant de proposer.
2. Construire avec les équipes.
3. Avancer progressivement.
4. Partager ce qui a été appris.

#### Future Caribbean

- participation à un buildathon international ;
- solutions d’intelligence artificielle agentique ;
- problèmes concrets de la Caraïbe ;
- apprentissage, expérimentation et réalités locales.

#### ANBACHAIN

- Brice est cofondateur ;
- communauté autour de la blockchain, du Web3 et de l’intelligence artificielle ;
- partage de connaissances ;
- création de liens et apprentissage collectif.

La section « Au-delà des mandats » n’existe plus séparément. Son contenu est fusionné dans « À propos », sans photographie.

### 8.9 Contact

Titre :

> Commençons par le contexte, pas par la solution.

Champs :

- nom complet ;
- courriel professionnel ;
- entreprise ou agence, facultatif ;
- message ;
- consentement obligatoire.

Contact direct :

- `contact@bricemimifir.com` ;
- mode affiché : « Consultation ».

Des messages localisés sont disponibles pour :

- le succès ;
- une validation invalide ;
- une erreur d’envoi ;
- l’indisponibilité ;
- la limitation de requêtes.

### 8.10 Footer

Le footer contient :

- identité de Brice ;
- positionnement ;
- mention légale de Groupe Pheniiix Ankh Inc. ;
- navigation ;
- courriel ;
- LinkedIn ;
- Instagram avec icône ;
- ANBACHAIN ;
- changement de langue ;
- confidentialité ;
- accessibilité ;
- copyright dynamique.

## 9. Pages légales et système

### 9.1 Confidentialité

La page précise notamment :

- les données recueillies ;
- l’usage limité à la réponse ;
- l’absence d’inscription marketing ;
- l’absence de cookies analytiques ou publicitaires ;
- le cookie linguistique ;
- le traitement par Vercel et Resend ;
- la durée de conservation ;
- les droits d’accès, de correction et de suppression.

### 9.2 Accessibilité

Objectif déclaré : WCAG 2.2 niveau AA, sans certification formelle.

Sont documentés :

- structure sémantique ;
- navigation clavier ;
- focus visible ;
- lien d’évitement ;
- libellés de formulaire ;
- contrastes ;
- réduction des animations ;
- zoom jusqu’à 200 % ;
- procédure de signalement d’un obstacle.

### 9.3 Erreurs

- Page 404 localisée.
- Erreur de page localisée avec action « Réessayer ».
- Erreur globale bilingue de dernier recours.

## 10. SEO

Le SEO comprend :

- titres et descriptions français/anglais ;
- URL canonical ;
- `hreflang` français, anglais et `x-default` ;
- Open Graph ;
- Twitter Cards ;
- attribut `html lang` ;
- sitemap bilingue ;
- robots ;
- previews Vercel en `noindex` ;
- production indexable ;
- données structurées JSON-LD.

Les données structurées décrivent :

- `Person` : Brice MIMIFIR ;
- `Organization` : Groupe Pheniiix Ankh Inc. ;
- `ProfessionalService` : services Java, AWS, livraison continue et intégration.

`SITE_URL` est obligatoire lors d’un build Vercel Production.

## 11. Formulaire et sécurité

```text
Formulaire
   ↓
Validation dans le navigateur
   ↓
POST /api/contact
   ↓
Contrôle Content-Type et origine
   ↓
Limite de 16 Ko
   ↓
Validation Zod
   ↓
Honeypot + délai minimal de 2,5 secondes
   ↓
Resend avec clé d’idempotence
   ↓
Succès uniquement après acceptation par Resend
```

Protections :

- consentement obligatoire ;
- validation client et serveur ;
- UUID par envoi ;
- idempotence ;
- honeypot invisible ;
- contrôle d’origine ;
- limite de taille ;
- délai minimal ;
- timeout Resend de dix secondes ;
- aucun renseignement personnel dans les logs ;
- WAF Vercel recommandé : cinq requêtes par dix minutes et par IP.

Variables :

```env
SITE_URL=
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

## 12. En-têtes de sécurité

Les en-têtes suivants sont configurés globalement :

- `X-Content-Type-Options: nosniff` ;
- `X-Frame-Options: DENY` ;
- `Referrer-Policy: strict-origin-when-cross-origin` ;
- `Permissions-Policy` ;
- HSTS uniquement en production.

## 13. CI et déploiement

La CI GitHub s’exécute :

- sur chaque pull request ;
- sur chaque push vers `main`.

Commandes :

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

Workflow cible :

```text
Branche de travail
   ↓
Pull request GitHub
   ↓
CI
   ↓
Preview Vercel
   ↓
Validation
   ↓
Fusion dans main
   ↓
Production Vercel
```

Le guide opérationnel complet se trouve dans [`docs/deployment.md`](deployment.md).

## 14. Fichiers de référence à maintenir

| Besoin                                       | Fichier                                                                         |
| -------------------------------------------- | ------------------------------------------------------------------------------- |
| Modifier le contenu français                 | [`src/content/fr.ts`](../src/content/fr.ts)                                     |
| Modifier le contenu anglais                  | [`src/content/en.ts`](../src/content/en.ts)                                     |
| Modifier le modèle éditorial                 | [`src/content/types.ts`](../src/content/types.ts)                               |
| Modifier les liens officiels                 | [`src/content/site.ts`](../src/content/site.ts)                                 |
| Modifier l’ordre des sections                | [`app/[lang]/page.tsx`](../app/[lang]/page.tsx)                                 |
| Modifier le système visuel                   | [`src/styles.css`](../src/styles.css)                                           |
| Modifier le formulaire                       | [`src/components/sections/Contact.tsx`](../src/components/sections/Contact.tsx) |
| Modifier le traitement serveur du formulaire | [`src/server/contact`](../src/server/contact)                                   |
| Modifier la détection linguistique           | [`src/i18n/config.ts`](../src/i18n/config.ts)                                   |
| Modifier le SEO                              | [`src/lib/metadata.ts`](../src/lib/metadata.ts)                                 |
| Modifier la configuration Next.js            | [`next.config.ts`](../next.config.ts)                                           |
| Modifier la documentation générale           | [`README.md`](../README.md)                                                     |
| Consulter l’historique                       | [`CHANGELOG.md`](../CHANGELOG.md)                                               |

## 15. État éditorial v2.1

Les éléments v2.1 actuellement appliqués sont :

- nouveau titre court du Hero en français et en anglais ;
- ancienne image éditoriale conservée dans le Hero ;
- absence complète du portrait personnel ;
- fusion de « À propos » et « Au-delà des mandats » ;
- contenus Future Caribbean et ANBACHAIN intégrés à « À propos » ;
- réalisations Banque Nationale et CGI conservées ;
- contexte technique associé à chaque réalisation ;
- accordéon séparé « Expériences complémentaires » ;
- offre limitée à « Consultation / Advisory » selon les décisions postérieures à la v2.1.
