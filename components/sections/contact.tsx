"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { MapFacade } from "@/components/ui/map-facade";
import { contact, site } from "@/lib/content";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.address}, ${site.region}`,
)}&output=embed`;

const CARDS = [
  { icon: MapPin, label: "Адреса", value: site.address, href: "#", color: "bg-coral-soft text-coral-deep" },
  { icon: Phone, label: "Телефон", value: site.phoneDisplay, href: `tel:${site.phone}`, color: "bg-sky-soft text-sky-deep" },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}`, color: "bg-mint-soft text-mint-deep" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-sky-soft px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-sky-deep"
          >
            {contact.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-balance font-heading text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            {contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground"
          >
            {contact.description}
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-4">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={card.href}
                  className="group flex items-center gap-4 rounded-[1.75rem] bg-background-elevated p-5 shadow-soft-md ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-deep/40 focus-visible:ring-offset-2"
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${card.color}`}>
                    <card.icon size={19} strokeWidth={2.25} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-muted-foreground">
                      {card.label}
                    </p>
                    <p className="mt-0.5 truncate text-[15px] font-semibold text-foreground">{card.value}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 rounded-[1.75rem] bg-background-soft p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sun-soft text-sun-deep">
                <Clock size={19} strokeWidth={2.25} />
              </span>
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-muted-foreground">
                  Графік роботи
                </p>
                <div className="mt-1 flex flex-col gap-0.5">
                  {site.hours.map((h) => (
                    <p key={h.day} className="text-[14px] text-foreground/85">
                      <span className="font-semibold">{h.day}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            <MagneticButton strength={0.3} className="mt-1">
              <Button
                render={<Link href={`tel:${site.phone}`} />}
                nativeButton={false}
                size="lg"
                className="h-12 w-full rounded-full bg-coral-deep text-[15px] text-white shadow-coral-md hover:bg-coral-deep/90"
              >
                <Phone size={16} />
                Зателефонувати зараз
              </Button>
            </MagneticButton>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-[22rem] overflow-hidden rounded-[2rem] ring-1 ring-border"
          >
            <MapFacade src={mapSrc} title="Карта розташування садочка" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
