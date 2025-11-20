import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const variants = {
  ghost:
    "bg-transparent border border-transparent text-white hover:border-white/20 hover:bg-white/5",
  minimal:
    "bg-transparent border border-white/10 text-white hover:border-white/30 hover:bg-white/5",
  glow:
    "relative overflow-hidden bg-white/5 text-white border border-white/10 hover:border-white/30",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export const Button = forwardRef(function Button(
  { className, variant = "minimal", size = "md", children, ...props },
  ref
) {
  const Component = props.href ? "a" : "button";

  return (
    <Component
      ref={ref}
      className={cn(
        "group inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "glow" ? (
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 via-white/10 to-purple-400/30 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      ) : null}
    </Component>
  );
});

