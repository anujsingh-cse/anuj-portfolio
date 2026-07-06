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
    metrics: [
      { label: "Active Users", value: "10K+" },
      { label: "Processing Accuracy", value: "94%" },
      { label: "Time Saved/App", value: "85%" }
    ],
    futureRoadmap: [
      "Integrate WhatsApp Business API for direct citizen interaction",
      "Implement local, open-source LLMs (Llama 3) for data privacy",
      "Expand to state-level specific schemes"
    ],
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-03-20T00:00:00Z",
    gridSpan: "col-span-2",
    metricValue: "10K+",
    metricLabel: "Active Citizens",
  },
  {
    id: "2",
    slug: "nexus-analytics",
    title: "Nexus Analytics",
    description: "High-throughput real-time event tracking and analytics pipeline for SaaS applications.",
    content: "Designed and deployed a scalable real-time analytics pipeline capable of ingesting and visualizing millions of events per day. Nexus Analytics allows SaaS founders to track custom user flows with sub-second latency, providing actionable insights into user behavior and conversion bottlenecks.",
    coverImage: "/projects/nexus.png",
    gallery: [],
    techStack: ["Go", "React", "ClickHouse", "Kafka", "Redis", "Docker"],
    features: [
      "Sub-second event ingestion via Go microservices",
      "Complex funnel analysis using ClickHouse materialized views",
      "Real-time WebSocket dashboard for live metrics",
    ],
    githubUrl: "https://github.com/anujsingh-cse/nexus-analytics",
    liveUrl: "https://nexus-analytics.vercel.app",
    featured: true,
    category: "saas",
    problem: "Existing analytics solutions were either too expensive at scale or lacked the real-time querying capabilities needed for instant conversion tracking.",
    solution: "Built a custom ingest pipeline using Go and Kafka, sinking data into ClickHouse for lightning-fast OLAP queries, reducing infrastructure costs by 60%.",
    metrics: [
      { label: "Events/Day", value: "2.5M" },
      { label: "Query Latency", value: "<50ms" },
      { label: "Cost Savings", value: "60%" }
    ],
    createdAt: "2023-08-10T00:00:00Z",
    updatedAt: "2023-11-05T00:00:00Z",
    gridSpan: "col-span-1",
    metricValue: "2.5M",
    metricLabel: "Events Processed Daily",
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
    liveUrl: "https://devrel-agent.vercel.app",
    featured: true,
    category: "open-source",
    problem: "Maintainers of popular open-source repositories spend over 15 hours a week just triaging issues and fixing minor typos.",
    solution: "Deployed a Probot-based GitHub App that acts as an AI maintainer, autonomously resolving 25% of trivial issues without human intervention.",
    metrics: [
      { label: "GitHub Stars", value: "450+" },
      { label: "Issues Triaged", value: "5K+" },
      { label: "Maintainer Hours Saved", value: "300+" }
    ],
    createdAt: "2023-12-01T00:00:00Z",
    updatedAt: "2024-02-15T00:00:00Z",
    gridSpan: "col-span-1",
    metricValue: "450+",
    metricLabel: "GitHub Stars",
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
    metrics: [
      { label: "Invoices Processed", value: "50K+" },
      { label: "MRR", value: "$1.2K" },
      { label: "Extraction Accuracy", value: "98.5%" }
    ],
    createdAt: "2023-05-20T00:00:00Z",
    updatedAt: "2023-09-10T00:00:00Z",
    gridSpan: "col-span-2",
    metricValue: "$1.2K",
    metricLabel: "Monthly Recurring Revenue",
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