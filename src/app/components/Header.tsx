'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { label: 'Domov', href: '#hero' },
  { label: 'O mne', href: '#about' },
  { label: 'Vzdelanie', href: '#education' },
  { label: 'Zručnosti', href: '#skills' },
  { label: 'Projekty', href: '#projects' },
  { label: 'Kontakt', href: '#contact' },
]

const fullText = '<crookedr />'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [isTypingDone, setIsTypingDone] = useState(false)

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) {
        clearInterval(typing)
        setIsTypingDone(true)
      }
    }, 150)

    return () => clearInterval(typing)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Realistic typing logo */}
        <a
          href="#hero"
          className="text-white text-lg md:text-xl font-mono tracking-wide relative group"
        >
          <span className="group-hover:text-blue-400 transition">{typedText}</span>
          {!isTypingDone && (
            <span className="ml-1 animate-pulse text-white font-bold">█</span>
          )}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm tracking-wide">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-blue-400 transition relative"
            >
              {item.label}
              <span className="block h-0.5 bg-blue-500 scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Mobile hamburger icon */}
        <div className="md:hidden text-white text-2xl">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden bg-black/90 text-white px-6 pb-6 pt-2 space-y-4 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-base text-gray-300 hover:text-blue-400 transition"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
