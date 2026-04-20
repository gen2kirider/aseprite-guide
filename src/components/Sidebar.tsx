"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { categories } from "@/lib/categories";

interface SearchResult {
  title: string;
  description: string;
  category: string;
  slug: string;
}

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [index, setIndex] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  return (
    <aside className="hidden w-56 shrink-0 border-r border-border-default bg-bg-secondary lg:block">
      <div className="sticky top-23 flex h-[calc(100vh-5.75rem)] flex-col overflow-y-auto p-4">
        {/* Categories */}
        <section>
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            カテゴリー
          </h2>
          <ul className="space-y-0.5">
            <li>
              <Link
                href="/"
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors ${
                  pathname === "/"
                    ? "bg-accent/15 text-accent font-medium"
                    : "text-text-secondary hover:bg-bg-card hover:text-text-primary"
                }`}
              >
                <span>🏠</span>
                <span>トップ</span>
              </Link>
            </li>
            {categories.map((cat) => {
              const href = `/${cat.slug}`;
              const isActive = pathname.startsWith(href);
              return (
                <li key={cat.slug}>
                  <Link
                    href={href}
                    className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors ${
                      isActive
                        ? "bg-accent/15 text-accent font-medium"
                        : "text-text-secondary hover:bg-bg-card hover:text-text-primary"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Index section */}
        <section className="mt-6">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            索引
          </h2>
          <div ref={searchRef} className="relative mb-2">
            <input
              type="text"
              placeholder="🔍 検索する"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              className="w-full rounded-md border border-border-default bg-bg-input px-3 py-1.5 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none"
            />
            {isOpen && results.length > 0 && (
              <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-lg border border-border-default bg-bg-secondary shadow-xl">
                {results.map((r) => (
                  <button
                    key={`${r.category}/${r.slug}`}
                    className="flex w-full flex-col gap-0.5 px-3 py-2 text-left hover:bg-bg-card transition-colors first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => {
                      router.push(`/${r.category}/${r.slug}`);
                      setIsOpen(false);
                      setQuery("");
                    }}
                  >
                    <span className="text-xs font-medium text-text-primary">
                      {r.title}
                    </span>
                    <span className="text-[10px] text-text-secondary line-clamp-1">
                      {r.description}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/index-az"
            className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-text-secondary hover:bg-bg-card hover:text-text-primary"
          >
            <span>A〜Z 辞典</span>
            <span className="text-text-secondary">›</span>
          </Link>
          <Link
            href="/glossary"
            className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-text-secondary hover:bg-bg-card hover:text-text-primary"
          >
            <span>📖 用語図鑑</span>
            <span className="text-text-secondary">›</span>
          </Link>
        </section>

        {/* Popular tutorials */}
        <section className="mt-6">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            人気のチュートリアル
          </h2>
          <div className="space-y-2">
            <Link
              href="/basics/localization"
              className="group flex gap-2 rounded-md p-1.5 transition-colors hover:bg-bg-card"
            >
              <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded bg-bg-card text-lg">
                🌐
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-text-primary group-hover:text-accent transition-colors line-clamp-2">
                  Asepriteを
                  <br />
                  日本語化する方法
                </p>
                <p className="text-[10px] text-accent-teal">もっと見る</p>
              </div>
            </Link>
            <Link
              href="/editing/layers-basics"
              className="group flex gap-2 rounded-md p-1.5 transition-colors hover:bg-bg-card"
            >
              <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded bg-bg-card text-lg">
                📑
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-text-primary group-hover:text-accent transition-colors line-clamp-2">
                  Asepriteの
                  <br />
                  レイヤー説をガイド
                </p>
                <p className="text-[10px] text-accent-teal">カテゴリー</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </aside>
  );
}
