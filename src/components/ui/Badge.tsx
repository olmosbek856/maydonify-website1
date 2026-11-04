import type { ReactNode } from "react";
import type { BookingStatus } from "@/lib/data";
import { cn } from "@/lib/utils";

export type Tone = "blue" | "green" | "amber" | "red" | "grey";

const TONES: Record<Tone, string> = {
  blue: "bg-accent-soft text-accent",
  green: "bg-success-soft text-success",
  amber: "bg-warning-soft text-warning",
  red: "bg-danger-soft text-danger",
  grey: "bg-subtle text-muted",
};

export function Badge({ tone = "blue", className, children }: { tone?: Tone; className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

const STATUS_TONE: Record<BookingStatus, Tone> = {
  Tasdiqlangan: "green",
  "To'langan": "green",
  Kutilmoqda: "amber",
  "Bekor qilingan": "red",
  Yakunlangan: "grey",
};

export function StatusBadge({ status }: { status: BookingStatus }) {
  return <Badge tone={STATUS_TONE[status]}>{status}</Badge>;
}
