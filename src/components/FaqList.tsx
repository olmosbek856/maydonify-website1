import { Minus, Plus } from "lucide-react";

export function FaqList({ items }: { items: [string, string][] }) {
  return (
    <div className="border-t border-line">
      {items.map(([q, a], i) => (
        <details key={q} className="group border-b border-line py-4 lg:py-5" open={i === 0}>
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4">
            <span className="text-[15px] font-semibold lg:text-[17px]">{q}</span>
            <Plus className="size-5 shrink-0 text-muted group-open:hidden" aria-hidden />
            <Minus className="hidden size-5 shrink-0 text-muted group-open:block" aria-hidden />
          </summary>
          <p className="mt-3 max-w-[900px] text-sm leading-[1.7] text-muted lg:text-[15px]">{a}</p>
        </details>
      ))}
    </div>
  );
}
