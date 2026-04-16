"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/siteConfig";
import MaydonLogoMark from "@/components/ui/MaydonLogoMark";

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.771l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.958.788z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t.footer.product,
      links: [
        { label: t.footer.howItWorks, href: "#how-it-works" },
        { label: t.footer.stadiums, href: "#stadiums" },
        { label: t.footer.forOwners, href: "/owners" },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { label: t.footer.privacy, href: "/privacy" },
        { label: t.footer.terms, href: "/terms" },
      ],
    },
    {
      title: t.footer.contact,
      links: [
        { label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\D/g, "")}` },
        { label: "@maydonify_uz", href: siteConfig.telegram },
        { label: "@maydonify.uz", href: siteConfig.instagram },
        { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
      ],
    },
  ];

  return (
    <footer className="bg-[#0D1117] border-t border-white/5">
      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <MaydonLogoMark size={32} />
              <span className="text-white font-bold text-lg tracking-tight font-[var(--font-syne)]">
                Maydon
              </span>
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
              {t.footer.tagline}
            </p>

            {/* Made in Tashkent badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-semibold w-fit">
              🇺🇿 Made in Tashkent
            </span>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-1">
                {col.title}
              </p>
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-500 text-sm hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {year} {siteConfig.name}. {t.footer.rights}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#29A7E1] hover:border-[#29A7E1]/40 hover:bg-[#29A7E1]/10 transition-all duration-200"
            >
              <TelegramIcon />
            </Link>
            <Link
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10 transition-all duration-200"
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
