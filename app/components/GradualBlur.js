'use client'

import { useEffect, useRef, useState } from 'react'
import '../styles/GradualBlur.css'

const GradualBlur = ({ 
  position = 'bottom', 
  height = '6rem', 
  strength = 2, 
  divCount = 5, 
  opacity = 1,
  target = 'parent',
  className = '',
  style = {}
}) => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!containerRef.current) return
    
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const blurDivs = []
  const increment = 100 / divCount

  for (let i = 1; i <= divCount; i++) {
    const progress = i / divCount
    const blurValue = Math.pow(progress, 1.5) * strength * 0.5

    const p1 = Math.round((increment * i - increment) * 10) / 10
    const p2 = Math.round(increment * i * 10) / 10

    const direction = position === 'top' ? 'to top' : 'to bottom'
    const gradient = `transparent ${p1}%, black ${p2}%`

    const divStyle = {
      position: 'absolute',
      inset: '0',
      maskImage: `linear-gradient(${direction}, ${gradient})`,
      WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
      backdropFilter: `blur(${blurValue.toFixed(2)}px)`,
      WebkitBackdropFilter: `blur(${blurValue.toFixed(2)}px)`,
      background: 'transparent',
      opacity: opacity,
    }

    blurDivs.push(<div key={i} style={divStyle} />)
  }

  const containerStyle = {
    position: target === 'page' ? 'fixed' : 'absolute',
    height: height,
    width: '100%',
    [position]: 0,
    left: 0,
    right: 0,
    pointerEvents: 'none',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.3s ease-out',
    zIndex: target === 'page' ? 1100 : 10,
    ...style
  }

  return (
    <div
      ref={containerRef}
      className={`gradual-blur ${className}`}
      style={containerStyle}
    >
      <div className="gradual-blur-inner">
        {blurDivs}
      </div>
    </div>
  )
}

export default GradualBlur