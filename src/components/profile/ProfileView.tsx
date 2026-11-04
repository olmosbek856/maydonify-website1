"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Info, Lock, LogOut, MessageCircle, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Switch, TextField } from "@/components/ui/Field";
import { Modal, Toast } from "@/components/ui/Overlay";

const STATS = [
  ["12", "o'ynagan o'yin"],
  ["8", "bron"],
  ["4.9", "reyting"],
];

const NOTIFY = [
  { key: "sms", title: "SMS eslatmalar", text: "Bron va o'yin boshlanishidan 2 soat oldin SMS yuboramiz.", on: true },
  { key: "games", title: "Guruh o'yinlari takliflari", text: "Tumandagi yangi ochiq o'yinlar haqida xabar beramiz.", on: true },
  { key: "promo", title: "Chegirmalar va aksiyalar", text: "MiniPolya'dagi maxsus takliflar.", on: false },
] as const;

const LINKS = [
  { label: "Savol-javob", href: "/#savollar", icon: MessageCircle },
  { label: "Maxfiylik siyosati", href: "/maxfiylik", icon: Lock },
  { label: "Foydalanish shartlari", href: "/shartlar", icon: Info },
];

export function ProfileView() {
  const [name, setName] = useState("Aziz Rahimov");
  const [draft, setDraft] = useState(name);
  const [editing, setEditing] = useState(false);
  const [lang, setLang] = useState<"UZ" | "RU">("UZ");
  const [notify, setNotify] = useState<Record<string, boolean>>(Object.fromEntries(NOTIFY.map((n) => [n.key, n.on])));
  const [toast, setToast] = useState<string | null>(null);

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="mt-6 grid grid-cols-1 items-start gap-5 lg:grid-cols-[400px_1fr] lg:gap-6">
      <div className="flex flex-col items-center gap-5 rounded-card border border-line bg-surface p-7">
        <span className="grid size-20 place-items-center rounded-full bg-accent text-2xl font-bold text-white lg:size-[88px] lg:text-[32px]">{initials}</span>
        <div className="text-center">
          <div className="text-[22px] font-bold tracking-[-0.4px]">{name}</div>
          <div className="mt-1 text-sm text-muted">+998 90 123 45 67</div>
        </div>
        <Button
          variant="secondary"
          icon={Settings}
          onClick={() => {
            setDraft(name);
            setEditing(true);
          }}
        >
          Tahrirlash
        </Button>
        <div className="h-px w-full bg-line" />
        <dl className="flex w-full items-center justify-around">
          {STATS.map(([v, l]) => (
            <div key={l} className="flex flex-col-reverse text-center">
              <dt className="mt-0.5 text-xs text-muted">{l}</dt>
              <dd className="text-[22px] font-bold">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="space-y-5">
        <section className="rounded-card border border-line bg-surface p-5 lg:p-6">
          <h2 className="text-[17px] font-semibold">Til</h2>
          <p className="mt-1 text-[13px] text-muted">Interfeys tili</p>
          <div className="mt-4 flex gap-2" role="radiogroup" aria-label="Interfeys tili">
            {(["UZ", "RU"] as const).map((l) => (
              <button
                key={l}
                type="button"
                role="radio"
                aria-checked={lang === l}
                onClick={() => {
                  setLang(l);
                  if (l === "RU") setToast("Rus tili tez orada qo'shiladi");
                }}
                className={cn(
                  "rounded-btn border px-4 py-2.5 text-sm",
                  lang === l ? "border-accent bg-accent-soft font-semibold text-accent" : "border-line bg-surface font-medium hover:bg-subtle",
                )}
              >
                {l === "UZ" ? "O'zbekcha (UZ)" : "Ruscha (RU)"}
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-card border border-line bg-surface p-5 lg:p-6">
          <h2 className="text-[17px] font-semibold">Bildirishnomalar</h2>
          {NOTIFY.map((n) => (
            <div key={n.key} className="flex items-center justify-between gap-6">
              <div>
                <div className="text-sm font-semibold">{n.title}</div>
                <div className="mt-0.5 text-[13px] text-muted">{n.text}</div>
              </div>
              <Switch checked={notify[n.key]} onChange={(v) => setNotify({ ...notify, [n.key]: v })} label={n.title} />
            </div>
          ))}
        </section>

        <section className="rounded-card border border-line bg-surface p-5 lg:p-6">
          <h2 className="text-[17px] font-semibold">Hisob</h2>
          <ul className="mt-4 space-y-3.5">
            {LINKS.map(({ label, href, icon: Icon }) => (
              <li key={href}>
                <Link href={href} className="flex min-h-8 items-center justify-between hover:text-accent">
                  <span className="flex items-center gap-2.5 text-sm">
                    <Icon className="size-[18px] text-muted" aria-hidden />
                    {label}
                  </span>
                  <ChevronRight className="size-[18px] text-muted" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <div className="my-5 h-px bg-line" />
          <ButtonLink href="/kirish" variant="dangerSoft" icon={LogOut} className="w-full">
            Chiqish
          </ButtonLink>
        </section>
      </div>

      <Modal open={editing} onClose={() => setEditing(false)} title="Profilni tahrirlash">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (draft.trim().length < 2) return;
            setName(draft.trim());
            setEditing(false);
            setToast("Profil saqlandi");
          }}
          className="space-y-4"
        >
          <TextField label="Ism va familiya" value={draft} onChange={(e) => setDraft(e.target.value)} autoFocus />
          <TextField label="Telefon raqam" prefix="+998" value="90 123 45 67" disabled readOnly hint="Raqamni o'zgartirish uchun qo'llab-quvvatlash xizmatiga yozing." />
          <div className="flex gap-3 pt-1">
            <Button variant="secondary" onClick={() => setEditing(false)} className="flex-1">
              Bekor qilish
            </Button>
            <Button type="submit" className="flex-1">
              Saqlash
            </Button>
          </div>
        </form>
      </Modal>

      <Toast open={!!toast} message={toast ?? ""} onClose={() => setToast(null)} />
    </div>
  );
}
