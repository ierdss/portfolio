"use client";

import {
  Hero,
  Services,
  About,
  Technologies,
  Experience,
  Projects,
  Testimonials,
} from "@/components";

import ScrollSpy from "react-ui-scrollspy";

export default function Home() {
  return (
    <ScrollSpy
      scrollThrottle={300}
      offsetBottom={100}
      updateHistoryStack={true}
      useBoxMethod={true}
    >
      <main className="flex w-full flex-col items-center justify-center">
        <Hero />
        <Services />
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Testimonials />
      </main>
    </ScrollSpy>
  );
}
