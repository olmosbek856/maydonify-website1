"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const BENEFIT_ICONS = [
  // Lightning / real-time
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Clock / fast
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Price tag
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="7" cy="7" r="1.5" fill="currentColor" />
  </svg>,
  // Shield / verified
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L3 7v6c0 5 3.6 9.7 9 11 5.4-1.3 9-6 9-11V7L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    { icon: BENEFIT_ICONS[0], title: t.benefits.b1Title, desc: t.benefits.b1Desc, metric: t.benefits.metric1 },
    { icon: BENEFIT_ICONS[1], title: t.benefits.b2Title, desc: t.benefits.b2Desc, metric: t.benefits.metric2 },
    { icon: BENEFIT_ICONS[2], title: t.benefits.b3Title, desc: t.benefits.b3Desc, metric: t.benefits.metric3 },
    { icon: BENEFIT_ICONS[3], title: t.benefits.b4Title, desc: t.benefits.b4Desc, metric: t.benefits.metric4 },
  ];

  return (
    <SectionWrapper id="benefits" theme="darker">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20" style={{ alignItems: "center" }}>

        {/* ── LEFT: text + comparison ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge variant="green" className="mb-6 gap-2 normal-case">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse flex-shrink-0" />
            {t.benefits.badge}
          </Badge>

          <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white tracking-[-0.02em] leading-[1.15] mb-3">
            {t.benefits.headline}
          </h2>
          <p className="text-slate-muted text-[17px] font-medium leading-[1.55] tracking-[-0.01em] max-w-md">
            {t.benefits.subheadline}
          </p>

          {/* Before / After comparison */}
          <div className="mt-8 space-y-2">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-4 rounded-2xl"
              style={{
                background: "rgba(239,68,68,0.05)",
                border: "1px solid rgba(239,68,68,0.14)",
                boxShadow: "inset 0 1px 0 rgba(248,113,113,0.1)",
              }}
            >
              <ul className="space-y-2">
                {[t.benefits.beforeItem1, t.benefits.beforeItem2, t.benefits.beforeItem3].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(239,68,68,0.12)" }}
                    >
                      <svg width="9" height="9" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                        <path d="M2 2L9 9M9 2L2 9" stroke="#F87171" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p className="text-white/75 text-[13px] leading-snug">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* vs divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
              <span
                className="text-[11px] font-bold px-3 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.05)", color: "#64748B", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                vs
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
            </div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="p-4 rounded-2xl"
              style={{
                background: "rgba(0,168,107,0.06)",
                border: "1px solid rgba(0,212,106,0.2)",
                boxShadow: "inset 0 1px 0 rgba(0,212,106,0.15)",
              }}
            >
              <ul className="space-y-2">
                {[t.benefits.afterItem1, t.benefits.afterItem2, t.benefits.afterItem3].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0,168,107,0.18)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7L5.5 10.5L12 3.5" stroke="#00D46A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-white text-[13px] leading-snug">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* 29x stat */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex items-center gap-5 p-4 rounded-2xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(0,168,107,0.09) 0%, rgba(13,17,23,0) 60%)",
              border: "1px solid rgba(0,168,107,0.18)",
            }}
          >
            {/* Glow blob */}
            <div
              className="absolute left-0 top-0 w-20 h-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse at left center, rgba(0,168,107,0.12) 0%, transparent 70%)" }}
            />
            <div className="text-center flex-shrink-0 relative">
              <p
                className="font-black leading-none tracking-[-0.05em]"
                style={{ fontSize: 42, color: "#00D46A", textShadow: "0 0 24px rgba(0,212,106,0.4)" }}
              >
                29x
              </p>
              <p className="text-[10px] font-semibold text-slate-muted mt-1 tracking-[0.04em]">{t.benefits.statLabel}</p>
            </div>
            <div className="w-px self-stretch bg-white/[0.07] flex-shrink-0" />
            <p className="text-[13px] font-medium leading-snug relative" style={{ color: "#94a3b8" }}>
              {t.benefits.statDesc}
            </p>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: feature cards ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, transition: { type: "spring", stiffness: 340, damping: 24 } }}
              className="group relative p-5 rounded-2xl cursor-pointer overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,168,107,0.28)";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,168,107,0.04)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(0,168,107,0.07), inset 0 1px 0 rgba(0,212,106,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,212,106,0.5) 50%, transparent 100%)" }}
              />

              {/* Icon + metric row */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                  style={{
                    background: "rgba(0,168,107,0.1)",
                    border: "1px solid rgba(0,168,107,0.2)",
                    color: "#00D46A",
                  }}
                >
                  {b.icon}
                </div>
                <span
                  className="text-[10px] font-bold rounded-full px-2.5 py-1 leading-none"
                  style={{
                    color: "rgba(0,212,106,0.8)",
                    background: "rgba(0,168,107,0.1)",
                    border: "1px solid rgba(0,168,107,0.18)",
                  }}
                >
                  {b.metric}
                </span>
              </div>

              <h3 className="text-white font-semibold text-[15px] tracking-[-0.01em] leading-snug mb-2">
                {b.title}
              </h3>
              <p className="text-[13px] font-medium leading-[1.65]" style={{ color: "#64748b" }}>
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
