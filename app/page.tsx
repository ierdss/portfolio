import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import CanvasTesting from '@/components/Testing'
import StarsCanvas from '@/components/canvas/Stars'

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className='relative z-0'>
        <CanvasTesting/>
        <StarsCanvas/>
      </div>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  )
}
