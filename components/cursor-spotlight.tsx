'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CursorSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 opacity-30 transition-opacity"
        style={{
          background: `
            radial-gradient(
              400px at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(255, 255, 255, 0.15), 
              transparent 70%
            )
          `,
        }}
        transition={{ duration: 0 }}
      />
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 opacity-20 mix-blend-overlay transition-opacity"
        style={{
          background: `
            radial-gradient(
              250px at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(255, 255, 255, 0.2),
              transparent 60%
            )
          `,
        }}
        transition={{ duration: 0 }}
      />
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 opacity-10 transition-opacity"
        style={{
          background: `
            radial-gradient(
              600px at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
        transition={{ duration: 0 }}
      />
    </>
  )
}

