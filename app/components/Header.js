'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Experience', href: '#experience', type: 'scroll' },
    { name: 'Projects', href: '#projects', type: 'scroll' },
    { name: 'Certifications', href: '#certifications', type: 'scroll' },
    { name: 'Testimonials', href: '#testimonials', type: 'scroll' },
    { name: 'Blog', href: '/blog', type: 'link' },
    { name: 'Contact', href: '#contact', type: 'scroll' },
  ]

  const scrollTo = (href) => {
    if (pathname !== '/') {
      window.location.href = '/' + href
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinkClass = (href) =>
    `relative text-sm font-medium transition-colors duration-200 group ${
      pathname === href
        ? 'text-emerald-500'
        : 'text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400'
    }`

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-200/80 backdrop-blur-md border-b border-emerald-500/10 shadow-sm shadow-emerald-500/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold gradient-text cursor-pointer select-none"
          >
            MSR
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) =>
            item.type === 'link' ? (
              <Link key={item.name} href={item.href} className={navLinkClass(item.href)}>
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-500 rounded-full transition-all duration-200 ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className="relative text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-500 rounded-full transition-all duration-200 group-hover:w-full" />
              </button>
            )
          )}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-dark-100 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-500 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark'
              ? <Sun size={18} className="text-gray-400" />
              : <Moon size={18} className="text-gray-600" />}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-dark-100 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen
              ? <X size={18} className="text-gray-600 dark:text-gray-300" />
              : <Menu size={18} className="text-gray-600 dark:text-gray-300" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-emerald-500/10 bg-white/95 dark:bg-dark-200/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col">
              {navItems.map((item) =>
                item.type === 'link' ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => { setIsMobileMenuOpen(false); scrollTo(item.href) }}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors"
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
