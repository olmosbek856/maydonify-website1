# MiniPolya — minipolya.uz

Toshkentdagi mini-futbol maydonlarini onlayn bron qilish platformasining veb-sayti.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · lucide-react · Inter

## Sahifalar

| Manzil | Sahifa |
|---|---|
| `/` | Bosh sahifa |
| `/maydonlar` | Maydonlar ro'yxati (filtr, saralash, xarita, sahifalash) |
| `/maydon/[slug]` | Maydon sahifasi va bron paneli |
| `/bron` | Bronni tasdiqlash |
| `/bron/natija` | To'lov natijasi (`?holat=xato` — xato holati) |
| `/oyinlar` | Guruh o'yinlari |
| `/kirish` | Kirish (telefon → SMS kod) |
| `/bronlarim` | Bronlarim |
| `/profil` | Profil |
| `/maydon-egalari` | Maydon egalari uchun sahifa va ariza formasi |
| `/maxfiylik`, `/shartlar` | Huquqiy sahifalar |

> Bron, to'lov, kirish va profil hozircha **prototip** — `src/lib/data.ts` dagi mock ma'lumotlar bilan ishlaydi, backend ulanmagan.
> Faqat "Maydon egalariga" formasi haqiqiy: arizalar Telegram'ga yuboriladi.

## Ishga tushirish

```bash
npm install
cp .env.example .env.local   # Telegram sozlamalari
npm run dev                  # http://localhost:3000
```

## Muhit o'zgaruvchilari

| O'zgaruvchi | Tavsif |
|---|---|
| `TELEGRAM_BOT_TOKEN` | @BotFather'dan olingan token |
| `TELEGRAM_CHAT_ID` | Arizalar tushadigan chat/guruh ID |

Ular bo'lmasa, ariza faqat server loglarida qoladi. ID olish: botni guruhga qo'shing, xabar yozing va `https://api.telegram.org/bot<TOKEN>/getUpdates` dan `chat.id` ni oling.

## Deploy (Vercel)

Repozitoriyni Vercel'ga import qiling, yuqoridagi o'zgaruvchilarni qo'shing va `minipolya.uz` domenini **Settings → Domains** bo'limida ulang.
Eski `/owners`, `/privacy`, `/terms` manzillari yangi sahifalarga 301 bilan yo'naltiriladi (`next.config.ts`).
