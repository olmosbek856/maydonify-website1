import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Deterministic formatter — no Intl.NumberFormat to avoid SSR/client hydration mismatch */
function formatNumber(amount: number): string {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
}

export function formatPrice(amount: number): string {
  return formatNumber(amount) + " UZS/soat";
}

export function formatPriceShort(amount: number): string {
  return formatNumber(amount) + " UZS";
}
