import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 250000 → "250 000" (Intl ishlatilmaydi — SSR/klient farqi bo'lmasligi uchun). */
export function formatNumber(amount: number): string {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/** 250000 → "250 000 so'm" */
export function formatSom(amount: number): string {
  return `${formatNumber(amount)} so'm`;
}

/** "20:00" → "20:00–21:00" */
export function hourRange(start: string): string {
  const h = Number(start.slice(0, 2));
  const end = String((h + 1) % 24).padStart(2, "0");
  return `${start}–${end === "00" ? "24" : end}:00`;
}

/** "901234567" → "90 123 45 67" (+998 dan keyingi qism) */
export function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 9);
  return [d.slice(0, 2), d.slice(2, 5), d.slice(5, 7), d.slice(7, 9)].filter(Boolean).join(" ");
}
