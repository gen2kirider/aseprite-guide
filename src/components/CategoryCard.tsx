import Link from "next/link";
import type { Category } from "@/lib/categories";
import type { ArticleMeta } from "@/lib/content";

interface Props {
  category: Category;
  articles: ArticleMeta[];
}

export default function CategoryCard({ category, articles }: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border-card bg-bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5 md:flex-row">
      {/* Left: text */}
      <div className="flex-1">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-xl">{category.icon}</span>
          <h2 className="text-xl font-bold text-text-primary">
            {category.name}
          </h2>
          <Link
            href={`/${category.slug}`}
            className="ml-auto text-sm font-medium text-accent-teal hover:underline"
          >
            もっと見る ›
          </Link>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {category.description}
        </p>
        <ul className="space-y-1.5">
          {articles.slice(0, 3).map((article) => (
            <li key={article.slug} className="flex items-center gap-2 text-sm">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <Link
                href={`/${category.slug}/${article.slug}`}
                className="text-text-primary hover:text-accent transition-colors"
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: thumbnail */}
      <div className="hidden h-36 w-56 shrink-0 overflow-hidden rounded-lg border border-border-default bg-[#0f1923] md:block">
        <div className="flex h-5 items-center gap-1.5 border-b border-white/5 px-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          <span className="ml-auto text-[7px] text-text-secondary/40">
            aseprite
          </span>
        </div>
        <div className="flex h-[calc(100%-1.25rem)]">
          <div className="flex flex-1 items-center justify-center">
            <span className="text-4xl">{category.icon}</span>
          </div>
          <div className="w-7 space-y-px border-l border-white/5 bg-white/[0.02] p-0.5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-2.5 rounded-[1px]"
                style={{
                  backgroundColor: category.color,
                  opacity: 0.12 + (i % 3) * 0.08,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
