'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Scale,
  ShieldCheck,
  Lock,
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Clock
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMatter?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  initialMatter = '',
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    corporateEmail: '',
    phone: '',
    matterTitle: initialMatter || '',
    forum: 'federal_sdny',
    urgency: 'high',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (initialMatter) {
      setFormData((prev) => ({ ...prev, matterTitle: initialMatter }));
    }
  }, [initialMatter]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Name is required';
    if (!formData.corporateEmail.trim()) errs.corporateEmail = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.corporateEmail)) {
      errs.corporateEmail = 'Valid email is required';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs"
          aria-hidden="true"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-xl bg-white border border-slate-300 rounded-md shadow-2xl overflow-hidden text-[#171717]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultation-modal-title"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#171717] text-white flex items-center justify-between border-b border-neutral-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                <Scale className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 id="consultation-modal-title" className="font-serif-title text-sm font-bold tracking-wider uppercase">
                  Confidential Case Intake
                </h3>
                <span className="text-[10px] text-slate-400 font-sans-body">
                  Direct Evaluation &bull; Preliminary Privilege Protected
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6">
            {isDone ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-[#171717] text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                </div>
                <h4 className="font-heading text-xl font-bold text-[#171717]">
                  Intake File Dispatched
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Your evaluation has been assigned to our senior partner docket. You will receive a direct call or encrypted response within 2 hours.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2 bg-[#171717] text-white text-xs font-semibold rounded hover:bg-neutral-800 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. David Vance"
                      className={`w-full text-xs p-2.5 bg-slate-50 border rounded focus:outline-none focus:ring-1 focus:ring-[#171717] ${
                        errors.fullName ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.fullName && <p className="text-[10px] text-red-600 mt-0.5">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      value={formData.corporateEmail}
                      onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                      placeholder="counsel@corporation.com"
                      className={`w-full text-xs p-2.5 bg-slate-50 border rounded focus:outline-none focus:ring-1 focus:ring-[#171717] ${
                        errors.corporateEmail ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.corporateEmail && <p className="text-[10px] text-red-600 mt-0.5">{errors.corporateEmail}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                      Direct Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (212) 555-0199"
                      className={`w-full text-xs p-2.5 bg-slate-50 border rounded focus:outline-none focus:ring-1 focus:ring-[#171717] ${
                        errors.phone ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-600 mt-0.5">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                      Matter Discipline / Subject
                    </label>
                    <input
                      type="text"
                      value={formData.matterTitle}
                      onChange={(e) => setFormData({ ...formData, matterTitle: e.target.value })}
                      placeholder="e.g. IP Patent Injunction Defense"
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#171717]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                    Key Matter Synopsis
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly state known parties, estimated dispute value, or urgent statutory deadlines..."
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#171717]"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
                    256-Bit Encrypted Transmission
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-600" />
                    &lt; 2 Hour Partner Review
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#171717] hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Validating Security Channel...</span>
                    ) : (
                      <>
                        <span>Submit Confidential Case Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
