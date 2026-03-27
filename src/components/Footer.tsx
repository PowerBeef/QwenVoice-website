import { Github } from "lucide-react";
import { SITE } from "@/lib/constants";

const projectLinks = [
  { name: "GitHub", desc: "Browse the upstream repository", url: SITE.github },
  { name: "Releases", desc: "Download the latest DMG builds", url: SITE.download },
  { name: "Issues", desc: "Report bugs or follow app changes", url: `${SITE.github}/issues` },
];

const docsLinks = [
  { name: "README", desc: "End-user overview and install notes", url: `${SITE.github}/blob/main/README.md` },
  { name: "Tone Guide", desc: "Instruction writing guidance for the shipped app", url: `${SITE.github}/blob/main/qwen_tone.md` },
  { name: "CLI Companion", desc: "Standalone scripted workflow docs", url: `${SITE.github}/blob/main/cli/README.md` },
];

const stackCredits = [
  { name: "Qwen3-TTS", desc: "Core text-to-speech model family", url: "https://github.com/QwenLM/Qwen3-TTS" },
  { name: "MLX", desc: "Apple Silicon ML framework", url: "https://github.com/ml-explore/mlx" },
  { name: "mlx-audio", desc: "Audio tooling used in the backend", url: "https://github.com/Blaizzy/mlx-audio" },
  { name: "GRDB.swift", desc: "SQLite toolkit for local history", url: "https://github.com/groue/GRDB.swift" },
];

function LinkList({ items, className }: { items: readonly { name: string; desc: string; url: string }[]; className?: string }) {
  return (
    <ul className={className ?? "space-y-3 text-xs"}>
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
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6 sm:pb-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-[auto_1px_1fr_1px_1fr] sm:gap-10">
          {/* Brand + Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-primary">
              Project
            </h3>
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
            </ul>
            <div className="mt-3">
              <LinkList items={projectLinks.slice(1)} />
            </div>
          </div>

          <div className="hidden sm:block self-stretch bg-white/[0.06]" aria-hidden="true" />

          {/* Docs */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-primary">
              Documentation
            </h3>
            <LinkList items={docsLinks} />
          </div>

          <div className="hidden sm:block self-stretch bg-white/[0.06]" aria-hidden="true" />

          {/* Stack */}
          <div className="col-span-2 border-t border-white/[0.06] pt-6 sm:col-span-1 sm:border-t-0 sm:pt-0">
            <h3 className="mb-4 text-sm font-semibold text-text-primary">
              Built With
            </h3>
            <LinkList items={stackCredits} className="space-y-3 text-xs" />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} QwenVoice website.
          </p>
          <p className="text-xs text-text-tertiary">
            Release notes and app documentation live in the upstream GitHub repo.
          </p>
        </div>
      </div>
    </footer>
  );
}
