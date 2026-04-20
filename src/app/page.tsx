import HomeContent from "@/components/HomeContent";
import { categories } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/content";

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

  return (
    <HomeContent
      mainCategories={mainCategories}
      otherCategories={otherCategories}
    />
  );
}
