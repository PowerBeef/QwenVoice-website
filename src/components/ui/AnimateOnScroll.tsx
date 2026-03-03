"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export function AnimateOnScroll({
  children,
  className,
  variants = fadeUp,
  delay = 0,
}: AnimateOnScrollProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
