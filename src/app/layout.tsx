import type { Metadata } from "next";
import { Bai_Jamjuree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Reviar — Slide into your next project.",
  description:
    "Reviar provides a workspace with — RBAC-gated channels, Task board, Pods (Voice chat system) — and a lot more for your project.",
  icons: { icon: "/icon.png" },
  openGraph: {
    title: "Reviar — Slide into your next project.",
    description:
      "Reviar provides a workspace with — RBAC-gated channels, Task board, Pods — and a lot more for your project.",
    url: "https://reviar-web.vercel.app",
    siteName: "Reviar",
    images: [
      {
        url: "/icon.png", // Next.js automatically serves everything in /public from the root URL
        width: 512, // Adjust dimensions to match your icon's actual size
        height: 512,
        alt: "Reviar Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviar — Slide into your next project.",
    description:
      "Reviar provides a workspace with RBAC-gated channels, task boards, pods and a lot more for your projects.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${baiJamjuree.variable} ${jetbrainsMono.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
