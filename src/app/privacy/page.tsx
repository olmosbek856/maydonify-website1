import type { Metadata } from "next";
import LegalPage from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Maxfiylik Siyosati — Maydonify",
  description: "Maydonify platformasining maxfiylik siyosati va shaxsiy ma'lumotlar himoyasi.",
};

export default function PrivacyPage() {
  return <LegalPage type="privacy" />;
}
