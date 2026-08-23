"use client";

import Link from "next/link";
import PhoneCarousel from "./PhoneCarousel";
import GradText from "./GradText";
import IosWaitlistModal from "./IosWaitlistModal";
import { release } from "./FinalCta";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "140px 0 70px",
        overflow: "hidden",
      }}
    >
      {/* Dot grid */}
      <div
        style={{
          content: "''",
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 50% 15%, black 30%, transparent 85%)",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 15%, black 30%, transparent 85%)",
          zIndex: 0,
        }}
        aria-hidden
      />

      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 40,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: copy */}
          <div>
            <div className="eyebrow">
              <span className="dot" />
              OPEN BETA · ANDROID
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.4rem)",
                lineHeight: 1.04,
                fontWeight: 700,
                marginBottom: 22,
              }}
            >
              Slide into your <GradText>Next Project</GradText>
            </h1>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: "var(--text-dim)",
                maxWidth: 500,
                marginBottom: 34,
              }}
            >
              Every dev-matching app hands you a swipe deck, a match, and a bare
              DM thread — then wishes you luck.{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                Reviar auto-provisions the entire workspace
              </strong>{" "}
              — RBAC-gated channels, Kanban, Pods (Voice chat system), even the
              friendship that outlasts the project — All for you
            </p>

            <div className="cta-row" id="download">
              <Link href={release} className="btn btn-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M12 3v13m0 0l-4-4m4 4l4-4M5 21h14" />
                </svg>
                Download APK
              </Link>
              <IosWaitlistModal
                trigger={
                  <span className="btn btn-ghost" style={{ cursor: "pointer" }}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                      style={{ width: 18, height: 18 }}
                    >
                      <path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2zM12 18h.01" />
                    </svg>
                    Notify me for iOS
                  </span>
                }
              />
            </div>

            <p
              className="mono"
              style={{ fontSize: 12.5, color: "var(--text-faint)" }}
            >
              $ direct-install · v0.9-beta · android-now · ios-and-web-next
            </p>
          </div>

          {/* Right: phone */}
          <PhoneCarousel />
        </div>
      </div>
    </section>
  );
}
