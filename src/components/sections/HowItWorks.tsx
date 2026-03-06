"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Shield, ArrowDownToLine, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SECTION_IDS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Download,
    title: "Choose a Release",
    description:
      "Open GitHub Releases and pick the build that matches your macOS version.",
  },
  {
    icon: Shield,
    title: "Install the App",
    description:
      "Drag QwenVoice.app to Applications, then clear the quarantine attribute once.",
  },
  {
    icon: ArrowDownToLine,
    title: "Download a Model",
    description:
      "Open the Models screen and install the Qwen3-TTS model you want to run locally.",
  },
  {
    icon: Sparkles,
    title: "Generate Audio",
    description:
      "Use Custom Voice, Voice Design, or Voice Cloning to render speech on your Mac.",
  },
];

export function HowItWorks() {
  return (
    <section
      id={SECTION_IDS.howItWorks}
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="How It Works"
          title="Up and Running in Minutes"
          subtitle="Pick the right release build, install the app, download a model in-app, and start generating locally."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Connector line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden lg:block">
            <div className="mx-[15%] border-t-2 border-dashed border-white/[0.08]" />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/[0.08] bg-bg-secondary">
                <step.icon className="h-8 w-8 text-accent" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <GlassCard className="overflow-hidden p-0">
            <Image
              src="/images/screenshot-models.png"
              alt="QwenVoice Models screen showing downloadable Qwen3-TTS variants"
              width={1948}
              height={1770}
              className="w-full"
            />
          </GlassCard>

          <GlassCard className="flex h-full flex-col justify-center p-8 text-left">
            <p className="mb-3 text-xs font-medium tracking-[0.24em] text-accent uppercase">
              In-App Models
            </p>
            <h3 className="mb-3 text-2xl font-semibold text-text-primary">
              Download only what you need
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              QwenVoice exposes three shipped Qwen3-TTS variants for Custom
              Voice, Voice Design, and Voice Cloning. Install them from the
              Models screen after the app is in Applications.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
