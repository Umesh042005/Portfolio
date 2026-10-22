"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Hash, FolderGit2, Sparkles, FileText, Mail, CornerDownLeft } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile, projects, sections, type SectionKey } from "@/data/portfolio";
import { openAskAI } from "./AskAI";

type Command = { id: string; label: string; group: string; icon: ReactNode; run: () => void };

export default function CommandPalette({ onNavigate }: { onNavigate: (section: SectionKey) => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useMemo<Command[]>(() => {
    const openUrl = (url: string) => () => window.open(url, "_blank", "noopener");
    return [
      { id: "ai", label: "Ask AI about Umesh", group: "Actions", icon: <Sparkles className="w-4 h-4" />, run: openAskAI },
      { id: "resume", label: "Open resume", group: "Actions", icon: <FileText className="w-4 h-4" />, run: openUrl(profile.resume) },
      { id: "email", label: `Email ${profile.email}`, group: "Actions", icon: <Mail className="w-4 h-4" />, run: () => (window.location.href = `mailto:${profile.email}`) },
      ...projects.map((p) => ({
        id: `p-${p.slug}`,
        label: `${p.title} — ${p.type.split(" · ")[0]}`,
        group: "Projects",
        icon: <FolderGit2 className="w-4 h-4" />,
        run: () => document.getElementById(`project-${p.slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" }),
      })),
      ...sections.map((s) => ({ id: `s-${s.key}`, label: s.name, group: "Sections", icon: <Hash className="w-4 h-4" />, run: () => onNavigate(s.key) })),
      { id: "github", label: "GitHub profile", group: "Links", icon: <FaGithub className="w-4 h-4" />, run: openUrl(profile.github) },
      { id: "linkedin", label: "LinkedIn profile", group: "Links", icon: <FaLinkedin className="w-4 h-4" />, run: openUrl(profile.linkedin) },
    ];
  }, [onNavigate]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return q ? commands.filter((c) => `${c.label} ${c.group}`.toLowerCase().includes(q)) : commands;
  }, [commands, query]);

  const close = () => {
    setOpen(false);
    setQuery("");
    setActive(0);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setQuery("");
        setActive(0);
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        close();
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const runCommand = (cmd: Command | undefined) => {
    if (!cmd) return;
    close();
    cmd.run();
  };

  let lastGroup = "";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-slate-950/40 backdrop-blur-sm flex items-start justify-center pt-[12vh] px-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl"
            role="dialog"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 px-4 border-b border-slate-200 dark:border-zinc-800">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((a) => Math.min(a + 1, filtered.length - 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((a) => Math.max(a - 1, 0));
                  } else if (e.key === "Enter") {
                    runCommand(filtered[active]);
                  }
                }}
                placeholder="Jump to a project, section or link…"
                className="flex-1 py-4 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
              />
              <kbd className="text-[10px] px-1.5 py-0.5 rounded border border-slate-200 dark:border-zinc-700 text-slate-400">ESC</kbd>
            </div>

            <div className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 && <p className="px-3 py-6 text-center text-sm text-slate-500">No results</p>}
              {filtered.map((cmd, i) => {
                const header = cmd.group !== lastGroup ? cmd.group : null;
                lastGroup = cmd.group;
                return (
                  <div key={cmd.id}>
                    {header && <p className="px-3 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">{header}</p>}
                    <button
                      onMouseMove={() => setActive(i)}
                      onClick={() => runCommand(cmd)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-colors ${
                        i === active ? "bg-teal-500/10 text-teal-700 dark:text-teal-300" : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <span className="text-slate-400">{cmd.icon}</span>
                      <span className="flex-1">{cmd.label}</span>
                      {i === active && <CornerDownLeft className="w-3.5 h-3.5 opacity-60" />}
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
