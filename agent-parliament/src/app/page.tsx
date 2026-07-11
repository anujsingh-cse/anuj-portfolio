"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Send, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Scale, 
  ShieldAlert, 
  UserCheck, 
  Volume2, 
  FileText, 
  RotateCcw,
  Sparkles,
  Vote,
  Compass,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

interface AgentStatement {
  role: "Optimist" | "Pessimist" | "Engineer" | "Lawyer" | "User Advocate" | "Speaker";
  opinion: "FOR" | "AGAINST" | "CONDITIONAL" | "ABSTAIN" | "SYNTHESIS";
  content: string;
  points?: string[];
  avatarColor: string;
  avatarChar: string;
  summary: string;
}

interface MotionPreset {
  id: string;
  title: string;
  category: string;
  description: string;
  debate: AgentStatement[];
}

const PRESETS: MotionPreset[] = [
  {
    id: "db-migrate",
    title: "Migrate transactional DB from PostgreSQL to MongoDB",
    category: "Architecture",
    description: "Proposal to shift our primary user-profile and transactional billing database to MongoDB to support polymorphic fields and speed up feature iterations.",
    debate: [
      {
        role: "Optimist",
        opinion: "FOR",
        avatarColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        avatarChar: "🚀",
        summary: "MongoDB unlocks absolute development velocity and enables seamless schema flexibility.",
        content: `I strongly support this proposal. PostgreSQL schemas are a bottleneck for our rapid iteration cycles.
        
1. 10x faster prototyping because schema updates do not require tedious migrations.
2. Native JSON storage reduces serialization overhead between the Node.js backend and DB.
3. Horizontal scaling is simple via sharding, preventing database bottlenecks at peak loads.

While data consistency is a risk, we can easily handle this in the application layer using Zod or Mongoose validation. We must value product velocity.`
      },
      {
        role: "Pessimist",
        opinion: "AGAINST",
        avatarColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
        avatarChar: "🛡️",
        summary: "Replacing ACID reliability with eventual consistency risks silent transactional data corruption.",
        content: `What keeps me up at night is losing ACID guarantees for billing transactions. Eventual consistency is a trap.

Risks identified:
- Billing anomalies and race conditions (Severity: CRITICAL). Eventual consistency can result in double-spending or unpaid accounts.
- Total loss of complex multi-table joins (Severity: HIGH). Writing joins in application logic is slow and error-prone.
- Refactoring costs (Severity: HIGH). Re-writing all raw sql queries will cost hundreds of engineering hours.

We can only do this if all billing ledger data remains in PostgreSQL, and we only migrate polymorphic user profiles.`
      },
      {
        role: "Engineer",
        opinion: "CONDITIONAL",
        avatarColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
        avatarChar: "⚙️",
        summary: "Feasibility is medium. A hybrid multi-DB model is achievable but adds operational complexity.",
        content: `This requires significant architectural rework. Our current stack is tightly coupled to PostgreSQL relationships.

Proposed implementation strategy:
- Phase 1 (MVP): Maintain PostgreSQL for transactional billing ledger. Move user metadata (hobbies, preferences) into MongoDB.
- Phase 2 (Scale): Add Redis cache layer for user profiles to mitigate multi-node query delays.
- Phase 3 (Polish): Implement database replication monitoring and automated backups.

Effort: 4 Sprints (Confidence: 80%). Build vs Buy: Use Managed MongoDB Atlas. Do not host internally.`
      },
      {
        role: "Lawyer",
        opinion: "CONDITIONAL",
        avatarColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
        avatarChar: "⚖️",
        summary: "GDPR sovereignty and SOC-2 audit logs must be maintained in the new cloud database.",
        content: `This migration touches customer personal data, introducing GDPR implications.

Regulatory requirements:
- Data Residency: We must configure MongoDB Atlas to store European user data exclusively in EU regions.
- Audit Trail: Ensure document level revisions are locked behind security roles for SOC-2 compliance.
- SLA alignment: Verify Atlas availability SLA matches our current 99.95% uptime commitment to enterprise clients.

Red Lines: Billing transaction data must remain in PostgreSQL for immediate financial audit compliance.`
      },
      {
        role: "User Advocate",
        opinion: "ABSTAIN",
        avatarColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        avatarChar: "👥",
        summary: "End-users won't notice database speeds, but developer burnout will delay frontend features.",
        content: `For someone loading the page, database latency matters less than a responsive frontend.

Human factor evaluation:
- Usability: No direct change for users.
- Accessibility: Database layer is neutral.
- Ethics: Ensure data deletion requests (Right to be Forgotten) are processed instantly across all database partitions.

This database migration risks distracting engineers from fixing critical accessibility issues. If we migrate, we must guarantee frontend sprint resources are not diverted.`
      },
      {
        role: "Speaker",
        opinion: "SYNTHESIS",
        avatarColor: "bg-zinc-700 text-zinc-100 border-zinc-600",
        avatarChar: "🗣️",
        summary: "Motion carries with CONDITIONAL GO. Transactional billing stays relational; profiles migrate.",
        content: `PARLIAMENT DECISION: ⚠️ CONDITIONAL GO
Confidence: Medium

Summary:
• Core billing transactions remain on PostgreSQL to preserve ACID guarantees and audit compliance.
• Dynamic user metadata and polymorphic preferences are approved for migration to MongoDB Atlas.
• Migration is contingent on configuring EU data localization to satisfy GDPR.

Vote Tally:
• Optimist: FOR — flexible data formats accelerate velocity.
• Pessimist: AGAINST — transaction corruption risk is unacceptable.
• Engineer: CONDITIONAL — feasible only as a hybrid model.
• Lawyer: CONDITIONAL — requires strict EU region pinning.
• User Advocate: ABSTAIN — neutral to users, prioritizes accessibility.

Recorded Dissents:
• Pessimist: "Any transactional split creates consistency risk, adding latency to validation queries."

Required Actions:
1. Engineer: Design database synchronization pipeline for PostgreSQL-to-MongoDB IDs (Deadline: 1 Sprint).
2. Lawyer: Review MongoDB Atlas BAA contract for data privacy compliance (Deadline: 2 weeks).`
      }
    ]
  },
  {
    id: "local-llm",
    title: "Deploy local Llama 3 instead of OpenAI API",
    category: "AI Integration",
    description: "Replace our production OpenAI API calls with locally hosted Llama 3 models on enterprise servers to guarantee full data isolation.",
    debate: [
      {
        role: "Optimist",
        opinion: "FOR",
        avatarColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        avatarChar: "🚀",
        summary: "Local hosting eliminates recurring token costs and guarantees absolute control over model architecture.",
        content: `Hosting Llama 3 is a massive strategic move.

1. Capital expenditure: We eliminate expensive monthly token bills, changing API variable costs into predictable fixed hosting costs.
2. Complete model ownership: We can fine-tune weights on proprietary codebase data without leaking assets to OpenAI.
3. Network speed: Local server routing removes external round-trip network hops, dropping latency.

This positions us as a fully sovereign AI provider in the enterprise space.`
      },
      {
        role: "Pessimist",
        opinion: "AGAINST",
        avatarColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
        avatarChar: "🛡️",
        summary: "Underestimating GPU hardware costs and model degradation will crash product accuracy.",
        content: `The proposal underestimates real-world operations.

Risks identified:
- High server cost (Severity: HIGH). Buying and running Nvidia H100/A100 server clusters is immensely expensive.
- Model performance drop (Severity: HIGH). Llama 3 is good, but for complex logical reasoning, it lacks the multi-modal depth of GPT-4o.
- High operational support (Severity: MEDIUM). We must maintain uptime, scaling, and load-balancing for local inference engines.

We should only proceed if we establish a fallback API routing system.`
      },
      {
        role: "Engineer",
        opinion: "CONDITIONAL",
        avatarColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
        avatarChar: "⚙️",
        summary: "Feasibility is hard. Scaling local inference requires custom Kubernetes setups.",
        content: `Inference serving is very different from standard APIs.

Implementation requirements:
- Phase 1 (MVP): Run Llama 3 (8B) using vLLM on a single cloud VM to compare token latency vs OpenAI.
- Phase 2 (Scale): Build a Kubernetes GPU cluster using autoscaling inference frameworks (KServe).
- Phase 3 (Polish): Configure Prometheus metrics monitoring for queue sizes and GPU temperatures.

Effort: 6 Sprints (Confidence: 60%). Build vs Buy: Borrow - Rent GPU nodes on AWS; do not purchase physical hardware yet.`
      },
      {
        role: "Lawyer",
        opinion: "FOR",
        avatarColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        avatarChar: "⚖️",
        summary: "Local hosting removes all third-party processor liabilities and satisfies banking security audits.",
        content: `From a compliance perspective, this is excellent.

Key benefits:
- Zero data sharing: User prompts are never sent to third-party OpenAI servers, automatically satisfying client privacy contracts.
- IP Isolation: Prevents potential trade secrets or client data leaks, satisfying strict bank security requirements.
- License Compliance: Llama 3 community license allows commercial use up to 700M monthly active users.

This is a massive win for selling into highly regulated industries (healthcare, finance).`
      },
      {
        role: "User Advocate",
        opinion: "CONDITIONAL",
        avatarColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        avatarChar: "👥",
        summary: "Guarantees absolute privacy, but slower generation speeds will degrade customer satisfaction.",
        content: `Our users expect fast, reliable interface responses.

Human experience evaluation:
- Usability: Local inference may increase Time-to-First-Token. If it takes longer than 1.5 seconds, user engagement will drop by 30%.
- Accessibility: Low-bandwidth clients require robust stream parsing to avoid screen reader timeouts.
- Trust: Showing 'Hosted locally - No data tracked' badges greatly increases user trust.

I support this conditionally: we must maintain a streaming UI and keep response times under 800ms.`
      },
      {
        role: "Speaker",
        opinion: "SYNTHESIS",
        avatarColor: "bg-zinc-700 text-zinc-100 border-zinc-600",
        avatarChar: "🗣️",
        summary: "Motion carries with CONDITIONAL GO. GPU setup approved with API backup fallback.",
        content: `PARLIAMENT DECISION: ⚠️ CONDITIONAL GO
Confidence: High

Summary:
• Transition to self-hosted Llama 3 (70B/8B) is approved to secure data privacy and attract enterprise clients.
• Deployment will be cloud-hosted (rented GPU) to minimize capital expenditure.
• An automatic fallback API route to OpenAI must be maintained to handle traffic spikes and prevent system downtime.

Vote Tally:
• Optimist: FOR — unlocks custom model optimization and reduces long-term costs.
• Pessimist: AGAINST — warns of operational complexity and performance degradation.
• Engineer: CONDITIONAL — requires dedicated sprints for GPU load testing.
• Lawyer: FOR — compliance win for HIPAA and SOC-2.
• User Advocate: CONDITIONAL — requires strict latency SLAs and streaming UI.

Recorded Dissents:
• Pessimist: "Renting GPUs online carries high hidden pricing costs, potentially costing more than raw API usage."

Required Actions:
1. Engineer: Deploy vLLM server on AWS and execute comparative latency benchmarks (Deadline: 2 weeks).
2. User Advocate: Build unified dashboard streaming interface with fallback spinner (Deadline: 3 weeks).`
      }
    ]
  }
];

