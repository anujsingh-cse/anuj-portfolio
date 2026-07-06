"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects, getProjectCategories } from "@/data/projects";

export default function ProjectsPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { value: "all", label: "All" },
    ...getProjectCategories().map(cat => ({ 
      value: cat, 
      label: cat.charAt(0).toUpperCase() + cat.slice(1) 
    }))
  ];

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
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="container-custom section-padding">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Portfolio
        </p>
        <h1 className="heading-lg mt-3">All Projects</h1>
        <p className="body-md mx-auto mt-4 max-w-xl">
          A collection of AI-powered products, SaaS applications, and automation
          tools I&apos;ve built.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="mb-10 flex flex-col items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-cyan-500/50"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
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

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${searchQuery}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <p className="mt-16 text-center text-zinc-500">
          No projects match your search.
        </p>
      )}
    </div>
  );
}
