"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clapperboard, Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Parallax } from "@/components/ui/parallax";
import { KidsPlayScene } from "@/components/ui/scenes";
import { video } from "@/lib/content";

export function VideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="video" className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-mint-soft px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-mint-deep"
          >
            {video.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-balance font-heading text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-4xl"
          >
            {video.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground"
          >
            {video.description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-14 aspect-video max-w-4xl overflow-hidden rounded-[2.25rem] shadow-soft-2xl"
        >
          <Parallax speed={0.1} className="absolute inset-x-0 -top-[6%] h-[112%]">
            <KidsPlayScene />
          </Parallax>
          <div className="absolute inset-0 bg-black/10" />

          <button
            type="button"
            aria-label="Дізнатися про відео"
            onClick={() => setOpen(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
          >
            <motion.span
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-coral-deep shadow-soft-lg backdrop-blur"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-white/50 [animation-duration:2.6s]" />
              <Play size={28} className="ml-1" fill="currentColor" />
            </motion.span>
            <span className="flex items-center gap-1.5 rounded-full bg-background-elevated/90 px-3.5 py-1.5 text-[12px] font-medium text-foreground/80 backdrop-blur">
              <Clapperboard size={14} className="text-mint-deep" />
              {video.note}
            </span>
          </button>
        </motion.div>
      </Container>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm rounded-[1.75rem] p-6">
          <DialogHeader className="items-center text-center">
            <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-mint-soft text-mint-deep">
              <Clapperboard size={22} />
            </span>
            <DialogTitle className="text-[17px]">{video.dialogTitle}</DialogTitle>
            <DialogDescription className="text-center">{video.dialogDescription}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
