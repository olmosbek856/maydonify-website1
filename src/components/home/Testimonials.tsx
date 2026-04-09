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
    value: "3,412",
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

const TESTIMONIALS = [
  {
    initials: "JT",
    name: "Jasur Toshmatov",
    location: "Chilonzor, Toshkent",
    skinBg: "#B5723E",
    shirtColor: "#1D3557",
    faceBg: "#CD8A4E",
    stars: 5,
    quote:
      "Avval har doim qo'ng'iroq qilardim — hech kim ko'tarmasa, vaqt ketardi. Endi 2 daqiqada bron tayyor. Hech nima so'ramaysiz.",
  },
  {
    initials: "DM",
    name: "Dilnoza Mirzayeva",
    location: "Yunusobod, Toshkent",
    skinBg: "#C68642",
    shirtColor: "#5C3D6E",
    faceBg: "#D4945A",
    stars: 5,
    quote:
      "Narxlar oldindan ko'rinadi, yashirin to'lov yo'q. Haftada ikki marta ishlataman. Do'stlarimga ham aytdim.",
    featured: true,
  },
  {
    initials: "BK",
    name: "Bobur Karimov",
    location: "Mirzo Ulug'bek, Toshkent",
    skinBg: "#8D5C3B",
    shirtColor: "#1B4F72",
    faceBg: "#B8752E",
    stars: 5,
    quote:
      "Jadval aniq ko'rinadi. Bir marta bron qildimmi — shu vaqt meniki. Boshqa o'ylab o'tirmayman.",
  },
  {
    initials: "SA",
    name: "Sardor Aliyev",
    location: "Shayxontohur, Toshkent",
    skinBg: "#A0693A",
    shirtColor: "#1A5276",
    faceBg: "#C87941",
    stars: 4,
    quote:
      "App juda tez. 3 ta bosish — bron tayyor. Tasdiqlash SMS-i ham bir daqiqada keldi.",
  },
  {
    initials: "NR",
    name: "Nilufar Rahimova",
    location: "Bektemir, Toshkent",
    skinBg: "#C49A6C",
    shirtColor: "#7B241C",
    faceBg: "#D4A574",
    stars: 5,
    quote:
      "Qizim bilan birgalikda ishlatamiz. Oson, hech qanday muammo bo'lmagan. Haqiqatan qulay.",
  },
  {
    initials: "KY",
    name: "Kamol Yusupov",
    location: "Sergeli, Toshkent",
    skinBg: "#7A4928",
    shirtColor: "#1C3A5E",
    faceBg: "#A0622E",
    stars: 5,
    quote:
      "60 yoshli otam ham bir o'zi ishlatib ko'rdi — menga hech nima so'ramadi. Bu yaxshi belgi.",
  },
];

function AvatarSVG({ skinBg, shirtColor, faceBg }: { skinBg: string; shirtColor: string; faceBg: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill={skinBg}/>
      <path d="M5 28C5 23.5 8.5 21.5 14 21.5C19.5 21.5 23 23.5 23 28Z" fill={shirtColor}/>
      <ellipse cx="14" cy="15" rx="6" ry="7" fill={faceBg}/>
      <path d="M8 15C8 9.48 10.69 6 14 6C17.31 6 20 9.48 20 15C19 12.5 16.5 10.5 14 10.5C11.5 10.5 9 12.5 8 15Z" fill="#1A0D06"/>
      <ellipse cx="11.5" cy="14" rx="1.1" ry="1.1" fill="#1A0D06"/>
      <ellipse cx="16.5" cy="14" rx="1.1" ry="1.1" fill="#1A0D06"/>
      <path d="M11.5 18 Q14 20 16.5 18" stroke="#8B4C1E" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
    </svg>
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

export default function Testimonials() {
  const headerRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

  return (
    <SectionWrapper id="testimonials" theme="light">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-4">
        {/* Made in Tashkent badge */}
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
              <p className="text-[18px] font-bold text-dark-900 tracking-[-0.02em] leading-none">
                {s.value}
              </p>
              <p className="text-[11px] font-medium text-slate-400 mt-0.5">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial grid */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.name}
            className={`reveal delay-${[100, 200, 300, 100, 200, 300][i]} relative p-5 rounded-2xl border transition-shadow duration-200 ${
              t.featured
                ? "bg-dark-900 border-dark-700 shadow-xl"
                : "bg-white border-gray-100 hover:shadow-md"
            }`}
          >
            {/* Featured label */}
            {t.featured && (
              <div className="absolute -top-2.5 left-4">
                <span className="text-[10px] font-bold text-dark-900 bg-brand-green px-2.5 py-0.5 rounded-full">
                  Ko&apos;p o&apos;qilgan
                </span>
              </div>
            )}

            {/* Quote mark */}
            <div
              className={`text-[36px] font-black leading-none mb-2 select-none ${
                t.featured ? "text-brand-green/30" : "text-gray-100"
              }`}
              aria-hidden="true"
            >
              &#8220;
            </div>

            <p
              className={`text-[14px] font-medium leading-[1.6] mb-5 ${
                t.featured ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {t.quote}
            </p>

            {/* Footer */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <AvatarSVG skinBg={t.skinBg} shirtColor={t.shirtColor} faceBg={t.faceBg} />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`text-[13px] font-semibold leading-tight truncate ${
                    t.featured ? "text-white" : "text-dark-900"
                  }`}
                >
                  {t.name}
                </p>
                <p
                  className={`text-[11px] font-medium mt-0.5 truncate ${
                    t.featured ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {t.location}
                </p>
              </div>
              <Stars count={t.stars} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom trust line */}
      <p className="text-center text-[13px] font-medium text-slate-400 mt-8 reveal delay-100">
        Barcha sharhlar haqiqiy foydalanuvchilardan · App Store va Google Play da tasdiqlangan
      </p>
    </SectionWrapper>
  );
}
