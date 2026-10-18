import Link from "next/link";

export default function PolicyLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="legal-page policy-page">
      <div className="legal-topbar">
        <Link href="/" className="legal-brand">Reviar</Link>
        <div className="policy-nav"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/delete-account">Delete account</Link></div>
      </div>
      <article className="policy-content">
        <span className="section-eyebrow">NOB DEV LABS</span>
        <h1>{title}</h1>
        <p className="policy-updated">Last updated: {updated}</p>
        {children}
        <footer className="policy-footer"><Link href="/">← Back to Reviar</Link></footer>
      </article>
    </main>
  );
}
