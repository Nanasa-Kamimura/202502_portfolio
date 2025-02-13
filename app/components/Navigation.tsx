"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      setIsMenuOpen(false)
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
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className={`md:flex space-x-8 text-sm ${isMenuOpen ? "block" : "hidden"} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}>
          <a href="/#about" onClick={(e) => { e.preventDefault(); scrollToSection("about") }} className="block md:inline hover:text-gray-600 transition-colors py-2">
            ABOUT
          </a>
          <a href="/#works" onClick={(e) => { e.preventDefault(); scrollToSection("works") }} className="block md:inline hover:text-gray-600 transition-colors py-2">
            WORKS
          </a>
          <a href="/#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills") }} className="block md:inline hover:text-gray-600 transition-colors py-2">
            SKILLS
          </a>
          <a href="/#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact") }} className="block md:inline hover:text-gray-600 transition-colors py-2">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  )
}
