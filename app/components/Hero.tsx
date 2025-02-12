import Image from "next/image"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <Image
        src="/placeholder-top.png"
        alt="Background"
        fill
        className="object-cover opacity-50"
        priority
      />
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-light leading-tight max-w-3xl">
          Nanasa Kamimura
        </h1>
        <p className="mt-4 text-lg font-light text-gray-600">Web Director based in Tokyo</p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm">
        <span className="mb-2">SCROLL</span>
        <ArrowDown size={20} className="animate-bounce" />
      </div>
    </section>
  )
}
