"use client";

import { motion } from "framer-motion";
import { Check, CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { WindowPanel } from "@/components/ui/window-panel";
import { cn } from "@/lib/utils";

const TRACE_ROWS = [
  { name: "retrieve_context", ms: "42ms", status: "done" },
  { name: "reason · continuum-1", ms: "1.8s", status: "done" },
  { name: "tool: stripe.refund", ms: "310ms", status: "done" },
  { name: "guardrail: approval_gate", ms: "—", status: "active" },
];

const POLICY_ROWS = [
  { label: "Monthly spend limit", value: "$500 / agent", on: true },
  { label: "PII redaction", value: "Enabled — all fields", on: true },
  { label: "Refunds over $100", value: "Require human approval", on: true },
  { label: "Unverified tool calls", value: "Blocked by default", on: true },
];

const DEPLOY_LINES = [
  "$ continuum deploy --env production",
  "✓ Validating agent graph",
  "✓ Running policy checks (4/4 passed)",
  "✓ Provisioning runtime · us-east-1",
  "✓ Live at agents.acme.com/refund-flow",
];

const rows = [
  {
    eyebrow: "Observability",
    title: "Debug agents like you debug code",
    description:
      "Every step of every run is captured — prompts, tool calls, latency, and cost — so you can replay a failure instead of guessing at it.",
    points: [
      "Full request/response tracing per step",
      "Cost and latency broken down by node",
      "One-click replay against a fixed snapshot",
    ],
    visual: (
      <WindowPanel label="trace · refund_flow #4821">
        <div className="flex flex-col gap-2.5">
          {TRACE_ROWS.map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between rounded-lg border border-border bg-white/[0.02] px-3.5 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                {row.status === "done" ? (
                  <CheckCircle2 size={13} className="text-accent-2" />
                ) : (
                  <Loader2 size={13} className="animate-spin text-accent" />
                )}
                <span className="font-mono text-[12px] text-foreground/90">
                  {row.name}
                </span>
              </div>
              <span className="font-mono text-[11px] text-muted-dim">{row.ms}</span>
            </div>
          ))}
        </div>
      </WindowPanel>
    ),
  },
  {
    eyebrow: "Guardrails",
    title: "Guardrails that actually hold",
    description:
      "Set policy once and every agent inherits it. Spend caps, data-handling rules, and approval gates are enforced before an action executes — not after.",
    points: [
      "Hard spend and rate limits per agent",
      "Automatic PII detection and redaction",
      "Human-in-the-loop approval for sensitive actions",
    ],
    visual: (
      <WindowPanel label="policy · production">
        <div className="flex flex-col gap-2.5">
          {POLICY_ROWS.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between rounded-lg border border-border bg-white/[0.02] px-3.5 py-2.5"
            >
              <div>
                <p className="text-[12.5px] text-foreground/90">{row.label}</p>
                <p className="font-mono text-[10.5px] text-muted-dim">{row.value}</p>
              </div>
              <span className="flex h-5 w-9 items-center rounded-full bg-accent/80 p-0.5">
                <span className="h-4 w-4 translate-x-4 rounded-full bg-white" />
              </span>
            </div>
          ))}
        </div>
      </WindowPanel>
    ),
  },
  {
    eyebrow: "Deployment",
    title: "From staging to production in one command",
    description:
      "Continuum validates your agent graph and policies before every deploy, then ships to your runtime of choice with zero-downtime rollouts.",
    points: [
      "Automatic pre-deploy policy validation",
      "Instant rollback to any previous version",
      "Deploy to your VPC, edge, or Continuum Cloud",
    ],
    visual: (
      <WindowPanel label="terminal">
        <div className="flex flex-col gap-2 font-mono text-[12.5px]">
          {DEPLOY_LINES.map((l, i) => (
            <motion.p
              key={l}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.3 }}
              className={i === 0 ? "text-foreground/90" : "text-accent-2"}
            >
              {l}
            </motion.p>
          ))}
        </div>
      </WindowPanel>
    ),
  },
];

export function ProductShowcase() {
  return (
    <section id="product" className="border-t border-border py-28 sm:py-36">
      <Container className="flex flex-col gap-28 sm:gap-36">
        {rows.map((row, i) => (
          <div
            key={row.title}
            className={cn(
              "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16",
              i % 2 === 1 && "lg:[&>*:first-child]:order-2",
            )}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-2">
                {row.eyebrow}
              </span>
              <h3 className="mt-4 text-balance text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl">
                {row.title}
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                {row.description}
              </p>
              <ul className="mt-7 flex flex-col gap-3">
                {row.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[14px] text-foreground/85">
                    <Check size={15} className="mt-0.5 shrink-0 text-accent-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {row.visual}
            </motion.div>
          </div>
        ))}
      </Container>
    </section>
  );
}
