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
        Som vývojár s hlbokým záujmom o tvorbu moderných a efektívnych webových aplikácií, ktoré sú nielen funkčné, ale aj intuitívne a používateľsky prívetivé. Moja práca je založená na filozofii jednoduchosti, čistoty a udržateľnosti kódu, pričom vždy kladiem dôraz na vysokú kvalitu používateľského zážitku. V priebehu svojej kariéry som sa venoval rôznym technológiám a neustále sa učím nové prístupy, ktoré mi pomáhajú zlepšovať moje riešenia a prispievať k inováciám v digitálnom svete. Verím, že v dnešnom dynamickom prostredí je nevyhnutné neustále experimentovať, testovať nové technológie a prístupy a adaptovať sa na zmeny. Okrem samotného kódovania sa venujem aj dizajnu, kde sa snažím spojiť estetiku s funkčnosťou, aby výsledné produkty nielen dobre vyzerali, ale aj bez problémov slúžili svojim používateľom. Vždy sa zameriavam na to, aby moje aplikácie boli nielen technicky robustné, ale aj príjemné na používanie.
      </motion.p>
    </section>
  )
}
