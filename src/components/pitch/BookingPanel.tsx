"use client";

import { useMemo, useState } from "react";
import { CalendarClock, Info, Send } from "lucide-react";
import { BOOKING_DAYS, SLOT_TIMES, slotStates, type Pitch } from "@/lib/data";
import { siteConfig } from "@/lib/siteConfig";
import { cn, formatSom, hourRange } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink, Button, buttonClasses } from "@/components/ui/Button";
import { BottomSheet } from "@/components/ui/Overlay";
import { TimeSlot } from "@/components/cards/TimeSlot";

const DEFAULT_DAY = 5;

function useBooking(pitch: Pitch) {
  const [day, setDay] = useState(DEFAULT_DAY);
  const states = useMemo(() => slotStates(pitch.slug, day), [pitch.slug, day]);
  const [time, setTime] = useState<string | null>(() => {
    const s = slotStates(pitch.slug, DEFAULT_DAY);
    return ["20:00", "19:00", "21:00", ...SLOT_TIMES].find((t) => s[t] !== "taken") ?? null;
  });

  const pickDay = (i: number) => {
    setDay(i);
    if (time && slotStates(pitch.slug, i)[time] === "taken") setTime(null);
  };

  const freeCount = SLOT_TIMES.filter((t) => states[t] !== "taken").length;
  const href = time
    ? `/bron?${new URLSearchParams({ maydon: pitch.slug, sana: BOOKING_DAYS[day].date, vaqt: time }).toString()}`
    : null;

  return { day, pickDay, time, setTime, states, freeCount, href };
}

