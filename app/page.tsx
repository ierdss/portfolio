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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Andrei Sager Portfolio</title>
        <meta
          name="description"
          content="My personal online portfolio as a Software Developer."
          key="desc"
        />

        <meta property="og:image" content="/Me.png" />
        <meta property="og:url" content="https://andreiportfolio.vercel.app" />
        <meta property="og:site_name" content="andreiportfolio.vercel.app" />
        <meta property="og:title" content="My Personal Online Portfolio" />
        <meta
          property="og:description"
          content="My personal online portfolio as a Software Developer."
        />

        <meta name="twitter:image" content="/Me.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Personal Online Portfolio" />
        <meta
          name="twitter:description"
          content="My personal online portfolio as a Software Developer."
        />
      </Head>

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
