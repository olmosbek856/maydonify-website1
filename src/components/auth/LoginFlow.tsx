"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { cn, formatPhone } from "@/lib/utils";
import { Button, ButtonLink } from "@/components/ui/Button";

const CODE_LEN = 6;
const RESEND_SEC = 45;

export function LoginFlow({ onStepChange }: { onStepChange?: (step: 1 | 2) => void }) {
  const router = useRouter();
  const [step, setStepState] = useState<1 | 2>(1);
  const setStep = (s: 1 | 2) => {
    setStepState(s);
    onStepChange?.(s);
  };
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [code, setCode] = useState<string[]>(Array(CODE_LEN).fill(""));
  const [focused, setFocused] = useState(0);
  const [codeErr, setCodeErr] = useState("");
  const [timer, setTimer] = useState(RESEND_SEC);
  const [loading, setLoading] = useState(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (step !== 2 || timer <= 0) return;
    const t = setTimeout(() => setTimer((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [step, timer]);

  useEffect(() => {
    if (step === 2) inputs.current[0]?.focus();
  }, [step]);

  const sendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.replace(/\D/g, "").length !== 9) {
      setPhoneErr("Telefon raqamni to'liq kiriting: 90 123 45 67");
      return;
    }
    setPhoneErr("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setTimer(RESEND_SEC);
    }, 600);
  };

  const verify = (digits: string[]) => {
    if (digits.join("").length !== CODE_LEN) {
      setCodeErr("6 xonali kodni to'liq kiriting");
      return;
    }
    setCodeErr("");
    setLoading(true);
    setTimeout(() => router.push("/bronlarim"), 600);
  };

  const setDigit = (i: number, v: string) => {
    const clean = v.replace(/\D/g, "");
    const next = [...code];
    if (clean.length > 1) {
      clean
        .slice(0, CODE_LEN - i)
        .split("")
        .forEach((c, k) => (next[i + k] = c));
      setCode(next);
      inputs.current[Math.min(i + clean.length, CODE_LEN - 1)]?.focus();
      if (next.every(Boolean)) verify(next);
      return;
    }
    next[i] = clean;
    setCode(next);
    if (clean && i < CODE_LEN - 1) inputs.current[i + 1]?.focus();
    if (next.every(Boolean)) verify(next);
  };

  if (step === 1) {
    return (
      <form onSubmit={sendCode} noValidate>
        <h1 className="text-[30px] font-bold tracking-[-0.6px] lg:text-[32px]">Kirish</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">Telefon raqamingizni kiriting — tasdiqlash kodini SMS orqali yuboramiz.</p>
        <div className="mt-7">
          <label htmlFor="login-phone" className="mb-2 block text-[13px] font-semibold">
            Telefon raqam
          </label>
          <div
            className={cn(
              "flex h-[52px] items-center overflow-hidden rounded-btn border bg-surface focus-within:border-accent focus-within:ring-2 focus-within:ring-accent-soft",
              phoneErr ? "border-danger" : "border-line",
            )}
          >
            <span className="grid h-full place-items-center bg-subtle px-4 text-[15px] font-medium">+998</span>
            <span className="h-full w-px bg-line" />
            <input
              id="login-phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="90 123 45 67"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              aria-invalid={!!phoneErr}
              autoFocus
              className="flex-1 bg-transparent px-4 text-[15px] outline-none placeholder:text-muted"
            />
          </div>
          {phoneErr && (
            <p className="mt-2 text-[13px] text-danger" role="alert">
              {phoneErr}
            </p>
          )}
        </div>
        <Button type="submit" loading={loading} className="mt-6 h-[52px] w-full">
          Kod olish
        </Button>
        <div className="my-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-line" />
          <span className="text-[13px] text-muted">yoki</span>
          <span className="h-px flex-1 bg-line" />
        </div>
        <ButtonLink href="/maydonlar" variant="secondary" className="h-12 w-full">
          Maydonlarni ko&apos;rish
        </ButtonLink>
        <p className="mt-6 text-xs leading-relaxed text-muted">
          Davom etish orqali siz foydalanish shartlari va maxfiylik siyosatiga rozilik bildirasiz.
        </p>
      </form>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        verify(code);
      }}
      noValidate
    >
      <button
        type="button"
        onClick={() => {
          setStep(1);
          setCode(Array(CODE_LEN).fill(""));
          setCodeErr("");
        }}
        className="mb-6 inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-muted hover:text-ink"
      >
        <ArrowLeft className="size-4" aria-hidden /> Raqamni o&apos;zgartirish
      </button>
      <h1 className="text-[30px] font-bold tracking-[-0.6px] lg:text-[32px]">Kodni kiriting</h1>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">Tasdiqlash kodi +998 {phone} raqamiga yuborildi.</p>

      <fieldset className="mt-7">
        <legend className="sr-only">6 xonali tasdiqlash kodi</legend>
        <div className="flex gap-2.5">
          {code.map((d, i) => (
            <input
              key={i}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              value={d}
              onChange={(e) => setDigit(i, e.target.value)}
              onFocus={() => setFocused(i)}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !code[i] && i > 0) inputs.current[i - 1]?.focus();
              }}
              inputMode="numeric"
              autoComplete={i === 0 ? "one-time-code" : "off"}
              maxLength={CODE_LEN}
              aria-label={`${i + 1}-raqam`}
              aria-invalid={!!codeErr}
              className={cn(
                "h-16 w-full min-w-0 flex-1 rounded-btn border bg-surface text-center text-2xl font-semibold outline-none transition-colors",
                codeErr ? "border-danger" : focused === i ? "border-accent ring-2 ring-accent-soft" : "border-line",
              )}
            />
          ))}
        </div>
      </fieldset>
      {codeErr && (
        <p className="mt-2 text-[13px] text-danger" role="alert">
          {codeErr}
        </p>
      )}

      <div className="mt-4 flex items-center justify-between text-[13px]" aria-live="polite">
        <span className="text-muted">
          {timer > 0 ? `0:${String(timer).padStart(2, "0")} dan keyin qayta yuborish` : "Kod kelmadimi?"}
        </span>
        <button
          type="button"
          disabled={timer > 0}
          onClick={() => setTimer(RESEND_SEC)}
          className="min-h-10 font-semibold text-accent disabled:opacity-45"
        >
          Qayta yuborish
        </button>
      </div>
      <Button type="submit" loading={loading} className="mt-6 h-[52px] w-full">
        Tasdiqlash
      </Button>
    </form>
  );
}
