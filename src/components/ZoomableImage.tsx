import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export default function ZoomableImage({ src, alt, className = "", imgClassName = "" }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scroll when image is zoomed in
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 cursor-zoom-out select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          {/* Close Button */}
          <motion.button 
            className="absolute top-6 right-6 z-[100000] p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-95 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Glowing neon backdrop ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vh] md:w-[70vw] md:h-[70vh] max-w-4xl opacity-25 blur-3xl pointer-events-none rounded-full bg-gradient-to-r from-accent to-accent-neon animate-pulse" />

          {/* Big High Quality Image Container */}
          <motion.div 
            className="relative max-w-full max-h-[85vh] rounded-[2.5rem] overflow-hidden border-2 border-white/15 shadow-[0_0_60px_rgba(255,0,200,0.4)] bg-black flex items-center justify-center"
            initial={{ scale: 0.85, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.85, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={src} 
              alt={alt} 
              className="w-auto h-auto max-w-[95vw] max-h-[75vh] md:max-h-[80vh] object-contain rounded-[2.5rem]"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-center">
              <p className="text-white font-black text-lg md:text-2xl uppercase tracking-widest text-shadow-neon">{alt}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div 
        className={`relative group cursor-zoom-in overflow-hidden ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          className={imgClassName}
          loading="lazy"
        />
        {/* Subtle Hover overlay with Zoom icon */}
        <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.div 
            className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ZoomIn className="w-5 h-5 md:w-6 md:h-6" />
          </motion.div>
        </div>
      </div>

      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
