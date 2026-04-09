"use client";

import { useLanguage } from "@/context/LanguageContext";
import Badge from "@/components/ui/Badge";

/* ── Realistic SVG avatar faces ─────────────────────────────────────── */

function AvatarJasur() {
  // Male, warm brown skin, dark short hair
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill="#B5723E"/>
      {/* Shirt */}
      <path d="M5 28C5 23.5 8.5 21.5 14 21.5C19.5 21.5 23 23.5 23 28Z" fill="#1D3557"/>
      {/* Face */}
      <ellipse cx="14" cy="15" rx="6" ry="7" fill="#CD8A4E"/>
      {/* Hair — short dark */}
      <path d="M8 15C8 9.48 10.69 6 14 6C17.31 6 20 9.48 20 15C19 12.5 16.5 10.5 14 10.5C11.5 10.5 9 12.5 8 15Z" fill="#1A0D06"/>
      {/* Eyes */}
      <ellipse cx="11.5" cy="14" rx="1.1" ry="1.1" fill="#1A0D06"/>
      <ellipse cx="16.5" cy="14" rx="1.1" ry="1.1" fill="#1A0D06"/>
      {/* Smile */}
      <path d="M11.5 18 Q14 20 16.5 18" stroke="#8B4C1E" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function AvatarOlim() {
  // Male, medium skin, slight beard
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill="#7E5235"/>
      {/* Shirt */}
      <path d="M5 28C5 23.5 8.5 21.5 14 21.5C19.5 21.5 23 23.5 23 28Z" fill="#2D6A4F"/>
      {/* Face */}
      <ellipse cx="14" cy="15" rx="5.8" ry="7" fill="#C48240"/>
      {/* Hair — slightly longer */}
      <path d="M8.2 14C8.2 8.8 10.9 5.5 14 5.5C17.1 5.5 19.8 8.8 19.8 14C19 11 16.8 9 14 9C11.2 9 9 11 8.2 14Z" fill="#140B04"/>
      {/* Slight temple/sideburn */}
      <path d="M8.2 14C8 15.5 8 17 8.5 18C8.8 16 8.5 14.5 8.2 14Z" fill="#140B04"/>
      <path d="M19.8 14C20 15.5 20 17 19.5 18C19.2 16 19.5 14.5 19.8 14Z" fill="#140B04"/>
      {/* Eyes */}
      <ellipse cx="11.5" cy="13.5" rx="1.1" ry="1.1" fill="#140B04"/>
      <ellipse cx="16.5" cy="13.5" rx="1.1" ry="1.1" fill="#140B04"/>
      {/* Subtle beard shadow */}
      <path d="M10 18.5 Q14 21 18 18.5" stroke="#8B5A2B" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6"/>
      {/* Smile */}
      <path d="M11.5 17.5 Q14 19.5 16.5 17.5" stroke="#7A3E14" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function AvatarAziz() {
  // Male, lighter complexion, dark hair, clean-cut
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill="#A0693A"/>
      {/* Shirt */}
      <path d="M5 28C5 23.5 8.5 21.5 14 21.5C19.5 21.5 23 23.5 23 28Z" fill="#6B2D5E"/>
      {/* Face */}
      <ellipse cx="14" cy="15" rx="6" ry="7" fill="#E09A5A"/>
      {/* Hair — neat, dark */}
      <path d="M8 14C8 8.6 10.7 5.5 14 5.5C17.3 5.5 20 8.6 20 14C19.2 11.5 17 9.5 14 9.5C11 9.5 8.8 11.5 8 14Z" fill="#150C05"/>
      {/* Eyes */}
      <ellipse cx="11.5" cy="14" rx="1.1" ry="1.1" fill="#150C05"/>
      <ellipse cx="16.5" cy="14" rx="1.1" ry="1.1" fill="#150C05"/>
      {/* Smile — more expressive */}
      <path d="M11 18 Q14 20.5 17 18" stroke="#8B4A1E" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

/* ── Phone mockup user avatar ───────────────────────────────────────── */

function MiniAvatar() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill="#2D6A4F"/>
      <path d="M4 22C4 18.5 6.8 17 11 17C15.2 17 18 18.5 18 22Z" fill="#1B4332"/>
      <ellipse cx="11" cy="11.5" rx="4.5" ry="5.5" fill="#52B788"/>
      <path d="M6.5 11C6.5 7.2 8.5 5 11 5C13.5 5 15.5 7.2 15.5 11C14.8 9.5 13 8 11 8C9 8 7.2 9.5 6.5 11Z" fill="#1B4332"/>
      <ellipse cx="9.2" cy="10.8" rx="0.9" ry="0.9" fill="#1B4332"/>
      <ellipse cx="12.8" cy="10.8" rx="0.9" ry="0.9" fill="#1B4332"/>
    </svg>
  );
}

/* ── Realistic phone mockup ─────────────────────────────────────────── */

function PhoneMockup() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full max-w-sm mx-auto lg:max-w-none lg:mx-0">
      {/* Multi-layer glow — enhanced */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-brand-green/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-brand-green/16 rounded-full blur-[50px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-brand-green/22 rounded-full blur-[20px]" />
      </div>

      {/* Phone frame */}
      <div className="relative bg-white rounded-[2.2rem] ring-1 ring-white/[0.07] border border-gray-200/80 shadow-[0_40px_100px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden w-full max-w-[290px] mx-auto lg:w-[270px]">

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2.5">
          <div className="flex items-center gap-1.5">
            <svg width="8" height="10" viewBox="0 0 9 11" fill="none" aria-hidden="true">
              <path d="M4.5 0C2.57 0 1 1.57 1 3.5C1 6.13 4.5 10.5 4.5 10.5C4.5 10.5 8 6.13 8 3.5C8 1.57 6.43 0 4.5 0ZM4.5 4.75C3.81 4.75 3.25 4.19 3.25 3.5C3.25 2.81 3.81 2.25 4.5 2.25C5.19 2.25 5.75 2.81 5.75 3.5C5.75 4.19 5.19 4.75 4.5 4.75Z" fill="#e11d48"/>
            </svg>
            <span className="text-[10px] text-gray-400 font-medium tracking-[-0.01em]">Toshkent</span>
          </div>
          <div className="w-[22px] h-[22px] rounded-full overflow-hidden ring-[1.5px] ring-brand-green/40">
            <MiniAvatar />
          </div>
        </div>

        {/* Heading */}
        <div className="px-4 pb-1.5">
          <h3 className="text-[17px] font-black text-gray-900 tracking-[-0.025em] leading-tight">
            Maydon toping
          </h3>
          <p className="text-[11px] text-gray-400 mt-0.5">Toshkentdagi eng yaxshi maydonlar</p>
        </div>

        {/* Search bar */}
        <div className="px-4 pb-2.5">
          <div className="bg-gray-100 rounded-xl px-3 py-2.5 flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="5.5" stroke="#9ca3af" strokeWidth="2"/>
              <path d="M14 14L17.5 17.5" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-gray-400 text-[11px] tracking-[-0.01em]">Maydon qidirish...</span>
          </div>
        </div>

        {/* Filter chips */}
        <div className="px-4 pb-3 flex gap-2 overflow-hidden">
          <span className="bg-gray-900 text-white text-[10.5px] font-semibold px-3 py-1.5 rounded-full flex-shrink-0 flex items-center gap-1 shadow-sm">
            <svg width="8" height="8" viewBox="0 0 16 16" fill="white" aria-hidden="true">
              <circle cx="8" cy="8" r="5.5" stroke="white" strokeWidth="1.8" fill="none"/>
              <path d="M8 4v8M4 8h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Hammasi
          </span>
          <span className="bg-white border border-gray-200 text-gray-600 text-[10.5px] font-medium px-3 py-1.5 rounded-full flex-shrink-0">Futbol</span>
          <span className="bg-white border border-gray-200 text-gray-600 text-[10.5px] font-medium px-3 py-1.5 rounded-full flex-shrink-0">Futsal</span>
        </div>

        {/* Popular label */}
        <div className="px-4 mb-2 flex items-center gap-1.5">
          <span className="text-gray-900 text-[12px] font-bold tracking-[-0.02em]">Mashhur maydonlar</span>
          <span className="text-gray-400 text-[11px] font-medium">· 12</span>
        </div>

        {/* Field card — photorealistic */}
        <div className="mx-4 mb-3 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          {/* Photorealistic football field */}
          <div className="h-[106px] relative overflow-hidden">
            {/* Base grass */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, #1a6b0e 0%, #217a13 18%, #1c6e0e 36%, #24841a 54%, #1c6e0e 72%, #217a13 90%, #1a6b0e 100%)",
              }}
            />
            {/* Mowing stripes */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(0,0,0,0.065) 0px, rgba(0,0,0,0.065) 12px, rgba(255,255,255,0.022) 12px, rgba(255,255,255,0.022) 24px)",
              }}
            />
            {/* Directional sunlight */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 120% 80% at 30% 0%, rgba(255,255,190,0.14) 0%, transparent 65%)",
              }}
            />
            {/* Shadow edge bottom */}
            <div
              className="absolute bottom-0 inset-x-0 h-8"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.18), transparent)" }}
            />
            {/* Field markings SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 200 106"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <rect x="5" y="5" width="190" height="96" stroke="rgba(255,255,255,0.88)" strokeWidth="1.4" fill="none" rx="1"/>
              <line x1="100" y1="5" x2="100" y2="101" stroke="rgba(255,255,255,0.88)" strokeWidth="1"/>
              <circle cx="100" cy="53" r="17" stroke="rgba(255,255,255,0.88)" strokeWidth="1" fill="none"/>
              <circle cx="100" cy="53" r="1.5" fill="rgba(255,255,255,0.9)"/>
              <rect x="5" y="29" width="25" height="48" stroke="rgba(255,255,255,0.88)" strokeWidth="1" fill="none"/>
              <rect x="5" y="39" width="9" height="28" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" fill="none"/>
              <rect x="170" y="29" width="25" height="48" stroke="rgba(255,255,255,0.88)" strokeWidth="1" fill="none"/>
              <rect x="186" y="39" width="9" height="28" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" fill="none"/>
              <circle cx="21" cy="53" r="1.2" fill="rgba(255,255,255,0.75)"/>
              <circle cx="179" cy="53" r="1.2" fill="rgba(255,255,255,0.75)"/>
              <path d="M5 5 Q5 12 12 12" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" fill="none"/>
              <path d="M195 5 Q195 12 188 12" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" fill="none"/>
              <path d="M5 101 Q5 94 12 94" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" fill="none"/>
              <path d="M195 101 Q195 94 188 94" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" fill="none"/>
            </svg>
            {/* Rating badge */}
            <div className="absolute top-2 left-2 bg-amber-400 rounded-full px-2 py-0.5 flex items-center gap-1 shadow-sm">
              <svg width="8" height="8" viewBox="0 0 10 10" fill="white" aria-hidden="true">
                <path d="M5 0.5L6.12 3.56H9.27L6.76 5.44L7.76 8.5L5 6.75L2.24 8.5L3.24 5.44L0.73 3.56H3.88L5 0.5Z"/>
              </svg>
              <span className="text-white text-[10px] font-bold">4.9</span>
            </div>
            {/* Open badge */}
            <div className="absolute bottom-2 left-2 bg-brand-green rounded-full px-2 py-0.5 flex items-center gap-1 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"/>
              <span className="text-white text-[10px] font-semibold">Bo&apos;sh</span>
            </div>
            {/* Favourite */}
            <div className="absolute top-2 right-2 w-[22px] h-[22px] bg-black/25 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg width="10" height="9" viewBox="0 0 12 11" fill="none" aria-hidden="true">
                <path d="M6 9.5C6 9.5 1 6.5 1 3.5C1 2.12 2.12 1 3.5 1C4.38 1 5.16 1.48 5.6 2.2L6 2.8L6.4 2.2C6.84 1.48 7.62 1 8.5 1C9.88 1 11 2.12 11 3.5C11 6.5 6 9.5 6 9.5Z" stroke="white" strokeWidth="1.2" fill="rgba(255,255,255,0.15)"/>
              </svg>
            </div>
          </div>

          {/* Card body */}
          <div className="bg-white px-3 py-2.5">
            <p className="text-gray-900 text-[13px] font-bold leading-tight tracking-[-0.02em]">Spartak Arena Pro</p>
            <div className="flex items-center justify-between mt-1.5">
              <p className="text-[12px]">
                <span className="text-brand-green font-bold">180 000 </span>
                <span className="text-gray-400 font-normal text-[11px]">so&apos;m/soat</span>
              </p>
              <p className="text-gray-400 text-[11px] flex items-center gap-0.5">
                <svg width="8" height="9" viewBox="0 0 9 11" fill="none" aria-hidden="true">
                  <path d="M4.5 0C2.57 0 1 1.57 1 3.5C1 6.13 4.5 10.5 4.5 10.5C4.5 10.5 8 6.13 8 3.5C8 1.57 6.43 0 4.5 0ZM4.5 4.75C3.81 4.75 3.25 4.19 3.25 3.5C3.25 2.81 3.81 2.25 4.5 2.25C5.19 2.25 5.75 2.81 5.75 3.5C5.75 4.19 5.19 4.75 4.5 4.75Z" fill="#9ca3af"/>
                </svg>
                1.8 km
              </p>
            </div>
          </div>
        </div>

        {/* Second card peek */}
        <div className="mx-4 mb-4 bg-gray-50/80 rounded-2xl border border-gray-100 h-9 flex items-center px-3 gap-2 opacity-30">
          <div className="w-2.5 h-2.5 rounded-sm bg-green-300 flex-shrink-0"/>
          <div className="h-1.5 w-20 bg-gray-300 rounded-full"/>
          <div className="ml-auto h-1.5 w-14 bg-gray-300 rounded-full"/>
        </div>
      </div>

      {/* Floating: booked stat */}
      <div className="absolute -left-6 top-16 hidden lg:block animate-[fade-up_0.5s_0.8s_both]">
        <div className="bg-[#0D1117]/95 backdrop-blur-sm border border-white/[0.1] rounded-xl px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <p className="text-brand-green text-[15px] font-black leading-tight tracking-[-0.02em]">+1,247</p>
          <p className="text-slate-muted text-[10px] font-medium tracking-[0.05em] uppercase mt-0.5">
            {t.hero.statsBooked}
          </p>
        </div>
      </div>

      {/* Floating: booking confirmed */}
      <div className="absolute -right-5 bottom-24 hidden lg:block animate-[fade-up_0.5s_1s_both]">
        <div className="bg-[#0D1117]/95 backdrop-blur-sm border border-white/[0.1] rounded-xl px-3.5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] max-w-[162px]">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 5L4 7L8 3" stroke="#00D46A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-white text-[12px] font-bold tracking-[-0.02em]">Bron tasdiqlandi</p>
          </div>
          <p className="text-slate-muted text-[11px] font-medium pl-7 tracking-[-0.01em]">Bugun, 18:00 — 20:00</p>
        </div>
      </div>
    </div>
  );
}

