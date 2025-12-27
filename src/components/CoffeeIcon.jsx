import React, { forwardRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const CoffeeIcon = forwardRef(({ className, size = 28 }, ref) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  const PATH_VARIANTS = {
    animate: (custom) => ({
      y: -3,
      opacity: [0, 1, 0],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.2 * custom,
      },
    }),
  };

  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ overflow: "visible" }}
      >
        <motion.path d="M10 2v2" animate={controls} variants={PATH_VARIANTS} custom={0.2} />
        <motion.path d="M14 2v2" animate={controls} variants={PATH_VARIANTS} custom={0.4} />
        <motion.path d="M6 2v2" animate={controls} variants={PATH_VARIANTS} custom={0} />
        <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      </svg>
    </div>
  );
});

CoffeeIcon.displayName = "CoffeeIcon";
