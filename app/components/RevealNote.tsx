"use client"

import { motion } from "framer-motion"

interface RevealNoteProps {
  isRevealed: boolean
  setIsRevealed: (isRevealed: boolean) => void
}

export default function RevealNote({ isRevealed, setIsRevealed }: RevealNoteProps) {
  return (
    <div className="w-full max-w-md">
      {!isRevealed ? (
        <motion.button
          className="w-full bg-pink-700 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          onClick={() => setIsRevealed(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Click to reveal a special little note
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <p className="text-gray-800 text-lg text-center">
            Dear Hadiya,
You are my favorite person, my besh friend, my girlfriend and Inshallah you will be my wife. But first I need to ask you an important question, one that the very fate of our dunya might rest upon. Will you, Hadiya Rashid, BE MY VALENTINE BABYYYY! YAHOOOO. 
(You better say yes pls pls pls i worked hard on this peesh say yes ma)
I LOVE U MONKEY MOOOOOOWAH, ONLY A FEW MORE MONTHS UNTIL WE CAN CUDDLE IN UNI OMGOSH YAYYAYAYAY! Love, Hamzi
          </p>
        </motion.div>
      )}
    </div>
  )
}

