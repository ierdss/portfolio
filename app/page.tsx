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
      <ScrollSpy>
        <Hero />
        <Services />
        <div id="about">
          <About />
        </div>
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
