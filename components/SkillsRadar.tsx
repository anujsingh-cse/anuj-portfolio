"use client";

import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts";
import { skills, getCategories, getSkillsByCategory, getCurrentlyLearning } from "@/data/skills";
import SectionWrapper from "./SectionWrapper";
import { Flame } from "lucide-react";

// Calculate average proficiency per category for the Radar Chart
const radarData = getCategories().map((category) => {
  const catSkills = getSkillsByCategory(category);
  const avgProficiency =
    catSkills.reduce((acc, skill) => acc + (skill.proficiency || 0), 0) /
    (catSkills.length || 1);

  return {
    subject: category.toUpperCase(),
    A: Math.round(avgProficiency),
    fullMark: 100,
  };
});

export default function SkillsRadar() {
  const categories = getCategories();
  const currentlyLearning = getCurrentlyLearning();

  return (
    <SectionWrapper id="skills" className="section-padding container-custom">
      <div className="mb-16 flex flex-col items-center text-center">
        <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-blue-400">
          Technical Arsenal
        </span>
        <h2 className="heading-lg mt-4">T-Shaped Expertise</h2>
        <p className="body-md mt-4 max-w-2xl text-zinc-400">
          A visualization of my technical proficiency across different domains. 
          I specialize deeply in Frontend & AI, while maintaining a broad understanding 
          of Backend, DevOps, and Product Architecture.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square w-full max-w-md mx-auto"
        >
          {/* Decorative glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-3xl" />
          
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 600 }} 
              />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Proficiency"
                dataKey="A"
                stroke="#06b6d4"
                strokeWidth={2}
                fill="#06b6d4"
                fillOpacity={0.2}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(9, 9, 11, 0.9)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
                }}
                itemStyle={{ color: '#06b6d4' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Detailed Category Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {categories.map((category) => {
            const catSkills = getSkillsByCategory(category);
            const avgProficiency =
              catSkills.reduce((acc, skill) => acc + (skill.proficiency || 0), 0) /
              (catSkills.length || 1);

            return (
              <div key={category} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-300">
                    {category}
                  </h4>
                  <span className="text-sm font-mono text-cyan-400">
                    {Math.round(avgProficiency)}%
                  </span>
                </div>
                
                {/* Custom Progress Bar showing tools */}
                <div className="relative h-6 w-full overflow-hidden rounded-md bg-white/5 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${avgProficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/40 border-r border-cyan-500/50"
                  />
                  {/* Tool tags overlay */}
                  <div className="absolute inset-0 flex items-center gap-2 px-3 overflow-hidden whitespace-nowrap">
                    {catSkills.map((skill) => (
                      <span key={skill.name} className="text-[10px] font-medium text-white/80 mix-blend-plus-lighter">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Currently Learning */}
          {currentlyLearning.length > 0 && (
            <div className="mt-12 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Flame className="h-5 w-5 text-orange-500 animate-pulse" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400">
                  Currently Learning
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentlyLearning.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-md border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
