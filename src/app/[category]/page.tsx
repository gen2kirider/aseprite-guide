import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/lib/categories";
import { getArticlesByCategory, getAllCategories } from "@/lib/content";

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category }));
}

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const articles = getArticlesByCategory(category);

  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{cat.icon}</span>
          <h1 className="text-2xl font-bold text-text-primary">{cat.name}</h1>
        </div>
        <p className="mt-2 text-text-secondary">{cat.description}</p>
      </div>

      {articles.length === 0 ? (
        <p className="text-text-secondary">記事を準備中です。</p>
      ) : (
        <div className="space-y-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${category}/${article.slug}`}
              className="group flex items-center gap-4 rounded-xl border border-border-card bg-bg-card p-5 transition-colors hover:border-accent/30"
            >
              <span
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <div>
                <h2 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {article.title}
                </h2>
                <p className="mt-0.5 text-sm text-text-secondary">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
