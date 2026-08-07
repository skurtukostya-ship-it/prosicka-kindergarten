"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Cookie, Soup, Sunrise, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { nutrition } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  sunrise: Sunrise,
  soup: Soup,
  cookie: Cookie,
};

const CARD_COLORS = ["bg-sun-soft", "bg-coral-soft", "bg-mint-soft"];

export function Nutrition() {
  return (
    <section id="nutrition" className="relative py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full bg-coral-soft px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-coral-deep"
            >
              {nutrition.eyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-balance font-heading text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-4xl"
            >
              {nutrition.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-balance text-[15px] leading-relaxed text-muted-foreground"
            >
              {nutrition.description}
            </motion.p>

            <ul className="mt-8 flex flex-col gap-3.5">
              {nutrition.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-2.5 text-[14px] text-foreground/85"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-mint-deep" />
                  {h}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {nutrition.meals.map((meal, i) => {
              const Icon = ICONS[meal.icon];
              return (
                <motion.div
                  key={meal.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="flex items-center gap-5 rounded-[1.75rem] bg-background-elevated p-6 shadow-soft-lg ring-1 ring-border"
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-foreground ${CARD_COLORS[i % CARD_COLORS.length]}`}
                  >
                    <Icon size={24} strokeWidth={2} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-heading text-[16px] font-bold text-foreground">{meal.title}</h3>
                      <span className="font-heading text-[13px] font-bold text-coral-deep">{meal.time}</span>
                    </div>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">
                      {meal.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
