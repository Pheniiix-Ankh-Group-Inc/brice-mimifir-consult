# Intégration du cahier éditorial et design v2

## Source approuvée

Le fichier `Brice-MIMIFIR-Site-Cahier-Editorial-et-Design-v2.md`, version 2.0 du 13 août 2026, fourni par le propriétaire du site, est la source de vérité. Il remplace les contenus et décisions graphiques antérieurs.

## Décisions d'intégration

- Conserver l'architecture Next.js App Router, l'internationalisation `/fr` et `/en`, les tokens Midnight & Brass, Newsreader, Manrope et les interactions accessibles déjà en place.
- Retirer les indicateurs du Hero et y afficher les modes d'intervention et Montréal, Canada.
- Conserver les enjeux sous forme de contenus séparés par des filets et sans carrousel automatique.
- Présenter l'offre en trois piliers, puis les trois modes d'intervention.
- Remplacer les études de cas actuelles par Banque Nationale du Canada et CGI secteur public, avec Genesys Cloud CX et tous les indicateurs contextualisés.
- Maintenir le contexte technique dans un accordéon intégré aux réalisations et le retirer du menu principal.
- Ajouter des sections autonomes À propos et Au-delà des mandats.
- La décision média ultérieure documentée dans `2026-08-13-media-revert-design.md` prévaut : utiliser l’ancienne photographie éditoriale uniquement dans le Hero et conserver Au-delà des mandats sans photographie.
- Rétablir le consentement obligatoire dans le formulaire et dans la validation serveur.
- Synchroniser tous les contenus, métadonnées, textes alternatifs, pages légales et libellés accessibles en français et en anglais.
- Ne rien publier ni déployer en production.

## Vérification

La livraison locale doit passer Prettier, ESLint, TypeScript, le build Next.js et des contrôles HTTP des routes, métadonnées, liens et états de validation disponibles sans secrets de production.
