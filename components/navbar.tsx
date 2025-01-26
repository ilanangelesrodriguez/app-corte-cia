"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Info, Phone, User, Settings, LogIn } from "lucide-react"
import { Logo } from "@/components/icons"
import { ThemeSwitch } from "@/components/theme-switch"
import { LoginButton } from "@/components/buttons/loginButton"
import { siteConfig } from "@/config/site"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest("#mobile-menu") === null) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick)
    } else {
      document.removeEventListener("click", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [isMenuOpen, closeMenu]) // Added closeMenu to dependencies

  const navItems = [...siteConfig.leftNavItems, ...siteConfig.rightNavItems]

  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "home":
        return <Home size={20} />
      case "about":
        return <Info size={20} />
      case "contact":
        return <Phone size={20} />
      case "profile":
        return <User size={20} />
      case "settings":
        return <Settings size={20} />
      default:
        return null
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-background/60 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Logo className="block h-8 w-auto text-primary" />
                <span className="ml-1 font-bold text-lg md:text-xl">Corte & Cía</span>
              </Link>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-semibold ${
                  pathname === item.href
                    ? "text-primary bg-gray-300 dark:bg-gray-900"
                    : "text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {getIcon(item.label)}
                <span className="ml-2">{item.label}</span>
              </Link>
            ))}
            <div className="ml-4">
              <ThemeSwitch />
            </div>
            <div className="ml-4">
              <LoginButton />
            </div>
          </div>

          {/* Mobile login button */}
          <div className="flex items-center lg:hidden">
            <LoginButton />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 lg:hidden bg-background/60 backdrop-blur-md"
            id="mobile-menu"
          >
            <div className="relative w-4/5 min-h-screen bg-white dark:bg-gray-800 shadow-lg flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <Logo className="h-8 w-auto text-primary" />
              <button
                type="button"
                className="rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary p-2"
                onClick={closeMenu}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" />
              </button>
              </div>
              <div className="flex-grow overflow-y-auto">
              <div className="px-4 py-6 ">
                {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-md text-lg font-medium ${
                  pathname === item.href
                    ? "text-primary bg-gray-200 dark:bg-gray-700"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={toggleMenu}
                >
                  {getIcon(item.label)}
                  <span className="ml-2">{item.label}</span>
                </Link>
                ))}
              </div>
              </div>
              <div className="px-6 py-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                <Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  FAQ
                </Link>
                </li>
                <li>
                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Terms of Service
                </Link>
                </li>
                <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Privacy Policy
                </Link>
                </li>
              </ul>
              </div>
              <div className="m-auto p-4 border-t border-gray-200 dark:border-gray-700">
              <ThemeSwitch />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </nav>
  )
}


