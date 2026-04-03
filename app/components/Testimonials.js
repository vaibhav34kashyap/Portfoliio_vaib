'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useRef } from 'react'
import BlurReveal from './BlurReveal'
import GradualBlur from './GradualBlur'

export default function Testimonials() {
  const scrollRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const testimonials = [
    {
      id: 1,
      name: 'RowthTech Team',
      role: 'CTO, RowthTech',
      company: 'RowthTech',
      image: 'https://ui-avatars.com/api/?name=RT&background=3b82f6&color=fff&size=200',
      rating: 5,
      color: 'from-blue-500 to-purple-600',
      text: 'Mohit is an exceptional frontend developer with deep expertise in React and Next.js. He delivered 9+ production applications with outstanding quality and performance.',
      highlight: '9+ production apps',
      emoji: '🚀'
    },
    {
      id: 2,
      name: 'Healthcare Client',
      role: 'Product Manager',
      company: 'Probill EHR',
      image: 'https://ui-avatars.com/api/?name=HC&background=10b981&color=fff&size=200',
      rating: 5,
      color: 'from-emerald-500 to-teal-600',
      text: 'Working with Mohit on our healthcare platform was excellent. He implemented HIPAA-compliant features and delivered a robust EHR system that exceeded our expectations.',
      highlight: 'HIPAA-compliant',
      emoji: '🏥'
    },
    {
      id: 3,
      name: 'E-commerce Client',
      role: 'Business Owner',
      company: 'Mozimo',
      image: 'https://ui-avatars.com/api/?name=EC&background=f59e0b&color=fff&size=200',
      rating: 5,
      color: 'from-orange-500 to-red-600',
      text: 'Mohit built our e-commerce platform with exceptional attention to user experience. The site is fast, responsive, and beautiful. Sales increased by 35% after launch.',
      highlight: '35% sales increase',
      emoji: '🛒'
    },
    {
      id: 4,
      name: 'Fintech Client',
      role: 'CEO',
      company: 'AccountPro',
      image: 'https://ui-avatars.com/api/?name=FC&background=8b5cf6&color=fff&size=200',
      rating: 5,
      color: 'from-purple-500 to-indigo-600',
      text: 'Outstanding work on our financial management platform. Mohit delivered a complex application with clean code, excellent performance, and intuitive UI. A true professional!',
      highlight: 'Clean code & performance',
      emoji: '💰'
    }
  ]

  const onMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
    scrollRef.current.style.cursor = 'grabbing'
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  const stopDrag = () => {
    isDragging.current = false
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
  }

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-dark-200 dark:via-dark-200 dark:to-dark-100 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-60 -right-60 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: [360, 0], scale: [1.2, 1, 1.4] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-60 -left-60 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
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
            <span className="text-gray-900 dark:text-white">Client </span>
            <span className="gradient-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Testimonials</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What clients and colleagues say about working with me
          </motion.p>
        </BlurReveal>

        {/* Horizontal Scroll Strip */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          className="flex gap-5 overflow-x-auto pb-6 select-none scrollbar-hide"
          style={{ cursor: 'grab', scrollSnapType: 'x mandatory' }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative flex-shrink-0 w-72 sm:w-80 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm border border-white/40 dark:border-gray-700/40 rounded-2xl p-6 shadow-xl"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Top row: avatar + name + stars */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md flex-shrink-0"
                  draggable={false}
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm truncate">{t.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{t.role}</p>
                  <p className={`text-xs font-semibold bg-gradient-to-r ${t.color} bg-clip-text text-transparent`}>{t.company}</p>
                </div>
                <span className="ml-auto text-2xl">{t.emoji}</span>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-1 -left-1 w-5 h-5 text-purple-300 dark:text-purple-600 opacity-60" />
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pl-5">
                  {t.text}
                </p>
              </div>

              {/* Highlight badge */}
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700/50">
                <span className={`text-xs font-semibold bg-gradient-to-r ${t.color} bg-clip-text text-transparent`}>
                  ✦ {t.highlight}
                </span>
              </div>

              {/* Bottom gradient accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${t.color}`} />
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <motion.p
          className="text-center text-xs text-gray-400 dark:text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          drag to scroll →
        </motion.p>
      </div>

      <GradualBlur position="top" height="6rem" strength={2} divCount={5} opacity={0.6} />
      <GradualBlur position="bottom" height="6rem" strength={2} divCount={5} opacity={0.6} />
    </section>
  )
}
