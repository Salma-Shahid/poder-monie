# PoderMonie

Nigeria's mobile-first investment platform landing page. Built with React, Vite, and Tailwind CSS.

![Status: Private](https://img.shields.io/badge/status-private-lightgrey)

## What's new (Latest update: 2026-07-12)

- Updated project documentation and developer setup.
- Verified compatibility with React 19, Vite 8, and Tailwind CSS 4.
- Added links to the `docs/` folder with detailed guides and deployment notes.
- Small copy and structure improvements to make onboarding faster for new contributors.

## Features

- **Fixed-Income Investments** — Treasury Bills, Bonds, and Commercial Papers
- **Goal-Based Savings** — Automated savings with interest rewards
- **Cash-Backed Loans** — Instant loans using savings as collateral

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)

## Getting Started (Development)

1. Clone the repo

```bash
git clone https://github.com/Salma-Shahid/poder-monie.git
cd poder-monie
```

2. Install dependencies

```bash
npm install
# or pnpm install / yarn install
```

3. Start development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

5. Preview production build

```bash
npm run preview
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, stats, features, testimonials |
| `/products` | Products — investment & savings catalog, leadership team |
| `/calculators` | Calculators — fixed-income, savings, and loan tools |

## Project Structure

```
src/
├── App.jsx                     # Router and routes
├── components/
│   └── Layout.jsx              # Shared header + footer wrapper
├── pages/
│   ├── HomePage.jsx
│   ├── ProductsPage.jsx
│   └── CalculatorsPage.jsx
├── NavigationHeaderSection.jsx # Sticky header with mobile menu
├── HeroShowcaseSection.jsx     # Home page sections
├── EngagementFooterSection.jsx # CTA, footer, newsletter, cookie banner
├── assets/                     # Static assets (logo, images)
└── index.css                   # Global styles and design tokens
```

## Documentation

Detailed documentation, guides, and the changelog live in the `docs/` folder. Start with `docs/README.md`.

## Contributing

This repository is private. If you are part of the project and want to contribute:

- Follow the branching and PR guidelines used by the team.
- Run linters and tests before opening a PR.
- Keep changes scoped and document any API or UX changes in the PR description.

## License

Private — All rights reserved.
