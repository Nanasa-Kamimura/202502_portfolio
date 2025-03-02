import Hero from "./components/Hero"
import About from "./components/About"
import Works from "./components/Works"
import Skills from "./components/skills"
import Contact from "./components/contact"
import PageIndicator from "./components/PageIndicator"

export default function Home() {
  return (
    <main className="relative">
      <PageIndicator />
      <Hero />
      <About />
      <Works />
      <Skills />
      <Contact />
    </main>
  )
}

