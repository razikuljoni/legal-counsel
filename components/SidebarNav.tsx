'use client';

import React, { useState, useEffect } from 'react';
import {
  Scale,
  Briefcase,
  Trophy,
  Users,
  Calculator,
  MessageSquareQuote,
  BookOpen,
  MapPin,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  Menu,
  X,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Firm Overview', icon: Scale },
  { id: 'practices', label: 'Practice Disciplines', icon: Briefcase, badge: '8 Areas' },
  { id: 'verdicts', label: 'Landmark Verdicts', icon: Trophy, badge: '$1.8B+' },
  { id: 'attorneys', label: 'Attorneys & Partners', icon: Users },
  { id: 'fee-estimator', label: 'Retainer & Fee Estimator', icon: Calculator, badge: 'Interactive' },
  { id: 'testimonials', label: 'Client Commendations', icon: MessageSquareQuote },
  { id: 'insights', label: 'Briefs & Precedents', icon: BookOpen },
  { id: 'offices', label: 'Offices & Directions', icon: MapPin },
  { id: 'consultation', label: 'Case Evaluation', icon: Mail },
];

interface SidebarNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenConsultationModal: () => void;
}

/**
 * SidebarNav Component
 * Left sidebar navigation layout for desktop with responsive hamburger drawer on mobile/tablet.
 * Styled in Corporate Slate & Neutral monochrome aesthetic with smooth anchor scrolling.
 */
export default function SidebarNav({
  activeSection,
  onNavigate,
  onOpenConsultationModal,
}: SidebarNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Sticky Top Header Bar */}
      <header
        id="mobile-header-bar"
        className="lg:hidden sticky top-0 z-40 flex items-center justify-between px-5 py-3.5 bg-[#171717] text-white shadow-lg border-b border-neutral-800"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center">
            <Scale className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-serif-title font-bold text-xs tracking-wider uppercase block text-white">
              Vanguard &amp; Sterling
            </span>
            <span className="text-[9px] tracking-widest uppercase font-sans-body text-slate-400 block">
              Legal Counsel &bull; Est. 1994
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:+18005558373"
            id="mobile-call-btn"
            className="px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white transition-colors flex items-center gap-1.5 text-xs border border-neutral-700"
            aria-label="Call Emergency Legal Line"
          >
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline font-medium">24/7 Desk</span>
          </a>

          <button
            type="button"
            id="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white transition-colors border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-expanded={mobileMenuOpen}
            aria-controls="main-sidebar-nav"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar Navigation (Fixed on Desktop, Slide Drawer on Mobile) */}
      <aside
        id="main-sidebar-nav"
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 sm:w-80 bg-[#171717] text-white flex flex-col justify-between border-r border-neutral-800 shadow-2xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Sidebar Primary Navigation"
      >
        {/* Top Firm Branding */}
        <div className="p-6 border-b border-neutral-800 bg-[#121212]">
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center shadow-inner">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded bg-neutral-900 text-slate-400 border border-neutral-800">
              EST. 1994
            </span>
          </div>

          <h2 className="font-serif-title text-lg font-bold tracking-[0.16em] text-white uppercase leading-snug">
            Vanguard &amp; Sterling
          </h2>
          <p className="font-sans-body text-xs tracking-wider text-slate-400 uppercase font-medium mt-0.5">
            Corporate &bull; Trial &bull; M&amp;A Counsel
          </p>

          <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              AmLaw 100 &bull; Tier 1
            </span>
            <span className="text-slate-500 font-mono text-[10px]">NY &bull; SF &bull; LON</span>
          </div>
        </div>

        {/* Navigation Section Links (Scrollable if viewport height is compact) */}
        <nav
          className="flex-1 overflow-y-auto py-3 px-3 space-y-1 scrollbar-thin scrollbar-thumb-neutral-700"
          aria-label="Main Sections"
        >
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                type="button"
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-md text-xs sm:text-sm font-medium transition-all text-left group ${
                  isActive
                    ? 'bg-neutral-800 text-white shadow-sm border-l-4 border-slate-400 pl-2.5 font-semibold'
                    : 'text-slate-300 hover:bg-neutral-800/60 hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge ? (
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded transition-colors ${
                      isActive
                        ? 'bg-neutral-900 text-white border border-neutral-700'
                        : 'bg-neutral-900/80 text-slate-400 group-hover:text-white'
                    }`}
                  >
                    {item.badge}
                  </span>
                ) : (
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform opacity-30 group-hover:opacity-90 ${
                      isActive ? 'translate-x-0.5 opacity-100 text-white' : ''
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer Action & Emergency Hotline */}
        <div className="p-4 border-t border-neutral-800 bg-[#121212] space-y-3">
          {/* Quick Consultation CTA */}
          <button
            type="button"
            id="sidebar-book-consultation-btn"
            onClick={() => {
              onOpenConsultationModal();
              setMobileMenuOpen(false);
            }}
            className="w-full py-2.5 px-4 bg-white hover:bg-slate-200 text-[#171717] font-semibold rounded-md text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group active:scale-[0.98]"
          >
            <span>Request Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Hotline & Response Window */}
          <div className="bg-neutral-900/90 p-3 rounded-md border border-neutral-800 text-xs">
            <div className="flex items-center justify-between text-slate-400 mb-1 font-medium text-[11px]">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                24/7 Counsel Hotline
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-slate-400">Live</span>
              </span>
            </div>
            <a
              href="tel:+18005558373"
              className="font-serif-title text-white font-bold text-sm tracking-wide hover:text-slate-300 transition-colors block"
            >
              +1 (800) 555-8373
            </a>
            <div className="mt-1.5 flex items-center gap-1 text-[10px] text-slate-500">
              <Clock className="w-3 h-3 text-slate-500" />
              <span>Attorney Callback within 15 mins</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

