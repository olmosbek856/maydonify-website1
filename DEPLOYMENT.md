# Deployment Guide — Maydonify

## Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Recommended host**: Vercel (zero-config for Next.js)

---

## Run Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

---

## Deploy to Vercel (Recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → Import repository.
3. Vercel auto-detects Next.js. Click **Deploy**.
4. Done — live in ~60 seconds.

### Environment Variables (Optional)
If you wire up a real email webhook for the contact form, add these to Vercel project settings:

| Key | Value |
|-----|-------|
| `CONTACT_WEBHOOK_URL` | Your webhook or email API endpoint |

Currently the `/api/contact` route accepts submissions but does not forward them anywhere. Wire up the route at `src/app/api/contact/route.ts` to your preferred service (Telegram Bot API, Resend, SendGrid, etc.).

---

## Connect a Custom Domain

1. In Vercel dashboard → your project → **Settings → Domains**.
2. Add `maydonify.uz` (or your domain).
3. Update your DNS to point to Vercel's nameservers.

---

## Build Commands Summary

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server locally |
| `npm run lint` | Run ESLint |
