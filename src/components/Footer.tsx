import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "36px 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
          className="footer-inner"
        >
          {/* Left: logo + links */}
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            {/* Logo mark */}
            <svg width={20} height={20} viewBox="0 0 40 40" fill="none" aria-label="Reviar">
              <rect x="3" y="3" width="16" height="16" rx="6" stroke="#00e5ff" strokeWidth="3" />
              <rect x="21" y="21" width="16" height="16" rx="6" stroke="#b000ff" strokeWidth="3" />
              <circle cx="20" cy="20" r="2.4" fill="#f8fafc" />
            </svg>

            <span style={{ fontSize: 13, color: "var(--text-faint)" }}>
              © 2026 Reviar
            </span>

            <div style={{ display: "flex", gap: 20 }}>
              {[
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    fontSize: 13,
                    color: "var(--text-dim)",
                    transition: "color 0.2s",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: social icons */}
          <div style={{ display: "flex", gap: 14 }}>
            <a
              href="#"
              aria-label="GitHub"
              style={{
                width: 32,
                height: 32,
                border: "1px solid var(--border)",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-dim)",
                transition: "all 0.2s ease",
              }}
            >
              <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.03 3.26 9.29 7.79 10.8.57.1.78-.25.78-.55v-2.14c-3.17.69-3.84-1.36-3.84-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 015.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14v3.17c0 .3.21.66.79.55A10.53 10.53 0 0023.5 12c0-6.28-5.23-11.5-11.5-11.5z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="X (Twitter)"
              style={{
                width: 32,
                height: 32,
                border: "1px solid var(--border)",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-dim)",
                transition: "all 0.2s ease",
              }}
            >
              <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.7l-5.3-6.8L5.2 22H2l8.1-9.3L1 2h6.9l4.8 6.3L18.9 2zm-1.2 18h1.8L7.4 3.9H5.5L17.7 20z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
