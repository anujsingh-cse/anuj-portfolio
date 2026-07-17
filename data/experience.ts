import type { Experience } from "@/types";

export const experience: Experience[] = [
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
      "Developed the university's official student portal used by 4,000+ active students daily."
    ],
  }
];
