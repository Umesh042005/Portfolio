"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Play } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

export default function Projects() {
  const projects: {
    title: string;
    type: string;
    description: string;
    image: string;
    features: string[];
    links: { github?: string; demo?: string; video?: string };
  }[] = [
    {
      title: "MP Police Prep 2026",
      type: "Exam Practice Platform · Solo Full Stack",
      description: "A free, Hindi-first, mobile-first web app that helps students prepare for the MP Police Constable (GD) exam, used by 50+ learners within weeks of launch. Offers full mock tests on the real exam pattern with a server-side timer and auto-submit, 200+ official MPESB previous year questions, topic-wise practice, daily challenges and weak-topic reports. Exam rules are enforced in code, backed by 70+ automated tests, and the whole stack runs at ₹0/month on free tiers.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1970&auto=format&fit=crop",
      features: ["React 19 + Vite", "FastAPI (async)", "PostgreSQL + Alembic", "Server-side Timer", "Admin Panel", "Installable PWA", "70+ Tests"],
      links: {
        demo: "https://mp-police-prep.vercel.app"
      }
    },
    {
      title: "Ekagra",
      type: "Meditation, Mentorship & Dance Learning Platform · Solo Full Stack",
      description: "A calm, distraction-free web app built for a real coaching organisation, replacing WhatsApp groups with one place for schedules, Zoom links, reminders and attendance. Role-based dashboards for students, mentors, a dance teacher and an admin; group and 1:1 scheduling with repeating series, mentor rotation and conflict detection that skips only clashing dates; and an AI assistant that answers schedule questions using only the data each user is allowed to see. Privacy is enforced in the API and covered by 35 automated tests.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1970&auto=format&fit=crop",
      features: ["React + Vite", "FastAPI + Pydantic", "Supabase (Postgres + Auth)", "Role-based Dashboards", "Conflict Detection", "AI Assistant (Ollama)", "35 Tests"],
      links: {}
    },
    {
      title: "RydZO",
      type: "AI-powered Peer-to-Peer Bike Rental Platform",
      description: "A full-stack marketplace where bike owners rent out their two-wheelers to verified riders. Riders sign up with Google, upload their licence and ID at their first booking, accept a digital rental agreement, and the owner hands over the bike only after admin approval. AI helps at every step: writing listings and suggesting prices, a chat assistant that searches live listings via tool calling, reading KYC documents to flag mismatches, and comparing return photos to detect damage and estimate repair cost.",
      image: "https://images.unsplash.com/photo-1630547752213-af38cfb722bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGJpa2VzJTIwaGVsbWV0fGVufDB8fDB8fHww",
      features: ["MERN Stack", "JWT + Google OAuth", "RBAC (Rider/Owner/Admin)", "KYC Approval Workflow", "AI Damage & Document Checks", "Ollama Cloud LLMs", "Maps & Analytics"],
      links: {
        github: "https://github.com/Umesh042005/RydZO",
        demo: "https://rydzo.vercel.app/",
        video: "https://www.linkedin.com/feed/update/urn:li:activity:7421088557777412096/"
      }
    },
    {
      title: "MyNewHome",
      type: "Property Selling Platform",
      description: "A full-stack property selling platform leveraging a Spring Boot backend and React frontend. Implements secure JWT authentication, sophisticated role-based access, and comprehensive property listing features with advanced search and filtering capabilities.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
      features: ["Spring Boot backend", "JWT Authentication", "Role-based Access", "Property Listings", "Search & Filtering", "React Frontend"],
      links: {
        github: "https://github.com/Umesh042005/PropertySellingWebsite-MyNewHome",
        
        video: "https://www.linkedin.com/feed/update/urn:li:activity:7401107237538082816/"
      }
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Showcasing deep engineering and scalable architecture." 
        />

        <div className="mt-16 space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden group aspect-[4/3] shadow-2xl">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <p className="text-teal-600 dark:text-teal-400 font-bold tracking-wider text-sm uppercase mb-2">
                    {project.type}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <div className="glassmorphism p-6 rounded-xl relative z-20 md:-ml-12 lg:ml-0 backdrop-blur-md">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  {project.links.github && (
                    <a href={project.links.github} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium hover:scale-105 transition-transform">
                      <FaGithub className="w-4 h-4" /> GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {project.links.video && (
                    <a href={project.links.video} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-teal-600 dark:text-teal-400 font-medium hover:underline">
                      <Play className="w-4 h-4" /> Watch Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
