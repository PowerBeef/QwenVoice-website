export const SITE = {
  name: "QwenVoice",
  tagline: "Your Voice Engine, Running Locally",
  description:
    "A native macOS app for voice cloning, emotion control, and natural language voice design — powered by Qwen3-TTS, entirely offline on Apple Silicon.",
  github: "https://github.com/nicepkg/QwenVoice",
  download:
    "https://github.com/nicepkg/QwenVoice/releases/latest",
  version: "1.0.0",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Tech", href: "#tech" },
  { label: "Requirements", href: "#requirements" },
] as const;

export const SECTION_IDS = {
  hero: "hero",
  features: "features",
  howItWorks: "how-it-works",
  tech: "tech",
  requirements: "requirements",
  download: "download",
} as const;
