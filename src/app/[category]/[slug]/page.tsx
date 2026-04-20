import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { categories } from "@/lib/categories";
import {
  getArticle,
  getArticlesByCategory,
  getAllArticles,
} from "@/lib/content";
import TableOfContents from "@/components/TableOfContents";
import Term from "@/components/Term";

const mdxComponents = { Term };

export function generateStaticParams() {
  return getAllArticles().map((a) => ({
    category: a.category,
    slug: a.slug,
  }));
}

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const article = getArticle(category, slug);
  if (!article) notFound();

  const siblings = getArticlesByCategory(category);
  const currentIndex = siblings.findIndex((a) => a.slug === slug);
  const prev = currentIndex > 0 ? siblings[currentIndex - 1] : null;
  const next =
    currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : null;

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-text-secondary">
        <Link href="/" className="hover:text-accent transition-colors">
          🏠 ホーム
        </Link>
        <span className="text-text-secondary/50">/</span>
        <Link
          href={`/${category}`}
          className="hover:text-accent transition-colors"
        >
          {cat.icon} {cat.name}
        </Link>
        <span className="text-text-secondary/50">/</span>
        <span className="text-text-primary">{article.title}</span>
      </nav>

      {/* Article header */}
      <div className="mb-8 max-w-4xl rounded-xl border border-border-card bg-linear-to-r from-bg-card to-bg-secondary p-6">
        <div className="mb-2 flex items-center gap-2">
          <span
            className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium"
            style={{ backgroundColor: cat.color + "20", color: cat.color }}
          >
            {cat.icon} {cat.name}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-text-primary md:text-3xl">
          {article.title}
        </h1>
        {article.description && (
          <p className="mt-2 text-text-secondary">{article.description}</p>
        )}
      </div>

      {/* Content + TOC */}
      <div className="flex gap-8">
        <div className="min-w-0 max-w-4xl flex-1">
          {/* Article */}
          <article className="mdx-content">
            <MDXRemote
              source={article.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
              components={mdxComponents}
            />
          </article>

          {/* Prev / Next */}
          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-border-default pt-6">
            {prev ? (
              <Link
                href={`/${category}/${prev.slug}`}
                className="group flex flex-col rounded-lg border border-border-card bg-bg-card p-4 transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5"
              >
                <span className="text-xs text-text-secondary">← 前の記事</span>
                <span className="mt-1 text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/${category}/${next.slug}`}
                className="group flex flex-col items-end rounded-lg border border-border-card bg-bg-card p-4 text-right transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5"
              >
                <span className="text-xs text-text-secondary">次の記事 →</span>
                <span className="mt-1 text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* TOC sidebar */}
        <TableOfContents />
      </div>
    </div>
  );
}
