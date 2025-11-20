import { cn } from "../../lib/utils";

export function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/5 bg-white/5 backdrop-blur-3xl text-white/80",
        className
      )}
    >
      {children}
    </div>
  );
}

