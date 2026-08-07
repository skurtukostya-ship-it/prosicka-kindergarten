"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Brush,
  GraduationCap,
  Music,
  Puzzle,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { FlowerBloom } from "@/components/ui/illustrations";
import { programs } from "@/lib/content";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  music: Music,
  brush: Brush,
  puzzle: Puzzle,
  activity: Activity,
  "graduation-cap": GraduationCap,
};

const TILE_COLORS = ["bg-sun-soft", "bg-coral-soft", "bg-sky-soft", "bg-mint-soft", "bg-sun-soft"];

export function Programs() {
  const [active, setActive] = useState(0);
  const item = programs.items[active];
  const Icon = ICONS[item.icon];

  return (
    <section id="programs" className="relative overflow-hidden bg-background-soft py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-sky-soft px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-sky-deep"
          >
            {programs.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-balance font-heading text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            {programs.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground"
          >
            {programs.description}
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-3 lg:grid-cols-[280px_1fr] lg:gap-8">
          <div role="tablist" aria-label="Напрямки та дисципліни" className="flex gap-2.5 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {programs.items.map((p, i) => {
              const TabIcon = ICONS[p.icon];
              const isActive = i === active;
              return (
                <motion.button
                  key={p.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    "group flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/40 lg:shrink lg:w-full",
                    isActive
                      ? "bg-background-elevated shadow-soft-md ring-1 ring-border"
                      : "hover:bg-background-elevated/60",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors",
                      isActive ? "bg-coral-deep text-white" : "bg-background-elevated text-muted-foreground ring-1 ring-border",
                    )}
                  >
                    <TabIcon size={16} strokeWidth={2.25} />
                  </span>
                  <span
                    className={cn(
                      "font-heading text-[15px] font-bold whitespace-nowrap lg:whitespace-normal",
                      isActive ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {p.title}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-background-elevated p-8 ring-1 ring-border sm:p-12">
            <FlowerBloom className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 text-sun-soft" />
            <AnimatePresence mode="wait">
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col gap-6 sm:flex-row sm:items-start"
              >
                <span
                  className={cn(
                    "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-foreground",
                    TILE_COLORS[active % TILE_COLORS.length],
                  )}
                >
                  <Icon size={26} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-extrabold tracking-[-0.01em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
