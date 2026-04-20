"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navCategories, categories } from "@/lib/categories";
import SearchBar from "./SearchBar";

const navItems = navCategories.map((slug) => {
  const cat = categories.find((c) => c.slug === slug)!;
  return { slug: cat.slug, name: cat.name, icon: cat.icon };
});

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border-default bg-bg-secondary/95 backdrop-blur">
      {/* Top row */}
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center gap-3 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-2xl">🎨</span>
          <span className="hidden text-lg font-bold text-text-primary sm:block">
            Aseprite日本語ガイド
          </span>
        </Link>

        <Link
          href="/"
          className="hidden items-center gap-1 rounded-md px-2 py-1 text-sm text-text-secondary hover:bg-bg-card hover:text-text-primary transition-colors md:flex"
        >
          🏠 トップ
        </Link>

        <div className="ml-auto min-w-0 max-w-sm flex-1">
          <SearchBar />
        </div>
      </div>

      {/* Nav row */}
      <div className="border-t border-border-default/50">
        <div className="mx-auto flex max-w-screen-2xl items-center px-4">
          <nav className="flex items-center gap-0.5 overflow-x-auto">
            {navItems.map((item) => {
              const href = `/${item.slug}`;
              const isActive = pathname.startsWith(href);
              return (
                <Link
                  key={item.slug}
                  href={href}
                  className={`flex items-center gap-1.5 whitespace-nowrap border-b-2 px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "border-accent text-accent font-medium"
                      : "border-transparent text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <span className="text-xs">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
