"use client"

import { Hero, StarsCanvas, About, Projects, Contact, Technologies } from '@/components'
import LoadingOverlay from '@/components/LoadingOverlay'

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <LoadingOverlay/>
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
