'use client'

import { motion } from 'framer-motion'
import { Home, User, Briefcase, FolderOpen, Award, MessageSquare, BookOpen, Mail } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { name: 'Home', key: 'home', type: 'section', icon: Home },
  { name: 'About', key: 'about', type: 'section', icon: User },
  { name: 'Experience', key: 'experience', type: 'section', icon: Briefcase },
  { name: 'Projects', key: 'projects', type: 'section', icon: FolderOpen },
  { name: 'Certifications', key: 'certifications', type: 'section', icon: Award },
  { name: 'Testimonials', key: 'testimonials', type: 'section', icon: MessageSquare },
  { name: 'Blog', key: 'blog', href: '/blog', type: 'link', icon: BookOpen },
  { name: 'Contact', key: 'contact', type: 'section', icon: Mail },
]

export default function Sidebar({ activeSection, onSelect }) {
  return (
    <motion.aside
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ top: '25%', transform: 'translateY(-50%)' }}
      className="fixed left-0 z-50 hidden md:flex flex-col items-center gap-2 py-4 px-2 bg-white/80 dark:bg-dark-200/80 backdrop-blur-md border border-emerald-500/10 rounded-r-2xl shadow-lg shadow-emerald-500/5"
    >
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = activeSection === item.key
        const baseClass = `relative flex items-center justify-center p-2.5 rounded-xl transition-all duration-200 group ${
          isActive
            ? 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
            : 'text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
        }`

        const tooltip = (
          <span className="absolute left-full ml-3 px-2 py-1 text-sm font-medium bg-gray-900 dark:bg-gray-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            {item.name}
          </span>
        )

        return item.type === 'link' ? (
          <Link key={item.name} href={item.href} className={baseClass}>
            <Icon size={21} />
            {tooltip}
          </Link>
        ) : (
          <button key={item.name} onClick={() => onSelect(item.key)} className={baseClass}>
            <Icon size={21} />
            {tooltip}
          </button>
        )
      })}
    </motion.aside>
  )
}
