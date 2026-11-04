import type { Metadata } from "next";
import { requireBooking } from "@/lib/bookingGuard";
import { BOOKING_DAYS, PITCHES, SLOT_TIMES, getPitch } from "@/lib/data";
import { Steps } from "@/components/booking/Steps";
import { CheckoutForm } from "@/components/booking/CheckoutForm";

export const metadata: Metadata = {
  title: "Bronni tasdiqlash",
  robots: { index: false },
};

type SP = Promise<Record<string, string | string[] | undefined>>;

export default async function CheckoutPage({ searchParams }: { searchParams: SP }) {
  requireBooking();
  const sp = await searchParams;
  const one = (k: string) => (Array.isArray(sp[k]) ? sp[k]?.[0] : sp[k]) as string | undefined;

  const pitch = getPitch(one("maydon") ?? "") ?? PITCHES[0];
  const sana = one("sana");
  const vaqt = one("vaqt");
  const date = sana && BOOKING_DAYS.some((d) => d.date === sana) ? sana : BOOKING_DAYS[5].date;
  const time = vaqt && SLOT_TIMES.includes(vaqt) ? vaqt : "20:00";

  return (
    <div className="container-page pb-24 pt-6 lg:pb-10 lg:pt-10">
      <h1 className="sr-only">Bronni tasdiqlash</h1>
      <div className="mb-6 lg:mb-8">
        <Steps current={2} />
      </div>
      <CheckoutForm pitch={pitch} date={date} time={time} />
    </div>
  );
}
