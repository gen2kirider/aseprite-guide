"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface SearchResult {
  title: string;
  description: string;
  category: string;
  slug: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState<SearchResult[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/search-index.json")
      .then((res) => (res.ok ? res.json() : []))
      .then(setIndex)
      .catch(() => setIndex([]));
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const matched = index.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q),
    );
    setResults(matched.slice(0, 8));
  }, [query, index]);

  return (
    <div
      ref={ref}
      className="relative flex min-w-0 items-center justify-end gap-2"
    >
      <div className="flex min-w-0 items-center gap-2 rounded-md border border-border-default bg-bg-input px-3 py-1.5">
        <span className="shrink-0 text-text-secondary text-sm">🔍</span>
        <input
          data-search-global
          type="text"
          placeholder="Aseprite内の検索..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="min-w-0 flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-secondary focus:outline-none md:w-48"
        />
      </div>
      <button className="shrink-0 rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors">
        検索
      </button>

      {isOpen && results.length > 0 && (
        <div className="absolute right-0 top-full z-50 mt-1 w-[calc(100vw-2rem)] max-w-80 rounded-lg border border-border-default bg-bg-secondary shadow-xl md:w-80">
          {results.map((r) => (
            <button
              key={`${r.category}/${r.slug}`}
              className="flex w-full flex-col gap-0.5 px-4 py-2 text-left hover:bg-bg-card transition-colors first:rounded-t-lg last:rounded-b-lg"
              onClick={() => {
                router.push(`/${r.category}/${r.slug}`);
                setIsOpen(false);
                setQuery("");
              }}
            >
              <span className="text-sm font-medium text-text-primary">
                {r.title}
              </span>
              <span className="text-xs text-text-secondary line-clamp-1">
                {r.description}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
