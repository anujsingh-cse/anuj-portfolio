"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skills, skillCategories, getSkillsByCategory } from "@/data/skills";
import type { SkillCategory } from "@/types";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend");

  const filteredSkills = getSkillsByCategory(activeCategory);

  return (
    <SectionWrapper id="skills" className="section-padding container-custom">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Skills & Technologies
        </p>
        <h2 className="heading-lg mt-3">Tech Stack</h2>
      </div>

      {/* Category Tabs */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {skillCategories.map((cat: { label: string; value: string }) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              activeCategory === cat.value
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                : "border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card flex flex-col items-center gap-3 p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                <span className="text-lg font-bold text-cyan-400">
                  {skill.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-zinc-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}