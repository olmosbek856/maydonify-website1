import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Logo } from "@/components/ui/Basics";

const COLUMNS = [
  {
    title: "Platforma",
    links: [
      { label: "Maydonlar", href: "/maydonlar" },
      { label: "Guruh o'yinlari", href: "/oyinlar" },
      { label: "Qanday ishlaydi", href: "/#qanday-ishlaydi" },
    ],
  },
  {
    title: "Hamkorlar",
    links: [
      { label: "Maydon egalariga", href: "/maydon-egalari" },
      { label: "Ariza qoldirish", href: "/maydon-egalari#ariza" },
    ],
  },
  {
    title: "Yordam",
    links: [
      { label: "Savol-javob", href: "/#savollar" },
      { label: "Foydalanish shartlari", href: "/shartlar" },
      { label: "Maxfiylik siyosati", href: "/maxfiylik" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-dark pb-28 pt-14 lg:pb-12 lg:pt-[72px]">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="max-w-[300px]">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Toshkentdagi mini-futbol maydonlari uchun onlayn bron platformasi. Bo&apos;sh vaqtni toping, onlayn
              to&apos;lang va o&apos;ynang.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:gap-16">
            {COLUMNS.map((c) => (
              <div key={c.title}>
                <h2 className="text-sm font-semibold text-white">{c.title}</h2>
                <ul className="mt-3.5 space-y-3 text-sm text-white/65">
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:w-[260px]">
            <h2 className="text-sm font-semibold text-white">Bog&apos;lanish</h2>
            <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer" className="mt-3.5 block text-sm text-white/65 hover:text-white">
              Telegram: {siteConfig.telegramHandle}
            </a>
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-white/65 hover:text-white">
              Instagram: {siteConfig.instagramHandle}
            </a>
            <div className="mt-4 flex gap-2" aria-label="Qabul qilinadigan kartalar">
              <span className="rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-white">Humo</span>
              <span className="rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-white">UZCard</span>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px bg-white/10" />
        <div className="mt-6 flex flex-col justify-between gap-3 text-[13px] text-white/55 md:flex-row">
          <span>© 2026 MiniPolya. Barcha huquqlar himoyalangan.</span>
          <span>Toshkent, O&apos;zbekiston</span>
        </div>
      </div>
    </footer>
  );
}
