import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "1",
    type: "work",
    title: "Senior AI Engineer",
    organization: "YojanaSetu (Startup)",
    description: "Leading the development of an AI-powered GovTech platform.",
    startDate: "2024-01",
    current: true,
    highlights: [
      "Architected a RAG-based eligibility engine using LangChain and Pinecone → increased document processing accuracy from 70% to 94% → saved manual reviewers over 200 hours per month.",
      "Engineered a multi-lingual voice agent integrating OpenAI Whisper and local LLMs → successfully onboarded 5,000+ illiterate users within the first month of launch.",
      "Optimized the Next.js frontend and PostgreSQL database queries → reduced p95 API latency by 60% → improved user retention by 25% on mobile devices."
    ],
  },
  {
    id: "2",
    type: "work",
    title: "Full Stack Engineer",
    organization: "TechNova Solutions",
    description: "Built scalable enterprise web applications and analytics pipelines.",
    startDate: "2022-06",
    endDate: "2023-12",
    highlights: [
      "Migrated legacy React monolith to Next.js App Router and TypeScript → eliminated 35% of production runtime bugs → accelerated feature delivery velocity by 1.5x.",
      "Built real-time data ingestion pipeline using Go and Kafka for 2.5M daily events → cut infrastructure costs by 60% → enabled marketing team to run real-time conversion tests.",
      "Mentored a team of 3 junior developers through weekly pair programming sessions → successfully shipped 4 major dashboard features 2 weeks ahead of schedule."
    ],
  },
  {
    id: "3",
    type: "work",
    title: "Software Engineer Intern",
    organization: "Innovate AI",
    description: "Developed internal tooling and machine learning data pipelines.",
    startDate: "2021-05",
    endDate: "2021-08",
    highlights: [
      "Automated PDF data extraction using Python and AWS Textract → processed 50,000+ legacy invoices → saved accounting department $15K in manual labor costs.",
      "Developed an internal React dashboard to visualize ML model drift → surfaced 3 critical anomalies in production data → prevented a major client-facing outage.",
      "Implemented a CI/CD pipeline using GitHub Actions for the data team → reduced model deployment time from 2 hours to 15 minutes."
    ],
  },
  {
    id: "4",
    type: "education",
    title: "BE CSE",
    organization: "Chandigarh University",
    description: "Focus on Distributed Systems and Machine Learning.",
    startDate: "2022-10",
    endDate: "2026-05",
    highlights: [
      "Published research paper on 'Efficient LLM Fine-Tuning' → cited 15+ times by other researchers.",
      "Led the college robotics team of 20+ members → secured 1st place in National Hackathon 2021 out of 500+ teams.",
      "Developed the university's official student portal used by 4,000+ active students daily."
    ],
  }
];
