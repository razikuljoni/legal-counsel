'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Trophy,
  Users,
  Calculator,
  BookOpen,
  MessageSquareQuote,
  Scale,
  Shield,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileText,
  Search,
  Filter,
  DollarSign,
  Clock,
  Sparkles,
  PhoneCall,
  UserCheck,
  Building,
  Gavel
} from 'lucide-react';

interface MasonryContentGridProps {
  onOpenConsultationModal: (preselectedMatter?: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function MasonryContentGrid({
  onOpenConsultationModal,
  onNavigateToSection,
}: MasonryContentGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedVerdicts, setExpandedVerdicts] = useState<Record<string, boolean>>({});

  // Retainer & Fee Estimator interactive state
  const [estimatorDiscipline, setEstimatorDiscipline] = useState<string>('litigation');
  const [estimatorStage, setEstimatorStage] = useState<string>('trial');
  const [estimatorComplexity, setEstimatorComplexity] = useState<string>('high');
  const [estimatorExpedited, setEstimatorExpedited] = useState<boolean>(false);

  // Toggle verdict details
  const toggleVerdict = (id: string) => {
    setExpandedVerdicts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Fee calculation formula
  const calculatedFee = useMemo(() => {
    let baseRate = 8500;
    if (estimatorDiscipline === 'ma') baseRate = 12500;
    if (estimatorDiscipline === 'litigation') baseRate = 15000;
    if (estimatorDiscipline === 'ip') baseRate = 11000;
    if (estimatorDiscipline === 'whitecollar') baseRate = 16500;
    if (estimatorDiscipline === 'restructuring') baseRate = 14000;

    let stageMultiplier = 1.0;
    if (estimatorStage === 'investigation') stageMultiplier = 0.7;
    if (estimatorStage === 'discovery') stageMultiplier = 1.2;
    if (estimatorStage === 'trial') stageMultiplier = 1.8;
    if (estimatorStage === 'closing') stageMultiplier = 1.4;

    let complexityMultiplier = 1.0;
    if (estimatorComplexity === 'moderate') complexityMultiplier = 1.0;
    if (estimatorComplexity === 'high') complexityMultiplier = 1.45;
    if (estimatorComplexity === 'cross-border') complexityMultiplier = 1.95;

    const expeditedAddon = estimatorExpedited ? 5000 : 0;

    const totalRetainer = Math.round(baseRate * stageMultiplier * complexityMultiplier + expeditedAddon);
    const hourlyBlended = Math.round(totalRetainer / 28);

    return {
      retainer: totalRetainer.toLocaleString(),
      blendedHourly: hourlyBlended.toLocaleString(),
      estimatedWeeks: estimatorStage === 'trial' ? '6 - 18 Weeks' : '3 - 8 Weeks',
    };
  }, [estimatorDiscipline, estimatorStage, estimatorComplexity, estimatorExpedited]);

  return (
    <section
      id="practices"
      className="py-10 px-6 sm:px-10 lg:px-12 bg-[#F8FAFC] text-[#171717] border-b border-slate-200"
      aria-label="Masonry Content Directory"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-slate-300 rounded-md text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-2">
              <Scale className="w-3 h-3 text-slate-600" />
              <span>Full Practice Portfolio &bull; Case Ledger</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#171717] tracking-tight">
              Institutional Capabilities &amp; Case Records
            </h2>
            <p className="font-sans-body text-sm sm:text-base text-slate-600 max-w-2xl mt-1">
              Explore our core disciplines, landmark multimillion-dollar trial recoveries, attorney credentials, and interactive legal retainer models.
            </p>
          </div>

          {/* Search Input Filter */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search practices, verdicts, attorneys..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#171717] focus:border-[#171717] transition-all"
              aria-label="Search masonry content"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none text-xs sm:text-sm font-medium border-b border-slate-200">
          {[
            { id: 'all', label: 'All Items' },
            { id: 'practices', label: 'Practice Disciplines' },
            { id: 'verdicts', label: 'Landmark Verdicts' },
            { id: 'attorneys', label: 'Attorneys & Partners' },
            { id: 'estimator', label: 'Retainer Estimator' },
            { id: 'testimonials', label: 'Endorsements' },
            { id: 'insights', label: 'Legal Briefs' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#171717] text-white font-semibold shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pinterest / Masonry Style Multi-Column Grid */}
        <div className="masonry-grid">

          {/* ITEM 1: Practice Area - Corporate M&A */}
          {(activeCategory === 'all' || activeCategory === 'practices') && (
            <motion.div
              id="practice-ma"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="masonry-item p-6 rounded-md bg-white border border-slate-200 shadow-xs hover:border-slate-400 transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Discipline 01
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                  Global M&amp;A
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#171717] mb-2">
                Mergers, Acquisitions &amp; Private Equity
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Guiding institutional investors, sovereign wealth funds, and strategic buyers through cross-border buyouts, carve-outs, antitrust filings, and high-velocity joint ventures.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-5 border-t border-slate-100 pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span>Cross-Border Joint Ventures &amp; Spinoffs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span>HSR Act &amp; FTC Antitrust Clearance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span>Post-Acquisition Integration &amp; Indemnity</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => onOpenConsultationModal('Mergers & Acquisitions')}
                className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-neutral-900 text-xs font-semibold rounded border border-slate-300 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Consult M&amp;A Partner</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

          {/* ITEM 2: Landmark Verdict - $450M Tech IP */}
          <div id="verdicts"></div>
          {(activeCategory === 'all' || activeCategory === 'verdicts') && (
            <motion.div
              id="verdict-tech-ip"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="masonry-item p-6 rounded-md bg-[#171717] text-white border border-neutral-800 shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5 text-slate-300" />
                  Landmark Jury Verdict
                </span>
                <span className="text-xs font-mono font-bold text-white bg-neutral-800 px-2 py-0.5 rounded border border-neutral-700">
                  U.S. District Court
                </span>
              </div>
              <div className="font-heading text-3xl font-bold text-white mb-1">
                $450,000,000
              </div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                Semiconductor Patent Infringement &amp; Willful Piracy
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Secured unanimous federal jury verdict affirming 6 disputed micro-architecture patents against multinational electronics conglomerate, including maximum enhanced damages.
              </p>

              {expandedVerdicts['verdict-1'] && (
                <div className="text-xs bg-neutral-900 p-3 rounded border border-neutral-800 space-y-1.5 mb-4 text-slate-300">
                  <div><strong>Lead Trial Counsel:</strong> Marcus Sterling, Senior Partner</div>
                  <div><strong>Jurisdiction:</strong> Eastern District of Texas (Marshall)</div>
                  <div><strong>Duration:</strong> 28-day trial; 4-hour jury deliberation</div>
                  <div><strong>Post-Trial:</strong> Permanent injunction issued on worldwide distribution.</div>
                </div>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => toggleVerdict('verdict-1')}
                  className="text-xs text-slate-300 hover:text-white font-medium flex items-center gap-1 transition-colors"
                >
                  <span>{expandedVerdicts['verdict-1'] ? 'Hide Case Memo' : 'Read Full Case Record'}</span>
                  {expandedVerdicts['verdict-1'] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                <span className="text-[11px] text-slate-400">Verdicts Ledger #804</span>
              </div>
            </motion.div>
          )}

          {/* ITEM 3: Retainer & Fee Estimator (Interactive Card) */}
          <div id="fee-estimator"></div>
          {(activeCategory === 'all' || activeCategory === 'estimator') && (
            <motion.div
              id="interactive-fee-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="masonry-item p-6 rounded-md bg-white border-2 border-slate-300 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 uppercase tracking-wider">
                  <Calculator className="w-3.5 h-3.5 text-slate-600" />
                  Interactive Fee Tool
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                  Live Calculator
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-[#171717] mb-1">
                Retainer &amp; Litigation Cost Model
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Calculate estimated institutional retainers and staffing burn rates based on your active dispute stage.
              </p>

              {/* Form Controls */}
              <div className="space-y-3 mb-5">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                    Matter Discipline
                  </label>
                  <select
                    value={estimatorDiscipline}
                    onChange={(e) => setEstimatorDiscipline(e.target.value)}
                    className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded focus:ring-1 focus:ring-slate-700 focus:outline-none"
                  >
                    <option value="litigation">Commercial Trial &amp; Arbitration</option>
                    <option value="ma">Mergers &amp; Acquisitions</option>
                    <option value="ip">Intellectual Property &amp; Patent</option>
                    <option value="whitecollar">White Collar &amp; SEC Regulatory</option>
                    <option value="restructuring">Corporate Restructuring &amp; Ch. 11</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                      Stage
                    </label>
                    <select
                      value={estimatorStage}
                      onChange={(e) => setEstimatorStage(e.target.value)}
                      className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded focus:ring-1 focus:ring-slate-700 focus:outline-none"
                    >
                      <option value="investigation">Pre-Suit / Audit</option>
                      <option value="discovery">Pleadings &amp; Discovery</option>
                      <option value="trial">Active Trial / Injunction</option>
                      <option value="closing">Settlement / Closing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                      Complexity
                    </label>
                    <select
                      value={estimatorComplexity}
                      onChange={(e) => setEstimatorComplexity(e.target.value)}
                      className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded focus:ring-1 focus:ring-slate-700 focus:outline-none"
                    >
                      <option value="moderate">Domestic / Single Party</option>
                      <option value="high">Multi-District (MDL)</option>
                      <option value="cross-border">Cross-Border / Multi-Gov</option>
                    </select>
                  </div>
                </div>

                <label className="flex items-center gap-2 pt-1 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={estimatorExpedited}
                    onChange={(e) => setEstimatorExpedited(e.target.checked)}
                    className="rounded border-slate-300 text-neutral-900 focus:ring-0"
                  />
                  <span>Expedited Injunction / TRO Notice (&lt; 72 Hours)</span>
                </label>
              </div>

              {/* Dynamic Calculation Result Box */}
              <div className="p-4 rounded bg-slate-100 border border-slate-300 text-center mb-4">
                <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                  Estimated Retainer Deposit
                </div>
                <div className="font-heading text-2xl sm:text-3xl font-bold text-[#171717] my-1">
                  ${calculatedFee.retainer}
                </div>
                <div className="flex justify-between text-[11px] text-slate-600 border-t border-slate-300 pt-2 mt-2">
                  <span>Blended Hourly: ~${calculatedFee.blendedHourly}/hr</span>
                  <span>Timeline: {calculatedFee.estimatedWeeks}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenConsultationModal(`Retainer Inquiry: ${estimatorDiscipline.toUpperCase()} ($${calculatedFee.retainer})`)}
                className="w-full py-2.5 bg-[#171717] hover:bg-neutral-800 text-white font-medium text-xs rounded transition-colors flex items-center justify-center gap-2"
              >
                <span>Lock In Fee Scope with Partner</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

          {/* ITEM 4: Practice Area - Commercial Litigation */}
          {(activeCategory === 'all' || activeCategory === 'practices') && (
            <motion.div
              id="practice-litigation"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="masonry-item p-6 rounded-md bg-white border border-slate-200 shadow-xs hover:border-slate-400 transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Discipline 02
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                  Trial &amp; Appellate
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#171717] mb-2">
                High-Stakes Commercial Litigation &amp; Arbitration
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Formidable courtroom trial advocates for breach of contract, shareholder disputes, trade secret theft, and emergency preliminary injunctions in Delaware Chancery and Federal Courts.
              </p>
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-xs space-y-1 text-slate-700 mb-4">
                <div className="font-semibold text-neutral-900">Featured Court Accreditations:</div>
                <div>&bull; Delaware Court of Chancery Practice Group</div>
                <div>&bull; LCIA &amp; ICC International Arbitration Panels</div>
              </div>
              <button
                type="button"
                onClick={() => onOpenConsultationModal('Commercial Litigation')}
                className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-neutral-900 text-xs font-semibold rounded border border-slate-300 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Engage Trial Counsel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

          {/* ITEM 5: Senior Partner Profile - Marcus Sterling */}
          <div id="attorneys"></div>
          {(activeCategory === 'all' || activeCategory === 'attorneys') && (
            <motion.div
              id="attorney-marcus-sterling"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="masonry-item p-6 rounded-md bg-white border border-slate-200 shadow-xs hover:border-slate-400 transition-all hover:shadow-md"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="https://picsum.photos/seed/attorney_marcus_sterling/200/200"
                  alt="Marcus Sterling, Senior Managing Partner"
                  className="w-16 h-16 rounded-md object-cover border border-slate-300 shrink-0"
                />
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#171717]">
                    Marcus Sterling
                  </h3>
                  <div className="text-xs font-semibold text-slate-600">
                    Senior Managing Partner &bull; Chair of Trial Practice
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                    Harvard Law J.D. &bull; NY &amp; DC Bar Admissions
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Over 28 years of lead trial experience before federal district judges and appellate benches. Named "Litigator of the Year" by American Lawyer for three consecutive cycles.
              </p>
              <div className="border-t border-slate-100 pt-3 mb-4 space-y-1 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Career Verdicts:</span>
                  <span className="font-semibold text-neutral-900">$920M+ Recovered</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Specialty:</span>
                  <span className="font-semibold text-neutral-900">Complex Commercial &amp; IP</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onOpenConsultationModal('Consultation with Marcus Sterling')}
                className="w-full py-2 bg-[#171717] hover:bg-neutral-800 text-white text-xs font-medium rounded transition-colors flex items-center justify-center gap-2"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Request Direct Counsel</span>
              </button>
            </motion.div>
          )}

          {/* ITEM 6: Landmark Verdict - $820M Cross-Border Merger */}
          {(activeCategory === 'all' || activeCategory === 'verdicts') && (
            <motion.div
              id="verdict-crossborder-merger"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="masonry-item p-6 rounded-md bg-[#171717] text-white border border-neutral-800 shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-slate-300" />
                  M&amp;A Transaction
                </span>
                <span className="text-xs font-mono font-bold text-white bg-neutral-800 px-2 py-0.5 rounded border border-neutral-700">
                  Closed Transaction
                </span>
              </div>
              <div className="font-heading text-3xl font-bold text-white mb-1">
                $820,000,000
              </div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                Cross-Border Clean Energy Tech Consortium Acquisition
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Structured multi-tier sovereign wealth fund acquisition spanning 14 regulatory jurisdictions, navigating CFIUS national security review and European Commission clearances.
              </p>

              {expandedVerdicts['verdict-2'] && (
                <div className="text-xs bg-neutral-900 p-3 rounded border border-neutral-800 space-y-1.5 mb-4 text-slate-300">
                  <div><strong>Lead Transaction Partner:</strong> Elena Vance, M&amp;A Chair</div>
                  <div><strong>Regulatory Approvals:</strong> CFIUS, DG COMP, UK CMA</div>
                  <div><strong>Structure:</strong> Triangular reverse merger with earnout escrow</div>
                </div>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => toggleVerdict('verdict-2')}
                  className="text-xs text-slate-300 hover:text-white font-medium flex items-center gap-1 transition-colors"
                >
                  <span>{expandedVerdicts['verdict-2'] ? 'Hide Memo' : 'Read Transaction Record'}</span>
                  {expandedVerdicts['verdict-2'] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                <span className="text-[11px] text-slate-400">Verdicts Ledger #792</span>
              </div>
            </motion.div>
          )}

          {/* ITEM 7: Senior Partner Profile - Elena Vance */}
          {(activeCategory === 'all' || activeCategory === 'attorneys') && (
            <motion.div
              id="attorney-elena-vance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="masonry-item p-6 rounded-md bg-white border border-slate-200 shadow-xs hover:border-slate-400 transition-all hover:shadow-md"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="https://picsum.photos/seed/attorney_elena_vance/200/200"
                  alt="Elena Vance, Corporate Practice Chair"
                  className="w-16 h-16 rounded-md object-cover border border-slate-300 shrink-0"
                />
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#171717]">
                    Elena Vance
                  </h3>
                  <div className="text-xs font-semibold text-slate-600">
                    Partner &bull; Chair of Corporate &amp; M&amp;A
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                    Yale Law J.D. &bull; California &amp; London Roll of Solicitors
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Specializing in tech carve-outs, institutional capital formation, and cross-border buyout structuring. Former senior advisor to SEC Office of Mergers.
              </p>
              <div className="border-t border-slate-100 pt-3 mb-4 space-y-1 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Transaction Volume:</span>
                  <span className="font-semibold text-neutral-900">$12.4B+ Advised</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Chambers Ranking:</span>
                  <span className="font-semibold text-neutral-900">Band 1 Corporate</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onOpenConsultationModal('Consultation with Elena Vance')}
                className="w-full py-2 bg-[#171717] hover:bg-neutral-800 text-white text-xs font-medium rounded transition-colors flex items-center justify-center gap-2"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Request Direct Counsel</span>
              </button>
            </motion.div>
          )}

          {/* ITEM 8: Client Endorsement / Judicial Quote */}
          <div id="testimonials"></div>
          {(activeCategory === 'all' || activeCategory === 'testimonials') && (
            <motion.div
              id="testimonial-quote-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="masonry-item p-6 rounded-md bg-slate-100 border border-slate-300 shadow-xs"
            >
              <MessageSquareQuote className="w-8 h-8 text-slate-500 mb-3" />
              <blockquote className="font-heading text-base sm:text-lg text-neutral-900 italic leading-snug mb-4">
                "In our 40-year corporate history, we have never witnessed a trial team dismantle an opposing patent claim with such surgical, unrelenting precision. Vanguard &amp; Sterling saved our flagship enterprise product line."
              </blockquote>
              <div className="border-t border-slate-300 pt-3 flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-neutral-900">
                    Arthur Pendelton
                  </div>
                  <div className="text-[11px] text-slate-600">
                    General Counsel &bull; NexaCore Semiconductors (NASDAQ: NXCR)
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-500">Verified Client</span>
              </div>
            </motion.div>
          )}

          {/* ITEM 9: Practice Area - White Collar Defense & SEC Regulatory */}
          {(activeCategory === 'all' || activeCategory === 'practices') && (
            <motion.div
              id="practice-whitecollar"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="masonry-item p-6 rounded-md bg-white border border-slate-200 shadow-xs hover:border-slate-400 transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Discipline 03
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                  Government Investigations
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#171717] mb-2">
                White Collar Criminal Defense &amp; SEC Enforcement
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Aggressive defense in DOJ grand jury subpoenas, FCPA enforcement, insider trading investigations, and internal corporate special committee audits.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-5 border-t border-slate-100 pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span>DOJ, SEC, CFTC Parallel Investigations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span>Whistleblower &amp; Audit Committee Inquiries</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => onOpenConsultationModal('White Collar Defense')}
                className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-neutral-900 text-xs font-semibold rounded border border-slate-300 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Confidential White Collar Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

          {/* ITEM 10: Legal Brief & Whitepaper */}
          <div id="insights"></div>
          {(activeCategory === 'all' || activeCategory === 'insights') && (
            <motion.div
              id="insight-ai-governance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="masonry-item p-6 rounded-md bg-white border border-slate-200 shadow-xs hover:border-slate-400 transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                  Q3 Legal Advisory Brief
                </span>
                <span className="text-[10px] bg-neutral-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                  12 Min Read
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#171717] mb-2">
                Delaware Chancery Court Precedent: Director Liability in Autonomous AI Systems &amp; Risk Oversight
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                An executive analysis of recent *Caremark* duty-of-oversight claims addressing board governance, algorithmic hallucination liability, and IP training datasets.
              </p>
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-xs text-slate-700 mb-4">
                <strong>Key Takeaway:</strong> Board committees must maintain verified audit trails of proprietary data ingestion pipelines to shield directors against derivative litigation.
              </div>
              <button
                type="button"
                onClick={() => onOpenConsultationModal('Request AI Legal Advisory Brief')}
                className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-neutral-900 text-xs font-semibold rounded border border-slate-300 transition-colors flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-slate-600" />
                <span>Request Comprehensive Whitepaper (PDF)</span>
              </button>
            </motion.div>
          )}

          {/* ITEM 11: Practice Area - Restructuring & Chapter 11 */}
          {(activeCategory === 'all' || activeCategory === 'practices') && (
            <motion.div
              id="practice-restructuring"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="masonry-item p-6 rounded-md bg-white border border-slate-200 shadow-xs hover:border-slate-400 transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Discipline 04
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                  Insolvency &amp; Workouts
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#171717] mb-2">
                Corporate Restructuring &amp; Special Situations
              </h3>
              <p className="font-sans-body text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Advising debtors, ad-hoc creditor committees, and distressed asset investors in pre-packaged Chapter 11 plans, DIP financing, and 363 asset sales.
              </p>
              <button
                type="button"
                onClick={() => onOpenConsultationModal('Restructuring & Insolvency')}
                className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-neutral-900 text-xs font-semibold rounded border border-slate-300 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Consult Restructuring Group</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
