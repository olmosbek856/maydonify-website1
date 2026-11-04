import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/bron", "/bronlarim", "/profil"] },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
