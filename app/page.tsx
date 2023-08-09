"use client"

import { Hero, StarsCanvas, About, Projects, Contact, Technologies } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className='relative z-0'>
        <Hero/>
        <StarsCanvas/>
      </div>
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
    </main>
  )
}
