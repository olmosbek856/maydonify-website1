"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatPriceShort } from "@/lib/utils";
import type { Stadium } from "@/lib/types";

// ── Micro: star row ──────────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-[2px]" aria-label={`Reyting: ${rating}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path
            d="M5 0.5L6.12 3.56H9.27L6.76 5.44L7.76 8.5L5 6.75L2.24 8.5L3.24 5.44L0.73 3.56H3.88L5 0.5Z"
            fill={i <= Math.round(rating) ? "#F59E0B" : "#E2E8F0"}
          />
        </svg>
      ))}
    </span>
  );
}

// ── Micro: pulsing live dot ──────────────────────────────────────────────────
function LiveDot() {
  return (
    <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-[11px] font-semibold rounded-full px-2.5 py-1 leading-none">
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      Jonli
    </span>
  );
}

// ── Micro: image badge ───────────────────────────────────────────────────────
function ImageBadge({ badge }: { badge: Stadium["badge"] }) {
  if (!badge) return null;

  if (badge === "top") {
    return (
      <span className="inline-flex items-center gap-1 bg-amber-400 text-amber-900 text-[11px] font-bold rounded-full px-2.5 py-1 leading-none shadow-md">
        <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M7 9.5C4.79 9.5 3 7.71 3 5.5V2h8v3.5C11 7.71 9.21 9.5 7 9.5Z" fill="currentColor" />
          <path d="M5 12h4M7 9.5V12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M3 3H1v1.5A2.5 2.5 0 003.5 7M11 3h2v1.5A2.5 2.5 0 0110.5 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        Top tanlov
      </span>
    );
  }

  if (badge === "free_today") {
    return (
      <span className="inline-flex items-center gap-1.5 bg-emerald-500 text-white text-[11px] font-bold rounded-full px-2.5 py-1 leading-none shadow-md">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
        Bugun bo&apos;sh
      </span>
    );
  }

  return null;
}

// ── Main export ──────────────────────────────────────────────────────────────
export interface StadiumCardProps {
  stadium: Stadium;
  className?: string;
}

export function StadiumCard({ stadium, className }: StadiumCardProps) {
  const isUrgent = stadium.badge === "urgent";
  const pricePerPerson = Math.round(stadium.price / 10);

  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: "0 20px 48px -8px rgba(0,0,0,0.16), 0 0 0 1px rgba(0,168,107,0.14)" }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className={cn(
        "group relative flex flex-col bg-white rounded-2xl overflow-hidden",
        "border border-slate-200/80 shadow-sm cursor-pointer",
        className
      )}
    >
      {/* ── Image zone (16:9) ─────────────────────────────────────────────── */}
      <div className="relative aspect-video overflow-hidden bg-slate-100 flex-shrink-0">
        <Image
          src={stadium.photo}
          alt={`${stadium.name} futbol maydoni`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          draggable={false}
        />

        {/* Gradient scrim */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.32) 0%, transparent 35%, transparent 50%, rgba(0,0,0,0.52) 100%)",
          }}
        />

        {/* Top-left: badge */}
        <div className="absolute top-3 left-3 z-10">
          <ImageBadge badge={stadium.badge} />
        </div>

        {/* Top-right: live dot */}
        {stadium.available && (
          <div className="absolute top-3 right-3 z-10">
            <LiveDot />
          </div>
        )}

        {/* Bottom-left: district */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white/90 text-[11px] font-medium rounded-full px-2.5 py-1 leading-none">
            <svg width="8" height="10" viewBox="0 0 9 12" fill="none" aria-hidden="true">
              <path
                d="M4.5 0C2.57 0 1 1.57 1 3.5C1 6.5 4.5 11 4.5 11C4.5 11 8 6.5 8 3.5C8 1.57 6.43 0 4.5 0ZM4.5 4.75C3.81 4.75 3.25 4.19 3.25 3.5C3.25 2.81 3.81 2.25 4.5 2.25C5.19 2.25 5.75 2.81 5.75 3.5C5.75 4.19 5.19 4.75 4.5 4.75Z"
                fill="white"
              />
            </svg>
            {stadium.district}
          </span>
        </div>
      </div>

      {/* ── Card body ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-4 gap-3">

        {/* Name */}
        <h3 className="font-display text-[16px] font-bold text-slate-900 leading-snug tracking-tight">
          {stadium.name}
        </h3>

        {/* Rating + price row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <Stars rating={stadium.rating} />
            <span className="text-[12px] font-bold text-slate-700">{stadium.rating}</span>
            <span className="text-[11px] text-slate-400">({stadium.reviews})</span>
          </div>
          <span className="text-[13px] font-extrabold text-slate-900 tabular-nums">
            {formatPriceShort(stadium.price)}
            <span className="text-[11px] text-slate-400 font-normal">/soat</span>
          </span>
        </div>

        {/* Urgency label */}
        {isUrgent && (
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0 text-amber-500">
              <path d="M8 2v6M8 11v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="text-[11px] font-semibold text-amber-700 leading-none">
              Bugun faqat 2 ta vaqt qoldi
            </span>
          </div>
        )}

        {/* Price per person */}
        <div className="flex items-center gap-1.5 text-[12px] text-slate-500">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="5" r="3" stroke="#94a3b8" strokeWidth="1.4" />
            <path d="M2 14c0-3.31 2.69-5 6-5s6 1.69 6 5" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span>
            <span className="font-bold text-slate-700 tabular-nums">{formatPriceShort(pricePerPerson)}</span>
            <span className="text-slate-400">/kishi</span>
            <span className="text-slate-300 mx-1">·</span>
            <span className="text-slate-400">5v5</span>
          </span>
        </div>

        {/* Spacer */}
        <div className="mt-auto pt-1">
          {/* "Bron qiling" CTA — full width */}
          <a
            href={stadium.available ? "https://maydonify.uz/app" : undefined}
            aria-disabled={!stadium.available}
            tabIndex={stadium.available ? 0 : -1}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-[13px] font-bold transition-all duration-200",
              stadium.available
                ? "bg-[#00A86B] text-white hover:bg-[#008f5a] active:scale-[0.97] shadow-sm"
                : "bg-slate-100 text-slate-400 pointer-events-none"
            )}
          >
            {stadium.available ? (
              <>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="3" y="1" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="8" cy="12.5" r="0.75" fill="currentColor" />
                  <line x1="6" y1="3.5" x2="10" y2="3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Bron qiling
              </>
            ) : (
              "Band qilingan"
            )}
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default StadiumCard;
