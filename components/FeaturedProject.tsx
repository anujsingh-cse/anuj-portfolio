"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Database, Globe, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionWrapper from "./SectionWrapper";
import { getFeaturedProject } from "@/data/projects";

const iconMap: Record<string, React.ElementType> = {
  database: Database,
  globe: Globe,
  target: Target,
  zap: Zap,
};

export default function FeaturedProject() {
  const project = getFeaturedProject();
  if (!project) return null;

  return (
    <SectionWrapper className="section-padding container-custom">
      <div className="overflow-hidden rounded-[2rem] border border-cyan-500/10 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 p-8 backdrop-blur-sm md:p-12 lg:p-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <span className="status-dot" />
            Featured Project
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="heading-lg mt-8"
        >
          <span className="gradient-text">{project.title}</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="body-lg mt-6 max-w-3xl"
        >
          {project.description}
        </motion.p>


        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {project.techStack.map((tech: string) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button
            asChild
            size="lg"
            className="gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
          >
            <Link href={`/projects/${project.slug}`}>
              View Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          {project.liveUrl !== "#" && (
            <Button variant="outline" size="lg" asChild className="gap-2 rounded-xl border-white/10">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}