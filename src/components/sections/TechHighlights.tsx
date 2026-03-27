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
      "Inference runs locally on your Mac. Models, prompts, audio, and generation history stay on-device.",
    span: "lg:col-span-2",
  },
  {
    icon: Cpu,
    title: "Apple Silicon + MLX",
    description:
      "The app pairs a native SwiftUI frontend with an MLX-backed Python backend tuned for Apple Silicon.",
  },
  {
    icon: PackageCheck,
    title: "Packaged Native App",
    description:
      "QwenVoice 1.2 ships bundled macOS 15 and macOS 26 DMGs so end users can install without setting up Python, Homebrew, or terminal tooling.",
  },
  {
    icon: Binary,
    title: "Native Model Downloads",
    description:
      "The shipped GUI downloads the three supported Qwen3-TTS models directly inside the app.",
  },
  {
    icon: Network,
    title: "Saved Voices, History, and Outputs",
    description:
      "Saved voices, generation history, and exported audio stay local. History is stored in SQLite via GRDB, and output files can use the default tree or a custom directory.",
  },
  {
    icon: SlidersHorizontal,
    title: "Streaming Preview + Batch Jobs",
    description:
      "Single-generation flows use live streaming preview in the shipped GUI, while batch jobs remain sequential and final-file-based for longer runs.",
    span: "lg:col-span-2",
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
    <section id={SECTION_IDS.tech} className="px-4 sm:px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Under the Hood"
          title="Technical Highlights"
          subtitle="The shipped GUI is built around local inference, live studio previews, in-app model management, and native macOS workflows."
        />

        <div className="flex flex-col gap-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
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
            {/* Desktop table */}
            <GlassCard className="hidden overflow-hidden p-0 sm:block">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th scope="col" className="px-6 py-4 text-left font-semibold text-text-primary">
                        Model
                      </th>
                      <th scope="col" className="px-6 py-4 text-left font-semibold text-text-primary">
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

            {/* Mobile stacked cards */}
            <div className="flex flex-col gap-3 sm:hidden">
              {models.map((model) => (
                <GlassCard key={model.name} className="p-4">
                  <p className="text-xs font-mono text-text-primary break-all">{model.name}</p>
                  <p className="mt-1.5 text-sm text-text-secondary">{model.useCase}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="px-2 text-sm leading-relaxed text-text-secondary"
          >
            For scripted workflows, the upstream repo also ships a standalone
            CLI companion and a local JSON-RPC 2.0 backend. The packaged GUI
            uses live streaming preview for single generations while keeping
            batch jobs sequential and file-based.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
