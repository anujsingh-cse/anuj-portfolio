"use client";

import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, Star, GitBranch } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { FaGithub } from "react-icons/fa";

export default function BuildingInPublic() {
  return (
    <SectionWrapper id="building-in-public" className="section-padding container-custom">
      <div className="mb-16 flex flex-col items-center text-center">
        <span className="inline-block rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-orange-400">
          Building In Public
        </span>
        <h2 className="heading-lg mt-4">Open Source Contributions</h2>
        <p className="body-md mt-4 max-w-2xl text-zinc-400">
          I believe in open-sourcing my learnings. Here's a snapshot of my recent activity, 
          from triaging issues in major repositories to maintaining my own boilerplate projects.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Stats Column */}
        <div className="space-y-6 md:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center"
          >
            <FaGithub className="h-12 w-12 text-white" />
            <h3 className="mt-4 text-2xl font-bold">@anujsingh-cse</h3>
            <p className="mt-1 text-sm text-zinc-400">540+ Contributions this year</p>
            
            <div className="mt-6 flex w-full justify-between border-t border-white/5 pt-6 text-sm text-zinc-400">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-white">45</span>
                <span>Repos</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-white">120</span>
                <span>Stars</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-white">35</span>
                <span>Forks</span>
              </div>
            </div>
            
            <a 
              href="https://github.com/anujsingh-cse"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full justify-center rounded-lg bg-white/10 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              Follow on GitHub
            </a>
          </motion.div>
        </div>

        {/* Activity Column */}
        <div className="space-y-4 md:col-span-2">
          {[
            {
              id: 1,
              type: "commit",
              repo: "anuj-singh/yojanasetu",
              message: "feat(rag): implemented Pinecone vector retrieval for offline mode",
              time: "2 hours ago"
            },
            {
              id: 2,
              type: "pr",
              repo: "vercel/next.js",
              message: "fix(router): resolving edge case in dynamic segment resolution",
              time: "Yesterday"
            },
            {
              id: 3,
              type: "star",
              repo: "anuj-singh/devrel-agent",
              message: "Starred by @leerob",
              time: "2 days ago"
            },
            {
              id: 4,
              type: "branch",
              repo: "anuj-singh/agent-parliament",
              message: "Created branch 'feat/multi-agent-debate-engine'",
              time: "3 days ago"
            }
          ].map((activity, i) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-white/10 hover:bg-white/5"
            >
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-zinc-400">
                {activity.type === "commit" && <GitCommit className="h-4 w-4" />}
                {activity.type === "pr" && <GitPullRequest className="h-4 w-4 text-purple-400" />}
                {activity.type === "star" && <Star className="h-4 w-4 text-yellow-400" />}
                {activity.type === "branch" && <GitBranch className="h-4 w-4 text-cyan-400" />}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">{activity.repo}</span>
                  <span className="text-xs text-zinc-500">{activity.time}</span>
                </div>
                <p className="text-sm text-zinc-400">{activity.message}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
