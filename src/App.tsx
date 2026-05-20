/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import OfferSection from "./components/OfferSection";
import LuxuryGallery from "./components/LuxuryGallery";
import Footer from "./components/Footer";
import { BRAND } from "./constants";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero (100vh)
      setShowSticky(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative selection:bg-accent selection:text-white overflow-x-hidden">
      <Hero />
      <SocialProof />
      <OfferSection />
      <LuxuryGallery />
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href={BRAND.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden"
          >
            <motion.a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-accent text-white p-5 rounded-[2rem] font-black shadow-[0_15px_50px_rgba(255,0,200,0.5)] glass border-4 border-white/10"
                whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col">
                <span className="text-[10px] opacity-80 uppercase tracking-[0.2em] leading-none mb-2 font-black">Peça agora</span>
                <span className="text-xl leading-none italic uppercase">🍧 MEU AÇAÍ REFORÇADO</span>
              </div>
              <div className="bg-accent-neon p-2.5 rounded-2xl shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                 <Zap className="w-7 h-7 fill-dark text-dark stroke-dark" />
              </div>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX: useScrollProgress() }}
      />
    </div>
  );
}

// Simple custom hook for scroll progress
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(window.scrollY / scrollHeight);
      }
    };
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);
  return progress;
}

function Zap({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
