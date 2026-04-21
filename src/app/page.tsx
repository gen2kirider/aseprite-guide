import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { categories } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aseprite日本語ガイド | 基本操作から実践テクまで",
  description:
    "Asepriteを日本語で学べる非公式ガイド。基本操作、パレット、アニメーション、エクスポートまでカテゴリ別に解説。",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const mainSlugs = ["basics", "palette", "animation"];
  const mainCategories = mainSlugs
    .map((slug) => {
      const category = categories.find((c) => c.slug === slug);
      if (!category) return null;
      const articles = getArticlesByCategory(slug);
      return { category, articles };
    })
    .filter(Boolean) as {
    category: (typeof categories)[number];
    articles: ReturnType<typeof getArticlesByCategory>;
  }[];

  const otherCategories = categories
    .filter((c) => !mainSlugs.includes(c.slug))
    .map((category) => ({
      category,
      articles: getArticlesByCategory(category.slug),
    }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aseprite日本語ガイド",
    url: "https://aseprite-guide.vercel.app/",
    inLanguage: "ja",
    description:
      "Asepriteの使い方を日本語で解説する非公式ガイド。基本操作から実践テクニックまで。",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent
        mainCategories={mainCategories}
        otherCategories={otherCategories}
      />
    </>
  );
}
