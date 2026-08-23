import RevealWrapper from "./RevealWrapper";

const STEPS = [
  {
    num: "01",
    title: "Explore & apply",
    body: "Filter open roles by tech stack. See verified GitHub stats before you ever apply. Tap \u201cApply\u201d on the one role that fits \u2014 no swipe deck.",
    tag: "GET /explore",
    color: "var(--cyan)",
  },
  {
    num: "02",
    title: "PM reviews, manually",
    body: "Your application lands on the PM\u2019s Requests page, grouped by role, next to your contribution graph and merged PR count.",
    tag: "POST /apply",
    color: "var(--purple)",
  },
  {
    num: "03",
    title: "PM taps Accept",
    body: "One unilateral decision. No mutual-match state to wait on \u2014 you\u2019ll know the moment it happens via push notification.",
    tag: "PATCH /accept",
    color: "var(--success)",
  },
  {
    num: "04",
    title: "Workspace, live",
    body: "RBAC-gated channels provision automatically. You land straight in Workspace Home \u2014 no invite link, no server setup, no waiting.",
    tag: "\u007e10s",
    color: "var(--cyan)",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how" style={{ overflow: "hidden" }}>
      {/* background decoration */}
      <div
        style={{
          position: "absolute",
          right: -200,
          top: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "var(--purple)",
          opacity: 0.05,
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
        aria-hidden
      />

      <div className="wrap">
        <RevealWrapper className="section-head">
          <span className="section-eyebrow">How it works</span>
          <h2>Four steps.<br />No swiping. No waiting.</h2>
          <p className="section-desc">
            Every application gets a manual human review — not an algorithm. Every
            acceptance triggers an automated workspace, not a to-do list.
          </p>
        </RevealWrapper>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            position: "relative",
          }}
          className="timeline-grid"
        >
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: 36,
              left: "12.5%",
              right: "12.5%",
              height: 1,
              background: "linear-gradient(90deg, var(--cyan), var(--purple), var(--success), var(--cyan))",
              opacity: 0.25,
              pointerEvents: "none",
              zIndex: 0,
            }}
            aria-hidden
          />

          {STEPS.map((step, i) => (
            <RevealWrapper key={step.num}>
              <div
                style={{
                  background: "rgba(14,19,32,0.6)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid var(--border)",
                  borderRadius: 18,
                  padding: 24,
                  position: "relative",
                  zIndex: 1,
                  height: "100%",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                className="feature-card"
              >
                {/* Step number */}
                <div
                  className="mono"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "var(--surface)",
                    border: `1px solid ${step.color}`,
                    boxShadow: `0 0 18px ${step.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                    fontSize: 13,
                    color: step.color,
                    marginBottom: 20,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {step.num}
                </div>

                {/* Tag */}
                <span
                  className="mono"
                  style={{
                    display: "inline-block",
                    fontSize: 10,
                    color: step.color,
                    background: `${step.color}14`,
                    border: `1px solid ${step.color}35`,
                    padding: "2px 8px",
                    borderRadius: 5,
                    marginBottom: 10,
                  }}
                >
                  {step.tag}
                </span>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--text-dim)", lineHeight: 1.6 }}>
                  {step.body}
                </p>

                {/* Step connector dot */}
                {i < 3 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 36,
                      right: -9,
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      background: "var(--surface)",
                      border: `2px solid ${step.color}`,
                      boxShadow: `0 0 8px ${step.color}60`,
                      zIndex: 3,
                    }}
                    aria-hidden
                  />
                )}
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
