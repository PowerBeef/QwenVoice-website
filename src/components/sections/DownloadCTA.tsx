"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { SITE, SECTION_IDS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function DownloadCTA() {
  return (
    <section id={SECTION_IDS.download} className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center text-center"
        >
          {/* App icon with glow */}
          <motion.div
            variants={fadeUp}
            className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl glow-accent-strong"
          >
            <Image
              src="/images/app-icon.png"
              alt="QwenVoice"
              width={96}
              height={96}
              className="rounded-3xl"
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-10 max-w-xl text-lg text-text-secondary"
          >
            Download QwenVoice and start generating natural, expressive speech
            entirely on your Mac — no internet required.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mb-12 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href={SITE.download} variant="primary">
              <Download className="h-4 w-4" />
              Download for Mac
            </Button>
            <Button href={SITE.github} variant="secondary">
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="w-full max-w-lg">
            <p className="mb-3 text-xs text-text-tertiary">
              After downloading, remove the quarantine flag:
            </p>
            <CodeBlock code="xattr -cr /Applications/QwenVoice.app" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
