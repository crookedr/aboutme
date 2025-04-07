'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../context/language-context' // Importujte jazykový kontext

const skills = [
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'DaVinci Resolve', icon: '/icons/davinciresolve.svg' },
  { name: 'ChatGPT', icon: '/icons/openai.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
]

export default function Skills() {
  const { language } = useLanguage(); // Získajte jazyk

  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {language === "sk" ? "Zručnosti a technológie" : "Skills and Technologies"}
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center text-gray-300">
        {skills.map((skill, index) => {
          const isPython = skill.name === 'Python';
          return (
            <motion.div
              key={skill.name}
              className={`flex flex-col items-center gap-2 ${isPython ? 'col-span-2 sm:col-span-1' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 invert" />
              <p className="text-sm">{skill.name}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
