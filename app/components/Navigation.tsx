"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  const sections = ["top", "about", "works", "skills", "contact"];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      if (window.scrollY < 10) {
        // スクロールがほぼ0なら「top」に強制リセット
        setActiveSection("top");
        return;
      }

      const newActiveSection = sections.find((id) => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      if (newActiveSection) {
        setActiveSection(newActiveSection);
      }

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 h-20 flex items-center transition-all duration-300 ${
        isMenuOpen ? "bg-white/90 backdrop-blur-sm" : isScrolled ? "bg-white/90 backdrop-blur-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-xl font-light">PORTFOLIO</a>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={27} />}
          </button>
        </div>

        <div className="hidden md:flex md:space-x-8 text-xl font-light md:relative bg-transparent transition-all duration-300">
          {sections.map((section) => (
            <a
              key={section}
              href={`/#${section}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(section); }}
              className={`block md:inline hover:text-gray-600 transition-colors py-2 ${
                activeSection === section ? "font-bold text-black" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
