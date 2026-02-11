<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: <https://ai.studio/apps/drive/16qBY5-5V5HfWUT-_CBkaWu9wp_kJf26D>

## Features

- **Architecture:** React 19, Vite, TypeScript, Tailwind CSS v4.
- **Routing:** SPA navigation with `react-router-dom` (Home, OnePager, Legal).
- **Internationalization (i18n):** Full FR/EN support with `i18next`.
- **UI/UX:** Premium animations (`framer-motion`), glassmorphism, and responsive design.

## Run Locally

**Prerequisites:** Node.js v18+

1. Install dependencies:
   `npm install`
2. Run the dev server:
   `npm run dev`
3. Build for production:
   `npm run build`

## Localization

Translations are stored in `public/locales/`.

- `fr.json`: French (Default)
- `en.json`: English

To add a new language, create a file in `public/locales/` and update `src/i18n.ts`.
