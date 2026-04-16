"use client";

import { useLanguage } from "@/context/LanguageContext";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function OwnersHero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] bg-dark-900 flex items-center overflow-hidden pt-20">
      {/* Background: football field aerial */}
      <div className="absolute inset-0 -z-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&h=900&fit=crop&crop=center&q=70&auto=format"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.14]"
          loading="eager"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(12,15,22,0.92) 0%, rgba(12,15,22,0.7) 50%, rgba(12,15,22,0.85) 100%)",
          }}
        />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-green/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-green/4 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="hero-enter">
            <Badge className="mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              {t.owners.hero.badge}
            </Badge>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-[1.06] tracking-[-0.035em] mb-6">
              {t.owners.hero.headline}
            </h1>

            <p className="text-[17px] lg:text-[19px] text-slate-light leading-[1.6] mb-8 max-w-lg font-medium">
              {t.owners.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" onClick={() => scrollTo("owners-form")}>
                {t.owners.hero.ctaPrimary}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollTo("owners-benefits")}>
                {t.owners.hero.ctaSecondary}
              </Button>
            </div>

            {/* Trust note */}
            <div className="mt-5 flex items-center gap-2 text-slate-muted text-[13px] font-medium">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1L10 6H15L11 9L12.5 14L8 11L3.5 14L5 9L1 6H6L8 1Z" fill="#00D46A" opacity="0.8"/>
              </svg>
              {t.owners.hero.trustStatement}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { value: "+30%", label: t.owners.hero.stat1, highlight: true },
                { value: "30+", label: t.owners.hero.stat2 },
                { value: "0 UZS", label: t.owners.hero.stat3 },
              ].map((stat, i) => (
                <div key={i} className="relative">
                  {i > 0 && (
                    <div className="absolute left-0 top-1 bottom-1 w-px bg-dark-600" />
                  )}
                  <div className={i > 0 ? "pl-4 sm:pl-6" : ""}>
                    <p className={`text-[22px] sm:text-[26px] font-black tracking-[-0.03em] leading-tight ${stat.highlight ? "text-brand-green" : "text-white"}`}>
                      {stat.value}
                    </p>
                    <p className="text-[11px] font-medium text-slate-muted mt-0.5 leading-snug">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual — phone screenshot */}
          <div className="hidden lg:flex items-center justify-end hero-enter hero-enter-delay-2">
            <OwnersPhoneImage />
          </div>
        </div>
      </div>
    </section>
  );
}

function OwnersPhoneImage() {
  return (
    <div className="relative w-full max-w-[460px] flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-brand-green/6 rounded-full blur-3xl pointer-events-none scale-75" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/owners-phone.png"
        alt="Maydonify owner dashboard"
        className="relative w-full h-auto select-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 88% 92% at 50% 50%, black 40%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.3) 78%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 88% 92% at 50% 50%, black 40%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.3) 78%, transparent 90%)",
        }}
        draggable={false}
      />
    </div>
  );
}
