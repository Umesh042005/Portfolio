"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import CodingProfiles from "@/components/CodingProfiles";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

type SectionKey =
  | "home"
  | "about"
  | "skills"
  | "opensource"
  | "projects"
  | "codingprofiles"
  | "certifications"
  | "contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  const renderedSection = useMemo(() => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "opensource":
        return <OpenSource />;
      case "projects":
        return <Projects />;
      case "codingprofiles":
        return <CodingProfiles />;
      case "certifications":
        return <Certifications />;
      case "contact":
        return <Contact />;
      case "home":
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  }, [activeSection]);

  return (
    <div className="relative min-h-screen w-full">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      {renderedSection}

      {activeSection !== "home" && (
        <footer className="py-8 bg-slate-950 text-slate-400 text-center text-sm border-t border-slate-900">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Umesh Deshmukh. All rights reserved.</p>
            <p>
              Designed & Built with <span className="text-teal-500 font-semibold">Next.js</span> &{" "}
              <span className="text-teal-500 font-semibold">Tailwind CSS</span>
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}
