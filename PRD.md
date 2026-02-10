# Product Requirements Document (PRD) - ATHENA

**Projet :** ATHENA - Intelligence de la Compétence  
**Version :** 1.2 (Enrichie)  
**Date de mise à jour :** 26 Février 2025  
**Statut :** Production (MVP V1)  
**Porteur :** Tomorrow Theory  

---

## 1. Contexte & Vision

### 1.1 Vision Produit
ATHENA est un écosystème méthodologique et technologique conçu pour faire passer l'ingénierie des compétences de l'artisanat à la précision scientifique.
*   **Le Constat :** L'IA générative sans cadre structurel ne fait qu'accélérer la production de contenus pédagogiques médiocres et mal ciblés.
*   **La Solution :** Un modèle systémique (60 facettes, 17 facteurs, 4 niveaux) couplé à une IA d'architecture qui garantit la cohérence entre l'objectif cognitif et la modalité pédagogique.

### 1.2 Objectifs Stratégiques du Site Vitrine
1.  **Crédibilité Scientifique :** Positionner ATHENA comme une démarche de Recherche-Action rigoureuse, en rupture avec les outils "gadgets" du marché.
2.  **Recrutement Consortium V2 :** Convaincre 6 grandes organisations de rejoindre la phase 2 du programme (Ticket d'entrée : 30k€ HT).
3.  **Éducation Marché :** Imposer le vocabulaire "Chimie de la compétence" (Atomes/Molécules) comme nouveau standard de pensée L&D.

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
*   **Type :** Single Page Application (SPA) avec ancres.
*   **Comportement Navbar :**
    *   *État Initial :* Transparente, padding large.
    *   *État Scrolled (>50px) :* Background Glassmorphism (`backdrop-blur-md`), bordure inférieure subtile, padding réduit.
    *   *ScrollSpy :* L'élément de menu actif doit s'illuminer (couleur Accent) lorsque la section correspondante atteint le tiers supérieur du viewport.
*   **Menu Mobile :** Overlay complet (Full screen) avec animation d'entrée en cascade des liens.

### 3.2 Composants Clés

#### A. Hero Section & "L'Atome"
*   **Fonction :** Métaphore visuelle immédiate (pas de stock photo générique).
*   **Spécification Technique Animation :**
    *   Utilisation de CSS 3D Transforms (`perspective`, `rotateX/Y`) et Framer Motion.
    *   **Performance :** Doit tourner à 60fps sur mobile. Fallback : Si `prefers-reduced-motion` est activé, l'animation doit être statique ou très lente.
    *   **Interaction :** Les électrons orbitent de manière autonome.

#### B. Formulaire de Contact
*   **Champs Requis :** Nom, Email Pro, Organisation, Rôle.
*   **Validation :**
    *   Email : Regex standard + détection basique des emails non-pro (optionnel).
    *   Anti-Spam : Champ "HoneyPot" invisible ou Rate Limiting côté client.
*   **Feedback Utilisateur :**
    *   État `Submitting` : Bouton désactivé + Spinner.
    *   État `Success` : Remplacement du formulaire par une carte de confirmation (Check icon animée) sans rechargement de page.
    *   État `Error` : Toast ou message inline rouge en cas d'échec API.

#### C. Mode "One-Pager" (`/view=one-pager`)
*   **Objectif :** Support d'aide à la décision interne (imprimable ou PDF).
*   **Spécifications Print CSS (`@media print`) :**
    *   Masquer : Navbar, Footer, Boutons d'action, Fond animé (Ambient glow).
    *   Forcer : Fond blanc, texte noir (encre économie), `print-color-adjust: exact` pour garder les couleurs des graphiques clés.
    *   Formatage : Force page breaks (`break-inside: avoid`) sur les blocs critiques (Offre V2).

### 3.3 Contenu & Data
*   **Preuves Sociales :** Les logos partenaires doivent être en monochrome (blanc/opacité réduite) et passer en couleur au survol pour maintenir l'élégance.
*   **Publications :** Liens externes ouvrant systématiquement dans un nouvel onglet (`target="_blank"` + `rel="noopener noreferrer"`).

---

## 4. Design System & UI Specifications

### 4.1 Tokens Visuels
*   **Palette Principale :**
    *   `Background` : `#000000` (Noir Absolu)
    *   `Surface` : `#1C1C1E` (Gris iOS)
    *   `Accent Primary` : `#64D2FF` (Teal Science - Pantone 298C approx)
    *   `Accent Brand` : `#BF5AF2` (Purple Tomorrow Theory - Pantone 259C approx)
*   **Glassmorphism :**
    *   `Glass-Panel` : `bg-white/5` + `backdrop-blur-xl` + `border-white/10`.
    *   Lumière : Utilisation de dégradés radiaux subtils ("Glow") derrière les cartes pour créer de la profondeur.

### 4.2 Typographie
*   **Font Family :** `Inter` (Variable font recommandée pour performance).
*   **Règles de lecture :**
    *   Paragraphes : `text-white/70`, `leading-relaxed` (1.6 à 1.7).
    *   Titres : `tracking-tight` (-0.02em) pour un aspect plus compact et moderne.
    *   Labels : `uppercase`, `tracking-widest` (0.1em), `text-xs`.

### 4.3 Motion Design
*   **Courbe d'animation (Easing) :** `[0.2, 0.8, 0.2, 1]` (Cubic-bezier type iOS "Smooth").
*   **Micro-interactions :**
    *   Hover Buttons : Léger scale (1.02), augmentation de la luminosité (brightness).
    *   Scroll Reveal : Apparition progressive (`opacity: 0 -> 1`, `y: 20px -> 0`) avec un délai en cascade (stagger) pour les grilles.

---

## 5. Architecture Technique

### 5.1 Stack
*   **Framework :** React 18
*   **Build Tool :** Vite (Implicite via Create React App ou similaire dans l'environnement actuel).
*   **Styling :** Tailwind CSS v3.
*   **Animation Library :** Framer Motion v10+.
*   **Icons :** Lucide React (SVG légers).

### 5.2 Performance (NFRs)
*   **Core Web Vitals :**
    *   LCP (Largest Contentful Paint) < 2.5s (Optimisation de l'atome Hero).
    *   CLS (Cumulative Layout Shift) < 0.1 (Tailles d'images explicites).
    *   FID (First Input Delay) < 100ms.
*   **Assets :**
    *   Images : Formats WebP/AVIF préférés. Lazy-loading sur toutes les images sous la ligne de flottaison.
    *   Fonts : Préchargement (`<link rel="preconnect">`) des Google Fonts.

### 5.3 Accessibilité (A11y)
*   **Contraste :** Vérifier le ratio 4.5:1 sur les textes gris (`text-white/60`) sur fond noir.
*   **Navigation :** Focus states visibles pour la navigation au clavier (Tab).
*   **Sémantique :** Utilisation correcte des balises `<main>`, `<section>`, `<nav>`, `<h1>` à `<h6>`.

---

## 6. Plan de Tracking (Analytics)

| Événement | Trigger | Propriétés à capturer | Objectif Business |
| :--- | :--- | :--- | :--- |
| `hero_cta_click` | Clic "Demander un échange" (Hero) | `location: hero` | Mesure d'intérêt chaud |
| `download_onepager` | Clic "Télécharger One-pager" | `location: hero` | Mesure d'intérêt tiède (Lead Magnet) |
| `scroll_depth` | Scroll de la page | `percentage: 25, 50, 75, 90` | Mesure d'engagement contenu |
| `partner_click` | Clic sur un logo partenaire | `partner_name` | Validation de la preuve sociale |
| `publication_click` | Clic sur une publication | `article_title` | Intérêt scientifique |
| `form_submit_success` | Envoi réussi du formulaire | `role`, `organization` (anonymisé) | **Conversion Principale (Macro)** |
| `v2_program_click` | Clic "Candidater" dans section V2 | `location: pricing_card` | Intérêt commercial direct |

---

## 7. Roadmap & Itérations

### Phase 1 : MVP (État Actuel)
*   Site vitrine statique complet.
*   Simulation du formulaire de contact.
*   Version One-Pager intégrée.

### Phase 2 : Connexion & Data (Q2 2025)
*   Branchement du formulaire sur API réelle (ex: n8n webhook -> Slack/Airtable).
*   Ajout d'un module "Simulateur de compétence" (Choisir un métier -> Voir la décomposition en atomes).
*   Internationalisation (EN/FR) via `react-i18next`.

### Phase 3 : Contenu Dynamique (Q3 2025)
*   Connexion à un CMS Headless pour gérer les publications et les news sans déploiement.
*   Espace "Partenaires" protégé par mot de passe pour les membres du consortium V2.
