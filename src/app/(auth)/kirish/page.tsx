import type { Metadata } from "next";
import { requireBooking } from "@/lib/bookingGuard";
import { LoginScreen } from "@/components/auth/LoginScreen";

export const metadata: Metadata = {
  title: "Kirish",
  description: "Telefon raqamingiz orqali MiniPolya hisobingizga kiring.",
  alternates: { canonical: "/kirish" },
};

export default function LoginPage() {
  requireBooking();
  return <LoginScreen />;
}
