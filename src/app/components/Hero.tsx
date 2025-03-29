'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const nameText = '<Roman Hatnančík />'
  const positions = [
    'Frontend Developer',
    'Fullstack Developer',
    'Creative Developer'
  ]
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [showDescription, setShowDescription] = useState(false)
  const [positionIndex, setPositionIndex] = useState(0)

  // Typing efekt pre meno
  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      setName(nameText.slice(0, i + 1))
      i++
      if (i === nameText.length) {
        clearInterval(typing)
        typePosition(positions[0], 0)
      }
    }, 150)

    return () => clearInterval(typing)
  }, [])

  // Typing efekt pre pozíciu (s cyklom)
  const typePosition = (text: string, index: number) => {
    let i = 0
    setPosition('')
    const typing = setInterval(() => {
      setPosition(text.slice(0, i + 1))
      i++
      if (i === text.length) {
        clearInterval(typing)
        setTimeout(() => {
          const nextIndex = (index + 1) % positions.length
          setPositionIndex(nextIndex)
          typePosition(positions[nextIndex], nextIndex)
        }, 2000)
        setTimeout(() => setShowDescription(true), 1000)
      }
    }, 100)
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative"
    >
      <motion.img
        src="images/profile.jpg"
        alt="Moja fotka"
        className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 text-white font-mono whitespace-nowrap overflow-hidden">
        {name}
        {name.length < nameText.length && (
          <span className="ml-1 animate-pulse text-white font-bold">█</span>
        )}
      </h1>

      <h2 className="text-xl text-gray-400 mb-4 font-mono">
        {position}
        {position.length < positions[positionIndex].length && (
          <span className="ml-1 animate-pulse text-white font-bold">█</span>
        )}
      </h2>

      {showDescription && (
        <motion.p
          className="max-w-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tvorím moderné a funkčné webové aplikácie s dôrazom na čistý kód,
          dizajn a používateľský zážitok.
        </motion.p>
      )}

      {/* Scroll down šípka */}
      <motion.div
        className="absolute bottom-10 text-white text-2xl animate-bounce cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <a href="#about">↓</a>
      </motion.div>
    </section>
  )
}
