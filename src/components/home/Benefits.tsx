"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

const BENEFIT_DELAYS = [100, 200, 300, 400] as const;

export default function Benefits() {
  const { t } = useLanguage();
  const leftRef = useScrollReveal({ threshold: 0.1 });
  const rightRef = useScrollReveal({ threshold: 0.05 });

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
        <div ref={leftRef}>
          <Badge className="mb-2 reveal">{t.benefits.badge}</Badge>
          <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white tracking-[-0.03em] leading-[1.2] mb-3 reveal delay-100">
            {t.benefits.headline}
          </h2>
          <p className="text-slate-muted text-[17px] font-medium leading-[1.55] tracking-[-0.01em] max-w-md reveal delay-200">
            {t.benefits.subheadline}
          </p>

          {/* Visual comparison — before/after */}
          <div className="mt-8 space-y-3 reveal delay-300">
            {/* Before */}
            <div className="flex items-center gap-3 p-4 bg-red-500/[0.06] border border-red-500/[0.12] rounded-2xl">
              <div className="w-7 h-7 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
                <span className="text-red-400 text-sm font-bold">✕</span>
              </div>
              <div>
                <p className="text-white/80 text-[14px] font-semibold leading-tight">{t.benefits.beforeTitle}</p>
                <p className="text-slate-muted text-[12px] mt-0.5">{t.benefits.beforeDesc}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 text-slate-muted">
              <div className="flex-1 h-px bg-dark-600" />
              <div className="w-7 h-7 rounded-full bg-dark-700 border border-dark-600 flex items-center justify-center">
                <span className="text-[10px] font-bold text-slate-muted">vs</span>
              </div>
              <div className="flex-1 h-px bg-dark-600" />
            </div>

            {/* After */}
            <div className="flex items-center gap-3 p-4 bg-brand-green/[0.06] border border-brand-green/[0.18] rounded-2xl">
              <div className="w-7 h-7 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7L5.5 10.5L12 3.5" stroke="#00D46A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-[14px] font-semibold leading-tight">{t.benefits.afterTitle}</p>
                <p className="text-brand-green/80 text-[12px] mt-0.5 font-medium">{t.benefits.afterDesc}</p>
              </div>
            </div>
          </div>

          {/* Time saved stat */}
          <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl bg-dark-800 border border-dark-700 reveal delay-400">
            <div className="text-center flex-shrink-0">
              <p className="text-[32px] font-black text-brand-green tracking-[-0.04em] leading-none">29x</p>
              <p className="text-[10px] font-semibold text-slate-muted mt-1 uppercase tracking-[0.06em]">tezroq</p>
            </div>
            <div className="w-px h-10 bg-dark-600 flex-shrink-0" />
            <p className="text-[13px] font-medium text-slate-light leading-snug">
              O&apos;rtacha foydalanuvchi bron qilishga <span className="text-white font-semibold">30 soniya</span> sarflaydi. Ilgarigi usulda — <span className="text-white font-semibold">15 daqiqa</span>.
            </p>
          </div>
        </div>

        {/* Right: benefit cards */}
        <div ref={rightRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={cn(
                "p-6 rounded-2xl border transition-all duration-200",
                "bg-dark-800 border-dark-700 hover:border-brand-green/30 hover:bg-dark-700/50 group",
                `reveal delay-${BENEFIT_DELAYS[i]}`
              )}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green group-hover:bg-brand-green/15 transition-colors duration-200">
                  {b.icon}
                </div>
                <span className="text-[10px] font-bold text-brand-green/70 bg-brand-green/8 border border-brand-green/15 rounded-full px-2 py-0.5 leading-none">
                  {b.metric}
                </span>
              </div>
              <h3 className="text-white font-semibold text-[15px] tracking-[-0.01em] leading-snug mb-2">{b.title}</h3>
              <p className="text-slate-muted text-[13px] font-medium leading-[1.6]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
