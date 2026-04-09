"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STEP_ICONS = [
  // Search/find icon
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M17 17L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // Calendar icon
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // Checkmark icon
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

const STEP_DELAYS = [100, 300, 500] as const;

export default function HowItWorks() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal();
  const stepsRef = useScrollReveal({ threshold: 0.05 });
  const ctaRef = useScrollReveal({ threshold: 0.1 });

  const steps = [
    { title: t.howItWorks.step1Title, desc: t.howItWorks.step1Desc },
    { title: t.howItWorks.step2Title, desc: t.howItWorks.step2Desc },
    { title: t.howItWorks.step3Title, desc: t.howItWorks.step3Desc },
  ];

  return (
    <SectionWrapper id="how-it-works" theme="darker">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-12">
        <Badge className="mb-2 reveal">{t.howItWorks.badge}</Badge>
        <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-white tracking-[-0.02em] leading-[1.2] mb-3 reveal delay-100">
          {t.howItWorks.headline}
        </h2>
        <p className="text-[17px] font-medium text-slate-light leading-[1.5] tracking-[-0.01em] max-w-md mx-auto reveal delay-200">
          {t.howItWorks.subheadline}
        </p>
      </div>

      {/* Steps */}
      <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-10 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px bg-gradient-to-r from-dark-600 via-brand-green/30 to-dark-600" />

        {steps.map((step, i) => (
          <div key={i} className={`relative flex flex-col items-center text-center group reveal delay-${STEP_DELAYS[i]}`}>
            {/* Step number circle */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-dark-800 border border-dark-600 group-hover:border-brand-green/40 transition-all duration-300 flex items-center justify-center">
                <div className="text-brand-green">
                  {STEP_ICONS[i]}
                </div>
              </div>
              {/* Step number badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-green text-dark-900 text-xs font-black flex items-center justify-center">
                {i + 1}
              </div>
            </div>

            <h3 className="text-white font-semibold text-[16px] tracking-[-0.01em] mb-2">{step.title}</h3>
            <p className="text-slate-muted text-[14px] font-medium leading-[1.6] max-w-xs">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Download prompt */}
      <div ref={ctaRef} className="mt-14 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 mb-1 reveal">
          <div className="h-px w-10 bg-brand-green/30" />
          <p className="text-[15px] font-semibold text-white tracking-[-0.01em]">
            {t.download.howItWorksCta}
          </p>
          <div className="h-px w-10 bg-brand-green/30" />
        </div>
        <div className="reveal delay-100">
          <AppStoreBadges theme="dark" />
        </div>
        <p className="text-[12px] font-medium text-slate-muted tracking-[0.02em] reveal delay-200">
          {t.download.availableOn}
        </p>
      </div>
    </SectionWrapper>
  );
}
