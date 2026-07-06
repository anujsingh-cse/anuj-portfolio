"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personal } from "@/data/personal";
import { Code2, Rocket, Brain, Lightbulb, Target, Zap } from "lucide-react";

const focusItems = [
  { icon: Brain, label: "AI Agents & Multi-Agent Systems" },
  { icon: Target, label: "RAG Pipelines & Vector Databases" },
  { icon: Code2, label: "LLM Application Development" },
  { icon: Rocket, label: "Full-Stack SaaS Architecture" },
  { icon: Zap, label: "Cloud-Native Deployment" },
  { icon: Lightbulb, label: "Open Source Contributions" },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="section-padding container-custom">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Who Am I?
        </p>
        <h2 className="heading-lg mt-3">About Me</h2>
      </div>

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left — Story */}
        <div>
          <h3 className="heading-md">
            Building{" "}
            <span className="gradient-text">products</span> instead
            of just projects.
          </h3>

          <p className="body-lg mt-6">{personal.bio}</p>

          <div className="mt-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Startup Vision
            </h4>
            <p className="body-md">{personal.startupVision}</p>
          </div>
        </div>

        {/* Right — Focus Cards */}
        <div className="space-y-4">
          <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Current Focus
          </h4>
          <div className="grid gap-3 sm:grid-cols-2">
            {focusItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card flex items-center gap-3 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                  <item.icon className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-sm font-medium text-zinc-300">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}