# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (http://localhost:3000)
- **Build:** `npm run build` (static export to `out/`)
- **Lint:** `npm run lint` (ESLint 9 flat config)
- No test suite — no test command

## Architecture

Single-page dark-themed landing site for the QwenVoice macOS app. Built with **Next.js 16** (App Router, static export), **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

### Static Export

`next.config.ts` sets `output: "export"` with `images: { unoptimized: true }`. No server-side logic — everything is pre-rendered to static HTML/CSS/JS.

### Page Assembly

`src/app/page.tsx` composes the page from section components in scroll order:
Navbar → Hero → Features → HowItWorks → TechHighlights → Requirements → DownloadCTA → Footer

Each section lives in `src/components/sections/` and uses an ID from `SECTION_IDS` in `src/lib/constants.ts` for smooth-scroll navigation from the Navbar.

### Design System (Tailwind v4)

Colors and fonts are defined via `@theme inline` in `src/app/globals.css` — not a JS config file. Custom properties become Tailwind tokens (e.g., `bg-bg-primary`, `text-accent`). Key palette: dark navy backgrounds (`#060B18`/`#0D1527`), blue accent (`#4A8BF5`), purple gradient end (`#7B61FF`).

Fonts: Inter (`--font-sans`) and JetBrains Mono (`--font-mono`), loaded via `next/font/google` in `layout.tsx`.

### Component Patterns

- **Glass cards:** `bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]` — wrapped in `GlassCard` component
- **Buttons:** `Button` component with `primary`/`secondary` variants, renders as `<a>` tags
- **Section headers:** `SectionHeader` component (label + title + subtitle), auto-wrapped in scroll animation
- **Scroll animations:** `AnimateOnScroll` wraps content in a Framer Motion `motion.div` with `whileInView` triggering. Variants defined in `src/lib/animations.ts` (`fadeUp`, `staggerContainer`, `scaleIn`)

### Key Conventions

- All section components and interactive UI components use `"use client"` directive
- `cn()` utility in `src/lib/cn.ts` wraps `clsx` for conditional class names
- External links (GitHub, download) are configured in `SITE` constant in `src/lib/constants.ts`
- Path alias: `@/*` maps to `./src/*`
- Static images live in `public/images/` (app icon, feature screenshots)
- `next start` does not work — the project uses static export only
