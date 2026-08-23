"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/shots/Screenshot_1786317249.png", caption: "Sign in — email or GitHub" },
  { src: "/shots/Screenshot_1786317026.png", caption: "Explore open roles by stack" },
  { src: "/shots/Screenshot_1786317049.png", caption: "Project detail — tap Apply" },
  { src: "/shots/Screenshot_1786317005.png", caption: "Your workspaces, at a glance" },
  { src: "/shots/Screenshot_1786317188.png", caption: "RBAC channel sidebar" },
  { src: "/shots/Screenshot_1786317149.png", caption: "Kanban wired to channels" },
  { src: "/shots/Screenshot_1786317180.png", caption: "Channel conversation" },
  { src: "/shots/Screenshot_1786317121.png", caption: "Member profile — add friend" },
  { src: "/shots/Screenshot_1786317427.png", caption: "Per-channel access toggles" },
  { src: "/shots/Screenshot_1786316969.png", caption: "Your profile" },
  { src: "/shots/Screenshot_1786317402.png", caption: "GitHub contribution graph" },
  { src: "/shots/Screenshot_1786317464.png", caption: "Messages & friend requests" },
];

const INTERVAL = 2500;

export default function PhoneCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 560,
      }}
    >
      {/* Glow orbs */}
      <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", background: "var(--cyan)", opacity: 0.32, top: "6%", left: "6%", filter: "blur(75px)" }} aria-hidden />
      <div style={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", background: "var(--purple)", opacity: 0.34, bottom: "4%", right: "4%", filter: "blur(75px)" }} aria-hidden />

      {/* Phone shell */}
      <div
        style={{
          position: "relative",
          width: 276,
          height: 580,
          borderRadius: 44,
          zIndex: 2,
          background: "linear-gradient(155deg, #3a4256 0%, #1b202e 45%, #0c0f18 100%)",
          padding: 3,
          boxShadow: "0 45px 100px -22px rgba(0,0,0,0.7), 0 0 80px -8px rgba(0,229,255,0.22), inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        {/* Camera dot */}
        <div style={{ position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)", width: 10, height: 10, borderRadius: "50%", background: "#010204", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "inset 0 0 3px rgba(0,229,255,0.6)", zIndex: 6 }} aria-hidden />
        {/* Power button */}
        <div style={{ position: "absolute", right: -3, top: 150, width: 3, height: 66, borderRadius: "2px 0 0 2px", background: "linear-gradient(180deg,#4a5064,#20242f)" }} aria-hidden />
        {/* Volume button */}
        <div style={{ position: "absolute", right: -3, top: 226, width: 3, height: 98, borderRadius: "2px 0 0 2px", background: "linear-gradient(180deg,#4a5064,#20242f)" }} aria-hidden />

        {/* Inner bezel */}
        <div style={{ width: "100%", height: "100%", borderRadius: 41, background: "#05070a", padding: 8, position: "relative" }}>
          {/* Screen */}
          <div style={{ width: "100%", height: "100%", borderRadius: 34, background: "var(--bg)", overflow: "hidden", position: "relative" }}>

            {/* Progress bars */}
            <div style={{ position: "absolute", top: 9, left: 9, right: 9, display: "flex", gap: 3, zIndex: 7 }}>
              {SLIDES.map((_, i) => (
                <span key={i} style={{ flex: 1, height: 2.5, borderRadius: 2, background: "rgba(255,255,255,0.18)", overflow: "hidden" }}>
                  <span
                    className={`hero-progress-bar${i < current ? " done" : i === current ? " active" : ""}`}
                    style={{ display: "block", height: "100%" }}
                  />
                </span>
              ))}
            </div>

            {/* Screenshots */}
            {SLIDES.map((slide, i) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.caption}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top center",
                  opacity: i === current ? 1 : 0,
                  transition: "opacity 0.9s ease",
                  position: "absolute",
                }}
                priority={i === 0}
                sizes="276px"
              />
            ))}

            {/* Caption */}
            <div
              style={{
                position: "absolute", left: 9, right: 9, bottom: 9, zIndex: 7,
                display: "flex", alignItems: "center", gap: 8,
                padding: "9px 12px", borderRadius: 12,
                background: "rgba(5,7,10,0.78)",
                backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.12)",
                fontSize: 11.5, fontWeight: 500, color: "var(--text)",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cyan)", boxShadow: "0 0 6px var(--cyan)", flexShrink: 0 }} />
              <span>{SLIDES[current].caption}</span>
            </div>

            {/* Glass sheen */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 8, borderRadius: 34, background: "linear-gradient(115deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 16%)" }} aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
