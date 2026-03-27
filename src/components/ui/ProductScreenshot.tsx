"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";

interface ProductScreenshotProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  frameClassName?: string;
  imageClassName?: string;
}

export function ProductScreenshot({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className,
  frameClassName,
  imageClassName,
}: ProductScreenshotProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div
        className="pointer-events-none absolute inset-x-[10%] bottom-0 h-16 rounded-full bg-accent/10 blur-3xl sm:h-24"
        aria-hidden="true"
      />
      <div
        className={cn(
          "relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#091120] shadow-[0_28px_80px_rgba(0,0,0,0.38)]",
          frameClassName
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className={cn("block h-auto w-full", imageClassName)}
        />
      </div>
    </div>
  );
}
