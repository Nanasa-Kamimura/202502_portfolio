"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const handleScroll = () => setIsScrolled(window.scrollY > 50)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-white/90 backdrop-blur-sm" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-xl font-light">
          PORTFOLIO
        </a>
        <div className="space-x-8 text-sm">
          <a href="/#about" onClick={(e) => { e.preventDefault(); scrollToSection("about") }} className="hover:text-gray-600 transition-colors">
            ABOUT
          </a>
          <a href="/#works" onClick={(e) => { e.preventDefault(); scrollToSection("works") }} className="hover:text-gray-600 transition-colors">
            WORKS
          </a>
          <a href="/#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills") }} className="hover:text-gray-600 transition-colors">
            SKILLS
          </a>
          <a href="/#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact") }} className="hover:text-gray-600 transition-colors">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  )
}
