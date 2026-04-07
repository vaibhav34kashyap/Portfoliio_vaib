'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Download } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header({ onSelect }) {
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
    { name: 'Home', key: 'home', type: 'section' },
    { name: 'About', key: 'about', type: 'section' },
    { name: 'Experience', key: 'experience', type: 'section' },
    { name: 'Projects', key: 'projects', type: 'section' },
    { name: 'Certifications', key: 'certifications', type: 'section' },
    { name: 'Testimonials', key: 'testimonials', type: 'section' },
    { name: 'Blog', key: 'blog', href: '/blog', type: 'link' },
    { name: 'Contact', key: 'contact', type: 'section' },
  ]

  const handleSelect = (key) => {
    setIsMobileMenuOpen(false)
    if (onSelect) onSelect(key)
  }

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
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <div className="w-10 h-9 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center p-0.5">
              <img src="/assets/images/logo (3).png" alt="Vaibhav Kashyap Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-bold hidden sm:block text-black dark:text-white">VK</span>
          </motion.div>
        </Link>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
         
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
          
          <a
            href="/Vaibhav_K_CV (1).pdf"
            download="Vaibhav_K_CV.pdf"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-emerald-500/20"
          >
            <Download size={15} />
            Download CV
          </a>
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
                    onClick={() => handleSelect(item.key)}
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
