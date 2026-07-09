"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Folder, ArrowRight, Command } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

interface CommandItem {
  id: string;
  label: string;
  href: string;
  category: string;
  icon: React.ElementType;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const items: CommandItem[] = useMemo(() => {
    const pageItems: CommandItem[] = [
      { id: "home", label: "Home", href: "/", category: "Pages", icon: ArrowRight },
      { id: "projects", label: "Projects", href: "/#projects", category: "Pages", icon: Folder },
      { id: "blog", label: "Blog", href: "/blog", category: "Pages", icon: FileText },
      { id: "contact", label: "Contact", href: "/#contact", category: "Pages", icon: ArrowRight },
    ];

    const projectItems: CommandItem[] = projects.map((p) => ({
      id: `project-${p.slug}`,
      label: p.title,
      href: `/projects/${p.slug}`,
      category: "Projects",
      icon: Folder,
    }));

    const blogItems: CommandItem[] = blogPosts.map((p) => ({
      id: `blog-${p.slug}`,
      label: p.title,
      href: `/blog/${p.slug}`,
      category: "Blog",
      icon: FileText,
    }));

    return [...pageItems, ...projectItems, ...blogItems];
  }, []);

  const filtered = useMemo(() => {
    if (!query) return items;
    const q = query.toLowerCase();
    return items.filter((item) => item.label.toLowerCase().includes(q));
  }, [query, items]);

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      setQuery("");
      router.push(href);
    },
    [router]
  );

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    function onCustomOpen() {
      setOpen(true);
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onCustomOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onCustomOpen);
    };
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        navigate(filtered[selectedIndex].href);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, selectedIndex, navigate]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-[20%] z-[101] w-full max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-bg-secondary)] shadow-2xl"
            role="dialog"
            aria-label="Command palette"
          >
            {/* Input */}
            <div className="flex items-center gap-3 border-b border-white/5 px-4">
              <Search className="h-5 w-5 text-zinc-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, projects, blog..."
                className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-zinc-500"
                autoFocus
              />
              <kbd className="flex items-center gap-0.5 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-zinc-500">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div 
              className="max-h-72 overflow-y-auto p-2"
              role="listbox"
              aria-label="Search results"
            >
              {filtered.length === 0 ? (
                <p className="px-4 py-8 text-center text-sm text-zinc-500">
                  No results found.
                </p>
              ) : (
                <>
                  {["Pages", "Projects", "Blog"].map((category) => {
                    const categoryItems = filtered.filter(
                      (item) => item.category === category
                    );
                    if (categoryItems.length === 0) return null;
                    return (
                      <div key={category}>
                        <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                          {category}
                        </p>
                        {categoryItems.map((item) => {
                          const globalIndex = filtered.indexOf(item);
                          return (
                            <button
                              key={item.id}
                              onClick={() => navigate(item.href)}
                              onMouseEnter={() =>
                                setSelectedIndex(globalIndex)
                              }
                              role="option"
                              aria-selected={selectedIndex === globalIndex}
                              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                                selectedIndex === globalIndex
                                  ? "bg-white/5 text-white"
                                  : "text-zinc-400 hover:text-white"
                              }`}
                            >
                              <item.icon className="h-4 w-4 text-zinc-500" />
                              <span className="flex-1">{item.label}</span>
                              {selectedIndex === globalIndex && (
                                <ArrowRight className="h-3 w-3 text-zinc-500" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    );
                  })}
                </>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-white/5 px-4 py-2 text-[10px] text-zinc-600">
              <span className="flex items-center gap-1">
                <Command className="h-2.5 w-2.5" />K to toggle
              </span>
              <span>↑↓ navigate · ↵ select</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
