"use client"

import { useState, useEffect } from "react"

export default function PageIndicator() {
  const [activeSection, setActiveSection] = useState(0)
  const sections = ["hero", "about", "works", "skills", "contact"]

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((id) => document.getElementById(id))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sectionElements.forEach((section, index) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((_, index) => (
        <div
          key={index}
          className={`w-[2px] h-8 transition-all duration-300 ${
            index === activeSection ? "bg-black h-12" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

