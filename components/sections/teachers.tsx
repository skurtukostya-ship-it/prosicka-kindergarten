"use client";

import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import { Container } from "@/components/ui/container";
import { teachers } from "@/lib/content";

const AVATAR_COLORS = ["bg-sun-soft text-sun-deep", "bg-coral-soft text-coral-deep", "bg-sky-soft text-sky-deep", "bg-mint-soft text-mint-deep"];

export function Teachers() {
  return (
    <section id="teachers" className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-mint-soft px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-mint-deep"
          >
            {teachers.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-balance font-heading text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            {teachers.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground"
          >
            {teachers.description}
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center rounded-[1.75rem] bg-background-elevated px-6 py-9 text-center shadow-soft-lg ring-1 ring-border"
            >
              <span
                className={`flex h-20 w-20 items-center justify-center rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
              >
                <UserRound size={30} strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-heading text-[16px] font-bold text-foreground">{role.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{role.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
