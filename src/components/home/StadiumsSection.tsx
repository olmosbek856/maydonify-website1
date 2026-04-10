"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { StadiumCard } from "@/components/home/StadiumCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { Stadium } from "@/lib/types";

const BASE = "https://images.unsplash.com";
const Q = "w=800&h=450&fit=crop&crop=center&q=85&auto=format";

const STADIUMS: Stadium[] = [
  {
    id: "1",
    name: "Spartak Mini Arena",
    location: "Chilonzor tumani",
    district: "Chilonzor",
    price: 150000,
    rating: 4.9,
    reviews: 84,
    size: "40×20m",
    surface: "Sun'iy o't",
    available: true,
    badge: "top",
    photo: `${BASE}/photo-1574629810360-7efbbe195018?${Q}`,
  },
  {
    id: "2",
    name: "Lokomotiv Sport Park",
    location: "Yunusobod tumani",
    district: "Yunusobod",
    price: 180000,
    rating: 4.8,
    reviews: 61,
    size: "50×30m",
    surface: "Sun'iy o't",
    available: true,
    badge: "free_today",
    photo: `${BASE}/photo-1431324155629-1a6deb1dec8d?${Q}`,
  },
  {
    id: "3",
    name: "Bunyodkor Arena Zone",
    location: "Mirzo Ulug'bek tumani",
    district: "Mirzo Ulug'bek",
    price: 200000,
    rating: 4.7,
    reviews: 112,
    size: "60×40m",
    surface: "Tabiiy o't",
    available: true,
    badge: "urgent",
    photo: `${BASE}/photo-1459865264687-595d652de67e?${Q}`,
  },
  {
    id: "4",
    name: "Dinamo FC Field",
    location: "Shayxontohur tumani",
    district: "Shayxontohur",
    price: 130000,
    rating: 4.6,
    reviews: 45,
    size: "40×20m",
    surface: "Sun'iy o't",
    available: true,
    badge: "free_today",
    photo: `${BASE}/photo-1553778263-73a83bab9b0c?${Q}`,
  },
  {
    id: "5",
    name: "Green Field Center",
    location: "Sergeli tumani",
    district: "Sergeli",
    price: 120000,
    rating: 4.5,
    reviews: 38,
    size: "35×18m",
    surface: "Sun'iy o't",
    available: true,
    badge: "urgent",
    photo: `${BASE}/photo-1517466787929-bc90951d0974?${Q}`,
  },
  {
    id: "6",
    name: "Olympic Park Arena",
    location: "Olmazor tumani",
    district: "Olmazor",
    price: 165000,
    rating: 4.8,
    reviews: 73,
    size: "45×25m",
    surface: "Sun'iy o't",
    available: true,
    badge: "top",
    photo: `${BASE}/photo-1522778119026-d647f0596c20?${Q}`,
  },
];

const CARD_DELAYS = [100, 200, 300, 100, 200, 300] as const;

export default function StadiumsSection() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05, rootMargin: "0px 0px -32px 0px" });

  return (
    <SectionWrapper id="stadiums" theme="light">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-12">
        <Badge variant="light" className="mb-4 reveal">{t.stadiums.badge}</Badge>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-900 tracking-tight mb-4 reveal delay-100">
          {t.stadiums.headline}
        </h2>
        <p className="text-slate-500 text-lg max-w-md mx-auto reveal delay-200">
          {t.stadiums.subheadline}
        </p>
      </div>

      {/* Card grid */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {STADIUMS.map((stadium, index) => (
          <div key={stadium.id} className={`reveal delay-${CARD_DELAYS[index]}`}>
            <StadiumCard stadium={stadium} />
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-10">
        <Button
          variant="outline"
          size="lg"
          className="border-dark-700 text-dark-900 hover:bg-dark-900/5"
        >
          {t.stadiums.viewAll}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8H13M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </SectionWrapper>
  );
}
