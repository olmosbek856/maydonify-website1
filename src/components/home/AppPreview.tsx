"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FEATURE_ICONS = [
  // Map / location
  <svg key="1" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2C6.69 2 4 4.69 4 8c0 4.75 6 10 6 10s6-5.25 6-10c0-3.31-2.69-6-6-6zm0 8.5A2.5 2.5 0 1110 5.5a2.5 2.5 0 010 5z" fill="currentColor" opacity="0.9" />
  </svg>,
  // Filter / sliders
  <svg key="2" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M3 5h14M6 10h8M9 15h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // Clock / history
  <svg key="3" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 7v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // SMS / message
  <svg key="4" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M6 8h8M6 11h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
];

const DISTRICT_CHIPS = ["Barcha", "Chilonzor", "Yunusobod", "Mirzo"];

const BROWSE_FIELDS = [
  {
    name: "Spartak Arena Pro",
    district: "Chilonzor",
    rating: "4.9",
    price: "180 000",
    available: true,
  },
  {
    name: "Yunusobod Stadium",
    district: "Yunusobod",
    rating: "4.7",
    price: "200 000",
    available: true,
  },
  {
    name: "Mirzo Arena",
    district: "Mirzo Ulug'bek",
    rating: "4.6",
    price: "160 000",
    available: false,
  },
];

function AppBrowseMockup() {
  return (
    <div className="relative w-full flex justify-center">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,106,0.10) 0%, transparent 70%)" }}
      />

      {/* Phone frame */}
      <div
        className="relative w-[220px] rounded-[2.2rem] overflow-hidden shadow-2xl border border-white/10"
        style={{ background: "#0D1117" }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span className="text-[9px] font-semibold text-white/60">9:41</span>
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((b) => (
                <div key={b} className="w-0.5 rounded-full bg-white/50" style={{ height: b * 2 + 2 }} />
              ))}
            </div>
            <div className="w-3.5 h-2 rounded-sm border border-white/40 relative">
              <div className="absolute inset-[1px] rounded-[1px] bg-white/60" />
              <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[3px] h-1.5 rounded-r-sm bg-white/30" />
            </div>
          </div>
        </div>

        {/* App header */}
        <div className="px-4 pt-2 pb-2">
          <p className="text-white text-[13px] font-bold tracking-[-0.01em]">Maydon</p>
          <p className="text-white/40 text-[9px] font-medium mt-0.5">Toshkent bo&apos;ylab qidiring</p>
        </div>

        {/* Search bar */}
        <div className="mx-3 mb-3 flex items-center gap-2 bg-white/[0.07] border border-white/10 rounded-xl px-3 py-2">
          <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="5.5" stroke="#8899B4" strokeWidth="1.8" />
            <path d="M14 14L17 17" stroke="#8899B4" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span className="text-[10px] text-white/35 font-medium">Maydon qidiring...</span>
        </div>

        {/* Filter chips */}
        <div className="flex gap-1.5 px-3 mb-3 overflow-x-hidden">
          {DISTRICT_CHIPS.map((chip, i) => (
            <div
              key={chip}
              className="flex-shrink-0 px-2.5 py-1 rounded-full text-[8.5px] font-semibold"
              style={
                i === 0
                  ? { background: "#00D46A", color: "#050A05" }
                  : { background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.1)" }
              }
            >
              {chip}
            </div>
          ))}
        </div>

        {/* Field cards */}
        <div className="px-3 pb-4 space-y-2">
          {BROWSE_FIELDS.map((field) => (
            <div
              key={field.name}
              className="rounded-2xl p-3 border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-start justify-between mb-1.5">
                <div>
                  <p className="text-white text-[10px] font-semibold leading-snug">{field.name}</p>
                  <p className="text-white/40 text-[8.5px] font-medium mt-0.5">{field.district}</p>
                </div>
                <span
                  className="text-[8px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                  style={
                    field.available
                      ? { background: "rgba(0,212,106,0.15)", color: "#00D46A" }
                      : { background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)" }
                  }
                >
                  {field.available ? "Bo'sh" : "Band"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="#F59E0B" aria-hidden="true">
                    <path d="M6 1l1.39 2.81L10.5 4.27l-2.25 2.19.53 3.09L6 8.02l-2.78 1.46.53-3.09L1.5 4.27l3.11-.46L6 1z" />
                  </svg>
                  <span className="text-white/60 text-[8.5px] font-medium">{field.rating}</span>
                </div>
                <span className="text-white/70 text-[8.5px] font-semibold">{field.price} <span className="text-white/35 font-normal">UZS/soat</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AppPreview() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal();
  const leftRef = useScrollReveal({ threshold: 0.05 });
  const rightRef = useScrollReveal({ threshold: 0.05 });

  const features = [
    { title: t.appPreview.feature1, desc: t.appPreview.feature1Desc },
    { title: t.appPreview.feature2, desc: t.appPreview.feature2Desc },
    { title: t.appPreview.feature3, desc: t.appPreview.feature3Desc },
    { title: t.appPreview.feature4, desc: t.appPreview.feature4Desc },
  ];

  return (
    <SectionWrapper id="app-preview" theme="darker">
      {/* Section header */}
      <div ref={headerRef} className="text-center mb-12">
        <Badge className="mb-2 reveal">{t.appPreview.badge}</Badge>
        <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white tracking-[-0.03em] leading-[1.2] mb-3 reveal delay-100">
          {t.appPreview.headline}
        </h2>
        <p className="text-[17px] font-medium text-slate-muted leading-[1.5] tracking-[-0.01em] max-w-xl mx-auto reveal delay-200">
          {t.appPreview.subheadline}
        </p>
      </div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left: phone mockup */}
        <div ref={leftRef} className="flex justify-center reveal">
          <AppBrowseMockup />
        </div>

        {/* Right: features + store badges */}
        <div ref={rightRef}>
          <ul className="space-y-6">
            {features.map((f, i) => (
              <li
                key={i}
                className={`flex items-start gap-4 reveal delay-${[100, 200, 300, 400][i]}`}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green flex-shrink-0 mt-0.5">
                  {FEATURE_ICONS[i]}
                </div>
                <div>
                  <p className="text-white font-semibold text-[15px] leading-snug">{f.title}</p>
                  <p className="text-slate-muted text-[13px] font-medium mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* App store badges */}
          <div className="mt-10 reveal delay-500">
            <p className="text-[12px] font-semibold text-slate-muted uppercase tracking-[0.08em] mb-4">
              {t.download.footerLabel}
            </p>
            <AppStoreBadges theme="dark" size="md" layout="row" />
            <p className="mt-3 text-[12px] font-medium text-slate-muted">
              {t.download.microcopy}
              <span className="mx-1.5 opacity-40">·</span>
              {t.download.availableOn}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
