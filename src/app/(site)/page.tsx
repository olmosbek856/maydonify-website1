import Image from "next/image";
import {
  Banknote,
  Calendar,
  CircleCheck,
  CreditCard,
  MapPin,
  Search,
  ShieldCheck,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { FAQ, GAMES, IMG, PITCHES } from "@/lib/data";
import { siteConfig } from "@/lib/siteConfig";
import { SearchBar } from "@/components/SearchBar";
import { PitchCard } from "@/components/cards/PitchCard";
import { GameCard } from "@/components/cards/GameCard";
import { SectionHead } from "@/components/ui/Basics";
import { ButtonLink } from "@/components/ui/Button";
import { FaqList } from "@/components/FaqList";

const STATS = [
  ["120+", "maydon"],
  ["15 000+", "bron"],
  ["8 000+", "o'yinchi"],
  ["4.8", "o'rtacha reyting"],
];

const STEPS = [
  { icon: Search, title: "Maydon tanlang", text: "Tuman, sana va vaqtni tanlang — bo'sh maydonlarni bir zumda ko'rasiz." },
  { icon: Calendar, title: "Vaqtni belgilang", text: "O'zingizga mos 1 soatlik vaqtni tanlang yoki guruh o'yiniga qo'shiling." },
  { icon: CreditCard, title: "Onlayn to'lang va o'ynang", text: "Humo yoki UZCard bilan to'lang. Bron tasdiqlangach, faqat o'ynash qoladi." },
];

const REASONS = [
  { icon: Zap, title: "Real vaqtda bo'sh vaqtlar", text: "Maydonlardagi bo'sh soatlar bir zumda yangilanadi — eskirgan jadval yo'q." },
  { icon: ShieldCheck, title: "Xavfsiz onlayn to'lov", text: "Humo va UZCard orqali to'lov. Karta ma'lumotlaringiz himoyalangan." },
  { icon: Banknote, title: "24 soat oldin bepul bekor qilish", text: "Reja o'zgarsa, 24 soat oldin bekor qiling — pul to'liq qaytariladi." },
  { icon: Users, title: "Jamoa topish oson", text: "Ochiq o'yinlarga qo'shiling yoki jamoangizga raqib toping." },
];

const TESTIMONIALS = [
  { name: "Aziz R.", district: "Chilonzor tumani", text: "Har shanba o'ynaymiz. Maydonni bir daqiqada bron qildim, to'lov ham kartadan o'tdi. Hech kimga qo'ng'iroq qilish shart emas." },
  { name: "Javohir T.", district: "Yunusobod tumani", text: "Ochiq o'yinga qo'shildim, 5 daqiqada jamoa topildi. O'yinlar tartibli va halol o'tadi." },
  { name: "Sardor M.", district: "Mirzo Ulug'bek tumani", text: "Bir marta reja o'zgardi — 2 kun oldin bekor qildim, pul to'liq qaytdi. Ishonchli platforma." },
];

export default function HomePage() {
  const popular = PITCHES.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[460px] items-center overflow-hidden lg:min-h-[640px]">
        <Image
          src={IMG.heroSunset}
          alt="Kechqurun yoritilgan mini-futbol maydoni"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/75 to-dark/30" aria-hidden />
        <div className="container-page relative pb-16 pt-12 lg:py-20">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-white backdrop-blur">
            <MapPin className="size-4" aria-hidden /> Toshkent · 120+ maydon
          </p>
          <h1 className="max-w-[760px] text-[34px] font-bold leading-[1.1] tracking-[-1px] text-white lg:text-[56px] lg:leading-[1.08] lg:tracking-[-1.5px]">
            Maydonni qo&apos;ng&apos;iroqsiz, 30 soniyada band qiling
          </h1>
          <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-white/85 lg:mt-6 lg:text-lg">
            Toshkentdagi eng sara mini-futbol maydonlari bir joyda. Bo&apos;sh vaqtni tanlang, onlayn to&apos;lang va o&apos;ynang.
          </p>
          <div className="mt-7 hidden lg:block">
            <SearchBar />
          </div>
          <ul className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2 text-white/90">
            {["Onlayn to'lov", "24 soat oldin bepul bekor qilish"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2 text-[13px] font-medium lg:text-sm">
                <CircleCheck className="size-[18px]" aria-hidden /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mobil qidiruv */}
      <section className="relative z-10 -mt-8 px-5 lg:hidden" aria-label="Maydon qidirish">
        <SearchBar />
      </section>

      {/* STATS */}
      <section className="container-page pt-6 lg:pt-12" aria-label="Raqamlarda MiniPolya">
        <dl className="grid grid-cols-2 gap-5 rounded-card border border-line bg-surface px-5 py-5 shadow-card lg:flex lg:items-center lg:justify-between lg:px-10 lg:py-7">
          {STATS.map(([v, l]) => (
            <div key={l} className="flex flex-col-reverse">
              <dt className="text-xs text-muted lg:text-sm">{l}</dt>
              <dd className="text-lg font-bold tracking-[-0.8px] lg:text-[32px]">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* MASHHUR MAYDONLAR */}
      <section className="container-page pt-14 lg:pt-24">
        <SectionHead
          title="Mashhur maydonlar"
          sub="Toshkentda eng ko'p bron qilinadigan maydonlar"
          link={{ label: "Barchasini ko'rish", href: "/maydonlar" }}
        />
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {popular.map((p) => (
            <PitchCard key={p.slug} pitch={p} />
          ))}
        </div>
      </section>

      {/* GURUH O'YINLARI */}
      <section className="container-page pt-14 lg:pt-24">
        <SectionHead
          title="Yaqin guruh o'yinlari"
          sub="Jamoangizni yig'ing yoki mavjud o'yinga qo'shiling"
          link={{ label: "Barcha o'yinlar", href: "/oyinlar" }}
        />
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {GAMES.slice(0, 3).map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>

      {/* QANDAY ISHLAYDI */}
      <section id="qanday-ishlaydi" className="mt-14 scroll-mt-20 bg-surface py-14 lg:mt-24 lg:py-24">
        <div className="container-page">
          <SectionHead title="Qanday ishlaydi" sub="Uch qadamda o'yinga chiqasiz" />
          <ol className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-10 lg:gap-6">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="rounded-card border border-line bg-bg p-6 lg:p-7">
                <span className="grid size-12 place-items-center rounded-xl bg-accent-soft">
                  <Icon className="size-6 text-accent" aria-hidden />
                </span>
                <p className="mt-4 text-xs font-semibold text-accent">{i + 1}-qadam</p>
                <h3 className="mt-2 text-lg font-semibold lg:text-xl">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted lg:text-[15px]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* NEGA MINIPOLYA */}
      <section className="bg-subtle py-14 lg:py-24">
        <div className="container-page">
          <SectionHead title="Nega MiniPolya?" sub="Minglab o'yinchilar shu sabablarga ko'ra bizni tanlaydi" />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6">
            {REASONS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-card border border-line bg-surface p-5 lg:p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-accent-soft">
                  <Icon className="size-[22px] text-accent" aria-hidden />
                </span>
                <h3 className="mt-3.5 text-[17px] font-semibold leading-snug">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHARHLAR */}
      <section className="container-page py-14 lg:py-24">
        <SectionHead title="O'yinchilar fikri" sub="4.8 o'rtacha reyting · 2 400+ sharh" />
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-10 lg:gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col gap-4 rounded-card border border-line bg-surface p-5 lg:p-6">
              <div className="flex gap-0.5" aria-label="5 yulduz">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-4 fill-warning text-warning" aria-hidden />
                ))}
              </div>
              <blockquote className="text-sm leading-[1.7] lg:text-[15px]">{t.text}</blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-accent-soft font-bold text-accent">
                  {t.name[0]}
                </span>
                <span>
                  <span className="block text-[15px] font-semibold">{t.name}</span>
                  <span className="block text-[13px] text-muted">{t.district}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* MAYDON EGALARI BANNERI */}
      <section className="bg-accent py-14 lg:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-[-0.8px] text-white lg:text-[34px]">Maydoningiz bormi?</h2>
            <p className="mt-3 max-w-[620px] text-sm leading-relaxed text-white/90 lg:text-[17px]">
              MiniPolya&apos;ga qo&apos;shing va bo&apos;sh vaqtlaringizni to&apos;ldiring. Har bir bron — yangi mijoz.
            </p>
          </div>
          <ButtonLink href="/maydon-egalari" variant="white" size="lg">
            Ariza qoldirish
          </ButtonLink>
        </div>
      </section>

      {/* FAQ */}
      <section id="savollar" className="container-page scroll-mt-20 py-14 lg:py-24">
        <SectionHead
          title="Ko'p beriladigan savollar"
          sub={`Javobini topa olmasangiz, Telegram'da yozing: ${siteConfig.telegramHandle}`}
        />
        <div className="mt-6 lg:mt-10">
          <FaqList items={FAQ} />
        </div>
      </section>
    </>
  );
}
