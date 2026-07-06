"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, TrendingUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getFeaturedProjects } from "@/data/projects";
import SectionWrapper from "./SectionWrapper";
import { trackEvent } from "@/lib/analytics";

export default function ProofOfWork() {
  const projects = getFeaturedProjects();

  return (
    <SectionWrapper id="proof-of-work" className="section-padding container-custom">
      <div className="mb-16 flex flex-col items-center text-center">
        <span className="inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-purple-400">
          Proof of Work
        </span>
        <h2 className="heading-lg mt-4">Featured Case Studies</h2>
        <p className="body-md mt-4 max-w-2xl text-zinc-400">
          A selection of products I&apos;ve built that drive real business impact. 
          Hover over any card to view details, or click to read the full case study.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 ${
              project.gridSpan || "col-span-1"
            }`}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 group-hover:opacity-100" />

            <div className="relative flex h-full flex-col p-6 sm:p-8">
              {/* Top Meta */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                
              </div>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/5 bg-white/5 px-2 py-1 text-xs font-medium text-zinc-400 transition-colors group-hover:border-white/10 group-hover:bg-white/10 group-hover:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="rounded-md border border-transparent px-2 py-1 text-xs font-medium text-zinc-500">
                    +{project.techStack.length - 4} more
                  </span>
                )}
              </div>

              {/* Spacer to push image/buttons to bottom */}
              <div className="flex-1" />

              {/* Image Preview (Visible mostly on larger spans) */}
              <div className="mt-8 relative aspect-[2/1] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex h-12 items-center gap-2 rounded-xl bg-white text-black px-6 font-semibold hover:bg-zinc-200"
                    onClick={() => trackEvent("project_click", { project: project.slug })}
                  >
                    Read Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur hover:bg-white/30"
                      title="Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur hover:bg-white/30"
                      title="Source Code"
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            {/* Clickable Area for Mobile */}
            <Link 
              href={`/projects/${project.slug}`} 
              className="absolute inset-0 z-0 sm:hidden"
              onClick={() => trackEvent("project_click", { project: project.slug, source: "mobile_overlay" })}
              aria-label={`View ${project.title} case study`}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
