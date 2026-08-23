'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, ShieldCheck } from 'lucide-react';

/**
 * Preloader Component
 * Displays a stately corporate legal monogram animation on initial page load,
 * establishing the professional and trustworthy monochrome tone.
 */
export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Graceful timer to allow resources to paint
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#171717] text-white"
          role="status"
          aria-live="polite"
          aria-label="Loading Vanguard & Sterling Legal Counsel"
        >
          {/* Subtle geometric background watermark */}
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <Scale className="w-[600px] h-[600px] text-white" strokeWidth={0.5} />
          </div>

          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center text-center px-6"
          >
            {/* Crest Emblem */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-white/20 bg-[#262626] flex items-center justify-center mb-6 shadow-2xl relative">
              <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-[#64748B]"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Firm Monogram & Title */}
            <h1 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-[0.2em] text-white mb-2 uppercase">
              Vanguard &amp; Sterling
            </h1>
            <p className="font-sans-body text-xs sm:text-sm tracking-[0.25em] text-[#64748B] uppercase font-medium mb-6">
              Legal Counsel &bull; Est. 1994
            </p>

            {/* Progress indicator */}
            <div className="w-48 sm:w-64 h-1 bg-[#262626] rounded-full overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-[#64748B] via-slate-300 to-white"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              />
            </div>

            <div className="mt-4 flex items-center gap-2 text-[11px] text-[#94A3B8] font-sans-body tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#64748B]" />
              <span>AmLaw 100 Tier 1 Corporate &amp; Trial Counsel</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

