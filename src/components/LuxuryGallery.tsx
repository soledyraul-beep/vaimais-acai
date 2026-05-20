import { motion } from "motion/react";
import { IMAGES, BRAND } from "../constants";
import { Zap } from "lucide-react";
import PremiumButton from "./PremiumButton";
import ZoomableImage from "./ZoomableImage";

export default function LuxuryGallery() {
  return (
    <section className="bg-mid py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-4 uppercase leading-none drop-shadow-2xl">Olhar já dá <span className="text-accent tracking-tighter">vontade.</span></h2>
          <p className="text-muted text-xl max-w-2xl mx-auto font-medium">Cada montagem é feita para impressionar antes da primeira colher. Cremosidade capturada em cada detalhe.</p>
        </motion.div>

        {/* Masonry-like Grid with more impact (with zoom functionality) */}
        <div className="columns-2 md:columns-4 gap-6 space-y-6">
          {IMAGES.slice(0, 8).map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-[2.5rem] glass group border border-white/5 shadow-black/40 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <ZoomableImage 
                src={img} 
                alt={`Açaí Real Premium #${i + 1}`} 
                imgClassName="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-125"
              />
              <div className="absolute bottom-4 left-4 bg-white text-dark px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest z-10 pointer-events-none shadow-lg">
                vaimaisacai
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA PREMIUM SECTION */}
        <motion.div 
          className="mt-40 relative z-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          {/* Card background styling with radial gradients and neon border glows */}
          <div className="relative w-full rounded-[3rem] p-8 md:p-20 overflow-hidden border border-white/10 bg-gradient-to-br from-[#1b003a]/90 via-[#10002b]/95 to-[#240046]/90 shadow-[0_30px_100px_rgba(255,0,200,0.25)] text-center">
            
            {/* Soft background light blobs to ensure contrast and luxury aesthetic */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-neon/15 rounded-full blur-[120px] pointer-events-none" />
            
            {/* Glowing accent border line inside card */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-accent-neon/50 to-transparent" />

            {/* Badge container: O Novo Padrão do Açaí */}
            <div className="relative inline-block mb-10">
              <div className="absolute inset-0 bg-accent/30 blur-xl opacity-60 rounded-full animate-pulse" />
              <div className="relative inline-block px-8 py-3 rounded-full bg-[#10002B]/60 border-2 border-accent/40 shadow-[0_0_30px_rgba(255,0,200,0.3)] backdrop-blur-md">
                <span className="bg-gradient-to-r from-white via-accent-neon to-accent bg-clip-text text-transparent font-black tracking-[0.25em] text-xs sm:text-sm uppercase select-none">
                  💎 O Novo Padrão do Açaí
                </span>
              </div>
            </div>
            
            {/* Main title inside the premium card */}
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 uppercase leading-[0.9] tracking-tighter drop-shadow-2xl text-white select-none">
              HOJE É DIA <br className="hidden sm:block" />
              DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent-neon italic text-shadow-neon select-none">AÇAÍ REAL.</span>
            </h2>
            
            {/* Paragraph inside card - with supreme contrast */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-14 leading-relaxed font-semibold">
              Peça agora no <span className="text-white font-black hover:text-accent-neon transition-colors cursor-pointer">vaimaisacai</span> e descubra porque todo mundo em Aparecida de Goiânia volta pela cremosidade incomparável.
            </p>

            {/* Premium action button container */}
            <div className="flex justify-center items-center w-full relative z-10">
              <div className="relative inline-block hover:scale-105 active:scale-95 transition-transform duration-300 max-w-full">
                <PremiumButton href={BRAND.whatsapp} emoji="🍨" className="px-6 py-4 sm:px-14 sm:py-6 md:px-24 md:py-8 text-base sm:text-xl md:text-2xl font-black">
                  QUERO MEU REFORÇADO!
                </PremiumButton>
              </div>
            </div>
            
            {/* Order status signal */}
            <div className="mt-12 flex justify-center items-center gap-4 text-accent-neon font-black text-sm sm:text-lg tracking-widest animate-pulse">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-accent-neon" />
              <span>PEDIDOS ABERTOS — ENTREGA EXPRESS</span>
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-accent-neon" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
