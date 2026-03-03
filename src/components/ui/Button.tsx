"use client";

import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  children,
  className,
  external = true,
}: ButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200",
        variant === "primary" &&
          "bg-accent text-white hover:bg-accent-hover glow-accent hover:glow-accent-strong",
        variant === "secondary" &&
          "border border-white/15 bg-white/5 backdrop-blur-sm text-text-primary hover:bg-white/10 hover:border-white/25",
        className
      )}
    >
      {children}
    </a>
  );
}
