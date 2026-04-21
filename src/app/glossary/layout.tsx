import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "用語図鑑",
  description:
    "Asepriteやドット絵制作で使われる用語を日本語で解説する用語図鑑ページです。",
  alternates: {
    canonical: "/glossary",
  },
  openGraph: {
    title: "用語図鑑 | Aseprite日本語ガイド",
    description:
      "Asepriteやドット絵制作で使われる用語を日本語で解説する用語図鑑ページです。",
    url: "/glossary",
    locale: "ja_JP",
    type: "website",
  },
};

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
