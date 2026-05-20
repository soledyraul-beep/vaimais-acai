import React, { useState } from "react";
import { motion } from "motion/react";

interface PremiumButtonProps {
  href: string;
  children: React.ReactNode;
  emoji?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function PremiumButton({ href, children, emoji = "🍧", className = "", size = "lg" }: PremiumButtonProps) {
  const [hovered, setHovered] = useState(false);

  const sizeClasses = {
    sm: "px-6 py-3.5 rounded-[1.5rem] border-2 text-xs md:text-sm shadow-[0_10px_30px_rgba(255,0,200,0.3)] gap-2",
    md: "px-10 py-4.5 rounded-[2rem] border-4 text-lg md:text-xl shadow-[0_15px_45px_rgba(255,0,200,0.4)] gap-3",
    lg: "px-10 py-5 md:px-14 md:py-6 rounded-full border-4 text-xl md:text-2xl shadow-[0_20px_50px_rgba(255,0,200,0.5)] gap-4"
  }[size];

  const emojiSizes = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl"
  }[size];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-center bg-[#10002B] text-white transition-all overflow-hidden cursor-pointer border-white/20 select-none ${sizeClasses} ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* 1. Dynamic background flow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-lux-purple via-accent to-accent-neon opacity-90"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* 2. Delicious fresh Açaí filling WAVE (rises smoothly on hover) */}
      <motion.div 
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-accent via-lux-pink/90 to-transparent origin-bottom"
        initial={{ scaleY: 0.35 }}
        animate={{ 
          scaleY: hovered ? 1 : 0.35,
          height: ["45%", "50%", "45%"]
        }}
        transition={{ 
          scaleY: { duration: 0.5, ease: "easeOut" },
          height: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* 3. Rising Gold / Neon Bubbles/Particles within the cream */}
      <div className="absolute inset-0 opacity-50 mix-blend-screen pointer-events-none z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1.5 h-1.5 bg-accent-neon rounded-full"
            style={{
              bottom: "10%",
              left: (i * 16) + 10 + "%",
              boxShadow: "0 0 8px #39FF14",
            }}
            animate={{
              y: [0, -60],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + (i % 3) * 0.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.25
            }}
          />
        ))}
      </div>

      {/* 4. Active interactive border tracing */}
      <motion.div 
        className="absolute inset-0 border-2 border-accent-neon rounded-full opacity-60 z-10"
        animate={{
          opacity: hovered ? [0.6, 1, 0.6] : 0.4,
          scale: hovered ? [1, 1.01, 1] : 1
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* 5. Shimmer reflection beam sweeping elegantly */}
      <motion.div 
        className="absolute top-0 -inset-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none z-20"
        animate={{
          left: ["-100%", "200%"]
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.8
        }}
      />

      {/* Rich emoji action */}
      <span className={`relative z-30 ${emojiSizes} group-hover:rotate-12 transition-transform duration-300`}>{emoji}</span>
      
      {/* Label string */}
      <span className="relative z-30 tracking-wider text-white font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-neon">
        {children}
      </span>
    </motion.a>
  );
}
