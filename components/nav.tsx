"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Platform", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#testimonial" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-colors duration-300",
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container>
          <nav className="flex h-16 items-center justify-between">
            <Link
              href="#top"
              className="flex items-center gap-2.5 font-medium tracking-tight"
            >
              <Logo />
              <span className="text-[15px]">Continuum</span>
            </Link>

            <ul className="hidden items-center gap-8 md:flex">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-3 md:flex">
              <Button href="#" variant="ghost" size="md">
                Sign in
              </Button>
              <Button href="#cta" variant="secondary" size="md">
                Get started
              </Button>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-foreground md:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </nav>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/[0.04] hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 px-3">
                <Button href="#" variant="secondary" className="w-full">
                  Sign in
                </Button>
                <Button href="#cta" variant="primary" className="w-full">
                  Get started
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
