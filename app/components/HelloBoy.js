'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { X, Send, MessageCircle } from 'lucide-react'

// ── Portfolio Knowledge Base ──────────────────────────────────────────────────
const KB = {
  name: 'Vaibhav Kashyap',
  role: 'Frontend UI Developer',
  experience: '2+ years',
  company: 'RowthTech',
  location: 'Chandigarh, India',
  email: 'vaibhav34kashyap@gmail.com',
  phone: '+91 75055 36264',
  skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Material UI', 'Bootstrap', 'Git', 'Responsive Design', 'UI/UX Design'],
  projects: [
    { name: 'Probill EHR & RCM', url: 'https://probillrcm.com/', desc: 'Healthcare EHR & Revenue Cycle Management system' },
    { name: 'Diamante', url: 'https://tequilaredondeldiamante.com/', desc: 'Cryptocurrency exchange platform' },
    { name: 'Mozimo', url: 'https://www.mozimo.in/', desc: 'E-commerce platform for artisanal products' },
    { name: 'RowthTech Website', url: 'https://rowthtech.com/', desc: 'Corporate website with modern design' },
    { name: 'DonCruz Platinium', url: 'https://doncruzplatinium.com/', desc: 'Premium luxury brand website' },
    { name: 'RowthBMG', url: 'https://rowthbmg.com', desc: 'Business management platform' },
    { name: 'Arc-Providers', url: 'https://tms.arcproviders.com/', desc: 'TMS mental health treatment platform' },
    { name: 'Endoorphin', url: 'https://endoorphin.com/', desc: 'Fitness trainer booking platform' },
    { name: 'Legalup', url: 'https://iclawfirmcy.info/', desc: 'Law firm website for Cyprus' },
  ],
  certifications: [
    'React - The Complete Guide (Udemy, 2023)',
    'Next.js & React (Udemy, 2023)',
    'JavaScript Algorithms (freeCodeCamp, 2022)',
    'Responsive Web Design (freeCodeCamp, 2022)',
  ],
  stats: { projects: '9+', satisfaction: '98%', experience: '2+', performance: '40%' },
}

