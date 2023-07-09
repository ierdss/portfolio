import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

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
