"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, Calendar, Lightbulb, BarChart3, Layers, Menu } from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Heart },
  { name: "Pipeline", href: "/pipeline", icon: Layers },
  { name: "Ideas", href: "/ideas", icon: Lightbulb },
  { name: "Scheduler", href: "/scheduler", icon: Calendar },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-xl bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              LetContentFlow 💕
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-pink-100 text-pink-600 shadow-sm"
                      : "text-gray-600 hover:text-pink-500 hover:bg-pink-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-pink-500 hover:bg-pink-50"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-100">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-pink-100 text-pink-600 border-r-2 border-pink-400"
                      : "text-gray-600 hover:text-pink-500 hover:bg-pink-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}