import Image from "next/image";
import RevealWrapper from "./RevealWrapper";
import SigCard from "./SigCard";

// ── Card shell ────────────────────────────────────────────────────────────────
function Card({
  children,
  style = {},
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="feature-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        padding: 10,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── Small icon box ────────────────────────────────────────────────────────────
function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "rgba(0,229,255,0.08)",
        border: "1px solid rgba(0,229,255,0.16)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 14,
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

// ── Cropped screenshot window ──────────────────────────────────────────────────
// height: how tall the visible crop window is (px)
// objectPosition: where to focus within the full image (e.g. "50% 35%")
// objectFit: always "cover" — we're cropping, not scaling to fit
function Shot({
  src,
  alt,
  caption,
  height = 180,
  focusY = "30%", // vertical focus point within the image
}: {
  src: string;
  alt: string;
  caption: string;
  height?: number;
  focusY?: string;
}) {
  return (
    <div style={{ marginTop: 18 }}>
      {/* crop window */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height,
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "#05070a",
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width:900px) 90vw, 400px"
          style={{ objectFit: "cover", objectPosition: `50% ${focusY}` }}
        />
        {/* left+right side vignette to mask hard edges */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(90deg, rgba(14,19,32,0.25) 0%, transparent 15%, transparent 85%, rgba(14,19,32,0.25) 100%)",
            zIndex: 2,
          }}
          aria-hidden
        />
        {/* top fade — hides any residual status bar chrome */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 20,
            pointerEvents: "none",
            background:
              "linear-gradient(180deg, rgba(14,19,32,0.55) 0%, transparent 100%)",
            zIndex: 2,
          }}
          aria-hidden
        />
      </div>
      {/* caption */}
      <p
        className="mono"
        style={{
          fontSize: 10.5,
          color: "var(--text-faint)",
          marginTop: 7,
          letterSpacing: "0.04em",
          opacity: 0.8,
        }}
      >
        ↑ {caption}
      </p>
    </div>
  );
}

