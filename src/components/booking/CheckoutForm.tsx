"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Info, Lock, MapPin, ShieldCheck } from "lucide-react";
import type { Pitch } from "@/lib/data";
import { cn, formatPhone, formatSom, hourRange } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Checkbox, TextField, TextareaField } from "@/components/ui/Field";

type Card = "Humo" | "UZCard";

export function CheckoutForm({ pitch, date, time }: { pitch: Pitch; date: string; time: string }) {
  const router = useRouter();
  const [form, setForm] = useState({ first: "", last: "", phone: "", note: "" });
  const [card, setCard] = useState<Card>("Humo");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: k === "phone" ? formatPhone(e.target.value) : e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (form.first.trim().length < 2) err.first = "Ismingizni kiriting";
    if (form.last.trim().length < 2) err.last = "Familiyangizni kiriting";
    if (form.phone.replace(/\D/g, "").length !== 9) err.phone = "Telefon raqamni to'liq kiriting";
    if (!agree) err.agree = "Davom etish uchun qoidalarga rozilik bering";
    setErrors(err);
    if (Object.keys(err).length) return;

    setLoading(true);
    const q = new URLSearchParams({ holat: "muvaffaqiyat", maydon: pitch.slug, sana: date, vaqt: time, karta: card });
    setTimeout(() => router.push(`/bron/natija?${q.toString()}`), 900);
  };

  const rows: [string, string][] = [
    ["Sana", date],
    ["Vaqt", hourRange(time)],
    ["Davomiylik", "1 soat"],
    ["Narx", formatSom(pitch.price)],
    ["Xizmat haqi", "0 so'm"],
  ];

  return (
    <form onSubmit={submit} noValidate className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_400px] lg:gap-8">
      <div className="space-y-5">
        <section className="space-y-5 rounded-card border border-line bg-surface p-5 lg:p-6">
          <h2 className="text-xl font-semibold">Aloqa ma&apos;lumotlari</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TextField label="Ism" autoComplete="given-name" placeholder="Aziz" value={form.first} onChange={set("first")} error={errors.first} />
            <TextField label="Familiya" autoComplete="family-name" placeholder="Rahimov" value={form.last} onChange={set("last")} error={errors.last} />
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-[13px] font-semibold">
              Telefon raqam
            </label>
            <div
              className={cn(
                "flex h-12 items-center overflow-hidden rounded-btn border bg-surface focus-within:border-accent focus-within:ring-2 focus-within:ring-accent-soft",
                errors.phone ? "border-danger" : "border-line",
              )}
            >
              <span className="grid h-full place-items-center bg-subtle px-3.5 text-[15px] font-medium">+998</span>
              <span className="h-full w-px bg-line" />
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="90 123 45 67"
                value={form.phone}
                onChange={set("phone")}
                aria-invalid={!!errors.phone}
                aria-describedby="phone-msg"
                className="flex-1 bg-transparent px-3.5 text-[15px] outline-none placeholder:text-muted"
              />
            </div>
            <p id="phone-msg" className={cn("mt-2 text-xs", errors.phone ? "text-danger" : "text-muted")} role={errors.phone ? "alert" : undefined}>
              {errors.phone ?? "Bron tasdiqlash uchun SMS shu raqamga yuboriladi."}
            </p>
          </div>
          <TextareaField
            label="Izoh (ixtiyoriy)"
            placeholder="Masalan: 6 kishi kelamiz, to'p o'zimizdan."
            value={form.note}
            onChange={set("note")}
            maxLength={300}
          />
        </section>

        <section className="space-y-4 rounded-card border border-line bg-surface p-5 lg:p-6">
          <h2 className="text-xl font-semibold">To&apos;lov usuli</h2>
          <div role="radiogroup" aria-label="To'lov usuli" className="space-y-4">
            {(["Humo", "UZCard"] as Card[]).map((c) => {
              const active = card === c;
              return (
                <label
                  key={c}
                  className={cn(
                    "flex cursor-pointer items-center gap-3.5 rounded-xl border p-4 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent",
                    active ? "border-accent bg-accent-soft" : "border-line bg-surface hover:bg-subtle",
                  )}
                >
                  <input type="radio" name="pay" value={c} checked={active} onChange={() => setCard(c)} className="sr-only" />
                  <span className={cn("grid size-5 place-items-center rounded-full", active ? "bg-accent" : "border border-line")}>
                    {active && <span className="size-2 rounded-full bg-white" />}
                  </span>
                  <span className="flex-1">
                    <span className="block text-[15px] font-semibold">{c}</span>
                    <span className="block text-[13px] text-muted">{c} kartasi orqali to&apos;lov</span>
                  </span>
                  <span className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-bold">{c}</span>
                </label>
              );
            })}
          </div>
          <div className="flex items-start gap-2.5 rounded-xl bg-subtle p-3.5">
            <Info className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden />
            <p className="text-[13px] leading-relaxed text-muted">To&apos;lov faqat onlayn amalga oshiriladi. Maydonda naqd pul qabul qilinmaydi.</p>
          </div>
        </section>

        <div>
          <Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} label="Bekor qilish qoidalari bilan tanishdim va roziman." />
          {errors.agree && (
            <p className="mt-1.5 text-[13px] text-danger" role="alert">
              {errors.agree}
            </p>
          )}
        </div>
      </div>

      <aside className="rounded-card border border-line bg-surface p-5 shadow-card lg:p-6" aria-label="Bron ma'lumotlari">
        <h2 className="text-[17px] font-semibold">Bron ma&apos;lumotlari</h2>
        <div className="relative mt-4 h-[150px] overflow-hidden rounded-img">
          <Image src={pitch.image} alt="" fill sizes="400px" className="object-cover" />
        </div>
        <div className="mt-3">
          <div className="text-[17px] font-semibold">{pitch.name}</div>
          <div className="mt-1 flex items-center gap-1.5 text-[13px] text-muted">
            <MapPin className="size-3.5" aria-hidden />
            {pitch.district} tumani
          </div>
        </div>
        <div className="my-4 h-px bg-line" />
        <dl className="space-y-2.5">
          {rows.map(([k, v]) => (
            <div key={k} className="flex items-center justify-between text-sm">
              <dt className="text-muted">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="my-4 h-px bg-line" />
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-semibold">Jami</span>
          <span className="text-[22px] font-bold tracking-[-0.4px]">{formatSom(pitch.price)}</span>
        </div>
        <Button type="submit" icon={Lock} loading={loading} className="mt-4 w-full">
          {formatSom(pitch.price)} to&apos;lash
        </Button>
        <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted">
          <ShieldCheck className="size-4 text-success" aria-hidden /> Xavfsiz to&apos;lov · 3D Secure
        </p>
      </aside>
    </form>
  );
}
