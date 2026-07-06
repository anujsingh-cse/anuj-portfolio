import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import type { Metadata } from "next";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Spotlight from "@/components/effects/Spotlight";
import ProjectDetailContent from "./ProjectDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Anuj Singh`,
      description: project.description,
      type: "article",
      images: [{ url: project.coverImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Background />
      <Spotlight />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <ProjectDetailContent project={project} />
      </main>
      <Footer />
    </>
  );
}