// ── Inline tag badge ──────────────────────────────────────────────────────────
function Tag({
  children,
  color = "var(--purple)",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      className="mono"
      style={{
        display: "inline-block",
        fontSize: 10.5,
        color,
        background: `${color}18`,
        border: `1px solid ${color}40`,
        padding: "3px 9px",
        borderRadius: 6,
        marginBottom: 14,
      }}
    >
      {children}
    </span>
  );
}

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="wrap">
        {/* ── Header ── */}
        <RevealWrapper className="section-head">
          <span className="section-eyebrow">The product</span>
          <h2>
            Everything a team needs,
            <br />
            none of the setup.
          </h2>
          <p className="section-desc">
            Discovery, workspaces, permissions, tasks — and the friendships that
            survive the sprint — built as one continuous flow.
          </p>
        </RevealWrapper>

        {/* ═══════════════════════════════════════════════════════════════
            ROW 1 — Explore (wide left) + Friends (right)
        ═══════════════════════════════════════════════════════════════ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: 16,
            marginBottom: 16,
          }}
          className="bento-row"
        >
          {/* Explore */}
          <RevealWrapper>
            <Card
              style={{
                flexDirection: "row",
                gap: 28,
                alignItems: "flex-start",
              }}
            >
              {/* Text side */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <Tag>GET /explore</Tag>
                <h3
                  style={{
                    fontSize: 19,
                    fontWeight: 700,
                    marginBottom: 10,
                    lineHeight: 1.25,
                  }}
                >
                  A feed, not a deck
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--text-dim)",
                    marginBottom: 20,
                  }}
                >
                  Filter open roles by stack and see verified GitHub stats
                  before you ever apply. Browsing and applying are two separate,
                  deliberate taps — no swipe deck, no mutual-match state.
                </p>
                {/* Stats */}
                <div style={{ display: "flex", gap: 24 }}>
                  {[
                    { val: "1-tap", sub: "to apply" },
                    { val: "verified", sub: "GitHub stats" },
                    { val: "zero", sub: "swipe deck" },
                  ].map((s) => (
                    <div key={s.sub}>
                      <div
                        className="mono"
                        style={{
                          fontSize: 13,
                          color: "var(--cyan)",
                          fontWeight: 600,
                        }}
                      >
                        {s.val}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--text-faint)",
                          marginTop: 3,
                        }}
                      >
                        {s.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Screenshot side */}
              <div style={{ width: 180, flexShrink: 0 }}>
                <Shot
                  src="/shots/Screenshot_1786317026.png"
                  alt="Explore feed"
                  caption="Explore — role cards with stack tags"
                  height={190}
                  focusY="28%"
                />
              </div>
            </Card>
          </RevealWrapper>

          {/* Friends */}
          <RevealWrapper>
            <Card>
              <Icon>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--cyan)"
                  strokeWidth="2"
                  width={17}
                  aria-hidden
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </Icon>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                Friends outlive the project
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.65,
                  color: "var(--text-dim)",
                }}
              >
                DMs aren&apos;t locked to a workspace. Add someone as a friend
                and keep talking long after the sprint ships.
              </p>
              <Shot
                src="/shots/Screenshot_1786317464.png"
                alt="Messages and friend requests"
                caption="Messages — persistent DMs with friends"
                height={160}
                focusY="40%"
              />
            </Card>
          </RevealWrapper>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            ROW 2 — RBAC + Workspace-live sig card + Kanban
        ═══════════════════════════════════════════════════════════════ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr 1fr",
            gap: 16,
            marginBottom: 16,
          }}
          className="bento-row"
        >
          {/* RBAC */}
          <RevealWrapper>
            <Card>
              <Tag color="var(--cyan)">RBAC</Tag>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 10,
                  lineHeight: 1.25,
                }}
              >
                Access earned,
                <br />
                not assumed
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.65,
                  color: "var(--text-dim)",
                  marginBottom: 16,
                }}
              >
                New contributors land in #general. A PM unlocks the next channel
                manually — one toggle at a time.
              </p>
              {/* Permission ladder */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  marginBottom: 4,
                }}
              >
                {[
                  { ch: "#general", open: true },
                  { ch: "#frontend", open: true },
                  { ch: "#backend-api", open: false },
                  { ch: "#db-prod", open: false },
                ].map((row) => (
                  <div
                    key={row.ch}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "5px 10px",
                      borderRadius: 7,
                      background: row.open
                        ? "rgba(0,229,255,0.05)"
                        : "rgba(255,255,255,0.02)",
                      border: `1px solid ${row.open ? "rgba(0,229,255,0.18)" : "var(--border)"}`,
                    }}
                  >
                    <span
                      className="mono"
                      style={{
                        fontSize: 10.5,
                        color: row.open ? "var(--cyan)" : "var(--text-faint)",
                      }}
                    >
                      {row.ch}
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        color: row.open
                          ? "var(--success)"
                          : "var(--text-faint)",
                      }}
                    >
                      {row.open ? "✓ open" : "locked"}
                    </span>
                  </div>
                ))}
              </div>
              <Shot
                src="/shots/Screenshot_1786317427.png"
                alt="RBAC channel access toggle"
                caption="Member Details — per-channel access toggles"
                height={155}
                focusY="55%"
              />
            </Card>
          </RevealWrapper>

          {/* Sig card */}
          <RevealWrapper>
            <SigCard />
          </RevealWrapper>

          {/* Kanban */}
          <RevealWrapper>
            <Card>
              <Icon>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--cyan)"
                  strokeWidth="2"
                  width={17}
                  aria-hidden
                >
                  <path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h4m0-18h10a2 2 0 012 2v14a2 2 0 01-2 2H9m0-18v18" />
                </svg>
              </Icon>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                Kanban wired to channels
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.65,
                  color: "var(--text-dim)",
                }}
              >
                Tap a task label — land straight in the channel where that work
                is happening.
              </p>
              <Shot
                src="/shots/Screenshot_1786317149.png"
                alt="Kanban board"
                caption="Task Board — columns linked to channels"
                height={160}
                focusY="38%"
              />
            </Card>
          </RevealWrapper>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            ROW 3 — GitHub + Workspaces + Pods (voice chat)
        ═══════════════════════════════════════════════════════════════ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 16,
          }}
          className="bento-row"
        >
          {/* GitHub */}
          <RevealWrapper>
            <Card>
              <Icon>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--cyan)"
                  strokeWidth="2"
                  width={17}
                  aria-hidden
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </Icon>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                GitHub, as a filter
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.65,
                  color: "var(--text-dim)",
                }}
              >
                PMs set a minimum merged-PR threshold per role. Contribution
                graph and top languages sync straight to the profile.
              </p>
              <Shot
                src="/shots/Screenshot_1786317402.png"
                alt="GitHub profile stats"
                caption="Profile — contribution graph + top languages"
                height={160}
                focusY="45%"
              />
            </Card>
          </RevealWrapper>

          {/* Workspaces */}
          <RevealWrapper>
            <Card>
              <Icon>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--cyan)"
                  strokeWidth="2"
                  width={17}
                  aria-hidden
                >
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
              </Icon>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                Workspaces
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.65,
                  color: "var(--text-dim)",
                }}
              >
                Every project gets channels, a board, and a member roster —
                provisioned automatically when a PM hits Accept.
              </p>
              <Shot
                src="/shots/Screenshot_1786317005.png"
                alt="Workspaces list"
                caption="Workspaces — your active projects"
                height={160}
                focusY="42%"
              />
            </Card>
          </RevealWrapper>

          {/* Huddles */}
          <RevealWrapper>
            <Card>
              <Icon>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--cyan)"
                  strokeWidth="2"
                  width={17}
                  aria-hidden
                >
                  <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                  <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
                </svg>
              </Icon>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                Pods (Voice Chat), on demand
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.65,
                  color: "var(--text-dim)",
                  marginBottom: 20,
                }}
              >
                Ephemeral audio calls tied to a channel — no calendar invite, no
                standing room. Jump in, jump out.
              </p>
              {/* Waveform visualiser */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 3,
                  height: 40,
                  marginBottom: 16,
                }}
              >
                {[
                  12, 24, 18, 36, 28, 44, 20, 32, 16, 40, 26, 14, 38, 22, 34,
                ].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: h,
                      borderRadius: 3,
                      background:
                        i % 3 === 0
                          ? "var(--cyan)"
                          : i % 3 === 1
                            ? "var(--purple)"
                            : "rgba(255,255,255,0.1)",
                      opacity: 0.75,
                    }}
                  />
                ))}
              </div>
              {/* Live call pill */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "9px 14px",
                  borderRadius: 10,
                  background: "rgba(0,245,160,0.06)",
                  border: "1px solid rgba(0,245,160,0.18)",
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--success)",
                    boxShadow: "0 0 7px var(--success)",
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    color: "var(--success)",
                    fontWeight: 600,
                  }}
                >
                  Live · #backend-api
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--text-faint)",
                    marginLeft: "auto",
                  }}
                >
                  3 in
                </span>
              </div>
            </Card>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
