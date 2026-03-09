# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (http://localhost:3000)
- **Build:** `npm run build` (static export to `out/`)
- **Lint:** `npm run lint` (ESLint 9 flat config)
- No test suite — no test command
- `next start` does not work — the project uses static export only

## Project Overview

Single-page dark-themed landing site for the **QwenVoice** macOS app. Built with **Next.js 16** (App Router, static export), **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React** icons. Hosted on Vercel at `qwenvoice.vercel.app`.

## Architecture

### Static Export

`next.config.ts` sets `output: "export"` with `images: { unoptimized: true }`. No server-side logic — everything is pre-rendered to static HTML/CSS/JS in `out/`.

### Page Assembly

`src/app/page.tsx` composes the page from section components in scroll order:
Navbar -> Hero -> Features -> HowItWorks -> TechHighlights -> Requirements -> DownloadCTA -> Footer

Each section lives in `src/components/sections/` and uses an ID from `SECTION_IDS` in `src/lib/constants.ts` for smooth-scroll navigation from the Navbar.

### Routing

Single-page site with no additional routes. `not-found.tsx` redirects all 404s back to `/`. Smooth scroll is enabled globally via `html { scroll-behavior: smooth }` in `globals.css`.

### Metadata & SEO

`layout.tsx` exports a `metadata` object with `metadataBase` set to `https://qwenvoice.vercel.app`. Includes Open Graph (1200x630 image), Twitter summary_large_image card, and favicon. Title is composed from `SITE.name` + `SITE.tagline`.

## Design System

### Tailwind v4 Theme

Colors and fonts are defined via `@theme inline` in `src/app/globals.css` — not a JS config file. PostCSS uses `@tailwindcss/postcss` plugin (`postcss.config.mjs`). Custom properties become Tailwind tokens:

| Token | Value | Usage |
|---|---|---|
| `--color-bg-primary` | `#060B18` | Page background, scrollbar track |
| `--color-bg-secondary` | `#0D1527` | Card backgrounds, code blocks |
| `--color-bg-tertiary` | `#131D35` | Scrollbar thumb |
| `--color-text-primary` | `#F5F5F7` | Headings, primary text |
| `--color-text-secondary` | `#A1A1A6` | Body text, descriptions |
| `--color-text-tertiary` | `#6E6E73` | Muted text, chips, timestamps |
| `--color-accent` | `#4A8BF5` | Buttons, icons, labels |
| `--color-accent-hover` | `#5C9AFF` | Button hover state |
| `--color-gradient-end` | `#7B61FF` | Gradient purple endpoint |

Fonts: **Inter** (`--font-sans`) for body/UI, **JetBrains Mono** (`--font-mono`) for code blocks and model names. Both loaded via `next/font/google` in `layout.tsx`.

### Custom CSS Utilities (globals.css)

- `.text-gradient` — 135deg linear gradient from accent to gradient-end, applied via background-clip
- `.orb` / `.orb-blue` / `.orb-purple` — Animated floating background blobs with blur (Hero section)
- `.glow-accent` / `.glow-accent-strong` — Box-shadow glow effects for buttons and CTA elements
- `::selection` — Blue-tinted text selection highlight
- Custom scrollbar styling (WebKit)

## Component Patterns

### Glass Cards
`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl` — wrapped in `GlassCard` component. Used extensively across Features, HowItWorks, TechHighlights, and Requirements.

### Buttons
`Button` component renders `<a>` tags (not `<button>`). Two variants:
- **primary**: solid accent background with glow
- **secondary**: transparent with white border

`external` prop (default `true`) adds `target="_blank" rel="noopener noreferrer"`.

### Section Headers
`SectionHeader` component takes `label` (uppercase accent text), `title`, and optional `subtitle`. Automatically wrapped in `AnimateOnScroll`.

### Scroll Animations
`AnimateOnScroll` wraps content in a Framer Motion `motion.div` with `whileInView` triggering (fires once, -80px margin). Variants defined in `src/lib/animations.ts`:
- `fadeUp` — opacity 0->1, y 30->0
- `fadeIn` — opacity only
- `staggerContainer` — staggers children by 0.1s
- `scaleIn` — opacity + scale 0.95->1

Most sections use `staggerContainer` on the parent grid and `fadeUp` on each child.

### Navbar Behavior
Fixed position with scroll detection (transparent when at top, blurred glass background after 20px scroll). Desktop shows nav links + GitHub icon + Download button. Mobile shows hamburger menu that toggles a dropdown panel.

### Footer Structure
Three-column grid (Project / Documentation / Built With) with vertical dividers on desktop and left-border separators on mobile. Each column uses a `LinkList` helper component. Bottom bar has copyright and a note about upstream docs.

## Key Conventions

- All section components and interactive UI components use `"use client"` directive
- `cn()` utility in `src/lib/cn.ts` wraps `clsx` for conditional class names — no `tailwind-merge`
- External links (GitHub, download) are configured in `SITE` constant in `src/lib/constants.ts`
- Path alias: `@/*` maps to `./src/*`
- Static images live in `public/images/`
- Icons come from `lucide-react` — imported individually (e.g., `{ Github, Download, Mic }`)
- Data arrays are defined as typed constants at module level in each section component (not extracted to separate data files)
- TypeScript strict mode enabled, target ES2017, bundler module resolution
- ESLint 9 flat config (`eslint.config.mjs`) with `core-web-vitals` and `typescript` presets; ignores `.next/`, `out/`, `build/`
