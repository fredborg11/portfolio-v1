import React, { useRef } from 'react'
import VariableProximity from '../components/VariableProximity'

const Quote = () => {
  const containerRef = useRef(null)

  return (
    <section
      className="
        w-full h-[90vh]
        flex items-center justify-center
        bg-blackCV text-offWhiteCV
      "
    >
      <div
        ref={containerRef}
        style={{ position: 'relative' }}
        className="w-full max-w-[1400px] flex items-center justify-center"
      >
        <VariableProximity
          label="Kreativ ro. Strategisk power."
          fromFontVariationSettings="'wght' 200, 'opsz' 12'"
          toFontVariationSettings="'wght' 900, 'opsz' 40'"
          containerRef={containerRef}
          radius={260}
          falloff="gaussian"
          className="
            select-none text-center
            leading-[0.9]
            text-[12vw] sm:text-[10vw]
            tracking-tight
          "
        />
      </div>
    </section>
  )
}

export default Quote
