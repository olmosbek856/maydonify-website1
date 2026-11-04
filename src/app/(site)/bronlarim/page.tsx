import type { Metadata } from "next";
import { requireBooking } from "@/lib/bookingGuard";
import { MyBookings } from "@/components/bookings/MyBookings";

export const metadata: Metadata = {
  title: "Bronlarim",
  robots: { index: false },
};

export default function MyBookingsPage() {
  requireBooking();
  return (
    <div className="container-page pb-10 pt-6 lg:pt-10">
      <h1 className="text-[26px] font-bold tracking-[-0.8px] lg:text-4xl">Bronlarim</h1>
      <p className="mt-2 text-sm text-muted lg:text-base">Kelgusi va o&apos;tgan bronlaringizni shu yerdan boshqarasiz.</p>
      <MyBookings />
    </div>
  );
}
