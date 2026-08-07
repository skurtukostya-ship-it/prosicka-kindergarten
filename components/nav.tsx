"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SunMedallion } from "@/components/ui/illustrations";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/utils";

function Wordmark() {
  return (
    <Link
      href="#top"
      className="group flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/40 focus-visible:ring-offset-2"
    >
      <motion.span
        whileHover={{ rotate: 25, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-sun text-white shadow-sun-sm"
      >
        <SunMedallion className="h-5 w-5" />
      </motion.span>
      <span className="font-heading text-[16px] font-extrabold leading-none tracking-[-0.01em] text-foreground">
        {site.name}
      </span>
    </Link>
  );
}

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
          "transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/75 shadow-[0_1px_0_rgba(43,36,28,0.04)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container>
          <nav className="flex h-[72px] items-center justify-between">
            <Wordmark />

            <ul className="hidden items-center gap-1 lg:flex">
              {nav.primary.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-full px-3.5 py-2 text-[14px] font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/40"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <button
                        type="button"
                        className="flex items-center gap-1 rounded-full px-3.5 py-2 text-[14px] font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground data-popup-open:bg-muted data-popup-open:text-foreground"
                      />
                    }
                  >
                    Ще
                    <ChevronDown size={14} className="transition-transform data-popup-open:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" sideOffset={10} className="min-w-52 rounded-2xl p-1.5">
                    {nav.more.map((link) => (
                      <DropdownMenuItem
                        key={link.href}
                        render={<Link href={link.href} />}
                        className="rounded-xl px-3 py-2.5 text-[14px]"
                      >
                        {link.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>

            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href={`tel:${site.phone}`}
                className="flex items-center gap-1.5 text-[14px] font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                <Phone size={14} className="text-coral-deep" />
                {site.phoneDisplay}
              </Link>
              <MagneticButton strength={0.35}>
                <Button
                  render={<Link href="#contact" />}
                  nativeButton={false}
                  size="lg"
                  className="rounded-full bg-coral-deep px-5 text-white shadow-coral-sm hover:bg-coral-deep/90"
                >
                  Записатися
                </Button>
              </MagneticButton>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/40 focus-visible:ring-offset-2 lg:hidden"
            >
              {open ? <X size={17} /> : <Menu size={17} />}
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
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {[...nav.primary, ...nav.more].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3.5 py-3 text-[15px] font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2.5 px-1">
                <Link
                  href={`tel:${site.phone}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-border-strong py-2.5 text-[14px] font-medium text-foreground"
                >
                  <Phone size={14} className="text-coral-deep" />
                  {site.phoneDisplay}
                </Link>
                <Button
                  render={<Link href="#contact" onClick={() => setOpen(false)} />}
                  nativeButton={false}
                  className="w-full rounded-full bg-coral-deep text-white hover:bg-coral-deep/90"
                  size="lg"
                >
                  Записатися до садочка
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
