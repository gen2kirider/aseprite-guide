"use client";

import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import CategoryCard from "@/components/CategoryCard";
import TutorialScroller from "@/components/TutorialScroller";
import FadeIn from "@/components/FadeIn";
import type { Category } from "@/lib/categories";
import type { ArticleMeta } from "@/lib/content";

interface CategoryWithArticles {
  category: Category;
  articles: ArticleMeta[];
}

interface Props {
  mainCategories: CategoryWithArticles[];
  otherCategories: CategoryWithArticles[];
}

export default function HomeContent({
  mainCategories,
  otherCategories,
}: Props) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <FadeIn>
        <HeroBanner />
      </FadeIn>

      <div className="mt-8 space-y-6">
        {mainCategories.map(({ category, articles }, i) => (
          <FadeIn key={category.slug} delay={100 + i * 120}>
            <CategoryCard category={category} articles={articles} />
          </FadeIn>
        ))}
      </div>

      {/* Other categories grid */}
      {otherCategories.length > 0 && (
        <FadeIn delay={460}>
          <div className="mt-10">
            <h2 className="mb-4 text-lg font-bold text-text-primary">
              その他のカテゴリー
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {otherCategories.map(({ category, articles }) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-border-card bg-bg-card p-4 transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5"
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                    {category.name}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {articles.length}件の記事
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>
      )}

      <FadeIn delay={580}>
        <TutorialScroller />
      </FadeIn>
    </div>
  );
}
