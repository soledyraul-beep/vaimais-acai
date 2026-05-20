import { motion } from "motion/react";
import { Star, Zap, ShoppingBag, Heart, CheckCircle2 } from "lucide-react";

export default function SocialProof() {
  const stats = [
    { icon: <Star className="text-accent-neon" />, title: "Nota Máxima", subtitle: "Clientes recorrentes" },
    { icon: <ShoppingBag className="text-accent" />, title: "Reforçado", subtitle: "Açaí de verdade" },
    { icon: <Zap className="text-accent-neon" />, title: "Flash", subtitle: "Entrega rápida" },
    { icon: <Heart className="text-accent" />, title: "Favorito", subtitle: "Combinações amadas" },
  ];

  const benefits = [
    "Textura cremosa inconfundível",
    "Ingredientes selecionados",
    "Montagem personalizada",
    "Sabor consistente sempre",
  ];

  return (
    <section className="bg-mid py-20 px-6 relative overflow-hidden">
      {/* Decorative Liquify Background Elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-neon/10 blur-[100px] rounded-full" />

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black mb-4 uppercase italic">Quem prova normalmente <span className="text-accent-neon">volta.</span></h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-accent-neon mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => {
            const config = [
              {
                colorClass: "hover:border-accent-neon hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]",
                iconBg: "bg-accent-neon/10 text-accent-neon",
                pulseColor: "#39FF14"
              },
              {
                colorClass: "hover:border-accent hover:shadow-[0_0_30px_rgba(255,0,200,0.3)]",
                iconBg: "bg-accent/10 text-accent",
                pulseColor: "#FF00C8"
              },
              {
                colorClass: "hover:border-accent-neon hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]",
                iconBg: "bg-accent-neon/10 text-accent-neon",
                pulseColor: "#39FF14"
              },
              {
                colorClass: "hover:border-accent hover:shadow-[0_0_30px_rgba(255,0,200,0.3)]",
                iconBg: "bg-accent/10 text-accent",
                pulseColor: "#FF00C8"
              }
            ][i];

            return (
              <motion.div
                key={i}
                className={`glass p-8 rounded-[2.5rem] text-center flex flex-col items-center border border-white/5 cursor-pointer relative overflow-hidden transition-all duration-300 group ${config.colorClass}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  y: -12,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-40 blur-md pointer-events-none"
                    style={{ background: config.pulseColor }}
                    animate={{
                      scale: [0.9, 1.3, 0.9],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2.5 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className={`relative p-5 rounded-2xl mb-4 group-hover:rotate-12 transition-transform duration-300 ${config.iconBg}`}>
                    {stat.icon}
                  </div>
                </div>
                <h3 className="font-black text-xl mb-1 uppercase tracking-tighter text-white">{stat.title}</h3>
                <p className="text-sm text-muted font-medium">{stat.subtitle}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="glass p-8 md:p-16 rounded-[3.5rem] max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 border-white/5 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <div className="text-8xl font-black">VAIMAIS</div>
          </div>

          <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase leading-none">
              POR QUE<br />
              ESCOLHEM O <br />
              <span className="text-accent italic">VAIMAISAÇAI</span>
            </h2>
            <div className="space-y-5">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 justify-center lg:justify-start group">
                  <div className="bg-accent-neon/20 p-1.5 rounded-lg group-hover:bg-accent-neon group-hover:scale-110 transition-all">
                    <CheckCircle2 className="text-accent-neon w-5 h-5 group-hover:text-dark transition-colors" />
                  </div>
                  <span className="text-xl font-bold opacity-90 tracking-tight">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-10 bg-lux-purple/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-[3rem] overflow-hidden border-4 border-white/10 group-hover:border-accent/40 transition-colors">
              <img 
                src="https://i.imgur.com/VcNoiB5.png" 
                alt="Experience Açaí" 
                className="w-full shadow-2xl transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>
            {/* Small floating "Cream" badge */}
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-3xl animate-bounce">
              <span className="font-black text-accent-neon italic">ULTRA CREMOSO</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
