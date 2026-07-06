"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { getPublishedPosts, getBlogCategories, getAllTags } from "@/data/blog";

export default function BlogPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTag, setActiveTag] = useState("all");

  const posts = getPublishedPosts();
  const categories = ["all", ...getBlogCategories()];
  const tags = ["all", ...getAllTags()];

  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory =
        activeCategory === "all" || p.category === activeCategory;
      const matchesTag = activeTag === "all" || p.tags.includes(activeTag);
      const matchesSearch =
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.content.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [posts, searchQuery, activeCategory, activeTag]);

  return (
    <div className="container-custom section-padding">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Journal
        </p>
        <h1 className="heading-lg mt-3">Blog & Articles</h1>
        <p className="body-md mx-auto mt-4 max-w-xl">
          Thoughts on AI engineering, LLM application development, building
          startups, and full-stack software architecture.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="mb-12 space-y-6">
        {/* Search Bar */}
        <div className="mx-auto flex max-w-2xl items-center justify-center">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-11 pr-4 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-cyan-500/50"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveTag("all");
              }}
              className={`rounded-full px-4 py-1.5 text-xs font-medium capitalize transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "border border-white/5 text-zinc-500 hover:border-white/10 hover:text-zinc-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`rounded-md px-3 py-1 text-[10px] font-medium uppercase tracking-wider transition-all duration-300 ${
                activeTag === tag
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  : "bg-white/5 text-zinc-500 hover:bg-white/10 hover:text-zinc-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${activeTag}-${searchQuery}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredPosts.length === 0 && (
        <p className="mt-16 text-center text-zinc-500">
          No posts match your filters.
        </p>
      )}
    </div>
  );
}
