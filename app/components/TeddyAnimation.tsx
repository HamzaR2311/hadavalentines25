"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function TeddyAnimation() {
  const [teddies, setTeddies] = useState<Array<{ x: number; y: number }>>([])

  useEffect(() => {
    const newTeddies = Array(3)
      .fill(null)
      .map((_, index) => {
        // Divide the screen into 3 vertical sections
        const sectionWidth = window.innerWidth / 3
        const x = index * sectionWidth + Math.random() * sectionWidth

        // Randomize the y position
        const y = Math.random() * window.innerHeight

        return { x, y }
      })
    setTeddies(newTeddies)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {teddies.map((teddy, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl"
          initial={{
            opacity: 0,
            scale: 0,
            x: teddy.x,
            y: teddy.y,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            y: [null, teddy.y - window.innerHeight], // Move up the full height of the screen
            x: [teddy.x, teddy.x + 50, teddy.x - 50, teddy.x], // Add a slight horizontal movement
          }}
          transition={{
            duration: 10, // Increased duration for slower movement
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 5, // More variation in start times
            ease: "easeInOut",
          }}
        >
          🧸
        </motion.div>
      ))}
    </div>
  )
}

