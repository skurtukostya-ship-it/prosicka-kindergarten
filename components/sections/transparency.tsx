"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Mail, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { site, transparency } from "@/lib/content";

export function Transparency() {
  return (
    <section id="transparency" className="relative py-24 sm:py-32">
      <Container className="max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-sky-soft px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-sky-deep"
          >
            <ShieldCheck size={13} />
            Прозорість
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-balance font-heading text-3xl font-extrabold leading-[1.1] tracking-[-0.01em] text-foreground sm:text-4xl"
          >
            {transparency.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-2xl text-balance text-[15px] leading-relaxed text-muted-foreground"
          >
            {transparency.description}
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {transparency.documents.map((doc, i) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-3.5 rounded-2xl bg-background-elevated p-5 ring-1 ring-border"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-soft text-sky-deep">
                <FileText size={17} strokeWidth={2.25} />
              </span>
              <div>
                <p className="font-heading text-[15px] font-bold text-foreground">{doc.title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{doc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-background-soft p-6 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <p className="text-[14px] leading-relaxed text-foreground/80">{transparency.note}</p>
          <Link
            href={`mailto:${site.email}`}
            className="flex shrink-0 items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-[13px] font-medium text-background transition-opacity hover:opacity-90"
          >
            <Mail size={14} />
            Написати нам
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
