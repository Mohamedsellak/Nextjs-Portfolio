<div align="center">

# Mohammed Sellak — Portfolio

A modern, responsive developer portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Features interactive particle animations, smooth typewriter effects, and a dynamic project showcase with image galleries.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## Features

- **Interactive Particle Background** — Powered by tsParticles with responsive density and hover/click interactions
- **Typewriter Hero Section** — Animated role titles (Full Stack Developer, AI & Data Scientist, Problem Solver)
- **About Section** — Profile card with experience stats and a brief bio
- **Skills Showcase** — Infinite-scroll skill ribbons organized by category (Frontend, Backend, Databases, AI/ML, DevOps)
- **Project Gallery** — Filterable grid (All / Web / Mobile / Design) with modal image carousels
- **Contact Form** — Email, WhatsApp, and LinkedIn quick links alongside a message form
- **Responsive Navigation** — Floating bottom nav bar with scroll-aware active state
- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Dark Theme** — Sleek black & purple design system

---

## Tech Stack

| Layer         | Technology                                      |
| ------------- | ----------------------------------------------- |
| Framework     | Next.js 16 (App Router)                         |
| UI Library    | React 19                                        |
| Language      | TypeScript 5                                    |
| Styling       | Tailwind CSS 3.4                                |
| Animations    | tsParticles, Typewriter Effect                  |
| Icons         | React Icons (Font Awesome)                      |
| Images        | Next.js `<Image>` with automatic optimization   |
| Linting       | ESLint (Next.js config)                         |

---

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with Inter font & metadata
│   ├── page.tsx                # Single-page composition
│   ├── globals.css             # Global styles & Tailwind directives
│   ├── components/
│   │   ├── Nav.tsx             # Floating bottom navigation
│   │   ├── Home.tsx            # Hero section with particles & typewriter
│   │   ├── About.tsx           # Bio, stats & profile image
│   │   ├── Skills.tsx          # Infinite-scroll skill ribbons
│   │   ├── skills.css          # Scroll animation styles
│   │   ├── Projects.tsx        # Filterable project grid
│   │   ├── ProjectModel.tsx    # Modal with image carousel
│   │   ├── Contact.tsx         # Contact cards & form
│   │   └── Footer.tsx          # Footer with social links
│   ├── data/
│   │   └── projects.ts         # Project metadata & images
│   └── fonts/                  # Custom fonts
├── public/
│   ├── cv/                     # Downloadable resume
│   └── images/
│       └── projects/           # Project screenshots
├── tailwind.config.js
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/Mohamedsellak/Nextjs-Portfolio.git
cd Nextjs-Portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Featured Projects

| #   | Project                         | Category | Tech Highlights                                       |
| --- | ------------------------------- | -------- | ----------------------------------------------------- |
| 1   | HealthGuard Vision              | Mobile   | React Native, Expo, Flask, TensorFlow                 |
| 2   | Cyber X Radar                   | Web      | PHP, Next.js, MySQL, REST API                         |
| 3   | Pentest GPT                     | Web      | Next.js, Express, MongoDB, LLaMA 3                    |
| 4   | Edufacilita                     | Web      | Laravel, PHP, MathJax, LaTeX                          |
| 5   | AI Translator – Go Translate    | Mobile   | Swift, Core ML, Vision API                            |
| 6   | NextTrade                       | Web      | Next.js, TypeScript, WebSocket, Redis                 |
| 7   | Mr. Basit's Moroccan Crafts     | Web      | Next.js, TypeScript, Stripe                           |
| 8   | TechStore                       | Web      | Next.js, Supabase, PostgreSQL, Stripe                 |

---

## Customization

### Adding a New Project

1. Add project images to `public/images/projects/<project-name>/`
2. Add a new entry in `app/data/projects.ts`:

```ts
{
    id: 9,
    title: "Project Name",
    description: "Project description...",
    technologies: ["Tech1", "Tech2"],
    category: "web",         // "web" | "mobile" | "design"
    liveLink: "https://...", // optional
    githubLink: "https://github.com/...",
    images: [
        "/<project-name>/1.png",
        "/<project-name>/2.png"
    ]
}
```

### Updating Personal Info

- **Name & roles** → `app/components/Home.tsx`
- **Bio & stats** → `app/components/About.tsx`
- **Skills** → `app/components/Skills.tsx`
- **Contact details** → `app/components/Contact.tsx`
- **Social links** → `app/components/Home.tsx` & `app/components/Footer.tsx`
- **Resume** → Replace `public/cv/Resume.pdf`

---

## Deployment

This portfolio can be deployed on any platform that supports Next.js:

- [**Vercel**](https://vercel.com/) (recommended) — Zero-config deployment
- [**Netlify**](https://netlify.com/) — With `@netlify/plugin-nextjs`
- **Docker** — Containerized production build

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with Next.js & TypeScript by [Mohammed Sellak](https://github.com/Mohamedsellak)**

</div>
