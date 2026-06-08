"use client";

import { motion } from "framer-motion";

export default function ScrollAnimate({ children, direction = "up", duration = 0.6 }) {

  const directions = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
  };

  return (
    <motion.div
      initial={directions[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: duration, 
        ease: [0.25, 1, 0.5, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}