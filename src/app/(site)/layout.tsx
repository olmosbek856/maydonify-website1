import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileTabBar } from "@/components/layout/MobileTabBar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#asosiy"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-btn focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Asosiy kontentga o&apos;tish
      </a>
      <Header />
      <main id="asosiy" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileTabBar />
    </div>
  );
}
