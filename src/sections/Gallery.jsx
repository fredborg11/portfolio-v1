import React, { useState, useRef } from 'react';
import DomeGallery from '../components/DomeGallery';
import Logo from '../components/Logo';
import MenuOverlay from '../components/MenuOverlay';
import Crosshair from '../components/Crosshair';
import CoffeeCorner from '../components/CoffeeCorner';
import DragHint from '../components/DragHint';

export default function Galleri() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const galleryRef = useRef(null)
  const handleUserDrag = () => {
    if (showHint) setShowHint(false);
  }

  return (
    <section 
      id="gallery"
      ref={galleryRef}
      onPointerDown={handleUserDrag}
      className="relative w-screen h-screen overflow-hidden bg-offWhiteCV text-blackCV"
    >
      <Crosshair color="rgba(26, 29, 31, 0.2)" containerRef={galleryRef} />
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

      {/* --- FULLSCREEN GALLERY --- */}
      <div className="w-full h-full">
        <DomeGallery />
      </div>
      <DragHint />
      <CoffeeCorner />
    </section>
  );
}
