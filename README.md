# Sehati – Landing Page

Marketing site for **Sehati** (صحتي), an Arabic-first clinic-management platform. The page presents the product's features, pricing and FAQ, and lets visitors request a free demo.

**Live site:** https://sehati-landing-client.vercel.app

The application itself lives in a separate repository: [kyan9400/sehati-client](https://github.com/kyan9400/sehati-client).

## What's on the page

A single-page layout with anchor navigation (Features, Why Sehati, Pricing, FAQ, Contact) and scroll animations:

- Hero with a "Book a Free Demo" call to action
- Features: smart appointment scheduling, patient profiles, doctor & staff management, analytics dashboard, customizable settings, billing & invoicing
- Why Sehati and who it is for (solo practitioners, polyclinics, specialized centers, multi-branch medical groups)
- How it works in four steps, testimonials, "trusted by" logos, data security
- Pricing tiers: Starter, Growth, Enterprise
- FAQ, demo request form, contact section and footer

The demo form is front-end only: it logs the submission to the browser console and shows a thank-you alert. There is no backend.

## Tech stack

- React 19 + TypeScript, bootstrapped with Create React App (`react-scripts` 5)
- React Router 7
- Tailwind CSS 3 via PostCSS and Autoprefixer
- AOS (Animate On Scroll) and Heroicons
- Hosted on Vercel

## Getting started

Requires Node.js 20+ and npm.

```bash
npm ci          # install dependencies
npm start       # dev server on http://localhost:3000
npm run build   # production build into build/
```

No environment variables are required.

## Project structure

```
public/                  static assets and index.html
src/
  App.tsx                router; mounts the landing page at /
  pages/LandingPage.tsx  the whole landing page (navbar, sections, footer)
  index.css              Tailwind directives
tailwind.config.js       Tailwind content paths
postcss.config.js        Tailwind + Autoprefixer
```

## Deployment

The `main` branch is deployed by Vercel using the standard CRA build (`npm run build`, output in `build/`).

## License

MIT — see [LICENSE](LICENSE).
