import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";
import { getAllArticles } from "@/lib/content";

const siteUrl = "https://aseprite-guide.vercel.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/glossary`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/index-az`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${siteUrl}/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map(
    (article) => ({
      url: `${siteUrl}/${article.category}/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}
