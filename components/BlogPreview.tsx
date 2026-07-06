"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import BlogCard from "./BlogCard";
import { getPublishedPosts } from "@/data/blog";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPreview() {
  const posts = getPublishedPosts().slice(0, 3);
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  if (!featuredPost) return null;

  return (
    <SectionWrapper id="blog" className="section-padding container-custom">
      <div className="mb-16 flex flex-col items-center text-center">
        <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cyan-400">
          Writing & Thoughts
        </span>
        <h2 className="heading-lg mt-4">Deep Dives & Engineering</h2>
        <p className="body-md mt-4 max-w-2xl text-zinc-400">
          I write about LLM architecture, React performance, and building products.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Featured Deep Dive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-colors hover:border-cyan-500/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 group-hover:opacity-100" />
          
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img 
              src={featuredPost.coverImage} 
              alt={featuredPost.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                Featured Deep Dive
              </span>
              <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                {featuredPost.title}
              </h3>
            </div>
          </div>
          
          <div className="relative flex flex-1 flex-col p-6 sm:p-8">
            <p className="text-zinc-400 line-clamp-3">
              {featuredPost.excerpt}
            </p>
            <div className="mt-auto pt-6 flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-500">{featuredPost.readingTime} min read</span>
              <Link 
                href={`/blog/${featuredPost.slug}`}
                className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Read Article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <Link href={`/blog/${featuredPost.slug}`} className="absolute inset-0 z-0" aria-label={`Read ${featuredPost.title}`} />
        </motion.div>

        {/* Other Posts List */}
        <div className="flex flex-col gap-6">
          {otherPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 transition-colors hover:border-white/10 hover:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-zinc-500">{post.createdAt.split('T')[0]}</span>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                <span className="text-xs font-medium text-zinc-500">{post.readingTime} min read</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-6">
                <span className="flex items-center gap-2 text-sm font-medium text-white">
                  Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-0" aria-label={`Read ${post.title}`} />
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-auto pt-4"
          >
            <Button asChild variant="outline" className="w-full gap-2 rounded-xl border-white/10 py-6 text-zinc-300 hover:bg-white/5 hover:text-white">
              <Link href="/blog">
                View All Posts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
