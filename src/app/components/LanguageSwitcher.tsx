'use client'

import { useLanguage } from '../context/language-context'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 text-white text-sm">
      <button
        onClick={() => setLanguage('sk')}
        className={`px-2 py-1 rounded ${language === 'sk' ? 'bg-blue-500' : 'bg-gray-700'}`}
      >
        SK
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded ${language === 'en' ? 'bg-blue-500' : 'bg-gray-700'}`}
      >
        EN
      </button>
    </div>
  )
}
