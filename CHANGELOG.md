# Changelog

Toutes les modifications notables de ce projet sont documentées dans ce fichier. Le format suit [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) et le projet applique le versionnage sémantique à partir de sa première version publiée.

## [Unreleased]

### Added

- nouveau monogramme officiel Brice MIMIFIR, détouré et optimisé pour l'en-tête, le menu, le pied de page et le favicon ;
- structure éditoriale bilingue v2 consacrée aux enjeux, à l'offre en trois piliers, aux réalisations, aux perspectives, à la présentation de Brice, aux initiatives complémentaires et au contact ;
- réalisations détaillées à la Banque Nationale du Canada et chez CGI dans le secteur public, dont Genesys Cloud CX, avec indicateurs contextualisés et contexte technique dépliable ;
- ancienne photographie éditoriale restaurée dans le Hero et portrait personnel retiré du site ;
- consentement obligatoire et validé de bout en bout dans le formulaire de contact ;
- liens LinkedIn, Instagram avec icône et ANBACHAIN dans le pied de page ;
- routes éditoriales anglaises et françaises pré-rendues sous `/en` et `/fr` ;
- redirection fondée sur la préférence explicite, la langue du navigateur et un repli anglais ;
- SEO bilingue avec canonical, alternates `hreflang`, Open Graph, Twitter, JSON-LD, sitemap et protection `noindex` des previews ;
- Route Handler Next.js pour le formulaire, validation Zod, idempotence Resend, contrôle d'origine, limite de corps, honeypot et délai minimal ;
- retours localisés distincts pour validation, indisponibilité, échec de livraison et limitation WAF ;
- intégration continue GitHub Actions, configuration Vercel et guide de déploiement ;
- en-têtes HTTP de sécurité et cookie de langue fonctionnel sécurisé ;
- documentation d'exploitation, fichier d'exemple d'environnement et nouveau README.

### Changed

- `SITE_URL` rendue optionnelle pour les déploiements Vercel temporaires, avec repli automatique sur les URL système de Vercel ; variables Resend documentées comme désactivables sans bloquer le build ;
- modes d’intervention « Sous-traitance intégrée » et « Mandat au forfait », ainsi que leurs équivalents anglais, retirés pour présenter uniquement la consultation ;
- contenu éditorial mis à jour vers la version 2.1 en français et en anglais : nouveau titre du Hero et fusion du parcours, des principes, de Future Caribbean et d'ANBACHAIN dans une seule section « À propos » ;
- positionnement de Brice MIMIFIR comme « Consultant Java senior — Modernisation applicative & AWS », avec métadonnées SEO, Open Graph et données structurées localisées correspondantes ;
- coordonnées professionnelles remplacées par `contact@bricemimifir.com` et ajout des liens officiels Instagram, ANBACHAIN et Future Caribbean ;
- formulaire de contact recentré sur le nom, le courriel professionnel, l'entreprise ou agence, le message et le consentement explicite ;
- ancienne section autonome « Au-delà des mandats » intégrée à « À propos », sans portrait, tout en conservant les contenus Future Caribbean et ANBACHAIN ;
- section « Réalisations sélectionnées » transformée en onglets sur ordinateur et en accordéons sur mobile, avec un contexte technique propre à chaque réalisation et un accordéon « Expériences complémentaires » séparé ;
- migration directe de TanStack Start/Vite/Nitro vers Next.js App Router et React 19 ;
- GitHub devient la source principale et Vercel la plateforme cible ;
- standardisation sur Node.js 22, npm et un unique `package-lock.json` ;
- chargement optimisé des images et polices variables auto-hébergées par Next.js ;
- politique de confidentialité mise à jour pour le cookie linguistique, Vercel et Resend ;
- rendus mobile et bureau de la section d'accompagnement stabilisés par CSS.

### Removed

- routes, configuration et dépendances TanStack Start, TanStack Router, Vite et Nitro ;
- configuration et télémétrie propres à l'ancien runtime ;
- lockfile Bun et configuration Bun ;
- catalogue de composants UI, hooks et dépendances Radix inutilisés ;
- ancienne API Vercel dupliquée ;
- suites de tests, Playwright, Axe, TSX et leurs configurations à la demande du propriétaire ;
- sorties générées et répertoires résiduels TanStack et Wrangler.
