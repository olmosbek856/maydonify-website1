"use client";

import Image from "next/image";
import { useState } from "react";
import { Calendar, CircleCheck, MapPin, TriangleExclamationPoint } from "lucide-react";
import { BOOKINGS, getPitch, type Booking, type BookingTab } from "@/lib/data";
import { cn, formatSom } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { ConfirmModal, Toast } from "@/components/ui/Overlay";

const TAB_LABEL: Record<BookingTab, string> = { kelgusi: "Kelgusi", otgan: "O'tgan", bekor: "Bekor qilingan" };

function BookingRow({ b, onCancel, onAction, priority }: { b: Booking; onCancel: () => void; onAction: (msg: string) => void; priority?: boolean }) {
  const pitch = getPitch(b.pitchSlug)!;
  return (
    <article className="flex flex-col gap-4 rounded-card border border-line bg-surface p-3 lg:flex-row lg:items-center lg:p-4">
      <div className="relative h-[130px] w-full shrink-0 overflow-hidden rounded-img lg:h-[120px] lg:w-[180px]">
        <Image src={pitch.image} alt={pitch.name} fill priority={priority} sizes="(min-width: 1024px) 180px, 100vw" className="object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2.5">
          <h3 className="truncate text-base font-semibold lg:text-lg">{pitch.name}</h3>
          <StatusBadge status={b.status} />
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-[13px] font-medium lg:text-sm">
          <Calendar className="size-4 text-muted" aria-hidden />
          {b.date} · {b.time}
        </p>
        <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-muted">
          <MapPin className="size-4" aria-hidden />
          {pitch.district} tumani
        </p>
      </div>
      <div className="lg:text-right">
        <div className="text-base font-bold lg:text-lg">{formatSom(b.amount)}</div>
        <div className="mt-0.5 text-xs text-muted">{b.tab === "bekor" ? "Qaytarilgan" : "To'langan"}</div>
      </div>
      <div className="flex gap-2 lg:w-[150px] lg:flex-col">
        {b.tab === "kelgusi" ? (
          <>
            <Button variant="secondary" size="sm" className="flex-1 lg:w-full lg:flex-none" onClick={() => onAction(`Bron #${b.id}: ${pitch.address}, ${b.date} · ${b.time}`)}>
              Batafsil
            </Button>
            <Button variant="dangerSoft" size="sm" className="flex-1 lg:w-full lg:flex-none" onClick={onCancel}>
              Bekor qilish
            </Button>
          </>
        ) : b.tab === "otgan" ? (
          <Button variant="secondary" size="sm" className="flex-1 lg:w-full lg:flex-none" onClick={() => onAction("Rahmat! Sharh yozish oynasi tez orada qo'shiladi.")}>
            Sharh qoldirish
          </Button>
        ) : (
          <ButtonLink href={`/maydon/${pitch.slug}`} variant="secondary" size="sm" className="flex-1 lg:w-full lg:flex-none">
            Qayta bron qilish
          </ButtonLink>
        )}
      </div>
    </article>
  );
}

export function MyBookings() {
  const [bookings, setBookings] = useState<Booking[]>(BOOKINGS);
  const [tab, setTab] = useState<BookingTab>("kelgusi");
  const [cancelling, setCancelling] = useState<Booking | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const list = bookings.filter((b) => b.tab === tab);
  const upcoming = bookings.filter((b) => b.tab === "kelgusi").length;
  const refundable = (cancelling?.hoursLeft ?? 0) >= 24;
  const pitch = cancelling ? getPitch(cancelling.pitchSlug) : null;

  const confirmCancel = () => {
    if (!cancelling) return;
    setBookings((all) => all.map((b) => (b.id === cancelling.id ? { ...b, tab: "bekor", status: "Bekor qilingan" } : b)));
    setToast(refundable ? `Bron bekor qilindi. ${formatSom(cancelling.amount)} kartangizga qaytariladi.` : "Bron bekor qilindi. To'lov qaytarilmaydi.");
    setCancelling(null);
  };

  return (
    <>
      <div className="hide-scroll mt-6 flex gap-7 overflow-x-auto border-b border-line" role="tablist" aria-label="Bronlar">
        {(Object.keys(TAB_LABEL) as BookingTab[]).map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={tab === k}
            onClick={() => setTab(k)}
            className={cn(
              "-mb-px whitespace-nowrap border-b-2 pb-3 text-[15px] transition",
              tab === k ? "border-accent font-semibold" : "border-transparent font-medium text-muted hover:text-ink",
            )}
          >
            {TAB_LABEL[k]}
            {k === "kelgusi" && ` (${upcoming})`}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="mt-5 flex flex-col items-center gap-4 rounded-card border border-line bg-surface px-5 py-16 text-center">
          <span className="grid size-16 place-items-center rounded-full bg-subtle">
            <Calendar className="size-8 text-muted" aria-hidden />
          </span>
          <h3 className="text-xl font-bold">Hali bronlaringiz yo&apos;q</h3>
          <p className="max-w-[420px] text-sm leading-relaxed text-muted">
            Toshkentdagi 120+ maydondan birini tanlang va birinchi o&apos;yiningizni bron qiling.
          </p>
          <ButtonLink href="/maydonlar" size="lg">
            Maydon topish
          </ButtonLink>
        </div>
      ) : (
        <div className="mt-5 space-y-4" role="tabpanel">
          {list.map((b, i) => (
            <BookingRow key={b.id} b={b} priority={i === 0} onCancel={() => setCancelling(b)} onAction={setToast} />
          ))}
        </div>
      )}

      <ConfirmModal
        open={!!cancelling}
        onClose={() => setCancelling(null)}
        onConfirm={confirmCancel}
        title="Bronni bekor qilasizmi?"
        cancelLabel="Yo'q, qoldirish"
        confirmLabel="Ha, bekor qilish"
        confirmVariant="danger"
      >
        {cancelling && (
          <>
            <div className="space-y-1.5 rounded-xl bg-subtle p-4">
              <div className="text-[15px] font-semibold">{pitch?.name}</div>
              <div className="text-[13px] text-muted">
                {cancelling.date} · {cancelling.time}
              </div>
              <div className="text-[13px] text-muted">{formatSom(cancelling.amount)} · Humo **** 4417</div>
            </div>
            <div className="mt-4">
              {refundable ? (
                <div className="flex items-start gap-2.5 rounded-xl bg-success-soft p-3.5">
                  <CircleCheck className="mt-0.5 size-[18px] shrink-0 text-success" aria-hidden />
                  <p className="text-[13px] leading-relaxed text-success">
                    O&apos;yingizga 24 soatdan ko&apos;proq vaqt bor — {formatSom(cancelling.amount)} to&apos;liq qaytariladi (1–3 ish kuni ichida).
                  </p>
                </div>
              ) : (
                <div className="flex items-start gap-2.5 rounded-xl bg-warning-soft p-3.5">
                  <TriangleExclamationPoint className="mt-0.5 size-[18px] shrink-0 text-warning" aria-hidden />
                  <p className="text-[13px] leading-relaxed text-warning">
                    O&apos;yin boshlanishiga {cancelling.hoursLeft} soat qoldi. 24 soatdan kam vaqt qolganda to&apos;lov qaytarilmaydi.
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </ConfirmModal>

      <Toast open={!!toast} message={toast ?? ""} onClose={() => setToast(null)} />
    </>
  );
}
