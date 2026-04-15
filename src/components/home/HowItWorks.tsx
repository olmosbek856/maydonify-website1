"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ── Icons ─────────────────────────────────────────────────────────────────────
function MapPinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <circle cx="12" cy="9" r="2.2" fill="currentColor"/>
      <path d="M12 2v2M5 9H3M21 9h-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      <path d="M12 7.5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.35"/>
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M7.5 12l3 3 5-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
    </svg>
  );
}

const STEP_ICONS = [MapPinIcon, ClockIcon, CheckCircleIcon];

// ── Step mini-previews (unchanged UI, kept for visual context) ────────────────
function StepPreview1() {
  return (
    <div className="mt-5 p-3 rounded-xl bg-dark-700/60 border border-dark-600">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-white text-[11px] font-semibold">Yunusobod 15 kv 97-maktab</p>
          <p className="text-slate-muted text-[9px] mt-0.5">Yunusobod · ★4.9 · 180 000 UZS/soat</p>
        </div>
        <span
          className="text-[8.5px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: "rgba(0,212,106,0.15)", color: "#00D46A" }}
        >
          Bo&apos;sh
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white text-[10px] font-semibold">Chilonzor 25-kvartal, 278-maktab</p>
          <p className="text-slate-muted text-[9px] mt-0.5">Chilonzor · ★4.7 · 200 000 UZS/soat</p>
        </div>
        <span
          className="text-[8.5px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: "rgba(0,212,106,0.15)", color: "#00D46A" }}
        >
          Bo&apos;sh
        </span>
      </div>
    </div>
  );
}

function StepPreview2() {
  const slots = [
    { time: "10:00", state: "available" },
    { time: "18:00", state: "selected" },
    { time: "22:00", state: "booked" },
  ];
  return (
    <div className="mt-5 p-3 rounded-xl bg-dark-700/60 border border-dark-600">
      <p className="text-slate-muted text-[9px] font-semibold uppercase tracking-[0.06em] mb-2">
        Bugun mavjud vaqtlar
      </p>
      <div className="grid grid-cols-3 gap-1.5">
        {slots.map((s) => (
          <div
            key={s.time}
            className="text-center text-[10px] font-semibold py-1.5 rounded-lg"
            style={
              s.state === "selected"
                ? { background: "#00D46A", color: "#050A05" }
                : s.state === "booked"
                ? { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.25)" }
                : {
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }
            }
          >
            {s.time}
          </div>
        ))}
      </div>
    </div>
  );
}

function StepPreview3() {
  return (
    <div className="mt-5 p-3 rounded-xl bg-dark-700/60 border border-dark-600">
      <div className="flex items-center gap-2.5">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(0,212,106,0.15)", boxShadow: "0 0 12px rgba(0,212,106,0.3)" }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8l3.5 3.5L13 4" stroke="#00D46A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-white text-[11px] font-bold">Bron tasdiqlandi!</p>
          <p className="text-slate-muted text-[9px] mt-0.5">Yunusobod 15 kv 97-maktab · Bugun 18:00–20:00</p>
        </div>
        <span className="ml-auto text-[8.5px] font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full flex-shrink-0">
          #PL64464
        </span>
      </div>
      <div className="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-dark-600">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse flex-shrink-0" />
        <p className="text-[9px] font-medium text-slate-muted">SMS tasdiq yuborildi</p>
      </div>
    </div>
  );
}

const STEP_PREVIEWS = [<StepPreview1 key="1" />, <StepPreview2 key="2" />, <StepPreview3 key="3" />];

// ── Count-up stat ─────────────────────────────────────────────────────────────
interface StatItemProps {
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
  index?: number;
}

function StatItem({ target, suffix, label, decimals = 0, index = 0 }: StatItemProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, target, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setDisplay(decimals > 0 ? +v.toFixed(decimals) : Math.round(v));
      },
    });
    return ctrl.stop;
  }, [inView, target, decimals]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-1.5"
    >
      <span className="font-display text-[32px] sm:text-[40px] font-extrabold text-white leading-none tabular-nums tracking-tight">
        {decimals > 0 ? display.toFixed(decimals) : display}
        {suffix}
      </span>
      <span className="text-[13px] font-medium text-slate-muted text-center uppercase tracking-[0.1em] leading-snug max-w-[100px]">
        {label}
      </span>
    </motion.div>
  );
}

