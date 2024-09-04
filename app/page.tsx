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
} from "@/components";
import Head from "next/head";

import ScrollSpy from "react-ui-scrollspy";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <ScrollSpy
        scrollThrottle={300}
        offsetBottom={100}
        updateHistoryStack={true}
        useBoxMethod={true}
      >
        <Hero />
        <Services />
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Testimonials />
      </ScrollSpy>
    </main>
  );
}
