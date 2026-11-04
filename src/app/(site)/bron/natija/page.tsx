import type { Metadata } from "next";
import { requireBooking } from "@/lib/bookingGuard";
import { CircleCheck, CircleX } from "lucide-react";
import { BOOKING_DAYS, PITCHES, SLOT_TIMES, getPitch } from "@/lib/data";
import { formatSom, hourRange } from "@/lib/utils";
import { ButtonLink, buttonClasses } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "To'lov natijasi",
  robots: { index: false },
};

type SP = Promise<Record<string, string | string[] | undefined>>;

export default async function ResultPage({ searchParams }: { searchParams: SP }) {
  requireBooking();
  const sp = await searchParams;
  const one = (k: string) => (Array.isArray(sp[k]) ? sp[k]?.[0] : sp[k]) as string | undefined;

  const ok = one("holat") !== "xato" && one("ok") !== "0";
  const pitch = getPitch(one("maydon") ?? "") ?? PITCHES[0];
  const sana = one("sana");
  const vaqt = one("vaqt");
  const date = sana && BOOKING_DAYS.some((d) => d.date === sana) ? sana : BOOKING_DAYS[5].date;
  const time = vaqt && SLOT_TIMES.includes(vaqt) ? vaqt : "20:00";
  const retry = `/bron?${new URLSearchParams({ maydon: pitch.slug, sana: date, vaqt: time }).toString()}`;

  const address = `${pitch.district} tumani, ${pitch.address}`;
  const [d, m, y] = date.split(".");
  const startHour = Number(time.slice(0, 2));
  const end = startHour >= 23 ? "235900" : `${String(startHour + 1).padStart(2, "0")}0000`;
  const calendarHref = `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: "TEMPLATE",
    text: `Futbol — ${pitch.name}`,
    dates: `${y}${m}${d}T${time.replace(":", "")}00/${y}${m}${d}T${end}`,
    ctz: "Asia/Tashkent",
    location: `Toshkent, ${address}`,
    details: "MiniPolya orqali bron qilingan. Bron raqami: #MP-20481",
  }).toString()}`;

  const rows: [string, string][] = [
    ["Maydon", pitch.name],
    ["Sana", date],
    ["Vaqt", hourRange(time)],
    ["Manzil", address],
    ["To'langan summa", formatSom(pitch.price)],
  ];

  return (
    <div className="flex min-h-[calc(100vh-72px)] items-center justify-center px-5 py-12 pb-24 lg:pb-12">
      <div className="flex w-full max-w-[600px] flex-col items-center gap-5 rounded-card border border-line bg-surface p-6 shadow-card lg:p-10">
        <span className={`grid size-16 place-items-center rounded-full lg:size-[72px] ${ok ? "bg-success-soft" : "bg-danger-soft"}`}>
          {ok ? (
            <CircleCheck className="size-8 text-success lg:size-9" aria-hidden />
          ) : (
            <CircleX className="size-8 text-danger lg:size-9" aria-hidden />
          )}
        </span>
        <h1 className="text-center text-2xl font-bold tracking-[-0.6px] lg:text-[28px]">
          {ok ? "Bron tasdiqlandi!" : "To'lov amalga oshmadi"}
        </h1>
        <p className="max-w-[440px] text-center text-sm leading-relaxed text-muted lg:text-[15px]">
          {ok
            ? "Bron raqami: #MP-20481. Tasdiq SMS orqali yuborildi."
            : "Bank kartangiz to'lovni tasdiqlamadi. Mablag' yechilmadi — qayta urinib ko'ring."}
        </p>

        {ok ? (
          <dl className="w-full space-y-2.5 rounded-xl bg-subtle p-4 lg:p-5">
            {rows.map(([k, v], i) => (
              <div key={k} className="flex items-center justify-between gap-4 text-sm">
                <dt className="text-muted">{k}</dt>
                <dd className={`text-right ${i === 4 ? "font-bold" : "font-medium"}`}>{v}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <div className="w-full rounded-xl bg-danger-soft p-4">
            <div className="text-[13px] font-semibold text-danger">Xatolik kodi: 3DS-05</div>
            <p className="mt-1 text-[13px] text-danger">Karta egasi tomonidan tasdiqlash bekor qilindi yoki vaqt tugadi.</p>
          </div>
        )}

        <div className="grid w-full gap-2.5">
          {ok ? (
            <ButtonLink href="/bronlarim" className="w-full">
              Bronlarim
            </ButtonLink>
          ) : (
            <ButtonLink href={retry} className="w-full">
              Qayta urinish
            </ButtonLink>
          )}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {ok ? (
              <>
                <a
                  href={`https://yandex.uz/maps/?text=${encodeURIComponent(`Toshkent, ${address}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses({ variant: "secondary" })}
                >
                  Xaritada ko&apos;rish
                </a>
                <a href={calendarHref} target="_blank" rel="noopener noreferrer" className={buttonClasses({ variant: "ghost" })}>
                  Kalendarga qo&apos;shish
                </a>
              </>
            ) : (
              <ButtonLink href={retry} variant="secondary">
                Boshqa karta bilan to&apos;lash
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
