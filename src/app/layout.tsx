import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QwenVoice — Your Voice Engine, Running Locally",
  description:
    "A native macOS app that runs Qwen3-TTS entirely offline on Apple Silicon. Custom voices, voice cloning, and natural language voice design — all private, all local.",
  openGraph: {
    title: "QwenVoice — Your Voice Engine, Running Locally",
    description:
      "Run Qwen3-TTS entirely offline on Apple Silicon. Custom voices, voice cloning, and natural language voice design.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QwenVoice — Text-to-Speech for Mac",
    description:
      "Run Qwen3-TTS entirely offline on Apple Silicon. Custom voices, voice cloning, and natural language voice design.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
