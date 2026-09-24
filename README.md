# Refacciones — Web Catalog & Digital Presence

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Dark Gold](https://img.shields.io/badge/Theme-Dark_Gold-FFD700?style=for-the-badge)

**Live demo:** [web-catalog-alpha.vercel.app](https://web-catalog-alpha.vercel.app)

A production-ready website template for automotive workshops and parts suppliers: a filterable parts catalog, service pages and location info, with every quote request routed straight to WhatsApp. Built as a fast single-page app with a premium *dark-gold* visual identity, and designed so a new business can be launched by editing two data files.

> All business data in this repository (phone, email, address, reviews) is placeholder content.

## ✨ Features

- **Parts catalog** — 100 sample parts with instant text search (accent-insensitive, multi-word: `bomba nissan`), combinable multi-select filters (brand, year range, part type), price sorting and a one-click WhatsApp quote per item with a pre-filled message.
- **Shareable filtered views** — brand filters live in the URL (`/catalogo?marca=Nissan`); the featured brands on the home page link straight to them.
- **Content sections** — FAQ accordion on the home page and a four-step "how we work" process on the services page.
- **Real URLs per section** — `/catalogo`, `/servicios`, `/nosotros`, `/resenas`, `/ubicacion`, powered by React Router. Unknown routes return a real `404` status with a styled, `noindex` not-found page.
- **SEO ready** — per-page title, description, canonical URL and Open Graph tags; `LocalBusiness` JSON-LD structured data; `sitemap.xml` and `robots.txt`.
- **Accessible** — one `h1` per page, labelled icons and menus, keyboard skip link, `aria-expanded` on toggles.
- **Performance** — lazy-loaded images, hashed and minified assets, ~80 KB transferred on first load (excluding the background video).
- **Single source of truth** — contact details, hours, social links and branding live in one file; the whole UI and the SEO metadata read from it.

## 🛠 Tech Stack

| Layer | Technology |
| --- | --- |
| UI | React 18, React Router 7 |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 3 |
| Build | Vite 7 |
| Hosting | Vercel (SPA rewrites in `vercel.json`); Apache/WAMP supported via `public/.htaccess` |

## 🚀 Getting Started

Requires Node.js 20.19+.

```bash
git clone https://github.com/jp-software-dev/web-catalog.git
cd web-catalog
npm install
npm run dev
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check (`tsc -b`) and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Type-check only |

## 🎨 Customizing for a Business

| What | Where |
| --- | --- |
| Name, tagline, phone, WhatsApp, email, address, hours, social links, map | `src/data/business.ts` |
| Catalog products, brands, years and categories | `src/data/inventory.ts` |
| Frequently asked questions | `src/data/faq.ts` |
| Page titles and meta descriptions | `src/routes.ts` |
| Colors, font and animations | `tailwind.config.ts` |
| Images and background video | `src/assets/` |
| Production domain | `siteUrl` in `business.ts`, plus `index.html`, `public/sitemap.xml` and `public/robots.txt` |

Adding a product is one line in `inventory.ts`; TypeScript rejects unknown brands, years or categories at build time.

## 📁 Project Structure

```
src/
├── components/     # Pages (Home, Catalog, Services, …) and Layout (nav + footer)
├── data/           # business.ts (contact & brand) · inventory.ts (catalog) · faq.ts
├── hooks/          # usePageMeta — per-page title, description and Open Graph
├── routes.ts       # Route paths, labels and SEO metadata
└── main.tsx        # App entry point
public/             # favicon, robots.txt, sitemap.xml, .htaccess
```

## 🗺 Roadmap

- Pre-rendering each route to static HTML for richer social previews
- Real product photos per part
- Compressed background video with a poster image
