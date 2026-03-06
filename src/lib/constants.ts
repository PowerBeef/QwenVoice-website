export const SITE = {
  name: "QwenVoice",
  tagline: "Offline Qwen3-TTS for macOS",
  description:
    "A native macOS app for Qwen3-TTS with custom voices, voice design, and voice cloning, 100% offline on Apple Silicon.",
  github: "https://github.com/PowerBeef/QwenVoice",
  download:
    "https://github.com/PowerBeef/QwenVoice/releases/latest",
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
