'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  Scale,
  ArrowRight,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  Lock,
  Building2,
  Gavel
} from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultationModal: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

/**
 * Hero Section Component
 * Minimal text-only hero with bold, authoritative typography, strict monochrome contrast (Slate & Neutral on pure white),
 * without any background image clutter. Features credential badges, rapid practice jumping, and key metric summaries.
 */
export default function HeroSection({
  onOpenConsultationModal,
  onNavigateToSection,
}: HeroSectionProps) {
  const [quickSearch, setQuickSearch] = useState('');

  const quickPractices = [
    { name: 'Mergers & Acquisitions', target: 'practices' },
    { name: 'Commercial Trial', target: 'verdicts' },
    { name: 'IP & Patent Disputes', target: 'practices' },
    { name: 'Securities & White Collar', target: 'practices' },
  ];

  return (
    <section
      id="overview"
      className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 px-6 sm:px-10 lg:px-12 bg-white text-[#171717] border-b border-slate-200"
      aria-label="Firm Overview & Hero Statement"
    >
      {/* Top Credentials Eyebrow */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-slate-300 rounded-md text-xs font-semibold tracking-wider text-neutral-800 uppercase">
            <Scale className="w-3.5 h-3.5 text-slate-600" />
            <span>Chambers USA Band 1 &bull; AmLaw 100</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-medium">
            <ShieldCheck className="w-4 h-4 text-neutral-800" />
            <span>Fiduciary Rigor &bull; High-Stakes Trial &bull; Institutional Advisory</span>
          </div>
        </div>

        {/* Minimal Bold Typography Hero Headline - No Background Image */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#171717] leading-[1.08] mb-6">
          Decisive Legal Counsel for Complex Transactions &amp; High-Stakes Trial.
        </h1>

        {/* Executive Subheading */}
        <p className="font-sans-body text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-8 font-normal">
          Vanguard &amp; Sterling represents Fortune 500 enterprises, private equity sponsors, board directors, and visionary founders in critical cross-border acquisitions, intellectual property defense, and landmark courtroom disputes.
        </p>

        {/* Action Controls & Interactive Quick Inquiry */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
          <button
            type="button"
            id="hero-request-evaluation-btn"
            onClick={onOpenConsultationModal}
            className="px-7 py-3.5 bg-[#171717] hover:bg-neutral-800 text-white font-medium rounded-md text-sm sm:text-base tracking-wide transition-all shadow-md flex items-center justify-center gap-3 group active:scale-[0.99]"
          >
            <span>Request Confidential Evaluation</span>
            <ArrowRight className="w-4 h-4 text-slate-300 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            id="hero-explore-verdicts-btn"
            onClick={() => onNavigateToSection('verdicts')}
            className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#171717] font-medium rounded-md text-sm sm:text-base tracking-wide border border-slate-300 transition-all flex items-center justify-center gap-2 hover:border-neutral-700"
          >
            <Gavel className="w-4 h-4 text-slate-600" />
            <span>Review $1.8B+ Trial Verdicts</span>
          </button>
        </div>

        {/* Quick Practice Filter Pills */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <span className="text-slate-500 font-medium">Core Disciplines:</span>
          {quickPractices.map((practice) => (
            <button
              key={practice.name}
              type="button"
              onClick={() => onNavigateToSection(practice.target)}
              className="px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-neutral-800 border border-slate-200 transition-colors font-medium text-xs whitespace-nowrap"
            >
              {practice.name}
            </button>
          ))}
        </div>

        {/* Corporate Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 pt-8 border-t border-slate-200">
          <div className="p-4 rounded-md bg-slate-50 border border-slate-200">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#171717]">
              $1.85B+
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Recovered &amp; Structured
            </div>
          </div>

          <div className="p-4 rounded-md bg-slate-50 border border-slate-200">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#171717]">
              98.4%
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Trial &amp; Arbitration Success
            </div>
          </div>

          <div className="p-4 rounded-md bg-slate-50 border border-slate-200">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#171717]">
              32 Years
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Institutional Heritage (Est. 1994)
            </div>
          </div>

          <div className="p-4 rounded-md bg-slate-50 border border-slate-200">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#171717]">
              48 Hrs
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Emergency Injunction Response
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
