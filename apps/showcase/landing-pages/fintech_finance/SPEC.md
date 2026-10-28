# VAULT — Neo-Banking Landing Page Spec

## Concept & Vision

A brutalist fintech landing page that feels like staring into a secure terminal. Raw, exposed grid lines evoke transparency and auditability. Bold typography commands authority. The vibe: "your money is in a vault that runs at light speed."

## Design Language

- **Aesthetic**: Secure Brutalist — exposed grid, stark contrast, monospace accents, raw geometry
- **Color Palette**:
  - Background: Deep Charcoal `#121212`
  - Primary: Electric Purple `#8B5CF6`
  - Accent: Cyber Yellow `#FACC15`
  - Text Primary: `#FAFAFA`
  - Text Muted: `#71717A`
  - Grid Lines: `#27272A` (subtle), `#3F3F46` (exposed)
- **Typography**:
  - Display: Bebas Neue (bold, condensed, all-caps)
  - Body/Mono: JetBrains Mono
- **Motion**: Snappy 150-200ms transitions, no bounce — everything is precise and mechanical
- **Exposed Grid**: Visible grid lines as decorative elements, not hidden structure

## Layout & Structure

1. **Nav** — Sticky. VAULT logo left, "Privacy Mode" toggle right (eye icon). Dark bar with bottom border line.
2. **Hero** — Full-viewport. Massive Bebas Neue "YOUR MONEY. SECURE." stacked text. Subline in mono. CTA button.
3. **Portfolio Chart Section** — Exposed grid background. SVG polyline chart showing growth. Legend. Grid lines visible behind chart.
4. **Transaction History** — Dark list with hover micro-interactions. Realistic fintech company names/logos.
5. **Footer** — Minimal. Logo, tagline, links.

## Features & Interactions

- **Privacy Mode Toggle**: Eye/eye-off icon. When ON: all `.balance` elements get `filter: blur(8px)` and `user-select: none`. Persists in sessionStorage.
- **Transaction Hover**: Row lifts slightly (translateY -2px), left border accent appears in purple, background lightens subtly.
- **Chart**: SVG polyline with gradient fill below line. Data points as circles on hover.

## Component Inventory

| Component | States |
|---|---|
| Nav | Default, scrolled (subtle shadow) |
| Privacy Toggle | OFF (eye open), ON (eye-slash, muted icon) |
| Balance Number | Normal, Blurred (privacy on) |
| CTA Button | Default (purple bg), Hover (yellow bg, dark text) |
| Transaction Row | Default, Hover (lifted, purple left border) |
| Chart | Default, Hover on data points (tooltip) |

## Technical Approach

- Single HTML file with embedded CSS and JS
- Vanilla JS for privacy toggle (no framework)
- SVG polyline for chart (custom, no library)
- CSS Grid + Flexbox
- Google Fonts: Bebas Neue, JetBrains Mono