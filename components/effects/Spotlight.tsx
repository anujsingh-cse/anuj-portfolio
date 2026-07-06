"use client";

import { useEffect, useRef, useCallback } from "react";

export default function Spotlight() {
  const posRef = useRef({ x: 0, y: 0 });
  const elRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const update = useCallback(() => {
    if (elRef.current) {
      elRef.current.style.background = `radial-gradient(600px at ${posRef.current.x}px ${posRef.current.y}px, rgba(59,130,246,0.08), transparent 80%)`;
    }
  }, []);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      posRef.current = { x: e.clientX, y: e.clientY };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  return (
    <div
      ref={elRef}
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
      aria-hidden="true"
    />
  );
}