export default function AgentParliamentDashboard() {
  const [motionText, setMotionText] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<MotionPreset | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [debateHistory, setDebateHistory] = useState<AgentStatement[]>([]);
  const [activeSpeech, setActiveSpeech] = useState<AgentStatement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [debateHistory, activeSpeech]);

  const handleSelectPreset = (preset: MotionPreset) => {
    if (isSimulating) return;
    setSelectedPreset(preset);
    setMotionText(preset.title);
    resetSimulation();
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setCurrentStep(-1);
    setDebateHistory([]);
    setActiveSpeech(null);
  };

  const startSimulation = () => {
    if (!motionText || isSimulating) return;
    setIsSimulating(true);
    setCurrentStep(0);
    setDebateHistory([]);

    let currentPreset = selectedPreset;
    
    // If user wrote a custom motion, generate procedural responses
    if (!currentPreset || currentPreset.title !== motionText) {
      currentPreset = generateCustomDebate(motionText);
    }

    const debateSteps = currentPreset.debate;
    let stepIndex = 0;

    const runStep = () => {
      if (stepIndex < debateSteps.length) {
        const speech = debateSteps[stepIndex];
        setActiveSpeech(speech);
        setCurrentStep(stepIndex);
        
        // Simulating writing time / thinking time
        setTimeout(() => {
          setDebateHistory((prev) => [...prev, speech]);
          setActiveSpeech(null);
          stepIndex++;
          setTimeout(runStep, 800); // interval between speeches
        }, 3000); // time spent speaking
      } else {
        setIsSimulating(false);
      }
    };

    runStep();
  };

  const generateCustomDebate = (customText: string): MotionPreset => {
    return {
      id: "custom",
      title: customText,
      category: "Custom Proposal",
      description: `Analyzing motion: "${customText}"`,
      debate: [
        {
          role: "Optimist",
          opinion: "FOR",
          avatarColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
          avatarChar: "🚀",
          summary: "Custom proposal drives innovation and offers critical competitive advantage.",
          content: `This motion, "${customText}", is a vital innovation step for our codebase.

1. It positions us ahead of competitors relying on legacy paradigms.
2. Unlocks developers to bypass tedious boilerplate operations.
3. Accelerates product feedback loops by delivering high-impact updates.

The challenges are easily solvable. The technical growth opportunity is massive.`
        },
        {
          role: "Pessimist",
          opinion: "AGAINST",
          avatarColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
          avatarChar: "🛡️",
          summary: "Significant system complications, architectural debt, and operational risks.",
          content: `I advise high caution regarding this custom proposal.

Risks identified:
- Architecture fragmentation (Severity: HIGH). Integrating this introduces dependency sprawl.
- Security vulnerability (Severity: MEDIUM). We must validate access keys and permissions.
- Operational maintenance (Severity: HIGH). Our team size is too small to maintain this system.

I dissent unless we conduct a comprehensive threat-modeling review.`
        },
        {
          role: "Engineer",
          opinion: "CONDITIONAL",
          avatarColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
          avatarChar: "⚙️",
          summary: "Feasible if split into sequential phases with strict automated testing.",
          content: `Technically, this is feasible but requires restructuring core endpoints.

Implementation plan:
- Phase 1 (MVP): Build mock routing handlers to test inputs.
- Phase 2 (Scale): Connect backend models and optimize cache keys.
- Phase 3 (Polish): Implement comprehensive dashboard tracing.

Effort: 3 Sprints (Confidence: 75%). Build vs Buy: Borrow - use existing open-source libraries first.`
        },
        {
          role: "Lawyer",
          opinion: "CONDITIONAL",
          avatarColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
          avatarChar: "⚖️",
          summary: "Verify licensing agreements, GDPR compliance, and user data exposure.",
          content: `We must verify compliance requirements for this custom plan.

Key checkpoints:
- Data leakage: Ensure user telemetry data is obfuscated.
- IP ownership: Check external packages for license conflicts (e.g. GPLv3 compatibility).
- Contract constraints: Ensure this doesn't bypass user opt-out preferences.

Risk Rating: Yellow.`
        },
        {
          role: "User Advocate",
          opinion: "FOR",
          avatarColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
          avatarChar: "👥",
          summary: "Significantly decreases cognitive load and optimizes accessibility.",
          content: `This motion directly solves key usability issues.

User evaluation:
- Usability: Reduces interaction steps by 40%.
- Accessibility: Easy screen-reader labeling integration.
- Trust: Clear options allow users to toggle permissions.

This is a great usability win. Highly recommended.`
        },
        {
          role: "Speaker",
          opinion: "SYNTHESIS",
          avatarColor: "bg-zinc-700 text-zinc-100 border-zinc-600",
          avatarChar: "🗣️",
          summary: "Motion passes with CONDITIONAL GO. Proceed with Phase 1 MVP under review.",
          content: `PARLIAMENT DECISION: ⚠️ CONDITIONAL GO
Confidence: Medium

Summary:
• Proceed with Phase 1 MVP to test feasibility in a staging environment.
• Security threat-modeling and telemetry data validation must be resolved.
• Code changes must be audited for external open-source license conflicts.

Vote Tally:
• Optimist: FOR — drives competitive product improvements.
• Pessimist: AGAINST — concerns of architectural fragmentation.
• Engineer: CONDITIONAL — requires strict phase-gate progression.
• Lawyer: CONDITIONAL — requires telemetry privacy review.
• User Advocate: FOR — significant UX improvements.

Recorded Dissents:
• Pessimist: "Operational maintenance overhead is too high for our current headcount."

Required Actions:
1. Engineer: Create clean prototype branch for Phase 1 verification (Deadline: 1 week).
2. Lawyer: Audit external licenses in package.json (Deadline: 1 week).`
        }
      ]
    };
  };

  const getOpinionBadge = (opinion: string) => {
    switch (opinion) {
      case "FOR":
        return <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-xs font-bold">FOR</span>;
      case "AGAINST":
        return <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2 py-0.5 rounded text-xs font-bold">AGAINST</span>;
      case "CONDITIONAL":
        return <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded text-xs font-bold">CONDITIONAL</span>;
      case "ABSTAIN":
        return <span className="bg-zinc-800 text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded text-xs font-bold">ABSTAIN</span>;
      default:
        return <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded text-xs font-bold">SYNTHESIS</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans flex flex-col selection:bg-purple-500/30 selection:text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/15 via-zinc-950 to-zinc-950 -z-10 pointer-events-none" />

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-950/40 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 hover:bg-white/5 rounded-lg transition-colors group">
            <ArrowLeft className="h-4 w-4 text-zinc-400 group-hover:text-white group-hover:-translate-x-0.5 transition-all" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Vote className="h-4 w-4 text-white animate-pulse" />
            </div>
            <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">Agent Parliament</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-xs text-zinc-400 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
            <span className="relative flex h-1.5 w-1.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isSimulating ? "bg-amber-400" : "bg-emerald-400"}`}></span>
              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isSimulating ? "bg-amber-500" : "bg-emerald-500"}`}></span>
            </span>
            {isSimulating ? "Debate In Progress" : "Speaker Active"}
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
        {/* Left Column: Config & Preset Selectors */}
        <div className="lg:col-span-4 space-y-6 flex flex-col">
          {/* Motion Submitter */}
          <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-5 backdrop-blur-sm flex flex-col gap-4">
            <div className="flex items-center gap-2 text-purple-400">
              <Sparkles className="h-4 w-4" />
              <h2 className="text-sm font-semibold tracking-wide uppercase">New Proposal</h2>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Submit a technical proposal or motion. The specialized parliament members will debate and synthesize a decision.
            </p>
            <div className="space-y-3">
              <textarea
                value={motionText}
                onChange={(e) => setMotionText(e.target.value)}
                placeholder="Should we switch database configurations..."
                disabled={isSimulating}
                className="w-full min-h-[100px] bg-zinc-950 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50 disabled:opacity-50 transition-all resize-none text-white placeholder-zinc-600"
              />
              <button
                onClick={startSimulation}
                disabled={isSimulating || !motionText.trim()}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:from-zinc-800 disabled:to-zinc-800 text-white disabled:text-zinc-500 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer shadow-lg shadow-purple-600/10 hover:shadow-purple-600/20 disabled:shadow-none"
              >
                {isSimulating ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white/20 border-t-white rounded-full" />
                    Debating Proposal...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 fill-current" />
                    Simulate Parliament
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Presets Card */}
          <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-5 backdrop-blur-sm flex-1 flex flex-col gap-4 min-h-0 overflow-hidden">
            <div className="flex items-center gap-2 text-indigo-400">
              <Compass className="h-4 w-4" />
              <h2 className="text-sm font-semibold tracking-wide uppercase">Presets</h2>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  disabled={isSimulating}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer block ${
                    selectedPreset?.id === preset.id
                      ? "bg-purple-950/20 border-purple-500/40 shadow-md shadow-purple-500/5"
                      : "bg-zinc-950/50 border-white/5 hover:border-white/10 hover:bg-zinc-900/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/10">
                      {preset.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-white line-clamp-1 mb-1">{preset.title}</h3>
                  <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">{preset.description}</p>
                </button>
              ))}
            </div>
            {isSimulating && (
              <div className="text-center py-2">
                <button
                  onClick={resetSimulation}
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <RotateCcw className="h-3 w-3" />
                  Cancel and Reset
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Active Simulation Panel */}
        <div className="lg:col-span-8 flex flex-col bg-zinc-900/30 border border-white/5 rounded-2xl overflow-hidden min-h-[500px]">
          {/* Debate Header */}
          <div className="px-5 py-4 border-b border-white/5 bg-zinc-950/20 flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Debate Arena</span>
            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
              <span className="font-mono">{debateHistory.length}/6</span> Members Spoken
            </div>
          </div>

          {/* Chamber Visualization Grid */}
          <div className="p-4 border-b border-white/5 bg-zinc-950/10 grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              { role: "Optimist", icon: "🚀", activeIdx: 0 },
              { role: "Pessimist", icon: "🛡️", activeIdx: 1 },
              { role: "Engineer", icon: "⚙️", activeIdx: 2 },
              { role: "Lawyer", icon: "⚖️", activeIdx: 3 },
              { role: "User Advocate", icon: "👥", activeIdx: 4 },
              { role: "Speaker", icon: "🗣️", activeIdx: 5 },
            ].map((chamberMember) => {
              const hasSpoken = debateHistory.some((h) => h.role === chamberMember.role);
              const isCurrentlySpeaking = activeSpeech?.role === chamberMember.role;
              return (
                <div
                  key={chamberMember.role}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                    isCurrentlySpeaking 
                      ? "bg-purple-950/20 border-purple-500/40 scale-105 shadow-md shadow-purple-500/10"
                      : hasSpoken
                        ? "bg-zinc-950/50 border-white/10 opacity-100"
                        : "bg-zinc-950/20 border-white/5 opacity-40"
                  }`}
                >
                  <span className="text-xl mb-1">{chamberMember.icon}</span>
                  <span className="text-[10px] text-zinc-400 text-center font-medium line-clamp-1">{chamberMember.role}</span>
                  {isCurrentlySpeaking && (
                    <span className="flex h-1.5 w-1.5 mt-1.5">
                      <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500"></span>
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Transcript Log Container */}
          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto p-5 space-y-4 max-h-[500px]"
          >
            {debateHistory.length === 0 && !activeSpeech && (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-12 h-12 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center mb-3 text-zinc-500">
                  <Volume2 className="h-5 w-5" />
                </div>
                <h3 className="text-zinc-300 font-medium text-sm">Parliament Idle</h3>
                <p className="text-xs text-zinc-500 max-w-sm mt-1">
                  Type a motion or select a preset, then click "Simulate Parliament" to trigger the multi-agent legislative session.
                </p>
              </div>
            )}

            {/* Speeches Log */}
            <AnimatePresence initial={false}>
              {debateHistory.map((speech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 rounded-2xl border ${
                    speech.role === "Speaker"
                      ? "bg-zinc-900 border-purple-500/20 shadow-lg shadow-purple-500/5"
                      : "bg-zinc-950/70 border-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-lg border flex items-center justify-center text-sm ${speech.avatarColor}`}>
                        {speech.avatarChar}
                      </span>
                      <span className="text-sm font-semibold text-white">{speech.role}</span>
                    </div>
                    {getOpinionBadge(speech.opinion)}
                  </div>
                  <h4 className="text-xs text-zinc-300 font-medium italic mb-2">"{speech.summary}"</h4>
                  <div className="text-xs text-zinc-400 whitespace-pre-line leading-relaxed border-t border-white/5 pt-2">
                    {speech.content}
                  </div>
                </motion.div>
              ))}

              {/* Active Thinking/Writing Speech */}
              {activeSpeech && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-2xl bg-zinc-900/30 border border-purple-500/20 border-dashed"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-lg border flex items-center justify-center text-sm ${activeSpeech.avatarColor} animate-pulse`}>
                        {activeSpeech.avatarChar}
                      </span>
                      <span className="text-sm font-semibold text-white flex items-center gap-2">
                        {activeSpeech.role} 
                        <span className="text-[10px] text-zinc-500 font-normal">drafting position...</span>
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1.5 py-1">
                    <div className="h-2 w-3/4 bg-white/5 rounded animate-pulse" />
                    <div className="h-2 w-1/2 bg-white/5 rounded animate-pulse" />
                    <div className="h-2 w-5/6 bg-white/5 rounded animate-pulse" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-white/5 text-center text-xs text-zinc-600 bg-zinc-950/20 mt-auto">
        &copy; {new Date().getFullYear()} Anuj Singh Portfolio. Engineered with Advanced Agentic Workflows.
      </footer>
    </div>
  );
}
