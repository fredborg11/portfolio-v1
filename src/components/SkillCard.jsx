import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SkillCard({ title, description, keywords }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
  layout="position"
  transition={{ layout: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }}
  className={`
    relative cursor-pointer rounded-none
    transition-all duration-500 ease-[0.25,0.1,0.25,1]
    px-6 py-6
    ${open ? 'border border-blackCV/40 bg-offWhiteCV/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)]' : 'border border-transparent bg-transparent hover:bg-offWhiteCV/40 hover:border-blackCV/20'}
    ${open ? 'grid-row-span-2' : ''}
  `}
  onMouseEnter={() => setOpen(true)}
  onMouseLeave={() => setOpen(false)}
>
      {/* HEADER */}
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-bold tracking-tight">
          {title}
        </h3>
        <span className="text-2xl font-light select-none opacity-80">
          {open ? "–" : "+"}
        </span>
      </div>

      {/* EXPANDING CONTENT */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-4 space-y-3"
          >
            <p className="text-base opacity-90 max-w-xs">
              {description}
            </p>

            <ul className="space-y-1 opacity-90 text-base font-bold mt-2">
              {keywords.map(word => (
                <li key={word}>
                  · {word}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
