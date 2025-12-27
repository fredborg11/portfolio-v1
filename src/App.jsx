import React, { useState, useRef } from 'react'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Quote from './sections/Quote'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Logo from './components/Logo'
import MenuOverlay from './components/MenuOverlay'
import ScrollVelocity from './components/ScrollVelocity'  
import Crosshair from './components/Crosshair'
import CoffeeCorner from './components/CoffeeCorner'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const appRef = useRef(null)

  return (
    <div ref={appRef} className="bg-offWhiteCV text-blackCV min-h-screen font-sans relative">
      <Crosshair color="rgba(26, 29, 31, 0.2)" containerRef={appRef} />
      <header className="flex justify-between items-center p-6">
        <Logo />
        <button onClick={() => setMenuOpen(true)}>
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-blackCV"></span>
            <span className="block w-6 h-0.5 bg-blackCV"></span>
            <span className="block w-6 h-0.5 bg-blackCV"></span>
          </div>
        </button>
      </header>

      {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}

      <Hero />
      <div className="w-full h-[1px] bg-[#1a1d1f] my-4"></div>
      <ScrollVelocity
        texts={["Hurtig til at omdanne idéer til færdige løsninger · Naturlig teamplayer der løfter, motiverer og går forrest ·"]}
        velocity={-80}
        className="text-[2rem] sm:text-4xl font-light tracking-widest text-blackCV"
        />
      <div className="w-full h-[1px] bg-[#1a1d1f] my-4"></div>
      <Skills />
      <Quote />
      <Experience />
      <Footer />
      <CoffeeCorner />
    </div>
  )
}