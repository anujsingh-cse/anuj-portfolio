import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", category: "frontend", proficiency: 95 },
  { name: "Next.js", icon: "nextjs", category: "frontend", proficiency: 90 },
  { name: "TypeScript", icon: "typescript", category: "frontend", proficiency: 85 },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "frontend", proficiency: 95 },
  { name: "Framer Motion", icon: "framer", category: "frontend", proficiency: 80 },

  // Backend
  { name: "Node.js", icon: "nodedotjs", category: "backend", proficiency: 85 },
  { name: "Python", icon: "python", category: "backend", proficiency: 90 },
  { name: "Go", icon: "go", category: "backend", proficiency: 60, currentlyLearning: true },
  { name: "PostgreSQL", icon: "postgresql", category: "backend", proficiency: 80 },
  { name: "Redis", icon: "redis", category: "backend", proficiency: 70 },

  // AI & ML
  { name: "OpenAI API", icon: "openai", category: "ai-ml", proficiency: 90 },
  { name: "LangChain", icon: "langchain", category: "ai-ml", proficiency: 80 },
  { name: "PyTorch", icon: "pytorch", category: "ai-ml", proficiency: 65, currentlyLearning: true },
  { name: "Vector DBs (Pinecone)", icon: "database", category: "ai-ml", proficiency: 85 },
  { name: "Causal Inference (DoWhy, EconML)", icon: "python", category: "ai-ml", proficiency: 85 },

  // DevOps
  { name: "AWS", icon: "amazonaws", category: "devops", proficiency: 75 },
  { name: "Docker", icon: "docker", category: "devops", proficiency: 80 },
  { name: "Vercel", icon: "vercel", category: "devops", proficiency: 95 },
  { name: "CI/CD", icon: "githubactions", category: "devops", proficiency: 85 },

  // Tools
  { name: "Git", icon: "git", category: "tools", proficiency: 90 },
  { name: "Figma", icon: "figma", category: "tools", proficiency: 75 },
];

export const getSkillsByCategory = (category: string) => {
  return skills.filter((skill) => skill.category === category);
};

export const getCategories = () => {
  return Array.from(new Set(skills.map((skill) => skill.category)));
};

export const getCurrentlyLearning = () => {
  return skills.filter((skill) => skill.currentlyLearning);
};

export const skillCategories = [
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "AI & ML", value: "ai-ml" },
  { label: "DevOps", value: "devops" },
  { label: "Tools", value: "tools" },
] as const;
