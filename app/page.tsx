'use client';

import React, { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import SidebarNav from '@/components/SidebarNav';
import HeroSection from '@/components/HeroSection';
import MasonryContentGrid from '@/components/MasonryContentGrid';
import ParallaxQuoteSection from '@/components/ParallaxQuoteSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import BackToTop from '@/components/BackToTop';

/**
 * Vanguard & Sterling Legal Counsel
 * Master Single-Page (One-page scrolling) Law / Legal Services Application
 * Features:
 * - Left sidebar navigation layout
 * - Minimal text-only bold typography hero on white background
 * - Masonry / Pinterest-style grid content layout
 * - Interactive Retainer & Fee Estimator
 * - Parallax scrolling effect
 * - Responsive mobile menu drawer
 * - Contact evaluation form with validation & Google Maps embed
 * - Multi-column corporate footer
 * - Preloader & Custom cursor
 */
export default function LegalLandingPage() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState<boolean>(false);
  const [modalPreselectedMatter, setModalPreselectedMatter] = useState<string>('');

  // Scroll Spy to update active section in sidebar
  useEffect(() => {
    const sections = [
      'overview',
      'practices',
      'verdicts',
      'attorneys',
      'fee-estimator',
      'testimonials',
      'insights',
      'offices',
      'consultation',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultationModal = (preselectedMatter?: string) => {
    setModalPreselectedMatter(preselectedMatter || '');
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#171717] flex flex-col selection:bg-[#171717] selection:text-white">
      {/* 1. Loading Preloader Animation */}
      <Preloader />

      {/* 2. Interactive Custom Cursor Effect */}
      <CustomCursor />

      {/* 3. Left Sidebar Navigation (Desktop fixed left / Mobile top header + drawer) */}
      <SidebarNav
        activeSection={activeSection}
        onNavigate={handleNavigateToSection}
        onOpenConsultationModal={() => handleOpenConsultationModal()}
      />

      {/* Main Content Area (Offset by sidebar width on large screens) */}
      <main className="flex-1 lg:pl-72 xl:pl-80 flex flex-col w-full min-h-screen">
        {/* Hero Section: Minimal text-only bold typography, no background image */}
        <HeroSection
          onOpenConsultationModal={() => handleOpenConsultationModal('Executive Case Evaluation')}
          onNavigateToSection={handleNavigateToSection}
        />

        {/* Masonry / Pinterest-Style Content Grid (Practices, Verdicts, Fee Estimator, Partners, Insights) */}
        <MasonryContentGrid
          onOpenConsultationModal={handleOpenConsultationModal}
          onNavigateToSection={handleNavigateToSection}
        />

        {/* Parallax Quote / Trial Credo Section */}
        <ParallaxQuoteSection />

        {/* Direct Case Intake Contact Form & Google Maps Section */}
        <ContactSection prefilledMatter={modalPreselectedMatter} />

        {/* Multi-Column Corporate Footer */}
        <Footer
          onNavigateToSection={handleNavigateToSection}
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />
      </main>

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Global Consultation / Case Intake Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        initialMatter={modalPreselectedMatter}
      />
    </div>
  );
}
