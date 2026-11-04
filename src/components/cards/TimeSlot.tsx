import type { SlotState } from "@/lib/data";
import { cn } from "@/lib/utils";

const STYLES: Record<SlotState | "selected", string> = {
  free: "border-line bg-surface text-ink hover:border-accent hover:text-accent",
  selected: "border-accent bg-accent text-white",
  taken: "cursor-not-allowed border-subtle bg-subtle text-muted line-through",
  few: "border-warning-soft bg-warning-soft text-warning hover:border-warning",
};

export function TimeSlot({
  time,
  state,
  selected,
  onSelect,
}: {
  time: string;
  state: SlotState;
  selected?: boolean;
  onSelect?: (time: string) => void;
}) {
  const taken = state === "taken";
  const label = taken ? `${time} — band` : state === "few" ? `${time} — kam qoldi` : time;
  return (
    <button
      type="button"
      disabled={taken}
      aria-pressed={selected}
      aria-label={label}
      title={state === "few" ? "Kam qoldi" : undefined}
      onClick={() => onSelect?.(time)}
      className={cn(
        "h-11 rounded-btn border text-sm font-medium tabular-nums transition-colors",
        STYLES[selected ? "selected" : state],
      )}
    >
      {time}
    </button>
  );
}
