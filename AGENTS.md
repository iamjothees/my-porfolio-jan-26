# Agent Documentation: The "Indoor Enthusiast" Portfolio & Showcase Monorepo

> **ATTENTION AGENT:** This project is NOT a standard corporate portfolio. It is a "Comical/Chaotic" personal brand site and showcase monorepo.
> **Primary Rule:** Functional Chaos. The UI must work perfectly, but the interactions should be surprising, witty, and slightly absurd.

## 1. Project Identity
- **Persona:** "Certified Homebody", "Part-Time Burgman Pioneer", "Full-Stack Sorcerer".
- **Vibe:** Cyberpunk meets Sarcastic Developer.
- **Key Themes:** 
  - "Indoors > Outdoors".
  - "30kmph Cruising".
  - "Access Denied / Classified".

## 2. Monorepo Structure
```
my-portfolio/
├── apps/
│   ├── portfolio/                 # joecodes.in (React 19, Tailwind v4, Motion)
│   │   ├── src/
│   │   │   ├── components/        # Hero, About, Skills, Projects, Contact
│   │   │   ├── App.jsx
│   │   │   └── index.css
│   │   └── package.json
│   └── showcase/                  # showcase.joecodes.in (React 18, Vite, landing-pages)
│       ├── src/
│       ├── landing-pages/         # Static showcase HTML pages
│       └── package.json
├── .github/workflows/
│   ├── deploy-portfolio.yml       # SSH Deploy to ~/domains/joecodes.in/public_html/
│   └── deploy-showcase.yml        # SSH Deploy to ~/domains/showcase.joecodes.in/public_html/
├── package.json                   # Root workspace config
└── README.md
```

## 3. Tech Stack by App
### `apps/portfolio` (`joecodes.in`)
- **Framework:** React 19+ (Vite / rolldown-vite).
- **Styling:** Tailwind CSS v4 (`@theme` block in `src/index.css`, neon colors).
- **Animation:** `motion/react` (Framer Motion).
- **Port:** `3000`

### `apps/showcase` (`showcase.joecodes.in`)
- **Framework:** React 18+ (Vite).
- **Static Assets:** `landing-pages/` copied into `dist/` on build.
- **Port:** `3001`

## 4. Core Portfolio Components & Logic
- **`Hero.jsx`**: Speedometer with idle fluctuation, breeze effect (> 5kmph), shake on high speeds.
- **`About.jsx`**: "Hold to Hibernate" / Chill Simulator progress bar.
- **`Skills.jsx`**: Holographic data chip with SVG reactor rings (explicit HEX gradient stops).
- **`Projects.jsx`**: Classified / Vault theme with matrix-style code rain.
- **`Contact.jsx`**: Runaway button and Pigeon Protocol redirecting to WhatsApp.

## 5. Development Guidelines
1. **Workspaces**: Always specify workspace or use root scripts (`npm run dev:portfolio`, `npm run dev:showcase`, `npm run build`).
2. **Mobile First**: Weird interactions (hover) must have touch equivalents (hold).
3. **Typography**: Use `break-words` on large headlines (`text-6xl+`).
4. **Tone**: Maintain the "Lazy/Genius" tone.
