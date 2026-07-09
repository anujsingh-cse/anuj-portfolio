"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";
import { useRecruiterMode } from "@/components/providers/RecruiterModeProvider";
import { Menu, Search, Command, Briefcase } from "lucide-react";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { href: "/#about", label: "About" },
  { href: "/#proof-of-work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/#experience", label: "Timeline" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openCommandPalette() {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-black text-white">
            A
          </div>
          <span className="text-lg font-bold tracking-tight transition-colors group-hover:text-white">
            <span className="gradient-text">Anuj</span>
            <span className="text-zinc-400"> Singh</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isHashLink = item.href.startsWith("/#");
            const useNativeAnchor = isHashLink && pathname !== "/";
            const LinkComponent = useNativeAnchor ? "a" : Link;

            return (
              <LinkComponent
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm text-zinc-400 transition-colors duration-300 hover:text-white group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </LinkComponent>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Recruiter Mode Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              toggleRecruiterMode();
              if (!isRecruiterMode) {
                setTimeout(() => {
                  const el = document.getElementById("recruiter-dashboard");
                  if (el) {
                    const offset = 80;
                    const y = el.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }, 100);
              }
            }}
            className={`hidden items-center gap-2 sm:flex ${
              isRecruiterMode ? "text-green-400 bg-green-500/10 hover:bg-green-500/20" : "text-zinc-500 hover:text-white"
            }`}
            title="Toggle Recruiter Mode"
          >
            <Briefcase className="h-4 w-4" />
            <span className="text-xs font-medium">{isRecruiterMode ? "Recruiter Mode ON" : "Recruiter Mode"}</span>
          </Button>

          {/* Command Palette Trigger */}
          <Button
            variant="ghost"
            size="icon"
            onClick={openCommandPalette}
            className="hidden text-zinc-500 hover:text-white sm:flex"
            aria-label="Open command palette"
          >
            <Search className="h-4 w-4" />
          </Button>

          <ThemeToggle />

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="/resume.html" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-white/5 bg-[var(--color-bg-secondary)]">
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile navigation">
                {navItems.map((item, i) => {
                  const isHashLink = item.href.startsWith("/#");
                  const useNativeAnchor = isHashLink && pathname !== "/";
                  const LinkComponent = useNativeAnchor ? "a" : Link;

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <LinkComponent
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-4 py-3 text-lg font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </LinkComponent>
                    </motion.div>
                  );
                })}
                <div className="mt-4 border-t border-white/5 pt-4">
                  <Button asChild className="w-full">
                    <a href="/resume.html" target="_blank" rel="noopener noreferrer">
                      View Resume
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}