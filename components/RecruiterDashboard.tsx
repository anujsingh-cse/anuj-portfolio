"use client";

import { motion } from "framer-motion";
import { useRecruiterMode } from "@/components/providers/RecruiterModeProvider";
import { Download, Calendar, Briefcase, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/personal";
import { trackEvent } from "@/lib/analytics";

export default function RecruiterDashboard() {
  const { isRecruiterMode } = useRecruiterMode();

  if (!isRecruiterMode) return null;

  const handleResumeDownload = () => {
    trackEvent("recruiter_resume_download");
  };

  const handleCalendlyClick = () => {
    trackEvent("recruiter_calendly_click");
  };

  return (
    <motion.section
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className="overflow-hidden border-b border-green-500/10 bg-green-500/[0.02]"
    >
      <div className="container-custom py-12">
        <div className="rounded-3xl border border-green-500/20 bg-black/40 p-8 backdrop-blur-md shadow-2xl shadow-green-500/5">
          {/* Header Info */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                <Briefcase className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white">Recruiter Quick-View</h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-semibold text-green-400">
                    <Sparkles className="h-3 w-3" />
                    Active Candidate
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mt-0.5">
                  Pre-compiled profile highlighting key hiring parameters.
                </p>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="gap-2 rounded-xl bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/25 animate-pulse hover:animate-none"
                onClick={handleResumeDownload}
              >
                <a href={personal.resumeUrl} download>
                  <Download className="h-4 w-4" />
                  Get PDF Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="gap-2 rounded-xl border-green-500/20 bg-green-500/5 text-green-400 hover:bg-green-500/10 hover:border-green-500/40"
                onClick={handleCalendlyClick}
              >
                <a href={personal.calUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-4 w-4" />
                  Book 15m Intro Call
                </a>
              </Button>
            </div>
          </div>

          {/* Grid Stats & Parameters */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Column 1: Core parameters */}
            <div className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.01] p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-green-400">Status & Terms</h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-center justify-between">
                  <span className="text-zinc-500">Availability</span>
                  <span className="font-medium text-white flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    Immediate
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-zinc-500">Preferred Role</span>
                  <span className="font-medium text-white">AI / Full-Stack Engineer</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-zinc-500">Relocation</span>
                  <span className="font-medium text-white">NCR / Bangalore / Remote</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Tech Match Highlights */}
            <div className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.01] p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-green-400">Technical Highlights</h3>
              <ul className="space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500 mt-0.5" />
                  <span><strong>AI Engineering:</strong> RAG pipelines, Vector DBs, LangChain/LangGraph orchestration.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500 mt-0.5" />
                  <span><strong>Next.js/React:</strong> Highly modular, SEO optimized & core web vitals focused.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500 mt-0.5" />
                  <span><strong>Python Stack:</strong> REST APIs with FastAPI, data ingestion pipelines, ML/Deep learning.</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Metrics & Business Impact */}
            <div className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.01] p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-green-400">Proven Metrics</h3>
              <ul className="space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-green-500/10 font-bold text-green-400">1</span>
                  <span>94% document eligibility processing accuracy shipped for YojanaSetu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-green-500/10 font-bold text-green-400">2</span>
                  <span>60% p95 API latency reduction via database query optimizations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-green-500/10 font-bold text-green-400">3</span>
                  <span>Autonomous DevRel agent saving maintainers 300+ triage hours.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
