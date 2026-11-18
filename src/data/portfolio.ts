// Single source of truth for portfolio content.
// Used by the page sections, the command palette and the "Ask my portfolio" AI assistant.

export type SectionKey =
  | "home"
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "opensource"
  | "codingprofiles"
  | "certifications"
  | "contact";

export const sections: { key: SectionKey; name: string }[] = [
  { key: "about", name: "About" },
  { key: "experience", name: "Experience" },
  { key: "skills", name: "Skills" },
  { key: "projects", name: "Projects" },
  { key: "opensource", name: "Open Source" },
  { key: "codingprofiles", name: "Coding Profiles" },
  { key: "certifications", name: "Certifications" },
  { key: "contact", name: "Contact" },
];

export const profile = {
  name: "Umesh Deshmukh",
  role: "Full Stack AI Engineer building AI-powered products",
  email: "umeshdeshmukh926@gmail.com",
  github: "https://github.com/Umesh042005",
  linkedin: "https://www.linkedin.com/in/umesh-deshmukh2005/",
  resume: "https://drive.google.com/file/d/1nSFh-bJI2wBIQD_XQSJ1umHsBbJiPdfl/view?usp=sharing",
  leetcode: "https://leetcode.com/u/umeshdeshmukh926/",
  location: "Bengaluru, Karnataka, India",
};

/** Facts recruiters screen for. Only add what's true; the AI assistant must not guess the rest. */
export const hrFacts = {
  education: "B.Tech in Computer Science and Engineering, Technocrats Institute of Technology and Science, Bhopal (2022–2026), CGPA 7.72",
  status: "2026 graduate, open to full-time Software Engineer / Full Stack / AI Engineer roles",
  workStyle: "Owns features end to end: design, backend, frontend, tests and deployment. Works remotely with a small startup team and ships side projects solo. Comfortable with Agile/Scrum and open-source collaboration.",
  // Not stated anywhere: salary expectations, notice period, relocation preference. The assistant must redirect these to email.
};

export type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  summary?: string;
  /** Each product or piece of work done in this role. */
  work: { name: string; tagline: string; stack: string[]; points: string[]; link?: { label: string; href: string } }[];
};

