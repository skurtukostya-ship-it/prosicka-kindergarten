"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Container } from "@/components/ui/container";
import { schedule } from "@/lib/content";

const DOT_COLORS = ["bg-sun-deep", "bg-coral-deep", "bg-sky-deep", "bg-mint-deep"];

export function Schedule() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });

  return (
    <section id="schedule" className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-sun-soft px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-sun-deep"
          >
            {schedule.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-balance font-heading text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            {schedule.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground"
          >
            {schedule.description}
          </motion.p>
        </div>

        <div ref={ref} className="relative mx-auto mt-16 max-w-2xl">
          <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-border sm:left-[19px]" />
          <motion.div
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-sun via-coral to-sky sm:left-[19px]"
          />

          <ol className="flex flex-col gap-9">
            {schedule.items.map((item, i) => (
              <motion.li
                key={item.time}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-5 pl-10 sm:gap-7 sm:pl-14"
              >
                <span
                  className={`absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full text-white ring-4 ring-background sm:h-10 sm:w-10 ${DOT_COLORS[i % DOT_COLORS.length]}`}
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <div className="flex flex-1 flex-col gap-1 rounded-2xl bg-background-elevated p-5 ring-1 ring-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-md sm:flex-row sm:items-center sm:gap-6">
                  <span className="font-heading text-lg font-extrabold text-foreground sm:w-20 sm:shrink-0">
                    {item.time}
                  </span>
                  <div>
                    <p className="font-heading text-[15px] font-bold text-foreground">{item.title}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
