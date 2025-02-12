"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header className="bg-winter-blue-100 dark:bg-winter-blue-800 shadow-md">
      <nav className="container max-w-screen-md mx-auto px-2 sm:px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-winter-blue-800 dark:text-winter-blue-100">山田太郎</h1>
        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <Sun className="h-[1.2rem] w-[1.2rem] text-winter-blue-100" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem] text-winter-blue-800" />
          )}
        </Button>
      </nav>
    </header>
  )
}
