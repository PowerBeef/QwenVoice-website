"use client";

import { motion } from "framer-motion";
import {
  WifiOff,
  Cpu,
  PackageCheck,
  Binary,
  Network,
  SlidersHorizontal,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SECTION_IDS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

interface TechItem {
  icon: LucideIcon;
  title: string;
  description: string;
  span?: string; // Tailwind col-span
}

const techItems: TechItem[] = [
  {
    icon: WifiOff,
    title: "100% Offline",
    description:
      "Every computation happens on your device. No data ever leaves your Mac — complete privacy by design.",
    span: "md:col-span-2",
  },
  {
    icon: Cpu,
    title: "Apple MLX Accelerated",
    description:
      "Optimized for Apple Silicon using the MLX framework for maximum GPU utilization.",
  },
  {
    icon: PackageCheck,
    title: "Zero Dependencies",
    description:
      "Self-contained .app bundle. No Python, no Homebrew, no command-line setup required.",
  },
  {
    icon: Binary,
    title: "1.7B Parameters",
    description:
      "Powered by Qwen3-TTS 1.7B parameter models for state-of-the-art voice quality.",
  },
  {
    icon: Network,
    title: "JSON-RPC 2.0",
    description:
      "Built-in local server for seamless integration with other apps and automation workflows.",
  },
  {
    icon: SlidersHorizontal,
    title: "Intuitive Voice Controls",
    description:
      "Fine-tune emotion and speaking speed with intuitive UI controls for precise voice customization.",
    span: "md:col-span-2",
  },
];

const models = [
  {
    name: "Qwen3-TTS-12Hz-1.7B-CustomVoice-8bit",
    useCase: "Custom Voice (4 built-in speakers)",
  },
  {
    name: "Qwen3-TTS-12Hz-1.7B-VoiceDesign-8bit",
    useCase: "Voice Design (new voice from text description)",
  },
  {
    name: "Qwen3-TTS-12Hz-1.7B-Base-8bit",
    useCase: "Voice Cloning (clone from a short audio sample)",
  },
];

export function TechHighlights() {
  return (
    <section id={SECTION_IDS.tech} className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Under the Hood"
          title="Technical Highlights"
          subtitle="Built with performance and privacy at the core."
        />

        <div className="flex flex-col gap-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 md:grid-cols-4"
        >
          {techItems.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className={item.span}
            >
              <GlassCard className="flex h-full flex-col p-8">
                <item.icon className="mb-4 h-8 w-8 text-accent" />
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <GlassCard className="overflow-hidden p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="px-6 py-4 text-left font-semibold text-text-primary">
                      Model
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-text-primary">
                      Use Case
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {models.map((model, i) => (
                    <tr
                      key={model.name}
                      className={
                        i < models.length - 1
                          ? "border-b border-white/[0.04]"
                          : ""
                      }
                    >
                      <td className="px-6 py-3.5 font-mono text-text-primary">
                        {model.name}
                      </td>
                      <td className="px-6 py-3.5 text-text-secondary">
                        {model.useCase}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
