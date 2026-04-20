import Link from "next/link";

interface Props {
  id: string;
  children: React.ReactNode;
}

export default function Term({ id, children }: Props) {
  return (
    <Link
      href={`/glossary#term-${id}`}
      className="inline-flex items-baseline gap-0.5 border-b border-dashed border-accent/40 text-text-primary transition-colors hover:border-accent hover:text-accent"
      title="用語図鑑で見る"
    >
      {children}
      <span className="text-[10px] text-accent/60">📖</span>
    </Link>
  );
}
