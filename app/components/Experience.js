'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, TrendingUp, Code, Users } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import BlurReveal from './BlurReveal'
import GradualBlur from './GradualBlur'

export default function Experience() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const experiences = [
    {
      id: 1,
      title: 'Frontend UI Developer',
      company: 'RowthTech',
      period: '2023 - Present',
      location: 'India',
      type: 'Full-time',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
      description: 'Crafting pixel-perfect, responsive UIs for enterprise-grade applications. Specialized in translating Figma/XD designs into high-quality React & Next.js interfaces across healthcare, e-commerce, and fintech domains.',
      achievements: [
        { icon: Code, text: 'Built 9+ production UI applications from Figma to code', metric: '9+' },
        { icon: TrendingUp, text: 'Improved UI rendering performance by 40%', metric: '40%' },
        { icon: Users, text: 'Delivered pixel-perfect designs with Tailwind CSS', metric: '100%' },
        { icon: Briefcase, text: 'Created reusable component libraries', metric: '5+' }
      ]
    },
    {
      id: 2,
      title: 'Frontend UI Developer',
      company: 'Freelance',
      period: '2022 - 2023',
      location: 'Remote',
      type: 'Contract',
      color: 'from-teal-500 to-emerald-600',
      bgColor: 'from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20',
      description: 'Designed and developed responsive, visually engaging UIs for diverse clients. Focused on clean layouts, smooth animations, and cross-browser compatible interfaces using React and Tailwind CSS.',
      achievements: [
        { icon: Users, text: 'Delivered 15+ client UI projects end-to-end', metric: '15+' },
        { icon: TrendingUp, text: 'Maintained 98% client satisfaction on UI quality', metric: '98%' },
        { icon: Code, text: 'Built responsive UIs with React & Tailwind CSS', metric: '100%' },
        { icon: Briefcase, text: 'Created custom Framer Motion animation systems', metric: '3+' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const codeSnippets = [
    { text: 'const App = () => {}', x: '2%', y: '8%', delay: 0, duration: 15 },
    { text: 'import React from "react"', x: '60%', y: '5%', delay: 2, duration: 18 },
    { text: 'useState(null)', x: '80%', y: '30%', delay: 1, duration: 14 },
    { text: '<Component />', x: '3%', y: '45%', delay: 3, duration: 16 },
    { text: 'npm run dev', x: '70%', y: '75%', delay: 0.5, duration: 13 },
    { text: 'flex items-center', x: '15%', y: '85%', delay: 2.5, duration: 17 },
    { text: 'async/await', x: '45%', y: '90%', delay: 1.5, duration: 12 },
    { text: 'git commit -m', x: '55%', y: '55%', delay: 4, duration: 19 },
    { text: 'border-radius: 12px', x: '25%', y: '15%', delay: 0.8, duration: 15 },
    { text: 'z-index: 10', x: '88%', y: '50%', delay: 3.5, duration: 11 },
    { text: 'type Props = {}', x: '40%', y: '70%', delay: 2, duration: 16 },
    { text: '.map((item) =>)', x: '8%', y: '60%', delay: 1, duration: 14 },
  ]

  const shapes = [
    { size: 80, x: '5%', y: '10%', delay: 0, duration: 8, rotateX: 45, rotateY: 45, color: 'from-emerald-400/50 to-teal-400/50' },
    { size: 50, x: '85%', y: '15%', delay: 1, duration: 10, rotateX: 60, rotateY: 30, color: 'from-teal-400/45 to-emerald-400/45' },
    { size: 100, x: '75%', y: '60%', delay: 2, duration: 12, rotateX: 30, rotateY: 60, color: 'from-emerald-500/40 to-teal-500/40' },
    { size: 60, x: '10%', y: '70%', delay: 0.5, duration: 9, rotateX: 50, rotateY: 20, color: 'from-teal-300/50 to-emerald-300/50' },
    { size: 40, x: '50%', y: '5%', delay: 1.5, duration: 11, rotateX: 20, rotateY: 70, color: 'from-emerald-400/45 to-teal-600/45' },
    { size: 70, x: '30%', y: '80%', delay: 3, duration: 7, rotateX: 70, rotateY: 40, color: 'from-teal-400/40 to-emerald-400/40' },
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-12 bg-gray-50 dark:bg-dark-300 relative overflow-hidden">

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {codeSnippets.map((snippet, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs sm:text-sm text-emerald-600/70 dark:text-emerald-400/60 whitespace-nowrap select-none"
            style={{ left: snippet.x, top: snippet.y }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [0, -40],
              x: [0, 10, -5, 0],
            }}
            transition={{
              duration: snippet.duration,
              delay: snippet.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {snippet.text}
          </motion.div>
        ))}
      </div>

      {/* 3D Floating Shapes Background */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ perspective: '800px' }}>
        {shapes.map((shape, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-xl bg-gradient-to-br ${shape.color} border border-emerald-400/50 dark:border-emerald-400/40`}
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: [shape.rotateX, shape.rotateX + 180, shape.rotateX + 360],
              rotateY: [shape.rotateY, shape.rotateY + 180, shape.rotateY + 360],
              y: [0, -20, 0],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {/* Glowing orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-emerald-400/20 dark:bg-emerald-400/30 blur-3xl"
          style={{ left: '10%', top: '20%' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-teal-400/20 dark:bg-teal-400/30 blur-3xl"
          style={{ right: '10%', bottom: '20%' }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <BlurReveal className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-900 dark:text-white">Work </span>
            <span className="gradient-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My professional journey and key achievements
          </motion.p>
        </BlurReveal>

        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(exp.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative mb-8 sm:mb-12 last:mb-0"
            >
              {/* Timeline Line - Hidden on mobile */}
              <div className="hidden sm:block absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 dark:to-transparent" />
              
              {/* Timeline Dot - Hidden on mobile */}
              <div className={`hidden sm:block absolute left-6 top-16 w-5 h-5 rounded-full bg-gradient-to-r ${exp.color} shadow-lg z-10`} />

              {/* Experience Card */}
              <div className={`sm:ml-16 relative overflow-hidden rounded-2xl bg-gradient-to-br ${exp.bgColor} border border-white/20 dark:border-gray-700/30 shadow-lg`}>
                <div className="relative p-4 sm:p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-4 sm:mb-6 gap-2 sm:gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold mb-2">
                        <Briefcase className={`w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400`} />
                        <span className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>{exp.company}</span>
                        <span className="px-2 sm:px-3 py-1 bg-white/50 dark:bg-gray-800/50 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg mb-3 sm:mb-4">Key Achievements:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {exp.achievements.map((achievement, idx) => {
                        const IconComponent = achievement.icon
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 group"
                          >
                            <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${exp.color} text-white flex-shrink-0`}>
                              <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors leading-tight">
                                {achievement.text}
                              </span>
                            </div>
                            <span className={`font-bold text-sm sm:text-lg bg-gradient-to-r ${exp.color} bg-clip-text text-transparent flex-shrink-0`}>
                              {achievement.metric}
                            </span>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <GradualBlur position="top" height="6rem" strength={2} divCount={5} opacity={0.6} />
      <GradualBlur position="bottom" height="6rem" strength={2} divCount={5} opacity={0.6} />
    </section>
  )
}
