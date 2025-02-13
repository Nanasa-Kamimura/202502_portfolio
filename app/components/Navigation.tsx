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

  useEffect(() => {
    // スクロールを無効化
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // クリーンアップ関数で元に戻す
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMenuOpen(false)
    }
  }

  return (
     <nav
      className={`fixed w-full z-50 h-20 flex items-center transition-all duration-300 ${
      isMenuOpen ? "bg-white/90 backdrop-blur-sm" : isScrolled ? "bg-white/90 backdrop-blur-sm" : ""
        }`}
    >

      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-xl font-light">
          PORTFOLIO
        </a>

        {/* スマホサイズのハンバーガーメニュー */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={27} />}
          </button>
        </div>

        {/* PCサイズのメニュー */}
        <div
          className={`hidden md:flex md:space-x-8 text-xl font-light md:relative bg-transparent transition-all duration-300`}
        >
          <a
            href="/#about"
            onClick={(e) => { e.preventDefault(); scrollToSection("about") }}
            className="block md:inline hover:text-gray-600 transition-colors py-2"
          >
            -About
          </a>
          <a
            href="/#works"
            onClick={(e) => { e.preventDefault(); scrollToSection("works") }}
            className="block md:inline hover:text-gray-600 transition-colors py-2"
          >
            -Works
          </a>
          <a
            href="/#skills"
            onClick={(e) => { e.preventDefault(); scrollToSection("skills") }}
            className="block md:inline hover:text-gray-600 transition-colors py-2"
          >
            -Skills
          </a>
          <a
            href="/#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection("contact") }}
            className="block md:inline hover:text-gray-600 transition-colors py-2"
          >
            -Contact
          </a>
        </div>

        {/* スマホサイズのメニューが開かれた時 */}
        <div
          className={`md:hidden fixed inset-0 top-12 bg-white/95 z-40 ${
            isMenuOpen ? "flex" : "hidden"
          } flex-col h-screen items-center justify-center space-y-4 pt-16`}
        >
          <a
            href="/#about"
            onClick={(e) => { e.preventDefault(); scrollToSection("about") }}
            className="block text-xl font-light hover:text-gray-600 transition-colors py-2"
          >
            About
          </a>
          <a
            href="/#works"
            onClick={(e) => { e.preventDefault(); scrollToSection("works") }}
            className="block text-xl font-light hover:text-gray-600 transition-colors py-2"
          >
            Works
          </a>
          <a
            href="/#skills"
            onClick={(e) => { e.preventDefault(); scrollToSection("skills") }}
            className="block text-xl font-light hover:text-gray-600 transition-colors py-2"
          >
            Skills
          </a>
          <a
            href="/#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection("contact") }}
            className="block text-xl font-light hover:text-gray-600 transition-colors py-2"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
