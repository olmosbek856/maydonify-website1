import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter (per serverless instance)
// Provides basic protection; for heavier traffic use Upstash Redis
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3; // max submissions per window
const RATE_WINDOW_MS = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

function sanitize(value: string): string {
  return value.trim().replace(/[<>]/g, "");
}

function isValidPhone(phone: string): boolean {
  return /^[\+]?[\d\s\-\(\)]{9,16}$/.test(phone.trim());
}

async function sendTelegramNotification(payload: {
  fullName: string;
  phone: string;
  stadiumName: string;
  location: string;
  message: string | null;
  submittedAt: string;
}): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return; // silently skip if not configured

  const text = [
    `🏟 <b>Yangi hamkor so'rovi — Maydonify</b>`,
    ``,
    `👤 <b>Ism:</b> ${payload.fullName}`,
    `📞 <b>Telefon:</b> ${payload.phone}`,
    `🏟 <b>Maydon nomi:</b> ${payload.stadiumName}`,
    `📍 <b>Joylashuv:</b> ${payload.location}`,
    payload.message ? `💬 <b>Xabar:</b> ${payload.message}` : null,
    ``,
    `🕐 ${payload.submittedAt}`,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
  });
  if (!res.ok) {
    const err = await res.text();
    console.error("[Maydonify] Telegram API error:", res.status, err);
  } else {
    console.log("[Maydonify] Telegram message sent successfully");
  }
}

interface ContactPayload {
  fullName: string;
  phone: string;
  stadiumName: string;
  location: string;
  message?: string;
  // Honeypot: must be empty
  fax_number?: string;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting by IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute." },
        { status: 429 }
      );
    }

    const body: ContactPayload = await req.json();
    const { fullName, phone, stadiumName, location, message, fax_number } = body;

    // Honeypot check — bots fill hidden fields, humans don't
    if (fax_number) {
      // Return 200 to avoid tipping off bots
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Server-side validation
    if (!fullName?.trim() || fullName.trim().length < 2) {
      return NextResponse.json({ error: "Ism to'liq kiriting" }, { status: 400 });
    }
    if (fullName.trim().length > 100) {
      return NextResponse.json({ error: "Ism juda uzun" }, { status: 400 });
    }
    if (!phone?.trim() || !isValidPhone(phone)) {
      return NextResponse.json({ error: "Telefon raqamni to'g'ri kiriting" }, { status: 400 });
    }
    if (!stadiumName?.trim() || stadiumName.trim().length < 2) {
      return NextResponse.json({ error: "Maydon nomini kiriting" }, { status: 400 });
    }
    if (stadiumName.trim().length > 150) {
      return NextResponse.json({ error: "Maydon nomi juda uzun" }, { status: 400 });
    }
    if (!location?.trim() || location.trim().length < 2) {
      return NextResponse.json({ error: "Joylashuvni kiriting" }, { status: 400 });
    }
    if (location.trim().length > 200) {
      return NextResponse.json({ error: "Joylashuv juda uzun" }, { status: 400 });
    }
    if (message && message.trim().length > 500) {
      return NextResponse.json({ error: "Xabar 500 belgidan oshmasin" }, { status: 400 });
    }

    const submission = {
      fullName: sanitize(fullName),
      phone: sanitize(phone),
      stadiumName: sanitize(stadiumName),
      location: sanitize(location),
      message: message?.trim() ? sanitize(message) : null,
      submittedAt: new Date().toISOString(),
      ip,
    };

    // Always log server-side as fallback record
    console.log("[Maydonify] New form submission:", JSON.stringify(submission));

    // Send Telegram notification (non-blocking failure)
    try {
      await sendTelegramNotification(submission);
    } catch (err) {
      console.error("[Maydonify] Telegram notification failed:", err);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Server xatosi. Qayta urinib ko'ring." }, { status: 500 });
  }
}
