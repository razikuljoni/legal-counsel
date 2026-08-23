'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Building2,
  Lock,
  ArrowUpRight
} from 'lucide-react';

interface ContactSectionProps {
  prefilledMatter?: string;
}

export default function ContactSection({ prefilledMatter = '' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    corporateEmail: '',
    phoneNumber: '',
    companyName: '',
    matterType: prefilledMatter || 'commercial_litigation',
    jurisdiction: 'federal_ny',
    urgency: 'standard',
    summary: '',
    privilegeAgreed: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full legal name is required';
    }

    if (!formData.corporateEmail.trim()) {
      errs.corporateEmail = 'Corporate or business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.corporateEmail)) {
      errs.corporateEmail = 'Please provide a valid email format';
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Direct contact number is required for verification';
    }

    if (!formData.summary.trim() || formData.summary.length < 15) {
      errs.summary = 'Please provide at least 15 characters outlining the matter context';
    }

    if (!formData.privilegeAgreed) {
      errs.privilegeAgreed = 'You must acknowledge the preliminary intake terms';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate swift server-side case evaluation intake
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="consultation"
      className="py-12 px-6 sm:px-10 lg:px-12 bg-white text-[#171717] border-b border-slate-200"
      aria-label="Direct Consultation and Office Locations"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-slate-100 border border-slate-300 rounded-md text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-2">
            <Lock className="w-3 h-3 text-slate-600" />
            <span>Encrypted Attorney-Client Intake Portal</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#171717] tracking-tight">
            Schedule Confidential Case Evaluation
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-slate-600 max-w-2xl mt-1">
            Submit your legal matter directly to our executive intake committee. All submissions remain strictly protected under preliminary attorney-client privilege protocols.
          </p>
        </div>

        {/* Dual Column Layout: Form on Left, Offices & Google Maps on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Form with strict validation */}
          <div className="lg:col-span-7 bg-[#F8FAFC] p-6 sm:p-8 rounded-md border border-slate-300 shadow-xs">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-[#171717] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#171717]">
                  Evaluation Request Received
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your confidential inquiry has been routed to our Managing Partner desk under Matter Reference <strong className="font-mono text-neutral-900">#VS-{Math.floor(100000 + Math.random() * 900000)}</strong>. A senior partner will contact you directly within 2 business hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        corporateEmail: '',
                        phoneNumber: '',
                        companyName: '',
                        matterType: 'commercial_litigation',
                        jurisdiction: 'federal_ny',
                        urgency: 'standard',
                        summary: '',
                        privilegeAgreed: true,
                      });
                    }}
                    className="px-5 py-2 text-xs font-semibold bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-fullName"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Legal Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contact-fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Eleanor Vance, Esq."
                      className={`w-full px-3 py-2 text-xs sm:text-sm bg-white border rounded focus:outline-none focus:ring-1 focus:ring-[#171717] transition-all ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.fullName)}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Corporate Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formData.corporateEmail}
                      onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                      placeholder="counsel@enterprise.com"
                      className={`w-full px-3 py-2 text-xs sm:text-sm bg-white border rounded focus:outline-none focus:ring-1 focus:ring-[#171717] transition-all ${
                        errors.corporateEmail ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.corporateEmail)}
                    />
                    {errors.corporateEmail && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.corporateEmail}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="+1 (212) 555-0199"
                      className={`w-full px-3 py-2 text-xs sm:text-sm bg-white border rounded focus:outline-none focus:ring-1 focus:ring-[#171717] transition-all ${
                        errors.phoneNumber ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.phoneNumber)}
                    />
                    {errors.phoneNumber && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Company / Entity */}
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Organization / Entity
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Holdings LLC"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#171717]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Matter Type */}
                  <div>
                    <label
                      htmlFor="contact-matterType"
                      className="block text-[11px] font-semibold text-slate-700 uppercase mb-1"
                    >
                      Practice Area
                    </label>
                    <select
                      id="contact-matterType"
                      value={formData.matterType}
                      onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                      className="w-full p-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#171717]"
                    >
                      <option value="commercial_litigation">Commercial Litigation</option>
                      <option value="ma_private_equity">Mergers &amp; Acquisitions</option>
                      <option value="ip_patent">IP &amp; Patent Defense</option>
                      <option value="white_collar">White Collar &amp; SEC</option>
                      <option value="restructuring">Corporate Restructuring</option>
                      <option value="emergency_injunction">Emergency TRO / Injunction</option>
                    </select>
                  </div>

                  {/* Jurisdiction */}
                  <div>
                    <label
                      htmlFor="contact-jurisdiction"
                      className="block text-[11px] font-semibold text-slate-700 uppercase mb-1"
                    >
                      Primary Forum
                    </label>
                    <select
                      id="contact-jurisdiction"
                      value={formData.jurisdiction}
                      onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                      className="w-full p-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#171717]"
                    >
                      <option value="federal_ny">Federal / SDNY (New York)</option>
                      <option value="delaware_chancery">Delaware Chancery Court</option>
                      <option value="federal_ca">California / NDCA</option>
                      <option value="lcia_icc">International LCIA / ICC</option>
                      <option value="other">Other State / Federal Court</option>
                    </select>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label
                      htmlFor="contact-urgency"
                      className="block text-[11px] font-semibold text-slate-700 uppercase mb-1"
                    >
                      Time Sensitivity
                    </label>
                    <select
                      id="contact-urgency"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full p-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#171717]"
                    >
                      <option value="standard">Standard (Within 24h)</option>
                      <option value="urgent">Urgent (&lt; 6 Hours)</option>
                      <option value="emergency">Immediate Emergency (&lt; 1 Hour)</option>
                    </select>
                  </div>
                </div>

                {/* Brief Matter Summary */}
                <div>
                  <label
                    htmlFor="contact-summary"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
                  >
                    Matter Overview &amp; Key Dates *
                  </label>
                  <textarea
                    id="contact-summary"
                    rows={4}
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    placeholder="Please outline the nature of the dispute, opposing parties, pending statutory deadlines, or upcoming hearing dates..."
                    className={`w-full px-3 py-2 text-xs sm:text-sm bg-white border rounded focus:outline-none focus:ring-1 focus:ring-[#171717] transition-all ${
                      errors.summary ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                    aria-required="true"
                    aria-invalid={Boolean(errors.summary)}
                  />
                  {errors.summary && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.summary}
                    </p>
                  )}
                </div>

                {/* Privilege Terms Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.privilegeAgreed}
                      onChange={(e) => setFormData({ ...formData, privilegeAgreed: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-neutral-900 focus:ring-0"
                    />
                    <span>
                      I understand that submitting this intake evaluation does not unilaterally form a binding attorney-client relationship until conflict clearance and formal retainer execution.
                    </span>
                  </label>
                  {errors.privilegeAgreed && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.privilegeAgreed}
                    </p>
                  )}
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  id="contact-submit-evaluation-btn"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#171717] hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded transition-all shadow-md flex items-center justify-center gap-2 group disabled:opacity-70 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Encrypted Transmission in Progress...
                    </span>
                  ) : (
                    <>
                      <span>Transmit Intake Evaluation</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Locations, Contact Cards & Google Maps Embed */}
          <div className="lg:col-span-5 space-y-4">
            <div id="offices"></div>

            {/* Headquarters Card */}
            <div className="p-5 rounded-md bg-[#F8FAFC] border border-slate-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-700" />
                  Global Headquarters
                </span>
                <span className="text-[10px] font-mono text-neutral-900 bg-white px-2 py-0.5 rounded border border-slate-300 font-semibold">
                  New York &bull; Financial District
                </span>
              </div>
              <p className="font-heading text-lg font-bold text-[#171717]">
                100 Financial District Plaza, 38th Floor
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                New York, NY 10005 &bull; United States
              </p>
              <div className="mt-3 pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Direct Line:</span>
                  <a href="tel:+18005558373" className="font-semibold text-neutral-900 hover:text-slate-700">
                    +1 (800) 555-8373
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Direct Docket:</span>
                  <a href="mailto:counsel@vanguard-sterling.law" className="font-semibold text-neutral-900 hover:text-slate-700">
                    counsel@vanguard-sterling.law
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-md overflow-hidden border border-slate-300 shadow-xs h-64 bg-slate-100 relative">
              <iframe
                title="Vanguard & Sterling Headquarters Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.237243912166!2d-74.01168478459496!3d40.70731297933221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bce4567%3A0x6b447885b5463f89!2sWall%20St%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(90%) contrast(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-2 bg-[#171717]/90 backdrop-blur-xs text-white text-[10px] px-2 py-1 rounded">
                Wall Street Legal Tower &bull; NY HQ
              </div>
            </div>

            {/* Secondary Regional Office Tabs */}
            <div className="p-4 rounded-md bg-[#F8FAFC] border border-slate-300 grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="font-bold text-neutral-900 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-600" />
                  San Francisco
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  555 California St, Suite 2900
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                  Tech IP &amp; Venture Litigation
                </div>
              </div>

              <div>
                <div className="font-bold text-neutral-900 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-600" />
                  London (UK &amp; EU)
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  25 Bank Street, Canary Wharf
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                  Cross-Border M&amp;A &amp; LCIA Panel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
