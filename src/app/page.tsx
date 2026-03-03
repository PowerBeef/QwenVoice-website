import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TechHighlights } from "@/components/sections/TechHighlights";
import { Requirements } from "@/components/sections/Requirements";
import { DownloadCTA } from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TechHighlights />
        <Requirements />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
