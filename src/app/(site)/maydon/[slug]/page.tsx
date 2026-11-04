import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Building, Check, Clock3, LayoutGrid, Lightbulb, MapPin, Ruler, Star, Sun, Trophy, Users } from "lucide-react";
import { GALLERY_DESKTOP, GALLERY_MOBILE, GAMES, PITCHES, PITCH_REVIEWS, PITCH_RULES, getPitch, ratingDistribution } from "@/lib/data";
import { siteConfig } from "@/lib/siteConfig";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb, SectionHead } from "@/components/ui/Basics";
import { ButtonLink, buttonClasses } from "@/components/ui/Button";
import { AMENITY_ICON, PitchCard } from "@/components/cards/PitchCard";
import { GameCard } from "@/components/cards/GameCard";
import { BookingPanel } from "@/components/pitch/BookingPanel";
import { ShareButtons } from "@/components/pitch/ShareButtons";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return PITCHES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const p = getPitch((await params).slug);
  if (!p) return {};
  return {
    title: p.name,
    description: `${p.name} — ${p.district} tumani, ${p.size} ${p.type.toLowerCase()} maydon. Bo'sh vaqtni tanlang va onlayn bron qiling.`,
    alternates: { canonical: `/maydon/${p.slug}` },
  };
}

function Section({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

const Stars = ({ className }: { className: string }) => (
  <span className="flex gap-0.5" aria-label="5 yulduz">
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`${className} fill-warning text-warning`} aria-hidden />
    ))}
  </span>
);

