"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

interface RecruiterModeContextType {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
}

const RecruiterModeContext = createContext<RecruiterModeContextType | undefined>(undefined);

export function RecruiterModeProvider({ children }: { children: ReactNode }) {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("recruiterMode");
    if (stored === "true") {
      setIsRecruiterMode(true);
      document.documentElement.classList.add("recruiter-mode");
    }
  }, []);

  const toggleRecruiterMode = () => {
    setIsRecruiterMode((prev) => {
      const newState = !prev;
      localStorage.setItem("recruiterMode", String(newState));
      
      if (newState) {
        document.documentElement.classList.add("recruiter-mode");
      } else {
        document.documentElement.classList.remove("recruiter-mode");
      }
      
      trackEvent("recruiter_mode_toggle", { enabled: newState });
      return newState;
    });
  };

  return (
    <RecruiterModeContext.Provider value={{ isRecruiterMode, toggleRecruiterMode }}>
      {children}
    </RecruiterModeContext.Provider>
  );
}

export function useRecruiterMode() {
  const context = useContext(RecruiterModeContext);
  if (context === undefined) {
    throw new Error("useRecruiterMode must be used within a RecruiterModeProvider");
  }
  return context;
}
