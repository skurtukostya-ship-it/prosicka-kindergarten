"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageCircle, Phone, X } from "lucide-react";
import { site } from "@/lib/content";

const ACTIONS = [
  { icon: Phone, label: site.phoneDisplay, href: `tel:${site.phone}` },
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-end gap-2.5"
          >
            {ACTIONS.map((action, i) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
              >
                <Link
                  href={action.href}
                  className="group flex items-center gap-2.5 rounded-full bg-background-elevated py-2.5 pl-4 pr-3 text-[13px] font-medium text-foreground shadow-soft-sm ring-1 ring-border transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/50"
                >
                  {action.label}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sun-soft text-foreground transition-transform group-hover:scale-105">
                    <action.icon size={15} strokeWidth={2.25} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={open ? "Закрити контакти" : "Зв'язатися з нами"}
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-coral-deep text-white shadow-coral-md transition-shadow duration-300 hover:shadow-coral-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/50 focus-visible:ring-offset-2"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-coral/40 [animation-duration:2.4s]" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <X size={22} /> : <MessageCircle size={22} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
