"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/types";

interface Props {
  post: BlogPost;
}

export default function BlogDetailContent({ post }: Props) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="container-narrow pb-20 pt-28">
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          All Posts
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-8 text-center"
      >
        <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400">
          {post.category}
        </span>
        
        <h1 className="heading-lg mt-6">{post.title}</h1>
        
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readingTime} min read
          </span>
        </div>
      </motion.div>

      {/* Cover Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-10 overflow-hidden rounded-2xl border border-white/5"
      >
        <div className="relative aspect-video bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="prose prose-invert prose-cyan mt-12 max-w-none lg:prose-lg"
      >
        {/* For now rendering plain text, later could use MDX or rehype */}
        <div className="body-lg whitespace-pre-wrap">{post.content}</div>
      </motion.div>

      {/* Footer / Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 border-t border-white/10 pt-8"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-400"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-zinc-500">Share:</span>
            <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full bg-white/5 text-zinc-400 hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2]">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full bg-white/5 text-zinc-400 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]">
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  shareUrl
                )}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
