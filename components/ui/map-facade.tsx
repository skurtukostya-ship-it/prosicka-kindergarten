"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function MapFacade({ src, title }: { src: string; title: string }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[22rem] w-full grayscale-[15%]"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group relative flex h-full min-h-[22rem] w-full flex-col items-center justify-center gap-4 overflow-hidden bg-[radial-gradient(circle_at_30%_20%,var(--mint-soft),transparent_55%),radial-gradient(circle_at_75%_75%,var(--sky-soft),transparent_50%)] bg-background-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/40 focus-visible:ring-offset-2"
    >
      <svg viewBox="0 0 200 200" className="pointer-events-none absolute inset-0 h-full w-full opacity-40" aria-hidden>
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 34 + 10} x2="200" y2={i * 34 + 10} stroke="var(--border-strong)" strokeWidth="1" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 34 + 10} y1="0" x2={i * 34 + 10} y2="200" stroke="var(--border-strong)" strokeWidth="1" />
        ))}
      </svg>

      <motion.span
        whileHover={{ y: -4, scale: 1.06 }}
        transition={{ type: "spring", stiffness: 300, damping: 14 }}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-coral-deep text-white shadow-coral-md"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-coral-deep/30 [animation-duration:2.6s]" />
        <MapPin size={26} fill="currentColor" fillOpacity={0.2} />
      </motion.span>
      <span className="relative rounded-full bg-background-elevated px-4 py-2 text-[14px] font-semibold text-foreground shadow-sm ring-1 ring-border transition-transform group-hover:-translate-y-0.5">
        Переглянути карту
      </span>
    </button>
  );
}
