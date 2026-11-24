"use client";

import { useState, useEffect, useRef } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the menu on outside click or Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const activeName = sections.find((s) => s.key === activeSection)?.name;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "py-3 bg-[var(--background)]/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-5xl px-6 flex items-center justify-between gap-4">
        <button
          onClick={() => onNavigate("home")}
          className="text-2xl font-bold tracking-tighter flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-orange-500 text-black hover:bg-orange-400 flex items-center justify-center font-bold text-xl group-hover:glow-orange transition-all duration-300">
            UD
          </div>
          <span className="hidden sm:block whitespace-nowrap text-slate-900 dark:text-white font-medium">Umesh Deshmukh</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={openCommandPalette}
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 dark:border-zinc-700 text-xs text-slate-500 dark:text-slate-400 hover:border-orange-500 transition-colors"
            aria-label="Open command palette"
          >
            <Search className="w-3.5 h-3.5" />
            <kbd className="font-sans whitespace-nowrap">Ctrl K</kbd>
          </button>
          <button onClick={openCommandPalette} className="sm:hidden p-2 text-slate-700 dark:text-slate-200" aria-label="Search">
            <Search size={20} />
          </button>

          {/* Sections menu */}
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                menuOpen
                  ? "border-orange-500 text-orange-400"
                  : "border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-200 hover:border-orange-500"
              }`}
              aria-expanded={menuOpen}
              aria-haspopup="menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span className="hidden sm:inline">{activeName ?? "Menu"}</span>
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.nav
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  role="menu"
                  className="absolute right-0 mt-3 w-56 p-2 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl"
                >
                  {sections.map((link) => (
                    <button
                      key={link.key}
                      role="menuitem"
                      onClick={() => {
                        onNavigate(link.key);
                        setMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left transition-colors ${
                        activeSection === link.key
                          ? "bg-orange-500/10 text-orange-600 dark:text-orange-400 font-semibold"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-900"
                      }`}
                    >
                      {link.name}
                      {activeSection === link.key && <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />}
                    </button>
                  ))}
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="sm:hidden mt-2 block text-center px-4 py-2.5 rounded-lg bg-orange-500 text-black hover:bg-orange-400 text-sm font-medium"
                  >
                    Resume
                  </a>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block px-5 py-2.5 rounded-full bg-orange-500 text-black hover:bg-orange-400 text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg glow-orange"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.header>
  );
}
