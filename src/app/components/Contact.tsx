'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useLanguage } from '../context/language-context' // Importujte jazykový kontext

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const { language } = useLanguage(); // Získajte jazyk

  const translatedTexts = {
    sk: {
      title: "Kontaktujte ma",
      description: "Máte nápad na vylepšenie, projekt alebo spoluprácu?<br />Chcete sa mi len tak ozvať, podeliť sa o Vašu myšlienku?<br /><br />Neváhajte ma nezáväzne kontaktovať – odpíšem rád a čo najskôr.",
      successMessage: "✅ Ďakujem! Vaša správa bola úspešne odoslaná.",
      successDetails: "Teší ma, že ste sa rozhodli ma kontaktovať.",
      namePlaceholder: "Tvoje meno",
      emailPlaceholder: "Email",
      messagePlaceholder: "Správa",
      submitButton: status === 'sending' ? 'Odosielam...' : 'Odoslať',
      errorMessage: "Nastala chyba pri odosielaní 😕"
    },
    en: {
      title: "Contact Me",
      description: "Do you have an idea for improvement, a project or collaboration?<br />Want to reach out just to share your thoughts?<br /><br />Feel free to contact me without obligation – I will gladly reply as soon as possible.",
      successMessage: "✅ Thank you! Your message has been successfully sent.",
      successDetails: "I’m glad you decided to contact me.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      submitButton: status === 'sending' ? 'Sending...' : 'Send',
      errorMessage: "An error occurred while sending 😕"
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xqaplpyg', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {translatedTexts[language].title}
      </motion.h2>

      <motion.p
        className="max-w-xl mx-auto mb-10 text-gray-400 leading-relaxed text-base sm:text-lg"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        dangerouslySetInnerHTML={{ __html: translatedTexts[language].description }} // Pre HTML obsah
      />

      {status === 'success' && (
        <motion.div
          className="text-green-400 font-medium text-lg mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl">{translatedTexts[language].successMessage}</p>
          <p>{translatedTexts[language].successDetails}</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto text-left">
        <input
          type="text"
          name="name"
          placeholder={translatedTexts[language].namePlaceholder}
          required
          className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input
          type="email"
          name="email"
          placeholder={translatedTexts[language].emailPlaceholder}
          required
          className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <textarea
          name="message"
          placeholder={translatedTexts[language].messagePlaceholder}
          rows={5}
          required
          className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {translatedTexts[language].submitButton}
        </button>

        {status === 'error' && (
          <motion.p
            className="text-red-400 font-medium pt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {translatedTexts[language].errorMessage}
          </motion.p>
        )}
      </form>

      <div className="flex justify-center gap-6 mt-12 text-2xl text-gray-400">
        <a href="https://github.com/crookedr" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-white transition" />
        </a>
        
        <a href="https://www.linkedin.com/in/romanhatnan%C4%8D%C3%ADk/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-white transition" />
        </a>
        
        <a href="mailto:crookedlmd@gmail.com">
          <MdEmail className="hover:text-white transition" />
        </a>
        
        <a href="https://discord.com/users/667726014864162836" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="hover:text-white transition" />
        </a>
      </div>
    </section>
  )
}
