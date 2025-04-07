'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/language-context';

export default function Hero() {
  const { language } = useLanguage();
  const nameText = '<Roman Hatnančík />';
  const positions = [
    language === "sk" ? 'Frontend Developer' : 'Frontend Developer',
    language === "sk" ? 'Fullstack Developer' : 'Fullstack Developer',
    language === "sk" ? 'Creative Developer' : 'Creative Developer',
  ];
  
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  const [positionIndex, setPositionIndex] = useState(0);
  
  interface Bubble {
    size: number;
    top: number;
    left: number;
    duration: number;
    opacity: number;
    key: number;
  }
  
  const [bubbles, setBubbles] = useState<Bubble[]>([]); // Nový stav pre bublinky

  // Typing efekt pre meno
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setName(nameText.slice(0, i + 1));
      i++;
      if (i === nameText.length) {
        clearInterval(typing);
        typePosition(positions[0], 0);
      }
    }, 150);
    
    return () => clearInterval(typing);
  }, []);

  // Typing efekt pre pozíciu (s cyklom)
  const typePosition = (text: string, index: number) => {
    let i = 0;
    setPosition('');
    
    const typing = setInterval(() => {
      setPosition(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(typing);
        setTimeout(() => {
          const nextIndex = (index + 1) % positions.length;
          setPositionIndex(nextIndex);
          typePosition(positions[nextIndex], nextIndex);
        }, 2000);
        setTimeout(() => setShowDescription(true), 1000);
      }
    }, 100);
  };

   // Generovanie nových bublín
   const generateBubble = () => {
     const newBubble = {
       size: Math.random() * (40 -15) +15,
       top: Math.random() * (100),
       left: Math.random() * (100),
       duration: Math.random() * (10 -5) +5,
       opacity: Math.random() * (.5 - .2) + .2,
       key: Date.now(), // Použitie timestamp ako unikátneho kľúča
     };
     setBubbles((prevBubbles) => [...prevBubbles, newBubble]);

     // Odstránenie bubliny po uplynutí doby animácie
     setTimeout(() => {
       setBubbles((prevBubbles) => prevBubbles.filter(bubble => bubble.key !== newBubble.key));
     }, newBubble.duration * 1000); // Doba animácie v milisekundách
   };

   // Generovanie bublín každých pár sekúnd
   useEffect(() => {
     const intervalId = setInterval(generateBubble, 1000); // Generovať novú bublinu každú sekundu
     return () => clearInterval(intervalId); // Čistenie intervalu
   }, []);

   return (
     <section
       id="hero"
       className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-gray-950"
     >
       {/* Background Bubbles */}
       <div className="absolute inset-0 overflow-hidden">
         {bubbles.map((bubble) => (
           <div 
             key={bubble.key} 
             className="bubble" 
             style={{
               width: bubble.size,
               height: bubble.size,
               top: `${bubble.top}%`,
               left: `${bubble.left}%`,
               opacity: bubble.opacity,
               position: 'absolute',
               borderRadius: '50%',
               backgroundColor: 'rgba(255,255,255,.3)', /* Biele bublinky */
               animationName: 'moveBubble',
               animationDuration: `${bubble.duration}s`,
               animationTimingFunction: 'linear',
             }}
           ></div>
         ))}
       </div>

       <motion.img
         src="images/profile.jpg"
         alt="Moja fotka"
         className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 relative z-10"
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.6 }}
       />

       <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white font-mono z-10">
         {name}
         {name.length < nameText.length && (
           <span className="ml-1 animate-pulse text-white font-bold">█</span>
         )}
       </h1>

       <h2 className="text-xl text-gray-400 mb-4 font-mono z-10">
         {position}
         {position.length < positions[positionIndex].length && (
           <span className="ml-1 animate-pulse text-white font-bold">█</span>
         )}
       </h2>

       {showDescription && (
         <motion.p
           className="max-w-xl text-gray-300 leading-relaxed z-10"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
         >
           {language === "sk" 
             ? "Tvorím moderné a funkčné webové aplikácie s dôrazom na čistý kód, dizajn a používateľský zážitok."
             : "I create modern and functional web applications with an emphasis on clean code, design, and user experience."}
         </motion.p>
       )}

       {/* Scroll down šípka */}
       <motion.div
         className="absolute bottom-10 text-white text-2xl animate-bounce cursor-pointer z-10"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 3 }}
       >
         <a href="#about">↓</a>
       </motion.div>

       {/* CSS pre animáciu bublín */}
       <style jsx>{`
         @keyframes moveBubble {
           to {
             transform: translateY(-100vh); /* Posun smerom nahor */
           }
         }

         .bubble {
           animation-name: moveBubble;
           animation-timing-function: linear;
           animation-fill-mode: forwards; /* Zabezpečíme, že bublina sa nezobrazí pod dolným okrajom */
         }
       `}</style>
     </section>
    );
  }
