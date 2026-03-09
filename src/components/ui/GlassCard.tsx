import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-200 hover:border-white/[0.12]",
        className
      )}
    >
      {children}
    </div>
  );
}
