# joecodes.in Monorepo

This repository is a monorepo maintaining both personal web properties:

| App | Domain | Path | Tech Stack | Local Port |
|---|---|---|---|---|
| **Portfolio** | [joecodes.in](https://joecodes.in) | `apps/portfolio` | React 19, Tailwind CSS v4, Motion, Vite | `http://localhost:3000` |
| **Showcase** | [showcase.joecodes.in](https://showcase.joecodes.in) | `apps/showcase` | React 18, Vite, Landing Pages | `http://localhost:3001` |

---

## Directory Structure

```
my-portfolio/
├── .github/
│   └── workflows/
│       ├── deploy-portfolio.yml       # Deploys portfolio to joecodes.in
│       └── deploy-showcase.yml        # Deploys showcase to showcase.joecodes.in
├── apps/
│   ├── portfolio/                     # joecodes.in personal brand & portfolio
│   │   ├── src/
│   │   ├── public/
│   │   ├── vite.config.js
│   │   └── package.json
│   └── showcase/                      # showcase.joecodes.in demos & landing pages
│       ├── src/
│       ├── public/
│       ├── landing-pages/
│       ├── vite.config.js
│       └── package.json
├── package.json                       # Root workspace orchestrator
├── package-lock.json
└── README.md
```

---

## Getting Started

### 1. Install Dependencies
Install all workspace dependencies at the root:
```bash
npm install
```

### 2. Development

Run both applications simultaneously:
```bash
npm run dev
```

Or run an individual application:
```bash
# Run Portfolio (joecodes.in) at http://localhost:3000
npm run dev:portfolio

# Run Showcase (showcase.joecodes.in) at http://localhost:3001
npm run dev:showcase
```

### 3. Production Builds

Build both applications:
```bash
npm run build
```

Or build an individual application:
```bash
# Build Portfolio -> apps/portfolio/dist
npm run build:portfolio

# Build Showcase -> apps/showcase/dist (bundles landing-pages)
npm run build:showcase
```

### 4. Linting
```bash
npm run lint
```

---

## Deployment & CI/CD

Both applications deploy via GitHub Actions using SSH to Hostinger. Workflows use path-based triggers to ensure changes in one project only deploy that project:

- **Portfolio**: Push modifying `apps/portfolio/**` triggers `deploy-portfolio.yml` -> deploys to `~/domains/joecodes.in/public_html/`.
- **Showcase**: Push modifying `apps/showcase/**` triggers `deploy-showcase.yml` -> deploys to `~/domains/showcase.joecodes.in/public_html/`.
- **Manual Trigger**: Both workflows support manual execution via GitHub `workflow_dispatch`.
