// Single source of truth for portfolio content.
// Used by the page sections, the command palette and the "Ask my portfolio" AI assistant.

export type SectionKey =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "opensource"
  | "codingprofiles"
  | "certifications"
  | "contact";

export const sections: { key: SectionKey; name: string }[] = [
  { key: "about", name: "About" },
  { key: "skills", name: "Skills" },
  { key: "projects", name: "Projects" },
  { key: "opensource", name: "Open Source" },
  { key: "codingprofiles", name: "Coding Profiles" },
  { key: "certifications", name: "Certifications" },
  { key: "contact", name: "Contact" },
];

export const profile = {
  name: "Umesh Deshmukh",
  role: "Full Stack Engineer building AI-powered products",
  email: "umeshdeshmukh926@gmail.com",
  github: "https://github.com/Umesh042005",
  linkedin: "https://www.linkedin.com/in/umesh-deshmukh2005/",
  resume: "https://drive.google.com/file/d/10_4loxPYqFDSW17xtM-wLBApyHGl89jl/view?usp=drive_link",
  leetcode: "https://leetcode.com/u/umeshdeshmukh926/",
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  image: string;
  features: string[];
  /** Request flow shown as a mini architecture diagram. */
  architecture: string[];
  /** Hard numbers that prove the project is real. */
  impact?: string[];
  /** Short engineering decisions worth talking about in an interview. */
  highlights: string[];
  links: { github?: string; demo?: string; video?: string };
};

export const projects: Project[] = [
  {
    slug: "mp-police-prep",
    title: "MP Police Prep 2026",
    type: "Exam Practice Platform · Solo Full Stack",
    description:
      "A free, Hindi-first, mobile-first web app that helps students prepare for the MP Police Constable (GD) exam, used by 50+ learners within weeks of launch. Full mock tests on the real exam pattern with a server-side timer and auto-submit, 200+ official MPESB previous year questions, topic-wise practice, daily challenges and weak-topic reports, plus an admin panel for bulk question import and mock-test building.",
    image: "/projects/mp-police-prep.png",
    features: ["React 19 + Vite", "FastAPI (async)", "SQLAlchemy 2", "PostgreSQL + Alembic", "Installable PWA", "pytest · Vitest · Locust"],
    architecture: ["React PWA", "FastAPI", "PostgreSQL", "Vercel · Render · Supabase"],
    impact: ["50+ learners", "200+ PYQs", "70+ tests", "₹0/month"],
    highlights: [
      "Exam rules enforced in code: a mock can't be published unless it matches the official 40/30/30 section split",
      "120-minute timer runs on the server, so refreshing or tampering can't buy extra time; tests auto-submit on expiry",
      "Load-tested with Locust and deployed end-to-end on free tiers",
    ],
    links: { demo: "https://mp-police-prep.vercel.app" },
  },
  {
    slug: "ekagra",
    title: "Ekagra",
    type: "Meditation, Mentorship & Dance Learning Platform · Solo Full Stack",
    description:
      "A calm, distraction-free web app built for a real coaching organisation, replacing WhatsApp groups with one place for schedules, Zoom links, reminders and attendance. Role-based dashboards for students, mentors, a dance teacher and an admin; group and 1:1 scheduling with repeating series and mentor rotation; and an AI assistant that answers schedule questions using only the data each user is allowed to see.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1970&auto=format&fit=crop",
    features: ["React + Vite", "FastAPI + Pydantic", "Supabase (Postgres + Auth)", "Role-based Dashboards", "AI Assistant (Ollama)", "unittest"],
    architecture: ["React", "FastAPI", "Supabase Auth + Postgres", "Ollama Cloud LLM"],
    impact: ["4 user roles", "35 tests", "Real organisation"],
    highlights: [
      "Conflict detection checks every class date for overlaps and skips only the clashing dates instead of rejecting the series",
      "Rolling 2-week booking window: ongoing series top themselves up and new students join open group classes",
      "AI assistant is privacy-scoped: it only sees data the asking user is allowed to see, enforced in the API",
    ],
    links: {},
  },
  {
    slug: "rydzo",
    title: "RydZO",
    type: "AI-powered Peer-to-Peer Bike Rental Platform",
    description:
      "A full-stack marketplace where bike owners rent out their two-wheelers to verified riders. Riders sign up with Google, upload their licence and ID at their first booking, accept a digital rental agreement, and the owner hands over the bike only after admin approval. AI helps at every step: writing listings and suggesting prices, a chat assistant that searches live listings via tool calling, reading KYC documents to flag mismatches, and comparing return photos to detect damage and estimate repair cost.",
    image: "/projects/rydzo.png",
    features: ["MERN Stack", "JWT + Google OAuth", "RBAC (Rider/Owner/Admin)", "KYC Approval Workflow", "Ollama Cloud LLMs", "Maps & Analytics"],
    architecture: ["React", "Express API", "MongoDB", "LLMs (gpt-oss, Gemma vision)"],
    impact: ["4 AI features", "3 user roles", "Live"],
    highlights: [
      "Chat assistant uses LLM tool calling to query live bike listings instead of guessing",
      "Vision model compares before/after photos to flag damage and estimate repair cost",
      "Document AI reads RC, insurance, PUC and licence and flags mismatches for the admin",
    ],
    links: {
      github: "https://github.com/Umesh042005/RydZO",
      demo: "https://rydzo.vercel.app/",
      video: "https://www.linkedin.com/feed/update/urn:li:activity:7421088557777412096/",
    },
  },
  {
    slug: "mynewhome",
    title: "MyNewHome",
    type: "Property Selling Platform",
    description:
      "A full-stack property selling platform with a Spring Boot backend and React frontend. Implements JWT authentication, role-based access, and property listings with search and filtering.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    features: ["Spring Boot", "JWT Authentication", "Role-based Access", "Search & Filtering", "React Frontend"],
    architecture: ["React", "Spring Boot", "MySQL"],
    highlights: [
      "Layered Spring Boot architecture with JWT-secured REST endpoints",
      "Role-based access separating buyers, sellers and admins",
    ],
    links: {
      github: "https://github.com/Umesh042005/PropertySellingWebsite-MyNewHome",
      video: "https://www.linkedin.com/feed/update/urn:li:activity:7401107237538082816/",
    },
  },
];

