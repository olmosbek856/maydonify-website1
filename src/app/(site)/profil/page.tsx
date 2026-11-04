import type { Metadata } from "next";
import { requireBooking } from "@/lib/bookingGuard";
import { ProfileView } from "@/components/profile/ProfileView";

export const metadata: Metadata = {
  title: "Profil",
  robots: { index: false },
};

export default function ProfilePage() {
  requireBooking();
  return (
    <div className="container-page pb-10 pt-6 lg:pt-10">
      <h1 className="text-[26px] font-bold tracking-[-0.8px] lg:text-4xl">Profil</h1>
      <p className="mt-2 text-sm text-muted lg:text-base">Shaxsiy ma&apos;lumotlar va sozlamalar.</p>
      <ProfileView />
    </div>
  );
}
