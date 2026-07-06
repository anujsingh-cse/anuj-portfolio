"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

type ProjectCardProps = Pick<
  Project,
  "slug" | "title" | "description" | "coverImage" | "githubUrl" | "liveUrl" | "techStack"
>;

export default function ProjectCard({
  slug,
  title,
  description,
  coverImage,
  githubUrl,
  liveUrl,
  techStack,
}: ProjectCardProps) {
  return (
    <div className="gradient-border group overflow-hidden rounded-2xl border border-white/5 bg-[var(--color-bg-secondary)] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10">
      {/* Image */}
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
          <Image
            src={coverImage}
            alt={title}
            width={900}
            height={500}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-2">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-xs text-zinc-400"
            >
              {tech}
            </span>
          ))}
          {techStack.length > 4 && (
            <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-xs text-zinc-500">
              +{techStack.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Button asChild size="sm" className="gap-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20">
            <Link href={`/projects/${slug}`}>
              View Details
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>

          {githubUrl !== "#" && (
            <Button variant="ghost" size="sm" asChild className="gap-1.5 text-zinc-400 hover:text-white">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-3.5 w-3.5" />
                Code
              </a>
            </Button>
          )}

          {liveUrl !== "#" && (
            <Button variant="ghost" size="sm" asChild className="gap-1.5 text-zinc-400 hover:text-white">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}