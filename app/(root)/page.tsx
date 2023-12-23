"use client";

import {
  Hero,
  Services,
  About,
  Technologies,
  Workflow,
  Experience,
  Projects,
  Testimonials,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center items-center">
      <Hero />
      <Services />
      <About />
      {/* <Workflow /> */}
      <Experience />
      <Technologies />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}
