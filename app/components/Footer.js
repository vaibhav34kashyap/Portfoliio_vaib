'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, url: 'https://github.com/mohit-singh-rawat' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/mohit-singh-rawat-2a1112299/' },
    { name: 'Email', icon: <Mail size={18} />, url: 'mailto:rawat.mohitsingh7455@gmail.com' },
  ]

  const columns = [
    {
      heading: 'Portfolio',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blog', href: '#blog' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { name: 'GitHub', href: 'https://github.com/mohit-singh-rawat' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohit-singh-rawat-2a1112299/' },
        { name: 'Resume', href: '#' },
      ],
    },
    {
      heading: 'Contact',
      links: [
        { name: 'Contact Me', href: '#contact' },
        { name: 'Email', href: 'mailto:rawat.mohitsingh7455@gmail.com' },
        { name: 'Hire Me', href: '#contact' },
      ],
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-950 dark:via-[#0a1628] dark:to-gray-950 text-gray-800 dark:text-white border-t border-emerald-100 dark:border-gray-800">
      <div className="container mx-auto px-6 sm:px-10 py-14 flex flex-col gap-10">

        {/* Main row */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* Left — Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-emerald-500 flex items-center justify-center text-white font-black text-sm">M</div>
              <span className="font-bold text-gray-900 dark:text-white text-lg">Mohit Singh Rawat</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Frontend Developer crafting clean, responsive web experiences — making ideas easier to build, share, and scale.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Link columns */}
          <div className="flex flex-wrap gap-10 sm:gap-16">
            {columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{col.heading}</p>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-800" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Mohit Singh Rawat. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
