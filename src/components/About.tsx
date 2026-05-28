"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Database, Brain, Rocket } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Code2 className="w-8 h-8 text-teal-500" />,
      title: "Full Stack Development",
      description: "Building end-to-end applications with modern technologies like React, Next.js, and Java Spring Boot.",
    },
    {
      icon: <Database className="w-8 h-8 text-teal-500" />,
      title: "Scalable Backend Systems",
      description: "Designing robust APIs and microservices handling complex business logic and database management.",
    },
    {
      icon: <Brain className="w-8 h-8 text-teal-500" />,
      title: "AI Workflows & RAG",
      description: "Integrating AI models, designing prompt pipelines, and building Retrieval-Augmented Generation systems.",
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
          subtitle="A passionate engineer focused on building impactful software solutions." 
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
              I am a <strong className="text-slate-900 dark:text-white font-semibold">Full Stack Developer</strong> with a strong foundation in building scalable applications. I enjoy working across the entire stack, from crafting beautiful user interfaces with React and Next.js to designing resilient backend architectures with Java, Spring Boot, and Node.js.
            </p>
            <p>
              Alongside development, I have built a strong <strong className="text-slate-900 dark:text-white font-semibold">problem-solving mindset through DSA and Competitive Programming</strong>. Solving 500+ coding challenges across platforms, including 235+ on LeetCode, has sharpened my approach to writing efficient, optimized, and production-ready code.
            </p>
            <p>
              My focus extends beyond traditional web development. I am deeply interested in <strong className="text-teal-600 dark:text-teal-400 font-semibold">AI Workflows and Retrieval-Augmented Generation (RAG)</strong>, continuously exploring how to integrate modern AI capabilities into real-world systems.
            </p>
            <p>
              With a passion for <strong className="text-slate-900 dark:text-white font-semibold">open-source contribution</strong>, I actively collaborate on projects like OWASP Dependency-Check and FlowiseAI, pushing boundaries and solving complex engineering challenges.
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
