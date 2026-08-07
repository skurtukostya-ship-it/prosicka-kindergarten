import { cn } from "@/lib/utils";

type SceneProps = { className?: string };

const INK = "#2b241c";

function SceneSvg({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      className={cn("absolute inset-0 h-full w-full", className)}
      aria-hidden
    >
      {children}
    </svg>
  );
}

function Backdrop({ from, to }: { from: string; to: string }) {
  return (
    <>
      <defs>
        <linearGradient id="scene-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#scene-sky)" />
      <circle cx="330" cy="60" r="70" fill="white" opacity="0.18" />
      <circle cx="55" cy="330" r="90" fill="white" opacity="0.14" />
      <path d="M0 300 Q100 270 200 296 T400 292 V400 H0 Z" fill="white" opacity="0.22" />
    </>
  );
}

function Clouds() {
  return (
    <g fill="white" opacity="0.85">
      <path d="M46 70c-8 0-14-6-14-13s6-13 13-13c1-9 9-16 18-16 8 0 15 5 17 12 7 0 13 6 13 13s-6 13-13 13H46Z" />
      <path d="M300 46c-6 0-11-5-11-11s5-11 11-11c1-7 7-13 15-13 6 0 12 4 14 10 6 0 10 5 10 11s-5 11-11 11h-28Z" opacity="0.7" />
    </g>
  );
}

