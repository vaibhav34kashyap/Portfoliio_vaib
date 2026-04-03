'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, ArrowRight, Code2, Layers, Zap } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'
import GradualBlur from './GradualBlur'

export default function Hero() {
  const { theme } = useTheme()

  const stats = [
    { value: '9+', label: 'Projects' },
    { value: '2+', label: 'Years Exp.' },
    { value: '98%', label: 'Satisfaction' },
  ]

  const tags = ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']

  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-white dark:bg-dark-300 px-4 sm:px-6 pt-20 pb-10">

      {/* Subtle grid background */}
      <div className="absolute inset-0 dark:hidden bg-[linear-gradient(rgba(16,185,129,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.07)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(rgba(156,163,175,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(156,163,175,0.15)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Image Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 flex justify-center lg:justify-center"
          >
            <div className="relative">
              {/* Decorative corner accents */}
              <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-emerald-500 rounded-tl-lg" />
              <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-emerald-500 rounded-br-lg" />

              {/* Outer ring */}
              <div className="p-1.5 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-transparent">
                <div className="p-1 rounded-2xl bg-white dark:bg-dark-200">
                  <Image
                    src={theme === 'dark'
                      ? '/assets/images/Mohit Elante photo.jpeg'
                      : '/assets/images/Mohit Portfolio photo.jpeg'}
                    alt="Mohit Singh Rawat"
                    width={420}
                    height={480}
                    className="w-72 h-80 sm:w-96 sm:h-[420px] lg:w-[420px] lg:h-[500px] object-cover object-top rounded-xl shadow-xl"
                    priority
                  />
                </div>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute -top-4 -right-4 bg-white dark:bg-dark-100 border border-emerald-200 dark:border-emerald-800 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
              >
                <Code2 size={14} className="text-emerald-500" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">Frontend Dev</span>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-100 border border-emerald-200 dark:border-emerald-800 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
              >
                <Zap size={14} className="text-emerald-500" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">Open to Work</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:justify-center lg:text-left"
           >
             <motion.div className='mx-auto'>
            {/* Availability pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Available for new projects</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3"
            >
              <span className="text-gray-900 dark:text-white">Hi, I'm</span>
              <br />
              <span className="gradient-text">Mohit Singh</span>
              <br />
              <span className="gradient-text">Rawat</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <Layers size={16} className="text-emerald-500" />
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
                Frontend Developer & React Specialist
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-gray-500 dark:text-gray-400 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Crafting high-performance web applications for SaaS, Finance & Corporate platforms.
              Specialized in React, Next.js, and modern UI/UX.
            </motion.p>

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg shadow-emerald-500/20"
              >
                Hire Me <ArrowRight size={16} />
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                View Projects
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 }}
              className="flex items-center justify-center lg:justify-start gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-sm text-gray-400 dark:text-gray-500">Follow me:</span>
              <a
                href="https://github.com/mohit-singh-rawat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohit-singh-rawat-2a1112299/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:rawat.mohitsingh7455@gmail.com?subject=Portfolio Contact&body=Hi Mohit, I would like to get in touch with you."
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
            </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
        <ArrowDown className="animate-bounce text-gray-400" size={22} />
      </div>


    </section>
  )
}
