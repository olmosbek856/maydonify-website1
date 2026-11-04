import type { Metadata } from "next";
import { BOOKING_DAYS, DISTRICTS, PITCHES, SLOT_TIMES, type District } from "@/lib/data";
import { Breadcrumb } from "@/components/ui/Basics";
import { PitchesBrowser } from "@/components/pitches/PitchesBrowser";
import { EMPTY_FILTERS, type Filters } from "@/lib/filters";

export const metadata: Metadata = {
  title: "Maydonlar",
  description: "Toshkentdagi mini-futbol maydonlari: bo'sh vaqtni tanlang, narxlarni solishtiring va onlayn bron qiling.",
  alternates: { canonical: "/maydonlar" },
};

type SP = Promise<Record<string, string | string[] | undefined>>;

export default async function PitchesPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const one = (k: string) => (Array.isArray(sp[k]) ? sp[k]?.[0] : sp[k]) as string | undefined;

  const tuman = one("tuman");
  const sana = one("sana");
  const vaqt = one("vaqt");

  const initial: Filters = {
    ...EMPTY_FILTERS,
    districts: tuman && (DISTRICTS as readonly string[]).includes(tuman) ? [tuman as District] : [],
    date: sana && BOOKING_DAYS.some((d) => d.date === sana) ? sana : "",
    time: vaqt && SLOT_TIMES.includes(vaqt) ? vaqt : "",
  };

  return (
    <div className="container-page pb-16 pt-6 lg:pb-24 lg:pt-10">
      <Breadcrumb items={[{ label: "Bosh sahifa", href: "/" }, { label: "Maydonlar" }]} />
      <div className="mb-5 mt-4 lg:mb-8">
        <h1 className="text-[26px] font-bold tracking-[-0.8px] lg:text-4xl">Maydonlar · {PITCHES.length}</h1>
        <p className="mt-2 text-sm text-muted lg:text-base">
          Toshkentdagi mini-futbol maydonlari — bo&apos;sh vaqtni tanlang va onlayn bron qiling.
        </p>
      </div>
      <PitchesBrowser key={`${initial.districts.join()}|${initial.date}|${initial.time}`} initial={initial} />
    </div>
  );
}
