'use client'

import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaGoogle } from 'react-icons/fa';
import { SiOpenai, SiMeta } from 'react-icons/si';
import { useLanguage } from '../context/language-context'; // Import jazykového kontextu

const educationItems = {
  sk: [
    {
      title: 'Stredná odborná škola IT',
      subtitle: '2018 – 2022',
      description: 'Zameranie na programovanie, databázy a webové technológie.',
      icon: <FaGraduationCap className="text-blue-400 text-2xl" />,
    },
    {
      title: 'WebRebel HTML5, CSS3 & jQuery',
      subtitle: 'Skillmea.sk',
      description: 'Základy HTML5, CSS3, OOP a JavaScriptu, aplikované na reálnych projektoch.',
      icon: <FaLaptopCode className="text-green-400 text-2xl" />,
    },
    {
      title: 'Informatika 101 - Python',
      subtitle: 'StreetofCode.sk',
      description: 'Práca s PyCharm, riešenie úloh a úvod do Pythonu.',
      icon: <FaLaptopCode className="text-green-400 text-2xl" />,
    },
    {
      title: 'ChatGPT & AI pre programátorov',
      subtitle: 'Skillmea.sk',
      description: 'Využitie AI nástrojov (ChatGPT, Claude, atď.) na zvýšenie efektivity pri programovaní.',
      icon: <SiOpenai className="text-purple-400 text-2xl" />,
    },
    {
      title: 'Social Media Marketing',
      subtitle: 'Skillmea.sk',
      description: 'Meta Ads, SEO, práca so sociálnymi sieťami a náhľad do sveta digitálneho marketingu.',
      icon: <SiMeta className="text-blue-500 text-2xl" />,
    },
    {
      title: 'Google Ads Search Certification',
      subtitle: 'Google Digital Academy',
      description: 'Certifikát od Google v oblasti PPC (PayPerClick) reklamy a jej aplikácie.',
      icon: <FaGoogle className="text-red-400 text-2xl" />,
    },
  ],
  en: [
    {
      title: 'Secondary Vocational School of IT',
      subtitle: '2018 – 2022',
      description: 'Focus on programming, databases and web technologies.',
      icon: <FaGraduationCap className="text-blue-400 text-2xl" />,
    },
    {
      title: 'WebRebel HTML5, CSS3 & jQuery',
      subtitle: 'Skillmea.sk',
      description:
        'Basics of HTML5, CSS3, OOP and JavaScript applied to real projects.',
      icon: <FaLaptopCode className="text-green-400 text-2xl" />,
    },
    {
      title: "Informatics 101 - Python",
      subtitle: "StreetofCode.sk",
      description:
        "Working with PyCharm, solving tasks and an introduction to Python.",
      icon: <FaLaptopCode className="text-green-400 text-2xl" />,
    },
    {
      title: "ChatGPT & AI for Programmers",
      subtitle: "Skillmea.sk",
      description:
        "Utilizing AI tools (ChatGPT, Claude etc.) to increase efficiency in programming.",
       icon:<SiOpenai className="text-purple-400 text-2xl" />,
     },
     {
       title:"Social Media Marketing",
       subtitle:"Skillmea.sk",
       description:"Meta Ads, SEO , working with social networks and an insight into the world of digital marketing.",
       icon:<SiMeta className="text-blue-500 text-2xl"/>,
     },
     {
       title:"Google Ads Search Certification",
       subtitle:"Google Digital Academy",
       description:"Certificate from Google in PPC (PayPerClick) advertising and its application.",
       icon:<FaGoogle className="text-red-400 text-2xl"/>,
     }
   ]
 };

export default function Education() {
  const { language } = useLanguage(); // Získanie aktuálneho jazyka z kontextu

  return (
    <section id="education" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {language === "sk" ? "Vzdelanie a kurzy" : "Education and Courses"}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationItems[language].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay:index * .15 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
     </section>
   );
}
