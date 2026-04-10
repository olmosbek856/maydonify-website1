"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

/* ══════════════════════════════════════════════════════════════════════
   AVATAR SVGs — realistic faces for social proof strip
══════════════════════════════════════════════════════════════════════ */

function AvatarJasur() {
  return (
    <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill="#B5723E"/>
      <path d="M5 28C5 23.5 8.5 21.5 14 21.5C19.5 21.5 23 23.5 23 28Z" fill="#1D3557"/>
      <ellipse cx="14" cy="15" rx="6" ry="7" fill="#CD8A4E"/>
      <path d="M8 15C8 9.48 10.69 6 14 6C17.31 6 20 9.48 20 15C19 12.5 16.5 10.5 14 10.5C11.5 10.5 9 12.5 8 15Z" fill="#1A0D06"/>
      <ellipse cx="11.5" cy="14" rx="1.1" ry="1.1" fill="#1A0D06"/>
      <ellipse cx="16.5" cy="14" rx="1.1" ry="1.1" fill="#1A0D06"/>
      <path d="M11.5 18 Q14 20 16.5 18" stroke="#8B4C1E" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function AvatarOlim() {
  return (
    <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill="#7E5235"/>
      <path d="M5 28C5 23.5 8.5 21.5 14 21.5C19.5 21.5 23 23.5 23 28Z" fill="#2D6A4F"/>
      <ellipse cx="14" cy="15" rx="5.8" ry="7" fill="#C48240"/>
      <path d="M8.2 14C8.2 8.8 10.9 5.5 14 5.5C17.1 5.5 19.8 8.8 19.8 14C19 11 16.8 9 14 9C11.2 9 9 11 8.2 14Z" fill="#140B04"/>
      <ellipse cx="11.5" cy="13.5" rx="1.1" ry="1.1" fill="#140B04"/>
      <ellipse cx="16.5" cy="13.5" rx="1.1" ry="1.1" fill="#140B04"/>
      <path d="M11.5 17.5 Q14 19.5 16.5 17.5" stroke="#7A3E14" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function AvatarAziz() {
  return (
    <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill="#A0693A"/>
      <path d="M5 28C5 23.5 8.5 21.5 14 21.5C19.5 21.5 23 23.5 23 28Z" fill="#6B2D5E"/>
      <ellipse cx="14" cy="15" rx="6" ry="7" fill="#E09A5A"/>
      <path d="M8 14C8 8.6 10.7 5.5 14 5.5C17.3 5.5 20 8.6 20 14C19.2 11.5 17 9.5 14 9.5C11 9.5 8.8 11.5 8 14Z" fill="#150C05"/>
      <ellipse cx="11.5" cy="14" rx="1.1" ry="1.1" fill="#150C05"/>
      <ellipse cx="16.5" cy="14" rx="1.1" ry="1.1" fill="#150C05"/>
      <path d="M11 18 Q14 20.5 17 18" stroke="#8B4A1E" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   FLOW STEP 1 — Field Selection
══════════════════════════════════════════════════════════════════════ */

function StepFieldSelect() {
  return (
    <div className="px-4 pb-5">
      {/* Screen header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-white text-[13px] font-black tracking-tight">Maydon tanlang</p>
          <p className="text-[9.5px] font-medium" style={{ color: "#8899B4" }}>Toshkent · 47 mavjud</p>
        </div>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <circle cx="6" cy="6" r="4.5" stroke="#8899B4" strokeWidth="1.3"/>
            <path d="M9.5 9.5l2.5 2.5" stroke="#8899B4" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Field card 1 — selected/highlighted */}
      <div
        className="rounded-xl p-3 mb-2.5"
        style={{
          background: "rgba(0,212,106,0.07)",
          border: "1.5px solid rgba(0,212,106,0.35)",
        }}
      >
        <div className="flex items-start gap-2.5">
          {/* Thumbnail */}
          <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
              <rect width="44" height="44" fill="#1a6b0e"/>
              <rect width="44" height="44" fill="url(#s1)"/>
              <defs>
                <pattern id="s1" patternUnits="userSpaceOnUse" width="8" height="44">
                  <rect width="4" height="44" fill="rgba(0,0,0,0.07)"/>
                </pattern>
              </defs>
              <rect x="2" y="2" width="40" height="40" stroke="rgba(255,255,255,0.65)" strokeWidth="0.8" fill="none" rx="0.5"/>
              <line x1="22" y1="2" x2="22" y2="42" stroke="rgba(255,255,255,0.65)" strokeWidth="0.6"/>
              <circle cx="22" cy="22" r="7" stroke="rgba(255,255,255,0.65)" strokeWidth="0.6" fill="none"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <p className="text-white text-[12px] font-bold tracking-tight truncate">Spartak Arena Pro</p>
              <span
                className="text-[8.5px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0"
                style={{ background: "#00D46A", color: "#0C0F16" }}
              >
                ✓
              </span>
            </div>
            <p className="text-[9px] mt-0.5" style={{ color: "#8899B4" }}>Chilonzor · Sun&apos;iy</p>
            <div className="flex items-center justify-between mt-1.5">
              <span className="text-[10px] font-semibold" style={{ color: "#00D46A" }}>★ 4.9</span>
              <span className="text-[10px] font-bold text-white">180 000 <span style={{ color: "#8899B4", fontWeight: 400 }}>UZS/soat</span></span>
            </div>
          </div>
        </div>
        {/* Bo'sh pill */}
        <div className="flex justify-end mt-2">
          <span
            className="text-[8.5px] font-semibold px-2 py-0.5 rounded-full"
            style={{ background: "rgba(0,212,106,0.15)", color: "#00D46A", border: "1px solid rgba(0,212,106,0.2)" }}
          >
            Bugun bo&apos;sh
          </span>
        </div>
      </div>

      {/* Field card 2 — unselected */}
      <div
        className="rounded-xl p-3"
        style={{ background: "#1A2130", border: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex items-start gap-2.5">
          <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
              <rect width="44" height="44" fill="#217a13"/>
              <rect x="2" y="2" width="40" height="40" stroke="rgba(255,255,255,0.5)" strokeWidth="0.7" fill="none"/>
              <line x1="22" y1="2" x2="22" y2="42" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5"/>
              <circle cx="22" cy="22" r="6" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" fill="none"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-[12px] font-bold tracking-tight">Yunusobod Arena</p>
            <p className="text-[9px] mt-0.5" style={{ color: "#8899B4" }}>Yunusobod · Tabiiy</p>
            <div className="flex items-center justify-between mt-1.5">
              <span className="text-[10px] font-semibold" style={{ color: "#FBBF24" }}>★ 4.7</span>
              <span className="text-[10px] font-bold text-white">150 000 <span style={{ color: "#8899B4", fontWeight: 400 }}>UZS/soat</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   FLOW STEP 2 — Time Picker
══════════════════════════════════════════════════════════════════════ */

const TIME_SLOTS = [
  { time: "10:00", state: "available" },
  { time: "14:00", state: "available" },
  { time: "16:00", state: "available" },
  { time: "18:00", state: "selected" },
  { time: "20:00", state: "booked" },
  { time: "22:00", state: "booked" },
];

function StepTimePicker() {
  return (
    <div className="px-4 pb-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
            <path d="M5 1L2 4l3 3" stroke="#8899B4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-white text-[12.5px] font-black tracking-tight leading-tight">Vaqt tanlang</p>
          <p className="text-[9px] font-medium" style={{ color: "#8899B4" }}>Spartak Arena Pro</p>
        </div>
      </div>

      {/* Date strip */}
      <div
        className="flex items-center gap-1.5 mb-3 px-2.5 py-1.5 rounded-lg"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <rect x="1" y="2" width="10" height="9" rx="1.5" stroke="#8899B4" strokeWidth="1.1"/>
          <path d="M4 1v2M8 1v2" stroke="#8899B4" strokeWidth="1.1" strokeLinecap="round"/>
          <path d="M1 5h10" stroke="#8899B4" strokeWidth="0.9"/>
        </svg>
        <span className="text-[9.5px] font-semibold" style={{ color: "#C4D0E3" }}>Bugun · 18 mart, Seshanba</span>
      </div>

      {/* Time slot grid */}
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {TIME_SLOTS.map(({ time, state }) => {
          const isSelected = state === "selected";
          const isBooked = state === "booked";
          return (
            <div
              key={time}
              className="rounded-lg py-2 flex flex-col items-center gap-0.5"
              style={{
                background: isSelected
                  ? "#00D46A"
                  : isBooked
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.06)",
                border: isSelected
                  ? "none"
                  : isBooked
                  ? "1px solid rgba(255,255,255,0.04)"
                  : "1px solid rgba(255,255,255,0.08)",
                opacity: isBooked ? 0.45 : 1,
              }}
            >
              <span
                className="text-[11px] font-bold"
                style={{ color: isSelected ? "#0C0F16" : isBooked ? "#8899B4" : "#ffffff" }}
              >
                {time}
              </span>
              <span
                className="text-[7.5px] font-semibold"
                style={{ color: isSelected ? "rgba(12,15,22,0.7)" : isBooked ? "#8899B4" : "#8899B4" }}
              >
                {isSelected ? "Tanlandi" : isBooked ? "Band" : "Bo'sh"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Summary + CTA bar */}
      <div
        className="rounded-xl p-3 flex items-center justify-between gap-2"
        style={{ background: "#1A2130", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div>
          <p className="text-[8px] font-semibold uppercase tracking-[0.07em]" style={{ color: "#8899B4" }}>Jami</p>
          <p className="text-white text-[12px] font-black mt-0.5">360 000 <span className="text-[9px] font-normal" style={{ color: "#8899B4" }}>UZS · 2 soat</span></p>
        </div>
        <div
          className="flex items-center gap-1.5 rounded-lg px-3 py-2 flex-shrink-0"
          style={{ background: "#00D46A" }}
        >
          <span className="text-[10.5px] font-black" style={{ color: "#0C0F16" }}>Tasdiqlash</span>
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
            <path d="M1 4.5h7M5 1.5l3 3-3 3" stroke="#0C0F16" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   FLOW STEP 3 — Confirmed
══════════════════════════════════════════════════════════════════════ */

function StepConfirmed() {
  return (
    <div className="px-4 pb-5">
      {/* Confirmation hero */}
      <div
        className="rounded-2xl p-4 text-center mb-3"
        style={{
          background: "linear-gradient(135deg, rgba(0,212,106,0.12) 0%, rgba(0,212,106,0.05) 100%)",
          border: "1px solid rgba(0,212,106,0.22)",
        }}
      >
        <div
          className="w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-2.5"
          style={{ background: "#00D46A", boxShadow: "0 0 28px rgba(0,212,106,0.55)" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10l4.5 4.5 7.5-7.5" stroke="#0C0F16" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="text-white font-black text-[15px] tracking-[-0.025em]">Bron tasdiqlandi!</p>
        <p className="text-[10px] font-semibold mt-1" style={{ color: "#00D46A" }}>
          Maydonga boring 🏟
        </p>
      </div>

      {/* Booking summary card */}
      <div
        className="rounded-xl p-3 mb-2.5"
        style={{ background: "#1A2130", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <rect width="36" height="36" fill="#1a6b0e"/>
              <rect x="1.5" y="1.5" width="33" height="33" stroke="rgba(255,255,255,0.65)" strokeWidth="0.7" fill="none" rx="0.3"/>
              <line x1="18" y1="1.5" x2="18" y2="34.5" stroke="rgba(255,255,255,0.65)" strokeWidth="0.55"/>
              <circle cx="18" cy="18" r="6" stroke="rgba(255,255,255,0.65)" strokeWidth="0.55" fill="none"/>
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-white text-[12px] font-bold tracking-tight truncate">Spartak Arena Pro</p>
            <p className="text-[9px] mt-0.5" style={{ color: "#8899B4" }}>Chilonzor, Toshkent · ★ 4.9</p>
          </div>
        </div>
        <div
          className="mt-2.5 pt-2.5 grid grid-cols-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div>
            <p className="text-[7.5px] font-semibold uppercase tracking-[0.07em]" style={{ color: "#8899B4" }}>Vaqt</p>
            <p className="text-white text-[11.5px] font-bold mt-0.5">Bugun, 18:00</p>
            <p className="text-[8.5px]" style={{ color: "#8899B4" }}>— 20:00</p>
          </div>
          <div>
            <p className="text-[7.5px] font-semibold uppercase tracking-[0.07em]" style={{ color: "#8899B4" }}>Narx</p>
            <p className="text-white text-[11.5px] font-bold mt-0.5">360 000</p>
            <p className="text-[8.5px]" style={{ color: "#8899B4" }}>so&apos;m · 2 soat</p>
          </div>
        </div>
      </div>

      {/* SMS sent row */}
      <div
        className="rounded-xl px-3 py-2.5 flex items-center gap-2.5"
        style={{ background: "#141A24", border: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(0,212,106,0.12)" }}
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke="#00D46A" strokeWidth="1.2"/>
            <path d="M1 4.5l6 4 6-4" stroke="#00D46A" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-white text-[10.5px] font-semibold">SMS yuborildi</p>
          <p className="text-[9px]" style={{ color: "#8899B4" }}>+998 90 *** ** 56</p>
        </div>
        <div className="ml-auto w-2 h-2 rounded-full flex-shrink-0 animate-pulse" style={{ background: "#00D46A" }} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   FLOW MOCKUP — animated phone cycling through 3 steps
══════════════════════════════════════════════════════════════════════ */

const STEP_LABELS = ["Maydon", "Vaqt", "Tasdiqlandi"];

function FlowMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Respect reduced-motion preference — keep static at step 2 (confirmed)
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(2);
      return;
    }
    const id = setInterval(() => setStep(s => (s + 1) % 3), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full flex justify-center lg:justify-end">

      {/* ── Ambient glow layers ───────────────────────────────────── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,212,106,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,212,106,0.13) 0%, transparent 65%)" }}
        />
      </div>

      {/* ── Phone frame ──────────────────────────────────────────── */}
      <div
        className="relative rounded-[2.6rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.07)]"
        style={{ width: 268, background: "#0F1319", flexShrink: 0 }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-4 pb-1">
          <span className="text-[11px] font-semibold text-white/60 tracking-tight">9:41</span>
          <div className="w-[68px] h-[18px] rounded-full bg-black" />
          <div className="flex items-center gap-1.5">
            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" aria-hidden="true">
              <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="white" fillOpacity="0.5"/>
              <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill="white" fillOpacity="0.65"/>
              <rect x="7" y="2" width="2.5" height="8" rx="0.5" fill="white" fillOpacity="0.8"/>
              <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="white"/>
            </svg>
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none" aria-hidden="true">
              <rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="white" strokeOpacity="0.35"/>
              <rect x="1.5" y="1.5" width="14" height="8" rx="1.5" fill="white"/>
              <path d="M20 3.5v4a2 2 0 0 0 0-4Z" fill="white" fillOpacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* App header bar */}
        <div className="px-5 pt-2 pb-3 flex items-center justify-between">
          <div>
            <p className="text-white text-[14px] font-black tracking-tight">Maydonify</p>
            <p className="text-[9.5px] font-medium" style={{ color: "#8899B4" }}>Bron jarayoni</p>
          </div>
          {/* Step progress dots */}
          <div className="flex items-center gap-1.5">
            {STEP_LABELS.map((label, i) => (
              <div
                key={label}
                className="transition-all duration-300"
                style={{
                  width: step === i ? 18 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: step === i ? "#00D46A" : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Progress bar — resets on step change via key */}
        <div className="px-5 pb-3">
          <div className="h-[2px] rounded-full w-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
            <motion.div
              key={step}
              className="h-full rounded-full"
              style={{ background: "#00D46A" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.2, ease: "linear" }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            {STEP_LABELS.map((label, i) => (
              <span
                key={label}
                className="text-[8px] font-semibold transition-colors duration-300"
                style={{ color: step === i ? "#00D46A" : step > i ? "rgba(0,212,106,0.5)" : "#8899B4" }}
              >
                {step > i ? "✓ " : ""}{label}
              </span>
            ))}
          </div>
        </div>

        {/* Animated step screens */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -14 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {step === 0 && <StepFieldSelect />}
            {step === 1 && <StepTimePicker />}
            {step === 2 && <StepConfirmed />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Floating chip: field found ────────────────────────────── */}
      <div
        className="absolute -left-4 top-20 hidden lg:block animate-[fade-up_0.5s_0.9s_both]"
        style={{ zIndex: 10 }}
      >
        <div
          className="rounded-xl p-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
          style={{
            background: "rgba(13,17,23,0.95)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" fill="#217a13"/>
                <rect x="1.5" y="1.5" width="29" height="29" stroke="rgba(255,255,255,0.7)" strokeWidth="0.7" fill="none"/>
                <line x1="16" y1="1.5" x2="16" y2="30.5" stroke="rgba(255,255,255,0.7)" strokeWidth="0.5"/>
                <circle cx="16" cy="16" r="5" stroke="rgba(255,255,255,0.7)" strokeWidth="0.5" fill="none"/>
              </svg>
            </div>
            <div>
              <p className="text-white text-[11px] font-bold leading-tight">Spartak Arena</p>
              <p className="text-[9.5px] font-medium mt-0.5" style={{ color: "#00D46A" }}>Bo&apos;sh · 18:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating chip: confirmed ──────────────────────────────── */}
      <div
        className="absolute -right-4 bottom-28 hidden lg:block animate-[fade-up_0.5s_1.1s_both]"
        style={{ zIndex: 10 }}
      >
        <div
          className="rounded-xl px-3.5 py-2 shadow-[0_8px_32px_rgba(0,212,106,0.25)]"
          style={{ background: "#00D46A" }}
        >
          <p className="text-[11px] font-black tracking-tight" style={{ color: "#0C0F16" }}>
            ✓ 30 soniyada bron
          </p>
        </div>
      </div>

    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   PRIMARY DOWNLOAD CTA — one dominant button
══════════════════════════════════════════════════════════════════════ */

function PrimaryDownloadCTA() {
  return (
    <a
      href="#"
      aria-label="Ilovani yuklab oling"
      className="group relative inline-flex items-center justify-center gap-3 rounded-2xl font-bold transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-transparent w-full sm:w-auto"
      style={{
        background: "#00D46A",
        color: "#0C0F16",
        fontSize: 15,
        paddingLeft: 28,
        paddingRight: 28,
        height: 56,
        boxShadow: "0 0 0 0 rgba(0,212,106,0.4)",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.background = "#00BF60";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 40px rgba(0,212,106,0.4)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.background = "#00D46A";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 0 0 rgba(0,212,106,0.4)";
      }}
    >
      {/* Store icons */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        {/* Apple */}
        <svg width="16" height="19" viewBox="0 0 814 1000" fill="#0C0F16" aria-hidden="true">
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 267.9-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.5-49 191.3-49 30.8 0 108.2 2.6 168.6 71.4zm-174.5-81.6c-8.4-41.9-24.3-85.4-57.8-119.5-29.6-30.8-76-55.4-124-55.4-1.9 0-3.9 0-5.8.6 1.9 43.8 18.5 87.4 50.2 120.9 29.6 31.4 75.4 57.8 137.4 53.4z"/>
        </svg>
        {/* Android */}
        <svg width="15" height="17" viewBox="0 0 512 512" fill="none" aria-hidden="true">
          <path fill="#0C0F16" fillOpacity="0.75" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"/>
          <path fill="#0C0F16" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"/>
          <path fill="#0C0F16" fillOpacity="0.85" d="M472.1 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.9 17.1-33.7-.1-43.9l-1.1 4.7z"/>
          <path fill="#0C0F16" fillOpacity="0.6" d="M47 480.5c13 6.8 29.5 6.2 42.5-1.6l255.2-147-60.2-60.2L47 480.5z"/>
        </svg>
      </div>
      <span>Ilovani yuklab oling — bepul</span>
      {/* Arrow */}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="#0C0F16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   MAIN HERO
══════════════════════════════════════════════════════════════════════ */

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="noise-overlay relative min-h-svh flex items-center overflow-hidden"
      style={{ background: "#080B12" }}
    >
      {/* ── Background atmosphere ─────────────────────────────────── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Left floodlight */}
        <div
          className="absolute top-0 left-0 w-[900px] h-[700px]"
          style={{ background: "radial-gradient(ellipse at 10% 0%, rgba(0,212,106,0.09) 0%, transparent 55%)" }}
        />
        {/* Right floodlight */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px]"
          style={{ background: "radial-gradient(ellipse at 90% 0%, rgba(0,212,106,0.05) 0%, transparent 55%)" }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute bottom-0 inset-x-0 h-64"
          style={{ background: "linear-gradient(to top, rgba(8,11,18,0.9), transparent)" }}
        />
        {/* Pitch geometry overlay */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          style={{ opacity: 0.03 }}
        >
          <circle cx="720" cy="400" r="130" stroke="white" strokeWidth="1.5" fill="none"/>
          <circle cx="720" cy="400" r="4" fill="white"/>
          <line x1="720" y1="70" x2="720" y2="730" stroke="white" strokeWidth="1.5"/>
          <rect x="70" y="70" width="1300" height="660" stroke="white" strokeWidth="1.5" fill="none"/>
          <line x1="70" y1="178" x2="1370" y2="178" stroke="white" strokeWidth="0.7" opacity="0.5"/>
          <line x1="70" y1="286" x2="1370" y2="286" stroke="white" strokeWidth="0.7" opacity="0.5"/>
          <line x1="70" y1="514" x2="1370" y2="514" stroke="white" strokeWidth="0.7" opacity="0.5"/>
          <line x1="70" y1="622" x2="1370" y2="622" stroke="white" strokeWidth="0.7" opacity="0.5"/>
          <rect x="70" y="258" width="168" height="284" stroke="white" strokeWidth="1" fill="none"/>
          <rect x="1202" y="258" width="168" height="284" stroke="white" strokeWidth="1" fill="none"/>
        </svg>
        {/* Particles */}
        <div className="particle w-1.5 h-1.5 bg-brand-green/25" style={{ left: "12%", bottom: "22%", animationDuration: "9s", animationDelay: "0s" }}/>
        <div className="particle w-1 h-1 bg-brand-green/18" style={{ left: "70%", bottom: "38%", animationDuration: "12s", animationDelay: "2.5s" }}/>
        <div className="particle w-2 h-2 bg-brand-green/10" style={{ left: "44%", bottom: "12%", animationDuration: "15s", animationDelay: "5s" }}/>
        <div className="particle w-1 h-1 bg-white/10" style={{ left: "86%", bottom: "58%", animationDuration: "10s", animationDelay: "1s" }}/>
      </div>

      {/* ── Content grid ─────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 pt-24 pb-16 lg:pt-28 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Copy column ─────────────────────────────────── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Trust badge */}
            <div className="hero-enter mb-6 flex items-center gap-2 justify-center lg:justify-start">
              <div
                className="hidden lg:block w-[2px] h-10 rounded-full flex-shrink-0"
                style={{ background: "linear-gradient(to bottom, #00D46A, rgba(0,212,106,0))" }}
              />
              <span
                className="inline-flex items-center gap-2 rounded-full text-[12px] font-semibold"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "#C4D0E3",
                  paddingLeft: 14,
                  paddingRight: 14,
                  paddingTop: 6,
                  paddingBottom: 6,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0" style={{ background: "#00D46A" }} />
                Toshkent · 300+ faol foydalanuvchi
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-enter hero-enter-delay-1 mb-5 w-full">
              <span
                className="block font-display font-medium tracking-[-0.01em] leading-snug"
                style={{ fontSize: "clamp(18px, 2.6vw, 26px)", color: "#8899B4" }}
              >
                Futbol maydonini
              </span>
              <span
                className="block font-display font-black tracking-[-0.05em] leading-[0.88]"
                style={{
                  fontSize: "clamp(54px, 9vw, 88px)",
                  background: "linear-gradient(135deg, #00D46A 0%, #00FF7F 50%, #5AE89A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                30 soniyada
              </span>
              <span
                className="block font-display font-bold text-white tracking-[-0.03em] leading-tight"
                style={{ fontSize: "clamp(28px, 4.2vw, 44px)" }}
              >
                bron qiling
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="hero-enter hero-enter-delay-2 leading-[1.7] tracking-[-0.01em] mb-7 max-w-[420px]"
              style={{ fontSize: "clamp(14px, 1.4vw, 15.5px)", color: "#8899B4", fontWeight: 500 }}
            >
              {t.hero.subheadline}
            </p>

            {/* PRIMARY CTA */}
            <div className="hero-enter hero-enter-delay-3 w-full sm:w-auto mb-3">
              <PrimaryDownloadCTA />
            </div>

            {/* Secondary CTA — visually subordinate */}
            <div className="hero-enter hero-enter-delay-3 mb-8">
              <button
                onClick={() => scrollTo("how-it-works")}
                className="inline-flex items-center gap-1.5 min-h-[44px] px-1 cursor-pointer transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                style={{ fontSize: 13, fontWeight: 500, color: "#8899B4" }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = "#ffffff")}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = "#8899B4")}
              >
                {t.hero.ctaSecondary}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Social proof — single signal */}
            <div className="hero-enter hero-enter-delay-4 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-[2px] ring-[#080B12]">
                  <AvatarOlim />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden ring-[2px] ring-[#080B12]">
                  <AvatarJasur />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden ring-[2px] ring-[#080B12]">
                  <AvatarAziz />
                </div>
              </div>
              <div className="w-px h-6 flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }} />
              <p style={{ fontSize: 13, fontWeight: 500, color: "#8899B4" }}>
                <span className="text-white font-bold">300+</span>{" "}
                {t.hero.socialProof}
              </p>
              <span
                className="inline-flex items-center gap-1 rounded-full text-[11px] font-semibold flex-shrink-0"
                style={{
                  background: "rgba(251,191,36,0.1)",
                  border: "1px solid rgba(251,191,36,0.2)",
                  color: "#FBBF24",
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 3,
                  paddingBottom: 3,
                }}
              >
                ★ 4.8
              </span>
            </div>

          </div>

          {/* ── RIGHT: Flow mockup ────────────────────────────────── */}
          <div
            className="flex justify-center lg:justify-end hero-enter hero-enter-delay-3"
            style={{ transform: "rotate(1.5deg)" }}
          >
            <FlowMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
