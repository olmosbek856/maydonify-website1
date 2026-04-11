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

          {/* Right: visual — dashboard mockup */}
          <div className="hidden lg:flex items-center justify-end hero-enter hero-enter-delay-2">
            <OwnersDashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function OwnersDashboardMockup() {
  return (
    <div className="relative w-full max-w-sm">
      {/* Outer glow */}
      <div className="absolute -inset-6 bg-brand-green/5 rounded-3xl blur-3xl pointer-events-none" />

      <div className="relative bg-dark-800 rounded-2xl border border-dark-600/80 shadow-2xl overflow-hidden">
        {/* Top bar */}
        <div className="px-4 py-3 border-b border-dark-700 flex items-center justify-between">
          <div>
            <p className="text-white text-sm font-bold">Spartak Mini Arena</p>
            <p className="text-slate-muted text-xs">Chilonzor tumani · Toshkent</p>
          </div>
          <div className="bg-brand-green/15 border border-brand-green/25 rounded-full px-2.5 py-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            <span className="text-brand-green text-xs font-semibold">Faol</span>
          </div>
        </div>

        {/* Revenue highlight */}
        <div className="px-4 py-4 bg-gradient-to-r from-brand-green/8 to-transparent border-b border-dark-700">
          <p className="text-slate-muted text-xs mb-1">Bu oylik daromad</p>
          <div className="flex items-end gap-2">
            <p className="text-white font-black text-[28px] tracking-[-0.03em] leading-none">7.2M</p>
            <p className="text-[11px] font-medium text-slate-muted mb-0.5">so&apos;m</p>
            <div className="ml-auto flex items-center gap-1 bg-brand-green/15 border border-brand-green/25 rounded-full px-2 py-0.5">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 9L6 3L10 9" stroke="#00D46A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-brand-green text-[10px] font-bold">+34%</span>
            </div>
          </div>
          {/* Mini bar chart */}
          <div className="mt-3 flex items-end gap-1 h-8">
            {[40, 55, 45, 70, 60, 85, 75, 90, 72, 95, 80, 100].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${i === 11 ? "bg-brand-green" : "bg-brand-green/25"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-1 flex justify-between text-[9px] text-slate-muted">
            <span>Yan</span><span>Feb</span><span>Mar</span><span>Apr</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 divide-x divide-dark-700 border-b border-dark-700">
          {[
            { label: "Bu oy", value: "48", sub: "bron" },
            { label: "Dolb. %", value: "87%", sub: "to'ldirilgan" },
            { label: "Reyting", value: "4.9", sub: "★ o'rtacha" },
          ].map((s, i) => (
            <div key={i} className="px-3 py-3 text-center">
              <p className="text-white font-bold text-[17px] leading-tight">{s.value}</p>
              <p className="text-slate-muted text-[9px] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Today's schedule */}
        <div className="p-4">
          <p className="text-slate-muted text-[10px] uppercase tracking-[0.08em] font-semibold mb-3">Bugungi jadval</p>
          <div className="space-y-2">
            {[
              { time: "10:00–12:00", name: "Sardor J.", status: "confirmed" },
              { time: "14:00–16:00", name: "Azizbek T.", status: "confirmed" },
              { time: "18:00–20:00", name: "Bo'sh", status: "open" },
              { time: "20:00–22:00", name: "Jasur M.", status: "confirmed" },
            ].map((slot, i) => (
              <div
                key={i}
                className={`flex items-center justify-between rounded-xl px-3 py-2.5 ${
                  slot.status === "open"
                    ? "bg-brand-green/8 border border-brand-green/20"
                    : "bg-dark-700"
                }`}
              >
                <div>
                  <p className={`text-xs font-semibold ${slot.status === "open" ? "text-brand-green" : "text-white"}`}>
                    {slot.time}
                  </p>
                  <p className="text-slate-muted text-[10px] mt-0.5">{slot.name}</p>
                </div>
                {slot.status === "open" ? (
                  <span className="text-brand-green text-[9px] font-bold bg-brand-green/10 px-2 py-0.5 rounded-full">Bo&apos;sh</span>
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green/40" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* New booking notification */}
        <div className="mx-4 mb-4 p-3 bg-brand-green/10 border border-brand-green/25 rounded-xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1L8.5 5H13L9.5 7.5L11 11L7 8.5L3 11L4.5 7.5L1 5H5.5L7 1Z" fill="#00D46A" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-semibold">Yangi bron!</p>
            <p className="text-slate-muted text-[10px] mt-0.5">Bugun 18:00 — Eldor K.</p>
          </div>
          <span className="text-[9px] text-brand-green font-medium flex-shrink-0">Hozir</span>
        </div>
      </div>
    </div>
  );
}
