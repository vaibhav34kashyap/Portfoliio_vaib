'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const COUNT = 50
    const particles = Array.from({ length: COUNT }, () => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: Math.random() * 2,
      vx: (Math.random() - 0.5) * 0.002,
      vy: (Math.random() - 0.5) * 0.002,
      vz: (Math.random() - 0.5) * 0.003,
    }))

    let t = 0
    let frame = 0

    const project = (x, y, z) => {
      const fov = 1.5
      const scale = fov / (fov + z)
      return {
        sx: (x * scale * canvas.width * 0.4) + canvas.width / 2,
        sy: (y * scale * canvas.height * 0.4) + canvas.height / 2,
        scale,
      }
    }

    const isDark = () => document.documentElement.classList.contains('dark')

    const draw = () => {
      frame++
      t += 0.005

      const cosT = Math.cos(t * 0.3)
      const sinT = Math.sin(t * 0.3)

      const projected = particles.map((p) => {
        p.x += p.vx
        p.y += p.vy
        p.z += p.vz

        if (p.x > 1.5) p.x = -1.5
        if (p.x < -1.5) p.x = 1.5
        if (p.y > 1.5) p.y = -1.5
        if (p.y < -1.5) p.y = 1.5
        if (p.z > 2) p.z = 0
        if (p.z < 0) p.z = 2

        const rx = p.x * cosT - p.z * sinT
        const rz = p.x * sinT + p.z * cosT

        return { ...project(rx, p.y, rz), orig: p }
      })

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const dark = isDark()
      const baseColor = dark ? '16, 185, 129' : '5, 150, 105'

      // Draw connections only every 2nd frame
      if (frame % 2 === 0) {
        for (let i = 0; i < projected.length; i++) {
          for (let j = i + 1; j < projected.length; j++) {
            const dx = projected[i].sx - projected[j].sx
            const dy = projected[i].sy - projected[j].sy
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 100) {
              const alpha = (1 - dist / 100) * 0.12 * projected[i].scale
              ctx.beginPath()
              ctx.moveTo(projected[i].sx, projected[i].sy)
              ctx.lineTo(projected[j].sx, projected[j].sy)
              ctx.strokeStyle = `rgba(${baseColor}, ${alpha})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        }
      }

      projected.forEach(({ sx, sy, scale }) => {
        const r = Math.max(1, scale * 2.5)
        ctx.beginPath()
        ctx.arc(sx, sy, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${baseColor}, ${scale * 0.5})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
