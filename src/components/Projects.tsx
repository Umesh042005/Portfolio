"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Play, ChevronDown, ArrowRight, Wrench } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      id={`project-${project.slug}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`scroll-mt-24 flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <a
          href={project.links.demo ?? project.links.github ?? undefined}
          target="_blank"
          rel="noreferrer"
          className="block relative rounded-2xl overflow-hidden group aspect-[4/3] shadow-2xl"
        >
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none" />
          {project.links.demo && (
            <span className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 text-white text-xs font-semibold backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
            </span>
          )}
        </a>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-5">
        <div>
          <p className="text-teal-600 dark:text-teal-400 font-bold tracking-wider text-sm uppercase mb-2">{project.type}</p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">{project.title}</h3>
        </div>

        {project.impact && (
          <div className="flex flex-wrap gap-2">
            {project.impact.map((item) => (
              <span key={item} className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="glassmorphism p-6 rounded-xl relative z-20 backdrop-blur-md">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
        </div>

        {/* Architecture flow */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          {project.architecture.map((node, i) => (
            <span key={node} className="flex items-center gap-1.5">
              <span className="px-2.5 py-1 rounded-md border border-slate-200 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 text-slate-700 dark:text-slate-300">
                {node}
              </span>
              {i < project.architecture.length - 1 && <ArrowRight className="w-3 h-3 text-teal-500" />}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.features.map((feature) => (
            <span key={feature} className="px-3 py-1 text-xs font-semibold rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300">
              {feature}
            </span>
          ))}
        </div>

        {/* Engineering decisions */}
        <div className="rounded-xl border border-slate-200 dark:border-zinc-800 overflow-hidden">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors"
            aria-expanded={open}
          >
            <span className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-teal-500" /> How I built it
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-4 overflow-hidden"
              >
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 py-2 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-zinc-800/60">
                    <span className="text-teal-500 mt-0.5">▹</span>
                    {h}
                  </li>
                ))}
                <li className="h-2" />
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium hover:scale-105 transition-transform">
              <FaGithub className="w-4 h-4" /> GitHub
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
          {project.links.video && (
            <a href={project.links.video} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full text-teal-600 dark:text-teal-400 font-medium hover:underline">
              <Play className="w-4 h-4" /> Watch Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Shipped products with real users, real constraints and AI where it actually helps."
        />

        <div className="mt-16 space-y-28">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
