import type { Content } from "./types";

export const fr: Content = {
  meta: {
    title: "Consultant en transformation technologique à Montréal | Brice Mimifir",
    description:
      "J'aide les organisations à comprendre où la technologie crée des frictions, à choisir les priorités et à accompagner leurs équipes dans un changement pratique.",
  },
  brand: {
    name: "Brice Mimifir",
    tagline: "Transformation des affaires et des technologies",
  },
  common: {
    menu: "Menu",
    close: "Fermer",
    skipToContent: "Aller au contenu",
    language: "Langue",
    location: "Montréal, Canada",
    email: "brice.mimifir.a@gmail.com",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    newTab: "ouvre un nouvel onglet",
    previous: "Précédent",
    next: "Suivant",
    of: "sur",
  },
  nav: [
    { id: "challenge", number: "01", label: "L'enjeu", short: "L'enjeu" },
    { id: "experience", number: "02", label: "Expérience", short: "Expérience" },
    { id: "how-i-help", number: "03", label: "Accompagnement", short: "Accompagnement" },
    { id: "thinking", number: "04", label: "Perspectives", short: "Perspectives" },
    { id: "contact", number: "05", label: "Contact", short: "Contact" },
  ],
  hero: {
    eyebrow: "Transformation des affaires et des technologies",
    headlineLines: [
      "Quand la technologie",
      "ralentit l'entreprise,",
      "la clarté vient",
      "d'abord.",
    ],
    body: "J'aide les organisations réglementées et complexes à identifier ce qui freine leur progression, à décider ce qui doit changer en priorité et à conduire leur transformation avec clarté et maîtrise.",
    cta: "Parlons de votre enjeu",
    location: "Montréal · Canada",
    scroll: "Défiler",
    imageAlt:
      "Photographie éditoriale temporaire : lumière du jour à travers de hautes fenêtres dans un hall de pierre silencieux.",
  },
  challenge: {
    eyebrow: "L'enjeu",
    headlineLines: [
      "La progression peut ralentir",
      "même lorsque tout le monde",
      "travaille pleinement.",
    ],
    intro:
      "Les problèmes technologiques restent rarement confinés à la technologie. Ils apparaissent dans la manière dont les personnes se coordonnent, prennent des décisions, gèrent le risque et tentent de faire avancer les initiatives importantes.",
    slides: [
      {
        number: "01",
        title: "Les livraisons continuent. Pourtant, la progression paraît lente.",
        body: "Les initiatives avancent, mais les dépendances, les validations et les urgences absorbent une grande partie du temps et de l'énergie des équipes.",
      },
      {
        number: "02",
        title: "La complexité fait désormais partie du travail quotidien.",
        body: "Les personnes compensent les limites de systèmes et de processus devenus inadaptés par davantage de coordination, de contrôles et d'efforts manuels.",
      },
      {
        number: "03",
        title: "Les affaires et la technologie ne partagent pas la même lecture de la situation.",
        body: "Chaque groupe comprend une partie du problème, mais les priorités, les contraintes et les risques ne sont pas suffisamment partagés pour soutenir des décisions confiantes.",
      },
      {
        number: "04",
        title: "La transformation crée de l'activité, mais pas toujours un changement utile.",
        body: "Les projets, les plateformes et la gouvernance peuvent évoluer tandis que les mêmes frictions profondes réapparaissent sous une autre forme.",
      },
    ],
    conclusion:
      "Avant d'introduire une nouvelle solution, il faut comprendre ce qui bloque réellement l'entreprise.",
    carouselLabel: "L'enjeu, quatre observations",
  },
  experience: {
    eyebrow: "Expérience",
    headline:
      "La transformation devient possible lorsque les personnes partagent une compréhension claire du problème.",
    paragraphs: [
      "Depuis plus de sept ans, je travaille dans de grands environnements d'entreprise où les décisions technologiques ont des conséquences sur les opérations, le risque et les personnes responsables de la livraison.",
      "J'ai appris que la progression dépend rarement de l'ajout d'un outil supplémentaire. Elle commence par la compréhension des frictions, l'alignement des affaires et de la technologie autour des mêmes priorités, puis la transformation de décisions difficiles en un chemin que les équipes peuvent réellement suivre.",
      "Aujourd'hui, je combine une expérience concrète de l'ingénierie avec une perspective plus large de la transformation. J'écoute, je clarifie les contraintes, je questionne les hypothèses et j'aide les organisations à passer de l'incertitude à un changement pratique et maîtrisé.",
    ],
    signature: [
      "Brice Mimifir",
      "Fondateur et conseiller en transformation des affaires et des technologies",
      "Montréal, Canada",
    ],
    imageAlt:
      "Photographie éditoriale temporaire : une salle de réunion vide, lumière naturelle et détails en laiton.",
    caseStudy: {
      eyebrow: "Expérience sélectionnée",
      headline: "Créer un chemin plus clair au cœur d'une modernisation complexe.",
      paragraphs: [
        "Une initiative de modernisation au sein d'une entreprise réglementée impliquait 39 services et plusieurs dépendances de livraison. L'enjeu n'était pas uniquement technique : les équipes avaient besoin de mieux comprendre ce qui pouvait changer, dans quel ordre et avec quel niveau de risque opérationnel.",
        "Intégré à l'environnement de livraison, j'ai contribué à clarifier les dépendances, à soutenir la modernisation des API et à rendre le chemin vers la mise en production plus gérable pour les équipes concernées.",
        "Grâce à leurs efforts combinés, un cycle de livraison est passé de six semaines à deux. Le changement utile ne concernait pas uniquement la vitesse. Les équipes disposaient d'un chemin plus clair pour séquencer le travail et avancer avec davantage de maîtrise.",
      ],
    },
    technical: {
      label: "Voir le contexte technique",
      intro:
        "Ces technologies font partie du contexte de livraison. Elles sont choisies selon les contraintes de l'organisation et ne sont jamais considérées comme une solution à elles seules.",
      groups: [
        {
          title: "Modernisation applicative",
          items: ["Java", "Spring Boot", "API REST", "Intégration événementielle", "Kafka"],
        },
        { title: "Cloud et plateformes", items: ["AWS", "EKS", "Kubernetes", "Terraform"] },
        { title: "Livraison et fiabilité", items: ["CI/CD", "Jenkins", "Splunk", "Datadog"] },
        {
          title: "Expérience produit complémentaire",
          items: ["React", "Next.js", "Solutions blockchain exploratoires"],
        },
      ],
    },
    beyond: {
      label: "Au-delà des mandats",
      body: "J'ai également cofondé ANBACHAIN, une communauté professionnelle qui explore la blockchain, l'éducation et les technologies émergentes à travers les rencontres, le partage de connaissances et les événements.",
    },
  },
  howIHelp: {
    eyebrow: "Comment j'accompagne",
    headline: "La clarté avant la transformation.",
    intro:
      "Je ne pars pas d'une technologie prédéterminée. Je pars de ce que l'organisation doit accomplir et de ce qui l'empêche d'avancer.",
    tablistLabel: "Comment j'accompagne",
    steps: [
      {
        id: "diagnose",
        tab: "Diagnostiquer",
        headline: "Comprendre où la progression se bloque.",
        paragraphs: [
          "Cette étape est utile lorsque les livraisons paraissent lentes, que les priorités changent continuellement ou que les équipes compensent des systèmes et des processus qui ne soutiennent plus correctement le fonctionnement attendu.",
          "Ensemble, nous écoutons les personnes les plus proches du travail, examinons le chemin entre la décision et la livraison, puis identifions les dépendances, les contraintes et les risques opérationnels qui créent des frictions.",
          "Vous repartez avec une compréhension partagée du problème et une vision concentrée de ce qui mérite d'être traité en premier.",
        ],
        engagementLabel: "Engagement possible",
        engagementName: "Diagnostic des frictions affaires et technologie",
        cta: "Parlons de votre situation",
        detail: {
          paragraphs: [
            "Pour les organisations confrontées à des frictions de livraison récurrentes, à des priorités floues ou à des problèmes qui persistent malgré les initiatives précédentes.",
            "Peut inclure des échanges avec les parties prenantes, l'examen des initiatives en cours, la cartographie des dépendances et des points de décision, ainsi qu'une séance de travail pour distinguer les symptômes des causes profondes.",
          ],
          receiveLabel: "Vous recevez :",
          receive:
            "un diagnostic écrit concis, des observations priorisées et des questions ou prochaines étapes pratiques pour soutenir la décision suivante.",
        },
      },
      {
        id: "decide",
        tab: "Décider",
        headline: "Choisir ce qui doit changer en premier et ce qui peut attendre.",
        paragraphs: [
          "Cette étape est utile lorsque plusieurs initiatives se disputent l'attention, que les équipes d'affaires et de technologie ne perçoivent pas les mêmes priorités ou que la direction doit avancer sans créer de perturbation inutile.",
          "Ensemble, nous comparons les options selon les besoins d'affaires, le risque opérationnel, les engagements existants, la capacité des équipes et les dépendances techniques.",
          "Vous repartez avec une séquence de décisions réaliste, une justification claire de chaque priorité et un chemin que les personnes peuvent comprendre et soutenir.",
        ],
        engagementLabel: "Engagement possible",
        engagementName: "Feuille de route de transformation",
        cta: "Parlons de vos priorités",
        detail: {
          paragraphs: [
            "Pour les responsables qui savent qu'un changement est nécessaire, mais qui ont besoin d'un ordre d'action réaliste.",
            "Peut inclure l'évaluation des options, des ateliers de priorisation, l'analyse des dépendances et des risques, le séquençage et la clarification des décisions nécessaires à chaque étape.",
          ],
          receiveLabel: "Vous recevez :",
          receive:
            "une feuille de route pratique précisant ce qui doit arriver en premier, ce qui peut attendre, pourquoi ces choix comptent et où une responsabilité ou une validation supplémentaire est nécessaire.",
        },
      },
      {
        id: "transform",
        tab: "Transformer",
        headline: "Transformer les décisions convenues en progrès pratiques et maîtrisés.",
        paragraphs: [
          "Cette étape est utile lorsque la direction est claire, mais que l'exécution implique plusieurs équipes, des contraintes opérationnelles ou des dépendances difficiles à coordonner.",
          "Ensemble, nous clarifions les responsabilités, séquençons le travail, faisons remonter les obstacles rapidement et maintenons une vision partagée de la progression, des risques et des décisions encore nécessaires.",
          "L'objectif n'est pas de changer pour changer. Il est d'aider les équipes à avancer avec suffisamment de clarté, de visibilité et de maîtrise pour rendre la transformation durable.",
        ],
        engagementLabel: "Engagement possible",
        engagementName: "Leadership de transformation",
        cta: "Parlons de votre transformation",
        detail: {
          paragraphs: [
            "Pour les organisations qui ont choisi une direction et ont besoin d'un accompagnement expérimenté pour maintenir l'alignement pendant l'exécution.",
            "Peut inclure la coordination entre les équipes d'affaires et de technologie, le soutien à la livraison, la gestion des obstacles et des dépendances, la préparation des décisions et l'adaptation de la feuille de route lorsque les conditions évoluent.",
          ],
          receiveLabel: "Vous recevez :",
          receive:
            "une coordination plus claire, des décisions et des risques visibles, ainsi qu'un accompagnement continu pendant la transformation.",
        },
      },
    ],
    note: "Chaque engagement commence par une conversation. Le périmètre est défini selon le contexte, les contraintes et les équipes existantes de l'organisation.",
  },
  thinking: {
    eyebrow: "Perspectives",
    headline: "Notes sur la clarté, les décisions et le changement.",
    intro:
      "Trois réflexions issues du travail au sein d'environnements de livraison complexes, écrites pour être lues en entier.",
    read: "Lire la réflexion",
    hide: "Fermer la réflexion",
    carouselLabel: "Perspectives, trois réflexions",
    articles: [
      {
        id: "delivery-active",
        title: "Quand la livraison est active, mais que la progression paraît toujours lente",
        paragraphs: [
          "Un environnement de livraison très actif peut donner l'impression qu'une organisation avance rapidement. Les équipes terminent des tâches, participent aux planifications, mettent des changements en production et répondent aux urgences. Pourtant, les résultats importants peuvent continuer à prendre plus de temps que prévu.",
          "La différence se trouve souvent entre l'activité et le flux réel. Un élément peut avancer rapidement au sein d'une équipe, puis attendre une approbation, un environnement, une dépendance ou une décision détenue ailleurs. Chaque délai peut sembler raisonnable lorsqu'il est observé séparément. Ensemble, ils créent un système dans lequel les personnes travaillent beaucoup sans que la progression soit clairement visible.",
          "Ajouter de la pression résout rarement ce type de problème. Cela peut augmenter le travail mené en parallèle, raccourcir les conversations utiles et pousser chaque équipe à protéger ses propres engagements. L'organisation devient plus occupée, mais le chemin entre une décision importante et un résultat utile devient moins clair.",
          "Un meilleur point de départ consiste à suivre le travail sur l'ensemble de son parcours. Où attend-il ? Quelles décisions arrivent régulièrement trop tard ? Quelles informations manquent au moment d'avancer ? Quels passages entre équipes créent de l'incertitude ou du travail à refaire ? Ces questions déplacent la conversation de la performance individuelle vers les conditions dans lesquelles les personnes essaient de livrer.",
          "La progression devient plus facile à améliorer lorsque l'organisation partage une vision du chemin complet. Il ne s'agit pas de supprimer tous les contrôles ou toutes les dépendances, mais de comprendre lesquels protègent réellement l'entreprise, lesquels sont devenus des habitudes et lesquels peuvent être repensés afin que les équipes consacrent davantage d'énergie au travail qui compte.",
          "Une discipline simple mais utile consiste à rendre l'attente aussi visible que le travail terminé. La question n'est plus « Qui doit aller plus vite ? », mais « Qu'est-ce qui empêche le travail d'avancer ? ». Ce déplacement crée une base plus constructive pour progresser.",
        ],
      },
      {
        id: "legacy",
        title: "L'héritage technologique n'est pas seulement un problème de technologie",
        paragraphs: [
          "Un système hérité est souvent décrit par son âge, son langage de programmation ou son infrastructure. Ces détails comptent, mais ils expliquent rarement pourquoi le faire évoluer paraît si difficile.",
          "Avec le temps, une application importante devient reliée à bien plus que du code. Elle porte des règles d'affaires, des exceptions, des contrôles, des besoins de reddition de comptes et des connaissances qui ne résident parfois que chez quelques personnes expérimentées. Les équipes construisent des étapes manuelles autour d'elle. Les opérations apprennent à reconnaître les situations inhabituelles. Les clients et les employés adaptent leur comportement à ce que le système peut et ne peut pas faire.",
          "La modernisation n'est donc pas le simple remplacement d'une ancienne technologie par une nouvelle. Si l'organisation ne comprend pas ce que les personnes compensent, une nouvelle plateforme peut reproduire les mêmes frictions derrière une autre interface. Elle peut même supprimer des protections qui n'ont jamais été formellement documentées parce que chacun supposait qu'elles faisaient partie du système.",
          "Avant de choisir une architecture, il est utile de demander ce que l'environnement existant protège, où il crée du risque et quels contournements sont devenus essentiels aux opérations quotidiennes. Les personnes les plus proches du travail détiennent souvent des réponses absentes des schémas et des inventaires.",
          "Une modernisation responsable conserve ce qui a encore de la valeur, rend visibles les connaissances cachées et fait évoluer l'environnement selon une séquence que l'organisation peut absorber. Cela peut conduire à un remplacement, mais aussi à une simplification progressive, à de meilleures interfaces ou à une responsabilité plus claire. L'objectif n'est pas de démontrer que l'ancien système avait tort. Il est de créer un chemin plus sûr et plus utile pour la suite.",
          "Cette perspective change aussi la manière d'évaluer le succès. Une plateforme moderne ne suffit pas si le travail quotidien devient plus difficile ou si le risque est moins visible. Le succès dépend également de la capacité des personnes à exploiter, comprendre et faire évoluer le nouvel environnement après le départ de l'équipe projet.",
        ],
      },
      {
        id: "clarify-decision",
        title: "Clarifier la décision avant de choisir la solution",
        paragraphs: [
          "Les conversations technologiques commencent souvent avec une solution déjà en vue : migrer vers le cloud, automatiser un processus, introduire l'intelligence artificielle, adopter la blockchain ou remplacer une plateforme. La technologie proposée peut avoir de la valeur, mais commencer par elle peut conduire l'organisation à résoudre très efficacement le mauvais problème.",
          "Une décision utile commence par une description plus claire de la situation. Quel résultat l'organisation cherche-t-elle à améliorer ? Qui subit les frictions actuelles ? Quelle contrainte opérationnelle ne peut pas être ignorée ? Quel risque doit être réduit et quel risque l'organisation est-elle prête à accepter ? Qu'est-ce qui deviendrait possible si le problème était traité ?",
          "Ces questions ne retardent pas l'action. Elles créent les conditions d'une action qui peut être expliquée et soutenue. Elles révèlent aussi lorsque plusieurs problèmes ont été regroupés sous une même initiative technologique. Un remplacement de plateforme peut contenir des questions de responsabilité, de processus, de qualité des données, de compétences et de gouvernance. Les traiter comme un seul achat rend les compromis plus difficiles à voir.",
          "Lorsque la décision est claire, les options technologiques peuvent être comparées aux mêmes besoins et contraintes. L'organisation peut comprendre pourquoi un chemin est approprié, pourquoi un autre peut attendre et ce qui doit encore être appris avant de s'engager davantage.",
          "La clarté ne supprime pas l'incertitude. Une transformation contient toujours des hypothèses et de nouvelles informations. Elle permet toutefois de rendre cette incertitude visible et gérable. L'objectif n'est pas de prévoir chaque détail dès le départ. Il est de prendre la prochaine décision avec une compréhension suffisamment partagée pour que les personnes puissent avancer, observer les changements et s'adapter sans perdre l'intention initiale.",
          "Une décision claire peut également être communiquée au-delà des personnes qui l'ont prise. Les équipes peuvent relier leur travail au résultat recherché, signaler une préoccupation lorsque la réalité évolue et comprendre pourquoi une option attrayante a été volontairement reportée. Cette justification partagée soutient l'apprentissage pendant l'exécution.",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Prenons contact",
    headline: "Une conversation utile peut commencer avant que la solution soit claire.",
    body: "Si quelque chose ralentit la progression, crée de l'incertitude ou devient plus difficile à gérer, vous n'avez pas besoin d'arriver avec un mandat entièrement défini. Expliquez-moi ce que vous observez et nous pourrons commencer par clarifier la situation.",
    formLabel: "Formulaire de contact",
    fields: {
      name: "Nom",
      email: "Courriel professionnel",
      organization: "Organisation",
      message: "Qu'aimeriez-vous clarifier ou faire avancer ?",
      consent:
        "J'accepte que Brice Mimifir Inc. utilise ces renseignements pour répondre à ma demande.",
    },
    optional: "facultatif",
    submit: "Commencer la conversation",
    sending: "Envoi…",
    note: "Le premier échange est exploratoire et ne crée aucun engagement.",
    success:
      "Merci. Votre message a bien été reçu. Je vous répondrai personnellement dans un délai de deux jours ouvrables.",
    error:
      "Votre message n'a pas pu être envoyé. Votre texte a été conservé. Veuillez réessayer ou écrire à brice.mimifir.a@gmail.com.",
    errors: {
      name: "Veuillez indiquer votre nom (2 à 80 caractères).",
      email: "Veuillez indiquer une adresse courriel valide.",
      organization: "L'organisation ne doit pas dépasser 120 caractères.",
      message: "Veuillez décrire votre situation (20 à 2000 caractères).",
      consent: "Veuillez confirmer votre consentement afin que je puisse vous répondre.",
    },
  },
  footer: {
    statement: "Aider les organisations à passer des frictions à un changement clair et maîtrisé.",
    navLabel: "Navigation du pied de page",
    connectLabel: "Contact",
    privacy: "Confidentialité",
    accessibility: "Accessibilité",
    copyright: (year: number) => `© ${year} Brice Mimifir Inc.`,
  },
  privacy: {
    title: "Confidentialité",
    updated: "Dernière mise à jour : août 2026",
    paragraphs: [
      "Brice Mimifir Inc. recueille uniquement les renseignements que vous choisissez de fournir dans le formulaire de contact : votre nom, votre courriel professionnel, votre organisation lorsque vous l'indiquez, votre message et votre consentement. Ces renseignements servent uniquement à examiner votre demande, à vous répondre et à conserver la correspondance d'affaires associée.",
      "Cette version du site n'utilise aucun cookie publicitaire ou analytique. Une préférence locale peut être enregistrée dans votre navigateur afin de mémoriser votre choix de langue.",
      "Les demandes du formulaire sont traitées par une infrastructure hébergée chez Vercel et transmises par Resend. Ces fournisseurs peuvent donc traiter les renseignements uniquement pour faire fonctionner le site et transmettre le message. Le site ne vend aucun renseignement personnel et n'inscrit pas automatiquement les personnes à des communications marketing.",
      "Les renseignements sont conservés uniquement pendant la durée raisonnablement nécessaire pour répondre à la demande, maintenir les dossiers d'affaires appropriés et respecter les obligations légales applicables. L'accès est limité aux personnes qui en ont besoin à ces fins.",
      "Vous pouvez demander l'accès, la correction ou la suppression des renseignements personnels associés à votre demande, sous réserve des exigences applicables. Vous pouvez également retirer votre consentement pour une utilisation future lorsque cela s'applique.",
      "Pour toute question ou demande relative à la confidentialité, contactez Brice Mimifir à brice.mimifir.a@gmail.com.",
      "Cet avis peut être mis à jour si le site, ses fournisseurs ou ses pratiques de traitement des renseignements évoluent. La date révisée sera affichée sur cette page.",
    ],
  },
  accessibility: {
    title: "Accessibilité",
    paragraphs: [
      "Brice Mimifir Inc. souhaite que ce site puisse être utilisé par le plus grand nombre de personnes possible. Le site est conçu en prenant les WCAG 2.2 niveau AA comme objectif d'accessibilité, sans revendiquer une certification formelle.",
      "L'implémentation comprend des titres et repères sémantiques, une navigation au clavier, des états de focus visibles, un lien d'évitement, des champs de formulaire étiquetés, un menu, des onglets, des accordéons et des carrousels accessibles, des contrastes suffisants, un texte adaptatif, des textes alternatifs pertinents et la prise en charge des préférences de réduction des animations.",
      "Le site est vérifié aux largeurs courantes des appareils mobiles, tablettes et ordinateurs, avec une navigation uniquement au clavier et un zoom du navigateur jusqu'à 200 %. Aucun contenu ni aucune action essentielle ne doit dépendre uniquement de la couleur, du survol ou d'une animation.",
      "Si vous rencontrez un obstacle ou avez besoin d'une information dans un autre format, écrivez à brice.mimifir.a@gmail.com en indiquant la page, la fonctionnalité ou le contenu concerné. Un effort raisonnable sera fait pour vous répondre et fournir une solution accessible.",
    ],
  },
  notFound: {
    title: "Cette page est introuvable.",
    body: "L'adresse a peut-être changé ou la page n'est plus disponible.",
    cta: "Retourner à l'accueil",
  },
};
