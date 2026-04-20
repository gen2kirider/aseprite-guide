# Aseprite 日本語ガイド（非公式）

Aseprite の使い方を日本語でわかりやすく解説するファンメイドガイドサイトです。

> **注意**: 本サイトは非公式です。Aseprite および Igara Studio とは一切関係ありません。

## コンテンツ

- **基本操作** — はじめかた、ツール紹介、ブラシ設定など
- **色とパレット** — パレットの使い方、インデックスカラー、色の一括調整
- **アニメーション** — フレーム・タイムライン、オニオンスキン、リンクセルなど
- **タイルマップ** — タイルマップの基本、タイルパレット
- **編集テクニック** — 選択範囲、変形、レイヤー、ブレンドモード、アウトライン
- **ショートカット** — 一覧、カスタマイズ方法
- **エクスポート** — 基本、スプライトシート、GIF書き出し、スライス

## 技術スタック

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/) v4
- MDX（[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)）

## ローカルで動かす

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## 記事の追加

`content/{カテゴリー}/{slug}.mdx` にファイルを作成してください。

```mdx
---
title: 記事タイトル
description: 記事の説明
order: 1
---

本文をここに書く
```

記事を追加・変更したら検索インデックスを再生成します：

```bash
node scripts/generate-search-index.mjs
```
