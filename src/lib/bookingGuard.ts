import { redirect } from "next/navigation";
import { siteConfig } from "./siteConfig";

/** Bron o'chiq bo'lsa, bron/hisob sahifalaridan maydonlar ro'yxatiga yo'naltiradi. */
export function requireBooking() {
  if (!siteConfig.bookingEnabled) redirect("/maydonlar");
}
