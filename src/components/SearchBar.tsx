"use client";

import { useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Calendar, ChevronDown, Clock3, MapPin, Search } from "lucide-react";
import { BOOKING_DAYS, DISTRICTS, SLOT_TIMES } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function Segment({
  label,
  icon,
  value,
  onChange,
  options,
  className,
}: {
  label: string;
  icon: ReactNode;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <label className={cn("relative block cursor-pointer rounded-btn px-3 py-2 hover:bg-subtle lg:px-4", className)}>
      <span className="block text-[11px] text-muted lg:text-xs">{label}</span>
      <span className="mt-1 flex items-center gap-1.5">
        <span className="text-muted">{icon}</span>
        <span className="truncate text-[13px] font-semibold lg:text-[15px]">
          {options.find((o) => o.value === value)?.label}
        </span>
        <ChevronDown className="ml-auto size-4 shrink-0 text-muted" aria-hidden />
      </span>
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 cursor-pointer opacity-0"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function SearchBar() {
  const router = useRouter();
  const [district, setDistrict] = useState<string>("Chilonzor");
  const [date, setDate] = useState(BOOKING_DAYS[5].date);
  const [time, setTime] = useState("20:00");

  const districtOptions = [{ value: "", label: "Barcha tumanlar" }, ...DISTRICTS.map((d) => ({ value: d, label: d }))];
  const dateOptions = BOOKING_DAYS.map((d) => ({ value: d.date, label: d.date }));
  const timeOptions = SLOT_TIMES.map((t) => ({ value: t, label: t }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = new URLSearchParams();
    if (district) q.set("tuman", district);
    q.set("sana", date);
    q.set("vaqt", time);
    router.push(`/maydonlar?${q.toString()}`);
  };

  const icon = "size-4 lg:size-[18px]";

  return (
    <form
      onSubmit={submit}
      role="search"
      className="w-full rounded-card bg-surface p-3 shadow-hover lg:flex lg:max-w-[1080px] lg:items-center lg:p-2"
    >
      <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-1 lg:items-center lg:gap-0">
        <Segment
          label="Tuman"
          icon={<MapPin className={icon} aria-hidden />}
          value={district}
          onChange={setDistrict}
          options={districtOptions}
          className="border border-line lg:flex-1 lg:border-0"
        />
        <span className="hidden h-11 w-px bg-line lg:block" aria-hidden />
        <Segment
          label="Sana"
          icon={<Calendar className={icon} aria-hidden />}
          value={date}
          onChange={setDate}
          options={dateOptions}
          className="border border-line lg:flex-1 lg:border-0"
        />
        <span className="hidden h-11 w-px bg-line lg:block" aria-hidden />
        <Segment
          label="Vaqt"
          icon={<Clock3 className={icon} aria-hidden />}
          value={time}
          onChange={setTime}
          options={timeOptions}
          className="border border-line lg:flex-1 lg:border-0"
        />
        <Button type="submit" icon={Search} className="h-full min-h-[52px] lg:ml-2 lg:h-14 lg:px-6">
          Qidirish
        </Button>
      </div>
    </form>
  );
}
