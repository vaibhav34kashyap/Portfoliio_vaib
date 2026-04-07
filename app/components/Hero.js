'use client'

import { motion, useMotionValue, useTransform, useSpring, animate } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, ArrowRight, Code2, Layers, Zap } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'
import { useRef, useEffect, useState } from 'react'

// Typewriter hook
function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, display.length + 1))
        if (display.length + 1 === current.length) setTimeout(() => setDeleting(true), pause)
      } else {
        setDisplay(current.slice(0, display.length - 1))
        if (display.length - 1 === 0) {
          setDeleting(false)
          setWordIdx((i) => (i + 1) % words.length)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [display, deleting, wordIdx, words, speed, pause])

  return display
}

// Count-up hook
function useCountUp(target, duration = 1.5, start = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    const num = parseFloat(target)
    const suffix = target.replace(/[0-9.]/g, '')
    const controls = animate(0, num, {
      duration,
      onUpdate: (v) => setVal(Math.floor(v) + suffix),
    })
    return controls.stop
  }, [start, target, duration])
  return val || '0'
}

// Single stat with count-up
function StatItem({ value, label }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const count = useCountUp(value, 1.5, visible)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center lg:text-left">
      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{count}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  )
}

// Twinkling particles
const PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: (i * 13 + 5) % 100,
  y: (i * 17 + 10) % 100,
  size: 2,
  delay: i * 0.5,
  dur: 3 + (i % 3),
}))

