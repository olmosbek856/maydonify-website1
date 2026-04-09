"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const METRICS = [
  { value: "+34%", label: "o'rtacha daromad o'sishi", highlight: true },
  { value: "87%", label: "dolzarblashuv darajasi" },
  { value: "2×", label: "tezroq bron to'ldirish" },
  { value: "0 UZS", label: "boshlash narxi" },
];

const ICONS = [
  <svg key="1" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M11 2C6.04 2 2 6.04 2 11C2 15.96 6.04 20 11 20C15.96 20 20 15.96 20 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M15 2L20 7M20 2L15 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.8" />
  </svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 8h16M8 3v5M14 3v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M7 13h2M7 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M15 13l-2 2 1 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 14v4M14 14v4M6 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M7 9l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M11 2L13.5 8.5H20L14.5 12.5L16.5 19L11 15L5.5 19L7.5 12.5L2 8.5H8.5L11 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>,
];

export default function OwnersBenefits() {
  const { t } = useLanguage();
  const metricsRef = useScrollReveal();
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

  const benefits = [
    { icon: ICONS[0], title: t.owners.benefits.b1Title, desc: t.owners.benefits.b1Desc, metric: "+34% daromad" },
    { icon: ICONS[1], title: t.owners.benefits.b2Title, desc: t.owners.benefits.b2Desc, metric: "Real vaqt jadval" },
    { icon: ICONS[2], title: t.owners.benefits.b3Title, desc: t.owners.benefits.b3Desc, metric: "Bepul boshlash" },
    { icon: ICONS[3], title: t.owners.benefits.b4Title, desc: t.owners.benefits.b4Desc, metric: "4.8★ ishonch" },
  ];

  return (
    <SectionWrapper id="owners-benefits" theme="darker">
      {/* Metrics strip — instant trust above the fold */}
      <div ref={metricsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {METRICS.map((m, i) => (
          <div
            key={i}
            className={`reveal delay-${[100, 200, 300, 400][i]} p-5 rounded-2xl border text-center ${
              m.highlight
                ? "bg-brand-green/10 border-brand-green/25"
                : "bg-dark-800 border-dark-700"
            }`}
          >
            <p className={`text-[28px] sm:text-[32px] font-black tracking-[-0.04em] leading-none ${m.highlight ? "text-brand-green" : "text-white"}`}>
              {m.value}
            </p>
            <p className="text-[12px] font-medium text-slate-muted mt-2 leading-snug">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Section header */}
      <div ref={headerRef} className="text-center mb-12">
        <Badge className="mb-4 reveal">{t.owners.benefits.badge}</Badge>
        <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white tracking-[-0.03em] leading-[1.2] reveal delay-100">
          {t.owners.benefits.headline}
        </h2>
      </div>

      {/* Benefits grid */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {benefits.map((b, i) => (
          <div
            key={i}
            className={`reveal delay-${[100, 200, 300, 400][i]} p-6 rounded-2xl bg-dark-800 border border-dark-700 hover:border-brand-green/30 hover:bg-dark-700/50 transition-all duration-200 group`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green group-hover:bg-brand-green/15 transition-colors duration-200">
                {b.icon}
              </div>
              {/* Metric pill */}
              <span className="text-[11px] font-bold text-brand-green bg-brand-green/10 border border-brand-green/20 rounded-full px-2.5 py-1 leading-none">
                {b.metric}
              </span>
            </div>
            <h3 className="text-white font-bold text-[16px] mb-2 leading-snug tracking-[-0.01em]">{b.title}</h3>
            <p className="text-slate-muted text-[14px] leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom CTA nudge */}
      <div className="mt-12 text-center reveal delay-200">
        <p className="text-slate-muted text-[14px] font-medium mb-3">
          Platformaga qo&apos;shilgan 100+ maydon egasi allaqachon natija ko&apos;ryapti.
        </p>
        <button
          onClick={() => {
            const el = document.getElementById("owners-form");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 text-brand-green font-semibold text-[14px] hover:text-brand-green-dark transition-colors duration-150 group cursor-pointer"
        >
          Hamkorlik arizi jo&apos;natish
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">
            <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </SectionWrapper>
  );
}
