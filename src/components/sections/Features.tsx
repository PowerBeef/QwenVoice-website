"use client";

import { motion } from "framer-motion";
import { FolderOpen, Paintbrush, AudioLines } from "lucide-react";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { SECTION_IDS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  chips: string[];
  screenshot: string;
  screenshotAlt: string;
}

const features: Feature[] = [
  {
    icon: FolderOpen,
    title: "Saved Voices",
    description:
      "Keep designed voices in a reusable local library, then jump straight into cloning when you want to use one as a starting point. QwenVoice 1.2 keeps the handoff organized without leaving the app.",
    chips: ["Reusable Library", "Open in Cloning", "Local Voice Handoff"],
    screenshot: "/images/captures-1-2/raw/06-saved-voices-populated.png",
    screenshotAlt:
      "QwenVoice 1.2 Saved Voices full app window showing a reusable Studio Narrator voice and an Open in Cloning action",
  },
  {
    icon: Paintbrush,
    title: "Voice Design",
    description:
      "Voice Design is a standalone workspace in QwenVoice 1.2. Describe a new voice in plain language, audition it live, and keep reusable results ready in Saved Voices for later sessions.",
    chips: ["Standalone in 1.2", "Saved Voices", "Live Preview"],
    screenshot: "/images/captures-1-2/raw/03-voice-design-idle.png",
    screenshotAlt:
      "QwenVoice 1.2 Voice Design full app window with a voice brief, delivery controls, and a generated script",
  },
  {
    icon: AudioLines,
    title: "Voice Cloning",
    description:
      "Bring in a short reference clip, pair it with a script, and generate a matching voice locally. The cloning flow also works naturally with Saved Voices when you want to reuse a designed voice later.",
    chips: ["Reference Clip", "Ready Script", "Saved Voices Reuse"],
    screenshot: "/images/captures-1-2/raw/04-voice-cloning-filled.png",
    screenshotAlt:
      "QwenVoice 1.2 Voice Cloning full app window with an imported reference clip and a ready script",
  },
];

export function Features() {
  return (
    <section id={SECTION_IDS.features} className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Features"
          title="More of the Current QwenVoice Studio"
          subtitle="Beyond the main generation workspace, QwenVoice 1.2 keeps reusable voices, standalone Voice Design, and local Voice Cloning organized in one app."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-12"
        >
          {features.map((feature, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                className={cn(
                  "grid gap-8 xl:items-center",
                  reverse
                    ? "xl:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]"
                    : "xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]",
                  index > 0 && "border-t border-white/[0.08] pt-12"
                )}
              >
                <div
                  className={cn(
                    "max-w-xl",
                    reverse ? "xl:order-2 xl:ml-auto" : "xl:order-1"
                  )}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    {feature.title}
                  </p>
                  <h3 className="mb-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                    {feature.title} in the current QwenVoice studio
                  </h3>
                  <p className="text-base leading-8 text-text-secondary sm:text-lg">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-tertiary">
                    {feature.chips.map((chip) => (
                      <span key={chip} className="inline-flex items-center gap-2">
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-accent/80"
                          aria-hidden="true"
                        />
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <figure className={reverse ? "xl:order-1" : "xl:order-2"}>
                  <ProductScreenshot
                    src={feature.screenshot}
                    alt={feature.screenshotAlt}
                    width={1440}
                    height={1224}
                    sizes="(max-width: 1279px) 100vw, 58vw"
                    frameClassName="bg-[#091120]"
                  />
                  <figcaption className="sr-only">{feature.title} interface</figcaption>
                </figure>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
