export default function MeshBackground() {
  return (
    <>
      {/* Ambient blurred gradient blobs */}
      <div
        className="mesh mesh-cyan"
        style={{
          position: "fixed",
          borderRadius: "50%",
          filter: "blur(140px)",
          pointerEvents: "none",
          zIndex: 0,
          width: 560,
          height: 560,
          background: "var(--cyan)",
          top: -220,
          left: -180,
          opacity: 0.16,
        }}
        aria-hidden
      />
      <div
        style={{
          position: "fixed",
          borderRadius: "50%",
          filter: "blur(140px)",
          pointerEvents: "none",
          zIndex: 0,
          width: 620,
          height: 620,
          background: "var(--purple)",
          top: "20%",
          right: -280,
          opacity: 0.13,
        }}
        aria-hidden
      />
      <div
        style={{
          position: "fixed",
          borderRadius: "50%",
          filter: "blur(140px)",
          pointerEvents: "none",
          zIndex: 0,
          width: 460,
          height: 460,
          background: "var(--cyan)",
          bottom: -40,
          left: "26%",
          opacity: 0.06,
        }}
        aria-hidden
      />
      <div
        style={{
          position: "fixed",
          borderRadius: "50%",
          filter: "blur(140px)",
          pointerEvents: "none",
          zIndex: 0,
          width: 420,
          height: 420,
          background: "var(--purple)",
          bottom: "10%",
          right: "8%",
          opacity: 0.08,
        }}
        aria-hidden
      />
    </>
  );
}
