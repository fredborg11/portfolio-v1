import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function RotatingWord({ words, interval = 2500 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length)
    }, interval)
    return () => clearInterval(id)
  }, [words, interval])

  return (
    <div className="inline-block overflow-hidden align-top">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
