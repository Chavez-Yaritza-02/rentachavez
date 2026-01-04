import type { MetadataRoute } from "next";
import { cabanas } from "@/data/cabanas";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const baseRoutes: MetadataRoute.Sitemap = [
    { url: "/", lastModified },
    { url: "/cabanas", lastModified },
  ];

  const cabanaRoutes: MetadataRoute.Sitemap = cabanas.map((cabana) => ({
    url: `/cabanas/${cabana.slug}`,
    lastModified,
  }));

  return [...baseRoutes, ...cabanaRoutes];
}
