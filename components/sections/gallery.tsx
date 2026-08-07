"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  ArtScene,
  CelebrationScene,
  GardenScene,
  KidsPlayScene,
  MusicScene,
  ReadingScene,
} from "@/components/ui/scenes";
import { gallery } from "@/lib/content";
import { cn } from "@/lib/utils";

const ITEMS = [
  { id: 1, category: "Заняття", caption: "Музичне заняття у молодшій групі", Scene: MusicScene, tall: true },
  { id: 2, category: "Прогулянки", caption: "Прогулянка квітучим подвір'ям", Scene: GardenScene, tall: false },
  { id: 3, category: "Творчість", caption: "Аплікації на годині «Очумілих рученят»", Scene: ArtScene, tall: false },
  { id: 4, category: "Свята", caption: "Свято до Дня Незалежності", Scene: CelebrationScene, tall: true },
  { id: 5, category: "Заняття", caption: "Розвиваючі ігри у ігровій кімнаті", Scene: ReadingScene, tall: false },
  { id: 6, category: "Творчість", caption: "Ліплення та малювання фарбами", Scene: ArtScene, tall: true },
  { id: 7, category: "Прогулянки", caption: "Ігри на майданчику садочка", Scene: KidsPlayScene, tall: false },
  { id: 8, category: "Свята", caption: "Ранок з вихователями та батьками", Scene: CelebrationScene, tall: false },
];

export function Gallery() {
  const [filter, setFilter] = useState("Усі");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "Усі" ? ITEMS : ITEMS.filter((item) => item.category === filter)),
    [filter],
  );

  const active = activeIndex !== null ? filtered[activeIndex] : null;

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-sky-soft px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-sky-deep"
          >
            {gallery.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-balance font-heading text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            {gallery.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground"
          >
            {gallery.description}
          </motion.p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {gallery.categories.map((cat) => (
            <motion.button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              whileTap={{ scale: 0.94 }}
              className={cn(
                "relative rounded-full px-4 py-2 text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                filter === cat ? "text-background" : "bg-muted text-foreground/70 hover:bg-border-strong/40 hover:text-foreground",
              )}
            >
              {filter === cat && (
                <motion.span
                  layoutId="gallery-filter-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 -z-10 rounded-full bg-foreground"
                />
              )}
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                layout
                type="button"
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group relative mb-4 block w-full overflow-hidden rounded-[1.5rem] text-left shadow-soft-md transition-shadow duration-300 hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  item.tall ? "aspect-[3/4]" : "aspect-[4/3]",
                )}
              >
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
                  <item.Scene />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/45 via-black/0 to-black/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[12px] font-medium text-white">{item.caption}</span>
                </div>
                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <Images size={14} />
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-w-2xl overflow-hidden rounded-[2rem] p-0 sm:max-w-2xl"
        >
          <DialogTitle className="sr-only">{active?.caption ?? "Фото галереї"}</DialogTitle>
          {active && (
            <div className="relative aspect-[4/3]">
              <active.Scene />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/45 to-transparent p-6">
                <p className="text-[15px] font-medium text-white">{active.caption}</p>
              </div>

              <motion.button
                type="button"
                aria-label="Закрити"
                onClick={() => setActiveIndex(null)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-foreground backdrop-blur transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/50 focus-visible:ring-offset-2"
              >
                <X size={16} />
              </motion.button>

              {filtered.length > 1 && (
                <>
                  <motion.button
                    type="button"
                    aria-label="Попереднє фото"
                    onClick={() =>
                      setActiveIndex((idx) => (idx === null ? null : (idx - 1 + filtered.length) % filtered.length))
                    }
                    whileHover={{ scale: 1.08, x: -2 }}
                    whileTap={{ scale: 0.92 }}
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-foreground backdrop-blur transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/50 focus-visible:ring-offset-2"
                  >
                    <ChevronLeft size={18} />
                  </motion.button>
                  <motion.button
                    type="button"
                    aria-label="Наступне фото"
                    onClick={() => setActiveIndex((idx) => (idx === null ? null : (idx + 1) % filtered.length))}
                    whileHover={{ scale: 1.08, x: 2 }}
                    whileTap={{ scale: 0.92 }}
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-foreground backdrop-blur transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/50 focus-visible:ring-offset-2"
                  >
                    <ChevronRight size={18} />
                  </motion.button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
