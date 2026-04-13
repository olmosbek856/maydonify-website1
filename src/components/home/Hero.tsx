"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

/* ══════════════════════════════════════════════════════════════════════
   ANIMATED COUNTER
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
            el.textContent = (end * eased).toFixed(decimals) + suffix;
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
   MAP SCREEN — Back phone
══════════════════════════════════════════════════════════════════════ */

function MapScreen() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: "#0D1520" }}>
      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mg" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mg)" />
      </svg>

      {/* Roads */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 290 600" fill="none">
        <path d="M 0 200 H 290" stroke="#1a2744" strokeWidth="14" />
        <path d="M 0 380 H 290" stroke="#1a2744" strokeWidth="11" />
        <path d="M 100 0 V 600" stroke="#1a2744" strokeWidth="15" />
        <path d="M 210 0 V 600" stroke="#1a2744" strokeWidth="11" />
        <path d="M 0 110 H 290" stroke="#141e30" strokeWidth="6" />
        <path d="M 0 290 H 290" stroke="#141e30" strokeWidth="6" />
        <path d="M 0 470 H 290" stroke="#141e30" strokeWidth="6" />
        <path d="M 50 0 V 600" stroke="#141e30" strokeWidth="5" />
        <path d="M 160 0 V 600" stroke="#141e30" strokeWidth="5" />
        <path d="M 250 0 V 600" stroke="#141e30" strokeWidth="5" />
        <path d="M 0 200 H 290" stroke="#223355" strokeWidth="0.8" strokeDasharray="8 6" />
        <path d="M 100 0 V 600" stroke="#223355" strokeWidth="0.8" strokeDasharray="8 6" />
      </svg>

      {/* Search radius */}
      <div className="absolute rounded-full animate-pulse"
        style={{ width: 220, height: 220, top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.04) 50%, transparent 70%)",
          border: "1px solid rgba(34,197,94,0.15)" }} />

      {/* User dot */}
      <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-[#3B82F6] border-[2.5px] border-white shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
          <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#3B82F6] animate-ping opacity-30" />
        </div>
      </div>

      {/* Pins */}
      {[
        { top: "20%", left: "28%", label: "Spartak Arena", delay: 0.3 },
        { top: "33%", left: "70%", label: "FC Tashkent", delay: 0.5 },
        { top: "62%", left: "20%", label: "Grand Arena", delay: 0.8 },
        { top: "74%", left: "62%", label: "Yunusobod", delay: 0.4 },
        { top: "26%", left: "85%", label: "5-a-side", delay: 0.7 },
        { top: "82%", left: "38%", label: "Pro Field", delay: 0.6 },
      ].map((pin) => (
        <motion.div key={pin.label} className="absolute" style={{ top: pin.top, left: pin.left }}
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: pin.delay + 0.5, duration: 0.4, type: "spring", stiffness: 300 }}>
          <div className="relative">
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 rounded-full bg-black/40 blur-[2px]" />
            <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
              <path d="M11 0C4.925 0 0 4.925 0 11c0 8.25 11 17 11 17s11-8.75 11-17C22 4.925 17.075 0 11 0z" fill="#22C55E"/>
              <circle cx="11" cy="10.5" r="4" fill="white" fillOpacity="0.9"/>
              <circle cx="11" cy="10.5" r="2.5" stroke="#22C55E" strokeWidth="0.8" fill="none"/>
              <path d="M11 8v5M8.5 10.5h5" stroke="#22C55E" strokeWidth="0.5"/>
            </svg>
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md text-[8px] font-semibold opacity-80"
              style={{ background: "#111827", color: "#94A3B8", border: "1px solid rgba(255,255,255,0.08)" }}>
              {pin.label}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Search bar */}
      <div className="absolute top-4 left-3 right-3">
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
          style={{ background: "rgba(17,24,39,0.92)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="6" cy="6" r="4.5" stroke="#94A3B8" strokeWidth="1.3"/>
            <path d="M9.5 9.5l3 3" stroke="#94A3B8" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          <span className="text-[11px]" style={{ color: "#94A3B8" }}>Yaqin atrofdagi maydonlar...</span>
        </div>
      </div>

      {/* Bottom card */}
      <div className="absolute bottom-4 left-3 right-3">
        <div className="rounded-xl p-2.5"
          style={{ background: "rgba(17,24,39,0.95)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-[11px] font-bold">6 ta maydon topildi</p>
              <p className="text-[9px] mt-0.5" style={{ color: "#94A3B8" }}>2 km radius ichida</p>
            </div>
            <div className="px-2.5 py-1.5 rounded-lg text-[9px] font-bold" style={{ background: "#22C55E", color: "#0A0F1C" }}>
              Ko&apos;rish
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   BOOKING SCREEN — Front phone
══════════════════════════════════════════════════════════════════════ */

function BookingScreen() {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: "#0A0F1C" }}>
      {/* Header */}
      <div className="px-4 pt-3 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white text-[14px] font-bold tracking-tight">Maydon bron qilish</p>
            <p className="text-[9.5px] font-medium" style={{ color: "#94A3B8" }}>Bugun · 18-mart</p>
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="#94A3B8" strokeWidth="1.2"/>
              <path d="M7 4v3l2 1.5" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Stadium card */}
      <div className="px-4 mb-3">
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          {/* Field image */}
          <div className="h-28 relative" style={{ background: "linear-gradient(135deg, #0d3b1e 0%, #1a5c2e 50%, #0d3b1e 100%)" }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 112" fill="none">
              <defs>
                <pattern id="gs" patternUnits="userSpaceOnUse" width="32" height="112">
                  <rect width="16" height="112" fill="rgba(0,0,0,0.06)"/>
                </pattern>
                <linearGradient id="gf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1a6b0e"/><stop offset="100%" stopColor="#15570c"/>
                </linearGradient>
              </defs>
              <rect width="280" height="112" fill="url(#gf)"/>
              <rect width="280" height="112" fill="url(#gs)"/>
              <rect x="16" y="10" width="248" height="92" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" fill="none" rx="1"/>
              <line x1="140" y1="10" x2="140" y2="102" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
              <circle cx="140" cy="56" r="20" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" fill="none"/>
              <circle cx="140" cy="56" r="2" fill="rgba(255,255,255,0.5)"/>
              <rect x="16" y="30" width="36" height="52" stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none"/>
              <rect x="228" y="30" width="36" height="52" stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none"/>
            </svg>
            {/* Verified */}
            <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", color: "#22C55E" }}>
              <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 4.5-4.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Tasdiqlangan
            </div>
            {/* Rating */}
            <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-full text-[9px] font-bold"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", color: "#FBBF24" }}>★ 4.9</div>
          </div>

          {/* Info */}
          <div className="p-3.5" style={{ background: "#111827" }}>
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-white text-[13.5px] font-bold tracking-tight">Yunusobod Arena</p>
                <p className="text-[10px] mt-0.5" style={{ color: "#94A3B8" }}>Yunusobod tumani · Sun&apos;iy</p>
              </div>
              <div className="px-2 py-0.5 rounded-full text-[8.5px] font-bold" style={{ background: "rgba(34,197,94,0.12)", color: "#22C55E" }}>
                Bo&apos;sh
              </div>
            </div>
            {/* Facilities */}
            <div className="flex gap-1.5 mb-3">
              {["Dush", "Yoritish", "Avtoturargoh"].map((f) => (
                <span key={f} className="text-[8px] font-medium px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.05)", color: "#94A3B8", border: "1px solid rgba(255,255,255,0.06)" }}>{f}</span>
              ))}
            </div>
            <div className="h-px mb-3" style={{ background: "rgba(255,255,255,0.06)" }} />
            {/* Time + price */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(34,197,94,0.1)" }}>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="#22C55E" strokeWidth="1.2"/>
                    <path d="M7 4v3l2 1.5" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-[12px] font-bold">20:00 — 21:00</p>
                  <p className="text-[9px]" style={{ color: "#22C55E" }}>✓ Mavjud</p>
                </div>
              </div>
              <div>
                <p className="text-white text-[13px] font-bold text-right">200 000</p>
                <p className="text-[8.5px] text-right" style={{ color: "#94A3B8" }}>so&apos;m/soat</p>
              </div>
            </div>
            {/* Book button */}
            <button className="w-full py-3 rounded-xl text-[13px] font-bold flex items-center justify-center gap-2"
              style={{ background: "#22C55E", color: "#0A0F1C" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7l3.5 3.5L12 4" stroke="#0A0F1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Band qilish
            </button>
          </div>
        </div>
      </div>

      {/* Other times */}
      <div className="px-4">
        <p className="text-[10px] font-semibold mb-2" style={{ color: "#94A3B8" }}>Boshqa vaqtlar</p>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { time: "16:00", ok: true },
            { time: "18:00", ok: true },
            { time: "22:00", ok: false },
          ].map((s) => (
            <div key={s.time} className="rounded-lg py-2 flex flex-col items-center"
              style={{
                background: s.ok ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${s.ok ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)"}`,
                opacity: s.ok ? 1 : 0.45,
              }}>
              <span className="text-[11px] font-bold text-white">{s.time}</span>
              <span className="text-[7.5px] font-medium" style={{ color: s.ok ? "#22C55E" : "#EF4444" }}>
                {s.ok ? "Bo'sh" : "Band"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   iPHONE 15 PRO FRAME
══════════════════════════════════════════════════════════════════════ */

function IPhoneFrame({ children, width = 320 }: { children: React.ReactNode; width?: number }) {
  const h = width * 1.95;
  return (
    <div className="relative overflow-hidden" style={{
      width, height: h,
      borderRadius: width * 0.12,
      background: "#1A1A1E",
      boxShadow: "0 25px 60px rgba(0,0,0,0.45), 0 0 80px rgba(34,197,94,0.10), 0 0 0 1.5px #3A3A3E",
      flexShrink: 0,
    }}>
      {/* Inner screen */}
      <div className="absolute overflow-hidden" style={{
        inset: 3,
        borderRadius: width * 0.11,
        background: "#000",
      }}>
        {/* Status bar */}
        <div className="relative flex items-center justify-between px-6 pt-3 pb-1" style={{ zIndex: 10 }}>
          <span className="text-[11px] font-semibold text-white/70">9:41</span>
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 rounded-full"
            style={{ width: width * 0.28, height: 22, background: "#000", borderRadius: 20 }} />
          <div className="flex items-center gap-1">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="white" fillOpacity="0.5"/>
              <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill="white" fillOpacity="0.65"/>
              <rect x="7" y="2" width="2.5" height="8" rx="0.5" fill="white" fillOpacity="0.8"/>
              <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="white"/>
            </svg>
            <svg width="18" height="10" viewBox="0 0 22 11" fill="none">
              <rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="white" strokeOpacity="0.35"/>
              <rect x="1.5" y="1.5" width="14" height="8" rx="1.5" fill="white"/>
              <path d="M20 3.5v4a2 2 0 0 0 0-4Z" fill="white" fillOpacity="0.4"/>
            </svg>
          </div>
        </div>
        {/* Content */}
        <div className="w-full" style={{ height: `calc(100% - 36px)` }}>{children}</div>
      </div>
      {/* Side buttons */}
      <div className="absolute -left-[2px] top-[18%] w-[3px] h-7 rounded-l-sm" style={{ background: "#3A3A3E" }} />
      <div className="absolute -left-[2px] top-[28%] w-[3px] h-14 rounded-l-sm" style={{ background: "#3A3A3E" }} />
      <div className="absolute -left-[2px] top-[40%] w-[3px] h-14 rounded-l-sm" style={{ background: "#3A3A3E" }} />
      <div className="absolute -right-[2px] top-[30%] w-[3px] h-16 rounded-r-sm" style={{ background: "#3A3A3E" }} />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   MAIN HERO
══════════════════════════════════════════════════════════════════════ */

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0A0F1C", paddingTop: 100, paddingBottom: 40 }}>
      {/* Keyframes */}
      <style>{`
        @keyframes floatFront { 0%,100%{transform:rotate(-8deg) translateY(0)} 50%{transform:rotate(-8deg) translateY(-14px)} }
        @keyframes floatBack  { 0%,100%{transform:rotate(12deg) translateY(0)} 50%{transform:rotate(12deg) translateY(-10px)} }
        .phone-front { animation: floatFront 6s ease-in-out infinite; }
        .phone-back  { animation: floatBack 7s ease-in-out infinite; animation-delay:1s; }
        @keyframes glowPulse { 0%,100%{opacity:.4;transform:translate(-50%,-50%) scale(1)} 50%{opacity:.6;transform:translate(-50%,-50%) scale(1.05)} }
        .glow-pulse { animation: glowPulse 4s ease-in-out infinite; }
        @media(prefers-reduced-motion:reduce){
          .phone-front,.phone-back,.glow-pulse{animation:none}
          .phone-front{transform:rotate(-8deg)} .phone-back{transform:rotate(12deg)}
        }
      `}</style>

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute glow-pulse" style={{
          width: 700, height: 700, top: "45%", left: "65%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.05) 40%, transparent 70%)" }} />
        <div className="absolute" style={{
          width: 400, height: 400, top: "30%", left: "55%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 60%)" }} />
        <div className="absolute" style={{
          width: 500, height: 500, top: "-10%", left: "-5%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.04) 0%, transparent 60%)" }} />
      </div>

      {/* Content — grid layout */}
      <div className="relative z-10 w-full mx-auto px-6 sm:px-10 lg:px-16" style={{ maxWidth: 1280 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 64 }}>

          {/* ── LEFT COPY ──────────────────────────────────────────── */}
          <div className="flex flex-col items-start">

            {/* Badge — mb-24 */}
            <motion.div
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full"
              style={{
                marginBottom: 16, padding: "6px 14px",
                fontSize: 14, fontWeight: 600, color: "#22C55E",
                background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
              </span>
              ⚽ Tashkent #1 Football Booking Platform
            </motion.div>

            {/* Headline — mb-28 */}
            <h1 style={{ marginBottom: 20, fontFamily: "var(--font-syne), Inter, ui-sans-serif, system-ui, sans-serif" }}>
              {[
                { text: "Yaqin stadionni toping.", white: true, delay: 0.15 },
                { text: "Bron qiling. O'ynang.", white: false, delay: 0.35 },
              ].map(({ text, white, delay }) => (
                <motion.span
                  key={text} className="block"
                  style={{
                    fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 800,
                    lineHeight: 1.05, letterSpacing: "-0.035em",
                    color: white ? "#FFFFFF" : "#22C55E",
                  }}
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay, ease: "easeOut" }}
                >
                  {text}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline — mb-36 */}
            <motion.p
              style={{ marginBottom: 28, fontSize: 17, fontWeight: 400, lineHeight: 1.6, color: "#CBD5E1", maxWidth: 520 }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Toshkent bo&apos;ylab 30+ tasdiqlangan stadionlar. Bo&apos;sh vaqtlarni ko&apos;ring, online band qiling va darhol o&apos;ynang.
            </motion.p>

            {/* Buttons — mb-28 */}
            <motion.div style={{ marginBottom: 20 }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}>
              <div className="flex flex-wrap gap-3">
                {/* Primary CTA — 60px tall */}
                <motion.a href="#download"
                  className="inline-flex items-center gap-3 text-white"
                  style={{
                    background: "#22C55E", fontSize: 18, fontWeight: 700,
                    height: 60, padding: "0 30px", borderRadius: 14,
                  }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 48px rgba(34,197,94,0.5)" }}
                  whileTap={{ scale: 0.97 }}>
                  <svg width="16" height="19" viewBox="0 0 814 1000" fill="white" style={{ flexShrink: 0 }}>
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 267.9-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.5-49 191.3-49 30.8 0 108.2 2.6 168.6 71.4zm-174.5-81.6c-8.4-41.9-24.3-85.4-57.8-119.5-29.6-30.8-76-55.4-124-55.4-1.9 0-3.9 0-5.8.6 1.9 43.8 18.5 87.4 50.2 120.9 29.6 31.4 75.4 57.8 137.4 53.4z"/>
                  </svg>
                  <span style={{ width: 1, height: 22, background: "rgba(255,255,255,0.25)", flexShrink: 0 }} />
                  <svg width="15" height="17" viewBox="0 0 512 512" fill="none" style={{ flexShrink: 0 }}>
                    <path fill="white" fillOpacity="0.75" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"/>
                    <path fill="white" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"/>
                    <path fill="white" fillOpacity="0.85" d="M472.1 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.9 17.1-33.7-.1-43.9l-1.1 4.7z"/>
                    <path fill="white" fillOpacity="0.6" d="M47 480.5c13 6.8 29.5 6.2 42.5-1.6l255.2-147-60.2-60.2L47 480.5z"/>
                  </svg>
                  Ilovani yuklab oling
                </motion.a>

                {/* Secondary — slightly transparent */}
                <a href="#how-it-works"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  style={{
                    fontSize: 18, fontWeight: 700, height: 60, padding: "0 30px", borderRadius: 14,
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                    opacity: 0.9,
                  }}>
                  Qanday ishlaydi?
                </a>
              </div>
              <p style={{ color: "#94A3B8", fontSize: 13, marginTop: 12 }}>
                300+ o&apos;yinchi &middot; Bepul &middot; iOS &amp; Android
              </p>
            </motion.div>

            {/* Trust bar — mb-0 */}
            <motion.div className="flex items-center flex-wrap gap-y-3"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 13 }}>★</span>
                <span className="text-[14px] font-bold text-white"><AnimatedCounter end={4.8} decimals={1} /></span>
                <span className="text-[13px]" style={{ color: "#94A3B8" }}>App Store & Play Store</span>
              </div>
              <span className="inline-block w-px h-5 mx-4 flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }} />
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 13 }}>🏟</span>
                <span className="text-[16px] font-extrabold text-white"><AnimatedCounter end={30} suffix="+" /></span>
                <span className="text-[13px]" style={{ color: "#94A3B8" }}>faol maydon</span>
              </div>
              <span className="inline-block w-px h-5 mx-4 flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)" }} />
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 13 }}>⚡</span>
                <span className="text-[16px] font-extrabold text-white"><AnimatedCounter end={27} />s</span>
                <span className="text-[13px]" style={{ color: "#94A3B8" }}>o&apos;rtacha bron vaqti</span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: TWO PHONES ──────────────────────────────── */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>

            {/* Wrapper — relative for glow, flex for phone overlap */}
            <div className="relative flex items-center" style={{ marginTop: -40 }}>

              {/* Green glow behind */}
              <div className="absolute glow-pulse" style={{
                width: 480, height: 480, top: "50%", left: "50%", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(34,197,94,0.05) 40%, transparent 65%)" }} />

              {/* Back phone — Map */}
              <div className="phone-back relative" style={{
                transform: "rotate(12deg)",
                zIndex: 1, opacity: 0.95,
                marginRight: -50,
                marginTop: 40,
              }}>
                <IPhoneFrame width={240}>
                  <MapScreen />
                </IPhoneFrame>
              </div>

              {/* Front phone — Booking */}
              <div className="phone-front relative" style={{
                transform: "rotate(-8deg)",
                zIndex: 2,
              }}>
                <IPhoneFrame width={260}>
                  <BookingScreen />
                </IPhoneFrame>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

