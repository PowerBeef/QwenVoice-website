"use client";

import { motion } from "framer-motion";
import { Download, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SECTION_IDS, SITE } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-32 pb-20"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="orb orb-blue -left-40 -top-40" />
        <div className="orb orb-purple right-[-10%] top-[20%]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl"
        >
          Offline <span className="text-gradient">Qwen3-TTS</span> for macOS
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl"
        >
          QwenVoice is a native macOS app for Qwen3&#8209;TTS with custom
          voices, voice design, and voice cloning&nbsp;&mdash;&nbsp;running
          100% offline on Apple&nbsp;Silicon.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-6">
          <Badge>
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" aria-hidden="true" />
            Apple Silicon &middot; macOS 15+
          </Badge>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button href={SITE.download}>
            <Download className="h-4 w-4" />
            Download Latest Release
          </Button>
          <Button href={SITE.github} variant="secondary">
            <Github className="h-4 w-4" />
            View on GitHub
          </Button>
        </motion.div>

        {/* App mockup */}
        <motion.div
          variants={fadeUp}
          className="mt-12 w-full max-w-3xl"
        >
          <div className="overflow-hidden rounded-xl border border-white/[0.08] shadow-2xl shadow-black/50">
            <Image
              src="/images/screenshot-custom-voice.png"
              alt="QwenVoice app screenshot showing the Custom Voice interface"
              width={1936}
              height={1758}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
