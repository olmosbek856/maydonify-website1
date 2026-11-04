"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, LayoutGrid, Map as MapIcon, MapPin, SearchX, SlidersHorizontal } from "lucide-react";
import {
  AMENITIES,
  BOOKING_DAYS,
  DISTRICTS,
  PITCHES,
  PITCH_SIZES,
  SLOT_TIMES,
  slotStates,
  type Pitch,
  type PitchType,
} from "@/lib/data";
import { EMPTY_FILTERS, PRICE_MAX, PRICE_MIN, type Filters } from "@/lib/filters";
import { cn, formatNumber, formatSom } from "@/lib/utils";
import { PitchCard } from "@/components/cards/PitchCard";
import { Button } from "@/components/ui/Button";
import { Checkbox, Chip, SelectField } from "@/components/ui/Field";
import { BottomSheet } from "@/components/ui/Overlay";
import { EmptyState } from "@/components/ui/Basics";

const PAGE_SIZE = 6;

const SORTS = {
  popular: { label: "Mashhurlik bo'yicha", fn: (a: Pitch, b: Pitch) => b.popularity - a.popularity },
  cheap: { label: "Avval arzonlari", fn: (a: Pitch, b: Pitch) => a.price - b.price },
  expensive: { label: "Avval qimmatlari", fn: (a: Pitch, b: Pitch) => b.price - a.price },
  rating: { label: "Reyting bo'yicha", fn: (a: Pitch, b: Pitch) => b.rating - a.rating },
} as const;
type SortKey = keyof typeof SORTS;

function applyFilters(f: Filters): Pitch[] {
  const dayIndex = BOOKING_DAYS.findIndex((d) => d.date === f.date);
  return PITCHES.filter(
    (p) =>
      (!f.districts.length || f.districts.includes(p.district)) &&
      p.price <= f.maxPrice &&
      (!f.types.length || f.types.includes(p.type)) &&
      (!f.sizes.length || f.sizes.includes(p.size)) &&
      f.amenities.every((a) => p.amenities.includes(a)) &&
      (!f.time || dayIndex < 0 || slotStates(p.slug, dayIndex)[f.time] !== "taken"),
  );
}

const toggle = <T,>(list: T[], v: T) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

