import { motion } from "motion/react";
import { PRODUCTS, BRAND } from "../constants";
import PremiumButton from "./PremiumButton";
import ZoomableImage from "./ZoomableImage";

export default function OfferSection() {
  return (
    <section className="bg-dark py-24 px-6 relative overflow-hidden">
      {/* Liquid Neon Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-neon/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase italic">
            Escolha sua <span className="text-accent">combinação</span> favorita
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-accent to-accent-neon mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              className="glass p-5 rounded-[3rem] flex flex-col group h-full border-white/5 hover:border-accent/40 transition-all hover:translate-y-[-10px] relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-8 rounded-[2.5rem] overflow-hidden">
                <ZoomableImage 
                  src={product.image} 
                  alt={product.name} 
                  className="h-72 w-full rounded-[2.5rem] overflow-hidden border-4 border-white/5 group-hover:border-accent/20 transition-colors"
                  imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute top-4 right-4 bg-accent font-black px-4 py-1.5 rounded-full text-white text-[11px] shadow-[0_0_20px_rgba(255,0,200,0.5)] z-20 pointer-events-none">
                  {product.badge}
                </div>
              </div>

              <div className="flex-1 px-3">
                <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tighter leading-none">{product.name}</h3>
                <p className="text-sm text-muted mb-8 leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>

              <div className="px-3 pb-3">
                <PremiumButton href={BRAND.whatsapp} size="sm" className="w-full">
                  PEDIR
                </PremiumButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Improved Intermediate CTA with Neon Effects */}
        <motion.div 
          className="mt-32 p-12 md:p-20 glass rounded-[4rem] text-center bg-gradient-to-br from-primary/60 via-secondary/40 to-dark border-accent/20 relative overflow-hidden group shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Neon Grid Effect inside the card */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,0,200,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,200,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black mb-4 uppercase italic">Bateu <span className="text-accent-neon">vontade?</span></h3>
            <p className="text-muted mb-12 text-xl font-medium max-w-2xl mx-auto">Sua experiência premium com o açaí mais cremoso de Colina Azul está a apenas um clique.</p>
            
            <div className="flex flex-col items-center">
              <PremiumButton href={BRAND.whatsapp} emoji="💜" size="lg">
                PEDIR AGORA
              </PremiumButton>
              
              <div className="flex flex-wrap justify-center gap-10 mt-12 opacity-80 text-xs font-black uppercase tracking-[0.2em]">
                 <span className="flex items-center gap-2">📦 Entrega Express</span>
                 <span className="flex items-center gap-2">✅ Sem Complicação</span>
                 <span className="flex items-center gap-2">💎 Qualidade Real</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
