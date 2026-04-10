"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
import { siteConfig } from "@/lib/siteConfig";
import MaydonLogoMark from "@/components/ui/MaydonLogoMark";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
              <MaydonLogoMark size={48} />
            </Link>
            <p className="text-slate-muted text-[14px] font-medium leading-[1.6] max-w-xs">
              {t.footer.tagline}
            </p>

            {/* App download badges */}
            <div className="mt-5">
              <p className="text-[11px] font-semibold text-slate-muted tracking-[0.06em] uppercase mb-3">
                {t.download.footerLabel}
              </p>
              <AppStoreBadges theme="dark" size="sm" layout="col" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold text-[12px] tracking-[0.06em] uppercase mb-4">{t.footer.product}</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-slate-muted hover:text-white text-[14px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                >
                  {t.footer.howItWorks}
                </Link>
              </li>
              <li>
                <Link
                  href="/#stadiums"
                  className="text-slate-muted hover:text-white text-[14px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                >
                  {t.footer.stadiums}
                </Link>
              </li>
              <li>
                <Link
                  href="/owners"
                  className="text-slate-muted hover:text-white text-[14px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                >
                  {t.footer.forOwners}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-[12px] tracking-[0.06em] uppercase mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-muted hover:text-white text-[14px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-muted hover:text-white text-[14px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                >
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-[12px] tracking-[0.06em] uppercase mb-4">{t.footer.contact}</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-slate-muted hover:text-white text-[14px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-slate-muted hover:text-white text-[14px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-muted hover:text-white text-[14px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  @maydonify_uz
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-muted hover:text-white text-[14px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  @maydonify.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-dark-700 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-muted text-[12px] font-medium tracking-[0.01em]">
            © {year} Maydonify. {t.footer.rights}
          </p>
          <p className="text-slate-muted text-[12px] font-medium">Made in Tashkent</p>
        </div>
      </div>
    </footer>
  );
}
