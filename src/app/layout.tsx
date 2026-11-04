import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const title = "MiniPolya — mini-futbol maydonlarini onlayn bron qilish";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: title, template: "%s — MiniPolya" },
  description: siteConfig.description,
  applicationName: "MiniPolya",
  keywords: [
    "mini futbol",
    "futbol maydoni",
    "maydon bron qilish",
    "mini stadion",
    "Toshkent",
    "guruh o'yinlari",
    "onlayn bron",
    "minipolya",
  ],
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    siteName: "MiniPolya",
    url: siteConfig.url,
    title,
    description: siteConfig.description,
  },
  twitter: { card: "summary_large_image", title, description: siteConfig.description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" className={inter.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