/** Work experience, newest first. Wording mirrors the resume; no public links for professional work. */
export const experience: Role[] = [
  {
    title: "Full Stack AI Engineer",
    company: "Stealth-mode AI Startup",
    location: "Remote",
    period: "January 2026 – Present",
    work: [
      {
        name: "Ekagra",
        tagline: "Meditation & Mentorship Platform",
        stack: ["Python", "FastAPI", "Supabase (PostgreSQL)", "React.js", "LLM API"],
        points: [
          "Developed the platform end to end: a React.js frontend and a FastAPI backend with 35+ REST APIs for student, mentor, and admin roles covering scheduling, recurring series, group classes, and attendance on Supabase (PostgreSQL).",
          "Implemented an LLM chatbot whose backend assembles role-scoped context from the user's token, so each user can only query permitted data, preventing prompt-injection leaks; introduced per-user rate limiting and 35 automated tests.",
        ],
      },
      {
        name: "Waiter AI",
        tagline: "Restaurant Ordering Assistant",
        stack: ["Python", "FastAPI", "LangGraph", "LangChain", "Milvus"],
        points: [
          "Contributed to a LangGraph multi-agent ordering assistant (intent detection, FAQ, menu retrieval over Milvus vector search, guardrails) served through FastAPI.",
          "Replaced a hard-coded Hugging Face endpoint with an env-configured OpenAI-compatible LLM provider layer, letting the team switch between Ollama Cloud, Groq, OpenAI, and Gemini with no code changes.",
        ],
      },
      {
        name: "Eigen",
        tagline: "Competitive Problem-Solving App (Play Store)",
        stack: ["Python", "FastAPI", "Ollama", "Supabase"],
        points: [
          "Engineered an LLM question-generation pipeline on Ollama that produces new problems modelled on existing database questions by topic and difficulty, then runs format validation and a re-solve answer check before saving drafts.",
          "Exposed admin-only FastAPI endpoints with background jobs for generation, editing, and an approve/reject human-review workflow before questions are published to users.",
        ],
      },
    ],
  },
  {
    title: "AI/ML Virtual Intern",
    company: "TechSaksham (Microsoft & SAP CSR Initiative)",
    location: "Remote",
    period: "Nov 2024 – Jan 2025",
    work: [
      {
        name: "Human Pose Estimation",
        tagline: "Computer Vision",
        stack: ["Python", "TensorFlow", "OpenPose", "CNNs"],
        points: [
          "Created a human pose estimation system with Python, TensorFlow, OpenPose, and CNNs detecting 15+ body keypoints from real-time video at 25 FPS; reduced keypoint error rate by 18% through model tuning and preprocessing.",
        ],
      },
    ],
  },
];

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
    slug: "rydzo",
    title: "RydZO",
    type: "AI-powered Peer-to-Peer Bike Rental Platform",
    description:
      "A full-stack marketplace where bike owners rent out their two-wheelers to verified riders. Riders sign up with Google, upload their licence and ID at their first booking, accept a digital rental agreement, and the owner hands over the bike only after admin approval. AI helps at every step: writing listings and suggesting prices, a chat assistant that searches live listings via tool calling, reading KYC documents to flag mismatches, and comparing return photos to detect damage and estimate repair cost.",
    image: "/projects/rydzo.png",
    features: ["MERN Stack", "JWT + Google OAuth", "RBAC (Rider/Owner/Admin)", "LangChain · LangGraph", "RAG + ChromaDB", "Vision LLM", "Maps & Analytics"],
    architecture: ["React", "Express API", "MongoDB", "LLMs (gpt-oss, Gemma vision)"],
    impact: ["4 AI features", "3 user roles", "Live"],
    highlights: [
      "8-stage automated booking engine with 3-tier role-based access (Rider, Owner, Admin)",
      "LangGraph multi-step KYC pipeline: document extraction, cross-verification and risk scoring across 5+ ID types",
      "RAG chatbot (LangChain + ChromaDB) and LLM tool calling to query live bike listings instead of guessing",
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
    slug: "mynewhome",
    title: "MyNewHome",
    type: "Property Selling Platform",
    description:
      "A secure full-stack property selling platform with a Spring Boot backend and React frontend for managing and browsing 100+ property listings. A dedicated Spring Boot service calls the Google Gemini API to generate property descriptions from listing data, and Spring Security with JWT protects every REST endpoint.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    features: ["Spring Boot", "Spring Security + JWT", "JPA", "Google Gemini API", "React + Tailwind", "MySQL"],
    architecture: ["React", "Spring Boot", "MySQL", "Gemini API"],
    highlights: [
      "20+ REST APIs in a layered Spring Boot architecture, all secured with Spring Security and JWT",
      "Separate Spring Boot service integrates Google Gemini to write property descriptions automatically",
      "Search and filtering across 100+ listings",
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
    skills: ["LangChain", "LangGraph", "RAG + ChromaDB", "Vector Embeddings", "Tool / Function Calling", "Vision LLMs", "Computer Vision", "Gemini · OpenAI · Ollama APIs", "TensorFlow"],
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
    skills: ["pytest", "Vitest", "JUnit", "unittest", "Locust (load testing)", "Postman", "Agile / Scrum"],
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

  const experienceText = experience
    .map(
      (r) =>
        `${r.title}, ${r.company} (${r.location}, ${r.period})${r.summary ? `: ${r.summary}` : ""}\n` +
        r.work.map((w) => `  ${w.name} (${w.tagline}; ${w.stack.join(", ")}):\n  - ${w.points.join("\n  - ")}`).join("\n")
    )
    .join("\n");

  return `ABOUT: ${profile.name} is a ${profile.role}, based in ${profile.location}. Umesh works across the stack with Python/FastAPI, Java/Spring Boot and Node/Express on the backend and React/Next.js on the frontend, and ships products with real AI features (LLM tool calling, vision models, privacy-scoped assistants). Solved 235+ LeetCode problems and 500+ coding challenges overall. Contact: ${profile.email}, GitHub ${profile.github}, LinkedIn ${profile.linkedin}.

SKILLS:
${skillCategories.map((c) => `${c.title}: ${c.skills.join(", ")}`).join("\n")}

${projectText}

EDUCATION: ${hrFacts.education}
STATUS: ${hrFacts.status}
WORK STYLE: ${hrFacts.workStyle}

EXPERIENCE:
${experienceText}

OPEN SOURCE: OWASP Dependency-Check, 3 merged PRs (#8218 and #8200: CPE mapping fixes and a detection hint for the Elastic APM Java Agent; #8473: build plugin migration). FlowiseAI: open PR #6406 adding null checks to document store nodes (not merged yet).

NOT PROVIDED (never guess; ask the recruiter to email): salary expectations, notice period, relocation preference, phone number.

CERTIFICATIONS: ServiceNow Certified System Administrator; Microsoft Azure Fundamentals (AZ-900); Microsoft & SAP TechSaksham internship (AI fundamentals); Wipro TalentNext Java Full Stack; AWS Academy Cloud Foundations.`;
}