export default async function PitchPage({ params }: { params: Params }) {
  const pitch = getPitch((await params).slug);
  if (!pitch) notFound();

  const fullAddress = `${pitch.district} tumani, ${pitch.address}`;
  const mapsHref = `https://yandex.uz/maps/?text=${encodeURIComponent(`Toshkent, ${fullAddress}`)}`;
  const info = [
    { icon: Ruler, label: "Maydon o'lchami", value: pitch.size },
    { icon: Sun, label: "Qoplama", value: "Sun'iy o'tloq" },
    { icon: Lightbulb, label: "Yoritish", value: pitch.amenities.includes("Yoritish") ? "Bor" : "Yo'q" },
    { icon: Users, label: "Sig'im", value: `${pitch.capacity} kishi` },
    { icon: Clock3, label: "Ish vaqti", value: "08:00–24:00" },
    { icon: Building, label: "Turi", value: `${pitch.type} maydon` },
  ];
  const dist = ratingDistribution(pitch.reviews);

  // Shu maydondagi o'yinlar (yetmasa — boshqa yaqin o'yinlar bilan to'ldiriladi)
  const games = [...GAMES.filter((g) => g.pitch === pitch.name), ...GAMES.filter((g) => g.pitch !== pitch.name)].slice(0, 2);
  // Canvas: ro'yxatdagi keyingi 3 ta maydon
  const similar = PITCHES.filter((p) => p.slug !== pitch.slug).slice(0, 3);

  return (
    <div className="container-page pb-24 pt-5 lg:pb-0 lg:pt-8">
      <Breadcrumb items={[{ label: "Bosh sahifa", href: "/" }, { label: "Maydonlar", href: "/maydonlar" }, { label: pitch.name }]} />

      {/* Galereya: 1 katta + kichiklar (canvas: desktop 4 ta, mobil 3 ta) */}
      <div className="mt-4 grid grid-cols-1 gap-2.5 lg:grid-cols-[1.55fr_1fr] lg:gap-4">
        <div className="relative h-[220px] overflow-hidden rounded-img lg:h-[460px]">
          <Image src={pitch.image} alt={pitch.name} fill priority sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" />
        </div>
        <div className="grid grid-cols-3 gap-2.5 lg:hidden">
          {GALLERY_MOBILE.map((src, i) => (
            <div key={i} className="relative h-[74px] overflow-hidden rounded-img">
              <Image src={src} alt="" fill sizes="33vw" className="object-cover" />
              {i === GALLERY_MOBILE.length - 1 && (
                <span className="absolute inset-0 flex items-center justify-center bg-dark/40 px-1 text-center text-xs font-semibold text-white">
                  Barcha rasmlar (12)
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="hidden grid-cols-2 gap-4 lg:grid">
          {GALLERY_DESKTOP.map((src, i) => (
            <div key={i} className="relative h-[222px] overflow-hidden rounded-img">
              <Image src={src} alt="" fill sizes="230px" className="object-cover" />
              {i === 2 && (
                <span className="absolute inset-0 flex items-center justify-center gap-1.5 bg-dark/40 text-[13px] font-semibold text-white">
                  <LayoutGrid className="size-4" aria-hidden /> Barcha rasmlar (12)
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 items-start gap-8 lg:mt-8 lg:grid-cols-[1fr_400px]">
        <div className="min-w-0 space-y-8">
          <div>
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-[26px] font-bold leading-tight tracking-[-0.8px] lg:text-4xl">{pitch.name}</h1>
              <ShareButtons title={pitch.name} />
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              <Star className="size-[18px] fill-warning text-warning" aria-hidden />
              <span className="font-semibold">{pitch.rating.toFixed(1)}</span>
              <span className="text-muted">({pitch.reviews} sharh)</span>
              <span className="text-muted" aria-hidden>
                ·
              </span>
              <MapPin className="size-4 text-muted" aria-hidden />
              <span className="text-muted">{fullAddress}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="green">Tasdiqlangan</Badge>
              <Badge tone="blue">Onlayn to&apos;lov</Badge>
              <Badge tone="grey">24 soat oldin bekor qilish</Badge>
            </div>
          </div>

          <Section title="Ma'lumot">
            <dl className="grid grid-cols-1 gap-5 rounded-card border border-line bg-surface p-5 sm:grid-cols-2 lg:grid-cols-3 lg:p-6">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-btn bg-subtle">
                    <Icon className="size-[18px] text-muted" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-[13px] text-muted">{label}</dt>
                    <dd className="text-[15px] font-semibold">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Section>

          <Section title="Qulayliklar">
            <ul className="flex flex-wrap gap-2.5 rounded-card border border-line bg-surface p-5 lg:p-6">
              {pitch.amenities.map((a) => {
                const Icon = AMENITY_ICON[a];
                return (
                  <li key={a} className="inline-flex items-center gap-2 rounded-full bg-subtle px-3.5 py-2.5 text-sm font-medium">
                    <Icon className="size-4" aria-hidden />
                    {a}
                  </li>
                );
              })}
            </ul>
          </Section>

          <Section title="Qoidalar">
            <ul className="space-y-3 rounded-card border border-line bg-surface p-5 lg:p-6">
              {PITCH_RULES.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                  <Check className="size-[18px] shrink-0 text-success" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Manzil">
            <div className="flex h-[220px] flex-col items-center justify-center gap-3 rounded-img bg-subtle px-4 text-center lg:h-[260px]">
              <span className="grid size-11 place-items-center rounded-full border border-line bg-surface">
                <MapPin className="size-[22px] text-accent" aria-hidden />
              </span>
              <span className="text-sm font-medium">{fullAddress}</span>
              <a href={mapsHref} target="_blank" rel="noopener noreferrer" className={buttonClasses({ variant: "secondary", size: "sm" })}>
                Xaritada ochish
              </a>
            </div>
          </Section>

          <Section
            title="Sharhlar"
            action={
              <Link href="#sharhlar" className="text-sm font-semibold text-accent">
                Barcha sharhlar →
              </Link>
            }
          >
            <div id="sharhlar" className="flex scroll-mt-24 flex-col gap-6 rounded-card border border-line bg-surface p-5 sm:flex-row sm:items-center lg:p-6">
              <div className="shrink-0">
                <div className="text-[44px] font-bold leading-none tracking-[-1px]">{pitch.rating.toFixed(1)}</div>
                <div className="mt-1.5">
                  <Stars className="size-[15px]" />
                </div>
                <div className="mt-1 text-[13px] text-muted">{pitch.reviews} sharh asosida</div>
              </div>
              <ul className="flex-1 space-y-2" aria-label="Baholar taqsimoti">
                {dist.map(([n, v], i) => (
                  <li key={n} className="flex items-center gap-2.5">
                    <span className="w-3 text-xs text-muted">{n}</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-subtle">
                      <div
                        className={`h-full rounded-full ${i === 0 ? "bg-warning" : "bg-line"}`}
                        style={{ width: `${Math.round((v / pitch.reviews) * 100)}%` }}
                      />
                    </div>
                    <span className="w-6 text-right text-xs text-muted">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 space-y-3">
              {PITCH_REVIEWS.map((r) => (
                <article key={r.name} className="rounded-card border border-line bg-surface p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="grid size-9 place-items-center rounded-full bg-accent-soft text-sm font-bold text-accent">{r.name[0]}</span>
                      <div>
                        <div className="text-sm font-semibold">{r.name}</div>
                        <div className="text-xs text-muted">{r.date}</div>
                      </div>
                    </div>
                    <Stars className="size-3.5" />
                  </div>
                  <p className="mt-3 text-sm leading-[1.7]">{r.text}</p>
                </article>
              ))}
            </div>
          </Section>
        </div>

        <aside aria-label={siteConfig.bookingEnabled ? "Bron qilish" : "Narx"} className="lg:sticky lg:top-24">
          <BookingPanel pitch={pitch} />
        </aside>
      </div>

      {/* Guruh o'yinlari */}
      <section className="mt-12 lg:mt-16">
        <SectionHead title="Shu maydondagi guruh o'yinlari" sub="Yaqin kunlarda o'tadigan o'yinlar" link={{ label: "Barcha o'yinlar", href: "/oyinlar" }} />
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {games.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
          <div className="flex flex-col justify-center gap-3.5 rounded-card bg-dark p-6">
            <span className="grid size-11 place-items-center rounded-xl bg-white/10">
              <Trophy className="size-[22px] text-white" aria-hidden />
            </span>
            {siteConfig.bookingEnabled ? (
              <>
                <h3 className="text-xl font-semibold text-white">O&apos;yin yaratish</h3>
                <p className="text-sm leading-relaxed text-white/70">Jamoangizni yig&apos;ing va raqib toping. Bir kunda o&apos;yin tashkil qiling.</p>
                <ButtonLink href="/oyinlar" variant="white" className="w-full">
                  O&apos;yin yaratish
                </ButtonLink>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-white">Guruh o&apos;yinlari</h3>
                <p className="text-sm leading-relaxed text-white/70">
                  Toshkentdagi ochiq o&apos;yinlarni ko&apos;ring. O&apos;yinga qo&apos;shilish va o&apos;yin yaratish tez orada ishga tushadi.
                </p>
                <ButtonLink href="/oyinlar" variant="white" className="w-full">
                  O&apos;yinlarni ko&apos;rish
                </ButtonLink>
              </>
            )}
          </div>
        </div>
      </section>

      {/* O'xshash maydonlar */}
      <section className="mt-12 pb-12 lg:mt-16 lg:pb-16">
        <SectionHead title="O'xshash maydonlar" sub="Shu tumandagi boshqa maydonlar" />
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {similar.map((p) => (
            <PitchCard key={p.slug} pitch={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
