"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";

const STATS = [
  { value: 120, suffix: "M+", label: "Agent runs orchestrated monthly" },
  { value: 99.99, decimals: 2, suffix: "%", label: "Platform uptime SLA" },
  { value: 40, suffix: "ms", label: "Median orchestration overhead" },
  { value: 600, suffix: "+", label: "Engineering teams in production" },
];

export function Stats() {
  return (
    <section className="border-t border-border py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-2"
            >
              <p className="text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </p>
              <p className="text-[13.5px] text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
