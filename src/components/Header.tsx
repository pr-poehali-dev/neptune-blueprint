import { Menu } from "lucide-react"
import { ShimmerButton } from "@/components/shimmer-button"

interface HeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <>
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 lg:px-12">
        <div className="flex items-center space-x-2 pl-3 sm:pl-6 lg:pl-12">
          <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">ИТ-Педагог</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
            Обо мне
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
            Курсы
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
            Достижения
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
            Контакты
          </a>
        </nav>

        <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        <ShimmerButton className="hidden md:flex bg-violet-600 hover:bg-violet-700 text-white px-4 lg:px-6 py-2 rounded-xl text-sm lg:text-base font-medium shadow-lg">
          Связаться
        </ShimmerButton>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-20">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Обо мне
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Курсы
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Достижения
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Контакты
            </a>
            <ShimmerButton className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-lg w-fit">
              Связаться
            </ShimmerButton>
          </nav>
        </div>
      )}
    </>
  )
}
