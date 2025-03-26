'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        O mne
      </motion.h2>

      <motion.p
        className="text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Som ambiciózny vývojár, ktorý sa zameriava na tvorbu webových aplikácií s dôrazom na jednoduchosť, používateľský zážitok a čistý kód. Rád sa učím nové technológie a neustále sa zlepšujem. Vo voľnom čase experimentujem s dizajnom, kódom a občas si zahrám niečo kompetitívne.
      </motion.p>
    </section>
  )
}
