"use client"

import { Hero, StarsCanvas, About, Projects, Contact, Technologies } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  )
}
