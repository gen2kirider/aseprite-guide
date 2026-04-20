import Link from "next/link";
import { categories } from "@/lib/categories";

export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-secondary">
      <div className="mx-auto max-w-screen-2xl px-4 py-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-text-primary">
              カテゴリー
            </h3>
            <ul className="space-y-1.5">
              {categories.slice(0, 4).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-text-primary">
              その他
            </h3>
            <ul className="space-y-1.5">
              {categories.slice(4).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-text-primary">
              リソース
            </h3>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://www.aseprite.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Aseprite公式サイト
                </a>
              </li>
              <li>
                <a
                  href="https://www.aseprite.org/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  公式ドキュメント (英語)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-text-primary">
              サイトについて
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              Asepriteの使い方を日本語でわかりやすく解説する非公式ファンメイドガイドです。Aseprite
              および Igara Studio とは一切関係ありません。
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border-default pt-4 text-center text-xs text-text-secondary">
          © 2026 Aseprite日本語ガイド
        </div>
      </div>
    </footer>
  );
}
