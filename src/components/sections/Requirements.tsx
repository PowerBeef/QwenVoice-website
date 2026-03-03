"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, MemoryStick } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SECTION_IDS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

interface Requirement {
  icon: LucideIcon;
  title: string;
  value: string;
}

const requirements: Requirement[] = [
  { icon: Monitor, title: "macOS", value: "14+ (Sonoma)" },
  { icon: Cpu, title: "Processor", value: "Apple Silicon (M1–M4)" },
  { icon: MemoryStick, title: "RAM", value: "8 GB minimum" },
];

export function Requirements() {
  return (
    <section id={SECTION_IDS.requirements} className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="System Requirements"
          title="What You Need"
          subtitle="QwenVoice is designed for modern Macs with Apple Silicon."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {requirements.map((req) => (
            <motion.div key={req.title} variants={fadeUp}>
              <GlassCard className="flex flex-col items-center p-8 text-center">
                <req.icon className="mb-4 h-8 w-8 text-accent" />
                <p className="text-sm text-text-secondary">{req.title}</p>
                <p className="mt-1 text-xl font-semibold text-text-primary">
                  {req.value}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
