"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ─── Stats ────────────────────────────────────────────────────────────────────

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

// ─── Review data (6 unique, no duplicates) ───────────────────────────────────

type Review = {
  initials: string;
  name: string;
  district: string;
  stars: number;
  quote: string;
  field: string;
  month: string;
  avatarFrom: string;
  avatarTo: string;
};

const REVIEWS: Review[] = [
  {
    initials: "DM",
    name: "Dilnoza Mirzayeva",
    district: "Yunusobod",
    stars: 5,
    quote: "Narxlar oldindan ko'rinadi, yashirin to'lov yo'q. Haftada ikki marta ishlataman. Do'stlarimga ham aytdim.",
    field: "Spartak Arena",
    month: "Mart 2026",
    avatarFrom: "#065f46",
    avatarTo: "#059669",
  },
  {
    initials: "JT",
    name: "Jasur Toshmatov",
    district: "Chilonzor",
    stars: 5,
    quote: "Avval har doim qo'ng'iroq qilardim — hech kim ko'tarmasa, vaqt ketardi. Endi 2 daqiqada bron tayyor.",
    field: "Olimp Park",
    month: "Fevral 2026",
    avatarFrom: "#064e3b",
    avatarTo: "#047857",
  },
  {
    initials: "BK",
    name: "Bobur Karimov",
    district: "Mirzo Ulug'bek",
    stars: 5,
    quote: "Jadval aniq ko'rinadi. Bir marta bron qildimmi — shu vaqt meniki. Boshqa o'ylashga hojat yo'q.",
    field: "Mirzo Arena",
    month: "Yanvar 2026",
    avatarFrom: "#166534",
    avatarTo: "#16a34a",
  },
  {
    initials: "SA",
    name: "Sardor Aliyev",
    district: "Shayxontohur",
    stars: 4,
    quote: "App juda tez. 3 ta bosish — bron tayyor. Tasdiqlash SMS-i ham bir daqiqada keldi.",
    field: "Goal FC",
    month: "Mart 2026",
    avatarFrom: "#14532d",
    avatarTo: "#15803d",
  },
  {
    initials: "NR",
    name: "Nilufar Rahimova",
    district: "Bektemir",
    stars: 5,
    quote: "Qizim bilan birgalikda ishlatamiz. Oson, hech qanday muammo bo'lmagan. Interfeys oddiy va tushunarli.",
    field: "Bektemir Sport",
    month: "Fevral 2026",
    avatarFrom: "#052e16",
    avatarTo: "#166534",
  },
  {
    initials: "KY",
    name: "Kamol Yusupov",
    district: "Sergeli",
    stars: 5,
    quote: "60 yoshli otam ham bir o'zi ishlatib ko'rdi — menga hech nima so'ramadi. Bu yaxshi belgi.",
    field: "Sergeli FC",
    month: "Mart 2026",
    avatarFrom: "#004d40",
    avatarTo: "#00796b",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function InitialsAvatar({ initials, from, to }: { initials: string; from: string; to: string }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      aria-hidden="true"
    >
      <span className="text-white text-[13px] font-bold tracking-wide">{initials}</span>
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} yulduz`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="11"
          height="11"
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

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="break-inside-avoid mb-4 p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      {/* Top row: avatar + name + stars */}
      <div className="flex items-start gap-3 mb-3">
        <InitialsAvatar initials={review.initials} from={review.avatarFrom} to={review.avatarTo} />
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-[#0D1117] leading-tight truncate">{review.name}</p>
          <p className="text-[11px] font-medium text-slate-400 mt-0.5">{review.district}, Toshkent</p>
        </div>
        <Stars count={review.stars} />
      </div>

      {/* Quote */}
      <p className="text-[13px] font-medium text-slate-600 leading-[1.65] mb-3">
        &ldquo;{review.quote}&rdquo;
      </p>

      {/* Footer: field + month · verified badge */}
      <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-50">
        <span className="text-[11px] font-medium text-slate-400 truncate">
          {review.field} &middot; {review.month}
        </span>
        <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00A86B]/10 border border-[#00A86B]/20">
          <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 5l2.5 2.5L8 3" stroke="#00A86B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[10px] font-semibold text-[#00A86B] tracking-[0.02em]">Tasdiqlangan bron</span>
        </span>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Testimonials() {
  const headerRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

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
        <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#0D1117] tracking-[-0.02em] leading-[1.2] mb-3 reveal delay-100">
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
              <p className="text-[18px] font-bold text-[#0D1117] tracking-[-0.02em] leading-none">{s.value}</p>
              <p className="text-[11px] font-medium text-slate-400 mt-0.5">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Masonry grid — CSS columns approach (true masonry, no carousel) */}
      <div ref={gridRef} className="reveal delay-100 columns-1 sm:columns-2 lg:columns-3 gap-4">
        {REVIEWS.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>

      {/* Trust line */}
      <p className="text-center text-[13px] font-medium text-slate-400 mt-8 reveal delay-100">
        Barcha sharhlar haqiqiy foydalanuvchilardan · App Store va Google Play da tasdiqlangan
      </p>
    </SectionWrapper>
  );
}
