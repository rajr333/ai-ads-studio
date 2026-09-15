import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "spec" | "accent" | "outline" | "format";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-surface border border-border text-neutral-300",
    spec: "bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono tracking-wider",
    accent: "bg-accent/15 border border-accent/40 text-accent font-bold",
    outline: "border border-border text-neutral-400 bg-transparent",
    format: "bg-white/10 border border-white/20 text-white font-mono",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold select-none",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
