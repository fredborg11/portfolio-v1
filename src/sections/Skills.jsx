import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(prev => prev === index ? null : index)
  }

  const skills = [
    {
      title: "Visuel branding",
      description: "Jeg udvikler brandidentiteter der balancerer strategi, struktur og visuel æstetik.",
      keywords: ["Retning", "Identitet", "Brand systems"]
    },
    {
      title: "UI/UX design",
      description: "Jeg forbinder brugerbehov og digital retning — visuelt, strukturelt og funktionelt.",
      keywords: ["Wireframes", "Prototyper", "Design systems"]
    },
    {
      title: "Konceptudvikling",
      description: "Jeg skaber koncepter med retning og gennemslagskraft ud fra indsigter og visuel strategi.",
      keywords: ["Insights", "Narrativ", "Idé → Form"]
    },
    {
      title: "Digital design",
      description: "Digital storytelling, identitet og systems — med kroppen plantet i brandoplevelsen.",
      keywords: ["Website design", "Content systems", "Visuel retning"]
    },
    {
      title: "Brand building",
      description: "Brandet skal føles, ikke forklares — jeg bygger stabilitet gennem visuel konsekvens.",
      keywords: ["DNA", "Systemer", "Genkendelighed"]
    },
    {
      title: "Projektansvar",
      description: "Jeg kan binde idé, retning, tid og leverancer sammen, så kvaliteten fastholdes.",
      keywords: ["Planlægning", "Samarbejde", "Deadlines"]
    }
  ]

  return (
    <section id="skills" className="py-24 bg-offWhiteCV text-blackCV">
      <div className="max-w-5xl mx-auto space-y-16">

        <h2 className="text-sm font-extrabold uppercase my-10">
          Kompetencer
        </h2>

        
<motion.div
  layout="position"
  animate={{ opacity: 1 }}
  transition={{
    layout: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] },
    duration: 1.0,
    ease: [0.25, 0.1, 0.25, 1],
  }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
>
  {skills.map((skill, index) => (
    <SkillCard key={index} {...skill} />
  ))}
</motion.div>
        {/* --- VÆRKTØJSKASSE --- */}
<div>
  <h2 className="text-sm font-extrabold uppercase mt-24 mb-10">
    Værktøjskassen
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { name: "Photoshop", level: 90 },
      { name: "Illustrator", level: 90 },
      { name: "QuarkXpress", level: 100 },
      { name: "After Effects", level: 80 },
      { name: "Premiere Pro", level: 50 },
      { name: "Figma", level: 80 },
      { name: "InDesign", level: 70 },
      { name: "Vibe-Coding", level: 70 },
      { name: "ChatGPT / Gemini / Co-Pilot", level: 70 },
    ].map((tool, index) => (
      <div key={index} className="space-y-1">
        <div className="text-xs font-bold uppercase">
          {tool.name}
        </div>
        <div className="w-full h-3 bg-blackCV/10 overflow-hidden rounded-sm">
          <div
            style={{ width: `${tool.level}%` }}
            className="h-full bg-blackCV transition-all duration-700 ease-out"
          />
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  )
}