/* ── Download badges — glass treatment ──────────────────────────────── */

function DownloadBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      {/* App Store */}
      <a
        href="#"
        aria-label="Download on the App Store"
        className="group inline-flex items-center gap-3 bg-white/[0.06] backdrop-blur-sm rounded-[12px] border border-white/[0.14] px-4 h-[52px] hover:bg-white/[0.11] hover:border-white/[0.22] transition-all duration-200 active:scale-[0.97]"
      >
        <svg width="22" height="27" viewBox="0 0 814 1000" fill="white" aria-hidden="true">
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 267.9-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.5-49 191.3-49 30.8 0 108.2 2.6 168.6 71.4zm-174.5-81.6c-8.4-41.9-24.3-85.4-57.8-119.5-29.6-30.8-76-55.4-124-55.4-1.9 0-3.9 0-5.8.6 1.9 43.8 18.5 87.4 50.2 120.9 29.6 31.4 75.4 57.8 137.4 53.4z"/>
        </svg>
        <span>
          <p className="text-white/50 text-[9px] font-medium leading-none mb-[3px] uppercase tracking-[0.05em]">Download on the</p>
          <p className="text-white text-[15px] font-semibold leading-tight tracking-[-0.02em]">App Store</p>
        </span>
      </a>

      {/* Google Play */}
      <a
        href="#"
        aria-label="Get it on Google Play"
        className="group inline-flex items-center gap-3 bg-white/[0.06] backdrop-blur-sm rounded-[12px] border border-white/[0.14] px-4 h-[52px] hover:bg-white/[0.11] hover:border-white/[0.22] transition-all duration-200 active:scale-[0.97]"
      >
        <svg width="20" height="22" viewBox="0 0 512 512" fill="none" aria-hidden="true">
          <path fill="#4285F4" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"/>
          <path fill="#34A853" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"/>
          <path fill="#FBBC04" d="M472.1 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.9 17.1-33.7-.1-43.9l-1.1 4.7z"/>
          <path fill="#EA4335" d="M47 480.5c13 6.8 29.5 6.2 42.5-1.6l255.2-147-60.2-60.2L47 480.5z"/>
        </svg>
        <span>
          <p className="text-white/50 text-[9px] font-medium leading-none mb-[3px] uppercase tracking-[0.05em]">Get it on</p>
          <p className="text-white text-[15px] font-semibold leading-tight tracking-[-0.02em]">Google Play</p>
        </span>
      </a>
    </div>
  );
}

