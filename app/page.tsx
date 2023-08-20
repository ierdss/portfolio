"use client"

import { Hero, Services, About, Technologies, Workflow, WorkExperience, Projects, Testimonials, Contact,  } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Services />
      <About />
      <Technologies />
      <Workflow />
      <WorkExperience />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  )
}
