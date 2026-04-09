import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import OwnersHero from "@/components/owners/OwnersHero";
import OwnersBenefits from "@/components/owners/OwnersBenefits";
import OwnersProcess from "@/components/owners/OwnersProcess";
import OwnersForm from "@/components/owners/OwnersForm";
import OwnersFAQ from "@/components/owners/OwnersFAQ";

export const metadata: Metadata = {
  title: "Maydonify Hamkorlar — Maydoningizdan +30% Daromad Oling",
  description:
    "Futbol maydoningizni Maydonify platformasiga qo'shing. Ko'proq bron, real vaqt jadval, bepul boshlash. 100+ maydon egasi allaqachon natija ko'ryapti.",
  openGraph: {
    title: "Maydonify Hamkorlar — Maydoningizdan +30% Daromad Oling",
    description: "Futbol maydoningizni Maydonify platformasiga qo'shing. Ko'proq bron, real vaqt jadval, bepul boshlash.",
    type: "website",
  },
};

export default function OwnersPage() {
  return (
    <>
      <Navbar variant="owners" />
      <main>
        <OwnersHero />
        <OwnersBenefits />
        <OwnersProcess />
        <OwnersForm />
        <OwnersFAQ />
      </main>
      <Footer />
    </>
  );
}
