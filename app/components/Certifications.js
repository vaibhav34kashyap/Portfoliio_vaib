'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink, Download, Trophy, Zap, Users, BookOpen, Star } from 'lucide-react'

import BlurReveal from './BlurReveal'
import MagneticButton from './MagneticButton'
import GradualBlur from './GradualBlur'

const UI_SYMBOLS = ['<div>', '</div>', '</>','{  }','[ ]','=>','CSS','JSX','flex','grid','px','rem','fn()','var()','...','&&','===','UI','#id','.cls']

function CertBgCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = canvas.parentElement
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    const isDark = () => document.documentElement.classList.contains('dark')

    // particles
    const pts = Array.from({ length: 55 }, () => ({
      x: (Math.random() - 0.5) * 2.2,
      y: (Math.random() - 0.5) * 2.2,
      z: Math.random() * 2,
      vx: (Math.random() - 0.5) * 0.0012,
      vy: (Math.random() - 0.5) * 0.0012,
      vz: (Math.random() - 0.5) * 0.0015,
    }))

    // symbols
    const syms = Array.from({ length: 20 }, () => ({
      text: UI_SYMBOLS[Math.floor(Math.random() * UI_SYMBOLS.length)],
      x: (Math.random() - 0.5) * 2.2,
      y: (Math.random() - 0.5) * 2.2,
      z: Math.random() * 2,
      vx: (Math.random() - 0.5) * 0.0008,
      vy: (Math.random() - 0.5) * 0.0008,
      vz: (Math.random() - 0.5) * 0.001,
      rot: Math.random() * Math.PI * 2,
      rs: (Math.random() - 0.5) * 0.015,
    }))

    // wireframe cube verts & edges
    const cverts = [[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]
      .map(([x,y,z]) => ({ x: x*0.28, y: y*0.28, z: z*0.28 }))
    const cedges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]]

    let t = 0

    const proj = (x, y, z) => {
      const fov = 1.6, s = fov / (fov + z + 1)
      return { sx: x * s * canvas.width * 0.36 + canvas.width / 2, sy: y * s * canvas.height * 0.36 + canvas.height / 2, s }
    }
    const ry = (x, z, a) => ({ rx: x*Math.cos(a)-z*Math.sin(a), rz: x*Math.sin(a)+z*Math.cos(a) })
    const rx = (y, z, a) => ({ ry: y*Math.cos(a)-z*Math.sin(a), rz: y*Math.sin(a)+z*Math.cos(a) })
    const wrap = (v, l) => { if (v > l) return -l; if (v < -l) return l; return v }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.004
      const dark = isDark()
      const rgb = dark ? '16,185,129' : '5,150,105'
      const rgb2 = dark ? '45,212,191' : '13,148,136'

      // cube
      const cp = cverts.map(({ x, y, z }) => {
        const r1 = ry(x, z, t * 0.35)
        const r2 = rx(y, r1.rz, t * 0.2)
        return proj(r1.rx, r2.ry, r2.rz)
      })
      cedges.forEach(([a, b]) => {
        ctx.beginPath()
        ctx.moveTo(cp[a].sx, cp[a].sy)
        ctx.lineTo(cp[b].sx, cp[b].sy)
        ctx.strokeStyle = `rgba(${rgb2},${dark ? 0.15 : 0.1})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // particles
      const pp = pts.map((p) => {
        p.x = wrap(p.x + p.vx, 1.8); p.y = wrap(p.y + p.vy, 1.8); p.z = wrap(p.z + p.vz, 2)
        const r1 = ry(p.x, p.z, t * 0.18)
        const r2 = rx(p.y, r1.rz, t * 0.1)
        return { ...proj(r1.rx, r2.ry, r2.rz), orig: p }
      })
      pp.sort((a, b) => b.orig.z - a.orig.z)

      for (let i = 0; i < pp.length; i++)
        for (let j = i + 1; j < pp.length; j++) {
          const dx = pp[i].sx - pp[j].sx, dy = pp[i].sy - pp[j].sy
          const d = Math.sqrt(dx*dx + dy*dy)
          if (d < 100) {
            ctx.beginPath()
            ctx.moveTo(pp[i].sx, pp[i].sy)
            ctx.lineTo(pp[j].sx, pp[j].sy)
            ctx.strokeStyle = `rgba(${rgb},${(1-d/100)*0.12*pp[i].s})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

      pp.forEach(({ sx, sy, s }) => {
        ctx.beginPath()
        ctx.arc(sx, sy, Math.max(1, s * 2.2), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb},${s * 0.5})`
        ctx.fill()
      })

      // symbols
      syms.forEach((s) => {
        s.x = wrap(s.x + s.vx, 1.8); s.y = wrap(s.y + s.vy, 1.8); s.z = wrap(s.z + s.vz, 2)
        s.rot += s.rs
        const r1 = ry(s.x, s.z, t * 0.15)
        const r2 = rx(s.y, r1.rz, t * 0.09)
        const { sx, sy, s: sc } = proj(r1.rx, r2.ry, r2.rz)
        ctx.save()
        ctx.translate(sx, sy)
        ctx.rotate(s.rot)
        ctx.font = `${Math.max(8, sc * 16)}px 'Courier New',monospace`
        ctx.fillStyle = `rgba(${rgb},${sc * (dark ? 0.5 : 0.35)})`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(s.text, 0, 0)
        ctx.restore()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />
}

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: '2023',
      icon: '⚛️',
      color: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20',
      skills: ['React', 'Hooks', 'Redux', 'Context API'],
      level: 'Advanced',
      hours: '40+ Hours'
    },
    {
      id: 2,
      title: 'Next.js & React',
      issuer: 'Udemy',
      date: '2023',
      icon: '▲',
      color: 'from-teal-500 to-emerald-500',
      bgGradient: 'from-teal-50 via-emerald-50 to-green-50 dark:from-teal-900/20 dark:via-emerald-900/20 dark:to-green-900/20',
      skills: ['Next.js', 'SSR', 'SSG', 'API Routes'],
      level: 'Expert',
      hours: '35+ Hours'
    },
    {
      id: 3,
      title: 'JavaScript Algorithms',
      issuer: 'freeCodeCamp',
      date: '2022',
      icon: '🎯',
      color: 'from-emerald-600 to-teal-600',
      bgGradient: 'from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20',
      skills: ['JavaScript', 'Algorithms', 'Data Structures'],
      level: 'Advanced',
      hours: '30+ Hours'
    },
    {
      id: 4,
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2022',
      icon: '📱',
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-pink-900/20',
      skills: ['HTML5', 'CSS3', 'Responsive Design'],
      level: 'Expert',
      hours: '25+ Hours'
    }
  ]

  const achievements = [
    {
      icon: Trophy,
      emoji: '🏆',
      label: 'Projects Delivered',
      value: '9+',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      description: 'Successfully completed projects'
    },
    {
      icon: Star,
      emoji: '⭐',
      label: 'Client Satisfaction',
      value: '98%',
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
      description: 'Average client rating'
    },
    {
      icon: Zap,
      emoji: '🚀',
      label: 'Performance Boost',
      value: '40%',
      color: 'from-teal-400 to-emerald-500',
      bgColor: 'from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20',
      description: 'Average performance improvement'
    },
    {
      icon: Users,
      emoji: '💼',
      label: 'Years Experience',
      value: '2+',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
      description: 'Professional development experience'
    }
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-dark-200 relative overflow-hidden">
      <CertBgCanvas />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <BlurReveal className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gray-900 dark:text-white">Certifications & </span>
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
            Professional certifications and key achievements that showcase my expertise
          </p>
        </BlurReveal>

        {/* Achievements Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${achievement.bgColor} border border-white/30 dark:border-gray-700/30 p-6 text-center`}
              >
                <div className="mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                  {achievement.value}
                </div>
                <div className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {achievement.label}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeUp}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${cert.bgGradient} border border-white/30 dark:border-gray-700/30 p-6`}
            >
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl">{cert.icon}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${cert.color} text-white shadow-md`}>
                    {cert.level}
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg leading-tight">
                  {cert.title}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {cert.date} | {cert.hours}
                    </p>
                  </div>
                  <BookOpen className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200/50 dark:border-gray-600/50 hover:bg-emerald-500 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-900/60 backdrop-blur-sm shadow-xl p-8 overflow-hidden">
            {/* 3D CV Animation Background */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              {/* Floating CV Page 1 - left */}
              <motion.div
                className="absolute left-6 top-4 w-16 h-20 rounded-md border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 dark:from-emerald-400/15 dark:to-teal-400/8"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ y: [0, -10, 0], rotateZ: [-6, -4, -6], rotateY: [10, 15, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="p-1.5 space-y-1">
                  <div className="h-1 w-8 rounded bg-emerald-400/40" />
                  <div className="h-0.5 w-10 rounded bg-gray-400/30" />
                  <div className="h-0.5 w-7 rounded bg-gray-400/30" />
                  <div className="h-0.5 w-9 rounded bg-gray-400/30" />
                  <div className="h-0.5 w-6 rounded bg-gray-400/20" />
                  <div className="h-0.5 w-8 rounded bg-gray-400/20" />
                </div>
              </motion.div>

              {/* Floating CV Page 2 - left behind */}
              <motion.div
                className="absolute left-10 top-8 w-16 h-20 rounded-md border border-teal-400/20 bg-gradient-to-br from-teal-500/8 to-emerald-500/5"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ y: [0, -6, 0], rotateZ: [-3, -1, -3], rotateY: [8, 12, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />

              {/* Floating CV Page 1 - right */}
              <motion.div
                className="absolute right-6 top-4 w-16 h-20 rounded-md border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 dark:from-emerald-400/15 dark:to-teal-400/8"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ y: [0, -8, 0], rotateZ: [6, 4, 6], rotateY: [-10, -15, -10] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              >
                <div className="p-1.5 space-y-1">
                  <div className="h-1 w-8 rounded bg-emerald-400/40" />
                  <div className="h-0.5 w-10 rounded bg-gray-400/30" />
                  <div className="h-0.5 w-7 rounded bg-gray-400/30" />
                  <div className="h-0.5 w-9 rounded bg-gray-400/30" />
                  <div className="h-0.5 w-6 rounded bg-gray-400/20" />
                  <div className="h-0.5 w-8 rounded bg-gray-400/20" />
                </div>
              </motion.div>

              {/* Floating CV Page 2 - right behind */}
              <motion.div
                className="absolute right-10 top-8 w-16 h-20 rounded-md border border-teal-400/20 bg-gradient-to-br from-teal-500/8 to-emerald-500/5"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ y: [0, -5, 0], rotateZ: [3, 1, 3], rotateY: [-8, -12, -8] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              />

              {/* Orbiting dot top-left */}
              <motion.div
                className="absolute w-2 h-2 rounded-full bg-emerald-400/50"
                animate={{ x: [0, 20, 40, 20, 0], y: [20, 5, 20, 35, 20] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ left: '12%', top: '10%' }}
              />
              {/* Orbiting dot bottom-right */}
              <motion.div
                className="absolute w-1.5 h-1.5 rounded-full bg-teal-400/40"
                animate={{ x: [0, -15, -30, -15, 0], y: [0, 12, 0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{ right: '12%', bottom: '15%' }}
              />

              {/* Subtle grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cv-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#10b981" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cv-grid)" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-500 text-xs font-mono mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>available.for_work()</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Ready to work together?
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto text-sm">
                Download my resume or connect with me on LinkedIn to discuss opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <a
                  href="/Vaibhav_K_CV (1).pdf"
                  download="Vaibhav_K_CV.pdf"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg shadow-emerald-500/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <MagneticButton
                  onClick={() => window.open('https://www.linkedin.com/in/vaibhav-kashyap-7489201b5', '_blank')}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  View LinkedIn
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <GradualBlur position="top" height="6rem" strength={2} divCount={5} opacity={0.6} />
      <GradualBlur position="bottom" height="6rem" strength={2} divCount={5} opacity={0.6} />
    </section>
  )
}