/** Prototipdagi bookingCard() — desktopda karta, mobil sheet ichida ramkasiz. */
function BookingCard({ pitch, b, inSheet = false }: { pitch: Pitch; b: ReturnType<typeof useBooking>; inSheet?: boolean }) {
  return (
    <div className={inSheet ? "" : "rounded-card border border-line bg-surface p-6 shadow-card"}>
      <div className="flex items-center justify-between">
        <p>
          <span className="text-[26px] font-bold tracking-[-0.6px]">{formatSom(pitch.price)}</span>
          <span className="text-sm text-muted"> / soat</span>
        </p>
        {b.freeCount > 0 ? <Badge tone="green">Bo&apos;sh</Badge> : <Badge tone="grey">Band</Badge>}
      </div>

      <div className="my-5 h-px bg-line" />

      <fieldset>
        <div className="mb-3 flex items-center justify-between">
          <legend className="text-sm font-semibold">Sana</legend>
          <span className="text-[13px] text-muted">Oktyabr 2026</span>
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {BOOKING_DAYS.map((d, i) => (
            <button
              key={d.date}
              type="button"
              onClick={() => b.pickDay(i)}
              aria-pressed={b.day === i}
              aria-label={d.date}
              className={cn(
                "flex h-14 flex-col items-center justify-center gap-0.5 rounded-btn border transition-colors",
                b.day === i ? "border-accent bg-accent text-white" : "border-line bg-surface text-ink hover:border-accent",
              )}
            >
              <span className={cn("text-[11px]", b.day === i ? "text-white/80" : "text-muted")}>{d.short}</span>
              <span className="text-[15px] font-semibold">{d.day}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <div className="my-5 h-px bg-line" />

      <fieldset>
        <div className="mb-3 flex items-center justify-between">
          <legend className="text-sm font-semibold">Vaqt</legend>
          <span className="flex items-center gap-3 text-[11px] text-muted">
            <span className="flex items-center gap-1.5">
              <i className="inline-block size-2.5 rounded-[3px] border border-line bg-surface" />
              Bo&apos;sh
            </span>
            <span className="flex items-center gap-1.5">
              <i className="inline-block size-2.5 rounded-[3px] bg-subtle" />
              Band
            </span>
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {SLOT_TIMES.map((t) => (
            <TimeSlot key={t} time={t} state={b.states[t]} selected={b.time === t} onSelect={b.setTime} />
          ))}
        </div>
      </fieldset>

      <div className="mt-5 rounded-xl bg-subtle p-3.5" aria-live="polite">
        {b.time ? (
          <>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {BOOKING_DAYS[b.day].date} · {hourRange(b.time)}
              </span>
              <span className="text-[13px] text-muted">1 soat</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm text-muted">Jami</span>
              <span className="text-lg font-bold">{formatSom(pitch.price)}</span>
            </div>
          </>
        ) : (
          <p className="text-sm text-muted">Bron qilish uchun bo&apos;sh vaqtni tanlang.</p>
        )}
      </div>

      <div className="mt-4">
        {b.href ? (
          <ButtonLink href={b.href} className="w-full">
            Bron qilish
          </ButtonLink>
        ) : (
          <Button className="w-full" disabled>
            Bron qilish
          </Button>
        )}
      </div>
      <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted">
        <Info className="size-4 shrink-0" aria-hidden />
        24 soat oldin bekor qilsangiz, pul to&apos;liq qaytariladi.
      </p>
    </div>
  );
}

/** Bron o'chiq paytida: narx va "tez orada" kartasi. */
function ComingSoon({ pitch }: { pitch: Pitch }) {
  return (
    <>
      <div className="hidden rounded-card border border-line bg-surface p-6 shadow-card lg:block">
        <div className="flex items-center justify-between">
          <p>
            <span className="text-[26px] font-bold tracking-[-0.6px]">{formatSom(pitch.price)}</span>
            <span className="text-sm text-muted"> / soat</span>
          </p>
          <Badge tone="amber">Tez orada</Badge>
        </div>
        <div className="my-5 h-px bg-line" />
        <span className="grid size-11 place-items-center rounded-xl bg-accent-soft">
          <CalendarClock className="size-[22px] text-accent" aria-hidden />
        </span>
        <h2 className="mt-4 text-lg font-semibold">Onlayn bron tez orada</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Hozircha maydon haqidagi ma&apos;lumotlarni ko&apos;rishingiz mumkin. Onlayn bron va to&apos;lov yaqin orada ishga tushadi — birinchilardan
          bo&apos;lib bilish uchun Telegram kanalimizga obuna bo&apos;ling.
        </p>
        <a
          href={siteConfig.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses({ className: "mt-5 w-full" })}
        >
          <Send className="size-[18px]" aria-hidden /> Telegram&apos;da kuzatish
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-16 z-30 flex items-center justify-between gap-3 border-t border-line bg-surface px-5 py-3 lg:hidden">
        <div>
          <div className="text-[11px] text-muted">1 soat</div>
          <div className="text-lg font-bold tracking-[-0.3px]">{formatSom(pitch.price)}</div>
        </div>
        <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer" className={buttonClasses({ className: "px-5" })}>
          Bron tez orada
        </a>
      </div>
    </>
  );
}

export function BookingPanel({ pitch }: { pitch: Pitch }) {
  if (!siteConfig.bookingEnabled) return <ComingSoon pitch={pitch} />;
  return <ActiveBookingPanel pitch={pitch} />;
}

function ActiveBookingPanel({ pitch }: { pitch: Pitch }) {
  const b = useBooking(pitch);
  const [sheet, setSheet] = useState(false);

  return (
    <>
      <div className="hidden lg:block">
        <BookingCard pitch={pitch} b={b} />
      </div>

      {/* Mobil sticky panel */}
      <div className="fixed inset-x-0 bottom-16 z-30 flex items-center justify-between gap-3 border-t border-line bg-surface px-5 py-3 lg:hidden">
        <div>
          <div className="text-[11px] text-muted">1 soat</div>
          <div className="text-lg font-bold tracking-[-0.3px]">{formatSom(pitch.price)}</div>
        </div>
        <Button onClick={() => setSheet(true)} className="px-6">
          Bron qilish
        </Button>
      </div>

      <BottomSheet open={sheet} onClose={() => setSheet(false)} title="Vaqtni tanlang" subtitle={`${formatSom(pitch.price)} / soat`}>
        <BookingCard pitch={pitch} b={b} inSheet />
      </BottomSheet>
    </>
  );
}
