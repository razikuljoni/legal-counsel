'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Scale, ShieldCheck, Award } from 'lucide-react';

/**
 * ParallaxQuoteSection Component
 * Implements subtle parallax scroll depth translation for the firm's core philosophy and oath of advocacy.
 * Uses bold typography and high-contrast Slate & Neutral styling on white/subtle slate background.
 */
export default function ParallaxQuoteSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <section
      ref={containerRef}
      id="firm-credo"
      className="relative py-14 px-6 sm:px-10 lg:px-12 bg-white text-[#171717] overflow-hidden border-b border-slate-200"
      aria-label="Firm Philosophy and Trial Credo"
    >
      {/* Decorative Parallax Background Watermark */}
      <motion.div
        style={{ y: yBg }}
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none"
        aria-hidden="true"
      >
        <Scale className="w-[500px] h-[500px] text-[#171717]" strokeWidth={0.7} />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-slate-100 border border-slate-300 rounded-md text-xs font-semibold text-slate-700 uppercase tracking-widest mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
          <span>The Vanguard Standard of Trial Advocacy</span>
        </div>

        <motion.blockquote
          style={{ opacity }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171717] leading-snug tracking-tight mb-8"
        >
          "We do not measure legal excellence by procedural routine, but by the decisive resolution of existential corporate risk and the steadfast defense of our clients’ institutional reputation."
        </motion.blockquote>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-slate-200 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-slate-700" />
            <span>Uncompromising Conflict-Free Representation</span>
          </div>
          <span className="hidden sm:inline text-slate-300">&bull;</span>
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-slate-700" />
            <span>Direct Partner-Led Trial Teams</span>
          </div>
          <span className="hidden sm:inline text-slate-300">&bull;</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-700" />
            <span>Strict Attorney-Client Privilege Protocols</span>
          </div>
        </div>
      </div>
    </section>
  );
}