const STATS: StatItemProps[] = [
  { target: 29, suffix: "x",  label: "tezroq bron",       decimals: 0 },
  { target: 300, suffix: "+", label: "o'yinchi",           decimals: 0 },
  { target: 30,  suffix: "+", label: "faol maydon",        decimals: 0 },
  { target: 4.8, suffix: " ★", label: "o'rtacha reyting", decimals: 1 },
];

// ── Main section ──────────────────────────────────────────────────────────────
export default function HowItWorks() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal();
  const ctaRef = useScrollReveal({ threshold: 0.1 });

  const steps = [
    { title: t.howItWorks.step1Title, desc: t.howItWorks.step1Desc },
    { title: t.howItWorks.step2Title, desc: t.howItWorks.step2Desc },
    { title: t.howItWorks.step3Title, desc: t.howItWorks.step3Desc },
  ];

  return (
    <SectionWrapper id="how-it-works" theme="darker" style={{ background: "rgba(255,255,255,0.02)" }}>
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div ref={headerRef} className="text-center mb-12">
        <Badge className="mb-6 reveal gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse flex-shrink-0" />
          {t.howItWorks.badge}
        </Badge>
        <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-white uppercase tracking-[0.04em] leading-[1.2] mb-3 reveal delay-100">
          {t.howItWorks.headline}
        </h2>
        <p className="text-[17px] font-medium text-slate-light leading-[1.5] tracking-[-0.01em] max-w-md mx-auto reveal delay-200">
          {t.howItWorks.subheadline}
        </p>
      </div>

      {/* ── Steps grid ─────────────────────────────────────────────────────── */}
      <div className="relative">
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div key={i} className="flex flex-col">
                {/* Step card — fades in from below, gets green left border */}
                <motion.article
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col flex-1 backdrop-blur-sm rounded-r-xl p-5 bg-white/[0.04] hover:bg-white/[0.07] transition-colors duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", borderLeft: "3px solid #00A86B" }}
                >
                  {/* Icon + step number — icon center at ~40px from card top (p-5 + h-10/2) */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/25 flex items-center justify-center text-brand-green flex-shrink-0 group-hover:bg-brand-green/15 group-hover:border-brand-green/40 transition-colors duration-200">
                      <Icon />
                    </div>
                    <span className="text-[11px] font-bold text-white/20 tabular-nums tracking-[0.1em]">{`0${i + 1}`}</span>
                  </div>

                  {/* Text */}
                  <h3 className="font-display text-[16px] font-bold text-white uppercase tracking-[0.06em] leading-snug mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[15px] font-medium text-slate-muted leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Mini preview */}
                  {STEP_PREVIEWS[i]}
                </motion.article>

              </div>
            );
          })}
        </div>
      </div>

      {/* ── Stats row ──────────────────────────────────────────────────────── */}
      <div className="mt-14 pt-10 border-t border-dark-600/60">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
          {STATS.map((stat, i) => (
            <StatItem key={i} {...stat} index={i} />
          ))}
        </div>
      </div>

      {/* ── App store CTA ──────────────────────────────────────────────────── */}
      <div ref={ctaRef} className="mt-14 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 mb-1 reveal">
          <div className="h-px w-10 bg-brand-green/30" />
          <p className="text-[15px] font-semibold text-white uppercase tracking-[0.12em]">
            {t.download.howItWorksCta}
          </p>
          <div className="h-px w-10 bg-brand-green/30" />
        </div>
        <div className="reveal delay-100">
          <AppStoreBadges theme="dark" />
        </div>
        <p className="text-[12px] font-medium text-slate-muted uppercase tracking-[0.12em] reveal delay-200">
          {t.download.availableOn}
        </p>
      </div>
    </SectionWrapper>
  );
}
