import React from "react"
import { motion, AnimatePresence } from "framer-motion";

export default function MenuOverlay({ onClose }) {
  const navItems = [
    { label: "Forside", href: "/" },
    { label: "Galleri", href: "/gallery" },
    { label: "Kompetencer", href: "#skills" },
    { label: "Erfaring", href: "#experience" },
    { label: "Kontakt", href: "#footer" }
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-blackCV text-offWhiteCV flex flex-col justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        {/* Luk-knap */}
        <button
          onClick={onClose}
          className="absolute top-10 right-6 text-4xl md:top-6 font-light hover:opacity-70 transition"
          aria-label="Luk menu"
        >
          ×
        </button>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center space-y-6 text-5xl font-extrabold uppercase tracking-tight"
        >
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              onClick={onClose}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="hover:opacity-80 transition-opacity"
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>

        {/* Kontaktinfo */}
        <motion.div
          className="mt-20 text-center text-base tracking-wide space-y-1 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a href="tel:+4528108213" className="block hover:opacity-60 transition">
            +45 2810 8213
          </a>
          <a href="mailto:fredborg11@gmail.com" className="block hover:opacity-60 transition">
            fredborg11@gmail.com
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-60 transition"
          >
            LinkedIn
          </a>
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}
