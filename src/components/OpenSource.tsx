"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GitPullRequest, GitMerge, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function OpenSource() {
  const contributions = [
    {
      project: "OWASP Dependency-Check",
      description: "Contributed to the core engine, improving vulnerability detection and reducing false positives in enterprise environments.",
      status: "merged",
      stars: "4.5k",
      type: "Feature Implementation",
      link: "https://github.com/pulls?q=is%3Apr+author%3AUmesh042005+archived%3Afalse+is%3Aclosed"
    },
    {
      project: "FlowiseAI",
      description: "Added new node integrations for RAG pipelines, enhancing the drag-and-drop LLM builder capabilities.",
      status: "merged",
      stars: "22k",
      type: "Integration",
    }

  ];

  return (
    <section id="opensource" className="py-24 relative bg-slate-100 dark:bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Open Source" 
          subtitle="Giving back to the community and building alongside global engineering teams." 
        />

        <div className="max-w-4xl mx-auto mt-16">
          <div className="glassmorphism rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-zinc-800">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-zinc-800">
              <FaGithub className="w-10 h-10 text-slate-900 dark:text-white" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">GitHub Contributions</h3>
                <p className="text-slate-600 dark:text-slate-400">Highlighting merged and active PRs</p>
              </div>
            </div>

            <div className="space-y-8">
              {contributions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl hover:bg-slate-50/50 dark:hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-zinc-700"
                >
                  <div className="flex-shrink-0 mt-1">
                    {item.status === "merged" ? (
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <GitMerge className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <GitPullRequest className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {item.project}
                      </h4>
                      <div className="flex items-center gap-4 text-sm font-medium">
                        <span className="flex items-center gap-1 text-slate-500">
                          <Star className="w-4 h-4" /> {item.stars}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          item.status === "merged" 
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                        }`}>
                          {item.status === "merged" ? "Merged" : "Open"}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {item.description}
                    </p>
                    <div className="inline-block px-3 py-1 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-400 text-xs font-semibold">
                      {item.type}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-zinc-800 text-center">
              <a href="https://github.com/Umesh042005" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:underline">
                View all GitHub Activity <GitPullRequest className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
