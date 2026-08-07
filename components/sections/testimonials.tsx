"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Heart, Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { testimonials } from "@/lib/content";
import { cn } from "@/lib/utils";

const AVATAR_COLORS = ["bg-sun-soft text-sun-deep", "bg-coral-soft text-coral-deep", "bg-sky-soft text-sky-deep", "bg-mint-soft text-mint-deep"];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 5500, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-background-soft py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-coral-soft px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-coral-deep"
          >
            {testimonials.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-balance font-heading text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-4xl"
          >
            {testimonials.title}
          </motion.h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.items.map((t, i) => (
                <div key={t.role} className="min-w-0 shrink-0 grow-0 basis-full px-2">
                  <div className="flex flex-col items-center rounded-[2rem] bg-background-elevated px-8 py-12 text-center shadow-soft-xl ring-1 ring-border sm:px-14">
                    <Quote size={30} className="text-coral/40" />
                    <p className="mt-5 max-w-xl text-balance font-heading text-[18px] font-medium leading-relaxed text-foreground sm:text-[20px]">
                      «{t.quote}»
                    </p>
                    <div className="mt-5 flex items-center gap-0.5">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} size={15} className="text-sun" fill="currentColor" />
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <span
                        className={cn(
                          "flex h-11 w-11 items-center justify-center rounded-full",
                          AVATAR_COLORS[i % AVATAR_COLORS.length],
                        )}
                      >
                        <Heart size={17} fill="currentColor" fillOpacity={0.35} />
                      </span>
                      <div className="text-left">
                        <p className="text-[14px] font-semibold text-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.button
            type="button"
            aria-label="Попередній відгук"
            onClick={() => emblaApi?.scrollPrev()}
            whileHover={{ scale: 1.08, x: -2 }}
            whileTap={{ scale: 0.92 }}
            className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background-elevated p-3 text-foreground shadow-soft-sm ring-1 ring-border transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/40 sm:flex"
          >
            <ChevronLeft size={18} />
          </motion.button>
          <motion.button
            type="button"
            aria-label="Наступний відгук"
            onClick={() => emblaApi?.scrollNext()}
            whileHover={{ scale: 1.08, x: 2 }}
            whileTap={{ scale: 0.92 }}
            className="absolute right-0 top-1/2 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background-elevated p-3 text-foreground shadow-soft-sm ring-1 ring-border transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/40 sm:flex"
          >
            <ChevronRight size={18} />
          </motion.button>

          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.items.map((t, i) => (
              <button
                key={t.role}
                type="button"
                aria-label={`Перейти до відгуку ${i + 1}`}
                aria-current={selected === i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 hover:bg-coral-deep/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/40 focus-visible:ring-offset-2",
                  selected === i ? "w-6 bg-coral-deep" : "w-2 bg-border-strong",
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
