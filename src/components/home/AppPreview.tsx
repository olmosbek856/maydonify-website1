"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FEATURE_ICONS = [
  <svg key="1" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 3V5M10 15V17M3 10H5M15 10H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  <svg key="2" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M3 5h14M3 10h14M3 15h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="16" cy="15" r="3" stroke="currentColor" strokeWidth="1.8" />
  </svg>,
  <svg key="3" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 8h14M7 2v3M13 2v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M7 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="4" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M8 4H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M10 4V2M7 3.5l3 .5 3-.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
];

const TIME_SLOTS = [
  { time: "09:00 – 10:00", state: "available" },
  { time: "10:00 – 11:00", state: "available" },
  { time: "11:00 – 12:00", state: "booked" },
  { time: "12:00 – 13:00", state: "available" },
  { time: "13:00 – 14:00", state: "available" },
  { time: "14:00 – 15:00", state: "booked" },
  { time: "15:00 – 16:00", state: "available" },
  { time: "16:00 – 17:00", state: "available" },
  { time: "17:00 – 18:00", state: "available" },
  { time: "18:00 – 19:00", state: "booked" },
  { time: "19:00 – 20:00", state: "available" },
  { time: "20:00 – 21:00", state: "available" },
  { time: "21:00 – 22:00", state: "selected" },
  { time: "22:00 – 23:00", state: "available" },
];

