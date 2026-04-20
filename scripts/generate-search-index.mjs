import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");
const outPath = path.join(process.cwd(), "public", "search-index.json");

function walk(dir) {
  const entries = [];
  if (!fs.existsSync(dir)) return entries;

  for (const cat of fs.readdirSync(dir)) {
    const catPath = path.join(dir, cat);
    if (!fs.statSync(catPath).isDirectory()) continue;

    for (const file of fs.readdirSync(catPath)) {
      if (!file.endsWith(".mdx")) continue;

      const raw = fs.readFileSync(path.join(catPath, file), "utf-8");
      const { data, content } = matter(raw);

      entries.push({
        title: data.title || file.replace(/\.mdx$/, ""),
        description: data.description || "",
        category: cat,
        slug: file.replace(/\.mdx$/, ""),
        body: content.slice(0, 500),
      });
    }
  }
  return entries;
}

const index = walk(contentDir);
fs.writeFileSync(outPath, JSON.stringify(index, null, 2));
console.log(`Search index generated: ${index.length} articles → ${outPath}`);
