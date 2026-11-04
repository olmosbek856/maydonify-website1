import Image from "next/image";
import Link from "next/link";
import { Car, Droplets, MapPin, Shirt, Star, Sun, Users, Dumbbell, type LucideIcon } from "lucide-react";
import type { Amenity, Pitch } from "@/lib/data";
import { formatSom } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";
import { buttonClasses } from "@/components/ui/Button";

export const AMENITY_ICON: Record<Amenity, LucideIcon> = {
  "Kiyinish xonasi": Shirt,
  Dush: Droplets,
  Yoritish: Sun,
  Parkovka: Car,
  "Tomoshabin o'rni": Users,
  Inventar: Dumbbell,
};

export function PitchCard({ pitch, priority = false, variant }: { pitch: Pitch; priority?: boolean; variant?: "list" }) {
  const href = `/maydon/${pitch.slug}`;
  return (
    <article className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface shadow-card transition-shadow hover:shadow-hover">
      <Link href={href} className="relative block h-[190px] overflow-hidden lg:h-[240px]" tabIndex={-1} aria-hidden>
        <Image
          src={variant === "list" ? (pitch.listImage ?? pitch.image) : pitch.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1280px) 384px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-ink">
          {pitch.type}
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-lg font-semibold leading-snug">
          <Link href={href} className="hover:text-accent">
            {pitch.name}
          </Link>
        </h3>
        <p className="flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="size-4 shrink-0" aria-hidden />
          {pitch.district} tumani
        </p>
        <p className="flex items-center gap-1.5 text-sm">
          <Star className="size-4 fill-warning text-warning" aria-hidden />
          <span className="font-semibold">{pitch.rating.toFixed(1)}</span>
          <span className="text-muted">({pitch.reviews} sharh)</span>
        </p>
        <ul className="flex items-center gap-4 text-muted" aria-label="Qulayliklar">
          {pitch.amenities.slice(0, 4).map((a) => {
            const Icon = AMENITY_ICON[a];
            return (
              <li key={a} title={a}>
                <Icon className="size-[18px]" aria-hidden />
                <span className="sr-only">{a}</span>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto pt-1">
          <p className="mb-3">
            <span className="text-lg font-bold">{formatSom(pitch.price)}</span>
            <span className="text-[13px] text-muted"> / soat</span>
          </p>
          <Link href={href} className={buttonClasses({ className: "w-full" })}>
            {siteConfig.bookingEnabled ? "Bron qilish" : "Batafsil"}
          </Link>
        </div>
      </div>
    </article>
  );
}
