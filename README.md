# Maydonify — Landing Website

Marketing website for **Maydonify**, a football field booking platform in Uzbekistan.

- `/` — User landing page (find and book fields)
- `/owners` — Partner/owner landing page with lead capture form
- `/privacy` — Privacy policy
- `/terms` — Terms of service

**Stack:** Next.js 15 · TypeScript · Tailwind CSS v4 · Framer Motion

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values (see below)

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `TELEGRAM_BOT_TOKEN` | Optional | Bot token from @BotFather — enables form notifications |
| `TELEGRAM_CHAT_ID` | Optional | Your Telegram chat/group ID |

Without these, the form still works — submissions are logged in server logs only.

### How to get a Telegram Bot Token

1. Open Telegram → search `@BotFather` → `/newbot`
2. Follow prompts → copy the `token`
3. Add your bot to a private group or channel
4. Send any message in that group
5. Visit `https://api.telegram.org/bot<TOKEN>/getUpdates`
6. Find `"chat":{"id": ...}` — that is your `TELEGRAM_CHAT_ID`
   - For groups/channels the ID is usually negative (e.g. `-1001234567890`)

---

## Deploy to Vercel

### Option A — Vercel Dashboard (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the GitHub repository
4. Framework will be detected as **Next.js** automatically
5. Under **Environment Variables**, add:
   - `TELEGRAM_BOT_TOKEN` = your bot token
   - `TELEGRAM_CHAT_ID` = your chat ID
6. Click **Deploy**

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

When prompted for environment variables, enter the values above.

---

## After Deployment

- [ ] Verify the owners form submits successfully at `/owners`
- [ ] Check your Telegram group/chat for the test notification
- [ ] Update `src/lib/siteConfig.ts` with real App Store / Google Play URLs when published
- [ ] Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in Vercel Dashboard

---

## External Services Used

| Service | Purpose | Cost |
|---|---|---|
| **Vercel** | Hosting + serverless functions | Free tier |
| **Telegram Bot API** | Form submission notifications | Free |
| **Google Fonts** | Syne + DM Sans via next/font | Free |
| **Unsplash** | Stadium card images (remote patterns) | Free |

No database is required. Form submissions arrive via Telegram instantly.

---

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Form submission handler
│   ├── layout.tsx             # Root layout + metadata
│   ├── page.tsx               # User landing page
│   ├── owners/page.tsx        # Owner/partner page
│   ├── privacy/page.tsx       # Privacy policy
│   └── terms/page.tsx         # Terms of service
├── components/
│   ├── home/                  # User page sections
│   ├── owners/                # Owner page sections
│   ├── shared/                # Navbar, Footer
│   └── ui/                    # Reusable primitives
├── context/                   # Language context
├── hooks/                     # Scroll reveal
└── lib/                       # Config, translations, types, utils
```
