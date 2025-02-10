import { Button } from "@/components/ui/button"

export default function Introduction() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">John Doe</h1>
      <p className="text-xl mb-6">Full Stack Developer</p>
      <p className="mb-8 max-w-2xl mx-auto">
        I'm a passionate developer with experience in building web applications using modern technologies. I love
        creating efficient, scalable, and user-friendly solutions to complex problems.
      </p>
      <Button asChild>
        <a href="#contact">Contact</a>
      </Button>
    </section>
  )
}

