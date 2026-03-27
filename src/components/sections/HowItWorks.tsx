"use client";

import { motion } from "framer-motion";
import { Download, Shield, ArrowDownToLine, Sparkles } from "lucide-react";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
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
      "Open GitHub Releases and choose QwenVoice-macos26.dmg for the modern liquid build or QwenVoice-macos15.dmg for the legacy glass build.",
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
      "Open Models and install the dedicated Custom Voice, Voice Design, or Voice Cloning models you want locally.",
  },
  {
    icon: Sparkles,
    title: "Generate Audio",
    description:
      "Use Custom Voice, Voice Design, or Voice Cloning with live preview for single generations on your Mac.",
  },
];

export function HowItWorks() {
  return (
    <section id={SECTION_IDS.howItWorks} className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="How It Works"
          title="Up and Running in Minutes"
          subtitle="Choose the right 1.2 DMG, install the app, download models in-app, and start generating locally with the current Studio workflows."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-left"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <step.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-bg-secondary text-sm font-semibold text-text-primary">
                  {i + 1}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">{step.title}</h3>
              <p className="text-sm leading-7 text-text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-8 xl:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)] xl:items-end"
        >
          <ProductScreenshot
            src="/images/captures-1-2/raw/05-models-installed.png"
            alt="QwenVoice 1.2 Models full app window showing the installed tracks for Custom Voice, Voice Design, and Voice Cloning"
            width={1440}
            height={1224}
            sizes="(max-width: 1279px) 100vw, 58vw"
            frameClassName="bg-[#091120]"
          />

          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-accent">
              In-App Models
            </p>
            <h3 className="mb-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              One clean place to install the exact models you need
            </h3>
            <p className="text-base leading-8 text-text-secondary sm:text-lg">
              QwenVoice 1.2 ships three dedicated 1.7B model tracks for Custom
              Voice, Voice Design, and Voice Cloning. Install them from the
              Models screen after the app is in Applications, then reuse
              designed voices later from Saved Voices when cloning.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-tertiary">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/80" aria-hidden="true" />
                Three dedicated 1.7B tracks
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/80" aria-hidden="true" />
                Install inside the app
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/80" aria-hidden="true" />
                Local workflows stay organized
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
