// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { LanguageProvider } from './context/language-context'

export const metadata: Metadata = {
  title: 'About Me | Portfolio',
  description: 'Osobná portfólio stránka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body className="bg-gray-950 text-white font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}