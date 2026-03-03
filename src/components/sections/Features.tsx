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
    title: "Custom Voice Speakers",
    description:
      "Choose from 4 built-in speakers with distinct vocal characteristics, or fine-tune speech with natural language control over tone, pace, and emotion.",
    chips: ["4 Built-in Voices", "Natural Control", "Emotional Range"],
    screenshot: "/images/screenshot-custom-voice.png",
  },
  {
    icon: Paintbrush,
    title: "Voice Design Studio",
    description:
      "Create entirely new voices from text descriptions. Describe the voice you want — age, accent, personality — and QwenVoice brings it to life.",
    chips: ["Text-to-Voice", "Custom Personas", "Unlimited Variety"],
    screenshot: "/images/screenshot-voice-design.png",
  },
  {
    icon: AudioLines,
    title: "Voice Cloning",
    description:
      "Clone any voice from just 5–10 seconds of audio. Upload a sample and generate speech that captures the unique characteristics of the source.",
    chips: ["5-10s Samples", "High Fidelity", "Fast Processing"],
    screenshot: "/images/screenshot-voice-cloning.png",
  },
];

export function Features() {
  return (
    <section id={SECTION_IDS.features} className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Features"
          title="Everything You Need for Voice Generation"
          subtitle="Three powerful modes for creating natural, expressive speech — all running locally on your Mac."
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
                  <div className="mb-6 overflow-hidden rounded-lg border border-white/[0.08]">
                    <Image
                      src={feature.screenshot}
                      alt={`${feature.title} screenshot`}
                      width={600}
                      height={375}
                      className="w-full"
                    />
                  </div>
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
