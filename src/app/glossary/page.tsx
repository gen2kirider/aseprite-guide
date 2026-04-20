"use client";

import { useState } from "react";
import Link from "next/link";
import { glossary } from "@/lib/glossary";
import type { GlossaryTerm } from "@/lib/glossary";

export default function GlossaryPage() {
  const [query, setQuery] = useState("");

  const sorted = [...glossary].sort((a, b) =>
    (a.reading ?? a.term).localeCompare(b.reading ?? b.term, "ja"),
  );

  const filtered = query.trim()
    ? sorted.filter(
        (t) =>
          t.term.toLowerCase().includes(query.toLowerCase()) ||
          t.description.includes(query) ||
          (t.reading && t.reading.includes(query)),
      )
    : sorted;

  // Group by first character
  const groups = new Map<string, GlossaryTerm[]>();
  for (const term of filtered) {
    const first = (term.reading ?? term.term).charAt(0).toUpperCase();
    if (!groups.has(first)) groups.set(first, []);
    groups.get(first)!.push(term);
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary">📖 用語図鑑</h1>
        <p className="mt-2 text-text-secondary">
          Asepriteやドット絵制作でよく使われる用語を解説します。
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="用語を検索..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border border-border-default bg-bg-input px-4 py-2.5 text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none"
        />
      </div>

      {/* Term count */}
      <p className="mb-6 text-sm text-text-secondary">
        {filtered.length} 件の用語
      </p>

      {/* Term list */}
      <div className="space-y-8">
        {[...groups.entries()].map(([letter, terms]) => (
          <section key={letter}>
            <div className="sticky top-20 z-10 -mx-2 mb-3 bg-bg-primary/90 px-2 py-1 backdrop-blur">
              <span className="text-lg font-bold text-accent">{letter}</span>
            </div>
            <div className="space-y-3">
              {terms.map((t) => (
                <div
                  key={t.id}
                  id={`term-${t.id}`}
                  className="scroll-mt-28 rounded-xl border border-border-card bg-bg-card p-5 transition-colors hover:border-accent/20"
                >
                  <h2 className="text-base font-bold text-text-primary">
                    {t.term}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {t.description}
                  </p>
                  {t.related && t.related.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {t.related.map((rid) => {
                        const related = glossary.find((g) => g.id === rid);
                        if (!related) return null;
                        return (
                          <Link
                            key={rid}
                            href={`#term-${rid}`}
                            className="rounded-full border border-border-default px-2.5 py-0.5 text-xs text-text-secondary transition-colors hover:border-accent/40 hover:text-accent"
                          >
                            {related.term.split(" (")[0]}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-text-secondary">
          「{query}」に一致する用語が見つかりませんでした。
        </p>
      )}
    </div>
  );
}
