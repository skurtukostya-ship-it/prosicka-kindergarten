import { cn } from "@/lib/utils";

type IconProps = { className?: string };

// Rounded to a fixed precision so server- and client-rendered markup match
// exactly — raw trig output can differ in the last decimal between engines.
function round(n: number) {
  return Math.round(n * 1000) / 1000;
}

export function SunMedallion({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={cn("h-10 w-10", className)} aria-hidden>
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = round(32 + Math.cos(angle) * 24);
          const y1 = round(32 + Math.sin(angle) * 24);
          const x2 = round(32 + Math.cos(angle) * 30);
          const y2 = round(32 + Math.sin(angle) * 30);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
      <circle cx="32" cy="32" r="16" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

export function CloudShape({ className }: IconProps) {
  return (
    <svg viewBox="0 0 120 64" fill="none" className={cn("h-16 w-28", className)} aria-hidden>
      <path
        d="M27 52C13 52 4 43.2 4 32.6 4 22.6 12 14.6 22.4 14.1 26.6 5.6 35.4 0 45.5 0c13.1 0 24 9.9 25.6 22.6C82 23.9 90 33 90 43.6 90 55 80.4 62 68.5 62H27a10 10 0 0 1 0-10Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FlowerBloom({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={cn("h-8 w-8", className)} aria-hidden>
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const cx = round(20 + Math.cos(angle) * 9);
        const cy = round(20 + Math.sin(angle) * 9);
        return <circle key={i} cx={cx} cy={cy} r="7.5" fill="currentColor" opacity="0.85" />;
      })}
      <circle cx="20" cy="20" r="6" fill="currentColor" />
    </svg>
  );
}

export function ButterflyShape({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 40" fill="none" className={cn("h-9 w-11", className)} aria-hidden>
      <path
        d="M24 12c-2-6-9-11-15-9-5 1.6-6 8-2 12 3 3 9 4 13 2-3 3-4 8-2 12 2 5 8 6 11 2 2-2.5 2-6.5 0-10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path
        d="M24 12c2-6 9-11 15-9 5 1.6 6 8 2 12-3 3-9 4-13 2 3 3 4 8 2 12-2 5-8 6-11 2-2-2.5-2-6.5 0-10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <line x1="24" y1="10" x2="24" y2="30" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function BlobShapeOne({ className }: IconProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M45.6 30.6C63 12.7 90.9 5 116.7 12.4c25.8 7.4 49.5 30 55 56.3 5.5 26.3-7.2 56.2-29.9 73.6-22.7 17.4-55.3 22.2-80.9 10.6C35.3 141.3 16.5 114 12 84.9 7.6 55.8 28.3 48.5 45.6 30.6Z"
      />
    </svg>
  );
}

export function BlobShapeTwo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M52 24.8c26-14 60.4-9.9 82.7 9 22.3 18.8 32.5 51.6 22.9 79.4-9.6 27.8-38.9 50.6-68.6 51.9-29.7 1.3-59.7-19-72.2-46.5C4.3 90.9 8 58.9 26.3 40.3 34 32.5 43 29.6 52 24.8Z"
      />
    </svg>
  );
}

export function AmbientBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <BlobShapeOne className="animate-aurora-drift absolute -left-24 -top-24 h-[26rem] w-[26rem] text-sun-soft opacity-70 blur-2xl" />
      <BlobShapeTwo className="animate-aurora-drift-slow absolute -right-20 top-10 h-[24rem] w-[24rem] text-sky-soft opacity-70 blur-2xl" />
      <BlobShapeOne className="animate-aurora-drift absolute bottom-[-10rem] left-1/3 h-[22rem] w-[22rem] text-coral-soft opacity-50 blur-2xl [animation-delay:-9s]" />
    </div>
  );
}

export function DecorativeSprinkles({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <CloudShape className="animate-float absolute left-[6%] top-[12%] text-white/80" />
      <CloudShape className="animate-float-slow absolute right-[10%] top-[6%] h-12 w-20 text-white/70 [animation-delay:-2s]" />
      <FlowerBloom className="animate-bob absolute left-[14%] bottom-[14%] text-coral/70" />
      <FlowerBloom className="animate-bob absolute right-[18%] bottom-[20%] h-6 w-6 text-sky/70 [animation-delay:-1.5s]" />
      <ButterflyShape className="animate-float absolute right-[8%] bottom-[32%] text-mint/80 [animation-delay:-3s]" />
    </div>
  );
}