function getReply(input) {
  const q = input.toLowerCase().trim()
  if (/^(hi|hello|hey|hii|helo|namaste|namaskar|hola|yo|sup)/.test(q))
    return `👋 Hello! Main Vaibhav ka virtual assistant hoon. Kuch bhi pucho! 😊`
  if (q.includes('name') || q.includes('naam') || q.includes('kaun') || q.includes('who are you') || q.includes('kon ho'))
    return `🙋 Main **${KB.name}** hoon — ek passionate **${KB.role}**!`
  if (
    q.includes('company') || q.includes('office') || q.includes('employer') ||
    q.includes('rowthtech') || q.includes('kon se company') || q.includes('kaun se company') ||
    q.includes('konsi company') || q.includes('kaunsi company') || q.includes('company me') ||
    q.includes('company mein') || q.includes('kahan kaam') || q.includes('kaha kaam') ||
    q.includes('job kar') || q.includes('kaam kar') || q.includes('current job') ||
    (q.includes('abhi') && q.includes('kaam')) || (q.includes('abhi') && q.includes('job')) ||
    (q.includes('kon') && q.includes('job')) || (q.includes('kaun') && q.includes('job'))
  )
    return `🏢 Vaibhav abhi **RowthTech** mein **Frontend UI Developer** ke taur par kaam kar rahe hain!\n\n🌐 Website: https://www.rowthtech.com/\n📍 Location: Chandigarh, India`
  if (q.includes('role') || q.includes('designation') || q.includes('position'))
    return `💼 Vaibhav ek **${KB.role}** hain. Woh beautiful, responsive UIs banate hain React, Next.js aur Tailwind CSS se.`
  if (q.includes('location') || q.includes('city') || q.includes('kahan') || q.includes('where') || q.includes('chandigarh') || q.includes('india'))
    return `📍 Vaibhav **Chandigarh, India** mein rehte hain aur remote work ke liye bhi available hain!`
  if (q.includes('skill') || q.includes('technology') || q.includes('tech') || q.includes('stack') || q.includes('kya aata') || q.includes('languages'))
    return `🛠️ Vaibhav ke skills:\n**${KB.skills.slice(0, 6).join(', ')}** aur bhi bahut kuch — jaise ${KB.skills.slice(6).join(', ')}.`
  if (q.includes('react'))
    return `⚛️ Haan! React.js Vaibhav ki core skill hai. Unhone React se 9+ production apps banaye hain!`
  if (q.includes('next') || q.includes('nextjs'))
    return `▲ Next.js mein Vaibhav expert hain! SSR, SSG, App Router — sab use karte hain.`
  if (q.includes('tailwind'))
    return `🎨 Tailwind CSS Vaibhav ka favourite styling tool hai!`
  if (q.includes('project') || q.includes('kaam kiya') || q.includes('banaya') || q.includes('work done'))
    return `🚀 Vaibhav ke **${KB.stats.projects} projects** hain:\n${KB.projects.slice(0, 5).map(p => `• **${p.name}** — ${p.desc}`).join('\n')}\n...aur 4 aur bhi!`
  if (q.includes('probill') || q.includes('ehr') || q.includes('health'))
    return `🏥 **Probill EHR & RCM** — healthcare platform with patient dashboards & billing. Live: probillrcm.com`
  if (q.includes('diamante') || q.includes('crypto') || q.includes('exchange'))
    return `💎 **Diamante** — cryptocurrency exchange platform. Live: tequilaredondeldiamante.com`
  if (q.includes('mozimo') || q.includes('ecommerce') || q.includes('shop'))
    return `🛒 **Mozimo** — premium e-commerce platform. Sales 35% badhi! Live: mozimo.in`
  if (q.includes('certif') || q.includes('course') || q.includes('degree') || q.includes('padhai'))
    return `🏆 Vaibhav ke certifications:\n${KB.certifications.map(c => `• ${c}`).join('\n')}`
  if (q.includes('contact') || q.includes('email') || q.includes('mail') || q.includes('reach') || q.includes('milna'))
    return `📬 Vaibhav se contact karo:\n📧 **${KB.email}**\n📞 **${KB.phone}**\nYa Contact section mein form fill karo!`
  if (q.includes('phone') || q.includes('number') || q.includes('whatsapp') || q.includes('call'))
    return `📱 Phone/WhatsApp: **${KB.phone}**\nwa.me/917505536264`
  if (q.includes('github') || q.includes('code') || q.includes('repo'))
    return `💻 GitHub: **github.com/vaibhav34kashyap**`
  if (q.includes('linkedin'))
    return `🔗 LinkedIn: **linkedin.com/in/vaibhav-kashyap-7489201b5**`
  if (q.includes('hire') || q.includes('available') || q.includes('freelance') || q.includes('opportunity'))
    return `✅ Vaibhav **new projects ke liye available** hain! Email karo: **${KB.email}**`
  if (q.includes('resume') || q.includes('cv') || q.includes('download'))
    return `📄 Certifications section mein jaao — wahan "Download Resume" button hai!`
  if (q.includes('website') || q.includes('portfolio site') || q.includes('banaya kaise'))
    return `🌐 Yeh portfolio **Next.js 14**, **Tailwind CSS** aur **Framer Motion** se bana hai!`
  if (q.includes('stats') || q.includes('achievement') || q.includes('kitne project') || q.includes('how many'))
    return `📊 Stats:\n🚀 **${KB.stats.projects}** Projects\n⭐ **${KB.stats.satisfaction}** Satisfaction\n⚡ **${KB.stats.performance}** Performance boost\n⏳ **${KB.stats.experience}** Years exp`
  if (q.includes('thank') || q.includes('shukriya') || q.includes('thanks'))
    return `😊 Aapka swagat hai! Koi aur sawaal ho toh zaroor pucho! 🙌`
  if (q.includes('bye') || q.includes('alvida') || q.includes('goodbye'))
    return `👋 Alvida! Contact section mein message zaroor karna! 😊`
  return `🤔 Hmm, samajh nahi aaya. Puch sakte ho:\n• Skills ya projects\n• Contact info\n• Experience ya certifications\n• Hire karna ho toh bhi! 😊`
}

