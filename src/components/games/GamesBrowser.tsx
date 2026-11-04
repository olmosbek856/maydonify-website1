"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Calendar, ChevronDown, Clock3, Info, MapPin, Plus, Trophy, X } from "lucide-react";
import {
  BOOKING_DAYS,
  DISTRICTS,
  GAMES,
  GAME_TYPE_LABEL,
  LEVELS,
  PITCHES,
  PLAYERS,
  SLOT_TIMES,
  type Game,
  type GameType,
  type Level,
} from "@/lib/data";
import { cn, formatSom, hourRange } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";

/** O'yin yaratish/qo'shilish to'lov talab qiladi — bron yoqilmaguncha yashirin. */
const canCreate = siteConfig.bookingEnabled;
import { GameCard } from "@/components/cards/GameCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/Basics";
import { SelectField } from "@/components/ui/Field";
import { CloseButton, Modal, Toast } from "@/components/ui/Overlay";

type Tab = "all" | GameType;
const TABS: [Tab, string][] = [
  ["all", "Hammasi"],
  ["open", "Ochiq o'yinlar"],
  ["team", "Jamoa vs jamoa"],
];

/** Prototipdagi filtr tugmasi: ikonka + "Nom: qiymat" + chevron, ustida ko'rinmas <select>. */
function FilterButton({
  icon,
  label,
  value,
  options,
  onChange,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  options: readonly string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="relative inline-flex h-10 cursor-pointer items-center gap-2 rounded-btn border border-line bg-surface px-3.5 text-sm font-medium hover:bg-subtle">
      <span className="text-muted">{icon}</span>
      {label}: {value || "Barchasi"}
      <ChevronDown className="size-4 text-muted" aria-hidden />
      <select aria-label={label} value={value} onChange={(e) => onChange(e.target.value)} className="absolute inset-0 cursor-pointer opacity-0">
        <option value="">Barchasi</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function GameDetail({ game, joined, onJoin, onClose }: { game: Game; joined: boolean; onJoin: () => void; onClose: () => void }) {
  const full = game.joined >= game.total;
  return (
    <>
      <div className="border-b border-line p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-2.5 flex flex-wrap gap-2">
              <Badge tone={game.type === "open" ? "blue" : "green"}>{GAME_TYPE_LABEL[game.type]}</Badge>
              <Badge tone="grey">{game.level}</Badge>
            </div>
            <h2 className="text-2xl font-bold tracking-[-0.4px]">{game.pitch}</h2>
            <div className="mt-2.5 flex flex-wrap items-center gap-4 text-[13px] text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" aria-hidden />
                {game.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="size-4" aria-hidden />
                {game.time}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" aria-hidden />
                {game.district} tumani
              </span>
            </div>
          </div>
          <CloseButton onClick={onClose} />
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <h3 className="text-[15px] font-semibold">
            O&apos;yinchilar · {game.joined}/{game.total}
          </h3>
          <span className="text-[13px] text-muted">Har bir o&apos;yinchi {formatSom(game.price)} to&apos;laydi</span>
        </div>
        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {Array.from({ length: game.total }, (_, i) => {
            const taken = i < game.joined;
            const name = taken ? (joined && i === game.joined - 1 ? "Siz" : PLAYERS[i % PLAYERS.length]) : null;
            return (
              <li key={i} className={cn("flex items-center gap-2.5 rounded-btn border border-line p-2.5", taken ? "bg-surface" : "bg-bg")}>
                <span className={cn("grid size-8 place-items-center rounded-full", taken ? "bg-accent-soft text-accent" : "bg-subtle text-muted")}>
                  {name ? <span className="text-[13px] font-bold">{name[0]}</span> : <Plus className="size-4" aria-hidden />}
                </span>
                <div>
                  <div className={cn("text-sm", name ? "font-medium" : "text-muted")}>{name ?? "Bo'sh joy"}</div>
                  {name && <div className="text-[11px] text-success">To&apos;lagan</div>}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex items-start gap-2.5 rounded-xl bg-accent-soft p-3.5">
          <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
          <p className="text-[13px] leading-relaxed text-accent">
            Har bir o&apos;yinchi o&apos;z ulushini oldindan to&apos;laydi. O&apos;yin boshlanishidan 24 soat oldin bekor qilsangiz, pul to&apos;liq
            qaytariladi.
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-line pt-5">
          <div>
            <div className="text-xs text-muted">Qatnashish narxi</div>
            <div className="text-[22px] font-bold tracking-[-0.4px]">{formatSom(game.price)}</div>
          </div>
          {joined ? (
            <Button size="lg" disabled>
              Siz qo&apos;shildingiz
            </Button>
          ) : full ? (
            <Button size="lg" disabled>
              O&apos;yin to&apos;ldi
            </Button>
          ) : !siteConfig.bookingEnabled ? (
            <Button size="lg" disabled>
              Qo&apos;shilish — tez orada
            </Button>
          ) : (
            <Button size="lg" onClick={onJoin}>
              Qo&apos;shilish — {formatSom(game.price)}
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

function CreateGameForm({ onCreate }: { onCreate: (g: Game) => void }) {
  const [pitch, setPitch] = useState(PITCHES[0].name);
  const [date, setDate] = useState(BOOKING_DAYS[5].date);
  const [time, setTime] = useState("20:00");
  const [type, setType] = useState<string>(GAME_TYPE_LABEL.open);
  const [level, setLevel] = useState<Level>("O'rta daraja");
  const [total, setTotal] = useState("12");

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const p = PITCHES.find((x) => x.name === pitch)!;
        const n = Number(total);
        onCreate({
          id: Date.now(),
          type: type === GAME_TYPE_LABEL.team ? "team" : "open",
          level,
          date,
          time: hourRange(time),
          pitch: p.name,
          district: p.district,
          joined: 1,
          total: n,
          price: Math.ceil(p.price / n / 1000) * 1000,
        });
      }}
    >
      <SelectField label="Maydon" options={PITCHES.map((p) => p.name)} value={pitch} onChange={(e) => setPitch(e.target.value)} />
      <div className="grid grid-cols-2 gap-3">
        <SelectField label="Sana" options={BOOKING_DAYS.map((d) => d.date)} value={date} onChange={(e) => setDate(e.target.value)} />
        <SelectField label="Vaqt" options={SLOT_TIMES} value={time} onChange={(e) => setTime(e.target.value)} />
        <SelectField label="Turi" options={Object.values(GAME_TYPE_LABEL)} value={type} onChange={(e) => setType(e.target.value)} />
        <SelectField label="O'yinchilar soni" options={["10", "12", "14"]} value={total} onChange={(e) => setTotal(e.target.value)} />
      </div>
      <SelectField label="Daraja" options={LEVELS} value={level} onChange={(e) => setLevel(e.target.value as Level)} />
      <Button type="submit" size="lg" className="w-full">
        O&apos;yinni e&apos;lon qilish
      </Button>
    </form>
  );
}

export function GamesBrowser({ initialGameId }: { initialGameId?: number }) {
  const [games, setGames] = useState<Game[]>(GAMES);
  const [tab, setTab] = useState<Tab>("all");
  const [district, setDistrict] = useState("");
  const [date, setDate] = useState("");
  const [level, setLevel] = useState("");
  const [openId, setOpenId] = useState<number | null>(initialGameId && GAMES.some((g) => g.id === initialGameId) ? initialGameId : null);
  const [joinedIds, setJoinedIds] = useState<number[]>([]);
  const [creating, setCreating] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const list = useMemo(
    () =>
      games.filter(
        (g) => (tab === "all" || g.type === tab) && (!district || g.district === district) && (!date || g.date === date) && (!level || g.level === level),
      ),
    [games, tab, district, date, level],
  );
  const openGame = games.find((g) => g.id === openId) ?? null;
  const hasFilters = !!(district || date || level);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold tracking-[-0.8px] lg:text-4xl">Guruh o&apos;yinlari</h1>
          <p className="mt-2 text-sm text-muted lg:text-base">Ochiq o&apos;yinga qo&apos;shiling yoki jamoangiz uchun raqib toping.</p>
        </div>
        {canCreate && (
          <Button icon={Plus} onClick={() => setCreating(true)} className="hidden sm:inline-flex">
            O&apos;yin yaratish
          </Button>
        )}
      </div>

      <div className="hide-scroll mt-6 flex gap-7 overflow-x-auto border-b border-line" role="tablist" aria-label="O'yin turi">
        {TABS.map(([k, label]) => (
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
            {label}
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2.5">
        <FilterButton icon={<MapPin className="size-4" />} label="Tuman" value={district} options={DISTRICTS} onChange={setDistrict} />
        <FilterButton icon={<Calendar className="size-4" />} label="Sana" value={date} options={BOOKING_DAYS.map((d) => d.date)} onChange={setDate} />
        <FilterButton icon={<Trophy className="size-4" />} label="Daraja" value={level} options={LEVELS} onChange={setLevel} />
        {hasFilters && (
          <button
            type="button"
            onClick={() => {
              setDistrict("");
              setDate("");
              setLevel("");
            }}
            className="inline-flex h-10 items-center gap-1.5 px-2.5 text-sm font-medium text-muted hover:text-ink"
          >
            <X className="size-4" aria-hidden /> Tozalash
          </button>
        )}
      </div>

      {list.length === 0 ? (
        <div className="mt-6">
          <EmptyState
            icon={<Trophy className="size-7" />}
            title="Mos o'yin topilmadi"
            text={
              canCreate
                ? "Filtrlarni o'zgartiring yoki o'zingiz o'yin yaratib, boshqa o'yinchilarni taklif qiling."
                : "Filtrlarni o'zgartirib ko'ring — boshqa tuman yoki sanada o'yinlar bo'lishi mumkin."
            }
            action={
              canCreate ? (
                <Button icon={Plus} onClick={() => setCreating(true)}>
                  O&apos;yin yaratish
                </Button>
              ) : undefined
            }
          />
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {list.map((g) => (
            <GameCard key={g.id} game={g} onJoin={() => setOpenId(g.id)} />
          ))}
        </div>
      )}

      {canCreate && (
        <div className="mt-6 sm:hidden">
          <Button icon={Plus} onClick={() => setCreating(true)} className="w-full">
            O&apos;yin yaratish
          </Button>
        </div>
      )}

      <Modal open={!!openGame} onClose={() => setOpenId(null)} title={openGame?.pitch ?? "O'yin"} bare>
        {openGame && (
          <GameDetail
            game={openGame}
            joined={joinedIds.includes(openGame.id)}
            onClose={() => setOpenId(null)}
            onJoin={() => {
              setGames((all) => all.map((x) => (x.id === openGame.id ? { ...x, joined: x.joined + 1 } : x)));
              setJoinedIds((ids) => [...ids, openGame.id]);
              setToast(`Siz "${openGame.pitch}" o'yiniga qo'shildingiz`);
            }}
          />
        )}
      </Modal>

      <Modal open={creating} onClose={() => setCreating(false)} title="Yangi o'yin yaratish">
        <CreateGameForm
          onCreate={(g) => {
            setGames((all) => [g, ...all]);
            setJoinedIds((ids) => [...ids, g.id]);
            setTab("all");
            setDistrict("");
            setDate("");
            setLevel("");
            setCreating(false);
            setToast("O'yin e'lon qilindi — o'yinchilar qo'shilishini kuting");
          }}
        />
      </Modal>

      <Toast open={!!toast} message={toast ?? ""} onClose={() => setToast(null)} />
    </>
  );
}
