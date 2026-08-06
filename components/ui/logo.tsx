import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-7 w-7", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="var(--accent-2)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <path
        d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14c3.5 0 6.7-1.28 9.157-3.4a1 1 0 0 0-1.314-1.507A11.96 11.96 0 0 1 16 28C9.373 28 4 22.627 4 16S9.373 4 16 4c2.9 0 5.565 1.02 7.65 2.72a1 1 0 1 0 1.262-1.552A13.96 13.96 0 0 0 16 2Z"
        fill="url(#logo-gradient)"
      />
      <circle cx="24" cy="16" r="3.5" fill="url(#logo-gradient)" />
    </svg>
  );
}
