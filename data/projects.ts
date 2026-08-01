import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "yojanasetu",
    title: "YojanaSetu",
    description: "AI-powered GovTech platform automating document processing and eligibility verification for government schemes.",
    content: "YojanaSetu is a GovTech platform that bridges citizens and government welfare schemes. A FastAPI backend computes eligibility via a rule-based matcher over a seeded scheme catalog, digitizes uploaded documents with NVIDIA Nemotron OCR v2 (a vision model), and powers a multilingual chat assistant on NVIDIA's NIM endpoint (Llama 3.3 70B). Citizens log in via phone OTP (Twilio Verify), build a profile, get matched to schemes like PM-KISAN and PM-JAY, file applications, and locate nearby Common Service Centers.",
    coverImage: "/projects/yojanasetu.png",
    gallery: [
      "/projects/yojanasetu.png",
      "/projects/yojanasetu.png",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "SQLite", "NVIDIA NIM (Llama 3.3 70B)", "NVIDIA Nemotron OCR v2", "Twilio Verify", "JWT"],
    features: [
      "Phone-OTP login (Twilio Verify) with mock-OTP dev mode and JWT sessions",
      "Rule-based eligibility matcher over a seeded government-scheme catalog",
      "Document digitization via NVIDIA Nemotron OCR v2 (vision)",
      "Multilingual AI chat assistant (NVIDIA Llama 3.3 70B)",
      "Application tracking and Common Service Center locator",
    ],
    githubUrl: "https://github.com/anujsingh-cse/yojanasetu",
    liveUrl: "https://yojana-setu-beta.vercel.app",
    featured: true,
    category: "ai",
    problem: "Citizens struggle to navigate complex, fragmented eligibility criteria across welfare schemes and often submit incomplete or mismatched documentation.",
    solution: "Built a FastAPI backend with a rule-based eligibility matcher over a seeded scheme database, NVIDIA Nemotron OCR for document digitization, an NVIDIA Llama chat assistant, and a Next.js (App Router) frontend; OTP login, profile onboarding, application tracking, and a CSC locator.",
    architecture: "Next.js (App Router) frontend calls a FastAPI backend. Phone-OTP login via Twilio Verify issues a JWT. Eligibility is computed by a rule-based matcher against a seeded SQLite scheme catalog. Uploaded documents are digitized with NVIDIA Nemotron OCR v2 (a vision endpoint). A chat endpoint streams responses from NVIDIA NIM (Llama 3.3 70B). A MOCK_OTP flag enables local testing without live SMS.",
    futureRoadmap: [
      "Add retrieval-augmented answers over full scheme policy PDFs",
      "Migrate the seeded SQLite catalog to PostgreSQL for production scale",
      "Integrate WhatsApp Business API for direct citizen interaction"
    ],
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-03-20T00:00:00Z",
    gridSpan: "col-span-2",
  },
  {
    id: "2",
    slug: "agent-parliament",
    title: "Agent Parliament",
    description: "Multi-agent legislative simulator that debates, votes, and synthesizes complex engineering and architectural decisions.",
    content: "Agent Parliament is a legislative simulation framework that automates collaborative decision-making for development teams. The platform spawns dedicated AI agents (Optimist, Pessimist, Engineer, Lawyer, User Advocate) to debate technical proposals across regulatory, design, UX, and operational criteria. A neutral Speaker synthesizes the debate using weighted voting and consensus algorithms, outputting a complete markdown decision document with confidence scores, unanimous agreements, dissents, and concrete action items.",
    coverImage: "/projects/parliament.png",
    gallery: [],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API", "Framer Motion", "LangChain"],
    features: [
      "Simulated multi-agent debate using distinct persona prompt frameworks",
      "Structured output synthesis utilizing consensus algorithms and weighted voting",
      "Interactive dashboard for submitting motions and visualizing debate logs",
      "State-persistent session storage and markdown export of synthesized decisions",
    ],
    githubUrl: "https://github.com/anujsingh-cse/AgentParliament.git",
    liveUrl: "#",
    featured: true,
    category: "ai",
    problem: "Engineering teams spend excessive time in sync meetings debating architectural trade-offs, leading to decision paralysis or unmitigated compliance risks.",
    solution: "Architected a multi-agent framework where specialized personas represent key viewpoints (innovation, risk, user experience, compliance), converging on optimized decisions autonomously.",
    createdAt: "2024-04-10T00:00:00Z",
    updatedAt: "2024-06-15T00:00:00Z",
    gridSpan: "col-span-1",
  },
  {
    id: "3",
    slug: "devrel-agent",
    title: "DevRel GitHub Agent",
    description: "Open-source autonomous agent that triages GitHub issues and drafts PRs for boilerplate tasks.",
    content: "Created an autonomous GitHub application that uses LLMs to read incoming issues, label them appropriately, and automatically draft pull requests for simple bug fixes (like typo corrections, dependency updates, and basic logic errors).",
    coverImage: "/projects/devrel.png",
    gallery: [],
    techStack: ["TypeScript", "Probot", "OpenAI API", "GitHub Actions", "Vercel"],
    features: [
      "Automated issue tagging based on semantic analysis",
      "Autonomous PR generation for simple bug reports",
      "Tone-matched automated responses to contributors",
    ],
    githubUrl: "https://github.com/anujsingh-cse/devrel-agent",
    liveUrl: "https://devrel-agent-two.vercel.app",
    featured: true,
    category: "open-source",
    problem: "Maintainers of popular open-source repositories spend over 15 hours a week just triaging issues and fixing minor typos.",
    solution: "Deployed a Probot-based GitHub App that acts as an AI maintainer, autonomously resolving 25% of trivial issues without human intervention.",
    createdAt: "2023-12-01T00:00:00Z",
    updatedAt: "2024-02-15T00:00:00Z",
    gridSpan: "col-span-1",
  },
  {
    id: "4",
    slug: "auto-invoice",
    title: "AutoInvoice OCR",
    description: "B2B SaaS extracting structured JSON data from messy invoice PDFs using computer vision.",
    content: "AutoInvoice OCR is a micro-SaaS that helps accounting firms automate manual data entry. By combining traditional OCR (Tesseract) with LLM-based layout parsing, the tool achieves near-perfect accuracy even on warped, scanned, or non-standard invoice formats.",
    coverImage: "/projects/invoice.png",
    gallery: [],
    techStack: ["Python", "AWS Textract", "Next.js", "Stripe", "Supabase"],
    features: [
      "Multi-page PDF parsing and table extraction",
      "Direct API integration for ERP systems",
      "Confidence scoring with human-in-the-loop review UI",
    ],
    githubUrl: "https://github.com/anujsingh-cse/autoinvoice-ocr",
    liveUrl: "https://autoinvoice-ocr.vercel.app",
    featured: true,
    category: "automation",
    createdAt: "2023-05-20T00:00:00Z",
    updatedAt: "2023-09-10T00:00:00Z",
    gridSpan: "col-span-2",
  },
  {
    id: "5",
    slug: "causal-inference-toolkit",
    title: "Causal Inference Toolkit",
    description: "Production-ready Python library & Streamlit web dashboard wrapping DoWhy/EconML with sensitivity analysis, quasi-experiments, A/B testing, and executive HTML report generation.",
    content: "Causal Inference Toolkit is an enterprise-grade Python package and interactive Streamlit web dashboard that unifies observational causal inference, quasi-experiments (Synthetic Control, Difference-in-Differences), sensitivity analysis (Cinelli-Hazlett, E-values, Rosenbaum bounds), A/B testing (Frequentist/Bayesian/Sequential), and uplift metalearners (T/S/X/R/DR-learners). Features automatic executive HTML report generation, CLI tools, and visualization pipelines for causal graphs and covariate balance.",
    coverImage: "/projects/causal.png",
    gallery: [
      "/projects/causal.png"
    ],
    techStack: ["Python", "DoWhy", "EconML", "Streamlit", "Pytest", "Pandas", "Scikit-Learn"],
    features: [
      "Unified DoWhy & EconML estimation pipeline (IPW, Matching, Doubly Robust, Double ML, Causal Forest)",
      "Quasi-experiments engine: Synthetic Control Method (SCM) & Difference-in-Differences (DiD) event studies",
      "Multi-layer sensitivity analysis (Rosenbaum bounds, Cinelli-Hazlett, E-values, TIPS curves)",
      "Interactive Streamlit dashboard & automated standalone HTML executive report generator",
    ],
    githubUrl: "https://github.com/anujsingh-cse/causal-inference-toolkit.git",
    liveUrl: "https://anujsingh-cse.github.io/causal-inference-toolkit/",
    featured: true,
    category: "ai",
    problem: "Observational studies and A/B tests often lack rigorous sensitivity analysis, unified estimation workflows, and executive-ready reporting, leading to unmitigated confounding bias and slow decision cycles.",
    solution: "Built an end-to-end Python library and Streamlit dashboard combining SOTA causal estimators, quasi-experimental methods, sensitivity bounds, and one-click HTML executive report exports.",
    architecture: "Modular Python architecture with core causal abstractions, wrapper layer over DoWhy/EconML, dedicated analysis engines (Sensitivity, DiD, SCM, A/B testing, Uplift), Streamlit UI app, Typer CLI, and Jinja2-based executive HTML report generator.",
    futureRoadmap: [
      "Add neural causal estimators (TARNet, Dragonnet)",
      "Implement continuous treatment effect estimation",
      "Expand automated DAG discovery algorithms"
    ],
    createdAt: "2025-01-10T00:00:00Z",
    updatedAt: "2025-03-01T00:00:00Z",
    gridSpan: "col-span-1",
  }
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getFeaturedProject = () => projects.find((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getAllProjects = () => projects;
export const getProjectCategories = () => Array.from(new Set(projects.map((p) => p.category)));

export const projectCategories = [
  { label: "All", value: "all" },
  { label: "AI & ML", value: "ai" },
  { label: "SaaS", value: "saas" },
  { label: "Open Source", value: "open-source" },
  { label: "Automation", value: "automation" },
];