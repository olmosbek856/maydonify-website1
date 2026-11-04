import { ArrowLeft, Goal } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = { title: "Sahifa topilmadi" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bg px-5 py-16 text-center">
      <span className="grid size-24 place-items-center rounded-full bg-accent-soft lg:size-[120px]">
        <Goal className="size-12 text-accent lg:size-14" aria-hidden />
      </span>
      <div className="mt-6 text-[56px] font-bold leading-none tracking-[-2px] lg:text-[72px]">404</div>
      <h1 className="mt-4 text-2xl font-bold tracking-[-0.6px] lg:text-[28px]">Sahifa topilmadi</h1>
      <p className="mt-3 max-w-[440px] text-sm leading-relaxed text-muted lg:text-[15px]">
        Siz izlagan sahifa o&apos;chirilgan yoki manzil noto&apos;g&apos;ri kiritilgan bo&apos;lishi mumkin.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/" icon={ArrowLeft} size="lg">
          Bosh sahifaga qaytish
        </ButtonLink>
        <ButtonLink href="/maydonlar" variant="secondary" size="lg">
          Maydonlarni ko&apos;rish
        </ButtonLink>
      </div>
    </main>
  );
}
