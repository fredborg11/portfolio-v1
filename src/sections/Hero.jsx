import React from 'react'
import RotatingWord from '../components/RotatingWord'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="py-24 px-4 md:px-8 lg:px-16 bg-offWhiteCV text-blackCV"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-24">

        {/* Billede med forskudt ramme */}
        <div className="relative w-72 h-96 shrink-0">
          {/* Selve billedet */}
          <img
            src="https://res.cloudinary.com/dnkqhm27a/image/upload/v1766828269/ai_Thomas_1_bkazbk.jpg"
            alt="Thomas Fredborg portræt"
            className="w-full h-full object-cover rounded-none"
          />

          {/* Forskudt ramme */}
          <div className="absolute bottom-3 left-3 w-full h-full border border-blackCV rounded-none"></div>
        </div>

        <div className="max-w-xl space-y-6">

          <h1 className="text-6xl font-extrabold uppercase tracking-tight leading-none">
            Kreativ,
            <br />
            <RotatingWord words={['strategisk', 'visuel', 'analytisk']} />
            <br />
            art director
          </h1>

          <p className="antialiased text-lg tracking-tight opacity-90">
            – med styrke i visuel retning og brandopbygning —
            jeg omsætter idéer til konkrete løsninger med ro, struktur og
            kreativt overblik.
          </p>

          {/* --- CTA KNAPPER --- */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">

            {/* telefon */}
            <a
              href="tel:+4512345678"
              className="
                px-6 py-3 
                bg-blackCV text-offWhiteCV 
                text-sm uppercase font-medium tracking-wide
                rounded-none
                flex items-center justify-center gap-2
                transition-colors duration-300
                hover:bg-blackCV/90
              "
            >
              Ring til mig
            </a>

            {/* mail */}
            <a
              href="mailto:thomas@eksempel.dk"
              className="
                px-6 py-3 
                border border-blackCV 
                text-sm uppercase font-medium tracking-wide
                rounded-none
                flex items-center justify-center gap-2
                transition-colors duration-300
                hover:bg-blackCV hover:text-offWhiteCV
              "
            >
              Skriv en mail
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
