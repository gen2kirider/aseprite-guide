import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface ArticleMeta {
  slug: string;
  category: string;
  title: string;
  description: string;
  order: number;
  thumbnail?: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  const dir = path.join(contentDir, category);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      return {
        slug: filename.replace(/\.mdx$/, ""),
        category,
        title: data.title ?? filename,
        description: data.description ?? "",
        order: data.order ?? 0,
        thumbnail: data.thumbnail,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getArticle(category: string, slug: string): Article | null {
  const filePath = path.join(contentDir, category, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    category,
    title: data.title ?? slug,
    description: data.description ?? "",
    order: data.order ?? 0,
    thumbnail: data.thumbnail,
    content,
  };
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(contentDir)) return [];

  const cats = fs.readdirSync(contentDir).filter((f) => {
    return fs.statSync(path.join(contentDir, f)).isDirectory();
  });

  return cats.flatMap((cat) => getArticlesByCategory(cat));
}

export function getAllCategories(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir).filter((f) => {
    return fs.statSync(path.join(contentDir, f)).isDirectory();
  });
}
