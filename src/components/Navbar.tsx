"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { profile, sections, type SectionKey } from "@/data/portfolio";

type NavbarProps = {
  activeSection: SectionKey;
  onNavigate: (section: SectionKey) => void;
};

export function openCommandPalette() {
  window.dispatchEvent(new Event("open-command-palette"));
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "py-3 bg-[var(--background)]/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between gap-4">
        <button
          onClick={() => onNavigate("home")}
          className="text-2xl font-bold tracking-tighter flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center font-bold text-xl group-hover:glow-teal transition-all duration-300">
            UD
          </div>
          <span className="hidden sm:block lg:hidden xl:block whitespace-nowrap text-slate-900 dark:text-white font-medium">Umesh Deshmukh</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5">
          {sections.map((link) => (
            <button
              key={link.key}
              onClick={() => onNavigate(link.key)}
              className={`relative whitespace-nowrap text-sm font-medium transition-colors ${
                activeSection === link.key
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-600 hover:text-teal-500 dark:text-slate-300 dark:hover:text-teal-400"
              }`}
            >
              {link.name}
              {activeSection === link.key && (
                <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-teal-500" />
              )}
            </button>
          ))}
          <button
            onClick={openCommandPalette}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 dark:border-zinc-700 text-xs text-slate-500 dark:text-slate-400 hover:border-teal-500 transition-colors"
            aria-label="Open command palette"
          >
            <Search className="w-3.5 h-3.5" />
            <kbd className="font-sans whitespace-nowrap">Ctrl K</kbd>
          </button>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg glow-teal"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-1">
          <button onClick={openCommandPalette} className="p-2 text-slate-700 dark:text-slate-200" aria-label="Search">
            <Search size={22} />
          </button>
          <button
            className="text-slate-900 dark:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {sections.map((link) => (
                <button
                  key={link.key}
                  className={`text-left text-base font-medium py-3 border-b border-slate-100 dark:border-white/5 ${
                    activeSection === link.key ? "text-teal-600 dark:text-teal-400" : "text-slate-700 dark:text-slate-300"
                  }`}
                  onClick={() => {
                    onNavigate(link.key);
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </button>
              ))}
              <a href={profile.resume} target="_blank" rel="noreferrer" className="mt-3 text-center px-5 py-3 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium">
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
