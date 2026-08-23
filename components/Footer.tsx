'use client';

import React from 'react';
import {
  Scale,
  ShieldCheck,
  Building,
  Mail,
  Phone,
  ArrowUpRight,
  Lock,
  FileCheck
} from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenConsultationModal: () => void;
}

export default function Footer({
  onNavigateToSection,
  onOpenConsultationModal,
}: FooterProps) {
  return (
    <footer
      id="main-footer"
      className="bg-[#171717] text-white border-t border-neutral-800 pt-12 pb-8 px-6 sm:px-10 lg:px-12"
      aria-label="Firm Global Footer"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-neutral-800">
          {/* Column 1: About the Firm */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                <Scale className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif-title font-bold text-sm tracking-wider uppercase text-white">
                Vanguard &amp; Sterling
              </span>
            </div>
            <p className="font-sans-body text-xs text-slate-400 leading-relaxed">
              Vanguard &amp; Sterling Legal Counsel LLP is an AmLaw 100 corporate and trial legal practice. Founded in 1994, our advocates deliver strategic, high-stakes representation across the United States, United Kingdom, and the European Union.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              <span>Chambers Band 1 &bull; Tier 1 Trial</span>
            </div>
          </div>

          {/* Column 2: Core Practice Disciplines */}
          <div className="space-y-3">
            <h4 className="font-serif-title text-xs font-bold uppercase tracking-widest text-slate-300">
              Practice Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('practices')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>Mergers, Acquisitions &amp; Private Equity</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('practices')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>Commercial Litigation &amp; Delaware Chancery</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('practices')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>Patent Infringement &amp; Tech Trade Secrets</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('practices')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>White Collar Defense &amp; SEC Enforcement</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToSection('practices')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>Corporate Restructuring &amp; Chapter 11</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Global Offices & Emergency Hotline */}
          <div className="space-y-3">
            <h4 className="font-serif-title text-xs font-bold uppercase tracking-widest text-slate-300">
              Offices &amp; Direct Intake
            </h4>
            <div className="text-xs text-slate-400 space-y-2">
              <div>
                <strong className="text-white block font-medium">New York Headquarters</strong>
                <span>100 Financial District Plaza, 38th Floor</span>
              </div>
              <div>
                <strong className="text-white block font-medium">San Francisco Innovation Office</strong>
                <span>555 California Street, Suite 2900</span>
              </div>
              <div className="pt-1">
                <span className="text-[11px] text-slate-500 block uppercase">24/7 Counsel Hotline:</span>
                <a href="tel:+18005558373" className="font-serif-title text-sm text-white hover:text-slate-300 font-bold">
                  +1 (800) 555-8373
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Executive Briefs & Client Portal */}
          <div className="space-y-3">
            <h4 className="font-serif-title text-xs font-bold uppercase tracking-widest text-slate-300">
              Executive Briefings
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to quarterly Delaware Chancery Court analysis, antitrust updates, and landmark Supreme Court cert briefs.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="gc-counsel@firm.com"
                className="w-full px-2.5 py-1.5 bg-neutral-900 border border-neutral-700 text-xs rounded text-white focus:outline-none focus:border-slate-400"
              />
              <button
                type="button"
                onClick={onOpenConsultationModal}
                className="px-3 py-1.5 bg-white text-[#171717] font-semibold text-xs rounded hover:bg-slate-200 transition-colors whitespace-nowrap"
              >
                Join
              </button>
            </div>
            <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
              <Lock className="w-3 h-3" />
              <span>Strict zero-spam fiduciary privacy policy.</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Attorney Advertising Compliance */}
        <div className="pt-6 text-[11px] text-slate-500 space-y-2">
          <p className="leading-relaxed">
            <strong>ATTORNEY ADVERTISING NOTICE:</strong> Prior case results, jury verdicts, and transactional volumes described herein do not guarantee a similar outcome in future legal disputes. The information on this website is for informational purposes only and does not constitute formal legal advice. No attorney-client relationship is created until a written engagement letter is countersigned by a partner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-neutral-800 text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} Vanguard &amp; Sterling Legal Counsel LLP. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <button type="button" onClick={onOpenConsultationModal} className="hover:text-slate-300">Privacy Policy</button>
              <span>&bull;</span>
              <button type="button" onClick={onOpenConsultationModal} className="hover:text-slate-300">Terms of Engagement</button>
              <span>&bull;</span>
              <button type="button" onClick={onOpenConsultationModal} className="hover:text-slate-300">Bar Certifications</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
