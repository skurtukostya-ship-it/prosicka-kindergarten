"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, Heart, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AmbientBackground, DecorativeSprinkles } from "@/components/ui/illustrations";
import { ArtScene, CelebrationScene, GardenScene, MusicScene } from "@/components/ui/scenes";
import { hero } from "@/lib/content";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const line: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const panelOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-sun-soft/60 via-background to-background pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      <AmbientBackground />
      <DecorativeSprinkles className="hidden sm:block" />

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 rounded-full bg-background-elevated/80 px-4 py-2 text-[13px] font-medium text-foreground/75 shadow-sm ring-1 ring-border backdrop-blur"
          >
            <Sparkles size={14} className="text-sun" />
            {hero.eyebrow}
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-4xl text-balance font-heading text-[3rem] font-extrabold leading-[1.04] tracking-[-0.02em] text-foreground sm:text-7xl lg:text-[5.5rem]"
          >
            {hero.headline.map((text, i) => (
              <span key={text} className="block overflow-hidden pb-1 sm:pb-2">
                <motion.span
                  variants={line}
                  className={i === 1 ? "block text-coral-deep" : "block"}
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-balance text-base leading-relaxed text-foreground/75 sm:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <MagneticButton strength={0.4}>
              <Button
                render={<Link href="#contact" />}
                nativeButton={false}
                size="lg"
                className="group h-12 rounded-full bg-coral-deep px-7 text-[15px] text-white shadow-coral-md hover:bg-coral-deep/90"
              >
                {hero.ctaPrimary}
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <Button
                render={<Link href="#about" />}
                nativeButton={false}
                variant="secondary"
                size="lg"
                className="h-12 rounded-full bg-background-elevated px-7 text-[15px] text-foreground ring-1 ring-border hover:bg-muted"
              >
                {hero.ctaSecondary}
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {hero.badges.map((badge) => (
              <span
                key={badge.label}
                className="flex items-center gap-1.5 text-[13px] font-medium text-foreground/75"
              >
                <Heart size={13} className="text-coral-deep" fill="currentColor" fillOpacity={0.25} />
                {badge.label}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ y: panelY, opacity: panelOpacity }}
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5"
        >
          {[
            { label: "Гра та навчання", Scene: GardenScene },
            { label: "Турбота і любов", Scene: CelebrationScene },
            { label: "Творчі заняття", Scene: ArtScene },
            { label: "Українські традиції", Scene: MusicScene },
          ].map((tile, i) => (
            <motion.div
              key={tile.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="animate-float relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft-lg"
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              <tile.Scene />
              <div className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/35 to-transparent p-4">
                <span className="font-heading text-[14px] font-bold leading-snug text-white sm:text-[15px]">
                  {tile.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="mt-16 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-muted-foreground"
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
