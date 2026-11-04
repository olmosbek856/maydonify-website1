import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Maxfiylik siyosati",
  description: "MiniPolya platformasining maxfiylik siyosati va shaxsiy ma'lumotlar himoyasi.",
  alternates: { canonical: "/maxfiylik" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      content={{
        title: "Maxfiylik siyosati",
        updated: "4-noyabr, 2026",
        intro: "MiniPolya foydalanuvchilarning shaxsiy ma'lumotlarini muhofaza qilishni ustuvor vazifa deb biladi.",
        sections: [
          {
            title: "Qanday ma'lumotlar to'planadi?",
            content:
              "Biz faqat xizmat ko'rsatish uchun zarur bo'lgan ma'lumotlarni to'playmiz: telefon raqam, ism, bron tarixi va texnik ma'lumotlar (qurilma turi, brauzer).",
          },
          {
            title: "Ma'lumotlar qanday ishlatiladi?",
            content:
              "Ma'lumotlaringiz faqat xizmatni taqdim etish, bronni tasdiqlash va xizmat sifatini oshirish uchun ishlatiladi. Uchinchi shaxslarga sotilmaydi.",
          },
          {
            title: "To'lov ma'lumotlari",
            content:
              "To'lovlar bank ekvayringi orqali amalga oshiriladi. MiniPolya karta raqamingizni saqlamaydi va uchinchi shaxslarga bermaydi.",
          },
          {
            title: "Cookie fayllar",
            content:
              "Sayt ishlashi va statistika uchun cookie fayllardan foydalanamiz. Brauzeringiz sozlamalarida cookie'larni o'chirib qo'yishingiz mumkin.",
          },
          {
            title: "Aloqa",
            content: `Maxfiylik siyosati bo'yicha savollar uchun ${siteConfig.privacyEmail} manziliga murojaat qiling.`,
          },
        ],
      }}
    />
  );
}
