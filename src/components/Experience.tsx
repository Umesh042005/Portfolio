"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Experience"
          subtitle="Where I've been shipping backend and AI features for real products."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* timeline rail */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-slate-200 dark:bg-zinc-800 hidden md:block" />

          <div className="space-y-10">
            {experience.map((role, i) => (
              <motion.div
                key={role.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-16"
              >
                <div className="hidden md:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/40 border border-teal-200 dark:border-teal-800 items-center justify-center">
                  <Briefcase className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>

                <div className="glassmorphism rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-zinc-800">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{role.title}</h3>
                      <p className="text-teal-600 dark:text-teal-400 font-semibold">{role.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400 md:justify-end md:text-right shrink-0">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" /> {role.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" /> {role.location}
                      </span>
                    </div>
                  </div>

                  {role.summary && <p className="text-slate-600 dark:text-slate-400 mb-6">{role.summary}</p>}

                  <div className={`grid gap-4 ${role.work.length > 1 ? "mt-6" : "mt-4"}`}>
                    {role.work.map((w) => (
                      <div
                        key={w.name}
                        className="rounded-2xl p-5 bg-slate-50/70 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            {w.name}
                            <span className="ml-2 text-sm font-medium text-slate-500 dark:text-slate-400">{w.tagline}</span>
                          </h4>
                          {w.link && (
                            <a
                              href={w.link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                            >
                              {w.link.label} <ArrowUpRight className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <ul className="space-y-2 mb-4">
                          {w.points.map((pt) => (
                            <li key={pt} className="flex gap-2 text-sm md:text-base text-slate-600 dark:text-slate-300">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {w.stack.map((s) => (
                            <span
                              key={s}
                              className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-xs font-semibold text-slate-600 dark:text-slate-300"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
