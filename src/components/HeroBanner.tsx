import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-xl border border-border-card">
      <Image src="/hero-bg.png" alt="" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 px-8 py-10 md:py-12 animate-[fadeSlideIn_0.6s_ease_both]">
        <div className="mb-2 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
          非公式ガイド
        </div>
        <h1 className="mb-3 text-3xl font-bold text-text-primary md:text-4xl">
          Aseprite 日本語ガイド
        </h1>
        <p className="max-w-lg text-lg text-text-secondary animate-[fadeSlideIn_0.6s_ease_0.2s_both]">
          Asepriteの使い方を
          <span className="font-bold text-accent">1</span>
          からわかりやすく解読
        </p>
      </div>
    </section>
  );
}
