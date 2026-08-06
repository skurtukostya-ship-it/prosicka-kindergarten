import { cn } from "@/lib/utils";

export function WindowPanel({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border-strong bg-background-elevated/60 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="ml-3 truncate font-mono text-[11px] text-muted-dim">
          {label}
        </span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
