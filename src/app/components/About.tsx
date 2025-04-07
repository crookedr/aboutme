'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../context/language-context' // Import jazykového kontextu

export default function About() {
  const { language } = useLanguage(); // Získanie aktuálneho jazyka

  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {language === "sk" ? "O mne" : "About Me"} {/* Preklad nadpisu */}
      </motion.h2>

      <motion.p
        className="text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {language === "sk" 
          ? "Som vývojár s hlbokým záujmom o tvorbu moderných a efektívnych webových aplikácií, ktoré sú nielen funkčné, ale aj intuitívne a používateľsky prívetivé. Moja práca je založená na filozofii jednoduchosti, čistoty a udržateľnosti kódu, pričom vždy kladiem dôraz na vysokú kvalitu používateľského zážitku. V priebehu svojej kariéry som sa venoval rôznym technológiám a neustále sa učím nové prístupy, ktoré mi pomáhajú zlepšovať moje riešenia a prispievať k inováciám v digitálnom svete. Verím, že v dnešnom dynamickom prostredí je nevyhnutné neustále experimentovať, testovať nové technológie a prístupy a adaptovať sa na zmeny."
          : "I am a developer with a deep interest in creating modern and efficient web applications that are not only functional but also intuitive and user-friendly. My work is based on the philosophy of simplicity, clarity, and code sustainability, always emphasizing high-quality user experience. Throughout my career, I have worked with various technologies and continuously learn new approaches that help me improve my solutions and contribute to innovations in the digital world. I believe that in today’s dynamic environment, it is essential to constantly experiment, test new technologies and approaches, and adapt to changes."
        }
      </motion.p>
    </section>
  )
}
