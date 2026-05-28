"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, CheckCircle } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      title: "ServiceNow Certified System Administrator",
      issuer: "ServiceNow",
     
      skills: ["ITSM", "Workflows", "Platform Administration"],
      link: "https://drive.google.com/file/d/1uRXtVrmtRhHoZZc2_bHK6g0Sfs6cnXUY/view?usp=drive_link"
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      
      skills: ["Cloud Concepts", "Azure Services", "Security"],
      link: "https://drive.google.com/file/d/1QLj_iX-JH2zF0aySglq-QcjU7VRe51vj/view?usp=drive_link"
    },
    {
      title: "TechSaksham Internship",
      issuer: "Microsoft & SAP",
      
      skills: ["AI Fundamentals", "Cloud Computing", "Project Development"],
      link: "https://drive.google.com/file/d/1K24sb2AVXtsltkTMlRIfgVqhOtaLDSkp/view?usp=drive_link"
    },
    {
      title: "Java full stack developer",
      issuer: "Wipro talentNext",
      
      skills: ["Java", "Spring Boot", "React", "MySQL", "Docker", "CI/CD"],
      link: "https://drive.google.com/file/d/1PfUZHe1zh2i1wGey67mYyGU683P903y_/view?usp=drive_link"
    },
    {
      title: "AWS Cloud foundations",
      issuer: "AWS academy",
      
      skills: ["AWS", "Cloud Computing", "AWS Services"],
      link: "https://drive.google.com/file/d/13F_ase1UEExZ5c5-I2D0ussO9XAe3HJN/view?usp=sharing"
    }
  

  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Certifications" 
          subtitle="Continuous learning and professional recognition." 
        />

        <div className="max-w-5xl mx-auto mt-16 space-y-6">
          {certs.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-xl hover:border-teal-500/30 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                    <span>{cert.issuer}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                    
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 md:justify-end w-full md:w-auto mt-4 md:mt-0">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border border-teal-100 dark:border-teal-800/50">
                    <CheckCircle className="w-3 h-3" /> {skill}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
