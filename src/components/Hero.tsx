"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile, type SectionKey } from "@/data/portfolio";
import { openAskAI } from "./AskAI";

type HeroProps = {
  onNavigate: (section: SectionKey) => void;
};

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbits */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] rounded-full border-[1px] border-slate-200 dark:border-white/5 absolute"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] rounded-full border-[1px] border-slate-200 dark:border-white/5 absolute"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 250, repeat: Infinity, ease: "linear" }}
          className="w-[1000px] h-[1000px] rounded-full border-[1px] border-slate-200 dark:border-white/5 absolute"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Portrait Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-10 w-[90%] max-w-[500px] mx-auto drop-shadow-2xl"
          >
            {/* The user's provided image already has the beautiful arch and graphical effects, so we just display it natively without masking it into a circle. */}
            <Image
              src="/umesh_image.png"
              alt="Umesh Deshmukh"
              width={320}
              height={480}
              priority
              className="w-full h-auto object-contain rounded-circle rounded-full"
            />
            
            {/* Small floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-4 md:bottom-8 md:-left-4 glassmorphism px-4 py-2 rounded-full flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300">Available for work</span>
            </motion.div>
          </motion.div>

          {/* Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white"
          >
            Umesh Deshmukh
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-medium text-teal-600 dark:text-teal-400 mb-6"
          >
            Full Stack Engineer · <span className="text-teal-gradient font-semibold">AI-powered products</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-8 flex flex-wrap items-center justify-center gap-3"
          >
            {["2 live apps · 50+ real users", "LLM tool calling + vision AI", "100+ automated tests", "235+ LeetCode"].map((badge) => (
              <span key={badge} className="px-4 py-1.5 rounded-full border border-slate-200/70 dark:border-white/10 bg-white/40 dark:bg-white/5 text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide">
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-6"
          >
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              I design, build and ship complete products: FastAPI and Spring Boot backends, React frontends, and AI features that do real work, from LLM agents that query live data to vision models that check documents and damage.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-10"
          >
            Python · Java · TypeScript <span className="mx-2 text-teal-500">{"//"}</span> Open Source Contributor
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => onNavigate("projects")}
              className="group flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full font-medium hover:scale-105 transition-all shadow-xl glow-teal"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={openAskAI}
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-medium border border-teal-500/40 bg-teal-500/10 text-teal-700 dark:text-teal-300 hover:bg-teal-500/20 transition-colors"
            >
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Ask my AI about me
            </button>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="px-8 py-4 glassmorphism text-slate-900 dark:text-white rounded-full font-medium hover:bg-slate-200/50 dark:hover:bg-zinc-800/50 transition-colors">
              Resume
            </a>
          </motion.div>
          
          {/* Social Links under Hero */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.8 }}
             className="mt-12 flex items-center gap-6"
          >
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
