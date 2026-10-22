"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Database, Brain, Rocket } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Code2 className="w-8 h-8 text-teal-500" />,
      title: "End-to-end Ownership",
      description: "Design, backend, frontend, testing and deployment, done solo, for products real people use.",
    },
    {
      icon: <Database className="w-8 h-8 text-teal-500" />,
      title: "Backend that Enforces Rules",
      description: "FastAPI and Spring Boot APIs where business rules, privacy and timing live on the server, backed by automated tests.",
    },
    {
      icon: <Brain className="w-8 h-8 text-teal-500" />,
      title: "AI that Does Real Work",
      description: "LLM agents with tool calling, vision models for document and damage checks, and assistants scoped to what each user may see.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-teal-500" />,
      title: "Open Source Contributor",
      description: "Passionate about contributing to real-world engineering projects and collaborating with the community.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="I build things people use, and I use AI to build them better." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-slate-600 dark:text-slate-300"
          >
            <p>
              I&apos;m a <strong className="text-slate-900 dark:text-white font-semibold">Full Stack Engineer</strong> who ships complete products, not just features. I&apos;ve built and deployed platforms that real people use: an exam-prep app serving 50+ learners, a coaching platform for a real organisation, and an AI-powered bike rental marketplace.
            </p>
            <p>
              I work across <strong className="text-slate-900 dark:text-white font-semibold">Python/FastAPI, Java/Spring Boot and Node/Express</strong> on the backend and React on the frontend, and I care about the unglamorous parts too: server-enforced rules, migrations, load tests and 100+ automated tests across my projects.
            </p>
            <p>
              In the AI era, I treat <strong className="text-teal-600 dark:text-teal-400 font-semibold">LLMs as a building block</strong>: agents that call tools against live data, vision models that verify documents and detect damage, and assistants that respect privacy boundaries. I also build with AI coding tools daily to ship faster without lowering the bar.
            </p>
            <p>
              My foundation is <strong className="text-slate-900 dark:text-white font-semibold">DSA and problem solving</strong> (500+ challenges, 235+ on LeetCode), and I contribute to open source projects like OWASP Dependency-Check and FlowiseAI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glassmorphism p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
