import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "A〜Z辞典",
  description:
    "Aseprite日本語ガイドの全記事をアルファベット・五十音順で一覧できるページです。",
  alternates: {
    canonical: "/index-az",
  },
};

export default function IndexAZPage() {
  const allArticles = categories.flatMap((cat) => {
    const articles = getArticlesByCategory(cat.slug);
    return articles.map((a) => ({
      ...a,
      categoryName: cat.name,
      categoryIcon: cat.icon,
      categoryColor: cat.color,
    }));
  });

  allArticles.sort((a, b) => a.title.localeCompare(b.title, "ja"));

  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <h1 className="mb-2 text-2xl font-bold text-text-primary">A〜Z 辞典</h1>
      <p className="mb-8 text-text-secondary">
        すべての記事をアルファベット・五十音順で表示
      </p>

      <div className="space-y-2">
        {allArticles.map((article) => (
          <Link
            key={`${article.category}/${article.slug}`}
            href={`/${article.category}/${article.slug}`}
            className="group flex items-center gap-3 rounded-lg border border-border-card bg-bg-card p-4 transition-colors hover:border-accent/30"
          >
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: article.categoryColor }}
            />
            <div className="flex-1">
              <h2 className="font-medium text-text-primary group-hover:text-accent transition-colors">
                {article.title}
              </h2>
              <p className="mt-0.5 text-sm text-text-secondary">
                {article.description}
              </p>
            </div>
            <span className="shrink-0 text-xs text-text-secondary">
              {article.categoryIcon} {article.categoryName}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
