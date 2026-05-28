"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Play } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "RydZO",
      type: "Bike Rental Marketplace Platform",
      description: "A comprehensive rental marketplace platform built with the MERN stack. Features advanced JWT authentication, Role-Based Access Control (RBAC), and secure REST APIs. Integrated with Cloudinary for asset management and implements a complete end-to-end booking workflow.",
      image: "/Screenshot 2026-05-28 155822.png",
      features: ["JWT Authentication", "RBAC System", "Cloudinary Integration", "Booking Workflow", "Secure REST APIs", "Responsive UI"],
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
                  <a href={project.links.github} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium hover:scale-105 transition-transform">
                    <FaGithub className="w-4 h-4" /> GitHub
                  </a>
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
