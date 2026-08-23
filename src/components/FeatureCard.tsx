import { ReactNode, CSSProperties, forwardRef } from "react";

interface FeatureCardProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  function FeatureCard({ children, style, className = "" }, ref) {
    return (
      <div
        ref={ref}
        className={`feature-card ${className}`}
        style={{
          background: "rgba(14,19,32,0.6)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid var(--border)",
          borderRadius: 20,
          padding: 26,
          position: "relative",
          overflow: "hidden",
          transition: "border-color 0.3s ease, transform 0.3s ease",
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export default FeatureCard;

export function CardIcon({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "var(--surface-2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 18,
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

export function CardShot({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
        position: "relative",
        flexShrink: 0,
        ...style,
      }}
    >
      {children}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, transparent 50%, rgba(5,7,13,0.6))",
          pointerEvents: "none",
        }}
        aria-hidden
      />
    </div>
  );
}
