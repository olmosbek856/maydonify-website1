import type { Metadata } from "next";
import LegalPage from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Foydalanish Shartlari — Maydon",
  description: "Maydon platformasidan foydalanish shartlari va qoidalar.",
};

export default function TermsPage() {
  return <LegalPage type="terms" />;
}
