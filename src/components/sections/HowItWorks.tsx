"use client";

import { motion } from "framer-motion";
import { Download, Shield, ArrowDownToLine, Sparkles } from "lucide-react";
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
    title: "Download",
    description: "Grab the latest release from GitHub Releases.",
  },
  {
    icon: Shield,
    title: "Install",
    description: "Move to Applications and clear the quarantine flag.",
  },
  {
    icon: ArrowDownToLine,
    title: "Download Models",
    description: "Download the Qwen3-TTS models from within the app.",
  },
  {
    icon: Sparkles,
    title: "Generate",
    description: "Type text, pick a voice, and generate speech instantly.",
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
          subtitle="From download to your first generated speech in four simple steps."
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
      </div>
    </section>
  );
}
