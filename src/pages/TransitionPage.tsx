import Logo from "../components/Logo.tsx";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PETALS = 8;

export function MixingOrb() {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      animate={{
        filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-white/5"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [0.95, 1.1, 0.95],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative w-80 h-80"
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {Array.from({ length: PETALS }).map((_, i) => {
          const angle = (360 / PETALS) * i;

          return (
            <div
              key={i}
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <motion.div
                style={{
                  width: "4.5rem",
                  height: "14rem",
                  borderRadius: "50%",
                  mixBlendMode: "screen",
                  opacity: 0.6,

                  backgroundImage: `
                    radial-gradient(
                      ellipse at center,
                      rgba(255,190,120,0) 40%,
                      rgba(255,190,120,0.6) 65%,
                      rgba(255,190,120,0.95) 80%,
                      rgba(255,190,120,0) 100%
                    )
                  `,
                }}
                animate={{
                  scaleY: [0.85, 1.18, 0.85],
                  opacity: [0.25, 0.8, 0.25],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: i * 0.08,
                }}
              />
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

const messages = [
  "your music is mixing...",
  "feeling the pulse...",
  "calculating the beat...",
];

function CyclingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8">
      <AnimatePresence mode="wait">
        <motion.p
          key={messages[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-neutral-200"
        >
          {messages[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default function MixingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between py-16">
      <div className="">
        <Logo />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <MixingOrb />
      </div>

      <p className="mb-20 text-neutral-200">
        <CyclingText />
      </p>
    </div>
  );
}
