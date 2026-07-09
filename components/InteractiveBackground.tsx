"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useRecruiterMode } from "@/components/providers/RecruiterModeProvider";

interface Particle {
  x: number;
  y: number;
  z: number;
  ox: number;
  oy: number;
  oz: number;
  color: string;
  speed: number;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const { isRecruiterMode } = useRecruiterMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 120;
    const focalLength = 400; // 3D Camera focal length
    const centerOffset = 500; // Z distance offset
    const maxDistance = 150; // Constellation line threshold

    let rotX = 0;
    let rotY = 0;

    // Handle Resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Mouse Move Listener
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse positions to range [-0.5, 0.5]
      mouseRef.current.targetX = (e.clientX / window.innerWidth) - 0.5;
      mouseRef.current.targetY = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Initialize 3D Particles
    const colors = ["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"];
    particles = Array.from({ length: particleCount }).map(() => {
      const x = (Math.random() - 0.5) * 800;
      const y = (Math.random() - 0.5) * 800;
      const z = (Math.random() - 0.5) * 800;
      return {
        x,
        y,
        z,
        ox: x,
        oy: y,
        oz: z,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.1 + Math.random() * 0.4,
      };
    });

    // Render loop
    const render = () => {
      // Smoothly interpolate mouse positions for visual lag/ease
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Adjust rotation angles based on mouse positions
      const targetRotX = mouseRef.current.y * 0.3;
      const targetRotY = mouseRef.current.x * 0.3;
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Clear screen
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.0003;
      const widthHalf = canvas.width / 2;
      const heightHalf = canvas.height / 2;

      // In Recruiter Mode, make the background clean & low-opacity
      const opacityMultiplier = isRecruiterMode ? 0.25 : 1.0;
      const lineOpacityMultiplier = isRecruiterMode ? 0.15 : 0.6;

      // Update positions using sine/cosine flow field
      const projected: { x: number; y: number; z: number; color: string; scale: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Dynamic flow movement over time
        p.x = p.ox + Math.sin(time + p.oy * 0.008) * 40;
        p.y = p.oy + Math.cos(time + p.ox * 0.008) * 40;

        // 3D Rotations
        // Rotate around Y Axis (X & Z coordinate shifts)
        let rx1 = p.x * cosY - p.z * sinY;
        let rz1 = p.x * sinY + p.z * cosY;

        // Rotate around X Axis (Y & Z coordinate shifts)
        let ry2 = p.y * cosX - rz1 * sinX;
        let rz2 = p.y * sinX + rz1 * cosX;

        // Perspective projection calculation
        const zDepth = rz2 + centerOffset;
        if (zDepth > 0) {
          const scale = focalLength / zDepth;
          const px = rx1 * scale + widthHalf;
          const py = ry2 * scale + heightHalf;

          projected.push({
            x: px,
            y: py,
            z: zDepth,
            color: p.color,
            scale: scale,
          });
        }
      }

      // Draw lines between nearby particles
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];

          // 2D Distance
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.08 * Math.min(p1.scale, p2.scale) * lineOpacityMultiplier;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = theme === "light" 
              ? `rgba(59, 130, 246, ${opacity * 1.5})` 
              : `rgba(6, 182, 212, ${opacity})`;
            ctx.lineWidth = 0.5 * Math.min(p1.scale, p2.scale);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const radius = Math.max(0.5, p.scale * 2.2);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        
        const opacity = Math.min(1, p.scale * 0.7) * opacityMultiplier;
        
        ctx.fillStyle = p.color;
        ctx.globalAlpha = opacity;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    // Clean up event listeners and frames on unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, theme, isRecruiterMode]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-40 h-full w-full"
      style={{ opacity: theme === "light" ? 0.3 : 0.7 }}
    />
  );
}
