import type { MetadataRoute } from "next";
import { PITCHES } from "@/lib/data";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/maydonlar", "/oyinlar", "/maydon-egalari", ...(siteConfig.bookingEnabled ? ["/kirish"] : []), "/maxfiylik", "/shartlar"];
  return [
    ...pages.map((p) => ({ url: `${siteConfig.url}${p}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.7 })),
    ...PITCHES.map((p) => ({ url: `${siteConfig.url}/maydon/${p.slug}`, changeFrequency: "daily" as const, priority: 0.8 })),
  ];
}
