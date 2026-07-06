"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

interface HistoryItem {
  id: string;
  type: "command" | "output" | "error";
  content: React.ReactNode;
}

const COMMANDS = {
  help: "Shows available commands",
  whoami: "Prints current user info",
  "cat skills.json": "Outputs tech stack as JSON",
  "ls projects": "Lists top projects",
  "sudo hire anuj": "Initiates the hiring protocol",
  clear: "Clears the terminal window",
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: "init",
      type: "output",
      content: (
        <div className="text-zinc-400 mb-4">
          <p>AnujOS v1.0.0 (x86_64)</p>
          <p>Type <span className="text-cyan-400">'help'</span> to see available commands.</p>
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Focus input on click anywhere in terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let outputContent: React.ReactNode = null;

    if (!trimmedCmd) return;

    trackEvent("terminal_command", { command: trimmedCmd });

    switch (trimmedCmd) {
      case "help":
        outputContent = (
          <div className="grid grid-cols-[140px_1fr] gap-2 text-sm">
            {Object.entries(COMMANDS).map(([c, desc]) => (
              <React.Fragment key={c}>
                <span className="text-cyan-400">{c}</span>
                <span className="text-zinc-400">{desc}</span>
              </React.Fragment>
            ))}
          </div>
        );
        break;
      case "whoami":
        outputContent = <span className="text-green-400">guest_recruiter</span>;
        break;
      case "cat skills.json":
        outputContent = (
          <pre className="text-xs text-zinc-300">
{`{
  "frontend": ["React", "Next.js", "TypeScript", "Tailwind"],
  "backend": ["Python", "FastAPI", "Node.js"],
  "ai_ml": ["OpenAI", "RAG", "LangChain", "Vector DBs"],
  "cloud": ["AWS", "Supabase", "Docker", "Vercel"]
}`}
          </pre>
        );
        break;
      case "ls projects":
        outputContent = (
          <div className="flex flex-col gap-1">
            <span className="text-blue-400">yojanasetu/</span>
            <span className="text-blue-400">ai-hiring-platform/</span>
            <span className="text-blue-400">automation-engine/</span>
            <span className="text-zinc-500 text-xs mt-1">Hint: Type 'sudo hire anuj'</span>
          </div>
        );
        break;
      case "sudo hire anuj":
        outputContent = (
          <div className="text-yellow-400 animate-pulse">
            Access Granted. Redirecting to contact module...
          </div>
        );
        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }, 1500);
        break;
      case "clear":
        setHistory([]);
        return;
      default:
        outputContent = (
          <span className="text-red-400">
            command not found: {trimmedCmd}. Type 'help' for available commands.
          </span>
        );
    }

    setHistory((prev) => [
      ...prev,
      { id: Date.now().toString(), type: "output", content: outputContent },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const currentInput = input;
      setHistory((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "_cmd",
          type: "command",
          content: (
            <div className="flex items-center gap-2">
              <span className="text-green-400">guest@anuj:~$</span>
              <span className="text-zinc-200">{currentInput}</span>
            </div>
          ),
        },
      ]);
      setInput("");
      executeCommand(currentInput);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
      className="w-full max-w-lg mx-auto flex flex-col rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl shadow-cyan-500/10 backdrop-blur-md"
      style={{ perspective: "1000px" }}
      onClick={handleTerminalClick}
    >
      {/* macOS Window Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 text-center text-xs font-medium text-zinc-400 tracking-wide">
          guest@anuj-portfolio:~
        </div>
      </div>

      {/* Terminal Body */}
      <div className="flex-1 p-4 font-mono text-sm h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        <AnimatePresence initial={false}>
          {history.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-2"
            >
              {item.content}
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Input Line */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-green-400 shrink-0">guest@anuj:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-zinc-200"
            spellCheck={false}
            autoComplete="off"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
}
