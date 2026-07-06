"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { experience as experiences } from "@/data/experience";
import { GraduationCap, Trophy, Rocket, Calendar } from "lucide-react";
import type { ExperienceType } from "@/types";

const typeIcons: Record<ExperienceType, React.ElementType> = {
  education: GraduationCap,
  work: Rocket,
  hackathon: Trophy,
  certification: GraduationCap,
  achievement: Trophy,
};

const typeColors: Record<ExperienceType, string> = {
  education: "from-blue-500 to-cyan-500",
  work: "from-purple-500 to-pink-500",
  hackathon: "from-amber-500 to-orange-500",
  certification: "from-green-500 to-emerald-500",
  achievement: "from-cyan-500 to-blue-500",
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper id="experience" className="section-padding container-custom">
      {/* Section Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        <span className="inline-block rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-pink-400">
          Timeline
        </span>
        <h2 className="heading-lg mt-4">Professional Journey</h2>
      </div>

      {/* Timeline */}
      <div ref={containerRef} className="relative mx-auto max-w-3xl">
        {/* Vertical Line Background */}
        <div className="absolute left-8 top-0 h-full w-px bg-white/5 md:left-1/2 md:-translate-x-px" />
        
        {/* Animated Scroll Line */}
        <motion.div 
          className="absolute left-8 top-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 md:left-1/2 md:-translate-x-px"
          style={{ height: lineHeight }}
        />

        {experiences.map((exp, i) => {
          const Icon = typeIcons[exp.type] || Rocket;
          const gradient = typeColors[exp.type] || "from-cyan-500 to-blue-500";
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative mb-12 flex items-start gap-6 md:gap-0 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                <div
                  className={`h-4 w-4 rounded-full bg-gradient-to-br ${gradient} shadow-lg`}
                />
                <div
                  className={`absolute h-4 w-4 rounded-full bg-gradient-to-br ${gradient} opacity-50 blur-sm`}
                />
              </div>

              {/* Spacer for mobile */}
              <div className="w-16 shrink-0 md:hidden" />

              {/* Content Card */}
              <div
                className={`glass-card w-full p-6 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                {/* Date */}
                <div className="mb-3 flex items-center gap-2 text-xs text-zinc-500">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {exp.startDate}
                    {exp.current ? " — Present" : exp.endDate ? ` — ${exp.endDate}` : ""}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${gradient} shadow-lg`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{exp.title}</h3>
                    <p className="text-sm text-zinc-400">{exp.organization}</p>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {exp.description}
                </p>

                {/* Highlights */}
                {exp.highlights && (
                  <ul className="mt-3 space-y-1">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-xs text-zinc-500"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}