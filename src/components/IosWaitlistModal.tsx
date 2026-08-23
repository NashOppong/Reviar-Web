"use client";

import { useState, useEffect, useRef } from "react";

interface IosWaitlistModalProps {
  /** Optionally render a custom trigger instead of the default button */
  trigger?: React.ReactNode;
}

export default function IosWaitlistModal({ trigger }: IosWaitlistModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus first input when form opens
  useEffect(() => {
    if (isOpen && status !== "success") {
      setTimeout(() => firstInputRef.current?.focus(), 80);
    }
  }, [isOpen, status]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  function close() {
    setIsOpen(false);
    setTimeout(() => {
      setStatus("idle");
      setName("");
      setEmail("");
    }, 300);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("https://reviar-api.onrender.com/api/v1/wishlists/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* ── Trigger ── */}
      {trigger ? (
        <span onClick={() => setIsOpen(true)} style={{ cursor: "pointer" }}>
          {trigger}
        </span>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-ghost"
          style={{ fontSize: 15, padding: "14px 26px" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width={17}
            height={17}
            aria-hidden
          >
            <path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2zM12 18h.01" />
          </svg>
          Join the iOS waitlist
        </button>
      )}

      {/* ── Overlay ── */}
      {isOpen && (
        <div
          ref={overlayRef}
          onClick={(e) => {
            if (e.target === overlayRef.current) close();
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px 16px",
            background: "rgba(5,7,13,0.82)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            animation: "fadeIn 0.18s ease",
          }}
          aria-modal="true"
          role="dialog"
          aria-label="iOS waitlist"
        >
          {/* ── Modal panel ── */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 440,
              borderRadius: 24,
              background: "linear-gradient(145deg, #0e1320 0%, #0a0f1c 100%)",
              border: "1px solid rgba(0,229,255,0.14)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,229,255,0.08)",
              overflow: "hidden",
            }}
          >
            {/* Top cyan accent bar */}
            <div
              style={{
                height: 3,
                background:
                  "linear-gradient(90deg, var(--cyan), var(--purple))",
                width: "100%",
              }}
            />

            {/* Content */}
            <div style={{ padding: "32px 36px 36px" }}>
              {/* Close button */}
              <button
                onClick={close}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-faint)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  width={14}
                  height={14}
                  aria-hidden
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div style={{ marginBottom: 28 }}>
                {/* iOS badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "var(--cyan)",
                    background: "rgba(0,229,255,0.07)",
                    border: "1px solid rgba(0,229,255,0.2)",
                    padding: "4px 10px",
                    borderRadius: 999,
                    marginBottom: 16,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width={12}
                    height={12}
                    aria-hidden
                  >
                    <path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2zM12 18h.01" />
                  </svg>
                  iOS · COMING SOON
                </div>

                <h3
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: 10,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Get on the list
                </h3>
                <p
                  style={{
                    fontSize: 14.5,
                    color: "var(--text-dim)",
                    lineHeight: 1.65,
                  }}
                >
                  Be the first to know when the Reviar iOS beta goes live.
                  We&apos;ll email you the moment it&apos;s ready.
                </p>
              </div>

              {/* ── Success state ── */}
              {status === "success" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "36px 24px",
                    borderRadius: 16,
                    background: "rgba(0,229,255,0.04)",
                    border: "1px solid rgba(0,229,255,0.16)",
                    textAlign: "center",
                    gap: 0,
                  }}
                >
                  {/* Check circle */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(0,245,160,0.1)",
                      border: "1px solid rgba(0,245,160,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                      boxShadow: "0 0 24px rgba(0,245,160,0.15)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--success)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width={24}
                      height={24}
                      aria-hidden
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: 8,
                    }}
                  >
                    You&apos;re on the list
                    {name ? `, ${name.split(" ")[0]}` : ""}!
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--text-dim)",
                      lineHeight: 1.6,
                    }}
                  >
                    We&apos;ll email{" "}
                    <span style={{ color: "var(--cyan)" }}>{email}</span> the
                    moment iOS is ready.
                  </p>
                  <button
                    onClick={close}
                    style={{
                      marginTop: 28,
                      padding: "10px 28px",
                      borderRadius: 10,
                      background: "rgba(0,229,255,0.08)",
                      border: "1px solid rgba(0,229,255,0.22)",
                      color: "var(--cyan)",
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                /* ── Form state ── */
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  {/* Name */}
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 8 }}
                  >
                    <label
                      htmlFor="wl-name"
                      style={{
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: "var(--text-dim)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        textAlign: "left",
                      }}
                    >
                      Name
                    </label>
                    <input
                      ref={firstInputRef}
                      id="wl-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      style={{
                        width: "100%",
                        padding: "13px 16px",
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "var(--text)",
                        fontSize: 15,
                        outline: "none",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(0,229,255,0.45)";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(0,229,255,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.1)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 8 }}
                  >
                    <label
                      htmlFor="wl-email"
                      style={{
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: "var(--text-dim)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        textAlign: "left",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      id="wl-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="dev@example.com"
                      style={{
                        width: "100%",
                        padding: "13px 16px",
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "var(--text)",
                        fontSize: 15,
                        outline: "none",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(0,229,255,0.45)";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(0,229,255,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.1)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                      width: "100%",
                      padding: "14px 20px",
                      marginTop: 4,
                      borderRadius: 12,
                      background:
                        status === "loading"
                          ? "rgba(0,229,255,0.5)"
                          : "var(--cyan)",
                      color: "#04121a",
                      fontWeight: 700,
                      fontSize: 15,
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      boxShadow:
                        status === "loading"
                          ? "none"
                          : "0 0 24px rgba(0,229,255,0.3)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          width={18}
                          height={18}
                          style={{ animation: "spin 0.8s linear infinite" }}
                          aria-hidden
                        >
                          <path d="M12 2a10 10 0 0110 10" />
                        </svg>
                        Joining...
                      </>
                    ) : (
                      "Join Waitlist"
                    )}
                  </button>

                  {status === "error" && (
                    <p
                      style={{
                        fontSize: 13,
                        color: "#ff6b87",
                        textAlign: "center",
                        marginTop: -8,
                      }}
                    >
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
