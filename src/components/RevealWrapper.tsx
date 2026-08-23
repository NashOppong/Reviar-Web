"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

interface RevealWrapperProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function RevealWrapper({
  children,
  className = "",
  as: Tag = "div",
}: RevealWrapperProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
