import React, { useRef, useLayoutEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'motion/react';

// optional styling via tailwind
// hvis du vil gøre linjen smallere, se step 3

function useElementWidth(ref) {
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [ref])

  return width
}

export const ScrollVelocity = ({
  texts = [],
  velocity = 100,
  className = 'text-[3rem] tracking-tight font-semibold uppercase',
  numCopies = 6,
}) => {

  function VelocityText({ children, baseVelocity = velocity }) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)

    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 60,
      stiffness: 400
    })

    const velocityFactor = useTransform(
      smoothVelocity,
      [0, 1000],
      [0, 5],
      { clamp: false }
    )

    const copyRef = useRef(null)
    const copyWidth = useElementWidth(copyRef)

    function wrap(min, max, v) {
      const range = max - min
      const mod = (((v - min) % range) + range) % range
      return mod + min
    }

    const x = useTransform(baseX, v => {
      if (copyWidth === 0) return '0px'
      return `${wrap(-copyWidth, 0, v)}px`
    })

    const directionFactor = useRef(1)
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get()
      baseX.set(baseX.get() + moveBy)
    })

    const spans = []
    for (let i = 0; i < numCopies; i++) {
      spans.push(
        <span className={className} key={i} ref={i === 0 ? copyRef : null}>
          {children}
        </span>
      )
    }

    return (
      <div className="whitespace-nowrap w-full select-none overflow-hidden">
        <motion.div style={{ x }}>
          {spans}
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-offWhiteCV text-blackCV overflow-hidden w-full">
      {texts.map((text, index) => (
        <VelocityText key={index} baseVelocity={index % 2 ? -velocity : velocity}>
          {text}&nbsp;
        </VelocityText>
      ))}
    </div>
  )
}

export default ScrollVelocity
