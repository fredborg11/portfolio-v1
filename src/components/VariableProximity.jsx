import React, { forwardRef, useMemo, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

// NOTE: Removed './VariableProximity.css' import because the file was not found in build.
// If you need styles, create VariableProximity.css next to this file and re-add:
// import './VariableProximity.css';

// Utility hook to use requestAnimationFrame
function useAnimationFrame(callback) {
  useEffect(() => {
    let frameId;
    const loop = () => {
      callback();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [callback]);
}

// Track mouse position inside container
function useMousePositionRef(containerRef) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x, y) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = ev => updatePosition(ev.clientX, ev.clientY);
    const handleTouchMove = ev => {
      const touch = ev.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

// VariableProximity component
const VariableProximity = forwardRef((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = 'linear',
    className = '',
    onClick,
    style,
    ...restProps
  } = props;

  const letterRefs = useRef([]);
  const interpolatedSettingsRef = useRef([]);
  const mousePositionRef = useMousePositionRef(containerRef);
  const lastPositionRef = useRef({ x: null, y: null });

  // TEST CASES — ensures no runtime crashes
  if (typeof label !== 'string' || label.length === 0) {
    console.error('VariableProximity: label must be a non-empty string');
  }
  if (!fromFontVariationSettings || !toFontVariationSettings) {
    console.error('VariableProximity: missing fontVariation settings');
  }

  // Parse wght axis settings
  const parsedSettings = useMemo(() => {
    const parseSettings = settingsStr =>
      new Map(
        settingsStr
          .split(',')
          .map(s => s.trim())
          .map(s => {
            const [name, value] = s.split(' ');
            return [name.replace(/['"]/g, ''), parseFloat(value)];
          })
      );

    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const calculateDistance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const calculateFalloff = distance => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
    switch (falloff) {
      case 'exponential':
        return norm ** 2;
      case 'gaussian':
        return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
      case 'linear':
      default:
        return norm;
    }
  };

    // Animation frame loop for font variation with idle breathing motion
  useAnimationFrame(() => {
    if (!containerRef?.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const { x, y } = mousePositionRef.current;

    const time = Date.now() * 0.001;
    const idleOscillation = (Math.sin(time) * 0.1 + 0.1); // 0 → 1 smooth cycling

    letterRefs.current.forEach((letterRef, index) => {
      if (!letterRef) return;

      const rect = letterRef.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

      const distance = calculateDistance(
        x, y,
        letterCenterX, letterCenterY
      );

      let strength;

      // 🔥 når musen er langt væk → idle oscillation
      if (distance >= radius) {
        strength = idleOscillation; 
      } else {
        // 🔥 når musen nærmer sig → proximity styrer vægten
        strength = calculateFalloff(distance);
      }

      // Interpoler vægt & opsz
      const newSettings = parsedSettings
        .map(({ axis, fromValue, toValue }) => {
          const interpolatedValue = fromValue + (toValue - fromValue) * strength;
          return `'${axis}' ${interpolatedValue}`;
        })
        .join(', ');

      letterRef.style.fontVariationSettings = newSettings;
    });
  });


  const words = label.split(' ');
  let letterIndex = 0;

  return (
    <span
      ref={ref}
      className={`${className} variable-proximity`}
      onClick={onClick}
      style={{ display: 'inline', ...style }}
      {...restProps}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map(letter => {
            const currentLetterIndex = letterIndex++;
            return (
              <motion.span
                key={currentLetterIndex}
                ref={el => {
                  letterRefs.current[currentLetterIndex] = el;
                }}
                style={{ display: 'inline-block', fontVariationSettings: interpolatedSettingsRef.current[currentLetterIndex] }}
                aria-hidden="true"
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span style={{ display: 'inline-block' }}>&nbsp;</span>}
        </span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
});

VariableProximity.displayName = 'VariableProximity';
export default VariableProximity;

// --- Quote.jsx integration example ---
// Place this in your Quote.jsx file or below to test integration
// Make sure to import this component where needed

export const QuoteSection = () => {
  const containerRef = useRef(null);
  return (
    <section className="h-screen w-full flex items-center justify-center bg-blackCV text-offWhiteCV px-8">
      <div ref={containerRef} style={{ position: "relative" }} className="max-w-5xl w-full">
        <VariableProximity
          label="Effektiv vej bedst mulig løsning"
          fromFontVariationSettings="'wght' 200, 'opsz' 12"
          toFontVariationSettings="'wght' 900, 'opsz' 40"
          containerRef={containerRef}
          radius={260}
          falloff="gaussian"
          className="text-[10vw] leading-[1.05] tracking-tight"
        />
      </div>
    </section>
  );
};
