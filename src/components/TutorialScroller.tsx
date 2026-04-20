"use client";

import { useRef } from "react";
import Link from "next/link";

interface Tutorial {
  title: string;
  description: string;
  href: string;
  icon: string;
}

const tutorials: Tutorial[] = [
  {
    title: "Asepriteを日本語化する方法",
    description: "メニューやUIを日本語に切り替える手順",
    href: "/basics/localization",
    icon: "🌐",
  },
  {
    title: "レイヤー機能をガイド",
    description: "レイヤーの基本と便利な使い方",
    href: "/editing/layers-basics",
    icon: "📑",
  },
  {
    title: "選択ツールの種類と使い方",
    description: "矩形・投げ縄・魔法の杖など",
    href: "/editing/selection-basics",
    icon: "🔲",
  },
  {
    title: "ドット絵パレットの設定と運用",
    description: "カスタムパレットの作成方法",
    href: "/basics/tools",
    icon: "🎨",
  },
  {
    title: "スプライトシート書き出し",
    description: "ゲーム用の効率的なエクスポート",
    href: "/export/basics",
    icon: "📤",
  },
  {
    title: "アニメーションの基本",
    description: "フレーム操作とプレビュー",
    href: "/animation/frames-and-timeline",
    icon: "🎬",
  },
];

export default function TutorialScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="mt-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-text-primary">
          人気のチュートリアル
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-text-secondary">すべて見る</span>
          <button
            onClick={() => scroll("left")}
            className="rounded-md border border-border-default p-1 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="左へスクロール"
          >
            ‹
          </button>
          <button
            onClick={() => scroll("right")}
            className="rounded-md border border-border-default p-1 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="右へスクロール"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {tutorials.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group flex w-64 shrink-0 flex-col gap-2 rounded-xl border border-border-card bg-bg-card p-4 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="relative flex h-24 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#0f1923] to-bg-secondary">
              <div className="absolute inset-0 opacity-[0.07]">
                <div className="grid h-full w-full grid-cols-8 grid-rows-4">
                  {Array.from({ length: 32 }).map((_, j) => (
                    <div key={j} className="border-[0.5px] border-white" />
                  ))}
                </div>
              </div>
              <span className="relative text-3xl">{t.icon}</span>
            </div>
            <h3 className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
              {t.title}
            </h3>
            <p className="text-xs text-text-secondary line-clamp-2">
              {t.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
