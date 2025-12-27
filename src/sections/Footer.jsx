import React from 'react'
import { motion } from 'framer-motion'
import RotatingWord from "../components/RotatingWord"

export default function Footer() {
  return (
    <footer className="bg-offWhiteCV text-blackCV py-32 px-4 md:px-8 lg:px-16 border-t border-blackCV">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* --- HEADLINE med rotating text --- */}
<div className="text-xl md:text-3xl font-bold tracking-tight leading-snug max-w-2xl flex flex-col gap-1">
  <span>Er du klar til</span>
  <span className="flex">

    <RotatingWord
      words={[
        "en god snak?",
        "en stærk retning?",
        "et nyt kapitel?",
        "en kop kaffe?",
        "at mødes?"
      ]}
      mainClassName="px-2 bg-blackCV text-offWhiteCV rounded-md"
      staggerFrom={"last"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.035}
      splitLevelClassName="overflow-hidden pb-1"
      transition={{ type: "tween", ease: [0.25, 0.1, 0.25, 1], duration: .4 }}
      rotationInterval={2200}
    />
  </span>
</div>


        {/* --- CONTACT CTA --- */}
        <div className="space-y-2">
          <h3 className="text-sm uppercase font-extrabold">Kontakt</h3>

          <div className="text-base md:text-lg space-y-1">
            <a
              href="mailto:fredborg11@gmail.dk"
              className="block hover:opacity-70 transition-opacity"
            >
              fredborg11@gmail.com
            </a>

            <a
              href="tel:+4528108213"
              className="block hover:opacity-70 transition-opacity"
            >
              +45 28 10 82 13
            </a>

            <a
              href="https://www.linkedin.com/in/tfn"
              target="_blank"
              className="block hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
          </div>
        </div>


        {/* --- SMALL PRINT --- */}
        <div className="text-xs text-blackCV">
          © {new Date().getFullYear()} Thomas Fredborg — Art Director
        </div>

      </div>
    </footer>
  )
}
