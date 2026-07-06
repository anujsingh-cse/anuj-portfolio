import { notFound } from "next/navigation";
import { getBlogBySlug, blogPosts } from "@/data/blog";
import type { Metadata } from "next";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Spotlight from "@/components/effects/Spotlight";
import BlogDetailContent from "./BlogDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Anuj Singh`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      tags: post.tags,
      images: [{ url: post.coverImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Background />
      <Spotlight />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <BlogDetailContent post={post} />
      </main>
      <Footer />
    </>
  );
}
