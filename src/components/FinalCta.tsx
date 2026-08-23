import Link from "next/link";
import GradText from "./GradText";

import releaseData from "../links/v1-link.json";
import IosWaitlistModal from "./IosWaitlistModal";

const STATS = [
  { val: "~10s", label: "workspace provisioned" },
  { val: "0", label: "manual setup steps" },
  { val: "1-tap", label: "to apply for a role" },
  { val: "∞", label: "friendships after ship" },
];

export const release = releaseData[1];

export default function FinalCta() {
  return (
    <section
      style={{
        position: "relative",
        padding: "140px 0 120px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 70% 60% at 50% 40%, rgba(0,229,255,0.12), transparent 65%),
            radial-gradient(ellipse 50% 50% at 65% 55%, rgba(176,0,255,0.10), transparent 60%)
          `,
          zIndex: 0,
        }}
        aria-hidden
      />

      {/* Grid dot overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
        aria-hidden
      />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            marginBottom: 64,
            flexWrap: "wrap",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                className="mono"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  background:
                    "linear-gradient(100deg, var(--cyan), var(--purple))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-faint)",
                  letterSpacing: "0.03em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 700,
            marginBottom: 20,
            lineHeight: 1.08,
          }}
        >
          Ready to stop
          <br />
          <GradText>context-switching?</GradText>
        </h2>

        <p
          style={{
            color: "var(--text-dim)",
            fontSize: 17,
            maxWidth: 500,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Download the Android beta and go from Explore feed to a fully
          permissioned, channel-structured workspace in one sitting.
        </p>

        <div className="cta-row" style={{ justifyContent: "center" }}>
          <Link
            href={release}
            className="btn btn-primary"
            style={{ fontSize: 16, padding: "16px 32px" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M12 3v13m0 0l-4-4m4 4l4-4M5 21h14" />
            </svg>
            Download APK — it&apos;s free
          </Link>

          {/* This is the fixed component placement */}
          <IosWaitlistModal />
        </div>

        {/* Fine print */}
        <p
          className="mono"
          style={{ fontSize: 12, color: "var(--text-faint)", marginTop: 20 }}
        >
          v0.9-beta · Android now · iOS &amp; web next
        </p>
      </div>
    </section>
  );
}
