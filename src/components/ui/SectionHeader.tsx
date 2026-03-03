"use client";

import { cn } from "@/lib/cn";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <AnimateOnScroll className={cn("mb-12 text-center", className)}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
        {label}
      </p>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-text-secondary">
          {subtitle}
        </p>
      )}
    </AnimateOnScroll>
  );
}
