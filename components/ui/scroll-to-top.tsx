"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 900);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Прокрутити нагору"
          onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background shadow-soft-sm transition-shadow duration-300 hover:shadow-soft-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/50 focus-visible:ring-offset-2 sm:bottom-8 sm:left-8"
        >
          <ArrowUp size={18} strokeWidth={2.25} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
