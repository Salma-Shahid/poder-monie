# PoderMonie Documentation

Welcome to the official PoderMonie documentation! This comprehensive guide covers everything you need to know about developing, deploying, and contributing to the project.

## 📚 Documentation Index

### Getting Started
- **[Getting Started Guide](./GETTING_STARTED.md)** - Setup and installation instructions
  - Prerequisites
  - Installation steps
  - Running the development server
  - Troubleshooting basic setup issues

### Development
- **[Project Structure](./PROJECT_STRUCTURE.md)** - Understand the codebase organization
  - Directory layout and purpose
  - File naming conventions
  - Build output

- **[Development Guide](./DEVELOPMENT.md)** - How to build features
  - Creating components
  - Adding pages/routes
  - Working with Tailwind CSS
  - State management
  - Form handling
  - Best practices
  - Debugging tips

### Contributing
- **[Contributing Guidelines](./CONTRIBUTING.md)** - How to contribute to the project
  - Code of conduct
  - Git workflow
  - Pull request process
  - Reporting bugs
  - Suggesting features
  - Development guidelines

### Deployment
- **[Deployment Guide](./DEPLOYMENT.md)** - Building and deploying to production
  - Vercel deployment (recommended)
  - Manual deployment
  - GitHub Pages setup
  - Environment variables
  - Monitoring deployments
  - Performance optimization

### Help & Support
- **[Troubleshooting Guide](./TROUBLESHOOTING.md)** - Solutions to common issues
  - Development issues
  - Build problems
  - Git & GitHub issues
  - Deployment problems
  - Performance issues
  - Browser-specific fixes

---

## 🚀 Quick Start

**New to PoderMonie?** Start here:

```bash
# 1. Clone the repository
git clone https://github.com/Salma-Shahid/poder-monie.git
cd poder-monie

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser and visit http://localhost:5173
```

Then read the [Getting Started Guide](./GETTING_STARTED.md) for more details.

---

## 💡 Common Tasks

### I want to...

**...add a new feature**
1. Read [Development Guide](./DEVELOPMENT.md)
2. Follow [Contributing Guidelines](./CONTRIBUTING.md)
3. Create a feature branch: `git checkout -b feature/my-feature`
4. Make your changes
5. Submit a pull request

**...fix a bug**
1. Create an issue describing the bug
2. Follow [Development Guide](./DEVELOPMENT.md)
3. Write a fix
4. Test thoroughly
5. Submit a pull request

**...deploy to production**
1. Read [Deployment Guide](./DEPLOYMENT.md)
2. Follow Vercel setup instructions
3. Enable automatic deployments

**...understand the codebase**
1. Start with [Project Structure](./PROJECT_STRUCTURE.md)
2. Read through [Development Guide](./DEVELOPMENT.md)
3. Explore the `/src` directory

**...solve a problem**
1. Check [Troubleshooting Guide](./TROUBLESHOOTING.md)
2. Search [GitHub Issues](https://github.com/Salma-Shahid/poder-monie/issues)
3. If still stuck, create a new issue

---

## 🛠️ Tech Stack

PoderMonie is built with modern technologies:

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework |
| **Vite 8** | Build tool & dev server |
| **Tailwind CSS 4** | Styling utility framework |
| **Font Awesome** | Icon library |
| **Vercel** | Hosting & deployment |

Learn more in [Project Structure](./PROJECT_STRUCTURE.md#tech-stack).

---

## 📋 Project Overview

**PoderMonie** is Nigeria's mobile-first investment platform landing page.

### Features
- 📈 **Fixed-Income Investments** — Treasury Bills, Bonds, and Commercial Papers
- 💰 **Goal-Based Savings** — Automated savings with interest rewards
- 💳 **Cash-Backed Loans** — Instant loans using savings as collateral

### Key Pages
- `/` - Home page with hero, features, and testimonials
- `/products` - Investment products and team
- `/calculators` - Financial calculators
- `/about` - About: company mission, team, and values
- `/blog` - Blog: articles, announcements, and insights
- `/contact` - Contact: contact form and support information
- `/signup` - Signup: create an account (registration form)
- `/login` - Login: user authentication page

### Live Site
https://poder-monie.vercel.app

---

## 🤝 Contributing

We welcome contributions! Whether it's:
- 🐛 Bug reports
- ✨ Feature suggestions
- 📖 Documentation improvements
- 💻 Code contributions

Please read [Contributing Guidelines](./CONTRIBUTING.md) before submitting.

---

## 📞 Getting Help

- 💬 [GitHub Discussions](https://github.com/Salma-Shahid/poder-monie/discussions) - Ask questions and share ideas
- 🐛 [GitHub Issues](https://github.com/Salma-Shahid/poder-monie/issues) - Report bugs or request features
- 📚 Read relevant documentation above
- ❓ Check [Troubleshooting Guide](./TROUBLESHOOTING.md)

---

## 📄 License

PoderMonie is a private project. All rights reserved.

For more information, see [LICENSE](../LICENSE) in the repository root.

---

## 🔗 Related Links

- [Main README](../README.md)
- [GitHub Repository](https://github.com/Salma-Shahid/poder-monie)
- [Live Website](https://poder-monie.vercel.app)
- [Vercel Dashboard](https://vercel.com/dashboard)

---

**Last Updated**: July 12, 2026

Updates
- Added documentation entries for new pages: About, Blog, Contact, Signup, and Login. These pages are implemented under `src/pages/` and wired into the application router.
- `src/App.jsx` and `src/NavigationHeaderSection.jsx` were updated to include the new routes and navigation links (mobile + desktop).

For the latest documentation, visit the [docs folder](https://github.com/Salma-Shahid/poder-monie/tree/main/docs) on GitHub.
