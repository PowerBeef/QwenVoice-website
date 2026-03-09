"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Menu, X, Download } from "lucide-react";
import { NAV_LINKS, SITE, SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = Object.values(SECTION_IDS);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    toggleRef.current?.focus();
  }, []);

  const handleMobileKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    },
    [closeMobile]
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-bg-primary/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 font-semibold text-text-primary">
          <Image
            src="/images/app-icon.png"
            alt="QwenVoice"
            width={32}
            height={32}
            className="rounded-lg"
          />
          {SITE.name}
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-text-primary",
                activeSection === link.href.slice(1)
                  ? "text-accent"
                  : "text-text-secondary"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={SITE.download}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent-hover glow-accent"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary lg:hidden hover:bg-white/5"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onKeyDown={handleMobileKeyDown}
            className="overflow-hidden border-t border-white/[0.06] bg-bg-primary/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 sm:px-6 py-4">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMobile}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white/5 hover:text-text-primary",
                        activeSection === link.href.slice(1)
                          ? "text-accent"
                          : "text-text-secondary"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <hr className="my-2 border-white/[0.06]" />
              <a
                href={SITE.download}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-white"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
