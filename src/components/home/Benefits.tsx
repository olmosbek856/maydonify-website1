"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const BENEFIT_ICONS = [
  // Real-time / lightning
  <svg key="1" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M13 2L4 13h8l-2 7 9-11h-8l2-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>,
  // Rocket / fast
  <svg key="2" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M11 3C11 3 14 5 14 10C14 12 13 13.5 11 15C9 13.5 8 12 8 10C8 5 11 3 11 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M8 10C6 10.5 4.5 11.5 4 13.5L6.5 14.5L7.5 17C9 16.5 10 15.5 11 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 10C16 10.5 17.5 11.5 18 13.5L15.5 14.5L14.5 17C13 16.5 12 15.5 11 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="11" cy="10" r="1.5" fill="currentColor" />
  </svg>,
  // Price tag
  <svg key="3" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M3 3h8l9 9-8 8L3 11V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
  </svg>,
  // Shield / verified
  <svg key="4" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M11 2L3 6v6c0 4 3.6 7.7 8 9 4.4-1.3 8-5 8-9V6L11 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: text + comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge variant="green" className="mb-6 gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse flex-shrink-0" />
            {t.benefits.badge}
          </Badge>
          <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white uppercase tracking-[0.04em] leading-[1.2] mb-3">
            {t.benefits.headline}
          </h2>
          <p className="text-slate-muted text-[17px] font-medium leading-[1.55] tracking-[-0.01em] max-w-md">
            {t.benefits.subheadline}
          </p>

          {/* Visual comparison — before/after */}
          <div className="mt-8 space-y-3">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 p-4 bg-red-500/[0.06] border border-red-500/[0.12] rounded-2xl"
            >
              <div className="w-7 h-7 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 2L8 8M8 2L2 8" stroke="#F87171" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="text-white/80 text-[14px] font-semibold leading-tight">{t.benefits.beforeTitle}</p>
                <p className="text-slate-muted text-[12px] mt-0.5">{t.benefits.beforeDesc}</p>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 text-slate-muted">
              <div className="flex-1 h-px bg-dark-600" />
              <div className="w-7 h-7 rounded-full bg-dark-700 border border-dark-600 flex items-center justify-center">
                <span className="text-[10px] font-bold text-slate-muted">vs</span>
              </div>
              <div className="flex-1 h-px bg-dark-600" />
            </div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 p-4 bg-brand-green/[0.06] border border-brand-green/[0.18] rounded-2xl"
            >
              <div className="w-7 h-7 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7L5.5 10.5L12 3.5" stroke="#00D46A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-[14px] font-semibold leading-tight">{t.benefits.afterTitle}</p>
                <p className="text-brand-green/80 text-[12px] mt-0.5 font-medium">{t.benefits.afterDesc}</p>
              </div>
            </motion.div>
          </div>

          {/* Time saved stat */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex items-center gap-4 p-4 rounded-2xl bg-dark-800 border border-dark-700"
          >
            <div className="text-center flex-shrink-0">
              <p className="text-[32px] font-black text-brand-green tracking-[-0.04em] leading-none">29x</p>
              <p className="text-[10px] font-semibold text-slate-muted mt-1 uppercase tracking-[0.06em]">{t.benefits.statLabel}</p>
            </div>
            <div className="w-px h-10 bg-dark-600 flex-shrink-0" />
            <p className="text-[13px] font-medium text-slate-light leading-snug">
              {t.benefits.statDesc}
            </p>
          </motion.div>
        </motion.div>

        {/* Right: benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "p-6 rounded-2xl border transition-colors duration-200",
                "bg-dark-800 border-dark-700 hover:border-brand-green/30 hover:bg-dark-700/50 group"
              )}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green group-hover:bg-brand-green/15 transition-colors duration-200">
                  {b.icon}
                </div>
                <span className="text-[10px] font-bold text-brand-green/70 bg-brand-green/[0.08] border border-brand-green/15 rounded-full px-2 py-0.5 leading-none uppercase tracking-[0.06em]">
                  {b.metric}
                </span>
              </div>
              <h3 className="text-white font-semibold text-[15px] uppercase tracking-[0.04em] leading-snug mb-2">{b.title}</h3>
              <p className="text-slate-muted text-[13px] font-medium leading-[1.6]">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
