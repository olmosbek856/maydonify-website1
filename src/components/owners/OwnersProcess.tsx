"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const STEP_ICONS = [
  <svg key="1" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M4 4h14v14H4V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M8 10h6M8 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M13 4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M11 7v4l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M11 2l2.5 7h7l-5.5 4 2 7L11 16l-6 4 2-7L1.5 9h7L11 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>,
];

export default function OwnersProcess() {
  const { t } = useLanguage();

  const steps = [
    { icon: STEP_ICONS[0], title: t.owners.process.step1Title, desc: t.owners.process.step1Desc },
    { icon: STEP_ICONS[1], title: t.owners.process.step2Title, desc: t.owners.process.step2Desc },
    { icon: STEP_ICONS[2], title: t.owners.process.step3Title, desc: t.owners.process.step3Desc },
  ];

  return (
    <SectionWrapper id="owners-process" theme="darker">
      <div className="text-center mb-12">
        <Badge className="mb-4">{t.owners.process.badge}</Badge>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {t.owners.process.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Connector */}
        <div className="hidden md:block absolute top-10 left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-px bg-gradient-to-r from-dark-600 via-brand-green/30 to-dark-600" />

        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-dark-800 border border-dark-600 group-hover:border-brand-green/40 group-hover:shadow-[0_0_20px_rgba(0,212,106,0.12)] transition-all duration-200 flex items-center justify-center text-brand-green">
                {step.icon}
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-green text-dark-900 text-xs font-black flex items-center justify-center">
                {i + 1}
              </div>
            </div>
            <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
            <p className="text-slate-muted text-sm leading-relaxed max-w-xs">{step.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
