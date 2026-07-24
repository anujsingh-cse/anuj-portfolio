import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "yojanasetu",
    title: "YojanaSetu",
    description: "AI-powered GovTech platform automating document processing and eligibility verification for government schemes.",
    content: "YojanaSetu is a revolutionary platform that leverages Large Language Models to bridge the gap between citizens and government schemes. It processes complex legal documents and government PDFs to instantly determine citizen eligibility with 94% accuracy. The platform features an AI agent that speaks 12 regional languages and has successfully reduced the average application processing time from 3 weeks to just 48 hours.",
    coverImage: "/projects/yojanasetu.png",
    gallery: [
      "/projects/yojanasetu.png",
      "/projects/yojanasetu.png",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "OpenAI API", "PostgreSQL", "AWS"],
    features: [
      "Automated PDF Parsing and OCR for Government Documents",
      "RAG-based eligibility engine powered by LLMs",
      "Multi-lingual Voice Agent for illiterate users",
      "Secure citizen data vault with end-to-end encryption",
    ],
    githubUrl: "https://github.com/anujsingh-cse/yojanasetu",
    liveUrl: "https://yojana-setu-beta.vercel.app",
    featured: true,
    category: "ai",
    problem: "Citizens struggle to understand complex eligibility criteria for government schemes, leading to a 60% rejection rate due to incorrect documentation.",
    solution: "Architected a RAG pipeline that processes unstructured government PDFs and provides an conversational interface for citizens to check eligibility in 12 languages.",
    architecture: "The frontend is built with Next.js (App Router) deployed on Vercel. User queries hit a FastAPI Python backend, which orchestrates calls to a Pinecone vector database containing chunked policy documents. The OpenAI API generates the final response, structured via LangChain.",
    futureRoadmap: [
      "Integrate WhatsApp Business API for direct citizen interaction",
      "Implement local, open-source LLMs (Llama 3) for data privacy",
      "Expand to state-level specific schemes"
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