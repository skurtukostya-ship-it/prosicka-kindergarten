"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SunMedallion } from "@/components/ui/illustrations";
import { footer, site } from "@/lib/content";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.34C16.3 4.24 15.4 4.15 14.35 4.15c-2.2 0-3.7 1.34-3.7 3.8v2.55H8.15v3h2.5V21h2.85Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.4 3.4 2.9 10.7c-1.2.5-1.2 1.2-.2 1.5l4.8 1.5 1.8 5.6c.2.6.4.9.9.9.4 0 .6-.2.9-.5l2.1-2 4.4 3.2c.8.5 1.4.2 1.6-.7l3-14.2c.3-1.2-.4-1.7-1.2-1.6ZM8.2 13.4l9-5.6c.4-.3.8 0 .5.3l-7.4 6.7-.3 3.2-1.2-3.4Z" />
    </svg>
  );
}

const SOCIALS = [FacebookIcon, InstagramIcon, TelegramIcon];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background-soft py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-2">
            <Link
              href="#top"
              className="flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/40 focus-visible:ring-offset-2"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sun text-white">
                <SunMedallion className="h-5 w-5" />
              </span>
              <span className="font-heading text-[16px] font-extrabold leading-none text-foreground">
                {site.name}
              </span>
            </Link>
            <p className="max-w-[32ch] text-[14px] leading-relaxed text-muted-foreground">
              {footer.tagline}
            </p>
            <div className="mt-2 flex items-center gap-3">
              {SOCIALS.map((Icon, i) => (
                <motion.div key={i} whileHover={{ y: -3, scale: 1.08 }} whileTap={{ scale: 0.92 }}>
                  <Link
                    href="#"
                    aria-label="Соціальна мережа"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-background-elevated text-muted-foreground ring-1 ring-border transition-colors hover:text-coral-deep hover:ring-coral-deep/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/40"
                  >
                    <Icon width={15} height={15} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.06em] text-foreground/65">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-[14px] text-muted-foreground transition-colors hover:text-coral-deep focus-visible:outline-none focus-visible:text-coral-deep"
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-[12px] text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. Усі права захищено.
          </p>
          <p className="text-[12px] text-muted-foreground">{site.address}</p>
        </div>
      </Container>
    </footer>
  );
}
