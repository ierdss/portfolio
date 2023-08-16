"use client"

import { Hero, About, Projects, Contact } from '@/components'

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
