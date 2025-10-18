// app/sitemap.ts
import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl.replace(/\/$/, "");
  const pages = ["/", "/about", "/prices", "/contact"];

  const now = new Date();

  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "/" ? 1 : 0.8,
  }));
}
