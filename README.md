# PoderMonie

Nigeria's mobile-first investment platform landing page. Built with React, Vite, and Tailwind CSS.

## Features

- **Fixed-Income Investments** — Treasury Bills, Bonds, and Commercial Papers
- **Goal-Based Savings** — Automated savings with interest rewards
- **Cash-Backed Loans** — Instant loans using savings as collateral

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
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
├── EngagementFooterSection.jsx   # CTA, footer, newsletter, cookie banner
├── assets/                     # Static assets (logo)
└── index.css                   # Global styles and design tokens
```

## License

Private — All rights reserved.
