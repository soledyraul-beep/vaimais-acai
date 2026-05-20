import { motion } from "motion/react";
import { BRAND } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 py-24 px-6 relative overflow-hidden">
      {/* Decorative Liquify Background Elements */}
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-accent/10 blur-[150px] rounded-full" />

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
        <div className="max-w-md">
          <h2 className="text-5xl font-black mb-6 tracking-tighter text-white uppercase italic">
            vaimais<span className="text-accent">acai</span>
          </h2>
          <p className="text-muted text-lg font-medium leading-relaxed mb-8">
            Açaí reforçado, ultra cremoso e premium em Aparecida de Goiânia. Redefinindo sua relação com o sabor em cada colherada.
          </p>
          <div className="flex flex-wrap gap-4">
             <div className="bg-white/5 px-4 py-2 rounded-2xl border border-white/5 text-xs font-bold uppercase tracking-wider">Colina Azul</div>
             <div className="bg-white/5 px-4 py-2 rounded-2xl border border-white/5 text-xs font-bold uppercase tracking-wider">Aparecida de Goiânia</div>
             <div className="bg-white/5 px-4 py-2 rounded-2xl border border-white/5 text-xs font-bold uppercase tracking-wider">Premium Experience</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 w-full md:w-auto">
          <div className="space-y-6">
            <span className="text-xs font-black text-accent-neon tracking-[0.3em] uppercase">Onde Estamos</span>
            <p className="text-white text-xl font-bold max-w-[200px]">{BRAND.location}</p>
          </div>
          
          <div className="space-y-6">
            <span className="text-xs font-black text-accent tracking-[0.3em] uppercase">Conecte-se</span>
            <div className="flex flex-col gap-4 min-w-[200px]">
              <motion.a 
                href={BRAND.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 bg-gradient-to-r from-[#E1306C] to-[#C13584] text-white px-6 py-4 rounded-2xl font-bold text-base transition-all duration-300 border border-white/10 overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 8px rgba(225, 48, 108, 0.2)",
                    "0 0 20px rgba(225, 48, 108, 0.5)",
                    "0 0 8px rgba(225, 48, 108, 0.2)"
                  ]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-xl relative z-10 transition-transform group-hover:scale-110">📸</span>
                <span className="tracking-wide uppercase text-xs font-black relative z-10">Instagram</span>
              </motion.a>
              <motion.a 
                href={BRAND.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold text-base transition-all duration-300 border border-white/10 overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 8px rgba(37, 211, 102, 0.2)",
                    "0 0 20px rgba(37, 211, 102, 0.5)",
                    "0 0 8px rgba(37, 211, 102, 0.2)"
                  ]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4
                }}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-xl relative z-10 transition-transform group-hover:scale-110">💬</span>
                <span className="tracking-wide uppercase text-xs font-black relative z-10">WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-24 pt-12 border-t border-white/5 text-center">
        <p className="text-muted text-sm tracking-tight font-medium opacity-40">
          © {new Date().getFullYear()} VAIMAISAÇAI • O AÇAÍ MAIS CREMOSO DO GOIÁS • FEITO COM 💜
        </p>
      </div>
    </footer>
  );
}
