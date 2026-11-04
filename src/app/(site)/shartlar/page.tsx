import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Foydalanish shartlari",
  description: "MiniPolya platformasidan foydalanish shartlari, to'lov va bekor qilish qoidalari.",
  alternates: { canonical: "/shartlar" },
};

export default function TermsPage() {
  return (
    <LegalPage
      content={{
        title: "Foydalanish shartlari",
        updated: "4-noyabr, 2026",
        intro: "MiniPolya platformasidan foydalanish quyidagi shartlarni qabul qilganingizni bildiradi.",
        sections: [
          {
            title: "Xizmat haqida",
            content:
              "MiniPolya — mini-futbol maydonlarini onlayn bron qilish platformasi. Biz maydon egalari va o'yinchilar o'rtasida vositachi bo'lib xizmat qilamiz.",
          },
          {
            title: "To'lov",
            content:
              "Bron faqat onlayn — Humo yoki UZCard kartasi orqali to'lanadi. Maydonda naqd pul bilan to'lash imkoniyati yo'q.",
          },
          {
            title: "Bron va bekor qilish",
            content:
              "O'yin boshlanishidan 24 soatdan ko'proq vaqt oldin bekor qilingan bron uchun to'lov to'liq qaytariladi. 24 soatdan kam vaqt qolganda bekor qilinsa, to'lov qaytarilmaydi.",
          },
          {
            title: "Foydalanuvchi majburiyatlari",
            content:
              "Foydalanuvchilar to'g'ri ma'lumot kiritishi, bron qilingan vaqtda kelishi va maydonni tartibli holda qoldirishi shart. Qoidabuzarlik hisobni bloklashga olib kelishi mumkin.",
          },
          {
            title: "Maydon egalari majburiyatlari",
            content:
              "Maydon egalari platformada ko'rsatilgan vaqt va narxlarni ta'minlashi hamda maydon sifatini ushlab turishi shart.",
          },
          {
            title: "O'zgarishlar",
            content: "Ushbu shartlar yangilanishi mumkin. Yangi shartlar saytda e'lon qilingan kundan kuchga kiradi.",
          },
        ],
      }}
    />
  );
}
