import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2.6h3.3l-7.2 8.2 8.5 11.2h-6.6l-5.2-6.8-5.9 6.8H2.4l7.7-8.8L1.9 2.6h6.8l4.7 6.2 5.5-6.2Zm-1.2 17.4h1.8L7.4 4.5H5.5l12.2 15.5Z" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.5c-5.8 0-10.5 4.7-10.5 10.5 0 4.64 3.01 8.58 7.19 9.97.53.1.72-.23.72-.5 0-.25-.01-1.08-.01-1.96-2.64.57-3.2-1.13-3.2-1.13-.43-1.1-1.06-1.39-1.06-1.39-.87-.59.07-.58.07-.58.96.07 1.47.99 1.47.99.85 1.46 2.24 1.04 2.79.79.09-.62.34-1.04.61-1.28-2.11-.24-4.33-1.05-4.33-4.69 0-1.04.37-1.88 0.98-2.55-.1-.24-.42-1.22.09-2.54 0 0 .8-.26 2.63.97a9.06 9.06 0 0 1 4.79 0c1.83-1.23 2.63-.97 2.63-.97.52 1.32.19 2.3.1 2.54.61.67.98 1.51.98 2.55 0 3.65-2.23 4.45-4.35 4.68.35.3.65.88.65 1.78 0 1.29-.01 2.32-.01 2.64 0 .27.18.6.72.5 4.17-1.4 7.18-5.33 7.18-9.97C22.5 6.2 17.8 1.5 12 1.5Z"
      />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.5 9.5h5v11h-5v-11Zm7.5 0h4.8v1.5h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 6 3.16 6 7.28v6.19h-5v-5.49c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.4-2.11 2.9v5.58h-5v-11Z" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Product",
    links: ["Platform", "Pricing", "Changelog", "Docs"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API reference", "Status", "Security"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "DPA"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <Container>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-2">
            <Link href="#top" className="flex items-center gap-2.5 font-medium tracking-tight">
              <Logo />
              <span className="text-[15px]">Continuum</span>
            </Link>
            <p className="max-w-[26ch] text-[13.5px] leading-relaxed text-muted">
              The infrastructure for autonomous intelligence.
            </p>
            <div className="mt-2 flex items-center gap-3">
              {[XIcon, GithubIcon, LinkedinIcon].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:text-foreground"
                >
                  <Icon width={14} height={14} />
                </Link>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-dim">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[13.5px] text-muted transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-[12.5px] text-muted-dim">
            © {new Date().getFullYear()} Continuum Labs, Inc. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-muted-dim">
            Built for teams shipping AI in production.
          </p>
        </div>
      </Container>
    </footer>
  );
}
