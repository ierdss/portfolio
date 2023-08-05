"use client"

import { Hero, StarsCanvas, About, Projects, Contact } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className='relative z-0'>
        <Hero/>
        <StarsCanvas/>
      </div>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  )
}
