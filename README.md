# Brice MIMIFIR — site professionnel

Site professionnel bilingue de Brice MIMIFIR, Consultant Java senior — Modernisation applicative & AWS, construit avec Next.js App Router. Le dépôt GitHub est la source principale et Vercel la cible d'hébergement.

## Fonctionnalités

- pages anglaises et françaises pré-rendues sous `/en` et `/fr` ;
- sélection initiale fondée sur le cookie `bm-locale`, puis `Accept-Language`, avec repli anglais ;
- métadonnées SEO localisées, canonical, `hreflang`, Open Graph, Twitter, JSON-LD, sitemap et robots ;
- formulaire de contact avec consentement requis, validé côté serveur, protégé par honeypot, délai minimal et idempotence, puis livré par Resend ;
- titre Hero v2.1 raccourci — « Faire évoluer vos systèmes, avec vos équipes. » / « Evolving your systems, alongside your teams. » — avec la photographie éditoriale existante et sans portrait personnel ;
- présentation v2.1 réunissant le parcours, les principes, Future Caribbean et ANBACHAIN dans une seule section « À propos » ;
- navigation clavier, contenu responsive et réduction des animations ;
- CI GitHub pour le lint, le typage et le build.

## Prérequis

- Node.js 22 ;
- npm, avec le `package-lock.json` du dépôt.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Le site local est disponible sur `http://localhost:3000`. La racine redirige selon la langue du navigateur.

## Variables d'environnement

| Variable             | Requise          | Usage                                                         |
| -------------------- | ---------------- | ------------------------------------------------------------- |
| `SITE_URL`           | lancement public | origine canonique publique, par exemple `https://example.com` |
| `RESEND_API_KEY`     | formulaire       | clé serveur Resend, jamais préfixée par `NEXT_PUBLIC_`        |
| `CONTACT_TO_EMAIL`   | formulaire       | destinataire des demandes                                     |
| `CONTACT_FROM_EMAIL` | formulaire       | expéditeur utilisant un domaine vérifié dans Resend           |

En local, l'origine SEO retombe sur `http://localhost:3000`. Sur Vercel, laisser `SITE_URL` vide utilise automatiquement `VERCEL_PROJECT_PRODUCTION_URL` en production et `VERCEL_URL` en preview. Cela permet un déploiement de test sans configuration manuelle. Définir `SITE_URL` avec le domaine canonique final avant l'ouverture publique.

Les trois variables Resend peuvent rester absentes pendant les tests de déploiement. Dans ce cas, le site fonctionne normalement et le formulaire retourne son message localisé d'indisponibilité temporaire.

## Commandes

| Commande            | Description                                   |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | serveur de développement Next.js avec Webpack |
| `npm run build`     | build de production Next.js avec Webpack      |
| `npm start`         | exécute le build de production                |
| `npm run lint`      | ESLint Next.js, zéro avertissement autorisé   |
| `npm run typecheck` | vérification TypeScript stricte               |
| `npm run format`    | formatage Prettier                            |

## Routes

```text
/en                       /fr
/en/privacy               /fr/privacy
/en/accessibility         /fr/accessibility
/api/contact
/api/locale
/robots.txt
/sitemap.xml
```

`proxy.ts` redirige les chemins non préfixés avec un statut temporaire 307. Une langue choisie explicitement est conservée pendant un an dans un cookie fonctionnel `HttpOnly`, `SameSite=Lax` et `Secure` en production.

## Architecture

```text
app/[lang]/                pages, layout et erreurs localisées
app/api/                   routes de contact et de préférence linguistique
src/components/            composants éditoriaux et îlots interactifs
src/assets/fonts/          polices variables auto-hébergées et licence OFL
src/content/               contenus anglais et français typés
src/i18n/                  résolution de langue et dictionnaires
src/server/contact/        validation, gabarits et livraison Resend
```

Les pages et dictionnaires restent côté serveur. Seuls le menu, les carrousels, les panneaux interactifs et le formulaire sont hydratés côté client. Le formulaire ne retourne un succès qu'après acceptation par Resend et les logs excluent les données personnelles.

## Qualité et contribution

Avant d'ouvrir une pull request :

```bash
npm run lint
npm run typecheck
npm run build
git diff --check
```

Les changements se font par commits normaux sur une branche dédiée. Ne pas forcer un push, rebaser, amender ou écraser un historique déjà publié.

## Déploiement

Consulter [docs/deployment.md](docs/deployment.md) pour connecter GitHub à Vercel, configurer Resend, publier la règle WAF `5 requêtes / 10 minutes / IP`, valider une preview et effectuer un rollback.

L'[historique des changements](CHANGELOG.md) résume la migration et les nettoyages du dépôt.

## Licence

Code et contenus propriétaires de Groupe Pheniiix Ankh Inc. Tous droits réservés.
