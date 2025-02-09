"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function HeartAnimation() {
  const [hearts, setHearts] = useState<Array<{ x: number; y: number }>>([])

  useEffect(() => {
    const newHearts = Array(30)
      .fill(null)
      .map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="absolute text-red-500"
          initial={{
            opacity: 0,
            scale: 0,
            x: heart.x,
            y: heart.y,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [null, -100],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          💝
        </motion.div>
      ))}
    </div>
  )
}

