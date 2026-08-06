"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Database, Sparkles, Wrench, Zap } from "lucide-react";

type Node = {
  x: number;
  y: number;
  label: string;
  sub: string;
  icon: React.ElementType;
  tone: "accent" | "accent-2" | "accent-3" | "foreground";
  hero?: boolean;
};

const NODES: Node[] = [
  { x: 40, y: 210, label: "Trigger", sub: "webhook.event", icon: Zap, tone: "accent-2" },
  { x: 235, y: 90, label: "Retrieve", sub: "vector search", icon: Database, tone: "foreground" },
  { x: 430, y: 210, label: "Reason", sub: "continuum-1", icon: Sparkles, tone: "accent", hero: true },
  { x: 625, y: 90, label: "Act", sub: "stripe.api", icon: Wrench, tone: "foreground" },
  { x: 800, y: 210, label: "Ship", sub: "response.sent", icon: CheckCircle2, tone: "accent-3" },
];

const toneMap: Record<Node["tone"], { text: string; ring: string; glow: string }> = {
  accent: { text: "text-accent", ring: "border-accent/40", glow: "shadow-[0_0_40px_-8px_var(--accent)]" },
  "accent-2": { text: "text-accent-2", ring: "border-accent-2/30", glow: "" },
  "accent-3": { text: "text-accent-3", ring: "border-accent-3/30", glow: "" },
  foreground: { text: "text-foreground", ring: "border-border-strong", glow: "" },
};

function curve(a: Node, b: Node) {
  const midX = (a.x + b.x) / 2;
  return `M ${a.x + 152} ${a.y + 28} C ${midX} ${a.y + 28}, ${midX} ${b.y + 28}, ${b.x} ${b.y + 28}`;
}

export function AgentGraph() {
  const paths = NODES.slice(0, -1).map((n, i) => curve(n, NODES[i + 1]));

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 900 300"
        fill="none"
        className="w-full"
        role="img"
        aria-label="Diagram of an autonomous agent pipeline flowing from trigger to retrieval, reasoning, tool use, and shipping a response"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--accent-2)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent-3)" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {paths.map((d, i) => (
          <path key={i} d={d} stroke="url(#line-gradient)" strokeWidth="1.5" fill="none" />
        ))}

        {paths.map((d, i) => (
          <motion.circle
            key={`dot-${i}`}
            r="3.5"
            fill="var(--accent-2)"
            style={{ offsetPath: `path("${d}")` }}
            animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.55,
            }}
          />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0">
        <div className="relative h-full w-full" style={{ maxWidth: 900, margin: "0 auto" }}>
          {NODES.map((node, i) => {
            const tone = toneMap[node.tone];
            const Icon = node.icon;
            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto absolute flex w-[152px] items-center gap-2.5 rounded-xl border bg-background-elevated/90 px-3 py-2.5 backdrop-blur-sm"
                style={{
                  left: `${(node.x / 900) * 100}%`,
                  top: `${(node.y / 300) * 100}%`,
                }}
              >
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${tone.ring} ${tone.glow}`}>
                  <Icon size={13} className={tone.text} strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[12.5px] font-medium text-foreground">{node.label}</p>
                  <p className="truncate font-mono text-[10px] text-muted-dim">{node.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
