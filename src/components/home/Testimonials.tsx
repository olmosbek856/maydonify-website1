"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STATS = [
  {
    value: "4.8 / 5",
    label: "App Store va Google Play da",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 1l1.85 3.75L14 5.45l-3 2.92.71 4.13L8 10.4l-3.71 1.95.71-4.13L2 5.45l4.15-.7L8 1z" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    value: "300+",
    label: "faol o'yinchi",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="8" cy="7" r="3" stroke="#00D46A" strokeWidth="1.8" />
        <path d="M3 17c0-3 2.24-5 5-5s5 2 5 5" stroke="#00D46A" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 7c1.66 0 3 1.34 3 3s-1.34 3-3 3" stroke="#00D46A" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 17c0-1.5-.67-2.83-1.73-3.72" stroke="#00D46A" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "94",
    label: "tasdiqlangan maydon",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2C6.69 2 4 4.69 4 8c0 4.75 6 10 6 10s6-5.25 6-10c0-3.31-2.69-6-6-6zm0 8.5A2.5 2.5 0 1110 5.5a2.5 2.5 0 010 5z" fill="#00D46A" />
      </svg>
    ),
  },
];

const AVATAR_GRADIENTS: Record<string, [string, string]> = {
  JT: ["#1D3557", "#2E4A7A"],
  DM: ["#5C3D6E", "#8B5CF6"],
  BK: ["#1B4F72", "#2471A3"],
  SA: ["#1A5276", "#21618C"],
  NR: ["#7B241C", "#C0392B"],
  KY: ["#1C3A5E", "#2874A6"],
};

