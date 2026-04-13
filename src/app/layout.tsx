import type { Metadata } from "next";
import { Syne, DM_Sans, Sora } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maydon — Futbol Maydonini 30 Soniyada Band Qiling",
  description:
    "Toshkentdagi 30+ tasdiqlangan futbol maydonlarini toping va 30 soniyada band qiling. Hech qanday qo'ng'iroqsiz. Real vaqt jadval, aniq narxlar, tezkor bron.",
  keywords: [
    "futbol maydon", "football field", "band qilish", "Toshkent", "maydon ijarasi",
    "futsal", "mini football", "bron qilish", "online booking", "maydonify", "maydon"
  ],
  openGraph: {
    title: "Maydon — Futbol Maydonini 30 Soniyada Band Qiling",
    description: "Toshkentdagi 30+ tasdiqlangan futbol maydonlarini toping va 30 soniyada band qiling. Hech qanday qo'ng'iroqsiz.",
    type: "website",
    siteName: "Maydon",
    url: "https://maydonify.uz",
    images: [
      {
        url: "https://maydonify.uz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maydon — Futbol Maydonini 30 Soniyada Band Qiling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maydon — Futbol Maydonini 30 Soniyada Band Qiling",
    description: "Toshkentdagi 30+ tasdiqlangan futbol maydonlarini toping va 30 soniyada band qiling.",
    images: ["https://maydonify.uz/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${syne.variable} ${dmSans.variable} ${sora.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-screen antialiased">
        <LanguageProvider>
{children}
        </LanguageProvider>
      </body>
    </html>
  );
}
