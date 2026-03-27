"use client";

import { motion } from "framer-motion";
import { Download, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import { SECTION_IDS, SITE } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative overflow-hidden px-4 pt-28 pb-20 sm:px-6 lg:pt-32 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="orb orb-blue -left-32 -top-28 opacity-75" />
        <div className="orb orb-purple right-[-8%] top-[14%] opacity-65" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-7xl"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-14">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.h1
              variants={fadeUp}
              className="max-w-[12ch] text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl"
            >
              Offline <span className="text-gradient">Qwen3-TTS</span> for
              macOS
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl"
            >
              QwenVoice is a native macOS app for Qwen3&#8209;TTS with custom
              voices, voice design, and voice cloning&nbsp;&mdash;&nbsp;running
              100% offline on Apple&nbsp;Silicon.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6">
              <Badge>
                <span
                  className="h-1.5 w-1.5 rounded-full bg-green-400"
                  aria-hidden="true"
                />
                Apple Silicon &middot; macOS 15+
              </Badge>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
            >
              <Button href={SITE.download}>
                <Download className="h-4 w-4" />
                Download Latest Release
              </Button>
              <Button href={SITE.github} variant="secondary">
                <Github className="h-4 w-4" />
                View on GitHub
              </Button>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="w-full">
            <ProductScreenshot
              src="/images/captures-1-2/raw/02-custom-voice-live-preview.png"
              alt="QwenVoice 1.2 Custom Voice full app window during live preview playback"
              width={1440}
              height={1224}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="mx-auto max-w-4xl"
              frameClassName="bg-[#08111f]"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
