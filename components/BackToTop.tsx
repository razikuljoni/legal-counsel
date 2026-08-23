'use client';

import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }

      if (currentScroll > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="back-to-top-btn"
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#171717] hover:bg-neutral-800 text-white shadow-xl flex items-center justify-center border border-neutral-700 transition-transform active:scale-95 group focus:outline-none focus:ring-2 focus:ring-slate-400"
          aria-label="Scroll back to top of page"
        >
          {/* Circular progress SVG ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="19"
              fill="none"
              stroke="#334155"
              strokeWidth="2"
            />
            <circle
              cx="22"
              cy="22"
              r="19"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeDasharray="119.38"
              strokeDashoffset={119.38 - (119.38 * scrollProgress) / 100}
              strokeLinecap="round"
              className="transition-all duration-75"
            />
          </svg>

          <ChevronUp className="w-5 h-5 text-white transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
