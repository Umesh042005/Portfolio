"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", section: "home" },
  { name: "About", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Coding Profiles", section: "codingprofiles" },
  { name: "Open Source", section: "opensource" },
  { name: "Projects", section: "projects" },
  { name: "Certifications", section: "certifications" },
  { name: "Contact", section: "contact" },

];

type SectionKey =
  | "home"
  | "about"
  | "skills"
  | "opensource"
  | "projects"
  | "codingprofiles"
  | "certifications"
  | "contact"
  

type NavbarProps = {
  activeSection: SectionKey;
  onNavigate: (section: SectionKey) => void;
};

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 bg-transparent `}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="text-2xl font-bold tracking-tighter flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center font-bold text-xl group-hover:glow-teal transition-all duration-300">
            UD
          </div>
          <span className="hidden sm:block text-slate-900 dark:text-white font-medium">Umesh Deshmukh</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => onNavigate(link.section as SectionKey)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.section
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-600 hover:text-teal-500 dark:text-slate-300 dark:hover:text-teal-400"
              }`}
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/10_4loxPYqFDSW17xtM-wLBApyHGl89jl/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg glow-teal"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900 dark:text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glassmorphism border-t border-slate-200 dark:border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className={`text-left text-base font-medium py-2 border-b border-slate-100 dark:border-white/5 ${
                    activeSection === link.section
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                  onClick={() => {
                    onNavigate(link.section as SectionKey);
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
