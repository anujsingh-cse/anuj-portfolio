"use client";

import { motion, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Calendar, Briefcase, Users, Zap, Building2, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import { trackEvent } from "@/lib/analytics";
import { personal } from "@/data/personal";
import Terminal from "./Terminal";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Hero() {
  const handleResumeDownload = () => {
    trackEvent("resume_download");
  };

  const handleCalendlyClick = () => {
    trackEvent("calendly_click");
  };

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 lg:gap-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex w-full flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Status Badge */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-medium tracking-wide text-green-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Open to opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={item} className="heading-xl mt-4">
          Hi, I&apos;m{" "}
          <br className="hidden lg:block" />
          <span className="gradient-text">Anuj Singh</span>
        </motion.h1>

        {/* Typewriter - Impact Driven */}
        <motion.div
          variants={item}
          className="mt-6 min-h-[80px] text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl"
        >
          <TypeAnimation
            sequence={[
              "I build AI products that users love",
              2000,
              "Full-stack engineer → 0→1 startup builder",
              2000,
              "Shipped 3 products, 10K+ users, $XXK revenue",
              2000,
              "React · TypeScript · Python · LLMs · Cloud",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent"
          />
        </motion.div>

        {/* Description */}
        <motion.p variants={item} className="body-lg mt-6 max-w-xl text-zinc-400">
          I architect scalable SaaS applications and intelligent LLM automation platforms.
          Focused on shipping high-impact features that drive measurable business outcomes.
        </motion.p>

        {/* CTA Buttons - Two Button Strategy */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
        >
          <MagneticButton>
            <Button
              asChild
              size="lg"
              className="group w-full gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/40 sm:w-auto"
            >
              <a href="#proof-of-work">
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button
              variant="outline"
              size="lg"
              asChild
              onClick={handleResumeDownload}
              className="w-full gap-2 rounded-xl border-white/10 bg-white/5 px-8 backdrop-blur transition-all hover:border-cyan-500/50 hover:bg-white/10 hover:text-cyan-400 sm:w-auto"
            >
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button
              variant="outline"
              size="lg"
              asChild
              onClick={handleCalendlyClick}
              className="w-full gap-2 rounded-xl border-white/10 bg-white/5 px-8 backdrop-blur transition-all hover:border-purple-500/50 hover:bg-white/10 hover:text-purple-400 sm:w-auto"
            >
              <a href={personal.calUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="h-4 w-4" />
                Schedule a Call
              </a>
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Terminal - Right Side */}
      <div className="hidden w-full lg:block">
        <Terminal />
      </div>
    </div>

    {/* Social Proof Marquee */}
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="mt-24 w-full overflow-hidden border-y border-white/5 bg-white/[0.02] py-8"
    >
      <div className="flex w-fit animate-marquee items-center gap-16 whitespace-nowrap px-8 text-sm font-medium text-zinc-500">
            {/* Duplicated for infinite scroll effect */}
            {[1, 2].map((group) => (
              <div key={group} className="flex items-center gap-16">
                <div className="flex items-center gap-2 transition-colors hover:text-zinc-300">
                  <Building2 className="h-5 w-5" />
                  <span>3 Products Shipped</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-zinc-700" />
                <div className="flex items-center gap-2 transition-colors hover:text-zinc-300">
                  <Users className="h-5 w-5" />
                  <span>10K+ Active Users</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-zinc-700" />
                <div className="flex items-center gap-2 transition-colors hover:text-zinc-300">
                  <Zap className="h-5 w-5" />
                  <span>60% Perf. Improvement</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-zinc-700" />
                <div className="flex items-center gap-2 transition-colors hover:text-zinc-300">
                  <Code2 className="h-5 w-5" />
                  <span>React • Next.js • Python • LLMs</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-zinc-700" />
                <div className="flex items-center gap-2 transition-colors hover:text-zinc-300">
                  <Briefcase className="h-5 w-5" />
                  <span>Startup Builder</span>
                </div>
                {/* Spacer before next group */}
                <div className="h-1 w-1 rounded-full bg-transparent" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}