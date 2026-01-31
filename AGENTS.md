# Agent Documentation: The "Indoor Enthusiast" Portfolio

> **ATTENTION AGENT:** This project is NOT a standard corporate portfolio. It is a "Comical/Chaotic" personal brand site.
> **Primary Rule:** Functional Chaos. The UI must work perfectly, but the interactions should be surprising, witty, and slightly absurd.

## 1. Project Identity
- **Persona:** "Certified Homebody", "Part-Time Burgman Pioneer", "Full-Stack Sorcerer".
- **Vibe:** Cyberpunk meets Sarcastic Developer.
- **Key Themes:** 
  - "Indoors > Outdoors".
  - "30kmph Cruising".
  - "Access Denied / Classified".

## 2. Tech Stack
- **Framework:** React 19+ (Vite).
- **Styling:** Tailwind CSS v4.
  - **Note:** usage of CSS variables in `@theme` block in `index.css`.
  - **Colors:** `neon-pink`, `neon-blue`, `neon-green` defined in CSS.
- **Animation:** `motion/react` (Framer Motion).
  - Use `AnimatePresence` for modals and mounting/unmounting.
  - Use `layout` prop for smooth resizing.

## 3. Core Components & Logic

### `Hero.jsx` (The Speedster)
- **Speedometer:** A custom SVG/Div hybrid that re-renders based on `useMotionValue`.
- **Logic:**
  - `useEffect` loop controls "idle" speed fluctuation.
  - "Breeze" effect (`showWind`) triggers at speeds > 5kmph.
  - "Shake" effect intensifies at high speeds.
- **CTA:** "View Works" triggers smooth scroll to `#projects`.

### `About.jsx` (The Simulator)
- **Chill Simulator:** A progress bar game.
  - **Desktop:** `onMouseEnter` / `onMouseLeave`.
  - **Touch:** `onTouchStart` / `onTouchEnd` ("Hold to Hibernate").
  - **Logic:** Drains progress if user leaves/lifts finger.
- **Persona Text:** References "Appa", "Scooty", "Offline Rendering" (naps).

### `Skills.jsx` (The Reactor)
- **Reactor Rings:** Custom SVG components with `linearGradient`.
  - **Important:** Gradients use explicit HEX stops passed via props, NOT Tailwind classes (to avoid JIT issues).
- **Design:** "Holographic Data Chip" aesthetic using `backdrop-blur` and borders.

### `Projects.jsx` (The Vault)
- **Theme:** "Classified / Top Secret".
- **Interactions:**
  - **Bug Squasher:** Randomly positioning `absolute` bugs. State manages active bugs.
  - **Decryptor:** Matrix-style code rain effect overlay.
  - **Content:** Currently placeholders ("FILE_LOCKED").

### `Contact.jsx` (The Fortress)
- **Runaway Button:**
  - **Logic:** `onHoverStart` and `onTouchStart` trigger random X/Y translation.
  - **Cheat Code:** If clicked, opens "System Breach" modal.
- **Pigeon Protocol:**
  - **Animation:** Physics-based `motion.div` flight path (bobbing Y, trailing speed lines).
  - **Action:** Redirects to `wa.me` (WhatsApp) upon animation completion.

## 4. Future Development Guidelines
1.  **Mobile First:** Ensure all weird interactions (hover effects, etc.) have a "Touch" equivalent (e.g., "Hold" instead of "Hover").
2.  **Typography:** Use `break-words` on large headlines (`text-6xl+`) to prevent lateral overflow on small screens.
3.  **Tone:** Maintain the "Lazy/Genius" tone. Never write standard "I am a passionate developer" copy. Write "I fix bugs by staring at them."

## 5. Directory Structure
```
src/
├── components/       # All section components
├── assets/          # Static images
├── App.jsx          # Main layout & composition
└── index.css        # Tailwind v4 configuration & Global Keyframes
```

---
*Generated: Jan 2026*
