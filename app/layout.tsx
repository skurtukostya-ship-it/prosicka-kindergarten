import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://continuum.ai"),
  title: {
    default: "Continuum — The infrastructure for autonomous intelligence",
    template: "%s — Continuum",
  },
  description:
    "Continuum is the orchestration layer for production AI agents. Build, deploy, and govern autonomous workflows with full observability — trusted by engineering teams shipping AI at scale.",
  keywords: [
    "AI agents",
    "agent orchestration",
    "AI infrastructure",
    "autonomous workflows",
    "LLM ops",
  ],
  openGraph: {
    title: "Continuum — The infrastructure for autonomous intelligence",
    description:
      "Build, deploy, and govern autonomous AI agents in production.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Continuum — The infrastructure for autonomous intelligence",
    description:
      "Build, deploy, and govern autonomous AI agents in production.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
