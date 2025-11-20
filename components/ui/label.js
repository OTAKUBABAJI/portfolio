import { cn } from "../../lib/utils";

export function Label({ className, children, ...props }) {
  return (
    <label
      className={cn("text-xs uppercase tracking-[0.2em] text-white/60", className)}
      {...props}
    >
      {children}
    </label>
  );
}

