"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const currentProjects = [
  {
    title: "YojanaSetu",
    description:
      "AI-powered GovTech platform processing 50+ Indian welfare schemes. Helping citizens discover eligible government schemes using AI.",
    status: "In Progress",
  },
];

export default function CurrentlyBuilding() {
  return (
    <SectionWrapper className="section-padding container-custom">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          What I&apos;m Working On
        </p>
        <h2 className="heading-lg mt-3">Currently Building</h2>
      </div>

      <div className="mx-auto max-w-3xl">
        {currentProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                <Bot className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-0.5 text-xs font-medium text-green-400">
                    <span className="status-dot" />
                    {project.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}