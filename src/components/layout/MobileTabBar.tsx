"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building, CalendarCheck, Goal, Search, Trophy, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";

const TABS = [
  { label: "Asosiy", href: "/", icon: Goal },
  { label: "Maydonlar", href: "/maydonlar", icon: Search },
  { label: "O'yinlar", href: "/oyinlar", icon: Trophy },
  ...(siteConfig.bookingEnabled
    ? [
        { label: "Bronlarim", href: "/bronlarim", icon: CalendarCheck },
        { label: "Profil", href: "/profil", icon: User },
      ]
    : [{ label: "Egalarga", href: "/maydon-egalari", icon: Building }]),
];

export function MobileTabBar() {
  const pathname = usePathname();
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`) || (href === "/maydonlar" && pathname.startsWith("/maydon/"));

  return (
    <nav
      aria-label="Pastki menyu"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <ul className="flex h-16 items-center justify-around px-2">
        {TABS.map(({ label, href, icon: Icon }) => {
          const on = active(href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={on ? "page" : undefined}
                className={cn(
                  "flex h-14 w-16 flex-col items-center justify-center gap-1 rounded-btn transition-colors",
                  on ? "text-accent" : "text-muted hover:text-ink",
                )}
              >
                <Icon className="size-[22px]" strokeWidth={on ? 2.25 : 2} aria-hidden />
                <span className={cn("text-[11px]", on ? "font-semibold" : "font-medium")}>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