export const skillCategories: { title: string; skills: string[] }[] = [
  {
    title: "AI Engineering",
    skills: ["LLM Integration", "Tool / Function Calling", "Vision Models", "RAG Pipelines", "Prompt Design", "Privacy-scoped AI", "Ollama Cloud", "FlowiseAI"],
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "Pydantic", "SQLAlchemy 2 (async)", "Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT / OAuth"],
  },
  {
    title: "Frontend",
    skills: ["React 19", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "PWA", "Framer Motion"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "Alembic Migrations"],
  },
  {
    title: "Testing & Quality",
    skills: ["pytest", "Vitest", "unittest", "Locust (load testing)", "Postman"],
  },
  {
    title: "Cloud & Tools",
    skills: ["Vercel", "Render", "Docker", "Azure", "AWS", "Git & GitHub", "Claude Code"],
  },
];

/** Plain-text knowledge base the AI assistant answers from. */
export function buildKnowledgeBase(): string {
  const projectText = projects
    .map(
      (p) =>
        `PROJECT: ${p.title} (${p.type})\n${p.description}\nStack: ${p.features.join(", ")}\nArchitecture: ${p.architecture.join(" -> ")}\n` +
        (p.impact ? `Impact: ${p.impact.join(", ")}\n` : "") +
        `Engineering highlights:\n- ${p.highlights.join("\n- ")}\n` +
        `Links: ${Object.entries(p.links).map(([k, v]) => `${k}: ${v}`).join(", ") || "not public yet"}`
    )
    .join("\n\n");

  return `ABOUT: ${profile.name} is a ${profile.role}. Umesh works across the stack with Python/FastAPI, Java/Spring Boot and Node/Express on the backend and React/Next.js on the frontend, and ships products with real AI features (LLM tool calling, vision models, privacy-scoped assistants). Solved 235+ LeetCode problems and 500+ coding challenges overall. Contact: ${profile.email}, GitHub ${profile.github}, LinkedIn ${profile.linkedin}.

SKILLS:
${skillCategories.map((c) => `${c.title}: ${c.skills.join(", ")}`).join("\n")}

${projectText}

OPEN SOURCE: Contributions to OWASP Dependency-Check (vulnerability detection) and FlowiseAI (node integrations for RAG pipelines).

CERTIFICATIONS: ServiceNow Certified System Administrator; Microsoft Azure Fundamentals (AZ-900); Microsoft & SAP TechSaksham internship (AI fundamentals); Wipro TalentNext Java Full Stack; AWS Academy Cloud Foundations.`;
}
