"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useRecruiterMode } from "@/components/providers/RecruiterModeProvider";

export default function Background() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { isRecruiterMode } = useRecruiterMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 h-full w-full bg-background transition-colors duration-500">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Heavy gradients are disabled in recruiter mode for a cleaner look */}
      <div 
        className="absolute inset-0 bg-radial-fade transition-opacity duration-1000" 
        style={{ opacity: isRecruiterMode ? 0.3 : 1 }}
      />
      <div 
        className="animate-blob absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px] mix-blend-screen transition-opacity duration-1000" 
        style={{ opacity: isRecruiterMode ? 0.1 : 1 }}
      />
      <div 
        className="animate-blob-slow absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px] mix-blend-screen transition-opacity duration-1000" 
        style={{ opacity: isRecruiterMode ? 0.1 : 1 }}
      />
      <div 
        className="animate-blob-reverse absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[80px] mix-blend-screen transition-opacity duration-1000" 
        style={{ opacity: isRecruiterMode ? 0.1 : 1 }}
      />

      <div className="noise-bg" />
    </div>
  );
}