function FilterForm({
  draft,
  setDraft,
  onApply,
  onReset,
  count,
  variant,
}: {
  draft: Filters;
  setDraft: (f: Filters) => void;
  onApply: () => void;
  onReset: () => void;
  count: number;
  variant: "sidebar" | "sheet";
}) {
  const divider = <div className="h-px bg-line" />;
  return (
    <div className="space-y-5">
      {variant === "sidebar" && (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-[17px] font-semibold">Filtrlar</h2>
            <button type="button" onClick={onReset} className="min-h-8 text-[13px] font-medium text-accent hover:underline">
              Tozalash
            </button>
          </div>
          {divider}
        </>
      )}

      <fieldset>
        <legend className="mb-3 text-[13px] font-semibold">Tuman</legend>
        {variant === "sidebar" ? (
          <div className="space-y-2">
            {DISTRICTS.map((d) => (
              <Checkbox
                key={d}
                label={d}
                checked={draft.districts.includes(d)}
                onChange={() => setDraft({ ...draft, districts: toggle(draft.districts, d) })}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {DISTRICTS.map((d) => (
              <Chip key={d} active={draft.districts.includes(d)} onClick={() => setDraft({ ...draft, districts: toggle(draft.districts, d) })}>
                {d}
              </Chip>
            ))}
          </div>
        )}
      </fieldset>
      {divider}

      <div className="grid grid-cols-2 gap-3">
        <SelectField
          label="Sana"
          placeholder="Istalgan"
          options={BOOKING_DAYS.map((d) => d.date)}
          value={draft.date}
          onChange={(e) => setDraft({ ...draft, date: e.target.value })}
        />
        <SelectField
          label="Vaqt"
          placeholder="Istalgan"
          options={SLOT_TIMES}
          value={draft.time}
          onChange={(e) => setDraft({ ...draft, time: e.target.value })}
        />
      </div>
      {divider}

      <div>
        <label htmlFor={`price-${variant}`} className="mb-3 flex items-center justify-between text-[13px] font-semibold">
          <span>Narx (soatiga)</span>
          <span className="font-medium text-accent">{formatSom(draft.maxPrice)} gacha</span>
        </label>
        <input
          id={`price-${variant}`}
          type="range"
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={10000}
          value={draft.maxPrice}
          onChange={(e) => setDraft({ ...draft, maxPrice: Number(e.target.value) })}
          className="h-6 w-full cursor-pointer accent-accent"
        />
        <div className="mt-1 flex justify-between text-[13px] text-muted">
          <span>{formatNumber(PRICE_MIN)}</span>
          <span>{formatSom(PRICE_MAX)}</span>
        </div>
      </div>
      {divider}

      <fieldset>
        <legend className="mb-3 text-[13px] font-semibold">Turi</legend>
        <div className="flex flex-wrap gap-2">
          {(["Yopiq", "Ochiq"] as PitchType[]).map((t) => (
            <Chip key={t} active={draft.types.includes(t)} onClick={() => setDraft({ ...draft, types: toggle(draft.types, t) })}>
              {t}
            </Chip>
          ))}
        </div>
      </fieldset>
      {divider}

      <fieldset>
        <legend className="mb-3 text-[13px] font-semibold">Maydon o&apos;lchami</legend>
        <div className="flex flex-wrap gap-2">
          {PITCH_SIZES.map((s) => (
            <Chip key={s} active={draft.sizes.includes(s)} onClick={() => setDraft({ ...draft, sizes: toggle(draft.sizes, s) })}>
              {s}
            </Chip>
          ))}
        </div>
      </fieldset>
      {divider}

      <fieldset>
        <legend className="mb-3 text-[13px] font-semibold">Qulayliklar</legend>
        <div className="flex flex-wrap gap-2">
          {AMENITIES.map((a) => (
            <Chip
              key={a}
              active={draft.amenities.includes(a)}
              onClick={() => setDraft({ ...draft, amenities: toggle(draft.amenities, a) })}
            >
              {a}
            </Chip>
          ))}
        </div>
      </fieldset>

      <div className={cn("flex gap-2.5", variant === "sheet" && "sticky bottom-0 -mx-5 border-t border-line bg-surface px-5 pt-4")}>
        {variant === "sheet" && (
          <Button variant="secondary" onClick={onReset} className="flex-1">
            Tozalash
          </Button>
        )}
        <Button onClick={onApply} className="flex-[2]">
          Natijalarni ko&apos;rsatish ({count})
        </Button>
      </div>
    </div>
  );
}

function MapView({ pitches }: { pitches: Pitch[] }) {
  return (
    <div
      className="relative h-[520px] overflow-hidden rounded-card border border-line bg-subtle"
      style={{
        backgroundImage:
          "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      {pitches.map((p, i) => {
        const seed = [...p.slug].reduce((a, c) => a + c.charCodeAt(0), 0);
        const left = 8 + ((seed * 37 + i * 13) % 78);
        const top = 8 + ((seed * 53 + i * 29) % 74);
        return (
          <Link
            key={p.slug}
            href={`/maydon/${p.slug}`}
            className="group absolute -translate-x-1/2 -translate-y-full"
            style={{ left: `${left}%`, top: `${top + 10}%` }}
          >
            <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-white shadow-hover transition-transform group-hover:scale-105">
              <MapPin className="size-3.5" aria-hidden />
              {formatNumber(p.price / 1000)} ming
            </span>
            <span className="pointer-events-none absolute left-1/2 top-full mt-1 hidden -translate-x-1/2 whitespace-nowrap rounded-btn bg-surface px-2.5 py-1 text-xs font-medium shadow-card group-hover:block">
              {p.name}
            </span>
          </Link>
        );
      })}
      <p className="absolute bottom-3 left-3 rounded-btn bg-surface/90 px-3 py-1.5 text-xs text-muted">
        Xarita ko&apos;rinishi — taxminiy joylashuv
      </p>
    </div>
  );
}

export function PitchesBrowser({ initial }: { initial: Filters }) {
  const [applied, setApplied] = useState<Filters>(initial);
  const [draft, setDraft] = useState<Filters>(initial);
  const [sort, setSort] = useState<SortKey>("popular");
  const [view, setView] = useState<"grid" | "map">("grid");
  const [page, setPage] = useState(1);
  const [sheetOpen, setSheetOpen] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => [...applyFilters(applied)].sort(SORTS[sort].fn), [applied, sort]);
  const draftCount = useMemo(() => applyFilters(draft).length, [draft]);
  const pages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const visible = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const apply = (f: Filters = draft) => {
    setApplied(f);
    setDraft(f);
    setPage(1);
    setSheetOpen(false);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const reset = () => apply(EMPTY_FILTERS);

  const activeChips: { label: string; remove: () => void }[] = [
    ...applied.districts.map((d) => ({ label: d, remove: () => apply({ ...applied, districts: applied.districts.filter((x) => x !== d) }) })),
    ...(applied.date ? [{ label: applied.date, remove: () => apply({ ...applied, date: "" }) }] : []),
    ...(applied.time ? [{ label: applied.time, remove: () => apply({ ...applied, time: "" }) }] : []),
    ...applied.types.map((t) => ({ label: t, remove: () => apply({ ...applied, types: applied.types.filter((x) => x !== t) }) })),
    ...applied.sizes.map((s) => ({ label: s, remove: () => apply({ ...applied, sizes: applied.sizes.filter((x) => x !== s) }) })),
    ...applied.amenities.map((a) => ({ label: a, remove: () => apply({ ...applied, amenities: applied.amenities.filter((x) => x !== a) }) })),
    ...(applied.maxPrice < PRICE_MAX ? [{ label: `${formatSom(applied.maxPrice)} gacha`, remove: () => apply({ ...applied, maxPrice: PRICE_MAX }) }] : []),
  ];

  return (
    <div ref={topRef} className="scroll-mt-24">
      {/* Mobil: filtr tugmasi va faol filtrlar */}
      <div className="hide-scroll -mx-5 mb-4 flex gap-2 overflow-x-auto px-5 pb-1 lg:hidden">
        <button
          type="button"
          onClick={() => {
            setDraft(applied);
            setSheetOpen(true);
          }}
          className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full border border-accent bg-accent-soft px-3.5 text-[13px] font-semibold text-accent"
        >
          <SlidersHorizontal className="size-4" aria-hidden /> Filtrlar
          {activeChips.length > 0 && (
            <span className="grid size-5 place-items-center rounded-full bg-accent text-[11px] text-white">{activeChips.length}</span>
          )}
        </button>
        {activeChips.map((c) => (
          <button
            key={c.label}
            type="button"
            onClick={c.remove}
            aria-label={`${c.label} filtrini olib tashlash`}
            className="inline-flex h-10 shrink-0 items-center gap-1 rounded-full border border-line bg-surface px-3.5 text-[13px] font-medium"
          >
            {c.label} <span aria-hidden className="text-muted">×</span>
          </button>
        ))}
      </div>

      <div className="flex items-start gap-6">
        <aside className="sticky top-24 hidden w-[280px] shrink-0 rounded-card border border-line bg-surface p-5 lg:block" aria-label="Filtrlar">
          <FilterForm draft={draft} setDraft={setDraft} onApply={() => apply()} onReset={reset} count={draftCount} variant="sidebar" />
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-sm text-muted" aria-live="polite">
              {results.length} ta maydon topildi
            </p>
            <div className="flex items-center gap-2">
              <label className="sr-only" htmlFor="sort">
                Saralash
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="h-10 cursor-pointer rounded-btn border border-line bg-surface px-3 text-[13px] font-medium outline-none focus:border-accent"
              >
                {Object.entries(SORTS).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v.label}
                  </option>
                ))}
              </select>
              <div className="hidden overflow-hidden rounded-btn border border-line sm:flex" role="group" aria-label="Ko'rinish">
                {(
                  [
                    ["grid", LayoutGrid, "Ro'yxat"],
                    ["map", MapIcon, "Xarita"],
                  ] as const
                ).map(([v, Icon, label], i) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setView(v)}
                    aria-pressed={view === v}
                    aria-label={label}
                    className={cn(
                      "grid size-10 place-items-center transition-colors",
                      i > 0 && "border-l border-line",
                      view === v ? "bg-accent-soft text-accent" : "bg-surface text-muted hover:text-ink",
                    )}
                  >
                    <Icon className="size-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {results.length === 0 ? (
            <EmptyState
              icon={<SearchX className="size-7" />}
              title="Hech narsa topilmadi"
              text="Tanlangan filtrlarga mos maydon yo'q. Filtrlarni o'zgartiring yoki boshqa sana va vaqtni tanlang."
              action={<Button variant="secondary" onClick={reset}>Filtrlarni tozalash</Button>}
            />
          ) : view === "map" ? (
            <MapView pitches={results} />
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-3">
                {visible.map((p, i) => (
                  <PitchCard key={p.slug} pitch={p} priority={i < 3} variant="list" />
                ))}
              </div>

              {pages > 1 && (
                <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Sahifalar">
                  <button
                    type="button"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    aria-label="Oldingi sahifa"
                    className="grid size-10 place-items-center rounded-btn border border-line bg-surface text-muted hover:text-ink disabled:opacity-40"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => {
                        setPage(n);
                        topRef.current?.scrollIntoView({ behavior: "smooth" });
                      }}
                      aria-current={page === n ? "page" : undefined}
                      className={cn(
                        "size-10 rounded-btn border text-sm font-medium",
                        page === n ? "border-accent bg-accent text-white" : "border-line bg-surface hover:bg-subtle",
                      )}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    type="button"
                    disabled={page === pages}
                    onClick={() => setPage(page + 1)}
                    aria-label="Keyingi sahifa"
                    className="grid size-10 place-items-center rounded-btn border border-line bg-surface text-muted hover:text-ink disabled:opacity-40"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </nav>
              )}
            </>
          )}
        </div>
      </div>

      <BottomSheet open={sheetOpen} onClose={() => setSheetOpen(false)} title="Filtrlar">
        <FilterForm draft={draft} setDraft={setDraft} onApply={() => apply()} onReset={() => setDraft(EMPTY_FILTERS)} count={draftCount} variant="sheet" />
      </BottomSheet>
    </div>
  );
}
