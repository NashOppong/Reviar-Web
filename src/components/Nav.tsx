import Link from "next/link";

export default function Nav() {
  return (
    <div
      style={{
        position: "fixed",
        top: 18,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 100,
        padding: "0 16px",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          width: "100%",
          maxWidth: 860,
          padding: "10px 10px 10px 18px",
          borderRadius: 999,
          background: "rgba(14,19,32,0.72)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(0,229,255,0.16)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
        }}
      >
        {/* Logo */}
        <Link
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: 17,
            marginRight: "auto",
          }}
        >
          <svg width={24} height={24} viewBox="0 0 40 40" fill="none" aria-hidden>
            <rect x="3" y="3" width="16" height="16" rx="6" stroke="#00e5ff" strokeWidth="3" />
            <rect x="21" y="21" width="16" height="16" rx="6" stroke="#b000ff" strokeWidth="3" />
            <circle cx="20" cy="20" r="2.4" fill="#f8fafc" />
          </svg>
          Reviar
        </Link>

        {/* Nav links — hidden on mobile via inline media-like approach */}
        <div
          className="nav-links"
          style={{ display: "flex", gap: 26, fontSize: 14, color: "var(--text-dim)" }}
        >
          <Link href="#features" style={{ transition: "color 0.2s" }}>Product</Link>
          <Link href="#how" style={{ transition: "color 0.2s" }}>How it works</Link>
          <Link href="#footer" style={{ transition: "color 0.2s" }}>For PMs</Link>
        </div>

        {/* CTA */}
        <Link
          href="#download"
          style={{
            background: "var(--cyan)",
            color: "#04121a",
            fontWeight: 700,
            fontSize: 13.5,
            padding: "9px 18px",
            borderRadius: 999,
            whiteSpace: "nowrap",
            boxShadow: "0 0 22px rgba(0,229,255,0.35)",
            transition: "box-shadow 0.25s ease, transform 0.2s ease",
          }}
        >
          Download APK
        </Link>
      </nav>
    </div>
  );
}
