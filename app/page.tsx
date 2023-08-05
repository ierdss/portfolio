import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import CanvasTesting from '@/components/Hero'
import StarsCanvas from '@/components/canvas/Stars'

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
