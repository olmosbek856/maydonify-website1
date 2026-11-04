import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)} aria-label="MiniPolya — bosh sahifa">
      <Image src="/logo.png" alt="" width={36} height={36} priority className="size-9 rounded-btn" />
      <span className={cn("text-xl font-bold tracking-[-0.3px]", light ? "text-white" : "text-ink")}>MiniPolya</span>
    </Link>
  );
}

export function SectionHead({
  title,
  sub,
  link,
  as: Tag = "h2",
}: {
  title: string;
  sub?: string;
  link?: { label: string; href: string };
  as?: "h1" | "h2";
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
      <div>
        <Tag className="text-[26px] font-bold leading-tight tracking-[-0.8px] lg:text-4xl">{title}</Tag>
        {sub && <p className="mt-2.5 max-w-[640px] text-base text-muted">{sub}</p>}
      </div>
      {link && (
        <Link href={link.href} className="group inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-accent">
          {link.label}
          <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      )}
    </div>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Yo'l" className="flex flex-wrap items-center gap-2 text-[13px] text-muted">
      {items.map((it, i) => (
        <span key={it.label} className="flex items-center gap-2">
          {i > 0 && <ChevronRight className="size-3.5" aria-hidden />}
          {it.href ? (
            <Link href={it.href} className="hover:text-ink">
              {it.label}
            </Link>
          ) : (
            <span className="font-medium text-ink" aria-current="page">
              {it.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("rounded-card border border-line bg-surface shadow-card", className)}>{children}</div>;
}

export function EmptyState({
  icon,
  title,
  text,
  action,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center rounded-card border border-line bg-surface px-6 py-14 text-center">
      <span className="grid size-14 place-items-center rounded-full bg-accent-soft text-accent">{icon}</span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1.5 max-w-[380px] text-sm leading-relaxed text-muted">{text}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-skeleton rounded-btn bg-subtle", className)} aria-hidden />;
}
