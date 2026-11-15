import type { MetadataRoute } from "next";
import { localizedPages } from "@/infrastructure/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return localizedPages().map(({ url, alternates }) => ({
    url,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: alternates },
  }));
}
