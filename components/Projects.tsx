"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects, projectCategories } from "@/data/projects";

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "all" || p.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch && !p.featured;
    });
  }, [searchQuery, activeCategory]);

  return (
    <SectionWrapper id="projects" className="section-padding container-custom">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Things I&apos;ve Built
        </p>
        <h2 className="heading-lg mt-3">Projects</h2>
      </div>

      {/* Search & Filter */}
      <div className="mb-10 flex flex-col items-center gap-4">
        {/* Search */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {projectCategories.map((cat: { label: string; value: string }) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "border border-white/5 text-zinc-500 hover:border-white/10 hover:text-zinc-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${searchQuery}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <p className="mt-12 text-center text-zinc-500">
          No projects match your search. Try a different query.
        </p>
      )}
    </SectionWrapper>
  );
}