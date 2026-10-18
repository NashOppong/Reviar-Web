"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";

const API_URL = (process.env.NEXT_PUBLIC_API_URL || "https://reviar-api.onrender.com/api/v1").replace(/\/$/, "");

type Props = { confirmation?: boolean };

export default function DeleteAccountFlow({ confirmation = false }: Props) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const tokenRef = useRef("");
  const [stage, setStage] = useState<"form" | "sent" | "done" | "error">(confirmation ? "sent" : "form");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!confirmation) return;
    const params = new URLSearchParams(window.location.search);
    const linkToken = params.get("token") || "";
    tokenRef.current = linkToken;
    if (!linkToken) {
      setTimeout(() => {
        setStage("error");
        setMessage("This deletion link is missing or invalid.");
      }, 0);
      return;
    }

    let cancelled = false;
    fetch(`${API_URL}/account-deletion/send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: linkToken }),
    })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.message || "This deletion link is invalid or expired.");
        if (!cancelled) setMessage("A six-digit verification code has been sent to your email.");
      })
      .catch((error: Error) => {
        if (!cancelled) {
          setStage("error");
          setMessage(error.message);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [confirmation]);

  async function submitRequest(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch(`${API_URL}/account-deletion/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || "Unable to start account deletion.");
      setStage("sent");
      setMessage("If an active Reviar account uses that email, deletion instructions are on the way.");
    } catch (error) {
      setStage("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  async function confirmDeletion(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch(`${API_URL}/account-deletion/confirm`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: tokenRef.current, otp }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || "Unable to delete this account.");
      setStage("done");
      setMessage("Your Reviar account and associated personal data have been deleted.");
    } catch (error) {
      setStage("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="legal-page deletion-page">
      <div className="legal-topbar">
        <Link href="/" className="legal-brand">Reviar</Link>
        <Link href="/privacy" className="legal-back">Privacy Policy</Link>
      </div>
      <section className="deletion-card">
        <span className="section-eyebrow">ACCOUNT CONTROL</span>
        <h1>{confirmation ? "Confirm account deletion" : "Delete your Reviar account"}</h1>
        {stage === "done" ? (
          <>
            <p className="deletion-status success">{message}</p>
            <Link href="/" className="btn btn-primary">Return to Reviar</Link>
          </>
        ) : stage === "error" ? (
          <>
            <p className="deletion-status error">{message}</p>
            <Link href="/delete-account" className="btn btn-ghost">Start again</Link>
          </>
        ) : confirmation ? (
          <form onSubmit={confirmDeletion} className="deletion-form">
            <p>{message || "Preparing your verification code…"}</p>
            <label htmlFor="otp">Six-digit verification code</label>
            <input id="otp" inputMode="numeric" pattern="[0-9]{6}" maxLength={6} value={otp} onChange={(event) => setOtp(event.target.value.replace(/\D/g, ""))} required />
            <p className="deletion-warning">This permanently removes your profile and community content. Shared workspaces are preserved for other members, with ownership transferred when necessary.</p>
            <button className="btn btn-danger" disabled={busy || otp.length !== 6}>{busy ? "Deleting…" : "Permanently delete account"}</button>
          </form>
        ) : stage === "sent" ? (
          <>
            <p className="deletion-status success">{message}</p>
            <p>Open the email from Reviar and click its Delete account button to continue.</p>
          </>
        ) : (
          <form onSubmit={submitRequest} className="deletion-form">
            <p>Enter the email address on your account. We’ll send a secure confirmation link.</p>
            <label htmlFor="email">Account email</label>
            <input id="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <button className="btn btn-danger" disabled={busy}>{busy ? "Sending…" : "Send deletion link"}</button>
          </form>
        )}
        <p className="deletion-note">Need help? Contact <a href="mailto:support@reviar.dev">support@reviar.dev</a>.</p>
      </section>
    </main>
  );
}
