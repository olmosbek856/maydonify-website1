# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Project: MiniPolya (minipolya.uz) — Next.js 15 (App Router), Tailwind CSS v4, TypeScript, lucide-react
Brand: accent #04875A (logo green), ink #0B1220, bg #F7F8FA — tokens live in `src/app/globals.css` (`@theme`)
Font: Inter (next/font, `--font-inter`)
Language: Uzbek (Latin) only for now; RU toggle is shown but disabled ("tez orada")
Target: mini-football pitch booking, Tashkent users

Rule: Only touch files I mention. After task, list changed files.

## Commands

```bash
npm run dev      # dev server
npm run build    # production build
npm run lint     # ESLint
```

## Architecture

- `src/app/(site)/` — all pages share `layout.tsx` (Header + Footer + MobileTabBar)
  - `/` home · `/maydonlar` list (+ `loading.tsx`) · `/maydon/[slug]` pitch · `/bron` checkout · `/bron/natija` result (`?holat=xato` = error state)
  - `/oyinlar` group games · `/kirish` phone + SMS login · `/bronlarim` my bookings · `/profil` profile
  - `/maydon-egalari` owners landing + lead form · `/maxfiylik`, `/shartlar` legal
- `src/app/not-found.tsx` — 404; `sitemap.ts`, `robots.ts`, `icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx`
- `src/app/api/contact/route.ts` — owner lead form → Telegram (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`), rate limit + honeypot `fax_number`
- `src/lib/data.ts` — **mock data** (pitches, games, bookings, FAQ). Booking/login/payment are front-end prototypes, no backend yet.
- `src/lib/siteConfig.ts` — contact info and socials, single source of truth
- `src/components/ui/` — Button, Badge/StatusBadge, Field (TextField/SelectField/Chip/Checkbox/Switch), Overlay (Modal/BottomSheet/ConfirmModal/Toast), Basics (Logo/SectionHead/Breadcrumb/EmptyState/Skeleton)
- `src/components/cards/` — PitchCard, GameCard, TimeSlot
- Old URLs `/owners`, `/privacy`, `/terms` redirect in `next.config.ts`

## Design rules

- Use only theme tokens (`bg-accent`, `text-muted`, `rounded-card`, `shadow-hover`…) — no raw hex in components
- Prices: "250 000 so'm", "250 000 so'm / soat" — use `formatSom()`; dates "24.10.2026"; times "20:00–21:00"
- Payment is online only (Humo, UZCard) — never offer cash
- Cancellation: >24h before → full refund; <24h → no refund
- Mobile 390px and desktop 1440px; touch targets ≥ 44px; contrast ≥ 4.5:1
- No lorem ipsum, no English UI text
