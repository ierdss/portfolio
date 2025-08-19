"use client";

import { Experience, Hero, Projects, Skills } from "@/components";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
