export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  gallery: string[];
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: ProjectCategory;
  problem?: string;
  solution?: string;
  architecture?: string;
  metrics?: ProjectMetric[];
  futureRoadmap?: string[];
  createdAt: string;
  updatedAt: string;
  
  // Bento Grid specific fields
  gridSpan?: "col-span-1" | "col-span-2" | "col-span-3";
}

export type ProjectCategory =
  | "ai"
  | "web"
  | "automation"
  | "saas"
  | "open-source";

export interface ProjectMetric {
  label: string;
  value: string;
  icon?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  category: string;
  published: boolean;
  readingTime: number;
  createdAt: string;
  updatedAt: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  proficiency?: number; // 0 to 100
  currentlyLearning?: boolean;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "ai-ml"
  | "devops"
  | "tools";

export interface Experience {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  description: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  highlights?: string[];
  icon?: string;
}

export type ExperienceType =
  | "education"
  | "work"
  | "hackathon"
  | "certification"
  | "achievement";

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  bio: string;
  shortBio: string;
  startupVision: string;
  currentFocus: string[];
  resumeUrl: string;
  calUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  totalStars: number;
  totalForks: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  pinnedRepos: GitHubRepo[];
  contributionsLastYear: number;
}

export interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  languageColor: string;
}

export interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

export interface CommandItem {
  id: string;
  label: string;
  href: string;
  category: "page" | "project" | "blog" | "action";
  icon?: string;
}
