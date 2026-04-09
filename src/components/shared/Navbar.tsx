"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/lib/types";
import { cn } from "@/lib/utils";
import MaydonLogoMark from "@/components/ui/MaydonLogoMark";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

interface NavbarProps {
  variant?: "home" | "owners";
}

export default function Navbar({ variant = "home" }: NavbarProps) {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || menuOpen
          ? "bg-[#0C0F16]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded-lg"
          >
            <MaydonLogoMark size={42} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            {variant === "home" ? (
              <div className="flex items-center gap-0.5">
                <NavLink onClick={() => scrollTo("how-it-works")}>
                  {t.nav.howItWorks}
                </NavLink>
                <NavLink onClick={() => scrollTo("stadiums")}>
                  {t.nav.stadiums}
                </NavLink>
                <NavLink as="link" href="/owners">
                  {t.nav.forOwners}
                </NavLink>
                <NavLink onClick={() => scrollTo("faq")}>
                  {t.nav.faq}
                </NavLink>
              </div>
            ) : (
              <NavLink as="link" href="/">
                {t.owners.nav.backHome}
              </NavLink>
            )}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher language={language} setLanguage={setLanguage} />

            {/* Divider */}
            <div className="w-px h-5 bg-white/10" />

            {variant === "home" ? (
              <DownloadCTA onClick={() => scrollTo("download")} label={t.nav.cta} />
            ) : (
              <DownloadCTA onClick={() => scrollTo("owners-form")} label={t.owners.nav.cta} />
            )}
          </div>

          {/* Mobile: hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="p-2 text-slate-muted hover:text-white rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green cursor-pointer"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/[0.06] bg-[#0C0F16]/98 backdrop-blur-2xl">
          <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col gap-1">
            {variant === "home" ? (
              <>
                <MobileNavLink onClick={() => scrollTo("how-it-works")}>
                  {t.nav.howItWorks}
                </MobileNavLink>
                <MobileNavLink onClick={() => scrollTo("stadiums")}>
                  {t.nav.stadiums}
                </MobileNavLink>
                <MobileNavLink as="link" href="/owners" onClose={() => setMenuOpen(false)}>
                  {t.nav.forOwners}
                </MobileNavLink>
                <MobileNavLink onClick={() => scrollTo("faq")}>
                  {t.nav.faq}
                </MobileNavLink>
              </>
            ) : (
              <MobileNavLink as="link" href="/" onClose={() => setMenuOpen(false)}>
                {t.owners.nav.backHome}
              </MobileNavLink>
            )}

            {/* Language switcher */}
            <div className="mt-3 pt-4 border-t border-white/[0.06]">
              <p className="text-[11px] font-semibold text-slate-muted uppercase tracking-[0.08em] px-2 mb-2.5">
                Til / Язык / Language
              </p>
              <div className="flex gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setMenuOpen(false); }}
                    className={cn(
                      "flex-1 text-[13px] font-semibold tracking-[0.02em] py-2.5 rounded-xl transition-all duration-200 cursor-pointer",
                      language === lang.code
                        ? "bg-brand-green text-dark-900 shadow-[0_0_12px_rgba(0,212,106,0.3)]"
                        : "bg-dark-700/60 text-slate-muted hover:text-white hover:bg-dark-700 border border-white/[0.06]"
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="mt-3 pt-4 border-t border-white/[0.06]">
              {variant === "home" ? (
                <button
                  onClick={() => scrollTo("download")}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-green text-dark-900 text-[14px] font-bold tracking-[-0.01em] py-3.5 rounded-xl shadow-[0_0_20px_rgba(0,212,106,0.3)] hover:bg-brand-green-dark transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 2v9M4 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 13h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {t.nav.cta}
                </button>
              ) : (
                <button
                  onClick={() => { scrollTo("owners-form"); setMenuOpen(false); }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-green text-dark-900 text-[14px] font-bold tracking-[-0.01em] py-3.5 rounded-xl shadow-[0_0_20px_rgba(0,212,106,0.3)] hover:bg-brand-green-dark transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  {t.owners.nav.cta}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────── */

function NavLink({
  children,
  onClick,
  as,
  href,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  as?: "link";
  href?: string;
}) {
  const cls =
    "relative text-[13.5px] font-medium text-slate-muted hover:text-white tracking-[-0.01em] px-3.5 py-2 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green group cursor-pointer";

  if (as === "link" && href) {
    return (
      <Link href={href} className={cls}>
        {children}
        <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-brand-green scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
      <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-brand-green scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
    </button>
  );
}

function MobileNavLink({
  children,
  onClick,
  as,
  href,
  onClose,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  as?: "link";
  href?: string;
  onClose?: () => void;
}) {
  const cls =
    "text-left w-full text-[15px] font-medium text-slate-light hover:text-white px-3 py-3.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-150 cursor-pointer";

  if (as === "link" && href) {
    return (
      <Link href={href} className={cls} onClick={onClose}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

function DownloadCTA({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 bg-brand-green text-dark-900 text-[13px] font-bold tracking-[-0.01em] px-4 py-2.5 rounded-[10px] shadow-[0_0_16px_rgba(0,212,106,0.25)] hover:bg-brand-green-dark hover:shadow-[0_0_22px_rgba(0,212,106,0.4)] transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green cursor-pointer"
    >
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M7 1.5v8M3.5 7l3.5 3.5L10.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.5 12h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
      {label}
    </button>
  );
}

function LanguageSwitcher({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (l: Language) => void;
}) {
  return (
    <div
      className="flex items-center bg-white/[0.04] rounded-full border border-white/[0.08] p-0.5"
      role="group"
      aria-label="Language switcher"
    >
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          aria-pressed={language === lang.code}
          className={cn(
            "text-[11px] font-bold tracking-[0.04em] px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green",
            language === lang.code
              ? "bg-brand-green text-dark-900 shadow-[0_0_10px_rgba(0,212,106,0.3)]"
              : "text-slate-muted hover:text-white"
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
