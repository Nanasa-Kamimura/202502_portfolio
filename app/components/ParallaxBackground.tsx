"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function ParallaxBackground() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <Image
        src="/winter-blue-background.jpg" // 冬の青をイメージした背景画像に変更
        alt="Winter Blue Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />
    </div>
  )
}

