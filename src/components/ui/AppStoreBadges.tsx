"use client";

import { siteConfig } from "@/lib/siteConfig";

interface AppStoreBadgesProps {
  layout?: "row" | "col";
  className?: string;
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

function AppStoreBadge() {
  return (
    <a
      href={siteConfig.appStore}
      aria-label="Download on the App Store"
      className="inline-flex items-center gap-3 bg-black border border-white/20 rounded-xl px-4 h-[52px] hover:bg-white/10 transition-colors duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 select-none"
    >
      {/* Official Apple logo */}
      <svg width="22" height="27" viewBox="0 0 814 1000" fill="white" aria-hidden="true" className="flex-shrink-0">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 267.9-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.5-49 191.3-49 30.8 0 108.2 2.6 168.6 71.4zm-174.5-81.6c-8.4-41.9-24.3-85.4-57.8-119.5-29.6-30.8-76-55.4-124-55.4-1.9 0-3.9 0-5.8.6 1.9 43.8 18.5 87.4 50.2 120.9 29.6 31.4 75.4 57.8 137.4 53.4z"/>
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-white/70 text-[10px] font-medium tracking-wide">Download on the</span>
        <span className="text-white text-[16px] font-semibold tracking-tight mt-0.5">App Store</span>
      </span>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href={siteConfig.googlePlay}
      aria-label="Get it on Google Play"
      className="inline-flex items-center gap-3 bg-black border border-white/20 rounded-xl px-4 h-[52px] hover:bg-white/10 transition-colors duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 select-none"
    >
      {/* Official Google Play icon */}
      <svg width="20" height="22" viewBox="0 0 512 512" aria-hidden="true" className="flex-shrink-0">
        <path fill="#4285F4" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"/>
        <path fill="#34A853" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"/>
        <path fill="#FBBC04" d="M472.1 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.9 17.1-33.7-.1-43.9l-1.1 4.7z"/>
        <path fill="#EA4335" d="M47 480.5c13 6.8 29.5 6.2 42.5-1.6l255.2-147-60.2-60.2L47 480.5z"/>
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-white/70 text-[10px] font-medium tracking-wide uppercase">Get it on</span>
        <span className="text-white text-[16px] font-semibold tracking-tight mt-0.5">Google Play</span>
      </span>
    </a>
  );
}

export default function AppStoreBadges({
  layout = "row",
  className = "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  theme: _theme,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size: _size,
}: AppStoreBadgesProps) {
  const wrapperLayout =
    layout === "col" ? "flex flex-col gap-2.5" : "flex flex-wrap gap-3";

  return (
    <div className={`${wrapperLayout} ${className}`}>
      <AppStoreBadge />
      <GooglePlayBadge />
    </div>
  );
}
