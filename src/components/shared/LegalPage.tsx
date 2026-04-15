"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

interface LegalPageProps {
  type: "privacy" | "terms";
}

export default function LegalPage({ type }: LegalPageProps) {
  const { t } = useLanguage();
  const content = type === "privacy" ? t.privacy : t.terms;

  return (
    <>
      <Navbar variant="home" />
      <main className="bg-dark-900 min-h-screen pt-24 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-muted hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                >
                  Maydon
                </Link>
              </li>
              <li aria-hidden="true" className="text-dark-600">
                /
              </li>
              <li className="text-slate-light">{content.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              {content.title}
            </h1>
            <p className="text-slate-muted text-sm">
              {content.lastUpdated}: 7 Aprel, 2026
            </p>
          </header>

          {/* Intro */}
          <p className="text-slate-light text-base leading-relaxed mb-10 p-4 bg-dark-800 border border-dark-700 rounded-xl">
            {content.intro}
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {content.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-brand-green/15 border border-brand-green/25 text-brand-green text-xs font-black flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {section.title}
                </h2>
                <p className="text-slate-muted text-sm leading-relaxed pl-10">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-dark-700">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green-dark text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Bosh sahifaga qaytish
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
