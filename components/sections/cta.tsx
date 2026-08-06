"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Aurora } from "@/components/ui/aurora";

export function Cta() {
  return (
    <section id="cta" className="py-28 sm:py-36">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-border-strong bg-background-elevated/60 px-8 py-20 text-center sm:px-16"
        >
          <Aurora className="opacity-70" />
          <div className="relative flex flex-col items-center">
            <h2 className="max-w-xl text-balance text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
              Ship your first agent this week.
            </h2>
            <p className="mt-5 max-w-md text-balance text-[15px] leading-relaxed text-muted">
              Start free, no credit card required. Talk to us if you need a
              dedicated deployment or a walkthrough for your team.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
              <Button href="#" size="lg" className="group">
                Start building
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button href="#" variant="secondary" size="lg">
                Talk to sales
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
