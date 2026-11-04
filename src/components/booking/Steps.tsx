import { Fragment } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = ["Vaqt tanlash", "Ma'lumotlar", "To'lov"];

/** current: hozirgi bosqich (1-dan boshlab). Undan oldingilari "bajarilgan". */
export function Steps({ current }: { current: 1 | 2 | 3 }) {
  return (
    <ol className="flex items-center gap-2 lg:gap-0" aria-label="Bron bosqichlari">
      {STEPS.map((label, i) => {
        const n = i + 1;
        const done = n < current;
        const todo = n > current;
        return (
          <Fragment key={label}>
            {i > 0 && <li aria-hidden className="h-0.5 flex-1 bg-line lg:mx-3 lg:w-[72px] lg:flex-none" />}
            <li className="flex items-center gap-2" aria-current={n === current ? "step" : undefined}>
              <span
                className={cn(
                  "grid size-7 place-items-center rounded-full text-[13px] font-bold",
                  todo ? "bg-subtle text-muted" : "bg-accent text-white",
                )}
              >
                {done ? <Check className="size-4" aria-hidden /> : n}
              </span>
              <span className={cn("text-[13px] font-semibold lg:text-sm", todo && "text-muted")}>{label}</span>
            </li>
          </Fragment>
        );
      })}
    </ol>
  );
}