function InitialsAvatar({ initials, size = "md" }: { initials: string; size?: "sm" | "md" | "lg" }) {
  const [from, to] = AVATAR_GRADIENTS[initials] ?? ["#1a2130", "#243044"];
  const sizeClass = size === "lg" ? "w-12 h-12" : size === "sm" ? "w-8 h-8" : "w-9 h-9";
  const textClass = size === "lg" ? "text-[14px]" : size === "sm" ? "text-[10px]" : "text-[12px]";
  return (
    <div
      className={`${sizeClass} rounded-full flex items-center justify-center flex-shrink-0`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      aria-hidden="true"
    >
      <span className={`text-white ${textClass} font-bold tracking-wide`}>{initials}</span>
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} yulduz`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill={i < count ? "#F59E0B" : "none"}
          stroke={i < count ? "none" : "#D1D5DB"}
          aria-hidden="true"
        >
          <path d="M6 1l1.39 2.81L10.5 4.27l-2.25 2.19.53 3.09L6 8.02l-2.78 1.46.53-3.09L1.5 4.27l3.11-.46L6 1z" strokeWidth="1" />
        </svg>
      ))}
    </div>
  );
}

const FEATURED = {
  initials: "DM",
  name: "Dilnoza Mirzayeva",
  location: "Yunusobod, Toshkent",
  stars: 5,
  quote: "Narxlar oldindan ko'rinadi, yashirin to'lov yo'q. Haftada ikki marta ishlataman. Do'stlarimga ham aytdim.",
};

const CARDS = [
  {
    initials: "JT",
    name: "Jasur Toshmatov",
    location: "Chilonzor",
    stars: 5,
    quote: "Avval har doim qo'ng'iroq qilardim — hech kim ko'tarmasa, vaqt ketardi. Endi 2 daqiqada bron tayyor.",
  },
  {
    initials: "BK",
    name: "Bobur Karimov",
    location: "Mirzo Ulug'bek",
    stars: 5,
    quote: "Jadval aniq ko'rinadi. Bir marta bron qildimmi — shu vaqt meniki.",
  },
  {
    initials: "SA",
    name: "Sardor Aliyev",
    location: "Shayxontohur",
    stars: 4,
    quote: "App juda tez. 3 ta bosish — bron tayyor. Tasdiqlash SMS-i ham bir daqiqada keldi.",
  },
  {
    initials: "NR",
    name: "Nilufar Rahimova",
    location: "Bektemir",
    stars: 5,
    quote: "Qizim bilan birgalikda ishlatamiz. Oson, hech qanday muammo bo'lmagan.",
  },
  {
    initials: "KY",
    name: "Kamol Yusupov",
    location: "Sergeli",
    stars: 5,
    quote: "60 yoshli otam ham bir o'zi ishlatib ko'rdi — menga hech nima so'ramadi. Bu yaxshi belgi.",
  },
];

export default function Testimonials() {
  const headerRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const featuredRef = useScrollReveal({ threshold: 0.05 });
  const cardsRef = useScrollReveal({ threshold: 0.05 });

  return (
    <SectionWrapper id="testimonials" theme="light">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-5 reveal">
          <span className="text-[13px]" aria-hidden="true">🇺🇿</span>
          <span className="text-[12px] font-semibold text-gray-600 tracking-[0.04em] uppercase">
            Made in Tashkent
          </span>
        </div>
        <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-dark-900 tracking-[-0.02em] leading-[1.2] mb-3 reveal delay-100">
          O&apos;yinchilar nima deydi
        </h2>
        <p className="text-[16px] font-medium text-slate-500 max-w-md mx-auto reveal delay-200">
          Toshkentdagi haqiqiy foydalanuvchilar. Haqiqiy fikrlar.
        </p>
      </div>

      {/* Stats bar */}
      <div ref={statsRef} className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12 py-5 border-y border-gray-100 reveal delay-100">
        {STATS.map((s) => (
          <div key={s.label} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
              {s.icon}
            </div>
            <div>
              <p className="text-[18px] font-bold text-dark-900 tracking-[-0.02em] leading-none">{s.value}</p>
              <p className="text-[11px] font-medium text-slate-400 mt-0.5">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Featured hero quote */}
      <div ref={featuredRef} className="reveal mb-6">
        <div className="relative p-7 sm:p-8 rounded-3xl bg-dark-900 border border-dark-700 overflow-hidden">
          {/* Green glow accent */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

          {/* Featured label */}
          <div className="inline-flex items-center gap-1.5 mb-5 px-2.5 py-1 rounded-full bg-brand-green/15 border border-brand-green/25">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
            <span className="text-[10px] font-bold text-brand-green tracking-[0.04em] uppercase">Ko&apos;p o&apos;qilgan</span>
          </div>

          <div className="sm:flex sm:items-center sm:gap-8">
            {/* Big quote mark */}
            <div
              className="text-[72px] font-black leading-none select-none text-brand-green/25 flex-shrink-0 hidden sm:block"
              aria-hidden="true"
            >
              &#8220;
            </div>

            <div className="flex-1">
              <p className="text-[18px] sm:text-[20px] font-semibold text-white leading-[1.55] mb-6">
                &ldquo;{FEATURED.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <InitialsAvatar initials={FEATURED.initials} size="lg" />
                <div>
                  <p className="text-white font-semibold text-[14px]">{FEATURED.name}</p>
                  <p className="text-slate-500 text-[12px] font-medium mt-0.5">{FEATURED.location}</p>
                </div>
                <div className="ml-auto">
                  <Stars count={FEATURED.stars} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remaining cards — horizontal scroll on mobile, grid on desktop */}
      <div ref={cardsRef} className="reveal delay-100">
        {/* Mobile: horizontal scroll */}
        <div className="flex gap-3 overflow-x-auto pb-2 sm:hidden" style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}>
          {CARDS.map((c) => (
            <div
              key={c.name}
              className="flex-shrink-0 w-[270px] p-5 rounded-2xl border border-gray-100 bg-white"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="text-[28px] font-black leading-none mb-2 text-gray-100 select-none" aria-hidden="true">
                &#8220;
              </div>
              <p className="text-[13px] font-medium text-slate-600 leading-[1.6] mb-4">{c.quote}</p>
              <div className="flex items-center gap-2.5">
                <InitialsAvatar initials={c.initials} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-semibold text-dark-900 truncate">{c.name}</p>
                  <p className="text-[10px] font-medium text-slate-400 mt-0.5">{c.location}</p>
                </div>
                <Stars count={c.stars} />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4">
          {CARDS.map((c, i) => (
            <div
              key={c.name}
              className={`reveal delay-${[100, 200, 300, 100, 200][i]} p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-200`}
            >
              <div className="text-[28px] font-black leading-none mb-2 text-gray-100 select-none" aria-hidden="true">
                &#8220;
              </div>
              <p className="text-[14px] font-medium text-slate-600 leading-[1.6] mb-4">{c.quote}</p>
              <div className="flex items-center gap-2.5">
                <InitialsAvatar initials={c.initials} />
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-dark-900 truncate">{c.name}</p>
                  <p className="text-[11px] font-medium text-slate-400 mt-0.5">{c.location}</p>
                </div>
                <Stars count={c.stars} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust line */}
      <p className="text-center text-[13px] font-medium text-slate-400 mt-8 reveal delay-100">
        Barcha sharhlar haqiqiy foydalanuvchilardan · App Store va Google Play da tasdiqlangan
      </p>
    </SectionWrapper>
  );
}
