import { motion } from "motion/react";
import { BRAND, IMAGES } from "../constants";
import PremiumButton from "./PremiumButton";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with parallax zoom effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <img 
          src={IMAGES[0]} 
          alt="Açaí Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/72 backdrop-blur-[2px]" />
      </motion.div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lux-purple/30 blur-[130px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 blur-[130px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-accent-neon uppercase glass rounded-full shadow-[0_0_15px_rgba(57,255,20,0.3)]">
            ✨ Experiência Ultra Premium
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-none mb-6 uppercase tracking-tighter flex flex-col gap-2 items-center">
            <motion.span 
              className="inline-block select-none"
              animate={{
                y: [0, -8, 0, 8, 0],
                rotate: [0, -1, 0, 1, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              O AÇAÍ
            </motion.span>
            
            <motion.span 
              className="inline-block bg-gradient-to-r from-accent to-accent-neon bg-clip-text text-transparent italic text-neon select-none"
              animate={{
                y: [0, 10, 0, -10, 0],
                rotate: [0, 1.5, 0, -1.5, 0],
                scale: [1, 1.03, 1, 0.97, 1]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              MAIS CREMOSO
            </motion.span>
            
            <motion.span 
              className="inline-block text-white text-neon select-none"
              animate={{
                y: [0, -6, 0, 6, 0],
                x: [0, 5, 0, -5, 0]
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2
              }}
            >
              DE COLINA AZUL
            </motion.span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-muted/90 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Textura ultra cremosa, reforçado com amor e montado do jeitinho que você ama. O sabor que você merece, entregue onde você estiver.
          </p>

          <div className="flex flex-col items-center gap-6">
            <PremiumButton href={BRAND.whatsapp}>
              QUERO MEU AÇAÍ AGORA
            </PremiumButton>
            
            <div className="flex flex-wrap justify-center gap-8 mt-4">
              <span className="flex items-center gap-2 text-sm font-bold text-accent-neon">
                <div className="w-2 h-2 bg-accent-neon rounded-full animate-pulse" />
                ⚡ Entrega Turbo
              </span>
              <span className="flex items-center gap-2 text-sm font-bold text-accent">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                🍇 Textura Real
              </span>
              <span className="flex items-center gap-2 text-sm font-bold text-white">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                ⭐ Premium Quality
              </span>
            </div>
            
            <motion.div 
              className="mt-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-accent underline underline-offset-8 decoration-accent-neon decoration-2 font-black italic text-lg">
                🔥 Pedidos saindo agora
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles (Neon purple and pink/green colors with smooth drift animations) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
        {[...Array(22)].map((_, i) => {
          const modulo = i % 3;
          const bg = modulo === 0 
            ? "#FF00C8" // Rosa Neon / Lux Pink
            : modulo === 1 
            ? "#7B2CBF" // Roxo Profundo / Lux Purple
            : "#39FF14"; // Verde Neon / Accent Neon

          const size = ((i % 4) * 4) + 6; // 6px to 18px
          const delay = (i % 6) * 0.4;
          const duration = 10 + (i % 6) * 4; // 10s to 30s
          const startLeft = (i * 4.7) % 100;
          const startTop = (i * 7.9) % 100;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-30"
              style={{
                background: bg,
                width: size + "px",
                height: size + "px",
                left: startLeft + "%",
                top: startTop + "%",
                boxShadow: `0 0 ${size * 2}px ${bg}`,
              }}
              animate={{
                y: [0, -100, 50, 0],
                x: [0, i % 2 === 0 ? 30 : -30, i % 2 === 0 ? -20 : 20, 0],
                scale: [1, 1.25, 0.85, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
