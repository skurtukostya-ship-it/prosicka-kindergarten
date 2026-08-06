"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-2"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className={cn(
          "text-balance text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl",
          align === "center" ? "max-w-2xl" : "max-w-xl",
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className={cn(
            "text-balance text-base leading-relaxed text-muted sm:text-lg",
            align === "center" ? "max-w-xl" : "max-w-lg",
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
