'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Terminal, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import MagneticButton from './MagneticButton'
import GradualBlur from './GradualBlur'
import Toast from './Toast'

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, 30)
    return () => clearInterval(interval)
  }, [started, text])

  return <span>{displayed}<span className="animate-pulse">▋</span></span>
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '', type: '' })
  const [focused, setFocused] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (result.success) {
        setFormData({ name: '', email: '', message: '' })
        setToast({ show: true, message: result.message, type: 'success' })
      } else {
        setToast({ show: true, message: result.message, type: 'error' })
      }
    } catch {
      setToast({ show: true, message: 'Network error. Please try again.', type: 'error' })
    }
    setIsSubmitting(false)
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, label: 'email', value: 'rawat.mohitsingh7455@gmail.com', link: 'mailto:rawat.mohitsingh7455@gmail.com' },
    { icon: <Phone className="w-4 h-4" />, label: 'phone', value: '+91 98765 43210', link: 'tel:+919876543210' },
    { icon: <MapPin className="w-4 h-4" />, label: 'location', value: 'India', link: '#' },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-50 dark:bg-dark-200 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 dark:hidden pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.07) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 hidden dark:block pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(156,163,175,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(156,163,175,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-500 text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>contact.init()</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Get In </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Ready to build something great? Let's talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">

          {/* Left — Terminal info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/50 shadow-xl"
          >
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs font-mono text-gray-500 dark:text-gray-400">mohit@portfolio ~ contact</span>
            </div>

            {/* Terminal body */}
            <div className="bg-gray-900 dark:bg-gray-950 p-5 font-mono text-sm h-full min-h-[320px]">
              <p className="text-emerald-400 mb-4 text-xs">
                <TypewriterText text="$ whoami --contact" delay={300} />
              </p>

              <div className="space-y-5">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-gray-500 text-xs mb-1">// {info.label}</p>
                    <a href={info.link} className="flex items-center gap-2 text-emerald-300 hover:text-emerald-400 transition-colors group">
                      <ChevronRight className="w-3 h-3 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                      <span className="flex items-center gap-2">
                        {info.icon}
                        <span className="text-xs sm:text-sm break-all">{info.value}</span>
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <p className="text-gray-600 text-xs">
                  <span className="text-emerald-500">→</span> Response time: <span className="text-yellow-400">~24h</span>
                </p>
                <p className="text-gray-600 text-xs mt-1">
                  <span className="text-emerald-500">→</span> Status: <span className="text-green-400">● Available for work</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Form panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-900/60 backdrop-blur-sm shadow-xl overflow-hidden"
          >
            {/* Form header bar */}
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold text-gray-800 dark:text-white text-sm">New Message</span>
              </div>
              <span className="text-xs font-mono text-gray-400 dark:text-gray-500">POST /api/contact</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {[
                { id: 'name', label: 'name', type: 'text', placeholder: 'Your full name' },
                { id: 'email', label: 'email', type: 'email', placeholder: 'your.email@example.com' },
              ].map((field) => (
                <div key={field.id} className="relative">
                  <label className="block text-xs font-mono text-gray-400 dark:text-gray-500 mb-1.5">
                    <span className="text-emerald-500">const</span> {field.label} <span className="text-gray-400">=</span>
                  </label>
                  <div className={`flex items-center rounded-lg border transition-all duration-200 ${
                    focused === field.id
                      ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                      : 'border-gray-200 dark:border-gray-700'
                  } bg-gray-50 dark:bg-gray-800/50`}>
                    <span className="pl-3 text-emerald-500 font-mono text-sm select-none">"</span>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder={field.placeholder}
                      className="flex-1 px-1 py-2.5 bg-transparent text-gray-900 dark:text-white text-sm outline-none placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    />
                    <span className="pr-3 text-emerald-500 font-mono text-sm select-none">"</span>
                  </div>
                </div>
              ))}

              <div className="relative">
                <label className="block text-xs font-mono text-gray-400 dark:text-gray-500 mb-1.5">
                  <span className="text-emerald-500">const</span> message <span className="text-gray-400">=</span>
                </label>
                <div className={`rounded-lg border transition-all duration-200 ${
                  focused === 'message'
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                    : 'border-gray-200 dark:border-gray-700'
                } bg-gray-50 dark:bg-gray-800/50`}>
                  <div className="flex pt-2.5 px-3">
                    <span className="text-emerald-500 font-mono text-sm select-none mr-1">`</span>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      required
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="flex-1 bg-transparent text-gray-900 dark:text-white text-sm outline-none resize-none placeholder:text-gray-400 dark:placeholder:text-gray-600 w-full"
                    />
                  </div>
                  <div className="px-3 pb-2 text-right">
                    <span className="text-emerald-500 font-mono text-sm select-none">`</span>
                  </div>
                </div>
              </div>

              <MagneticButton
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg font-mono text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>send_message()</span>
                  </>
                )}
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>

      <GradualBlur position="top" height="6rem" strength={2} divCount={5} opacity={0.6} />

      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </section>
  )
}
