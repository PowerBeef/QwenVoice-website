"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mic, Paintbrush, AudioLines } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SECTION_IDS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  chips: string[];
  screenshot?: string;
}

const features: Feature[] = [
  {
    icon: Mic,
    title: "Custom Voice",
    description:
      "Generate speech with four built-in English speakers: Ryan, Aiden, Serena, and Vivian. Add natural-language instructions to guide delivery, pacing, and character inside the main workflow.",
    chips: ["4 English Speakers", "Instruction Prompt", "Offline Generation"],
    screenshot: "/images/screenshot-custom-voice.png",
  },
  {
    icon: Paintbrush,
    title: "Voice Design",
    description:
      "Switch to the Custom speaker chip inside Custom Voice to describe a brand-new voice in plain language. Voice Design is part of the shipped Custom Voice flow, not a separate sidebar screen.",
    chips: ["Inside Custom Voice", "Plain-Language Design", "New Voice Identity"],
    screenshot: "/images/screenshot-voice-design.png",
  },
  {
    icon: AudioLines,
    title: "Voice Cloning",
    description:
      "Clone a voice from a short reference clip and optionally include a transcript for better accuracy. The shipped app accepts WAV, MP3, AIFF, M4A, FLAC, and OGG input.",
    chips: ["5-10s Reference", "Optional Transcript", "Common Audio Formats"],
    screenshot: "/images/screenshot-voice-cloning.png",
  },
];

export function Features() {
  return (
    <section id={SECTION_IDS.features} className="px-4 sm:px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Features"
          title="Three Shipped Voice Workflows"
          subtitle="The current QwenVoice app focuses on custom voices, voice design, and voice cloning, with all generation running locally on your Mac."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeUp}>
              <GlassCard className="flex h-full flex-col p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
                {feature.screenshot && (
                  <figure className="mb-6 overflow-hidden rounded-lg border border-white/[0.08]">
                    <Image
                      src={feature.screenshot}
                      alt={`${feature.title} screenshot`}
                      width={600}
                      height={375}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full"
                    />
                    <figcaption className="sr-only">{feature.title} interface</figcaption>
                  </figure>
                )}
                <div className="flex flex-wrap gap-2">
                  {feature.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-text-tertiary"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
