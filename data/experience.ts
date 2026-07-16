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
    title: "Data Scientist",
    organization: "The Boring Education",
    description: "Built data pipelines and optimized machine learning models for educational platforms.",
    startDate: "2026-03",
    current: true,
    highlights: [
      "Designed and deployed machine learning solutions to analyze student learning behavior and personalize learning paths.",
      "Engineered automated workflows and predictive analytics pipelines to improve platform engagement."
    ],
  },
  {
    id: "3",
    type: "work",
    title: "Data Analyst",
    organization: "V.EDU'S PRIVATE LIMITED",
    description: "Developed and implemented AI/ML solutions in an ed-tech context.",
    startDate: "2024-01",
    endDate: "2024-10",
    highlights: [
      "Worked on data science projects leveraging Python and Retrieval-Augmented Generation (RAG) pipelines.",
      "Applied ML models and statistical analysis to solve business problems and enhance learning platform features."
    ],
  },
  {
    id: "5",
    type: "work",
    title: "Freelance Software Developer",
    organization: "Freelance",
    description: "Developed custom automation and software solutions for business clients.",
    startDate: "2024",
    endDate: "2024",
    highlights: [
      "Built a custom automation script for a small business client using Python (Upwork) to streamline operations.",
      "Leveraged Python and automation frameworks to optimize workflow efficiency for clients."
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
