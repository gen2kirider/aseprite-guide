export interface Category {
  slug: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const categories: Category[] = [
  {
    slug: "basics",
    name: "基本操作",
    icon: "✏️",
    description: "初めての方向けにAsepriteの基本操作を解説します。",
    color: "#58a6ff",
  },
  {
    slug: "palette",
    name: "色とパレット",
    icon: "🎨",
    description: "カラーピッカー・パレット管理・配色テクニック。",
    color: "#f778ba",
  },
  {
    slug: "animation",
    name: "アニメーション",
    icon: "🎬",
    description:
      "フレーム・タイムラインを使ってアニメーションを作りましょう。",
    color: "#a371f7",
  },
  {
    slug: "tilemap",
    name: "タイルマップ",
    icon: "🗺️",
    description: "ゲーム用のタイルマップを作成し、効率的に配置する方法。",
    color: "#3fb950",
  },
  {
    slug: "editing",
    name: "編集テクニック",
    icon: "🔧",
    description: "選択範囲・レイヤー・ブレンドモードなどの編集機能。",
    color: "#f0883e",
  },
  {
    slug: "shortcuts",
    name: "ショートカット",
    icon: "⌨️",
    description: "作業効率を上げるキーボードショートカット一覧。",
    color: "#e3b341",
  },
  {
    slug: "export",
    name: "エクスポート",
    icon: "📤",
    description: "スプライトシートやGIF、PNG等への書き出し方法。",
    color: "#56d364",
  },
];

export const navCategories = [
  "basics",
  "palette",
  "animation",
  "tilemap",
  "editing",
  "shortcuts",
  "export",
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
