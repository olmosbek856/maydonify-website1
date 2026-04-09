"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FinalCTA() {
  const { t } = useLanguage();
  const ref = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="download" className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background: stadium floodlights at night */}
      <div className="absolute inset-0 -z-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1600&h=700&fit=crop&crop=center&q=70&auto=format"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay layers */}
      <div className="absolute inset-0 -z-10">
        {/* Dark gradient — heavier at edges, lighter in center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,15,22,0.85) 0%, rgba(12,15,22,0.72) 40%, rgba(12,15,22,0.80) 70%, rgba(12,15,22,0.92) 100%)",
          }}
        />
        {/* Brand green glow at centre */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-green/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-3xl mx-auto px-5 sm:px-10 lg:px-16 text-center">
        {/* Top accent line */}
        <div className="flex items-center justify-center gap-3 mb-6 reveal">
          <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-brand-green/60" />
          <div className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_8px_rgba(0,212,106,0.8)]" />
          <div className="h-px flex-1 max-w-12 bg-gradient-to-l from-transparent to-brand-green/60" />
        </div>

        {/* Headline */}
        <h2 className="font-display text-[36px] sm:text-[50px] lg:text-[60px] font-black text-white tracking-[-0.035em] leading-[1.05] mb-4 reveal delay-100">
          {t.finalCta.headline}
        </h2>

        <p className="text-[17px] lg:text-[20px] font-medium text-slate-light leading-[1.55] tracking-[-0.01em] mb-4 max-w-md mx-auto reveal delay-200">
          {t.finalCta.subheadline}
        </p>

        {/* Social proof row */}
        <div className="flex items-center justify-center gap-3 mb-10 reveal delay-300">
          {/* Avatars */}
          <div className="flex -space-x-2">
            {[
              { bg: "#B5723E", shirt: "#1D3557" },
              { bg: "#7E5235", shirt: "#2D6A4F" },
              { bg: "#A0693A", shirt: "#6B2D5E" },
            ].map((c, i) => (
              <svg key={i} width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="rounded-full ring-2 ring-dark-900">
                <circle cx="14" cy="14" r="14" fill={c.bg}/>
                <path d="M5 28C5 23.5 8.5 21.5 14 21.5C19.5 21.5 23 23.5 23 28Z" fill={c.shirt}/>
                <ellipse cx="14" cy="15" rx="6" ry="7" fill="#CD8A4E"/>
                <path d="M8 15C8 9.48 10.69 6 14 6C17.31 6 20 9.48 20 15C19 12.5 16.5 10.5 14 10.5C11.5 10.5 9 12.5 8 15Z" fill="#1A0D06"/>
                <ellipse cx="11.5" cy="14" rx="1" ry="1" fill="#1A0D06"/>
                <ellipse cx="16.5" cy="14" rx="1" ry="1" fill="#1A0D06"/>
              </svg>
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-0.5 mb-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill="#F59E0B" aria-hidden="true">
                  <path d="M6 1l1.39 2.81L10.5 4.27l-2.25 2.19.53 3.09L6 8.02l-2.78 1.46.53-3.09L1.5 4.27l3.11-.46L6 1z"/>
                </svg>
              ))}
            </div>
            <p className="text-[12px] font-medium text-slate-light">
              <span className="text-white font-bold">3,412</span> o&apos;yinchi ishlatmoqda
            </p>
          </div>
        </div>

        {/* Download badges — the main CTA */}
        <div className="flex flex-col items-center gap-4 reveal delay-300">
          <AppStoreBadges theme="dark" size="md" className="justify-center" />

          {/* Microcopy */}
          <p className="text-[13px] font-medium text-slate-muted">
            {t.download.microcopy}
            <span className="mx-2 opacity-40">·</span>
            {t.download.availableOn}
          </p>
        </div>

        {/* Divider */}
        <div className="mt-10 flex items-center gap-4 reveal delay-400">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-slate-muted text-[12px] font-medium">yoki</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Owner secondary CTA */}
        <p className="mt-5 text-[14px] font-medium text-slate-muted reveal delay-400">
          {t.finalCta.secondary}{" "}
          <Link
            href="/owners"
            className="text-brand-green hover:text-brand-green-dark font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded underline underline-offset-2"
          >
            {t.finalCta.secondaryLink}
          </Link>
        </p>
      </div>
    </section>
  );
}
