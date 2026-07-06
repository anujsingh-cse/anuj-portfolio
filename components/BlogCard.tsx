import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="gradient-border group block overflow-hidden rounded-2xl border border-white/5 bg-[var(--color-bg-secondary)] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      <div className="p-6">
        {/* Category & Date */}
        <div className="flex items-center gap-3 text-xs text-zinc-500">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-cyan-400">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readingTime} min read
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-lg font-bold text-white transition-colors group-hover:text-cyan-400">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-xs text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More */}
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
          Read More
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
