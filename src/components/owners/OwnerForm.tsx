"use client";

import { useState } from "react";
import { DISTRICTS, PITCH_SIZES } from "@/lib/data";
import { formatPhone } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SelectField, TextField, TextareaField } from "@/components/ui/Field";
import { Toast } from "@/components/ui/Overlay";

const COUNTS = ["1 ta maydon", "2 ta maydon", "3 ta maydon", "4 ta maydon", "5+ maydon"];
const INITIAL = { fullName: "", phone: "", stadiumName: "", district: "Chilonzor", address: "", count: COUNTS[0], size: "6x6", message: "" };

export function OwnerForm() {
  const [f, setF] = useState(INITIAL);
  const [hp, setHp] = useState(""); // honeypot
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ tone: "success" | "error"; msg: string } | null>(null);

  const set = (k: keyof typeof INITIAL) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: k === "phone" ? formatPhone(e.target.value) : e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (f.fullName.trim().length < 2) err.fullName = "Ismingizni kiriting";
    if (f.phone.replace(/\D/g, "").length !== 9) err.phone = "Telefon raqamni to'liq kiriting";
    if (f.stadiumName.trim().length < 2) err.stadiumName = "Maydon nomini kiriting";
    if (f.address.trim().length < 3) err.address = "Manzilni kiriting";
    setErrors(err);
    if (Object.keys(err).length) return;

    // Mavjud /api/contact formatiga moslash (Telegram xabari).
    const details = [`Maydonlar soni: ${f.count}`, `O'lcham: ${f.size}`, f.message.trim() && `Izoh: ${f.message.trim()}`].filter(Boolean).join(" · ");

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: f.fullName.trim(),
          phone: `+998 ${f.phone}`,
          stadiumName: f.stadiumName.trim(),
          location: `${f.district} tumani, ${f.address.trim()}`,
          message: details.slice(0, 500),
          fax_number: hp,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Xatolik yuz berdi. Qayta urinib ko'ring.");
      setF(INITIAL);
      setToast({ tone: "success", msg: "Arizangiz qabul qilindi! Tez orada bog'lanamiz." });
    } catch (e) {
      setToast({ tone: "error", msg: e instanceof Error ? e.message : "Xatolik yuz berdi. Qayta urinib ko'ring." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} noValidate className="relative space-y-4 rounded-card border border-line bg-surface p-5 shadow-card lg:p-7">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField label="Ismingiz" autoComplete="name" placeholder="Aziz Rahimov" value={f.fullName} onChange={set("fullName")} error={errors.fullName} maxLength={100} />
        <TextField
          label="Telefon"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          prefix="+998"
          placeholder="90 123 45 67"
          value={f.phone}
          onChange={set("phone")}
          error={errors.phone}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField label="Maydon nomi" placeholder="Chilonzor Arena" value={f.stadiumName} onChange={set("stadiumName")} error={errors.stadiumName} maxLength={150} />
        <SelectField label="Tuman" options={DISTRICTS} value={f.district} onChange={set("district")} />
      </div>
      <TextField label="Manzil" placeholder="Bunyodkor ko'chasi 12" value={f.address} onChange={set("address")} error={errors.address} maxLength={150} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SelectField label="Maydonlar soni" options={COUNTS} value={f.count} onChange={set("count")} />
        <SelectField label="Maydon o'lchami" options={PITCH_SIZES} value={f.size} onChange={set("size")} />
      </div>
      <TextareaField
        label="Izoh (ixtiyoriy)"
        placeholder="Maydon haqida qo'shimcha ma'lumot: qoplama, yoritish, kiyinish xonasi..."
        value={f.message}
        onChange={set("message")}
        maxLength={400}
      />
      {/* Honeypot — bot'lar to'ldiradi, odamlar ko'rmaydi */}
      <input
        type="text"
        name="fax_number"
        tabIndex={-1}
        autoComplete="off"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />
      <Button type="submit" loading={loading} className="h-12 w-full">
        Ariza yuborish
      </Button>
      <p className="text-xs leading-relaxed text-muted">Ariza yuborish bilan siz hamkorlik shartlariga rozilik bildirasiz.</p>
      <Toast open={!!toast} tone={toast?.tone} message={toast?.msg ?? ""} onClose={() => setToast(null)} duration={6000} />
    </form>
  );
}
