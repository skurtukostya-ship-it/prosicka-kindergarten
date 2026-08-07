"use client";

import { motion } from "framer-motion";
import { Heart, Gamepad2, Landmark } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { Parallax } from "@/components/ui/parallax";
import { GardenScene } from "@/components/ui/scenes";
import { about } from "@/lib/content";

const VALUE_ICONS = [Heart, Gamepad2, Landmark];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-soft-xl">
              <Parallax speed={0.12} className="absolute inset-x-0 -top-[8%] h-[116%]">
                <GardenScene />
              </Parallax>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-8 -right-4 flex items-center gap-3 rounded-3xl bg-background-elevated p-4 pr-6 shadow-soft-lg ring-1 ring-border sm:-right-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-soft text-mint-deep">
                <Heart size={20} fill="currentColor" fillOpacity={0.3} />
              </div>
              <div>
                <p className="font-heading text-[15px] font-extrabold leading-tight text-foreground">
                  З любов&apos;ю
                </p>
                <p className="mt-0.5 text-[12px] text-muted-foreground">до кожної дитини</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full bg-mint-soft px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-mint-deep"
            >
              {about.eyebrow}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-balance font-heading text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.75rem]"
            >
              {about.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-balance text-[15px] leading-relaxed text-muted-foreground sm:text-base"
            >
              {about.description}
            </motion.p>

            <div className="mt-6 flex flex-col gap-4">
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={p}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[15px] leading-relaxed text-muted-foreground"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              {about.values.map((value, i) => {
                const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 4 }}
                    className="group flex items-start gap-3.5 rounded-2xl p-2 -m-2 transition-colors duration-300 hover:bg-sun-soft/40"
                  >
                    <motion.span
                      whileHover={{ rotate: -8, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300, damping: 14 }}
                      className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sun-soft text-foreground transition-colors duration-300 group-hover:bg-sun"
                    >
                      <Icon size={17} strokeWidth={2.25} />
                    </motion.span>
                    <div>
                      <p className="font-heading text-[15px] font-bold text-foreground">{value.title}</p>
                      <p className="mt-0.5 text-[14px] leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 rounded-[2rem] bg-background-soft px-8 py-10 sm:mt-24 lg:grid-cols-4 lg:px-14"
        >
          {about.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <p className="font-heading text-4xl font-extrabold tracking-[-0.02em] text-foreground sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 max-w-[16ch] text-[13px] text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
