"use client";

import { useCallback, useEffect, useState } from "react";
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

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  // Scroll spy: highlight whichever section is crossing the middle of the viewport.
  useEffect(() => {
    const ids: SectionKey[] = ["home", ...sections.map((s) => s.key)];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id as SectionKey);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Smooth-scroll to a section, or to a specific element inside it (e.g. one project card).
  const navigate = useCallback((section: SectionKey, anchorId?: string) => {
    document.getElementById(anchorId ?? section)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <Navbar activeSection={activeSection} onNavigate={navigate} />
      <Hero onNavigate={navigate} />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <OpenSource />
      <CodingProfiles />
      <Certifications />
      <Contact />

      <footer className="py-8 bg-slate-950 text-slate-400 text-center text-sm border-t border-slate-900">
        <div className="mx-auto w-full max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Umesh Deshmukh. All rights reserved.</p>
          <p>
            Built with <span className="text-orange-500 font-semibold">Next.js</span>,{" "}
            <span className="text-orange-500 font-semibold">Tailwind CSS</span> & an{" "}
            <span className="text-orange-500 font-semibold">LLM-powered assistant</span> · Press{" "}
            <kbd className="px-1.5 py-0.5 rounded border border-slate-700 text-slate-300 text-xs">Ctrl K</kbd>
          </p>
        </div>
      </footer>

      <CommandPalette onNavigate={navigate} />
      <AskAI />
    </div>
  );
}
