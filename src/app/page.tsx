"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import CodingProfiles from "@/components/CodingProfiles";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import CommandPalette from "@/components/CommandPalette";
import AskAI from "@/components/AskAI";
import { sections, type SectionKey } from "@/data/portfolio";

const validKeys = new Set<string>(["home", ...sections.map((s) => s.key)]);

function sectionFromHash(): SectionKey {
  const key = window.location.hash.slice(1);
  return validKeys.has(key) ? (key as SectionKey) : "home";
}

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

export default function Home() {
  // One section at a time, driven by the URL hash so sections stay linkable and the back button works.
  const activeSection = useSyncExternalStore(subscribeToHash, sectionFromHash, () => "home" as SectionKey);
  // Element to scroll to once the newly shown section has rendered (e.g. one project card).
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null);

  const navigate = useCallback((section: SectionKey, anchorId?: string) => {
    setPendingAnchor(anchorId ?? null);
    if (sectionFromHash() !== section) {
      history.pushState(null, "", section === "home" ? window.location.pathname : `#${section}`);
      // pushState doesn't fire hashchange, so notify the store ourselves.
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
    if (!anchorId) window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!pendingAnchor) return;
    const timer = setTimeout(() => {
      document.getElementById(pendingAnchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
      setPendingAnchor(null);
    }, 350);
    return () => clearTimeout(timer);
  }, [pendingAnchor, activeSection]);

  const content = {
    home: <Hero onNavigate={navigate} />,
    about: <About />,
    experience: <Experience />,
    skills: <Skills />,
    projects: <Projects />,
    opensource: <OpenSource />,
    codingprofiles: <CodingProfiles />,
    certifications: <Certifications />,
    contact: <Contact />,
  } satisfies Record<SectionKey, React.ReactNode>;

  return (
    <div className="relative min-h-screen w-full">
      <Navbar activeSection={activeSection} onNavigate={navigate} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25 }}
          className={activeSection === "home" ? "" : "pt-16 min-h-screen"}
        >
          {content[activeSection]}
        </motion.div>
      </AnimatePresence>

      {activeSection !== "home" && (
        <footer className="py-8 bg-slate-950 text-slate-400 text-center text-sm border-t border-slate-900">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Umesh Deshmukh. All rights reserved.</p>
            <p>
              Built with <span className="text-orange-500 font-semibold">Next.js</span>,{" "}
              <span className="text-orange-500 font-semibold">Tailwind CSS</span> & an{" "}
              <span className="text-orange-500 font-semibold">LLM-powered assistant</span> · Press{" "}
              <kbd className="px-1.5 py-0.5 rounded border border-slate-700 text-slate-300 text-xs">Ctrl K</kbd>
            </p>
          </div>
        </footer>
      )}

      <CommandPalette onNavigate={navigate} />
      <AskAI />
    </div>
  );
}
