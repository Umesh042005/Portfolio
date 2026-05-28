# Umesh Deshmukh — Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://your-live-url.vercel.app)

A modern, single-page developer portfolio showcasing full-stack engineering, competitive programming achievements, open-source contributions, and production-ready projects — built with performance, clarity, and a premium minimalist aesthetic in mind.

**Live Demo:** [https://your-live-url.vercel.app](https://your-live-url.vercel.app)

---

## 🚀 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Framework** | [Next.js](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Runtime** | [Node.js](https://nodejs.org/) |
| **UI & Motion** | React 19, Framer Motion, Lucide React, React Icons |

---

## ✨ Features

The portfolio is organized into focused sections, rendered inside a centered square viewport with smooth section-based navigation:

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen landing with profile image, DSA/competitive programming metrics, CTAs, and social links |
| **About** | Professional background, engineering focus, and problem-solving narrative |
| **Skills** | Categorized technical stack across frontend, backend, databases, cloud, and AI |
| **Projects** | Featured full-stack work with live demos, GitHub links, and feature highlights |
| **Certifications** | Industry credentials with clickable certificate links |
| **Coding Profiles** | Competitive programming and coding platform profiles |
| **Open Source** | Open-source contributions and community involvement |
| **Contact** | Contact form with email delivery via FormSubmit |

**Additional highlights:**
- Section-based navigation (no stacked scroll on initial load)
- Optimized LCP with priority image loading on the hero portrait
- Responsive layout with glassmorphism accents and subtle animations
- Dark-mode-aware design tokens

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 18.18 or later (20+ recommended)
- **npm** (or yarn / pnpm)

### Local setup

```bash
# Clone the repository
git clone https://github.com/Umesh042005/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## 📁 Folder Structure

```
portfolio/
├── public/                    # Static assets (images, resume PDF)
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles & square container layout
│   │   ├── layout.tsx         # Root layout & portfolio shell
│   │   └── page.tsx           # Main page & section routing logic
│   └── components/
│       ├── Navbar.tsx         # Top navigation & section switching
│       ├── Hero.tsx           # Landing / home section
│       ├── About.tsx          # About section
│       ├── Skills.tsx         # Skills section
│       ├── Projects.tsx       # Projects section
│       ├── Certifications.tsx # Certifications section
│       ├── CodingProfiles.tsx # Coding profiles section
│       ├── OpenSource.tsx     # Open source section
│       ├── Contact.tsx        # Contact form section
│       └── SectionHeading.tsx # Reusable section title component
├── package.json
├── next.config.ts
└── README.md
```

---

## 📸 Screenshots

> Add screenshots of your deployed portfolio here once live.

| View | Preview |
|------|---------|
| Hero (Home) | _Screenshot coming soon_ |
| Projects | _Screenshot coming soon_ |
| Contact | _Screenshot coming soon_ |

**Suggested workflow:** Capture full-page or section screenshots from your deployed Vercel URL and place them in a `/docs` or `/public/screenshots` folder, then link them above.

---

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/) — the platform built by the creators of Next.js.

### Deploy with Vercel (recommended)

1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository and confirm the framework preset: **Next.js**.
4. Use the default build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (auto-detected)
5. Click **Deploy** and wait for the build to complete.
6. Update the live demo URL in this README once your deployment is ready.

### Manual production build

```bash
npm run build
npm run start
```

---

## 📄 License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it with attribution.

See the [MIT License](https://opensource.org/licenses/MIT) for full terms.

---

**Built by [Umesh Deshmukh](https://github.com/Umesh042005)** — Full Stack Developer · Java · MERN · DSA · Open Source
