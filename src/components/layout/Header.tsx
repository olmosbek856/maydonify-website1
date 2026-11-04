"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarCheck, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";
import { Logo } from "@/components/ui/Basics";
import { ButtonLink } from "@/components/ui/Button";

export const NAV = [
  { label: "Maydonlar", href: "/maydonlar" },
  { label: "Guruh o'yinlari", href: "/oyinlar" },
  { label: "Qanday ishlaydi", href: "/#qanday-ishlaydi" },
  { label: "Maydon egalariga", href: "/maydon-egalari" },
];

/** Prototip: hisob sahifalarida "kirgan foydalanuvchi" sarlavhasi ko'rsatiladi. */
const LOGGED_IN_PATHS = ["/bronlarim", "/profil", "/bron"];

function LangSwitch() {
  return (
    <div className="flex items-center gap-1.5 text-sm" aria-label="Til">
      <span className="font-semibold text-accent" aria-current="true">
        UZ
      </span>
      <span className="text-line" aria-hidden>
        /
      </span>
      <span className="cursor-not-allowed font-medium text-muted" title="Rus tili tez orada qo'shiladi" aria-disabled="true">
        RU
      </span>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const booking = siteConfig.bookingEnabled;
  const loggedIn = booking && LOGGED_IN_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/85">
      <div className="container-page flex h-16 items-center justify-between lg:h-[72px]">
        <Logo />

        <nav className="hidden items-center gap-8 text-[15px] lg:flex" aria-label="Asosiy menyu">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={cn(
                "py-2 transition-colors",
                isActive(n.href) ? "font-semibold text-ink" : "font-medium text-muted hover:text-ink",
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitch />
          {!booking ? (
            <ButtonLink href="/maydonlar" size="sm">
              Maydonlarni ko&apos;rish
            </ButtonLink>
          ) : loggedIn ? (
            <>
              <ButtonLink href="/bronlarim" variant="secondary" size="sm" icon={CalendarCheck}>
                Bronlarim
              </ButtonLink>
              <Link
                href="/profil"
                aria-label="Profil"
                className="grid size-10 place-items-center rounded-full bg-accent-soft text-sm font-bold text-accent hover:ring-2 hover:ring-accent/30"
              >
                AR
              </Link>
            </>
          ) : (
            <>
              <ButtonLink href="/kirish" variant="secondary" size="sm">
                Kirish
              </ButtonLink>
              <ButtonLink href="/maydonlar" size="sm">
                Bron qilish
              </ButtonLink>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
          className="-mr-3 flex h-11 items-center gap-1 rounded-btn px-3 text-sm font-semibold hover:bg-subtle lg:hidden"
        >
          Menyu {open ? <X className="size-4" aria-hidden /> : <ChevronDown className="size-4" aria-hidden />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="animate-fade-in border-t border-line bg-surface px-5 pb-5 pt-2 lg:hidden">
          <nav aria-label="Mobil menyu">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-line text-[15px] font-medium"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between py-4">
            <span className="text-sm text-muted">Til</span>
            <LangSwitch />
          </div>
          <div className="flex gap-2.5">
            {!booking ? null : loggedIn ? (
              <ButtonLink href="/profil" variant="secondary" className="flex-1">
                Profil
              </ButtonLink>
            ) : (
              <ButtonLink href="/kirish" variant="secondary" className="flex-1">
                Kirish
              </ButtonLink>
            )}
            <ButtonLink href="/maydonlar" className="flex-1">
              {booking ? "Bron qilish" : "Maydonlarni ko'rish"}
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
