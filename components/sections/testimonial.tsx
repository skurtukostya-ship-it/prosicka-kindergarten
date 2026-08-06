"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function Testimonial() {
  return (
    <section id="testimonial" className="relative border-t border-border py-28 sm:py-36">
      <Container className="flex flex-col items-center text-center">
        <motion.svg
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          className="text-accent"
        >
          <path
            d="M0 24V13.714C0 6.135 5.373 0 12 0v6c-3.314 0-6 3.02-6 6.743V13.714H12V24H0ZM20 24V13.714C20 6.135 25.373 0 32 0v6c-3.314 0-6 3.02-6 6.743V13.714H32V24H20Z"
            fill="currentColor"
            opacity="0.35"
          />
        </motion.svg>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-[-0.01em] text-foreground sm:text-3xl lg:text-[2.25rem]"
        >
          Before Continuum, every agent failure was a fire drill — nobody
          could tell us which step broke or why. Now we ship agent updates
          weekly, and when something does go wrong, we find it in minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex items-center gap-3.5"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent-2 to-accent text-[13px] font-medium text-background">
            EM
          </div>
          <div className="text-left">
            <p className="text-[14px] font-medium text-foreground">Elena Marsh</p>
            <p className="text-[13px] text-muted">
              Head of Platform Engineering, Ridgeline
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