export default function Hero() {
  const { theme } = useTheme()
  const roles = ['Frontend UI Developer', 'React.js Developer', 'Next.js Developer', 'UI/UX Enthusiast']
  const typedRole = useTypewriter(roles)

  const stats = [
    { value: '9+', label: 'Projects' },
    { value: '2+', label: 'Years Exp.' },
    { value: '98%', label: 'Satisfaction' },
  ]

  const tags = ['HTML', 'CSS3', 'MUI', 'GitHub', 'React.js', 'Bootstrap', 'Animations', 'JavaScript']

  // 3D tilt
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [18, -18]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-18, 18]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0) }

  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-white dark:bg-dark-300 px-4 sm:px-6 pt-20  pb-10">

      {/* Grid background */}
      <div className="absolute inset-0 dark:hidden bg-[linear-gradient(rgba(16,185,129,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.07)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(rgba(156,163,175,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(156,163,175,0.15)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Twinkling particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-emerald-400"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ opacity: [0, 0.7, 0], scale: [0.8, 1.4, 0.8] }}
            transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <motion.div className="absolute top-1/4 -left-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />

      {/* Floating Code Tags */}
      {[
        { code: '<Link />', x: 6,  y: 12, dur: 6,  delay: 0 },
        { code: 'useState()', x: 75, y: 20, dur: 7, delay: 0.5 },
        { code: 'const App', x: 4,  y: 52, dur: 5, delay: 1 },
        { code: '.map()',    x: 68, y: 80, dur: 7.5, delay: 0.3 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: item.dur, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
        >
          <div className="px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold bg-white/60 dark:bg-dark-100/30 backdrop-blur-sm border border-emerald-300/20 dark:border-emerald-700/20 text-emerald-600/50 dark:text-emerald-400/50">
            {item.code}
          </div>
        </motion.div>
      ))}

      {/* Floating Geometric Shapes */}
      <motion.div className="absolute bottom-24 left-[8%] w-10 h-10 border-2 border-emerald-500/30 rotate-45 pointer-events-none"
        animate={{ rotateZ: [45, 225, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute top-20 left-[20%] w-8 h-8 pointer-events-none"
        animate={{ y: [0, -20, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}>
        <svg viewBox="0 0 32 32" fill="none"><polygon points="16,2 30,28 2,28" stroke="rgba(16,185,129,0.35)" strokeWidth="2" /></svg>
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Image Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
              className="relative" style={{ perspective: '900px' }}>

              {/* Orbit ring */}
              <motion.div
                className="absolute inset-0 m-auto pointer-events-none"
                style={{ width: '110%', height: '110%', top: '-5%', left: '-5%' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              >
                <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none">
                  <ellipse cx="60" cy="60" rx="58" ry="58" stroke="rgba(16,185,129,0.18)" strokeWidth="1.5" strokeDasharray="6 6" />
                  <circle cx="60" cy="2" r="5" fill="rgba(16,185,129,0.7)" />
                </svg>
              </motion.div>

              {/* Animated glow ring */}
              <motion.div className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{ boxShadow: ['0 0 0px 0px rgba(16,185,129,0)', '0 0 40px 10px rgba(16,185,129,0.25)', '0 0 0px 0px rgba(16,185,129,0)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />

              {/* Corner accents */}
              <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-emerald-500 rounded-tl-lg" />
              <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-emerald-500 rounded-br-lg" />

              {/* 3D tilt wrapper */}
              <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
                <div className="p-1.5 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-transparent">
                  <div className="p-1 rounded-2xl bg-white dark:bg-dark-200">
                    <Image
                      src={theme === 'dark' ? '/assets/images/vaibhavDark.png' : '/assets/images/vaibhavLight.png'}
                      alt="Vaibhav Kashyap"
                      width={420} height={480}
                      className="w-72 h-80 sm:w-96 sm:h-[420px] lg:w-[420px] lg:h-[500px] object-cover object-top rounded-xl shadow-xl"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}
                className="absolute -top-4 -right-4 bg-white dark:bg-dark-100 border border-emerald-200 dark:border-emerald-800 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                <Code2 size={14} className="text-emerald-500" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">Frontend UI Developer</span>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-100 border border-emerald-200 dark:border-emerald-800 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                <Zap size={14} className="text-emerald-500" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">Open to Work</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <motion.div className="mx-auto">
              {/* Availability pill */}
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 mb-6">
                <motion.span
                  className="w-2 h-2 rounded-full bg-emerald-500"
                  animate={{
                    opacity: [1, 0.1, 1],
                    boxShadow: [
                      '0 0 4px 2px rgba(16,185,129,0.8)',
                      '0 0 0px 0px rgba(16,185,129,0)',
                      '0 0 4px 2px rgba(16,185,129,0.8)',
                    ],
                  }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Available for new projects</span>
              </motion.div>

              {/* Name */}
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3">
                <span className="block text-2xl sm:text-4xl font-medium dark:text-gray-400 mb-1">Hi, I'm</span>
                <span className="gradient-text">Vaibhav </span>
                <span className="gradient-text">Kashyap</span>
              </motion.h1>

              {/* Typewriter Role */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-2 mb-4 h-8">
                <Layers size={16} className="text-emerald-500 shrink-0" />
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
                  {typedRole}
                  <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-5 bg-emerald-500 ml-0.5 align-middle" />
                </p>
              </motion.div>

              {/* Description */}
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                className="text-gray-500 dark:text-gray-400 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Designing and developing stunning portfolios with React, Next.js & smooth animations.
              </motion.p>

              {/* Tech tags */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                {tags.map((tag) => (
                  <span key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg shadow-emerald-500/20 overflow-hidden group">
                  {/* Shimmer */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  Hire Me <ArrowRight size={16} />
                </motion.button>
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                  View Projects
                </motion.button>
              </motion.div>

              {/* Stats with count-up */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }}
                className="flex items-center justify-center lg:justify-start gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                {stats.map((stat, i) => <StatItem key={i} value={stat.value} label={stat.label} />)}
              </motion.div>

              {/* Social links */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
                className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-sm text-gray-400 dark:text-gray-500">Follow me:</span>
                {[
                  { href: 'https://github.com/vaibhav34kashyap', icon: <Github size={18} /> },
                  { href: 'https://www.linkedin.com/in/vaibhav-kashyap-7489201b5', icon: <Linkedin size={18} /> },
                  { href: 'mailto:vaibhav34kashyap@gmail.com?subject=Portfolio Contact&body=Hi Vaibhav, I would like to get in touch with you.', icon: <Mail size={18} /> },
                ].map((s, i) => (
                  <motion.a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer" whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                    {s.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Skill Ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-dark-100/80 backdrop-blur-sm overflow-hidden py-3 z-10">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...tags, ...tags, ...tags, ...tags].map((skill, index) => (
            <span key={index} className="flex items-center gap-3 text-sm font-semibold text-gray-700 dark:text-gray-300 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