function AppMockupDesktop() {
  return (
    <div className="relative w-full max-w-xl mx-auto" style={{ minHeight: "500px" }}>
      {/* Glow */}
      <div className="absolute -inset-4 bg-brand-green/5 rounded-3xl blur-2xl pointer-events-none" />

      {/* Phone A — Time Slot Selection (left, behind) */}
      <div
        className="absolute left-0 top-6 w-[200px] bg-[#f5f5f5] rounded-[1.6rem] border border-gray-200 shadow-xl overflow-hidden origin-bottom-left z-10"
        style={{ transform: "rotate(-3deg) scale(0.95)" }}
      >
        {/* Header */}
        <div className="bg-white px-3 py-2.5 border-b border-gray-100 flex items-center justify-between">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8L10 13" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-gray-900 text-[11px] font-semibold">Vaqt tanlang</span>
          <span className="bg-brand-green text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">Bugun</span>
        </div>

        {/* Legend */}
        <div className="px-3 pt-2 pb-1 flex items-center gap-3">
          <span className="flex items-center gap-1 text-[9px] text-gray-500">
            <span className="w-2 h-2 rounded-full bg-brand-green inline-block" />Bo&apos;sh
          </span>
          <span className="flex items-center gap-1 text-[9px] text-gray-400">
            <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />Band
          </span>
          <span className="flex items-center gap-1 text-[9px] text-gray-900">
            <span className="w-2 h-2 rounded-full bg-gray-900 inline-block" />Tanlangan
          </span>
        </div>

        {/* Slot grid */}
        <div className="px-3 pb-2 grid grid-cols-2 gap-1">
          {TIME_SLOTS.map((slot) => (
            <div
              key={slot.time}
              className={`text-center text-[9px] py-1.5 rounded-lg font-medium ${
                slot.state === "selected"
                  ? "bg-brand-green text-white"
                  : slot.state === "booked"
                  ? "bg-gray-100 text-gray-300"
                  : "bg-white border border-gray-200 text-gray-700"
              }`}
            >
              {slot.time}
            </div>
          ))}
        </div>

        {/* Summary card */}
        <div className="mx-3 mb-2 bg-green-50 border border-brand-green/20 rounded-xl p-2">
          <p className="text-brand-green text-[9px] font-semibold mb-1.5">&#10003; Vaqt tanlandi</p>
          {[
            ["Sana", "Bugun"],
            ["Vaqt", "21:00 – 22:00"],
            ["Davomiylik", "1 soat"],
            ["Jami", "180 000 so'm"],
          ].map(([label, val]) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-gray-400 text-[8px]">{label}</span>
              <span className="text-gray-900 text-[8px] font-medium">{val}</span>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="bg-white border-t border-gray-100 px-3 py-2 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-[8px]">Jami</p>
            <p className="text-gray-900 text-[11px] font-bold">180 000 so&apos;m</p>
          </div>
          <button className="bg-brand-green text-white text-[9px] font-semibold px-3 py-1.5 rounded-xl">
            Davom →
          </button>
        </div>
      </div>

      {/* Phone B — Booking Confirmed (right, front) */}
      <div
        className="absolute right-0 top-0 w-[200px] bg-white rounded-[1.6rem] border border-gray-200 shadow-2xl overflow-hidden z-20"
        style={{ transform: "rotate(3deg) translateY(16px)" }}
      >
        {/* Green header area */}
        <div className="bg-gradient-to-b from-green-50 to-white px-3 pt-6 pb-3 flex flex-col items-center">
          <div className="w-11 h-11 rounded-full bg-brand-green flex items-center justify-center mb-2 shadow-lg shadow-brand-green/30">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10L8 14L16 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-gray-900 text-[13px] font-black text-center leading-tight">Bron tasdiqlandi!</p>
          <p className="text-gray-400 text-[9px] mt-0.5 text-center">Siz tayyor. Maydonga boring!</p>
        </div>

        {/* Dark booking card */}
        <div className="mx-3 mb-3 bg-[#1a1f2e] rounded-2xl p-3">
          {/* ID + status */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-gray-500 text-[8px] font-medium tracking-[0.06em] uppercase">Bron ID</p>
              <p className="text-white text-[11px] font-bold">#PL64464</p>
            </div>
            <span className="bg-brand-green/20 text-brand-green text-[8px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              TASDIQLANDI
            </span>
          </div>
          <div className="h-px bg-white/10 mb-2" />

          {/* Field */}
          <div className="flex items-start gap-1.5 mb-1.5">
            <svg width="10" height="10" viewBox="0 0 20 20" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
              <path d="M10 2C6.69 2 4 4.69 4 8C4 12.75 10 18 10 18S16 12.75 16 8C16 4.69 13.31 2 10 2ZM10 10.5C8.62 10.5 7.5 9.38 7.5 8S8.62 5.5 10 5.5 12.5 6.62 12.5 8 11.38 10.5 10 10.5Z" fill="#00D46A" />
            </svg>
            <div>
              <p className="text-gray-500 text-[8px]">Maydon</p>
              <p className="text-white text-[10px] font-semibold">Spartak Arena Pro</p>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-start gap-1.5 mb-2">
            <svg width="10" height="10" viewBox="0 0 20 20" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
              <rect x="3" y="4" width="14" height="13" rx="2" stroke="#00D46A" strokeWidth="1.8" />
              <path d="M3 8h14M7 2v3M13 2v3" stroke="#00D46A" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <div>
              <p className="text-gray-500 text-[8px]">Sana va vaqt</p>
              <p className="text-white text-[10px] font-semibold">Bugun · 21:00–22:00</p>
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-[8px]">Jami to&apos;lov</p>
            <p className="text-brand-green text-[13px] font-bold">180 000 so&apos;m</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="px-3 pb-5 space-y-1.5">
          <button className="w-full bg-[#1a1f2e] text-white text-[10px] font-semibold py-2 rounded-xl text-center">
            Bronlarim →
          </button>
          <button className="w-full border border-gray-200 text-gray-600 text-[10px] py-2 rounded-xl text-center">
            Kvitansiya yuklab olish
          </button>
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
    t.appPreview.feature1,
    t.appPreview.feature2,
    t.appPreview.feature3,
    t.appPreview.feature4,
  ];

  const FEATURE_DESCS = [
    "Toshkent bo'ylab maydonlarni xaritada toping va filtrlang",
    "Joylashuv, narx va reytingga qarab eng mos variantni tanlang",
    "Barcha bronlaringiz bir joyda — tarixi va holati ko'rinadi",
    "Bron tasdiqlanganda SMS-tasdiq bir daqiqada keladi",
  ];

  return (
    <SectionWrapper id="app-preview" theme="light">
      {/* Section header */}
      <div ref={headerRef} className="text-center mb-10">
        <Badge variant="light" className="mb-4 reveal">{t.appPreview.badge}</Badge>
        <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-dark-900 tracking-[-0.02em] leading-[1.2] mb-3 reveal delay-100">
          {t.appPreview.headline}
        </h2>
        <p className="text-[17px] font-medium text-slate-500 leading-[1.5] tracking-[-0.01em] max-w-xl mx-auto reveal delay-200">
          {t.appPreview.subheadline}
        </p>
      </div>

      {/* Booking flow stepper */}
      <div className="flex items-center justify-center gap-0 mb-12 overflow-x-auto pb-1 reveal delay-300">
        {[
          { label: "Maydon toping", done: false },
          { label: "Vaqt tanlang", done: false },
          { label: "To'lov va tasdiqlash", done: false },
          { label: "Maydonga boring", done: true },
        ].map((step, i, arr) => (
          <div key={i} className="flex items-center">
            <div className={`flex items-center gap-2 px-3 py-2 rounded-full text-[12px] font-semibold whitespace-nowrap ${
              step.done ? "bg-brand-green text-white" : "bg-gray-100 text-gray-600"
            }`}>
              {step.done ? (
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8l3.5 3.5L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <span className="w-4 h-4 rounded-full bg-gray-300 text-gray-600 text-[9px] font-bold flex items-center justify-center">{i + 1}</span>
              )}
              <span>{step.label}</span>
            </div>
            {i < arr.length - 1 && (
              <div className="w-6 h-px bg-gray-200 mx-1 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left: mockup + store badges directly below */}
        <div ref={leftRef} className="flex flex-col items-center reveal">
          <AppMockupDesktop />

          {/* App Store + Google Play */}
          <div className="mt-14 w-full">
            <p className="text-center text-[12px] font-semibold text-slate-400 uppercase tracking-[0.08em] mb-4">
              {t.download.footerLabel}
            </p>
            <div className="flex justify-center">
              <AppStoreBadges theme="light" size="md" layout="row" />
            </div>
            <p className="mt-3 text-center text-[12px] font-medium text-slate-400">
              {t.download.microcopy}
              <span className="mx-1.5 opacity-50">·</span>
              {t.download.availableOn}
            </p>
          </div>
        </div>

        {/* Right: feature list */}
        <div ref={rightRef}>
          <ul className="space-y-5">
            {features.map((f, i) => (
              <li key={i} className={`flex items-start gap-4 reveal delay-${[100, 200, 300, 400][i]}`}>
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green flex-shrink-0 mt-0.5">
                  {FEATURE_ICONS[i]}
                </div>
                <div>
                  <p className="text-dark-900 font-semibold text-[15px] leading-snug">{f}</p>
                  <p className="text-slate-400 text-[13px] font-medium mt-1 leading-relaxed">{FEATURE_DESCS[i]}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Social proof nudge — Uzbek only */}
          <div className="mt-10 p-5 rounded-2xl bg-gray-50 border border-gray-100 reveal delay-500">
            <div className="flex items-center gap-3 mb-2">
              {/* SVG mini-avatars */}
              <div className="flex -space-x-2">
                {/* Avatar 1 */}
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="rounded-full ring-2 ring-white">
                  <circle cx="14" cy="14" r="14" fill="#B5723E"/>
                  <path d="M5 28C5 23.5 8.5 21.5 14 21.5C19.5 21.5 23 23.5 23 28Z" fill="#1D3557"/>
                  <ellipse cx="14" cy="15" rx="6" ry="7" fill="#CD8A4E"/>
                  <path d="M8 15C8 9.48 10.69 6 14 6C17.31 6 20 9.48 20 15C19 12.5 16.5 10.5 14 10.5C11.5 10.5 9 12.5 8 15Z" fill="#1A0D06"/>
                  <ellipse cx="11.5" cy="14" rx="1.1" ry="1.1" fill="#1A0D06"/>
                  <ellipse cx="16.5" cy="14" rx="1.1" ry="1.1" fill="#1A0D06"/>
                </svg>
                {/* Avatar 2 */}
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="rounded-full ring-2 ring-white">
                  <circle cx="14" cy="14" r="14" fill="#7E5235"/>
                  <path d="M5 28C5 23.5 8.5 21.5 14 21.5C19.5 21.5 23 23.5 23 28Z" fill="#2D6A4F"/>
                  <ellipse cx="14" cy="15" rx="5.8" ry="7" fill="#C48240"/>
                  <path d="M8.2 14C8.2 8.8 10.9 5.5 14 5.5C17.1 5.5 19.8 8.8 19.8 14C19 11 16.8 9 14 9C11.2 9 9 11 8.2 14Z" fill="#140B04"/>
                  <ellipse cx="11.5" cy="13.5" rx="1.1" ry="1.1" fill="#140B04"/>
                  <ellipse cx="16.5" cy="13.5" rx="1.1" ry="1.1" fill="#140B04"/>
                </svg>
                {/* Avatar 3 */}
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="rounded-full ring-2 ring-white">
                  <circle cx="14" cy="14" r="14" fill="#A0693A"/>
                  <path d="M5 28C5 23.5 8.5 21.5 14 21.5C19.5 21.5 23 23.5 23 28Z" fill="#6B2D5E"/>
                  <ellipse cx="14" cy="15" rx="6" ry="7" fill="#E09A5A"/>
                  <path d="M8 14C8 8.6 10.7 5.5 14 5.5C17.3 5.5 20 8.6 20 14C19.2 11.5 17 9.5 14 9.5C11 9.5 8.8 11.5 8 14Z" fill="#150C05"/>
                  <ellipse cx="11.5" cy="14" rx="1.1" ry="1.1" fill="#150C05"/>
                  <ellipse cx="16.5" cy="14" rx="1.1" ry="1.1" fill="#150C05"/>
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-dark-900">
                3,412 ta o&apos;yinchi qo&apos;shilgan
              </span>
            </div>
            <p className="text-[13px] text-slate-500 leading-relaxed">
              Haqiqiy o&apos;yinchilar, haqiqiy maydonlar. Har bir bron bir daqiqada — hech qanday qo&apos;ng&apos;iroq, hech qanday kutish.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
