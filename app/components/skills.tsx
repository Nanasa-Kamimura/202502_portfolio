const skills = [
  "PowerPoint",
  "Word",
  "Excel",
  "figma",
  "XD",
  "Illustrator",
  "Photoshop",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Git",
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-white px-4 py-2 rounded-full shadow">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
