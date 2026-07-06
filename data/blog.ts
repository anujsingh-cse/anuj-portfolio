import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-rag-pipelines",
    title: "Building Production-Grade RAG Pipelines with LangChain",
    content: `Retrieval-Augmented Generation (RAG) has become the go-to architecture for building 
LLM applications that need access to external knowledge. In this post, I'll walk through 
the key patterns and lessons learned from building RAG systems in production.

## Why RAG?

Large Language Models are powerful, but they have a fundamental limitation: their knowledge 
is frozen at their training cutoff date. RAG solves this by combining the generative 
capabilities of LLMs with real-time information retrieval.

## Architecture Overview

A production RAG pipeline consists of several key components:

1. **Document Ingestion** — Processing and chunking documents
2. **Embedding Generation** — Converting text chunks to vector representations
3. **Vector Storage** — Storing embeddings in a vector database
4. **Retrieval** — Finding relevant chunks for a given query
5. **Generation** — Using retrieved context to generate responses

## Key Lessons

### Chunk Size Matters
Finding the right chunk size is crucial. Too small and you lose context. 
Too large and you waste token budget. I've found 500-1000 tokens with 
100 token overlap works well for most use cases.

### Hybrid Search is King
Combining semantic search (vector similarity) with keyword search (BM25) 
significantly improves retrieval quality. This is especially important for 
domain-specific terminology.

### Evaluation is Non-Negotiable
You need robust evaluation pipelines. Track metrics like retrieval recall, 
answer relevance, and faithfulness to build confidence in your system.`,
    excerpt:
      "A deep dive into building production-grade RAG pipelines with LangChain, covering architecture patterns, chunk strategies, and evaluation.",
    coverImage: "/projects/automation-engine.png",
    tags: ["AI", "RAG", "LangChain", "LLM", "Python"],
    category: "AI Engineering",
    published: true,
    readingTime: 8,
    createdAt: "2025-05-15",
    updatedAt: "2025-05-15",
  },
  {
    id: "2",
    slug: "nextjs-fullstack-saas",
    title: "Building a Full-Stack SaaS with Next.js, Prisma & PostgreSQL",
    content: `Next.js has evolved into a powerful full-stack framework. Here's how I architect 
SaaS applications using the App Router, Server Components, and modern tooling.

## The Stack

- **Next.js** — Full-stack React framework
- **Prisma** — Type-safe ORM
- **PostgreSQL** — Relational database
- **Tailwind CSS** — Utility-first styling
- **NextAuth** — Authentication
- **Stripe** — Payments

## Key Architecture Decisions

### Server Components by Default
React Server Components are the default in the App Router. Use them for data fetching 
and keep Client Components for interactivity. This dramatically reduces the JavaScript 
bundle sent to the client.

### API Routes as Microservices
Treat API routes as self-contained microservices. Each route handler should validate 
input, authenticate the user, perform the business logic, and return a structured response.

### Database-First Development
Define your Prisma schema first, then build the API and UI around it. This ensures 
your data model drives the application architecture.`,
    excerpt:
      "How I architect full-stack SaaS applications using Next.js App Router, Prisma ORM, and PostgreSQL with modern best practices.",
    coverImage: "/projects/podcast-platform.png",
    tags: ["Next.js", "SaaS", "Prisma", "PostgreSQL", "TypeScript"],
    category: "Web Development",
    published: true,
    readingTime: 12,
    createdAt: "2025-04-01",
    updatedAt: "2025-04-01",
  },
  {
    id: "3",
    slug: "ai-agents-langgraph",
    title: "Building AI Agents with LangGraph: A Practical Guide",
    content: `AI Agents represent the next evolution of LLM applications. Instead of simple 
prompt-response patterns, agents can reason, plan, and use tools to accomplish complex tasks. 
LangGraph makes building these agents structured and manageable.

## What is LangGraph?

LangGraph is a library built on top of LangChain that allows you to define agent workflows 
as graphs. Each node in the graph represents a step in the agent's reasoning process, and 
edges define the flow between steps.

## Building a Research Agent

Let's walk through building a research agent that can:
1. Break down complex questions into sub-queries
2. Search multiple sources for information
3. Synthesize findings into a comprehensive answer

## Key Takeaways

- **State management** is crucial for complex agent workflows
- **Tool design** directly impacts agent performance
- **Error handling** must be built into every node
- **Human-in-the-loop** patterns prevent runaway agents`,
    excerpt:
      "A practical guide to building AI agents with LangGraph, covering state management, tool design, and production patterns.",
    coverImage: "/projects/ai-hiring.png",
    tags: ["AI Agents", "LangGraph", "LangChain", "LLM", "Python"],
    category: "AI Engineering",
    published: true,
    readingTime: 10,
    createdAt: "2025-06-01",
    updatedAt: "2025-06-01",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPublishedPosts(): BlogPost[] {
  return blogPosts
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}

export function getBlogCategories(): string[] {
  const cats = new Set(blogPosts.map((p) => p.category));
  return Array.from(cats);
}

export function getAllTags(): string[] {
  const tags = new Set(blogPosts.flatMap((p) => p.tags));
  return Array.from(tags);
}
