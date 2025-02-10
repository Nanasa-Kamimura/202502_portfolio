import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    title: "Task Management App",
    description: "A responsive web application for managing tasks and projects with real-time updates.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays current and forecasted weather data for multiple locations.",
    technologies: ["React", "OpenWeatherMap API", "Chart.js"],
    link: "#",
  },
]

export default function Projects() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <a href={project.link} className="text-blue-600 hover:underline">
                View Project
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

