'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Palette, Zap, Smartphone, Clock, FolderOpen, Building2, MapPin } from 'lucide-react'
import BlurReveal from './BlurReveal'
import GradualBlur from './GradualBlur'

function TabSection({ features }) {
  const [activeTab, setActiveTab] = useState('expertise')

  const tabs = [
    { id: 'expertise', label: 'Expertise' },
    { id: 'journey', label: 'My Journey' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === 'expertise' ? 'journey' : 'expertise'))
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mb-10 sm:mb-12">
      <div className="flex gap-0 border border-gray-200 dark:border-gray-700 w-fit mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-2.5 text-xs font-bold tracking-[0.3em] uppercase transition-colors duration-200 ${
              activeTab === tab.id
                ? 'bg-emerald-500 text-white'
                : 'bg-white dark:bg-dark-100 text-gray-400 dark:text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'expertise' && (
          <motion.div
            key="expertise"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ borderColor: 'rgb(16,185,129)', backgroundColor: 'rgba(16,185,129,0.04)' }}
                className="flex items-start gap-4 p-5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-100 rounded-lg cursor-default group transition-all duration-200"
              >
                <div className="shrink-0 p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'journey' && (
          <motion.div
            key="journey"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-100 p-6 sm:p-8"
          >
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              With a strong foundation in frontend technologies, I have been crafting
              beautiful user interfaces that make a difference.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              I am particularly passionate about modern UI/UX design, smooth animations, and creating
              intuitive user experiences that delight users and solve real-world problems.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function About() {
  const skills = [
    'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Redux Toolkit', 'Redux Thunk',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Material UI', 'React Bootstrap',
    'Git', 'Responsive Design', 'UI/UX Design', 'Frontend Development', 'Web Animations'
  ]

  const features = [
    { icon: <Code className="w-5 h-5" />, title: 'Frontend Development', description: 'Expert in React, Next.js, and modern JavaScript frameworks' },
    { icon: <Palette className="w-5 h-5" />, title: 'UI/UX Design', description: 'Creating beautiful interfaces with modern design principles' },
    { icon: <Zap className="w-5 h-5" />, title: 'Modern Animations', description: 'Smooth animations and micro-interactions with Framer Motion' },
    { icon: <Smartphone className="w-5 h-5" />, title: 'Responsive Design', description: 'Mobile-first approach with modern UI/UX principles' }
  ]

  const tickerSkills = [...skills, ...skills]

  return (
    <section id="about" className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 border-b border-emerald-100 dark:from-emerald-950/20 dark:via-dark-200 dark:to-emerald-950/20 dark:border-emerald-900/30 relative overflow-hidden">
      <GradualBlur position="top" height="6rem" strength={2} divCount={5} opacity={0.6} />

       <div className="border-y border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-100 overflow-hidden py-3">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {tickerSkills.map((skill, index) => (
            <span key={index} className="flex items-center gap-3 text-sm font-semibold text-gray-700 dark:text-gray-300 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              {skill}
            </span>
          ))}
        </motion.div>
      </div>


      <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-10 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10 sm:mb-12">
          <BlurReveal>
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-emerald-600 dark:text-emerald-400 mb-4">About Me</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none tracking-tight text-gray-900 dark:text-white mb-4">
              CRAFTING<br />
              <span className="gradient-text">DIGITAL</span><br />
              STORIES.
            </h2>
            <div className="w-16 h-1 bg-emerald-500" />
          </BlurReveal>

          <BlurReveal delay={0.3}>
            <div className="flex flex-col gap-6">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a passionate frontend developer with expertise in building modern web applications.
                Currently working as a Web Developer at RowthTech, I specialize in creating stunning user interfaces
                and interactive experiences using React, Next.js, and modern frontend technologies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Experience', value: '2+ Years', icon: <Clock className="w-6 h-6" /> },
                  { label: 'Projects', value: '20+', icon: <FolderOpen className="w-6 h-6" /> },
                  { label: 'Company', value: 'RowthTech', icon: <Building2 className="w-6 h-6" /> },
                  { label: 'Location', value: 'Chandigarh', icon: <MapPin className="w-6 h-6" /> },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.1, delay: i * 0.1 }}
                    whileHover={{ scale: 1.07, borderColor: 'rgb(16,185,129)' }}
                    className="border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-dark-100 rounded-lg shadow transition-all duration-200 cursor-pointer flex flex-row items-center gap-4 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:border-emerald-500 dark:hover:border-emerald-500"
                  >
                    <div className="text-emerald-600 dark:text-emerald-400 shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-xl font-black text-emerald-600 dark:text-emerald-400">{item.value}</p>
                      <p className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-500">{item.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </BlurReveal>
        </div>

        <BlurReveal delay={0.4}>
          <TabSection features={features} />
        </BlurReveal>
      </div>

      

      <GradualBlur position="bottom" height="6rem" strength={2} divCount={5} opacity={0.6} />
    </section>
  )
}
