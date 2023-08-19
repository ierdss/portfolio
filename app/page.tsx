"use client"

import { Hero, Services, About, Technologies, WorkFlow, WorkExperience, Projects, Testimonials, Contact,  } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Services />
      <About />
      <Technologies />
      <WorkFlow />
      <WorkExperience />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  )
}
