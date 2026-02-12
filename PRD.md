# Product Requirements Document (PRD) - ATHENA

**Projet :** ATHENA - Intelligence de la Compétence  
**Version :** 1.2 (Enrichie)  
**Date de mise à jour :** 11 Février 2026
**Statut :** Production (MVP V1.2 - PDF & Slack)  
**Porteur :** Tomorrow Theory  

---

## 2. Personas & Parcours Utilisateur

| Persona | Pain Points (Douleurs) | Gain Creators (Attentes) | Parcours Type sur le site |
| :--- | :--- | :--- | :--- |
| **Directeur L&D / DRH** | Difficulté à prouver le ROI, dispersion des budgets, lassitude des méthodes "soft skills" floues. | Rationalisation, Preuve scientifique, Maîtrise des risques, Innovation souveraine. | Hero -> Problème -> Preuves -> Programme V2 -> Contact. |
| **Ingénieur Pédagogique** | Pression de production ("Content factory"), manque de temps pour l'analyse, brief métier imprécis. | Outil d'aide à la conception, Argumentaire technique pour dire "non", Gain de temps structurel. | Hero -> Modèle -> ATHENA AI -> One-Pager (Download). |
| **Décideur Exécutif (COO/DG)** | Peur du "Lock-in" technologique, méfiance envers la "Hype IA". | Indépendance (IP Transfer), Scalabilité, Efficacité opérationnelle immédiate. | Hero -> Capacités -> IP & Droits -> Contact. |

---

## 3. Spécifications Fonctionnelles Détaillées

### 3.1 Structure & Navigation

* **Type :** Single Page Application (SPA) avec ancres.
* **Comportement Navbar :**
  * *État Initial :* Transparente, padding large.
  * *État Scrolled (>50px) :* Background Glassmorphism (`backdrop-blur-md`), bordure inférieure subtile, padding réduit.
  * *ScrollSpy :* L'élément de menu actif doit s'illuminer (couleur Accent) lorsque la section correspondante atteint le tiers supérieur du viewport.

### 3.2 Composants Clés

#### A. Hero Section & "L'Atome"

* **Fonction :** Métaphore visuelle immédiate (pas de stock photo générique).
* **Spécification Technique Animation :**
  * Utilisation de CSS 3D Transforms (`perspective`, `rotateX/Y`) et Framer Motion.
  * **Performance :** Doit tourner à 60fps sur mobile. Fallback : Si `prefers-reduced-motion` est activé, l'animation doit être statique ou très lente.

#### B. Formulaire de Contact (Intégré Slack)

* **Champs Requis :** Nom, Email Pro, Organisation, Rôle.
* **Backend :**
  * Serveur Node.js/Express proxy vers Slack Webhook.
  * **Sécurité :** URL Webhook stockée en variables d'environnement (`.env`) côté serveur.
* **Feedback Utilisateur :**
  * État `Submitting` : Bouton désactivé + Spinner.
  * État `Success` : Remplacement du formulaire par une carte de confirmation (Check icon animée) sans rechargement de page.
  * État `Error` : Toast ou message inline rouge en cas d'échec API.

#### C. Téléchargement PDF ("One-Pager")

* **Objectif :** Support d'aide à la décision interne (imprimable ou PDF).
* **Technologie :** Génération client-side via `html2pdf.js`.
* **Comportement :**
  * Clic bouton "Télécharger" -> Génération PDF immédiate (pas de fenêtre d'impression).
  * **Contenu :** Tout le site (Hero, Problème, Modèle, etc.) formaté spécifiquement pour le print.
  * **Print Context :** Application de styles forcés (Fond blanc, texte noir) via `PrintContext` pour garantir la lisibilité et l'économie d'encre.

### 3.3 Contenu & Data

* **Preuves Sociales :** Les logos partenaires doivent être en monochrome (blanc/opacité réduite) et passer en couleur au survol pour maintenir l'élégance.
* **Publications :** Liens externes ouvrant systématiquement dans un nouvel onglet (`target="_blank"` + `rel="noopener noreferrer"`).

---

## 4. Design System & UI Specifications

### 4.1 Tokens Visuels

* **Palette Principale :**
  * `Background` : `#000000` (Noir Absolu) après update.
  * `Surface` : `#1C1C1E` (Gris iOS)
  * `Accent Primary` : `#64D2FF` (Teal Science - Pantone 298C approx)
  * `Accent Brand` : `#BF5AF2` (Purple Tomorrow Theory - Pantone 259C approx)

### 4.2 Typographie

* **Font Family :** `Inter` (Variable font recommandée pour performance).

### 4.3 Motion Design

* **Courbe d'animation (Easing) :** `[0.2, 0.8, 0.2, 1]` (Cubic-bezier type iOS "Smooth").

---

## 5. Architecture Technique

### 5.1 Stack

* **Frontend :** React 19, Vite, Tailwind CSS v4.
* **Backend :** Node.js / Express (Serveur de production pour API & Static serving).
* **Styling :** Tailwind CSS v4.
* **Animation Library :** Framer Motion v10+.
* **Icons :** Lucide React (SVG légers).

---

## 7. Roadmap & Itérations

### Phase 1 : MVP (Terminé)

* Site vitrine statique complet.
* Version One-Pager intégrée (PDF Download).

### Phase 2 : Connexion & Data (Terminé)

* [x] Branchement du formulaire sur API réelle (Slack Webhook).
* [x] Internationalisation (EN/FR) via `react-i18next`.

### Phase 3 : Contenu Dynamique (Q3 2025)

* Ajout d'un module "Simulateur de compétence" (Choisir un métier -> Voir la décomposition en atomes).
* Connexion à un CMS Headless pour gérer les publications et les news sans déploiement.
* Espace "Partenaires" protégé par mot de passe pour les membres du consortium V2.
