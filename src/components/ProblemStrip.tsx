import RevealWrapper from "./RevealWrapper";

const BAD = [
  "Swipe deck you didn't ask for",
  "Mutual-match state that stalls progress",
  "Bare DM thread after a match",
  "Manual role setup every time",
  "No permission structure — day one",
];

const GOOD = [
  "PM taps Accept — workspace provisions",
  "RBAC channels ready immediately",
  "Kanban board, no setup required",
  "Push notification + direct landing",
  "Friendship survives the project",
];

export default function ProblemStrip() {
  return (
    <section
      style={{
        position: "relative",
        padding: "90px 0",
        zIndex: 1,
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      {/* Subtle center glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,229,255,0.04), transparent 70%)",
          pointerEvents: "none",
        }}
        aria-hidden
      />

      <div className="wrap">
        <RevealWrapper>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "var(--text-faint)",
                textTransform: "uppercase",
              }}
            >
              Why Reviar exists
            </span>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 700,
                marginTop: 12,
                lineHeight: 1.2,
              }}
            >
              Every other app stops at the match.
            </h2>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 80px 1fr",
              gap: 0,
              alignItems: "start",
            }}
            className="problem-grid"
          >
            {/* Bad column */}
            <div
              style={{
                padding: 32,
                borderRadius: "20px 0 0 20px",
                background: "rgba(255,50,80,0.03)",
                border: "1px solid rgba(255,50,80,0.14)",
                borderRight: "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "rgba(255,50,80,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ff4d6d" strokeWidth="2.5" width={14} height={14} aria-hidden>
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </div>
                <span className="mono" style={{ fontSize: 11.5, color: "#ff6b87", letterSpacing: "0.04em" }}>
                  every other app
                </span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {BAD.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: 14,
                      color: "var(--text-dim)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "#ff4d6d", flexShrink: 0, marginTop: 2 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="mono"
                style={{
                  marginTop: 20,
                  fontSize: 11,
                  color: "var(--text-faint)",
                  paddingTop: 16,
                  borderTop: "1px solid rgba(255,50,80,0.1)",
                }}
              >
                HackMate · CoffeeSpace · VenturLoop
              </div>
            </div>

            {/* Center arrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                background: "var(--surface)",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "var(--surface-2)",
                  border: "1px solid rgba(0,229,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 16px rgba(0,229,255,0.15)",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2.5" width={14} height={14} aria-hidden>
                  <path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                </svg>
              </div>
            </div>

            {/* Good column */}
            <div
              style={{
                padding: 32,
                borderRadius: "0 20px 20px 0",
                background: "rgba(0,229,255,0.04)",
                border: "1px solid rgba(0,229,255,0.18)",
                borderLeft: "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "rgba(0,229,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2.5" width={14} height={14} aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <span className="mono" style={{ fontSize: 11.5, color: "var(--cyan)", letterSpacing: "0.04em" }}>
                  reviar
                </span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {GOOD.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: 14,
                      color: "var(--text-dim)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "var(--success)", flexShrink: 0, marginTop: 2 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="mono"
                style={{
                  marginTop: 20,
                  fontSize: 11,
                  color: "var(--cyan)",
                  paddingTop: 16,
                  borderTop: "1px solid rgba(0,229,255,0.1)",
                }}
              >
                no swipe deck · no manual setup
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
