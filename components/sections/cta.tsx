"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AmbientBackground, DecorativeSprinkles } from "@/components/ui/illustrations";
import { cta, site } from "@/lib/content";

export function Cta() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-coral-deep via-coral-deep to-[#932500] px-8 py-20 text-center sm:px-16"
        >
          <AmbientBackground className="opacity-40 mix-blend-soft-light" />
          <DecorativeSprinkles className="opacity-70" />
          <div className="relative flex flex-col items-center">
            <h2 className="max-w-xl text-balance font-heading text-3xl font-extrabold tracking-[-0.01em] text-white sm:text-4xl lg:text-5xl">
              {cta.title}
            </h2>
            <p className="mt-5 max-w-md text-balance text-[15px] leading-relaxed text-white/85">
              {cta.description}
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
              <MagneticButton strength={0.35}>
                <Button
                  render={<Link href="#contact" />}
                  nativeButton={false}
                  size="lg"
                  className="group h-12 rounded-full bg-white px-7 text-[15px] text-coral-deep hover:bg-white/90 focus-visible:ring-white/60 focus-visible:ring-offset-coral-deep"
                >
                  {cta.primary}
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <Button
                  render={<Link href={`tel:${site.phone}`} />}
                  nativeButton={false}
                  variant="secondary"
                  size="lg"
                  className="h-12 rounded-full bg-white/15 px-7 text-[15px] text-white ring-1 ring-white/30 hover:bg-white/25 focus-visible:ring-white/60 focus-visible:ring-offset-coral-deep"
                >
                  <Phone size={15} />
                  {cta.secondary}
                </Button>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
