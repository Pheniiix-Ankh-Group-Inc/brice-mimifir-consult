# Déploiement GitHub, Vercel et Resend

Ce guide décrit la mise en production du site sans déploiement depuis un poste local. GitHub reste la source de vérité ; Vercel construit chaque commit connecté.

## 1. Préparer GitHub

1. Pousser la branche de migration avec des commits normaux, sans réécrire l'historique publié.
2. Ouvrir une pull request vers `main`.
3. Attendre la réussite du workflow `CI` et examiner la preview Vercel.
4. Protéger `main` avec la pull request et le contrôle `CI` requis, si le dépôt le permet.

## 2. Connecter le dépôt à Vercel

1. Dans Vercel, choisir **New Project**, importer le dépôt GitHub et conserver la racine du dépôt.
2. Vérifier que le preset détecté est **Next.js**. `vercel.json` le déclare aussi explicitement.
3. Dans **Project Settings → Environments → Production → Branch Tracking**, sélectionner `main` comme branche Production.
4. Ne pas promouvoir manuellement la branche de migration. Toute autre branche doit rester une Preview.

Vercel crée une preview par push/PR et un déploiement Production lorsqu'un commit atteint la branche Production. Référence : [Deploying Git Repositories with Vercel](https://vercel.com/docs/git).

## 3. Configurer Resend

1. Dans Resend, ajouter un domaine ou, de préférence, un sous-domaine d'envoi détenu par l'organisation.
2. Publier les entrées DNS SPF et DKIM fournies, puis attendre le statut `verified`.
3. Créer une clé API limitée à l'envoi lorsque ce niveau d'accès suffit.
4. Faire correspondre exactement le domaine de `CONTACT_FROM_EMAIL` au domaine ou sous-domaine vérifié.

Référence : [Managing Domains — Resend](https://resend.com/docs/dashboard/domains/introduction).

## 4. Variables Vercel

Ajouter les variables dans **Project Settings → Environment Variables** :

| Variable             | Preview                                                                        | Production                                 |
| -------------------- | ------------------------------------------------------------------------------ | ------------------------------------------ |
| `SITE_URL`           | laisser vide pour utiliser l'URL Vercel propre à la preview                    | URL canonique finale en HTTPS, sans chemin |
| `RESEND_API_KEY`     | optionnelle ; utiliser une clé de test dédiée si le formulaire doit être testé | clé d'envoi secrète                        |
| `CONTACT_TO_EMAIL`   | destinataire de test si Resend est activé                                      | destinataire réel                          |
| `CONTACT_FROM_EMAIL` | expéditeur de test vérifié                                                     | expéditeur réel sur le domaine vérifié     |

Ne jamais préfixer les secrets par `NEXT_PUBLIC_`. Après une modification de variable, reconstruire le déploiement concerné.

## 5. Ajouter la règle WAF du formulaire

La limitation est configurée dans le tableau de bord, car elle protège la fonction avant son exécution :

1. Ouvrir le projet, puis **Firewall → Configure → New Rule**.
2. Nommer la règle `Contact form — 5 per 10 minutes`.
3. Ajouter les conditions, reliées par **AND** :
   - **Request Path** → **Equals** → `/api/contact` ;
   - **Method** → **Equals** → `POST`.
4. Choisir l'action **Rate Limit**.
5. Choisir **Fixed Window**, une fenêtre de **10 minutes**, une limite de **5 requests** et la clé de comptage **IP**.
6. Conserver l'action de dépassement **Default (429)**.
7. Enregistrer, choisir **Review Changes**, vérifier la règle puis **Publish**.
8. Dans l'aperçu Firewall, filtrer sur la règle et confirmer que seules les requêtes `POST /api/contact` sont comptées.

Pour une première mise en service sensible, reproduire d'abord les mêmes conditions avec l'action **Log**, observer le trafic pendant dix minutes, puis activer la limitation. Vercel documente une fenêtre fixe maximale de dix minutes et la clé IP sur tous les plans : [WAF Rate Limiting](https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting).

Le client traite directement un statut `429`, même si le WAF retourne un corps non JSON. Aucun compteur mémoire n'est ajouté à la fonction serverless.

## 6. Contrôler une preview

Avant fusion :

1. vérifier `/`, `/en`, `/fr`, les deux pages de confidentialité, les deux pages d'accessibilité et une 404 localisée ;
2. confirmer que `/` respecte la langue du navigateur et que le sélecteur EN/FR prend ensuite la priorité ;
3. inspecter la source HTML : `html[lang]`, canonical, `hreflang`, Open Graph et JSON-LD doivent correspondre à l'URL ;
4. ouvrir `/robots.txt` : la preview doit contenir `Disallow: /` ;
5. confirmer la présence d'une balise robots `noindex` sur les pages ;
6. tester le formulaire avec les variables Preview, puis sans ces variables pour vérifier le message d'indisponibilité ;
7. vérifier la navigation clavier, Escape dans le menu et les largeurs 390, 768 et 1440 pixels ;
8. consulter les logs de fonction : aucun nom, courriel, organisation, message ou secret ne doit apparaître.

## 7. Passer en production

1. Affecter le domaine personnalisé au projet et confirmer son HTTPS.
2. Définir `SITE_URL` sur cette origine exacte pour l'environnement Production.
3. Vérifier les quatre variables Production et la règle WAF publiée.
4. Fusionner la pull request dans `main` seulement après approbation.
5. Sur le déploiement Production, contrôler `/robots.txt`, `/sitemap.xml`, les canonical et un envoi réel.
6. Vérifier que `Strict-Transport-Security` est présent uniquement en production.

## 8. Rollback

Pour une urgence, ouvrir **Deployments**, choisir un déploiement Production antérieur sain et utiliser l'action de rollback/assignation au domaine disponible dans Vercel. Ensuite, créer un commit Git de revert sur `main` pour réconcilier durablement GitHub et la production. Vercel conserve les déploiements antérieurs pour ce mécanisme : [Managing Deployments](https://vercel.com/docs/deployments/managing-deployments).

Ne jamais utiliser `git push --force`, rebase, amend ou squash pour retirer un commit déjà publié. Ne pas supprimer le déploiement choisi pour un éventuel rollback.
