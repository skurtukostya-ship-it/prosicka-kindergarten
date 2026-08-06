"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "For teams shipping their first production agent.",
    cta: "Start for free",
    variant: "secondary" as const,
    features: [
      "Up to 3 agents",
      "10,000 runs / month",
      "Basic observability",
      "Community support",
    ],
  },
  {
    name: "Team",
    price: "$249",
    period: "/mo",
    description: "For teams running agents in production every day.",
    cta: "Start free trial",
    variant: "primary" as const,
    highlighted: true,
    features: [
      "Unlimited agents",
      "250,000 runs / month",
      "Guardrails & policy engine",
      "Full trace observability",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with scale, security, or compliance needs.",
    cta: "Contact sales",
    variant: "secondary" as const,
    features: [
      "Unlimited runs",
      "Dedicated VPC deployment",
      "SSO/SAML + audit logs",
      "Custom SLAs",
      "24/7 dedicated support",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with your agents"
          description="Start free. Upgrade when your agents are ready for production traffic."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8",
                plan.highlighted
                  ? "border-accent/40 bg-gradient-to-b from-accent/[0.08] to-transparent shadow-[0_30px_90px_-30px_rgba(124,108,255,0.45)] lg:-translate-y-3"
                  : "border-border bg-background-elevated/40",
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-background">
                  Most popular
                </span>
              )}

              <h3 className="text-[15px] font-medium text-foreground">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-medium tracking-[-0.02em] text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-[14px] text-muted">{plan.period}</span>
                )}
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                {plan.description}
              </p>

              <ul className="mt-7 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-foreground/85">
                    <Check size={14} className="mt-0.5 shrink-0 text-accent-2" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                href="#cta"
                variant={plan.variant}
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
