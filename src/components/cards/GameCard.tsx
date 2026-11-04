import { Calendar, MapPin } from "lucide-react";
import { GAME_TYPE_LABEL, type Game } from "@/lib/data";
import { cn, formatSom } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

const joinLabel = siteConfig.bookingEnabled ? "Qo'shilish" : "Ko'rish";

export function GameCard({ game, onJoin }: { game: Game; onJoin?: (g: Game) => void }) {
  const full = game.joined >= game.total;
  const pct = Math.round((game.joined / game.total) * 100);
  const left = game.total - game.joined;

  return (
    <article className="flex flex-col gap-3.5 rounded-card border border-line bg-surface p-5 shadow-card transition-shadow hover:shadow-hover">
      <div className="flex items-center justify-between gap-2">
        {full ? (
          <Badge tone="grey">To&apos;ldi</Badge>
        ) : (
          <Badge tone={game.type === "open" ? "blue" : "green"}>{GAME_TYPE_LABEL[game.type]}</Badge>
        )}
        <span className="text-xs font-medium text-muted">{game.level}</span>
      </div>
      <p className="flex items-center gap-2 text-sm font-medium">
        <Calendar className="size-[18px] text-muted" aria-hidden />
        {game.date} · {game.time}
      </p>
      <div>
        <h3 className="text-[17px] font-semibold">{game.pitch}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-[13px] text-muted">
          <MapPin className="size-[15px]" aria-hidden />
          {game.district} tumani
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between text-[13px]">
          <span className="font-medium">
            {game.joined}/{game.total} o&apos;yinchi
          </span>
          <span className={cn(full ? "text-muted" : left <= 2 ? "font-medium text-warning" : "text-muted")}>
            {full ? "Joy qolmadi" : `${left} joy qoldi`}
          </span>
        </div>
        <div
          className="mt-2 h-1.5 overflow-hidden rounded-full bg-subtle"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={game.total}
          aria-valuenow={game.joined}
          aria-label="Band joylar"
        >
          <div className={cn("h-full rounded-full", full ? "bg-muted" : "bg-accent")} style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between gap-2 pt-1">
        <p>
          <span className="text-[17px] font-bold">{formatSom(game.price)}</span>
          <span className="text-[13px] text-muted"> / o&apos;yinchi</span>
        </p>
        {full ? (
          <Button size="sm" disabled>
            To&apos;ldi
          </Button>
        ) : onJoin ? (
          <Button size="sm" onClick={() => onJoin(game)}>
            {joinLabel}
          </Button>
        ) : (
          <ButtonLink size="sm" href={`/oyinlar?oyin=${game.id}`}>
            {joinLabel}
          </ButtonLink>
        )}
      </div>
    </article>
  );
}
