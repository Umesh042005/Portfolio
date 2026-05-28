"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT", "Hibernate", "Microservices"],
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["Docker", "CI/CD", "Azure", "Render", "Vercel"],
    },
    {
      title: "AI & Modern Tech",
      skills: ["AI Workflows", "RAG Systems", "AI Automation", "Prompt Engineering"],
    },
    {
      title: "Core & Tools",
      skills: ["Git & GitHub", "OOP", "DBMS", "DSA", "Postman", "Maven"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="A comprehensive toolkit for building modern software." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-zinc-800 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 text-sm font-medium rounded-full glassmorphism text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-zinc-700 shadow-sm hover:shadow-md hover:border-teal-400 dark:hover:border-teal-500 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
