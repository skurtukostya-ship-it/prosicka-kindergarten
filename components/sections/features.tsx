"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  Layers,
  Plug,
  Radar,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const RUNTIMES = ["AWS", "GCP", "Azure", "Cloudflare Edge", "On-prem VPC"];

function Card({
  className,
  eyebrowIcon: Icon,
  title,
  description,
  delay = 0,
  children,
}: {
  className?: string;
  eyebrowIcon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-background-elevated/50 p-7 transition-colors duration-300 hover:border-border-strong",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(280px_circle_at_var(--mx,50%)_var(--my,0%),rgba(124,108,255,0.08),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong bg-white/[0.03] text-accent-2">
          <Icon size={16} strokeWidth={2} />
        </div>
        <h3 className="mt-5 text-[17px] font-medium tracking-[-0.01em] text-foreground">
          {title}
        </h3>
        <p className="mt-2 max-w-md text-[14px] leading-relaxed text-muted">
          {description}
        </p>
        {children}
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Platform"
          title="Everything to run agents in production, nothing you have to glue together"
          description="Continuum replaces the patchwork of scripts, queues, and dashboards teams cobble together to keep AI agents reliable."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <Card
            className="lg:col-span-4"
            eyebrowIcon={Workflow}
            title="Visual pipeline builder"
            description="Compose multi-step agent workflows on a node-based canvas — branching logic, retries, and human-in-the-loop checkpoints without writing orchestration code."
            delay={0}
          >
            <div className="mt-6 flex flex-1 items-end">
              <div className="flex w-full items-center gap-2">
                {["Trigger", "Retrieve", "Reason", "Act", "Ship"].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-md border border-border-strong bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-muted">
                      {step}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="h-px w-4 bg-gradient-to-r from-accent-2/40 to-accent-3/40" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card
            className="lg:col-span-2"
            eyebrowIcon={Radar}
            title="Real-time observability"
            description="Every reasoning step, tool call, and token traced end-to-end and replayable — no more black-box failures."
            delay={0.05}
          />

          <Card
            className="lg:col-span-2"
            eyebrowIcon={ShieldCheck}
            title="Policy guardrails"
            description="Enforce spend limits, PII redaction, and approval gates before an agent is allowed to act."
            delay={0.1}
          />

          <Card
            className="lg:col-span-2"
            eyebrowIcon={Plug}
            title="Native tool connectors"
            description="200+ pre-built integrations, plus a typed SDK for wiring in any internal API in minutes."
            delay={0.15}
          />

          <Card
            className="lg:col-span-2"
            eyebrowIcon={GitBranch}
            title="Agent version control"
            description="Branch, diff, and roll back agent behavior the same way you already ship code."
            delay={0.2}
          />

          <Card
            className="lg:col-span-6"
            eyebrowIcon={Layers}
            title="Deploy to any runtime"
            description="Ship to your own VPC, a serverless edge, or Continuum Cloud with a single command — your infrastructure, your rules."
            delay={0.25}
          >
            <div className="mt-6 flex flex-wrap gap-2">
              {RUNTIMES.map((runtime) => (
                <span
                  key={runtime}
                  className="rounded-full border border-border-strong bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] text-muted"
                >
                  {runtime}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