/* ── Main Hero ───────────────────────────────────────────────────────── */

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="noise-overlay relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#080B12" }}
    >
      {/* ── Background: CSS-only stadium atmosphere ───────────── */}
      <div className="absolute inset-0 -z-10">
        {/* Stadium floodlight — top left */}
        <div
          className="absolute top-0 left-0 w-[800px] h-[700px]"
          style={{
            background:
              "radial-gradient(ellipse at 15% 0%, rgba(0,212,106,0.08) 0%, transparent 55%)",
          }}
        />
        {/* Stadium floodlight — top right */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(ellipse at 85% 0%, rgba(0,212,106,0.05) 0%, transparent 55%)",
          }}
        />
        {/* Bottom depth fade */}
        <div
          className="absolute bottom-0 inset-x-0 h-48"
          style={{
            background: "linear-gradient(to top, rgba(8,11,18,0.8), transparent)",
          }}
        />

        {/* SVG pitch geometry overlay */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          style={{ opacity: 0.028 }}
        >
          {/* Center circle */}
          <circle cx="720" cy="400" r="130" stroke="white" strokeWidth="1.5" fill="none"/>
          <circle cx="720" cy="400" r="4" fill="white"/>
          {/* Center line */}
          <line x1="720" y1="70" x2="720" y2="730" stroke="white" strokeWidth="1.5"/>
          {/* Outer boundary */}
          <rect x="70" y="70" width="1300" height="660" stroke="white" strokeWidth="1.5" fill="none"/>
          {/* Horizontal mowing stripes */}
          <line x1="70" y1="178" x2="1370" y2="178" stroke="white" strokeWidth="0.8" opacity="0.5"/>
          <line x1="70" y1="286" x2="1370" y2="286" stroke="white" strokeWidth="0.8" opacity="0.5"/>
          <line x1="70" y1="514" x2="1370" y2="514" stroke="white" strokeWidth="0.8" opacity="0.5"/>
          <line x1="70" y1="622" x2="1370" y2="622" stroke="white" strokeWidth="0.8" opacity="0.5"/>
          {/* Left penalty area */}
          <rect x="70" y="258" width="168" height="284" stroke="white" strokeWidth="1" fill="none"/>
          {/* Right penalty area */}
          <rect x="1202" y="258" width="168" height="284" stroke="white" strokeWidth="1" fill="none"/>
        </svg>

        {/* Floating particles */}
        <div className="particle w-1.5 h-1.5 bg-brand-green/30" style={{ left: "12%", bottom: "22%", animationDuration: "9s", animationDelay: "0s" }}/>
        <div className="particle w-1 h-1 bg-brand-green/20" style={{ left: "70%", bottom: "38%", animationDuration: "12s", animationDelay: "2.5s" }}/>
        <div className="particle w-2 h-2 bg-brand-green/12" style={{ left: "44%", bottom: "12%", animationDuration: "15s", animationDelay: "5s" }}/>
        <div className="particle w-1 h-1 bg-white/12" style={{ left: "86%", bottom: "58%", animationDuration: "10s", animationDelay: "1s" }}/>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 pt-20 pb-16 lg:pt-28 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-center">

          {/* ── Left: copy ─────────────────────────────────── */}
          <div className="text-center lg:text-left">

            {/* Badge with gradient border pill + left accent line */}
            <div className="hero-enter mb-7 flex items-center gap-3 justify-center lg:justify-start">
              {/* Left accent line — editorial marker */}
              <div
                className="hidden lg:block w-px h-12 flex-shrink-0"
                style={{
                  background: "linear-gradient(to bottom, #00D46A, rgba(0,212,106,0))",
                }}
              />
              {/* Gradient border wrapper */}
              <div
                className="p-px rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,212,106,0.5) 0%, rgba(0,212,106,0.08) 60%, transparent 100%)",
                }}
              >
                <Badge>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"/>
                  {t.hero.badge}
                </Badge>
              </div>
            </div>

            {/* Editorial 3-line headline */}
            <h1 className="hero-enter hero-enter-delay-1 mb-6 text-center lg:text-left">
              <span
                className="block font-display font-medium text-slate-light tracking-[-0.01em] leading-snug"
                style={{ fontSize: "clamp(19px, 2.8vw, 28px)" }}
              >
                Futbol maydonini
              </span>
              <span
                className="block font-display font-black tracking-[-0.045em] leading-[0.9]"
                style={{
                  fontSize: "clamp(52px, 8.5vw, 84px)",
                  background:
                    "linear-gradient(135deg, #00D46A 0%, #00FF7F 45%, #5AE89A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                30 soniyada
              </span>
              <span
                className="block font-display font-semibold text-white tracking-[-0.028em] leading-tight"
                style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
              >
                bron qiling
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="hero-enter hero-enter-delay-2 font-medium text-slate-light leading-[1.7] tracking-[-0.01em] mb-8 max-w-[440px] mx-auto lg:mx-0"
              style={{ fontSize: "clamp(14px, 1.4vw, 16px)" }}
            >
              {t.hero.subheadline}
            </p>

            {/* Download CTAs */}
            <div className="hero-enter hero-enter-delay-3">
              <div className="flex justify-center lg:justify-start">
                <DownloadBadges />
              </div>

              {/* Micro-trust row */}
              <div className="mt-3.5 flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-1.5 text-[12px] font-medium text-slate-muted">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1L8.5 5H13L9.5 7.5L11 11.5L7 9L3 11.5L4.5 7.5L1 5H5.5L7 1Z" fill="#00D46A" opacity="0.9"/>
                  </svg>
                  {t.download.microcopy}
                </div>
                <span className="text-slate-muted/40">·</span>
                <span className="text-[12px] font-medium text-slate-muted">{t.download.availableOn}</span>
              </div>

              {/* Scroll link */}
              <button
                onClick={() => scrollTo("how-it-works")}
                className="mt-4 mx-auto lg:mx-0 flex items-center gap-1.5 text-[13px] font-medium text-slate-muted hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
              >
                {t.hero.ctaSecondary}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Social proof */}
            <div className="hero-enter hero-enter-delay-4 mt-9 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2.5">
                <div className="w-9 h-9 rounded-full ring-[2px] ring-[#080B12] overflow-hidden">
                  <AvatarOlim/>
                </div>
                <div className="w-9 h-9 rounded-full ring-[2px] ring-[#080B12] overflow-hidden">
                  <AvatarJasur/>
                </div>
                <div className="w-9 h-9 rounded-full ring-[2px] ring-[#080B12] overflow-hidden">
                  <AvatarAziz/>
                </div>
              </div>
              <p className="text-[13px] font-medium text-slate-muted leading-snug">
                <span className="text-white font-bold">3,412</span>{" "}
                {t.hero.socialProof}
              </p>
            </div>

            {/* Stats metric strip */}
            <div className="hero-enter hero-enter-delay-5 mt-7 pt-6 border-t border-white/[0.08] flex items-stretch gap-0 justify-center lg:justify-start">
              <MetricBlock value="1,247" label={t.hero.statsBooked} green />
              <div className="w-px bg-white/[0.07] mx-5 flex-shrink-0"/>
              <MetricBlock value="94+" label={t.hero.statsStadiums} />
              <div className="w-px bg-white/[0.07] mx-5 flex-shrink-0"/>
              <MetricBlock value="4.8★" label={t.hero.statsRating} green />
            </div>

          </div>

          {/* ── Right: phone mockup ─────────────────────────── */}
          <div className="flex justify-center lg:justify-end hero-enter hero-enter-delay-3">
            {/* Subtle dynamic tilt */}
            <div style={{ transform: "rotate(2deg)" }}>
              <PhoneMockup />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Metric block for stats strip ───────────────────────────────────── */

function MetricBlock({
  value,
  label,
  green = false,
}: {
  value: string;
  label: string;
  green?: boolean;
}) {
  return (
    <div
      className="pl-3 border-l-2"
      style={{
        borderColor: green ? "#00D46A" : "rgba(255,255,255,0.13)",
      }}
    >
      <p
        className={`text-[20px] font-black tracking-[-0.03em] leading-tight ${
          green ? "text-brand-green" : "text-white"
        }`}
      >
        {value}
      </p>
      <p className="text-[10px] font-medium text-slate-muted tracking-[0.06em] uppercase mt-0.5">
        {label}
      </p>
    </div>
  );
}
