"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(2);
      return;
    }
    const id = setInterval(() => setStep(s => (s + 1) % 3), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full flex justify-center lg:justify-end phone-float">

      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,168,107,0.1) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,168,107,0.16) 0%, transparent 65%)" }}
        />
      </div>

      {/* Phone frame */}
      <div
        className="relative rounded-[2.6rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.07)]"
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

        {/* Progress bar */}
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

      {/* Floating chip: field found */}
      <motion.div
        className="absolute -left-6 top-20 hidden lg:block"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
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
      </motion.div>

      {/* Floating chip: confirmed */}
      <motion.div
        className="absolute -right-6 bottom-28 hidden lg:block"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="rounded-xl px-3.5 py-2 shadow-[0_8px_32px_rgba(0,168,107,0.3)]"
          style={{ background: "#00A86B" }}
        >
          <p className="text-[11px] font-black tracking-tight text-white">
            ✓ 30 soniyada bron
          </p>
        </div>
      </motion.div>

    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   TRUST ITEM — single stat in the trust bar
══════════════════════════════════════════════════════════════════════ */

function TrustItem({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span style={{ fontSize: 13, lineHeight: 1 }}>{icon}</span>
      <span style={{ color: "#F9FAFB", fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em" }}>{value}</span>
      <span style={{ color: "#6B7280", fontSize: 13 }}>{label}</span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   ANIMATED COUNTER — vanilla IntersectionObserver, no extra libraries
══════════════════════════════════════════════════════════════════════ */

function AnimatedCounter({ end, suffix = "", decimals = 0 }: { end: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = (end * eased).toFixed(decimals) + suffix;
            el.textContent = current;
            if (progress < 1) requestAnimationFrame(tick);
            else el.textContent = end.toFixed(decimals) + suffix;
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, suffix, decimals]);

  return <span ref={ref}>{"0" + suffix}</span>;
}

/* ══════════════════════════════════════════════════════════════════════
   PRIMARY DOWNLOAD CTA
══════════════════════════════════════════════════════════════════════ */

function PrimaryDownloadCTA() {
  return (
    <motion.a
      href="#"
      aria-label="Ilovani yuklab oling — App Store va Google Play"
      className="inline-flex items-center gap-3 rounded-2xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A86B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117] w-full sm:w-auto justify-center sm:justify-start"
      style={{
        background: "#00A86B",
        color: "#ffffff",
        fontSize: 16,
        paddingLeft: 32,
        paddingRight: 32,
        height: 56,
        maxWidth: 340,
      }}
      whileHover={{ scale: 1.02, boxShadow: "0 0 48px rgba(0,168,107,0.55)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {/* Apple icon */}
      <svg width="16" height="19" viewBox="0 0 814 1000" fill="white" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 267.9-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.5-49 191.3-49 30.8 0 108.2 2.6 168.6 71.4zm-174.5-81.6c-8.4-41.9-24.3-85.4-57.8-119.5-29.6-30.8-76-55.4-124-55.4-1.9 0-3.9 0-5.8.6 1.9 43.8 18.5 87.4 50.2 120.9 29.6 31.4 75.4 57.8 137.4 53.4z"/>
      </svg>
      {/* Divider */}
      <span style={{ width: 1, height: 22, background: "rgba(255,255,255,0.25)", flexShrink: 0 }} />
      {/* Android icon */}
      <svg width="15" height="17" viewBox="0 0 512 512" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path fill="white" fillOpacity="0.75" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"/>
        <path fill="white" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"/>
        <path fill="white" fillOpacity="0.85" d="M472.1 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.9 17.1-33.7-.1-43.9l-1.1 4.7z"/>
        <path fill="white" fillOpacity="0.6" d="M47 480.5c13 6.8 29.5 6.2 42.5-1.6l255.2-147-60.2-60.2L47 480.5z"/>
      </svg>
      <span style={{ fontWeight: 700, letterSpacing: "-0.01em" }}>Ilovani yuklab oling</span>
    </motion.a>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   MAIN HERO
══════════════════════════════════════════════════════════════════════ */

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-svh flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      {/* ── CSS keyframes for phone float ────────────────────────── */}
      <style>{`
        @keyframes phoneFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        .phone-float {
          animation: phoneFloat 6s ease-in-out infinite;
          animation-delay: 1.4s;
        }
        @media (prefers-reduced-motion: reduce) {
          .phone-float { animation: none; }
        }
      `}</style>
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, #0D1117 0%, rgba(13,17,23,0.9) 35%, rgba(13,17,23,0.3) 65%, rgba(13,17,23,0.0) 100%)",
          zIndex: 0,
        }}
      />
      {/* ── Parallax background layer (moves at 0.5× scroll speed) ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0, willChange: "transform" }}
      >
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(13,17,23,0.85) 0%, rgba(13,17,23,0.5) 50%, rgba(13,17,23,0.1) 100%)",
          }}
        />
      </div>

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-20 w-full" style={{ zIndex: 1 }}>
        <div className="max-w-2xl">

          {/* ── LEFT: Copy column ─────────────────────────────────── */}
          <div className="flex flex-col items-start">

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold"
              style={{ background: "rgba(0,168,107,0.12)", border: "1px solid rgba(0,168,107,0.3)", color: "#00A86B" }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00A86B", display: "inline-block" }} />
              #1 Football Booking App in Tashkent
            </motion.div>

            {/* Headline — 3 lines, staggered */}
            <h1
              className="mb-6 font-display"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {(
                [
                  { text: "Maydon band qilish", green: false, delay: 0.1 },
                  { text: "endi 30 soniya.", green: true, delay: 0.3 },
                ] as { text: string; green: boolean; delay: number }[]
              ).map(({ text, green, delay }) => (
                <motion.span
                  key={text}
                  className="block"
                  style={{
                    fontSize: "clamp(40px, 5.5vw, 58px)",
                    fontWeight: 800,
                    lineHeight: 1.08,
                    letterSpacing: "-0.025em",
                    color: green ? "#00A86B" : "#FFFFFF",
                  }}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay, ease: "easeOut" }}
                >
                  {text}
                </motion.span>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p
              style={{
                fontSize: 18,
                color: "#9CA3AF",
                lineHeight: 1.6,
                maxWidth: 440,
                marginBottom: 32,
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Toshkent bo'ylab 30+ tasdiqlangan stadionlar. Bo'sh vaqtlarni ko'ring, online band qiling va darhol o'ynang.
            </motion.p>

            {/* CTA block */}
            <motion.div
              className="w-full sm:w-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <PrimaryDownloadCTA />
              <p
                style={{
                  color: "#4B5563",
                  fontSize: 13,
                  marginTop: 10,
                  letterSpacing: "0.01em",
                }}
              >
                300+ o&apos;yinchi &middot; Bepul &middot; iOS &amp; Android
              </p>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              className="flex items-center flex-wrap mt-8"
              style={{ gap: "0 0" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 13, lineHeight: 1 }}>★</span>
                <span style={{ color: "#F9FAFB", fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em" }}>
                  <AnimatedCounter end={4.8} decimals={1} />
                </span>
                <span style={{ color: "#6B7280", fontSize: 13 }}>App Store & Play Store</span>
              </div>
              <span
                style={{
                  display: "inline-block",
                  width: 1,
                  height: 20,
                  background: "rgba(255,255,255,0.1)",
                  margin: "0 16px",
                  flexShrink: 0,
                }}
              />
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 13, lineHeight: 1 }}>🏟</span>
                <span style={{ color: "#F9FAFB", fontSize: 16, fontWeight: 800, letterSpacing: "-0.01em" }}>
                  <AnimatedCounter end={30} suffix="+" />
                </span>
                <span style={{ color: "#6B7280", fontSize: 13 }}>faol maydon</span>
              </div>
              <span
                style={{
                  display: "inline-block",
                  width: 1,
                  height: 20,
                  background: "rgba(255,255,255,0.1)",
                  margin: "0 16px",
                  flexShrink: 0,
                }}
              />
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 13, lineHeight: 1 }}>⚡</span>
                <span style={{ color: "#F9FAFB", fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em" }}>
                  <AnimatedCounter end={27} />s
                </span>
                <span style={{ color: "#9CA3AF", fontSize: 13, fontWeight: 500 }}>o'rtacha bron vaqti</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}
