'use client'

import Image from 'next/image'

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 min-h-screen px-6 py-20 bg-black text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-12">Projekty</h2>

      <div className="max-w-4xl w-full bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
        <Image
          src="/images/frio-mockup.png"
          alt="FRIO Blog mockup"
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">FRIO – Next.js Blog</h3>
          <p className="text-gray-400 mb-4">
            Moderný blog vytvorený pomocou Next.js a Tailwind CSS, s dôrazom na čistý kód, dizajn a jednoduchosť. Obsahuje admin panel, prihlasovanie a dynamický routing.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/crookedr/frioblog"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
            <span className="text-gray-500 cursor-not-allowed">
              Live demo zatiaľ nedostupné
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
