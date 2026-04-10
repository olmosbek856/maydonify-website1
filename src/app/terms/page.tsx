import type { Metadata } from "next";
import LegalPage from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Foydalanish Shartlari — Maydonify",
  description: "Maydonify platformasidan foydalanish shartlari va qoidalar.",
};

export default function TermsPage() {
  return <LegalPage type="terms" />;
}
