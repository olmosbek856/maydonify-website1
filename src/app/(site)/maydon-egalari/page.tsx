import type { Metadata } from "next";
import Image from "next/image";
import { Banknote, Building, CircleCheck, LayoutGrid, Users, Zap } from "lucide-react";
import { IMG, OWNER_FAQ } from "@/lib/data";
import { siteConfig } from "@/lib/siteConfig";
import { SectionHead } from "@/components/ui/Basics";
import { ButtonLink } from "@/components/ui/Button";
import { FaqList } from "@/components/FaqList";
import { OwnerForm } from "@/components/owners/OwnerForm";

export const metadata: Metadata = {
  title: "Maydon egalariga",
  description: "Maydoningizni MiniPolya'ga qo'shing: onlayn bron, kafolatlangan to'lov va bo'sh vaqtlarni to'ldirish.",
  alternates: { canonical: "/maydon-egalari" },
};

const HERO_STATS = [
  ["68", "yangi bron"],
  ["4.2 mln so'm", "qo'shimcha daromad"],
  ["92%", "bo'sh soatlar to'ldirildi"],
];

const BENEFITS = [
  { icon: Users, title: "Ko'proq mijozlar", text: "Platformada kuniga 2 000+ o'yinchi maydon qidiradi. Sizning maydoningiz ularga ko'rinadi va bo'sh soatlar to'ldiriladi." },
  { icon: Banknote, title: "Onlayn to'lov to'g'ridan-to'g'ri sizga", text: "Barcha to'lovlar Humo va UZCard orqali platformada amalga oshiriladi. Pul har hafta hisobingizga o'tkaziladi." },
  { icon: LayoutGrid, title: "Bronlarni boshqarish paneli", text: "Jadval, narxlar, bekor qilishlar va sharhlar — hammasi bitta kabinetda. Qo'ng'iroqlar va daftarlar yo'q." },
  { icon: Zap, title: "Bo'sh vaqtlar avtomatik to'ladi", text: "Narxni vaqtga qarab sozlaysiz: kunduzgi soatlar arzonroq, kechqurun qimmatroq. Tizim o'zi hisoblaydi." },
];

const STEPS = [
  ["Ariza qoldiring", "Formani to'ldiring: maydon nomi, manzil, narx va ish vaqti. 5 daqiqa vaqt oladi."],
  ["Tekshiruv", "Bizning menejer 1 ish kunida bog'lanadi, maydonni ko'radi va shartlarni tasdiqlaydi."],
  ["Ishga tushiring", "Maydon platformada paydo bo'ladi, bronlar va to'lovlar avtomatik qabul qilinadi."],
];

export default function OwnersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden lg:h-[600px]">
        <Image src={IMG.heroDusk} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/50 to-dark/20" aria-hidden />
        <div className="container-page relative flex flex-col justify-between gap-10 py-14 lg:flex-row lg:items-center lg:py-0">
          <div className="max-w-[660px]">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-white">
              <Building className="size-4" aria-hidden /> Maydon egalari uchun
            </p>
            <h1 className="text-[34px] font-bold leading-[1.12] tracking-[-1.4px] text-white lg:text-5xl">Maydoningizni to&apos;ldiring — MiniPolya bilan</h1>
            <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-white/85 lg:text-[17px]">
              Bo&apos;sh soatlaringizni mijozga aylantiring. Bronlar, to&apos;lovlar va jadval — barchasi bitta panelda, siz hech kimga qo&apos;ng&apos;iroq
              qilmaysiz.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="#ariza" variant="white" size="lg">
                Ariza qoldirish
              </ButtonLink>
              <ButtonLink href="#qanday" size="lg" className="bg-white/10 text-white backdrop-blur hover:bg-white/20">
                Qanday ishlaydi
              </ButtonLink>
            </div>
          </div>
          <div className="w-full max-w-[320px] rounded-card bg-surface p-6 shadow-hover">
            <div className="text-[13px] font-medium text-muted">Bir oyda o&apos;rtacha</div>
            <dl className="mt-4 space-y-4">
              {HERO_STATS.map(([v, l]) => (
                <div key={l} className="flex flex-col-reverse">
                  <dt className="text-[13px] text-muted">{l}</dt>
                  <dd className="text-[22px] font-bold tracking-[-0.4px]">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[11px] leading-relaxed text-muted">Ma&apos;lumotlar Toshkentdagi hamkor maydonlar asosida</p>
          </div>
        </div>
      </section>

      {/* AFZALLIKLAR */}
      <section className="container-page py-12 lg:py-24">
        <SectionHead title="Nega maydon egalari MiniPolya'ni tanlaydi" sub="Platforma sizning jadvalingiz, to'lovlaringiz va mijozlaringiz uchun ishlaydi" />
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-10 lg:gap-5">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-card border border-line bg-surface p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-accent-soft">
                <Icon className="size-[22px] text-accent" aria-hidden />
              </span>
              <h3 className="mt-3.5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-[1.65] text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QANDAY QO'SHILADI */}
      <section id="qanday" className="scroll-mt-20 bg-subtle py-12 lg:py-24">
        <div className="container-page">
          <SectionHead title="Qanday qo'shiladi" sub="Uch qadam — va maydoningiz platformada ko'rinadi" />
          <ol className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-10 lg:gap-5">
            {STEPS.map(([title, text], i) => (
              <li key={title} className="rounded-card border border-line bg-surface p-6 lg:p-7">
                <span className="grid size-10 place-items-center rounded-full bg-accent font-bold text-white">{i + 1}</span>
                <h3 className="mt-3.5 text-[19px] font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-[1.65] text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FORMA */}
      <section id="ariza" className="container-page scroll-mt-20 py-12 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[480px_1fr] lg:gap-12">
          <div>
            <h2 className="text-[26px] font-bold tracking-[-0.8px] lg:text-[34px]">Ariza qoldirish</h2>
            <p className="mt-3 text-sm leading-[1.7] text-muted lg:text-base">
              Formani to&apos;ldiring — menejerimiz 1 ish kuni ichida bog&apos;lanadi va maydonni platformaga qo&apos;shishga yordam beradi.
            </p>
            <ul className="mt-6 space-y-3">
              {["Ro'yxatdan o'tish bepul", "Komissiya faqat muvaffaqiyatli brondan", "O'zingiz narx va ish vaqtini belgilaysiz"].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-[15px]">
                  <CircleCheck className="size-[18px] text-success" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-card border border-line bg-surface p-5">
              <div className="text-[15px] font-semibold">Savollaringiz bormi?</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Telegram orqali yozing:{" "}
                <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer" className="font-medium text-ink hover:text-accent">
                  {siteConfig.telegramHandle}
                </a>
              </p>
            </div>
          </div>
          <OwnerForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page pb-12 lg:pb-24">
        <SectionHead title="Maydon egalari uchun savollar" sub="Eng ko'p so'raladigan savollarga javoblar" />
        <div className="mt-6 lg:mt-10">
          <FaqList items={OWNER_FAQ} />
        </div>
      </section>
    </>
  );
}
