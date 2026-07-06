"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionWrapper from "./SectionWrapper";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Calendar } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { socialLinks } from "@/data/social";
import { personal } from "@/data/personal";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const socialIcons: Record<string, React.ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  mail: Mail,
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <SectionWrapper id="contact" className="section-padding container-custom">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Get In Touch
        </p>
        <h2 className="heading-lg mt-3">Let&apos;s Connect</h2>
        <p className="body-md mx-auto mt-4 max-w-xl">
          I&apos;m always interested in AI, startups, automation, and exciting
          collaborations. Feel free to reach out!
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-zinc-300">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                {...register("name")}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-cyan-500/50"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-zinc-300">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                {...register("email")}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-cyan-500/50"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-zinc-300">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                {...register("subject")}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-cyan-500/50"
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-zinc-300">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                {...register("message")}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-cyan-500/50"
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-6 text-white shadow-lg shadow-blue-500/25"
            >
              {status === "loading" ? (
                "Sending..."
              ) : status === "success" ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Sent Successfully!
                </>
              ) : status === "error" ? (
                <>
                  <AlertCircle className="h-4 w-4" />
                  Failed — Try Again
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </motion.div>

        {/* Contact Info & Paths */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Availability Indicator */}
          <div className="flex items-center gap-3 rounded-2xl border border-green-500/20 bg-green-500/5 p-4">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <div>
              <p className="text-sm font-bold text-green-400">Currently taking introductory calls</p>
              <p className="text-xs text-zinc-400">Availability: 2 slots open this week</p>
            </div>
          </div>

          {/* Info Cards */}
          <a
            href={personal.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card flex items-center gap-4 p-5 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 transition-colors group-hover:bg-purple-500/20">
              <Calendar className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-zinc-500">Fastest Way to Connect</p>
              <p className="text-sm font-medium text-white transition-colors group-hover:text-purple-400">
                Schedule a 15-min discovery call →
              </p>
            </div>
          </a>

          <div className="glass-card flex items-center gap-4 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
              <Mail className="h-5 w-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm text-zinc-500">Direct Email</p>
              <a
                href={`mailto:${personal.email}`}
                className="text-sm font-medium text-white hover:text-cyan-400"
              >
                {personal.email}
              </a>
            </div>
          </div>

          <div className="glass-card flex items-center gap-4 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
              <MapPin className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-zinc-500">Location</p>
              <p className="text-sm font-medium text-white">{personal.location}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Social Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon] || Mail;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="glass-card flex items-center gap-3 p-4 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-zinc-400" />
                    <span className="text-sm font-medium text-zinc-300">
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}