'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Download, Trophy, Zap, Users, BookOpen, Star } from 'lucide-react'
import { useState } from 'react'

import BlurReveal from './BlurReveal'
import MagneticButton from './MagneticButton'
import GradualBlur from './GradualBlur'

export default function Certifications() {
  const [downloading, setDownloading] = useState(false)

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
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-900/60 backdrop-blur-sm shadow-xl p-8">
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
              <MagneticButton
                disabled={downloading}
                onClick={async () => {
                  setDownloading(true)
                  try {
                    const htmlRes = await fetch('/resume.html')
                    if (!htmlRes.ok) throw new Error('Could not load resume')
                    const html = await htmlRes.text()

                    const pdfRes = await fetch('/api/generate-pdf', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ html })
                    })
                    if (!pdfRes.ok) throw new Error('PDF generation failed')

                    const blob = await pdfRes.blob()
                    const url = window.URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = 'Mohit_Singh_Rawat_Resume.pdf'
                    document.body.appendChild(a)
                    a.click()
                    window.URL.revokeObjectURL(url)
                    document.body.removeChild(a)
                  } catch (error) {
                    console.error('Resume download error:', error)
                    alert('Failed to download resume. Please try again.')
                  } finally {
                    setDownloading(false)
                  }
                }}
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg shadow-emerald-500/20"
              >
                {downloading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </>
                )}
              </MagneticButton>

              <MagneticButton
                onClick={() => window.open('https://www.linkedin.com/in/mohit-singh-rawat-2a1112299/', '_blank')}
                className="flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                View LinkedIn
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>

      <GradualBlur position="top" height="6rem" strength={2} divCount={5} opacity={0.6} />
      <GradualBlur position="bottom" height="6rem" strength={2} divCount={5} opacity={0.6} />
    </section>
  )
}
