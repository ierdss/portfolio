"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLImageElement | null>(null);
  const cursorPng = "/chill_guy.png";

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    // Center image on cursor
    gsap.set(el, { xPercent: -50, yPercent: -50 });

    // Make image smoothly follow cursor
    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <img
      ref={cursorRef}
      src={cursorPng}
      alt="cursor"
      className="pointer-events-none fixed left-0 top-0 z-50 h-24 w-24"
    />
  );
}
