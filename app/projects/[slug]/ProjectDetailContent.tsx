"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Lightbulb,
  Target,
  Layers,
  Rocket,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

interface Props {
  project: Project;
}

export default function ProjectDetailContent({ project }: Props) {
  return (
    <div className="container-custom pb-20 pt-28">
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          All Projects
        </Link>
      </motion.div>

      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-8 overflow-hidden rounded-2xl border border-white/5"
      >
        <div className="relative aspect-video bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
            priority
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </motion.div>

      {/* Title & Meta */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-10"
      >
        <h1 className="heading-lg">{project.title}</h1>
        <p className="body-lg mt-4 max-w-3xl">{project.description}</p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          {project.githubUrl !== "#" && (
            <Button asChild className="gap-2 rounded-xl">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-4 w-4" />
                View Source
              </a>
            </Button>
          )}
          {project.liveUrl !== "#" && (
            <Button asChild variant="outline" className="gap-2 rounded-xl border-white/10">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </motion.div>

      <div className="section-divider my-12" />

      {/* Problem & Solution */}
      {(project.problem || project.solution) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {project.problem && (
            <div className="glass-card p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                  <Target className="h-5 w-5 text-red-400" />
                </div>
                <h2 className="text-xl font-bold">The Problem</h2>
              </div>
              <p className="body-md mt-4">{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div className="glass-card p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                  <Lightbulb className="h-5 w-5 text-green-400" />
                </div>
                <h2 className="text-xl font-bold">The Solution</h2>
              </div>
              <p className="body-md mt-4">{project.solution}</p>
            </div>
          )}
        </motion.div>
      )}

      {/* Architecture */}
      {project.architecture && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
              <Layers className="h-5 w-5 text-blue-400" />
            </div>
            <h2 className="text-xl font-bold">Architecture</h2>
          </div>
          <div className="glass-card mt-4 p-8">
            <p className="body-md">{project.architecture}</p>
          </div>
        </motion.div>
      )}

      {/* Features */}
      {project.features.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
              <CheckCircle className="h-5 w-5 text-purple-400" />
            </div>
            <h2 className="text-xl font-bold">Key Features</h2>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="glass-card flex items-start gap-3 p-5"
              >
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                <span className="text-sm text-zinc-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Content */}
      {project.content && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="text-xl font-bold">Deep Dive</h2>
          <div className="glass-card mt-4 p-8">
            <div className="body-md whitespace-pre-line">{project.content}</div>
          </div>
        </motion.div>
      )}

      {/* Future Roadmap */}
      {project.futureRoadmap && project.futureRoadmap.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
              <Rocket className="h-5 w-5 text-amber-400" />
            </div>
            <h2 className="text-xl font-bold">Future Roadmap</h2>
          </div>
          <div className="mt-4 space-y-3">
            {project.futureRoadmap.map((item, i) => (
              <div key={item} className="glass-card flex items-center gap-3 p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-400">
                  {i + 1}
                </span>
                <span className="text-sm text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
