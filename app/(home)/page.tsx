"use client";

import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
    </div>
  );
}
