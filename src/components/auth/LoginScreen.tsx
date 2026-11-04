"use client";

import Image from "next/image";
import { useState } from "react";
import { IMG } from "@/lib/data";
import { Logo } from "@/components/ui/Basics";
import { LoginFlow } from "./LoginFlow";

const STATS = [
  ["120+", "maydon"],
  ["15 000+", "bron"],
  ["4.8", "reyting"],
];

/** Canvas: telefon bosqichida chap panel U4 (heroSunset), kod bosqichida U8 (heroDusk). */
export function LoginScreen() {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <section className="relative hidden w-[720px] shrink-0 flex-col justify-between overflow-hidden p-12 lg:flex">
        <Image src={IMG.heroSunset} alt="" fill priority sizes="720px" className={`object-cover transition-opacity duration-300 ${step === 1 ? "opacity-100" : "opacity-0"}`} />
        <Image src={IMG.heroDusk} alt="" fill sizes="720px" className={`object-cover transition-opacity duration-300 ${step === 2 ? "opacity-100" : "opacity-0"}`} />
        <div className="absolute inset-0 bg-dark/60" aria-hidden />
        <div className="relative">
          <Logo light />
        </div>
        <div className="relative">
          <h2 className="max-w-[520px] text-[40px] font-bold leading-[1.15] tracking-[-1px] text-white">Har shanba — o&apos;yin kuni.</h2>
          <p className="mt-4 max-w-[440px] text-base leading-relaxed text-white/80">
            Toshkentdagi 120+ maydon bir joyda. Bo&apos;sh vaqtni tanlang, onlayn to&apos;lang va o&apos;ynang.
          </p>
          <dl className="mt-7 flex gap-8">
            {STATS.map(([v, l]) => (
              <div key={l} className="flex flex-col-reverse">
                <dt className="text-[13px] text-white/70">{l}</dt>
                <dd className="text-[22px] font-bold text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="flex flex-1 items-center justify-center px-5 py-10">
        <div className="w-full max-w-[400px]">
          <div className="mb-8 flex justify-center lg:hidden">
            <Logo />
          </div>
          <LoginFlow onStepChange={setStep} />
        </div>
      </section>
    </main>
  );
}
