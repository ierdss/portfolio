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
import Head from "next/head";

import ScrollSpy from "react-ui-scrollspy";

export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center items-center">
      <ScrollSpy
        scrollThrottle={300}
        offsetBottom={100}
        updateHistoryStack={true}
        useBoxMethod={true}
      >
        <Hero />
        <Services />
        <About />
        {/* <Workflow /> */}
        {/* <Experience /> */}
        <Technologies />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </ScrollSpy>
    </main>
  );
}
