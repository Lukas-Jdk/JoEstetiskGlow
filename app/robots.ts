// app/robots.ts
import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.siteUrl}/sitemap.xml`,
    host: site.siteUrl,
  };
}
