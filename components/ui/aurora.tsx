import { cn } from "@/lib/utils";

export function Aurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="animate-aurora-drift absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-[60%] rounded-full bg-accent/25 blur-[120px]" />
      <div className="animate-aurora-drift-slow absolute right-[10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-accent-2/20 blur-[110px]" />
      <div className="animate-aurora-drift absolute bottom-[-15%] left-[15%] h-[24rem] w-[24rem] rounded-full bg-accent-3/10 blur-[130px] [animation-delay:-8s]" />
    </div>
  );
}
