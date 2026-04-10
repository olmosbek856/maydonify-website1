# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Maydonify** — landing website for a football field booking platform targeting Uzbekistan. This is a marketing/lead-gen site, not a web app.

Stack: **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**

---

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # serve production build
npm run lint     # run ESLint
```

---

## Architecture

### Pages
- `src/app/page.tsx` — User landing (`/`)
- `src/app/owners/page.tsx` — Owner/partner landing (`/owners`)
- `src/app/privacy/page.tsx` — Privacy policy
- `src/app/terms/page.tsx` — Terms of service
- `src/app/api/contact/route.ts` — POST endpoint for the owner lead form

### Key shared infrastructure
- `src/lib/translations.ts` — All UI strings in UZ/RU/EN; **never hardcode strings in components**
- `src/context/LanguageContext.tsx` — `useLanguage()` hook exposes `{ t, language, setLanguage }`; wrap any component that needs translated text with this hook
- `src/lib/siteConfig.ts` — Contact info, social links, app store URLs — single source of truth
- `src/lib/types.ts` — Shared TypeScript types (`Language`, etc.)
- `src/lib/utils.ts` — Utility helpers (e.g. `cn()` for merging Tailwind classes)
- `src/hooks/useScrollReveal.ts` — Intersection observer hook for scroll-reveal animations

### Fonts
`--font-syne` (headings, 700/800) and `--font-dm-sans` (body, 400/500/600) are set as CSS variables in `layout.tsx` and must be used via Tailwind font utilities.

### Form / API
`/api/contact` handles owner lead submissions. It includes IP-based rate limiting (3 req/min), a honeypot field (`website`), server-side validation, and sends notifications via Telegram Bot API. Required env vars:
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

---

## Design Rules

- **Prices always in UZS** — never use `$`
- Mobile-first responsive layout
- Sporty + modern + premium aesthetic; not template-like
- CTA on main page scrolls to stadium section; CTA on owners page scrolls to lead form
- Animations via Framer Motion — keep them subtle and performant

---

## Pages

### PAGE 1: User Landing (`/`)
Sections (in order): Navbar → Hero → How It Works → Stadium Cards → Benefits → App Preview → Testimonials → FAQ → Final CTA → Footer

### PAGE 2: Owner Landing (`/owners`)
Sections (in order): Navbar → Hero → Benefits → Process → Lead Form → FAQ → Footer

Form fields: Full Name, Phone, Stadium Name, Location, Message (optional). Must show loading, success, and error states.
