import { Container } from "@/components/ui/container";

const LOGOS = [
  "Northwind",
  "Vector Labs",
  "Kepler",
  "Anagram",
  "Ridgeline",
  "Outpost",
  "Solstice",
  "Fathom",
];

export function LogoCloud() {
  const loop = [...LOGOS, ...LOGOS];

  return (
    <section className="border-y border-border py-14">
      <Container>
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.16em] text-muted-dim">
          Powering agent infrastructure for teams at
        </p>
      </Container>

      <div
        className="relative mt-9 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="animate-marquee flex w-max items-center gap-16">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 text-xl font-medium tracking-tight text-foreground/35 transition-colors hover:text-foreground/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