const SECTION_MESSAGES = {
  home:           { msg: "👋 Hello! I'm Vaibhav!", sub: 'Click karo mujhse baat karo!' },
  about:          { msg: '🙋 This is About Me!', sub: '2+ yrs exp • RowthTech' },
  experience:     { msg: '💼 My Work Experience', sub: 'RowthTech & Freelance' },
  projects:       { msg: '🚀 Check My Projects!', sub: '9+ production apps' },
  certifications: { msg: '🏆 My Certifications', sub: 'React, Next.js & more' },
  testimonials:   { msg: '⭐ Client Reviews', sub: '98% satisfaction rate' },
  contact:        { msg: "📬 Let's Connect!", sub: "I'd love to hear from you" },
}

const SUGGESTIONS = ['Skills kya hain?', 'Projects dikhao', 'Contact kaise karein?', 'Hire karna hai']

// ── Render message text with clickable links ────────────────────────────────
function MessageText({ text }) {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const parts = text.split(urlRegex)
  return (
    <span>
      {parts.map((part, i) =>
        urlRegex.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2dd4bf', textDecoration: 'underline', wordBreak: 'break-all' }}
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  )
}

// ── Walking Boy SVG ───────────────────────────────────────────────────────────
function WalkingBoy({ walking, facingLeft }) {
  return (
    <svg
      viewBox="0 0 64 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ transform: facingLeft ? 'scaleX(-1)' : 'scaleX(1)', transition: 'transform 0.1s' }}
    >
      {/* Head */}
      <circle cx="32" cy="16" r="12" fill="#FBBF24" />
      {/* Eyes */}
      <circle cx="27" cy="14" r="2" fill="#1f2937" />
      <circle cx="37" cy="14" r="2" fill="#1f2937" />
      {/* Smile */}
      <path d="M27 20 Q32 25 37 20" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Hair */}
      <path d="M20 12 Q22 4 32 4 Q42 4 44 12" fill="#92400e" />
      {/* Body */}
      <rect x="20" y="30" width="24" height="22" rx="4" fill="#10b981" />

      {/* Left arm */}
      <motion.rect
        x="10" y="30" width="8" height="16" rx="4" fill="#10b981"
        style={{ originX: '14px', originY: '30px' }}
        animate={walking ? { rotate: [-25, 25, -25] } : { rotate: 0 }}
        transition={{ duration: 0.5, repeat: walking ? Infinity : 0, ease: 'easeInOut' }}
      />
      {/* Right arm */}
      <motion.rect
        x="46" y="30" width="8" height="16" rx="4" fill="#10b981"
        style={{ originX: '50px', originY: '30px' }}
        animate={walking ? { rotate: [25, -25, 25] } : { rotate: 0 }}
        transition={{ duration: 0.5, repeat: walking ? Infinity : 0, ease: 'easeInOut' }}
      />

      {/* Left leg */}
      <motion.rect
        x="22" y="52" width="8" height="18" rx="4" fill="#1d4ed8"
        style={{ originX: '26px', originY: '52px' }}
        animate={walking ? { rotate: [-20, 20, -20] } : { rotate: 0 }}
        transition={{ duration: 0.5, repeat: walking ? Infinity : 0, ease: 'easeInOut' }}
      />
      {/* Right leg */}
      <motion.rect
        x="34" y="52" width="8" height="18" rx="4" fill="#1d4ed8"
        style={{ originX: '38px', originY: '52px' }}
        animate={walking ? { rotate: [20, -20, 20] } : { rotate: 0 }}
        transition={{ duration: 0.5, repeat: walking ? Infinity : 0, ease: 'easeInOut' }}
      />

      {/* Shoes */}
      <ellipse cx="26" cy="70" rx="6" ry="3" fill="#1f2937" />
      <ellipse cx="38" cy="70" rx="6" ry="3" fill="#1f2937" />
    </svg>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function HelloBoy() {
  const [msgKey, setMsgKey] = useState('home')
  const [visible, setVisible] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [walking, setWalking] = useState(false)
  const [facingLeft, setFacingLeft] = useState(false)
  // 'right' = resting at right, 'left' = resting at left (chat open)
  const [position, setPosition] = useState('right')
  const [messages, setMessages] = useState([
    { from: 'bot', text: '👋 Hi! Main Vaibhav ka assistant hoon. Portfolio ke baare mein kuch bhi pucho!' }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)
  const boyControls = useAnimation()

  // screen width ke hisaab se walk distance
  const getWalkX = () => window.innerWidth - 120

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const sections = Object.keys(SECTION_MESSAGES)
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setMsgKey(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  // ── Walk to right, open chat ──
  const handleOpenChat = async () => {
    if (walking || chatOpen) return
    setWalking(true)
    setFacingLeft(false)
    // walk right
    await boyControls.start({
      x: getWalkX(),
      transition: { duration: 1.4, ease: 'linear' }
    })
    setWalking(false)
    setPosition('right')
    setChatOpen(true)
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  // ── Close chat, walk back to left ──
  const handleCloseChat = async () => {
    if (walking) return
    setChatOpen(false)
    setWalking(true)
    setFacingLeft(true)
    // walk left back
    await boyControls.start({
      x: 0,
      transition: { duration: 1.4, ease: 'linear' }
    })
    setWalking(false)
    setPosition('left')
  }

  const sendMessage = (text) => {
    const userMsg = text || input.trim()
    if (!userMsg) return
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: userMsg }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: getReply(userMsg) }])
    }, 700)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  const { msg, sub } = SECTION_MESSAGES[msgKey] || SECTION_MESSAGES.home

  const glassStyle = {
    background: 'rgba(10, 20, 18, 0.82)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    border: '1px solid rgba(20,184,166,0.25)',
    boxShadow: '0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(20,184,166,0.08)',
  }

  return (
    <AnimatePresence>
      {visible && (
        // Fixed container — always bottom-right anchor
        <div className="fixed bottom-5 left-5 z-[9999] select-none flex flex-col items-start">

          {/* ── Chat Window (fixed at right side) ── */}
          <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end">
          <AnimatePresence>
            {chatOpen && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                className="mb-3 w-[300px] sm:w-[340px] flex flex-col overflow-hidden"
                style={{ maxHeight: '480px', borderRadius: '20px', ...glassStyle }}
              >
                {/* Header */}
                <div className="flex items-center gap-2.5 px-4 py-3"
                  style={{ borderBottom: '1px solid rgba(20,184,166,0.15)' }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-base"
                    style={{ background: 'rgba(20,184,166,0.15)', border: '1px solid rgba(20,184,166,0.3)' }}>🤖</div>
                  <div className="flex-1">
                    <p className="text-sm font-bold leading-none text-white">Vaibhav's Assistant</p>
                    <p className="text-[10px] mt-0.5" style={{ color: 'rgba(94,234,212,0.7)' }}>Portfolio ke baare mein pucho!</p>
                  </div>
                  <button
                    onClick={handleCloseChat}
                    className="p-1.5 rounded-lg transition-colors"
                    style={{ color: 'rgba(94,234,212,0.6)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,184,166,0.15)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 space-y-2" style={{ minHeight: 0 }}>
                  {messages.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className="max-w-[85%] px-3 py-2 text-xs leading-relaxed whitespace-pre-line"
                        style={m.from === 'user' ? {
                          background: 'linear-gradient(135deg, #10b981, #0d9488)',
                          color: '#fff',
                          borderRadius: '14px 14px 4px 14px',
                          boxShadow: '0 2px 12px rgba(16,185,129,0.3)',
                        } : {
                          background: 'rgba(255,255,255,0.06)',
                          color: 'rgba(255,255,255,0.88)',
                          borderRadius: '14px 14px 14px 4px',
                          border: '1px solid rgba(20,184,166,0.18)',
                        }}
                      >
                        <MessageText text={m.text} />
                      </div>
                    </motion.div>
                  ))}
                  {typing && (
                    <div className="flex justify-start">
                      <div className="px-3 py-2 rounded-2xl flex gap-1 items-center"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(20,184,166,0.18)' }}>
                        {[0, 1, 2].map(i => (
                          <motion.span key={i} className="w-1.5 h-1.5 rounded-full block"
                            style={{ background: '#2dd4bf' }}
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>

                {/* Suggestions */}
                <div className="flex gap-1.5 px-3 py-2 overflow-x-auto"
                  style={{ borderTop: '1px solid rgba(20,184,166,0.12)', scrollbarWidth: 'none' }}>
                  {SUGGESTIONS.map((s) => (
                    <button key={s} onClick={() => sendMessage(s)}
                      className="shrink-0 px-2.5 py-1 text-[10px] font-medium whitespace-nowrap transition-all duration-200"
                      style={{ borderRadius: '20px', border: '1px solid rgba(20,184,166,0.4)', color: '#2dd4bf', background: 'rgba(20,184,166,0.08)' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(20,184,166,0.2)'; e.currentTarget.style.borderColor = 'rgba(20,184,166,0.7)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(20,184,166,0.08)'; e.currentTarget.style.borderColor = 'rgba(20,184,166,0.4)' }}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div className="flex items-center gap-2 px-3 py-2.5"
                  style={{ borderTop: '1px solid rgba(20,184,166,0.12)' }}>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Kuch bhi pucho..."
                    className="flex-1 text-xs px-3 py-2 outline-none transition-colors"
                    style={{ borderRadius: '12px', border: '1px solid rgba(20,184,166,0.25)', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.9)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(20,184,166,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(20,184,166,0.25)'}
                  />
                  <button onClick={() => sendMessage()}
                    className="p-2 transition-all duration-200"
                    style={{ borderRadius: '12px', background: 'linear-gradient(135deg, #10b981, #0d9488)', color: '#fff', boxShadow: '0 2px 10px rgba(16,185,129,0.35)' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <Send size={13} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>

          {/* ── Boy + Bubble ── */}
          <div className="flex flex-col items-start">

            {/* Speech bubble — only when not walking and chat closed */}
            {!chatOpen && !walking && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={msgKey}
                  initial={{ scale: 0.7, opacity: 0, y: 8 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.7, opacity: 0, y: 8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="mb-2 px-4 py-2 cursor-pointer"
                  style={{
                    borderRadius: '16px 16px 16px 4px',
                    minWidth: '150px', maxWidth: '200px',
                    ...glassStyle,
                  }}
                  onClick={handleOpenChat}
                >
                  <p className="text-sm font-bold leading-tight text-white">{msg}</p>
                  <p className="text-[10px] font-medium mt-0.5" style={{ color: '#2dd4bf' }}>{sub}</p>
                </motion.div>
              </AnimatePresence>
            )}

            {/* Walking hint while walking */}
            {walking && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-2 px-3 py-1.5"
                style={{ borderRadius: '12px', ...glassStyle, minWidth: '100px', textAlign: 'center' }}
              >
                <p className="text-xs text-white font-medium">
                  {facingLeft ? '🚶Wapas Aa raha hoon...' : '🚶 Chat open karne ja ra hu ja raha hoon...'}
                </p>
              </motion.div>
            )}

            {/* Boy — animated walk */}
            <motion.div
              animate={boyControls}
              className="relative w-16 h-20 cursor-pointer"
              // body bounce while walking
              style={{ y: 0 }}
              whileHover={!walking ? { scale: 1.08 } : {}}
              whileTap={!walking ? { scale: 0.95 } : {}}
              onClick={!walking && !chatOpen ? handleOpenChat : undefined}
            >
              {/* body bounce */}
              <motion.div
                className="w-full h-full"
                animate={walking ? { y: [0, -4, 0, -4, 0] } : { y: 0 }}
                transition={{ duration: 0.5, repeat: walking ? Infinity : 0, ease: 'easeInOut' }}
              >
                {/* Chat badge */}
                {!chatOpen && !walking && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center z-10"
                    style={{ background: 'linear-gradient(135deg, #10b981, #0d9488)', boxShadow: '0 0 8px rgba(16,185,129,0.6)' }}
                  >
                    <MessageCircle size={10} className="text-white" />
                  </motion.div>
                )}

                <WalkingBoy walking={walking} facingLeft={facingLeft} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
