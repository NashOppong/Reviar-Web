"use client";

import { useEffect, useRef, useState } from "react";
import FeatureCard from "./FeatureCard";

const CHIPS: { label: string; variant: "pm" | "neutral" | "success" }[] = [
  { label: "PM taps Accept", variant: "pm" },
  { label: "Grant Access fires", variant: "neutral" },
  { label: "Push notification sent", variant: "neutral" },
  { label: "#general", variant: "success" },
  { label: "#backend-api", variant: "success" },
  { label: "Kanban board", variant: "success" },
];

function chipStyle(variant: "pm" | "neutral" | "success") {
  if (variant === "pm") return { color: "var(--warning)", borderColor: "rgba(255,183,3,0.3)" };
  if (variant === "success") return { color: "var(--success)", borderColor: "rgba(0,245,160,0.35)" };
  return { color: "var(--text-dim)", borderColor: "var(--border)" };
}

export default function SigCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          setVisible(e.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <FeatureCard
      ref={ref}
      style={{
        background: "linear-gradient(135deg, rgba(0,229,255,0.07), rgba(176,0,255,0.09))",
        gridArea: "sig",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 18,
          gap: 12,
        }}
      >
        <div>
          <h3 style={{ fontSize: 16.5, fontWeight: 600, marginBottom: 8 }}>
            Workspace, live in seconds
          </h3>
          <p style={{ fontSize: 13.5, lineHeight: 1.58, color: "var(--text-dim)" }}>
            Not a figure of speech — this is the actual sequence when a PM taps Accept.
          </p>
        </div>
        <span
          className="mono"
          style={{
            fontSize: 13,
            color: "var(--cyan)",
            background: "rgba(0,229,255,0.08)",
            border: "1px solid rgba(0,229,255,0.25)",
            padding: "4px 10px",
            borderRadius: 8,
            flexShrink: 0,
          }}
        >
          ~10s
        </span>
      </div>

      {/* Chip track */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {CHIPS.map((chip, i) => (
          <span
            key={chip.label}
            className={visible ? "sig-chip active-chip" : "sig-chip"}
            style={{
              animationDelay: visible ? `${0.05 + i * 0.2}s` : "0s",
              ...chipStyle(chip.variant),
            }}
          >
            {chip.label}
          </span>
        ))}
      </div>
    </FeatureCard>
  );
}
