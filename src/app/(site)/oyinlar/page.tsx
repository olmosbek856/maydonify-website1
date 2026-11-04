import type { Metadata } from "next";
import { GamesBrowser } from "@/components/games/GamesBrowser";

export const metadata: Metadata = {
  title: "Guruh o'yinlari",
  description: "Toshkentdagi ochiq mini-futbol o'yinlariga qo'shiling yoki jamoangizga raqib toping.",
  alternates: { canonical: "/oyinlar" },
};

type SP = Promise<Record<string, string | string[] | undefined>>;

export default async function GamesPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const id = Number(Array.isArray(sp.oyin) ? sp.oyin[0] : sp.oyin);

  return (
    <div className="container-page pb-10 pt-6 lg:pb-10 lg:pt-10">
      <GamesBrowser key={id || 0} initialGameId={Number.isFinite(id) ? id : undefined} />
    </div>
  );
}
