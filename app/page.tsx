"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import RevealNote from "./components/RevealNote"
import HeartAnimation from "./components/HeartAnimation"
import TeddyAnimation from "./components/TeddyAnimation"

export default function ValentineProposal() {
  const [isNoteRevealed, setIsNoteRevealed] = useState(false)

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <HeartAnimation />
      <TeddyAnimation />
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-pink-700 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Dear Hadiya, will you be my Valentine?
      </motion.h1>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og-image-SvBPcxU1XwbxF9HDpu5RQDTlkbSKb9.png"
          alt="HADA PHOTO VERY CUTE"
          className="rounded-full w-64 h-64 object-cover border-4 border-pink-700"
        />
      </motion.div>

      <RevealNote isRevealed={isNoteRevealed} setIsRevealed={setIsNoteRevealed} />

      <motion.div
        className="mt-8 flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          onClick={() => alert("Yay! IM SHO HAPPY!")}
        >
          Yes!
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300"
          onClick={() => alert("Monkey dont be toota :(")}
        >
          No
        </button>
      </motion.div>
    </div>
  )
}

