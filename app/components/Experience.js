'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, TrendingUp, Code, Users } from 'lucide-react'
import { useState } from 'react'
import BlurReveal from './BlurReveal'
import GradualBlur from './GradualBlur'

export default function Experience() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const experiences = [
    {
      id: 1,
      title: 'Web Developer',
      company: 'RowthTech',
      period: '2023 - Present',
      location: 'India',
      type: 'Full-time',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
      description: 'Leading frontend development for enterprise applications. Built 9+ production applications including healthcare, e-commerce, and fintech platforms.',
      achievements: [
        { icon: Code, text: 'Developed 9+ production-ready applications', metric: '9+' },
        { icon: TrendingUp, text: 'Improved application performance by 40%', metric: '40%' },
        { icon: Users, text: 'Implemented modern UI/UX with React & Next.js', metric: '100%' },
        { icon: Briefcase, text: 'Led frontend architecture decisions', metric: '5+' }
      ]
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Freelance',
      period: '2022 - 2023',
      location: 'Remote',
      type: 'Contract',
      color: 'from-teal-500 to-emerald-600',
      bgColor: 'from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20',
      description: 'Specialized in building responsive web applications using React, Next.js, and modern frontend technologies.',
      achievements: [
        { icon: Users, text: 'Delivered 15+ client projects successfully', metric: '15+' },
        { icon: TrendingUp, text: 'Maintained 98% client satisfaction rate', metric: '98%' },
        { icon: Code, text: 'Specialized in React & Next.js development', metric: '100%' },
        { icon: Briefcase, text: 'Built custom animation libraries', metric: '3+' }
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

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-12 bg-gray-50 dark:bg-dark-300 relative overflow-hidden">

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
