"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import type { Stadium } from "@/lib/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BASE = "https://images.unsplash.com";
const Q = "w=800&h=520&fit=crop&crop=center&q=85&auto=format";

const STADIUMS: Stadium[] = [
  {
    id: "1",
    name: "Spartak Mini Arena",
    location: "Chilonzor tumani",
    district: "Chilonzor",
    price: 150000,
    rating: 4.9,
    reviews: 84,
    size: "40×20m",
    surface: "Sun'iy o't",
    available: true,
    badge: "top",
    photo: `${BASE}/photo-1574629810360-7efbbe195018?${Q}`,
  },
  {
    id: "2",
    name: "Lokomotiv Sport Park",
    location: "Yunusobod tumani",
    district: "Yunusobod",
    price: 180000,
    rating: 4.8,
    reviews: 61,
    size: "50×30m",
    surface: "Sun'iy o't",
    available: true,
    badge: "free_today",
    photo: `${BASE}/photo-1431324155629-1a6deb1dec8d?${Q}`,
  },
  {
    id: "3",
    name: "Bunyodkor Arena Zone",
    location: "Mirzo Ulug'bek tumani",
    district: "Mirzo Ulug'bek",
    price: 200000,
    rating: 4.7,
    reviews: 112,
    size: "60×40m",
    surface: "Tabiiy o't",
    available: false,
    badge: null,
    photo: `${BASE}/photo-1459865264687-595d652de67e?${Q}`,
  },
  {
    id: "4",
    name: "Dinamo FC Field",
    location: "Shayxontohur tumani",
    district: "Shayxontohur",
    price: 130000,
    rating: 4.6,
    reviews: 45,
    size: "40×20m",
    surface: "Sun'iy o't",
    available: true,
    badge: "free_today",
    photo: `${BASE}/photo-1553778263-73a83bab9b0c?${Q}`,
  },
  {
    id: "5",
    name: "Green Field Center",
    location: "Sergeli tumani",
    district: "Sergeli",
    price: 120000,
    rating: 4.5,
    reviews: 38,
    size: "35×18m",
    surface: "Sun'iy o't",
    available: true,
    badge: null,
    photo: `${BASE}/photo-1517466787929-bc90951d0974?${Q}`,
  },
  {
    id: "6",
    name: "Olympic Park Arena",
    location: "Olmazor tumani",
    district: "Olmazor",
    price: 165000,
    rating: 4.8,
    reviews: 73,
    size: "45×25m",
    surface: "Sun'iy o't",
    available: true,
    badge: "top",
    photo: `${BASE}/photo-1522778119026-d647f0596c20?${Q}`,
  },
];

// ── Star rating renderer ────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-[2px]" aria-label={`Reyting: ${rating}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 10 10" aria-hidden="true">
          <path
            d="M5 0.5L6.12 3.56H9.27L6.76 5.44L7.76 8.5L5 6.75L2.24 8.5L3.24 5.44L0.73 3.56H3.88L5 0.5Z"
            fill={i <= Math.round(rating) ? "#F59E0B" : "#E2E8F0"}
          />
        </svg>
      ))}
    </span>
  );
}

