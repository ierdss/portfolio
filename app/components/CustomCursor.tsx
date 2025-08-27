"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Flair() {
  const flairRef = useRef(null);

  useEffect(() => {
    const el = flairRef.current;
    if (!el) return;

    gsap.set(el, { xPercent: -50, yPercent: -50 });

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
    <div
      ref={flairRef}
      className="flair pointer-events-none fixed left-0 top-0 h-10 w-10 rounded-full bg-red-500"
    />
  );
}
