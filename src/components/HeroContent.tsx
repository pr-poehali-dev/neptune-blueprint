import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { LineShadowText } from "@/components/line-shadow-text"

export default function HeroContent() {
  return (
    <main className="relative z-10 flex flex-col items-start justify-start sm:justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-12 max-w-6xl pt-4 sm:-mt-12 lg:-mt-24 pl-6 sm:pl-12 lg:pl-20">
      <div className="mb-4 sm:mb-8">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2">
          <span className="text-white text-xs md:text-xs">👨‍💻 Учитель информатики · Стаж 10+ лет</span>
        </div>
      </div>

      <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 text-balance">
        Информатика —
        <br />
        это{" "}
        <LineShadowText className="italic font-light" shadowColor="white">
          просто
        </LineShadowText>
      </h1>

      <p className="text-white/70 text-sm sm:text-base md:text-sm lg:text-2xl mb-6 sm:mb-8 max-w-2xl text-pretty">
        Обучаю программированию и цифровым технологиям —
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        интересно, понятно и с результатом.
      </p>

      <Button className="group relative bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base md:text-xs lg:text-lg font-semibold flex items-center gap-2 backdrop-blur-sm border border-violet-400/30 shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
        Записаться на урок
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-rotate-12 transition-transform duration-300" />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>
    </main>
  )
}
