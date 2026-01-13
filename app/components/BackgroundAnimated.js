"use client";

import { motion } from "framer-motion";

const streams = Array.from({ length: 20 });

export default function BackgroundAnimated() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {streams.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] rounded-full blur-[1px]"
          style={{
            height: 120 + Math.random() * 300,
            left: `${Math.random() * 100}%`,
            top: "-40%",
            background:
              i % 3 === 0
                ? "linear-gradient(to bottom, transparent, rgba(56,189,248,0.9), transparent)"
                : i % 3 === 1
                ? "linear-gradient(to bottom, transparent, rgba(168,85,247,0.9), transparent)"
                : "linear-gradient(to bottom, transparent, rgba(99,102,241,0.9), transparent)",
          }}
          animate={{ y: ["-40%", "140%"], opacity: [0, 1, 0] }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 6,
          }}
        />
      ))}

      {/* Glow central */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(56,189,248,0.12), transparent 65%)",
        }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
