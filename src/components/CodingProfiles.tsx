"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Code } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function CodingProfiles() {
  const profiles = [
    {
      platform: "LeetCode",
      username: "umeshdeshmukh926",
      link: "https://leetcode.com/u/umeshdeshmukh926/",
      stats: [
        { label: "Problems Solved", value: "235+" },
       
      ],
      icon: <Code className="w-8 h-8 text-yellow-500" />
    },
    {
      platform: "GeeksforGeeks",
      username: "Umesh deshmukh",
      link: "https://www.geeksforgeeks.org/profile/umeshdeshm7k0?tab=activity",
      stats: [
        { label: "Problems Solved", value: "35+" },
       
      ],
      icon: <Code className="w-8 h-8 text-yellow-500" />
    }
   
  
  ];

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-zinc-950">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Coding Profiles" 
          subtitle="Consistency, problem-solving, and community engagement." 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism rounded-2xl p-8 border border-slate-200 dark:border-zinc-800 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-teal-500" />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl glassmorphism flex items-center justify-center">
                  {profile.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{profile.platform}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">@{profile.username}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {profile.stats.map((stat, i) => (
                  <div key={i} className="bg-slate-100 dark:bg-zinc-800/50 p-4 rounded-xl">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</p>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <a href={profile.link} target="_blank" rel="noreferrer" className="absolute inset-0 z-10" aria-label={`Visit ${profile.platform} profile`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
