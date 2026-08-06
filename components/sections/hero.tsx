"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Aurora } from "@/components/ui/aurora";
import { AgentGraph } from "@/components/ui/agent-graph";
import { WindowPanel } from "@/components/ui/window-panel";

const headlineLines = ["The infrastructure for", "autonomous intelligence."];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const line: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-36">
      <Aurora className="opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,108,255,0.12),transparent)]" />

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge>
              <Sparkles size={12} className="text-accent-2" />
              Now in general availability
            </Badge>
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-5xl text-balance text-[2.75rem] font-medium leading-[1.06] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
          >
            {headlineLines.map((text) => (
              <span key={text} className="block overflow-hidden pb-1">
                <motion.span variants={line} className="block">
                  {text}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg"
          >
            Continuum gives engineering teams the orchestration, observability
            and guardrails to run AI agents in production — not just in a demo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="#cta" size="lg" className="group">
              Start building
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
            <Button href="#product" variant="secondary" size="lg">
              <PlayCircle size={15} />
              See how it works
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="animate-float">
            <WindowPanel
              label="continuum — agent-pipeline.graph"
              className="shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_-40px_rgba(124,108,255,0.35)]"
            >
              <div className="py-6 sm:py-8">
                <AgentGraph />
              </div>
            </WindowPanel>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
