"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Heart,
  Palette,
  Sparkles,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { advantages } from "@/lib/content";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  utensils: Utensils,
  heart: Heart,
  sparkles: Sparkles,
  palette: Palette,
  users: Users,
  activity: Activity,
};

const COLORS: Record<string, { bg: string; text: string; glow: string }> = {
  coral: { bg: "bg-coral-soft", text: "text-coral-deep", glow: "rgba(255,138,104,0.3)" },
  sky: { bg: "bg-sky-soft", text: "text-sky-deep", glow: "rgba(95,179,232,0.3)" },
  sun: { bg: "bg-sun-soft", text: "text-sun-deep", glow: "rgba(247,183,51,0.35)" },
  mint: { bg: "bg-mint-soft", text: "text-mint-deep", glow: "rgba(69,199,154,0.3)" },
};

export function Advantages() {
  return (
    <section id="advantages" className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-coral-soft px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-coral-deep"
          >
            {advantages.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-balance font-heading text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            {advantages.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground"
          >
            {advantages.description}
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.items.map((item, i) => {
            const Icon = ICONS[item.icon];
            const palette = COLORS[item.color];
            return (
              <AdvantageCard key={item.title} index={i} glow={palette.glow}>
                <motion.span
                  whileHover={{ rotate: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-2xl",
                    palette.bg,
                    palette.text,
                  )}
                >
                  <Icon size={20} strokeWidth={2.25} />
                </motion.span>
                <h3 className="mt-5 font-heading text-[17px] font-bold tracking-[-0.005em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </AdvantageCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function AdvantageCard({
  children,
  index,
  glow,
}: {
  children: React.ReactNode;
  index: number;
  glow: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current!.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    ref.current!.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[1.75rem] bg-background-elevated p-7 ring-1 ring-border transition-shadow duration-300 hover:shadow-soft-lg"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), ${glow}, transparent 70%)`,
        }}
      />
      <div className="relative flex flex-col">{children}</div>
    </motion.div>
  );
}
