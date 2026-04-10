"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import type { Language } from "@/lib/types";

const NAV_LINKS = [
  { label: "Qanday ishlaydi", href: "#how-it-works" },
  { label: "Maydonlar", href: "#stadiums" },
  { label: "Hamkorlar", href: "#partners" },
  { label: "FAQ", href: "#faq" },
];

const LANGUAGES: Language[] = ["uz", "ru", "en"];

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Main header bar ── */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#0D1117]/85 backdrop-blur-xl border-b border-white/8"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* ── Logo ── */}
          <a
            href="/"
            className="flex items-center gap-1 shrink-0 group"
            aria-label="Maydonify bosh sahifa"
          >
            <span
              className="text-[#00A86B] font-bold leading-none select-none text-lg"
              aria-hidden="true"
            >
              ●
            </span>
            <span className="font-[var(--font-syne)] text-[1.15rem] font-bold text-white tracking-tight group-hover:text-[#00A86B] transition-colors duration-200">
              Maydonify
            </span>
          </a>

          {/* ── Desktop nav links ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-medium text-white/65 hover:text-white transition-colors duration-150 rounded-lg hover:bg-white/6 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-4 h-px bg-[#00A86B] transition-all duration-200 rounded-full" />
              </a>
            ))}
          </div>

          {/* ── Right side: lang + CTA + hamburger ── */}
          <div className="flex items-center gap-2.5">
            {/* Language switcher */}
            <div className="flex items-center bg-white/6 rounded-lg p-0.5 border border-white/8">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={cn(
                    "px-2.5 py-1 text-[0.65rem] font-bold rounded-md uppercase tracking-wider transition-all duration-150",
                    language === lang
                      ? "bg-[#00A86B] text-white shadow-sm"
                      : "text-white/45 hover:text-white"
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* CTA button — desktop only */}
            <a
              href="#download"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#0D1117] border border-[#00A86B] rounded-lg hover:bg-[#00A86B]/12 hover:shadow-[0_0_16px_rgba(0,168,107,0.25)] transition-all duration-200 whitespace-nowrap"
            >
              Ilovani yuklab oling
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Menyuni yopish" : "Menyuni ochish"}
              aria-expanded={mobileOpen}
              className="lg:hidden relative flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-white/8 transition-colors shrink-0"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="block w-[18px] h-[1.5px] bg-white rounded-full origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
                className="block w-[18px] h-[1.5px] bg-white rounded-full mt-[5px]"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="block w-[18px] h-[1.5px] bg-white rounded-full origin-center mt-[5px]"
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#0D1117] flex flex-col pt-20 pb-8 px-6 lg:hidden"
          >
            {/* Green accent line at top */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00A86B] to-transparent" />

            {/* Nav links */}
            <nav className="flex flex-col mt-4" role="navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.22, ease: "easeOut" }}
                  className="flex items-center justify-between py-5 text-2xl font-bold font-[var(--font-syne)] text-white border-b border-white/8 hover:text-[#00A86B] hover:pl-2 transition-all duration-200 group"
                >
                  {link.label}
                  <span className="text-[#00A86B] text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    →
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Language switcher */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.2 }}
              className="mt-8 flex items-center gap-2"
            >
              <span className="text-white/35 text-xs uppercase tracking-widest mr-1">
                Til
              </span>
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={cn(
                    "px-4 py-2 text-sm font-bold rounded-lg uppercase tracking-wider transition-all duration-150",
                    language === lang
                      ? "bg-[#00A86B] text-white"
                      : "text-white/40 border border-white/12 hover:text-white hover:border-white/30"
                  )}
                >
                  {lang}
                </button>
              ))}
            </motion.div>

            {/* Mobile CTA */}
            <motion.a
              href="#download"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.24, ease: "easeOut" }}
              className="mt-auto w-full py-4 text-center text-base font-bold text-white border-2 border-[#00A86B] rounded-xl hover:bg-[#00A86B]/10 hover:shadow-[0_0_24px_rgba(0,168,107,0.2)] transition-all duration-200"
            >
              Ilovani yuklab oling
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
