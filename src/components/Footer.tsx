import { Github } from "lucide-react";
import { SITE } from "@/lib/constants";

const mlCredits = [
  { name: "Qwen3-TTS", desc: "Text-to-speech model by Alibaba", url: "https://huggingface.co/Qwen/Qwen3-TTS" },
  { name: "qwen3-tts-apple-silicon", desc: "Qwen3-TTS optimized for Apple Silicon", url: "https://github.com/kapi2800/qwen3-tts-apple-silicon" },
  { name: "GRDB.swift", desc: "SQLite toolkit for Swift", url: "https://github.com/groue/GRDB.swift" },
];

const appleCredits = [
  { name: "MLX", desc: "Apple's ML framework for Apple Silicon", url: "https://github.com/ml-explore/mlx" },
  { name: "mlx-audio", desc: "Audio processing toolkit for MLX", url: "https://github.com/Blaizzy/mlx-audio" },
  { name: "mlx-community", desc: "Community hub for MLX models", url: "https://huggingface.co/mlx-community" },
];

function CreditList({ items }: { items: typeof mlCredits }) {
  return (
    <ul className="space-y-3 text-xs">
      {items.map((project) => (
        <li key={project.name}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors hover:text-text-primary"
          >
            {project.name}
          </a>
          <span className="hidden sm:inline text-text-tertiary"> — {project.desc}</span>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-[auto_1px_1fr_1px_1fr] sm:gap-10">
          {/* Brand + Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">
              QwenVoice
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary transition-colors hover:text-text-primary"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={SITE.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary transition-colors hover:text-text-primary"
                >
                  Download Latest
                </a>
              </li>
              <li>
                <a
                  href={`${SITE.github}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary transition-colors hover:text-text-primary"
                >
                  Report Issues
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden sm:block self-stretch bg-white/[0.06]" />

          {/* AI & Speech */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">
              AI &amp; Speech
            </h4>
            <CreditList items={mlCredits} />
          </div>

          <div className="hidden sm:block self-stretch bg-white/[0.06]" />

          {/* Apple & Infrastructure */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">
              Apple &amp; MLX
            </h4>
            <CreditList items={appleCredits} />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} QwenVoice. MIT License.
          </p>
          <p className="text-xs text-text-tertiary">
            Made with care for the Mac community.
          </p>
        </div>
      </div>
    </footer>
  );
}
