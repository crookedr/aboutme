'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '../context/language-context';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { language } = useLanguage();

  const translatedTitle = {
    sk: "Projekty",
    en: "Projects",
  };

  const projects = [
    {
      title: {
        sk: 'FRIO – Next.js Blog',
        en: 'FRIO – Next.js Blog',
      },
      description: {
        sk: 'Blog vytvorený v Next.js a Tailwind CSS. Obsahuje prihlasovanie, diskusie, dynamické články a čistý dizajn.',
        en: 'A blog created with Next.js and Tailwind CSS. It features authentication, discussions, dynamic articles, and clean design.',
      },
      image: '/images/frio-mockup.png',
      github: 'https://github.com/crookedr/frioblog',
      demo: {
        sk: 'Live demo zatiaľ nedostupné',
        en: 'Live demo not available yet',
      },
      isDemoAvailable: false,
    },
    {
      title: {
        sk: 'crookedr – portfólio stránka',
        en: 'crookedr – portfolio page',
      },
      description: {
        sk: 'Portfólio vytvorené v Next.js s dôrazom na animácie, sekcie o mne, responzívny dizajn a profesionálne UI.',
        en: 'Portfolio created with Next.js focusing on animations, about me sections, responsive design, and professional UI.',
      },
      image: '/images/aboutme.png',
      github: 'https://github.com/crookedr/aboutme',
      demo: {
        sk: 'https://crookedr.com/',
        en: 'https://crookedr.com/',
      },
      isDemoAvailable: true,
    },
    {
      title: {
        sk: 'SmoothUp – CS2 app',
        en: 'SmoothUp – CS2 app',
      },
      description: {
        sk: 'Desktop appka zameraná na optimalizáciu výkonu v CS2. Analyzuje hardvér, odporúča nastavenia a má moderné UI.',
        en: 'A desktop app focused on optimizing performance in CS2. It analyzes hardware, recommends settings, and has a modern UI.',
      },
      image: '/images/smoothuplogo.png',
      demo: {
        sk: 'Vo vývoji',
        en: 'In development',
      },
      isDemoAvailable: false,
    },
  ];

  return (
    <section id="projects" className="scroll-mt-20 min-h-screen px-4 sm:px-8 py-32 bg-black text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-16 text-center">{translatedTitle[language]}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1600px] w-full items-stretch justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.015] transition-all duration-300 flex flex-col w-full max-w-[500px] mx-auto"
          >
            <div
              className="w-full bg-black cursor-zoom-in"
              onClick={() => setSelectedImage(project.image)}
            >
              <Image
                src={project.image}
                alt={project.title[language]}
                width={800}
                height={500}
                className="w-full object-contain aspect-video"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">{project.title[language]}</h3>
                <p className="text-gray-300 text-base leading-relaxed">{project.description[language]}</p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded text-base font-medium transition-colors w-full sm:w-auto text-center"
                  >
                    GitHub
                  </a>
                )}

                {project.isDemoAvailable ? (
                  <a
                    href={project.demo[language]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded text-base font-medium transition-colors w-full sm:w-auto text-center"
                  >
                    Live
                  </a>
                ) : (
                  <span className="bg-gray-700 text-gray-400 py-3 px-6 rounded text-base w-full sm:w-auto text-center">
                    {project.demo[language]}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt={"Náhľad obrázka"}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl border border-white/10"
          />
        </div>
      )}
    </section>
  );
}