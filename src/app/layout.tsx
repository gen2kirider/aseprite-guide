import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aseprite-guide.vercel.app"),
  title: {
    default: "Aseprite日本語ガイド",
    template: "%s | Aseprite日本語ガイド",
  },
  description:
    "Asepriteの使い方を日本語で解説する非公式ガイド。基本操作、パレット、アニメーション、タイルマップ、書き出しまで網羅。",
  applicationName: "Aseprite日本語ガイド",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Aseprite",
    "Aseprite 使い方",
    "Aseprite 日本語",
    "ドット絵",
    "ピクセルアート",
    "スプライト",
    "アニメーション",
    "タイルマップ",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Aseprite日本語ガイド",
    url: "/",
    title: "Aseprite日本語ガイド",
    description:
      "Asepriteの使い方を日本語で解説する非公式ガイド。初心者向けから実践テクニックまで。",
  },
  twitter: {
    card: "summary",
    title: "Aseprite日本語ガイド",
    description:
      "Asepriteの使い方を日本語で解説する非公式ガイド。基本操作から実践テクニックまで。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg-primary text-text-primary">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex min-w-0 flex-1 flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
