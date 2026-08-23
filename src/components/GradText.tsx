import { ReactNode } from "react";

export default function GradText({ children }: { children: ReactNode }) {
  return <span className="grad-text">{children}</span>;
}
