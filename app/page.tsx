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

import ScrollSpy from "react-ui-scrollspy";

export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center items-center">
      <ScrollSpy scrollThrottle={100}>
        <Hero />
        <Services />
        <About />
        {/* <Workflow /> */}
        <Experience />
        <Technologies />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </ScrollSpy>
    </main>
  );
}
