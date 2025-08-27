// app/hooks/useViewportHeight.ts
"use client";

import { useEffect } from "react";

export default function useViewportHeight() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVH(); // run once on mount
    window.removeEventListener("resize", setVH);
  }, []);
}