function Kid({
  x,
  y,
  scale = 1,
  skin = "#f0bd8f",
  hair = "#6b4a2f",
  shirt,
  pants,
  mirror = false,
  armsUp = false,
  armsOut = false,
}: {
  x: number;
  y: number;
  scale?: number;
  skin?: string;
  hair?: string;
  shirt: string;
  pants: string;
  mirror?: boolean;
  armsUp?: boolean;
  armsOut?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${mirror ? -scale : scale} ${scale})`}>
      <rect x="-15" y="34" width="11" height="28" rx="5.5" fill={pants} />
      <rect x="4" y="34" width="11" height="28" rx="5.5" fill={pants} />
      <rect x="-17" y="-2" width="34" height="40" rx="15" fill={shirt} />
      {armsUp ? (
        <>
          <rect x="-33" y="-16" width="10" height="26" rx="5" fill={skin} transform="rotate(-32 -28 -3)" />
          <rect x="23" y="-16" width="10" height="26" rx="5" fill={skin} transform="rotate(32 28 -3)" />
        </>
      ) : armsOut ? (
        <>
          <rect x="-34" y="2" width="20" height="10" rx="5" fill={skin} />
          <rect x="14" y="2" width="20" height="10" rx="5" fill={skin} />
        </>
      ) : (
        <>
          <rect x="-27" y="6" width="10" height="24" rx="5" fill={skin} />
          <rect x="17" y="6" width="10" height="24" rx="5" fill={skin} />
        </>
      )}
      <circle cx="0" cy="-18" r="19" fill={skin} />
      <path d="M-19 -21a19 19 0 0 1 38 0q-2-11-19-11t-19 11Z" fill={hair} />
      <circle cx="-6.5" cy="-18" r="1.7" fill={INK} />
      <circle cx="6.5" cy="-18" r="1.7" fill={INK} />
      <path d="M-6 -10q6 6 12 0" stroke={INK} strokeWidth="1.7" fill="none" strokeLinecap="round" />
      <circle cx="-11" cy="-13" r="2.6" fill={shirt} opacity="0.35" />
      <circle cx="11" cy="-13" r="2.6" fill={shirt} opacity="0.35" />
    </g>
  );
}

function GroundArc({ fill }: { fill: string }) {
  return <path d="M0 330 Q200 300 400 332 V400 H0 Z" fill={fill} />;
}

export function KidsPlayScene({ className }: SceneProps) {
  return (
    <SceneSvg className={className}>
      <Backdrop from="var(--sun-soft)" to="var(--coral-soft)" />
      <Clouds />
      <GroundArc fill="var(--mint-soft)" />
      <circle cx="230" cy="255" r="16" fill="white" opacity="0.9" />
      <circle cx="230" cy="255" r="16" fill="none" stroke="var(--coral)" strokeWidth="2" strokeDasharray="4 5" />
      <Kid x={130} y={250} scale={1.15} shirt="var(--coral)" pants="#3d5a80" armsOut hair="#4a3120" />
      <Kid x={270} y={260} scale={1} shirt="var(--sky)" pants="#2b241c" mirror armsUp hair="#2b241c" skin="#c68c5b" />
    </SceneSvg>
  );
}

export function MusicScene({ className }: SceneProps) {
  return (
    <SceneSvg className={className}>
      <Backdrop from="var(--sky-soft)" to="var(--mint-soft)" />
      <Clouds />
      <GroundArc fill="var(--sun-soft)" />
      <g stroke={INK} strokeWidth="3" strokeLinecap="round" opacity="0.55">
        <path d="M300 80q10 10 0 20M312 72q16 16 0 32" fill="none" />
      </g>
      <path d="M296 150v52a11 11 0 1 1-6-10V156Z" fill="var(--coral)" />
      <path d="M240 130v52a11 11 0 1 1-6-10V136Z" fill="var(--sky)" />
      <Kid x={150} y={250} scale={1.15} shirt="var(--sun)" pants="#3d5a80" armsOut hair="#3a2a1c" />
      <rect x="95" y="255" width="90" height="14" rx="6" fill="#caa46b" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={102 + i * 16} y={244} width="8" height={14 + (i % 3) * 6} rx="3" fill={i % 2 ? "var(--coral)" : "var(--sky)"} />
      ))}
    </SceneSvg>
  );
}

export function ArtScene({ className }: SceneProps) {
  return (
    <SceneSvg className={className}>
      <Backdrop from="var(--coral-soft)" to="var(--sun-soft)" />
      <Clouds />
      <GroundArc fill="var(--sky-soft)" />
      <rect x="235" y="150" width="10" height="120" rx="4" fill="#a97c50" />
      <rect x="150" y="140" width="140" height="100" rx="10" fill="white" />
      <rect x="150" y="140" width="140" height="100" rx="10" fill="none" stroke="#caa46b" strokeWidth="6" />
      <path d="M175 220q20-40 45-10q20-35 55 5" fill="none" stroke="var(--sky)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="205" cy="175" r="12" fill="var(--sun)" />
      <Kid x={130} y={255} scale={1.1} shirt="var(--mint)" pants="#3d5a80" hair="#241a12" armsOut />
      <ellipse cx="90" cy="270" rx="26" ry="14" fill="#f6efe0" stroke="#caa46b" strokeWidth="3" />
      <circle cx="80" cy="266" r="5" fill="var(--coral)" />
      <circle cx="95" cy="262" r="5" fill="var(--sky)" />
      <circle cx="102" cy="272" r="5" fill="var(--sun)" />
    </SceneSvg>
  );
}

export function GardenScene({ className }: SceneProps) {
  return (
    <SceneSvg className={className}>
      <Backdrop from="var(--sky-soft)" to="var(--sun-soft)" />
      <Clouds />
      <GroundArc fill="var(--mint-soft)" />
      {[
        [70, 300, "var(--coral)"],
        [340, 320, "var(--sky)"],
        [40, 350, "var(--sun)"],
        [370, 270, "var(--mint)"],
      ].map(([cx, cy, c], i) => (
        <g key={i} transform={`translate(${cx} ${cy})`}>
          {Array.from({ length: 6 }).map((_, j) => {
            const angle = (j * 60 * Math.PI) / 180;
            return <circle key={j} cx={Math.round(Math.cos(angle) * 9 * 100) / 100} cy={Math.round(Math.sin(angle) * 9 * 100) / 100} r="7" fill={c as string} opacity="0.85" />;
          })}
          <circle r="5.5" fill="white" />
        </g>
      ))}
      <path d="M330 120c-4-14-20-16-24-4-10-6-20 4-14 14 6 8 20 8 26 2 8 6 16-4 12-12Z" fill="var(--coral)" opacity="0.9" />
      <line x1="330" y1="128" x2="330" y2="140" stroke={INK} strokeWidth="2" />
      <Kid x={180} y={260} scale={1.15} shirt="var(--sun)" pants="#3d5a80" hair="#4a3120" armsOut />
      <Kid x={255} y={270} scale={0.95} shirt="var(--coral)" pants="#2b241c" mirror hair="#241a12" skin="#c68c5b" />
    </SceneSvg>
  );
}

export function MealScene({ className }: SceneProps) {
  return (
    <SceneSvg className={className}>
      <Backdrop from="var(--sun-soft)" to="var(--mint-soft)" />
      <Clouds />
      <GroundArc fill="var(--sky-soft)" />
      <rect x="90" y="250" width="220" height="16" rx="8" fill="#caa46b" />
      <ellipse cx="150" cy="238" rx="34" ry="14" fill="white" stroke="#e7ddc8" strokeWidth="3" />
      <circle cx="140" cy="234" r="7" fill="var(--coral)" />
      <circle cx="158" cy="236" r="6" fill="var(--sun)" />
      <ellipse cx="250" cy="238" rx="34" ry="14" fill="white" stroke="#e7ddc8" strokeWidth="3" />
      <path d="M236 236q14-10 28 0" stroke="var(--mint)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <Kid x={200} y={215} scale={1.1} shirt="var(--sky)" pants="#3d5a80" hair="#3a2a1c" armsOut />
    </SceneSvg>
  );
}

export function CelebrationScene({ className }: SceneProps) {
  return (
    <SceneSvg className={className}>
      <Backdrop from="var(--sky-soft)" to="var(--coral-soft)" />
      <Clouds />
      <GroundArc fill="var(--sun-soft)" />
      {[
        [60, 70, "var(--coral)"],
        [120, 50, "var(--sun)"],
        [280, 60, "var(--sky)"],
        [340, 90, "var(--mint)"],
        [200, 40, "var(--coral)"],
      ].map(([cx, cy, c], i) => (
        <rect key={i} x={(cx as number) - 4} y={cy as number} width="8" height="8" rx="2" fill={c as string} transform={`rotate(${i * 37} ${cx} ${cy})`} />
      ))}
      <rect x="150" y="150" width="6" height="70" fill="#caa46b" />
      <path d="M156 150 L216 165 L156 182 Z" fill="var(--sky)" />
      <path d="M156 150 L216 165 L156 182 Z" fill="var(--sun)" opacity="0.001" />
      <path d="M156 150 h60 v16 h-60 Z" fill="var(--sky)" />
      <path d="M156 166 h60 v16 h-60 Z" fill="var(--sun)" />
      <Kid x={200} y={270} scale={1.15} shirt="var(--mint)" pants="#3d5a80" hair="#4a3120" armsUp />
      <Kid x={270} y={280} scale={0.9} shirt="var(--coral)" pants="#2b241c" mirror armsUp hair="#241a12" skin="#c68c5b" />
    </SceneSvg>
  );
}

export function ReadingScene({ className }: SceneProps) {
  return (
    <SceneSvg className={className}>
      <Backdrop from="var(--mint-soft)" to="var(--sky-soft)" />
      <Clouds />
      <GroundArc fill="var(--sun-soft)" />
      <g transform="translate(140 250)">
        <rect x="-8" y="-6" width="60" height="42" rx="4" fill="var(--coral)" transform="rotate(-8)" />
        <rect x="-4" y="-2" width="60" height="42" rx="4" fill="white" stroke="#e7ddc8" strokeWidth="2" transform="rotate(-2)" />
        <line x1="26" y1="4" x2="26" y2="34" stroke="#e7ddc8" strokeWidth="2" transform="rotate(-2)" />
      </g>
      <Kid x={235} y={260} scale={1.15} shirt="var(--sun)" pants="#3d5a80" hair="#241a12" />
      <rect x="200" y="286" width="40" height="6" rx="3" fill="#caa46b" />
      <rect x="206" y="280" width="40" height="6" rx="3" fill="#e7ddc8" />
    </SceneSvg>
  );
}
