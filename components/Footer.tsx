import Link from "next/link";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { socialLinks } from "@/data/social";

const socialIcons: Record<string, React.ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  mail: Mail,
};

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      {/* Gradient divider */}
      <div className="section-divider" />

      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-black text-white">
                A
              </div>
              <span className="text-lg font-bold">
                <span className="gradient-text">Anuj</span>{" "}
                <span className="text-zinc-400">Singh</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              AI Engineer & Startup Builder. Building products that solve
              real-world problems with AI.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon] || Mail;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-zinc-400 transition-all hover:border-cyan-500/20 hover:text-white"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="flex items-center gap-1 text-xs text-zinc-600">
            © {new Date().getFullYear()} Anuj Singh. Built with{" "}
            <Heart className="h-3 w-3 text-red-500" /> using Next.js &
            TypeScript.
          </p>
          <div className="flex gap-4 text-xs text-zinc-600">
            <span>Next.js</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