// ── Single card ─────────────────────────────────────────────────────────────
function StadiumCard({ stadium }: { stadium: Stadium }) {
  const isTop = stadium.badge === "top";
  const isFreeToday = stadium.badge === "free_today";

  return (
    <article
      className={[
        "group relative flex flex-col bg-white rounded-2xl overflow-hidden",
        "border transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,212,106,0.12)]",
        stadium.available
          ? "border-slate-200/80 shadow-sm"
          : "border-slate-200/60 shadow-sm opacity-80",
      ].join(" ")}
    >
      {/* ── Photo zone ──────────────────────────────────────────────────── */}
      <div className="relative h-[200px] overflow-hidden bg-slate-100 flex-shrink-0">
        <Image
          src={stadium.photo}
          alt={`${stadium.name} futbol maydoni`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          draggable={false}
        />

        {/* Scrim — top for badges, bottom for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.38) 0%, transparent 38%, transparent 52%, rgba(0,0,0,0.62) 100%)",
          }}
        />
        {/* Green hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]" />

        {/* ── Top-left: status badge ─────────────────────────────────── */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {isFreeToday && (
            <span className="inline-flex items-center gap-1.5 bg-emerald-500 text-white text-[11px] font-bold rounded-full px-2.5 py-1 leading-none shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
              Bugun bo&apos;sh
            </span>
          )}
          {isTop && (
            <span className="inline-flex items-center gap-1 bg-amber-400 text-amber-900 text-[11px] font-bold rounded-full px-2.5 py-1 leading-none shadow-md">
              {/* trophy micro-icon */}
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M7 9.5C4.79 9.5 3 7.71 3 5.5V2h8v3.5C11 7.71 9.21 9.5 7 9.5Z"
                  fill="currentColor"
                />
                <path d="M5 12h4M7 9.5V12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M3 3H1v1.5A2.5 2.5 0 003.5 7M11 3h2v1.5A2.5 2.5 0 0110.5 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Top tanlov
            </span>
          )}
          {!stadium.available && (
            <span className="inline-flex items-center bg-black/55 backdrop-blur-sm text-white/75 text-[11px] font-medium rounded-full px-2.5 py-1 leading-none">
              Band
            </span>
          )}
        </div>

        {/* ── Bottom-left: rating ────────────────────────────────────── */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 bg-black/45 backdrop-blur-md rounded-full px-2.5 py-1 leading-none">
            <Stars rating={stadium.rating} />
            <span className="text-white text-[11px] font-bold leading-none">{stadium.rating}</span>
            <span className="text-white/55 text-[10px] leading-none">({stadium.reviews})</span>
          </span>
        </div>

        {/* ── Bottom-right: price ────────────────────────────────────── */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="bg-white/95 backdrop-blur-sm text-dark-900 text-[12px] font-extrabold rounded-xl px-2.5 py-1.5 leading-none tabular-nums shadow-sm">
            {formatPrice(stadium.price)}
            <span className="text-slate-400 font-normal text-[10px] ml-0.5">/soat</span>
          </span>
        </div>
      </div>

      {/* ── Card body ───────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Name + location */}
        <div>
          <h3 className="text-[15px] font-bold text-slate-900 leading-snug tracking-tight">
            {stadium.name}
          </h3>
          <p className="mt-1 flex items-center gap-1 text-[12px] text-slate-400 font-medium">
            {/* pin icon */}
            <svg width="9" height="12" viewBox="0 0 9 12" fill="none" aria-hidden="true" className="flex-shrink-0">
              <path
                d="M4.5 0C2.57 0 1 1.57 1 3.5C1 6.5 4.5 11 4.5 11C4.5 11 8 6.5 8 3.5C8 1.57 6.43 0 4.5 0ZM4.5 4.75C3.81 4.75 3.25 4.19 3.25 3.5C3.25 2.81 3.81 2.25 4.5 2.25C5.19 2.25 5.75 2.81 5.75 3.5C5.75 4.19 5.19 4.75 4.5 4.75Z"
                fill="#94a3b8"
              />
            </svg>
            {stadium.district}
            <span className="text-slate-300 mx-0.5">·</span>
            {stadium.location.replace(` tumani`, "")} t.
          </p>
        </div>

        {/* Meta chips */}
        <div className="flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200 text-slate-500 text-[11px] font-medium rounded-lg px-2 py-1 leading-none">
            {/* field size icon */}
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="10" height="10" rx="1" stroke="#94a3b8" strokeWidth="1.2" />
              <line x1="6" y1="1" x2="6" y2="11" stroke="#94a3b8" strokeWidth="1" strokeDasharray="1.5 1.5" />
              <circle cx="6" cy="6" r="1.5" stroke="#94a3b8" strokeWidth="1" />
            </svg>
            {stadium.size}
          </span>
          <span className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200 text-slate-500 text-[11px] font-medium rounded-lg px-2 py-1 leading-none">
            {/* grass icon */}
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10 Q3 5 6 4 Q9 5 10 10" stroke="#4ade80" strokeWidth="1.2" fill="none" />
              <path d="M1 10h10" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
            </svg>
            {stadium.surface}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100" />

        {/* CTA row */}
        <div className="flex items-center justify-between gap-3 mt-auto">
          <div className="flex flex-col">
            <span className="text-[11px] text-slate-400 leading-none">Narx</span>
            <span className="text-[15px] font-extrabold text-slate-900 tabular-nums leading-tight mt-0.5">
              {formatPrice(stadium.price)}
              <span className="text-[11px] text-slate-400 font-normal ml-0.5">/soat</span>
            </span>
          </div>

          <button
            disabled={!stadium.available}
            className={[
              "flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[13px] font-bold transition-all duration-200",
              stadium.available
                ? "bg-brand-green text-white shadow-sm hover:bg-brand-green/90 active:scale-[0.97]"
                : "bg-slate-100 text-slate-400 cursor-not-allowed",
            ].join(" ")}
            aria-label={stadium.available ? "Ilovada ochish" : "Band qilingan"}
          >
            {stadium.available ? (
              <>
                {/* phone icon */}
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="3" y="1" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="8" cy="12.5" r="0.75" fill="currentColor" />
                  <line x1="6" y1="3.5" x2="10" y2="3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Ilovada ochish
              </>
            ) : (
              "Band qilingan"
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

const CARD_DELAYS = [100, 200, 300, 100, 200, 300] as const;

// ── Section ──────────────────────────────────────────────────────────────────
export default function StadiumCards() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05, rootMargin: "0px 0px -32px 0px" });

  return (
    <SectionWrapper id="stadiums" theme="light">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-12">
        <Badge variant="light" className="mb-4 reveal">{t.stadiums.badge}</Badge>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-900 tracking-tight mb-4 reveal delay-100">
          {t.stadiums.headline}
        </h2>
        <p className="text-slate-500 text-lg max-w-md mx-auto reveal delay-200">
          {t.stadiums.subheadline}
        </p>
      </div>

      {/* Card grid */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {STADIUMS.map((stadium, index) => (
          <div key={stadium.id} className={`reveal delay-${CARD_DELAYS[index]}`}>
            <StadiumCard stadium={stadium} />
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-10">
        <Button
          variant="outline"
          size="lg"
          className="border-dark-700 text-dark-900 hover:bg-dark-900/5"
        >
          {t.stadiums.viewAll}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8H13M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </SectionWrapper>
  );
}
