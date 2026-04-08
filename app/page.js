'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SplashCursor from './components/SplashCursor'
import AnimatedBackground from './components/AnimatedBackground'
import Sidebar from './components/Sidebar'
import RightSidebar from './components/RightSidebar'
import HelloBoy from './components/HelloBoy'

const sections = [
  { key: 'home',           Component: Hero },
  { key: 'about',          Component: About },
  { key: 'experience',     Component: Experience },
  { key: 'projects',       Component: Projects },
  { key: 'certifications', Component: Certifications },
  { key: 'testimonials',   Component: Testimonials },
  { key: 'contact',        Component: Contact },
]

function SectionCard({ sectionKey, Component, onVisible }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-30% 0px -30% 0px' })

  useEffect(() => {
    if (inView) onVisible(sectionKey)
  }, [inView, sectionKey, onVisible])

  return (
    <div ref={ref} id={sectionKey}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-screen-2xl px-0 sm:px-6 my-6"
      >
        <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/30 border border-gray-100 dark:border-gray-800 bg-white/70 dark:bg-dark-200/70 backdrop-blur-sm">
          <Component />
        </div>
      </motion.div>
    </div>
  )
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (key) => {
    document.getElementById(key)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-dark-300 transition-colors duration-300">
      <AnimatedBackground />
      <SplashCursor />
      <Header onSelect={scrollToSection} />
      <Sidebar activeSection={activeSection} onSelect={scrollToSection} />
      <RightSidebar />
      <HelloBoy />
      <div className="pt-12">
        {sections.map(({ key, Component }) => (
          <SectionCard key={key} sectionKey={key} Component={Component} onVisible={setActiveSection} />
        ))}
      </div>
      <Footer />
    </main>
  )
}