import { SITE } from "./site";
import type { Content } from "./types";

export const fr: Content = {
  meta: {
    title: "Brice MIMIFIR | Consultant Java senior & AWS",
    description:
      "Consultant Java senior à Montréal, Brice MIMIFIR accompagne les équipes TI dans la modernisation applicative, AWS, Terraform et la livraison continue.",
    openGraphTitle: "Brice MIMIFIR — Modernisation Java, AWS & livraison continue",
    openGraphDescription:
      "Une expertise Java et AWS intégrée à vos équipes pour moderniser les applications, fiabiliser les déploiements et accompagner les changements jusqu’en production.",
  },
  brand: {
    name: "Brice MIMIFIR",
    title: "Consultant Java senior — Modernisation applicative & AWS",
    tagline: "Modernisation Java, AWS & livraison continue",
  },
  common: {
    menu: "Menu",
    close: "Fermer",
    skipToContent: "Aller au contenu",
    language: "Langue",
    location: "Montréal, Canada",
    email: SITE.email,
    linkedin: "LinkedIn",
    linkedinLabel: "Profil LinkedIn de Brice MIMIFIR",
    instagram: "Instagram",
    instagramLabel: "Profil Instagram de Brice MIMIFIR",
    anbachain: "ANBACHAIN",
    newTab: "ouvre un nouvel onglet",
    previous: "Précédent",
    next: "Suivant",
    of: "sur",
  },
  nav: [
    { id: "challenge", number: "01", label: "Enjeux", short: "Enjeux" },
    { id: "how-i-help", number: "02", label: "Offre", short: "Offre" },
    { id: "experience", number: "03", label: "Réalisations", short: "Réalisations" },
    { id: "thinking", number: "04", label: "Perspectives", short: "Perspectives" },
    { id: "about", number: "05", label: "À propos", short: "À propos" },
    { id: "contact", number: "06", label: "Contact", short: "Contact" },
  ],
  hero: {
    eyebrow: "Brice MIMIFIR — Consultant Java senior & AWS",
    headlineLines: ["Faire évoluer vos systèmes,", "avec vos équipes."],
    body: "Je m’intègre aux équipes TI pour faire évoluer des applications Java existantes, automatiser les déploiements et accompagner les changements jusqu’en production. Mon expérience en environnement bancaire m’a appris à avancer avec méthode, en tenant compte des contraintes techniques, opérationnelles et humaines.",
    primaryCta: "Planifier un échange",
    secondaryCta: "Découvrir mon approche",
    supportingLine: "Consultation",
    location: "Montréal · Canada",
    scroll: "Défiler",
    imageAlt:
      "Photographie éditoriale temporaire : lumière du jour à travers de hautes fenêtres dans un hall de pierre silencieux.",
  },
  challenge: {
    eyebrow: "Au cœur de vos problématiques techniques",
    headlineLines: [
      "Des blocages techniques",
      "qui finissent par peser sur les équipes",
      "et la valeur livrée.",
    ],
    intro:
      "Les difficultés de modernisation viennent rarement du code uniquement. Elles se trouvent aussi dans les dépendances, les processus de livraison, les contraintes de production et la connaissance accumulée par les équipes. Avant de proposer une solution, il faut comprendre comment ces éléments fonctionnent ensemble.",
    findingLabel: "Le constat",
    impactLabel: "L’impact",
    slides: [
      {
        number: "01",
        title: "Des applications difficiles à faire évoluer",
        finding:
          "Les applications cœur de métier portent des années de règles, d’intégrations et de décisions techniques. Chaque modification peut avoir des conséquences difficiles à prévoir, tandis que la dette technique continue de s’accumuler.",
        impact:
          "Les équipes consacrent davantage de temps à protéger l’existant, les nouvelles fonctionnalités prennent plus longtemps à livrer et la maintenance devient plus coûteuse.",
      },
      {
        number: "02",
        title: "Des mises en production longues et exigeantes",
        finding:
          "Les déploiements dépendent encore d’étapes manuelles, d’environnements différents et de validations dispersées entre plusieurs équipes.",
        impact:
          "Les mises en production deviennent des événements stressants, les retours sont plus lents et une part importante de l’énergie est consacrée à coordonner le processus plutôt qu’à améliorer le produit.",
      },
      {
        number: "03",
        title: "Des intégrations qui ajoutent de la complexité",
        finding:
          "La migration vers le cloud, l’ajout de services externes, les nouveaux mécanismes d’identité ou les architectures événementielles doivent s’intégrer à des systèmes qui continuent de fonctionner.",
        impact:
          "Les dépendances se multiplient, les responsabilités deviennent moins claires et la charge opérationnelle augmente pour les développeurs.",
      },
    ],
    conclusion:
      "L’objectif n’est pas de remplacer tout ce qui existe. Il est de déterminer ce qui doit évoluer, dans quel ordre et avec quel niveau de risque acceptable.",
    carouselLabel: "Trois enjeux techniques",
  },
  howIHelp: {
    eyebrow: "Une intervention intégrée et collaborative",
    headline: "Faire évoluer l’existant sans désorganiser ce qui fonctionne.",
    intro:
      "J’accompagne les équipes qui doivent moderniser des applications Java, fiabiliser leurs déploiements ou intégrer de nouveaux services. Je commence par comprendre l’environnement, les contraintes de production et les responsabilités déjà en place. L’intervention est ensuite adaptée au contexte, plutôt qu’à une technologie prédéterminée.",
    tablistLabel: "Les trois piliers de mon intervention",
    steps: [
      {
        id: "modernization",
        tab: "Modernisation applicative",
        number: "Pilier 01",
        headline: "Faire évoluer les applications de manière progressive.",
        body: "Je contribue à la modernisation des composants Java, des API et des interfaces en tenant compte des dépendances existantes. Selon le contexte, cela peut comprendre une mise à niveau de Java, le passage de SOAP vers REST, la décomposition progressive de services ou l’évolution d’une interface vieillissante.",
        outcomeLabel: "Ce que cela apporte",
        outcome:
          "Un chemin de modernisation plus lisible, des changements mieux testés et une évolution que les équipes peuvent absorber sans transformation inutilement brutale.",
      },
      {
        id: "delivery",
        tab: "Fiabilisation des livraisons",
        number: "Pilier 02",
        headline: "Rendre les déploiements plus répétables et plus faciles à maîtriser.",
        body: "Je travaille avec les équipes pour automatiser l’infrastructure et les pipelines, réduire les différences entre environnements et rendre les étapes de livraison plus visibles. AWS, Terraform, Jenkins, Docker et Kubernetes sont utilisés lorsqu’ils répondent aux contraintes réelles de l’organisation.",
        outcomeLabel: "Ce que cela apporte",
        outcome:
          "Moins d’efforts manuels, des mises en production plus prévisibles et davantage de temps consacré au développement utile.",
      },
      {
        id: "integrations",
        tab: "Intégrations et sécurité",
        number: "Pilier 03",
        headline: "Connecter de nouveaux services sans perdre de vue les opérations.",
        body: "Je contribue à l’intégration de services externes, de flux événementiels, de systèmes d’identité et de plateformes cloud. L’objectif est de clarifier les contrats, les responsabilités, les erreurs possibles et les besoins de surveillance avant la mise en production.",
        outcomeLabel: "Ce que cela apporte",
        outcome:
          "Des intégrations plus compréhensibles, des risques mieux visibles et un environnement que les équipes peuvent exploiter et faire évoluer.",
      },
    ],
    engagementLabel: "Modes d’intervention",
    engagementModels: [
      {
        title: "Consultation",
        body: "Appui ponctuel pour analyser une situation, évaluer des options ou définir un chemin de modernisation réaliste.",
      },
    ],
    note: "Chaque intervention commence par une conversation. Le périmètre dépend de l’environnement existant, du niveau de risque, des priorités et de la capacité des équipes.",
    cta: "Discuter de votre contexte",
  },
  experience: {
    eyebrow: "Réalisations sélectionnées",
    headline: "Des contributions concrètes, réalisées avec les équipes.",
    intro:
      "Les résultats présentés ici proviennent de travaux collectifs. Ils permettent de situer la nature de mes responsabilités, les environnements dans lesquels j’ai travaillé et la manière dont j’ai contribué à faire avancer les projets.",
    tablistLabel: "Réalisations sélectionnées",
    technicalLabel: "Voir le contexte technique",
    technicalHideLabel: "Masquer le contexte technique",
    caseStudies: [
      {
        id: "national-bank",
        tab: "Banque Nationale du Canada",
        eyebrow: "Réalisation 01",
        headline: "Banque Nationale du Canada",
        meta: "Développeur Java senior · Janvier 2021 à mai 2025 · 4 ans et 5 mois",
        contextLabel: "Contexte",
        context:
          "Au sein d’un environnement bancaire fortement réglementé, j’ai travaillé avec des équipes de développement, d’architecture, de sécurité, d’infrastructure, d’opérations et de produit sur la modernisation et l’exploitation d’applications d’entreprise.",
        sections: [
          {
            title: "Modernisation applicative",
            paragraphs: [
              "J’ai contribué à la migration de 39 services SOAP vers des API REST en développant des services Java et Spring à partir de contrats définis avec une équipe spécialisée. J’ai également participé à la mise à niveau de composants de Java 8 vers Java 21, avec des tests automatisés pour vérifier leur compatibilité.",
              "Sur une application utilisée à travers plus de 2 500 postes de travail, j’ai pris en charge la migration de trois modules d’AngularJS 1.7 vers React 18.",
            ],
          },
          {
            title: "Livraison et infrastructure AWS",
            paragraphs: [
              "En collaboration avec les équipes d’architecture, d’infrastructure et de livraison, j’ai participé à la transformation des déploiements lors du passage d’IBM UrbanCode Deploy et WebSphere vers AWS. L’automatisation avec Jenkins et Docker a contribué à réduire un cycle de mise en production de six semaines à deux semaines.",
              "J’ai conçu et développé 13 modules Terraform réutilisables pour Amazon S3, DynamoDB, Lambda, SQS, CloudWatch et EventBridge. J’ai également participé au déploiement, à la configuration, à la surveillance et au dépannage d’applications conteneurisées sur Amazon EKS.",
            ],
          },
          {
            title: "Centre de contact comme service — Genesys Cloud CX",
            paragraphs: [
              "J’ai participé à un projet de transition d’une plateforme Genesys installée sur site vers Genesys Cloud CX. Dans ce contexte, j’ai configuré Amazon EventBridge et le connecteur Genesys nécessaires aux intégrations, puis utilisé des ressources Terraform pour provisionner et configurer des fonctionnalités Genesys Cloud de manière reproductible.",
            ],
          },
          {
            title: "Production, sécurité et collaboration",
            paragraphs: [
              "J’ai contribué à des flux Kafka liés au traitement de transactions et de signaux de fraude, ainsi qu’à une migration d’identité vers Microsoft Entra ID. J’ai également assuré du soutien en production, participé aux analyses post-incident et mis en œuvre des actions correctives à l’aide de Splunk, Datadog et CloudWatch.",
              "Le travail comprenait des revues de code, l’accompagnement de développeurs et la coordination avec les équipes responsables de l’architecture, de la sécurité, des plateformes, des opérations et du produit.",
            ],
          },
        ],
        indicators: {
          label: "Indicateurs de contexte et de contribution",
          items: [
            "39 services concernés par la migration SOAP vers REST.",
            "6 à 2 semaines pour un cycle de mise en production, résultat collectif auquel j’ai contribué.",
            "13 modules Terraform AWS réutilisables.",
            "3 modules modernisés d’AngularJS vers React.",
            "Plus de 2 500 postes utilisant l’application concernée.",
            "Java 8 vers Java 21 pour plusieurs composants backend.",
            "4 ans et 5 mois dans l’environnement de la Banque Nationale.",
          ],
        },
        conclusionLabel: "Ce que cette expérience démontre",
        conclusion:
          "La capacité à contribuer à une modernisation sur plusieurs couches — application, API, infrastructure, intégration, identité et production — tout en collaborant avec les équipes spécialisées nécessaires dans un environnement réglementé.",
        technical: {
          intro:
            "Ce contexte technique rassemble uniquement les technologies associées à cette réalisation et aux responsabilités décrites ci-dessus.",
          groups: [
            {
              title: "Applications et interfaces",
              items: [
                "Java 8 à Java 21",
                "Spring et Spring Boot",
                "API REST et services SOAP",
                "React 18 et AngularJS 1.7",
              ],
            },
            {
              title: "Cloud, infrastructure et livraison",
              items: [
                "AWS",
                "Amazon EKS",
                "Amazon S3",
                "DynamoDB",
                "AWS Lambda",
                "Amazon SQS",
                "Amazon EventBridge",
                "Terraform et Infrastructure as Code",
                "Docker et Kubernetes",
                "Jenkins et CI/CD",
              ],
            },
            {
              title: "Intégrations et identité",
              items: [
                "Apache Kafka",
                "Genesys Cloud CX",
                "Connecteur Genesys et Amazon EventBridge",
                "Microsoft Entra ID",
              ],
            },
            {
              title: "Qualité et sécurité",
              items: [
                "Tests unitaires, d’intégration et de bout en bout",
                "SonarQube",
                "Snyk et Snyk Code",
                "Revues de code",
                "Analyse de compatibilité lors des migrations",
              ],
            },
            {
              title: "Production et observabilité",
              items: [
                "Soutien et diagnostic de production",
                "Analyse post-incident",
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
        tab: "CGI, secteur public",
        eyebrow: "Réalisation 02",
        headline: "CGI, secteur public",
        meta: "Développeur Java — Consultant · Juin 2019 à janvier 2021 · 1 an et 8 mois",
        contextLabel: "Contexte général",
        context:
          "Deux mandats publics où la traduction des règles métiers, l’intégration aux systèmes existants et la continuité des services étaient essentielles.",
        sections: [
          {
            title: "Mandat A — montreal.ca, Ville de Montréal",
            paragraphs: [
              "Contexte — Dans le cadre de la refonte de montreal.ca, la Ville devait proposer des formulaires numériques capables de répondre à des règles administratives complexes tout en communiquant avec ses systèmes d’information internes.",
              "Contribution — Intégré à l’équipe de développement par l’intermédiaire de CGI, j’ai contribué au backend Drupal 8 en concevant et en intégrant des formulaires destinés aux services aux citoyens.",
              "J’ai développé des formulaires sur mesure avec l’API Form de Drupal, notamment avec FormBase, des validations métiers, des interactions AJAX et des parcours en plusieurs étapes. J’ai également créé des Webform Handlers personnalisés en PHP et connecté les formulaires Drupal aux systèmes internes de la Ville par l’intermédiaire d’API REST.",
              "Valeur apportée — Cette intervention a permis de traduire des processus administratifs en parcours numériques structurés, tout en maintenant l’intégration avec les applications et les données déjà utilisées par les services municipaux.",
            ],
          },
          {
            title: "Mandat B — Ministère de la Santé de la Colombie-Britannique",
            paragraphs: [
              "Contexte — Le mandat concernait le développement et la maintenance d’applications utilisées dans un environnement gouvernemental où la continuité des services et la stabilité des systèmes étaient essentielles.",
              "Contribution — J’ai développé et maintenu des composants utilisant Oracle Forms, Java, EJB, PrimeFaces et PL/SQL. J’ai également pris en charge le diagnostic et la résolution d’incidents de production, ainsi que des activités de build et de déploiement avec Jenkins et Docker.",
              "Valeur apportée — Cette expérience a renforcé ma capacité à intervenir sur des systèmes existants, à comprendre des environnements techniques hétérogènes et à traiter les incidents sans perdre de vue la continuité opérationnelle.",
            ],
          },
        ],
        conclusionLabel: "Ce que ces mandats démontrent",
        conclusion:
          "La capacité à transformer des règles métiers complexes en fonctionnalités numériques, à intégrer des applications publiques aux systèmes existants et à intervenir avec méthode dans des contextes où la stabilité du service compte autant que la livraison de nouvelles fonctions.",
        technical: {
          intro:
            "Ce contexte technique distingue les environnements utilisés dans les deux mandats publics présentés ci-dessus.",
          groups: [
            {
              title: "Ville de Montréal",
              items: [
                "Drupal 8 et PHP",
                "API Form de Drupal et FormBase",
                "Webform Handlers",
                "AJAX et formulaires en plusieurs étapes",
                "API REST",
              ],
            },
            {
              title: "Ministère de la Santé de la Colombie-Britannique",
              items: ["Oracle Forms", "Java", "EJB", "PrimeFaces", "PL/SQL"],
            },
            {
              title: "Livraison et opérations",
              items: [
                "Jenkins et Docker",
                "Build et déploiement",
                "Diagnostic et résolution d’incidents de production",
              ],
            },
          ],
        },
      },
    ],
    complementary: {
      label: "Expériences complémentaires",
      hideLabel: "Masquer les expériences complémentaires",
      intro:
        "Ces technologies correspondent à des travaux complémentaires, à des intégrations en cours ou à du prototypage.",
      groups: [
        {
          title: "En cours ou en prototypage",
          items: [
            "GitHub Copilot",
            "Claude Code",
            "Python et Node.js",
            "Intégrations d’API et de modèles d’intelligence artificielle",
            "Recherche augmentée par récupération — RAG",
            "Intégrations KYC/KYB avec Sumsub",
            "OAuth2 et OpenID Connect",
            "Prototypage de smart contracts avec Solidity",
            "Stellar, Ethereum et Hedera",
            "Web3.js et Ethers.js",
          ],
        },
      ],
      note: "Ces éléments correspondent à des travaux complémentaires, à des intégrations en cours ou à du prototypage. Ils ne doivent pas être présentés comme des plateformes déjà livrées en production et ne remplacent pas le positionnement principal en modernisation Java, AWS et livraison.",
    },
  },
  thinking: {
    eyebrow: "Perspectives",
    headline: "Des réflexions issues du terrain, sans solution universelle.",
    intro:
      "Ces notes partagent des enseignements tirés de projets de modernisation et de production. Elles ne prétendent pas remplacer l’analyse propre à chaque organisation.",
    read: "Lire la réflexion",
    hide: "Fermer la réflexion",
    carouselLabel: "Perspectives, trois réflexions",
    articles: [
      {
        id: "java-8-to-21",
        title: "Passer de Java 8 à Java 21 sans casser la production",
        excerpt:
          "Une montée de version Java n’est pas seulement une modification du compilateur. Elle oblige à comprendre les dépendances, les comportements implicites et la capacité réelle de l’équipe à observer ce qui changera en production.",
        paragraphs: [
          "Passer de Java 8 à Java 21 peut sembler être une opération principalement technique : mettre à jour la version, corriger les erreurs de compilation, lancer les tests et déployer. Dans une application d’entreprise, la réalité est généralement plus large. La version de Java est reliée aux frameworks, aux bibliothèques, aux serveurs, aux pipelines, aux outils de surveillance et parfois à des comportements sur lesquels les équipes comptent depuis plusieurs années.",
          "La première étape utile consiste donc à établir une image claire de l’existant. Quelles dépendances sont encore maintenues ? Quels composants partagent le même environnement d’exécution ? Quels tests protègent réellement les fonctions importantes ? Quelles parties du système ne sont comprises que par quelques personnes ? Sans cette visibilité, une migration peut être techniquement correcte tout en déplaçant le risque vers la production.",
          "Une progression par composants réduit l’incertitude. Elle permet de mettre à jour un périmètre maîtrisable, d’observer les incompatibilités, d’améliorer les tests et de faire évoluer le pipeline avant d’étendre le changement. Les tests unitaires restent nécessaires, mais ils ne suffisent pas. Les tests d’intégration, les scénarios de bout en bout et la validation des interactions avec les systèmes externes deviennent essentiels.",
          "La surveillance compte autant que la compilation. Les journaux, les métriques et les alertes doivent permettre de comparer le comportement avant et après la migration. Une équipe qui peut détecter rapidement une régression et comprendre son origine dispose d’un changement beaucoup plus sûr qu’une équipe qui dépend uniquement du succès du déploiement.",
          "Enfin, la migration doit laisser l’environnement plus compréhensible qu’avant. Documenter les décisions, supprimer les dépendances devenues inutiles et partager les apprentissages évite que la prochaine évolution repose à nouveau sur quelques personnes. Le véritable résultat n’est pas seulement d’exécuter Java 21. C’est de rendre l’application plus facile à maintenir et à faire évoluer collectivement.",
        ],
      },
      {
        id: "release-weeks",
        title: "Pourquoi les mises en production prennent des semaines",
        excerpt:
          "Un délai de livraison provient rarement d’un seul pipeline. Il se construit à travers les dépendances, les environnements, les validations et les décisions qui entourent la mise en production.",
        paragraphs: [
          "Lorsqu’une mise en production prend plusieurs semaines, le premier réflexe consiste souvent à chercher un outil plus rapide. Pourtant, le temps n’est pas toujours passé dans l’exécution du pipeline. Il peut se trouver dans l’attente d’un environnement, la préparation manuelle d’une configuration, une validation détenue par une autre équipe ou une différence découverte trop tard entre les environnements.",
          "Pour comprendre le problème, il est utile de suivre un changement depuis le moment où il est prêt jusqu’au moment où il fonctionne en production. Où attend-il ? Quelles informations doivent être ressaisies ? Quelles étapes ne peuvent être exécutées que par une personne précise ? Quelles vérifications protègent réellement le service et lesquelles existent parce que l’environnement manque de fiabilité ? Cette lecture du parcours complet évite de rendre une seule équipe responsable d’un problème systémique.",
          "L’Infrastructure as Code peut réduire une partie de cette friction. Avec Terraform, les ressources et leurs dépendances deviennent déclaratives, révisables et reproductibles. Les mêmes principes peuvent être appliqués à plusieurs environnements, tandis que les changements passent par les revues et les contrôles déjà utilisés pour le code. Terraform n’élimine cependant ni les décisions d’architecture ni les besoins de sécurité. Il rend leur application plus visible et plus cohérente.",
          "Le pipeline doit ensuite automatiser les étapes répétables : construction, tests, analyses de qualité, création des artefacts, déploiement et vérifications. Les contrôles nécessaires restent présents, mais ils sont placés au bon endroit et produisent une information exploitable. Une automatisation qui masque les erreurs ou qui ne peut être comprise que par son auteur déplace simplement la dépendance.",
          "L’amélioration durable vient de la combinaison de l’automatisation, de responsabilités claires et d’une meilleure visibilité sur le flux de livraison. Le résultat recherché n’est pas de déployer plus vite à tout prix. Il est de permettre aux équipes de livrer plus régulièrement, avec suffisamment de confiance pour intervenir lorsque quelque chose ne se passe pas comme prévu.",
        ],
      },
      {
        id: "ai-workflows",
        title: "Intégrer l’IA dans les workflows de développement",
        excerpt:
          "L’IA peut accélérer certaines tâches, mais sa valeur dépend du contexte fourni, de la qualité de la vérification et des règles que l’équipe applique à son utilisation.",
        paragraphs: [
          "Les assistants d’intelligence artificielle peuvent générer du code, proposer des tests, expliquer une base existante ou accélérer la rédaction de documentation. Ces usages sont utiles, mais ils ne transforment pas automatiquement la manière dont une équipe livre un logiciel. Sans contexte, l’outil produit une réponse plausible. Il ne connaît pas nécessairement les règles métier, les contraintes de sécurité ou les décisions qui ont façonné le système.",
          "Les gains les plus réalistes apparaissent sur des tâches bien délimitées : préparer une première version d’un test, résumer une fonction, proposer une migration répétitive, comparer deux approches ou rechercher une information dans plusieurs sources autorisées. Le développeur conserve la responsabilité de comprendre la proposition, de vérifier son comportement et de décider si elle correspond au besoin.",
          "La sécurité doit être définie avant l’adoption à grande échelle. Quelles données peuvent être partagées ? Quels dépôts peuvent être utilisés comme contexte ? Comment les secrets, les renseignements personnels et la propriété intellectuelle sont-ils protégés ? Une équipe ne devrait pas dépendre de règles implicites lorsque l’outil peut recevoir du code ou des informations sensibles.",
          "La qualité reste également une responsabilité humaine et collective. Le code généré doit passer par les mêmes tests, analyses et revues que le reste du produit. Une réponse plus rapide n’a de valeur que si elle demeure compréhensible, maintenable et compatible avec l’architecture existante.",
          "L’IA devient réellement utile lorsqu’elle réduit le travail mécanique sans réduire le jugement. Elle peut aider les équipes à consacrer plus de temps à la compréhension du problème, aux décisions d’architecture et aux échanges nécessaires pour livrer un système fiable. La bonne question n’est donc pas seulement « combien de code a été généré ? », mais « qu’est-ce que l’équipe peut désormais faire mieux, avec le même niveau de responsabilité ? »",
        ],
      },
    ],
  },
  about: {
    eyebrow: "À propos de Brice",
    headline: "Comprendre, construire et transmettre.",
    biography: [
      "Mon parcours dans les technologies a commencé en 2014, au plus près des utilisateurs, dans le soutien, le déploiement et la résolution d’incidents. Cette première expérience m’a appris qu’un système ne se résume jamais à son code : derrière chaque décision technique, il y a des personnes qui travaillent, collaborent et dépendent de son bon fonctionnement.",
      "Au fil de mon parcours, j’ai évolué vers le développement et la consultation dans des environnements publics, bancaires et réglementés. Ces expériences ont renforcé ma manière d’intervenir : prendre le temps de comprendre ce qui existe, écouter les personnes qui connaissent déjà le terrain et chercher une progression adaptée à la réalité de l’organisation.",
      "Je ne cherche pas à imposer une transformation plus importante que nécessaire. Je préfère contribuer avec méthode, avancer avec les équipes et partager les connaissances afin que les améliorations puissent continuer après mon intervention.",
      "La curiosité, l’apprentissage et la transmission occupent également une place importante dans mon parcours. Je m’intéresse aux technologies émergentes lorsqu’elles permettent de mieux comprendre un problème, d’explorer de nouvelles possibilités ou de construire des solutions utiles. Cet intérêt se prolonge notamment dans des initiatives tournées vers la Caraïbe et le développement de communautés professionnelles.",
    ],
    principlesLabel: "Ce qui guide ma manière d’intervenir",
    principles: [
      {
        title: "Écouter avant de proposer",
        body: "Comprendre le contexte, les contraintes et le travail déjà accompli avant de recommander un changement.",
      },
      {
        title: "Construire avec les équipes",
        body: "Apporter mon expérience sans remplacer les connaissances et les responsabilités déjà présentes dans l’organisation.",
      },
      {
        title: "Avancer progressivement",
        body: "Transformer les décisions en étapes concrètes que les équipes peuvent tester, observer et maîtriser.",
      },
      {
        title: "Partager ce qui a été appris",
        body: "Documenter les décisions, transmettre les connaissances et éviter que l’intervention du consultant crée une nouvelle dépendance.",
      },
    ],
    initiatives: [
      {
        title: "Future Caribbean",
        body: "Je participe au buildathon international Future Caribbean, consacré à la création de solutions d’intelligence artificielle agentique répondant à des enjeux concrets de la Caraïbe. Cette expérience me permet d’apprendre auprès d’autres profils, d’expérimenter de nouvelles approches et de réfléchir à la manière dont la technologie peut répondre à des réalités locales.",
        cta: "Découvrir Future Caribbean",
        href: SITE.futureCaribbean,
      },
      {
        title: "ANBACHAIN",
        body: "Je suis également cofondateur d’ANBACHAIN, une communauté professionnelle qui rassemble des personnes autour de la blockchain, du Web3, de l’intelligence artificielle et du partage de connaissances. L’objectif est de créer des liens utiles, de faire circuler les ressources et de favoriser l’apprentissage collectif avant de chercher à construire une structure plus complexe.",
        cta: "Découvrir ANBACHAIN",
        href: SITE.anbachain,
      },
    ],
    conclusion:
      "Qu’il s’agisse d’un mandat, d’une expérimentation ou d’une initiative communautaire, je cherche à contribuer de la même manière : comprendre le besoin, construire avec les personnes concernées et laisser quelque chose d’utile derrière moi.",
  },
  contact: {
    eyebrow: "Prenons contact",
    headline: "Commençons par le contexte, pas par la solution.",
    body: "Vous pouvez me contacter si une application devient difficile à faire évoluer, si les mises en production mobilisent trop d’efforts ou si votre équipe a besoin d’un soutien Java et AWS pour faire avancer un mandat. Vous n’avez pas besoin d’arriver avec une solution déjà définie : décrivez simplement la situation, les contraintes et ce que vous souhaitez faire progresser.",
    formLabel: "Formulaire de contact",
    fields: {
      name: "Nom complet",
      email: "Courriel professionnel",
      organization: "Entreprise ou agence",
      message: "Décrivez le contexte de votre mandat, de votre projet ou de votre besoin.",
      consent:
        "J’accepte que Groupe Pheniiix Ankh Inc. utilise ces renseignements uniquement pour examiner ma demande et me répondre.",
    },
    optional: "facultatif",
    submit: "Envoyer le message",
    sending: "Envoi en cours…",
    note: "Le premier échange est exploratoire et ne crée aucun engagement.",
    success:
      "Merci. Votre message a bien été reçu. Je vous répondrai personnellement dans un délai de deux jours ouvrables.",
    error:
      "Votre message n’a pas pu être envoyé. Votre texte a été conservé. Veuillez réessayer ou écrire directement à contact@bricemimifir.com.",
    rateLimited:
      "Trop de tentatives ont été effectuées depuis cette connexion. Votre texte a été conservé. Veuillez patienter dix minutes avant de réessayer.",
    unavailable:
      "L’envoi sécurisé est temporairement indisponible. Votre texte a été conservé. Veuillez écrire directement à contact@bricemimifir.com.",
    errors: {
      name: "Veuillez indiquer votre nom complet.",
      email: "Veuillez indiquer une adresse courriel valide.",
      organization: "Le nom de l’organisation ne doit pas dépasser 120 caractères.",
      messageTooShort: "Veuillez décrire votre situation en au moins 20 caractères.",
      messageTooLong: "Le message ne doit pas dépasser 2 000 caractères.",
      consent: "Veuillez confirmer votre consentement afin que je puisse vous répondre.",
    },
    directLabel: "Contact direct",
    engagementModels: "Consultation",
  },
  footer: {
    statement:
      "Aider les équipes TI à moderniser leurs applications et leurs livraisons de manière progressive, collaborative et maîtrisée.",
    legalNote:
      "Les services présentés sous la marque Brice MIMIFIR sont contractés, administrés et facturés par Groupe Pheniiix Ankh Inc., société constituée au Canada.",
    navLabel: "Navigation du pied de page",
    connectLabel: "Coordonnées",
    privacy: "Confidentialité",
    accessibility: "Accessibilité",
    copyright: (year: number) =>
      `© ${year} Groupe Pheniiix Ankh Inc. — Site professionnel de Brice MIMIFIR.`,
  },
  privacy: {
    title: "Confidentialité",
    updated: "Dernière mise à jour : août 2026",
    paragraphs: [
      "Groupe Pheniiix Ankh Inc. recueille uniquement les renseignements que vous choisissez de fournir dans le formulaire de contact : votre nom, votre courriel professionnel, le nom de votre organisation lorsque vous l’indiquez, votre message et votre consentement.",
      "Ces renseignements sont utilisés uniquement pour examiner votre demande, vous répondre et conserver la correspondance d’affaires associée. L’envoi du formulaire ne vous inscrit pas à une infolettre ou à une communication marketing automatisée.",
      "Cette version du site n’utilise aucun cookie publicitaire ou analytique. Une préférence locale peut être enregistrée dans votre navigateur afin de mémoriser votre choix de langue.",
      "Les demandes du formulaire sont traitées par une infrastructure hébergée chez Vercel et transmises par Resend. Ces fournisseurs peuvent traiter les renseignements uniquement dans la mesure nécessaire au fonctionnement du site et à la transmission du message.",
      "Les renseignements sont conservés uniquement pendant la durée raisonnablement nécessaire pour répondre à la demande, maintenir les dossiers d’affaires appropriés et respecter les obligations applicables. L’accès est limité aux personnes qui en ont besoin à ces fins.",
      "Vous pouvez demander l’accès, la correction ou la suppression des renseignements personnels associés à votre demande, sous réserve des exigences applicables. Vous pouvez également retirer votre consentement pour une utilisation future lorsque cela s’applique.",
      "Pour toute question ou demande relative à la confidentialité, écrivez à contact@bricemimifir.com.",
      "Cet avis peut être mis à jour si le site, ses fournisseurs ou ses pratiques de traitement des renseignements évoluent. La date révisée sera affichée sur cette page.",
    ],
  },
  accessibility: {
    title: "Accessibilité",
    paragraphs: [
      "Groupe Pheniiix Ankh Inc. souhaite que ce site puisse être utilisé par le plus grand nombre de personnes possible. Le site est conçu en prenant les WCAG 2.2 niveau AA comme objectif d’accessibilité, sans revendiquer une certification formelle.",
      "L’implémentation comprend des titres et repères sémantiques, une navigation au clavier, des états de focus visibles, un lien d’évitement, des champs de formulaire correctement étiquetés, des contrôles accessibles, des contrastes suffisants, un texte adaptatif, des textes alternatifs pertinents et la prise en charge des préférences de réduction des animations.",
      "Le contenu et les actions essentielles ne dépendent pas uniquement de la couleur, du survol ou d’une animation. Le site reste utilisable aux largeurs courantes des appareils mobiles, tablettes et ordinateurs, ainsi qu’avec un zoom du navigateur jusqu’à 200 %.",
      "Si vous rencontrez un obstacle ou avez besoin d’une information dans un autre format, écrivez à contact@bricemimifir.com en indiquant la page, la fonctionnalité ou le contenu concerné. Un effort raisonnable sera fait pour vous répondre et fournir une solution accessible.",
    ],
  },
  notFound: {
    title: "Cette page est introuvable.",
    body: "L’adresse a peut-être changé ou la page n’est plus disponible.",
    cta: "Retourner à l’accueil",
  },
  generalError: {
    title: "Cette page n’a pas pu être chargée.",
    body: "Un problème est survenu. Vous pouvez réessayer ou retourner à l’accueil.",
    retry: "Réessayer",
    home: "Retourner à l’accueil",
  },
};
