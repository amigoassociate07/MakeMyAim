import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  ArrowLeft,
  ShieldAlert,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FounderPitchModal({ isOpen, onClose, initialData }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    sector: 'Tech & AI Apps',
    stage: 'Idea / Concept',
    supportType: 'Funding + Financial Support (Capital & Virtual CFO)',
    location: 'Bengaluru / Pan-India',
    founderNames: '',
    founderEmail: '',
    raiseAmount: '₹50 Lakhs',
    deckUrl: '',
    oneLiner: '',
    technicalMoat: '',
  });

  // Populate from simulator if passed
  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        stage: initialData.stage || prev.stage,
        sector: initialData.sector || prev.sector,
        raiseAmount: initialData.raiseAmount || prev.raiseAmount,
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#e6ca65', '#f5ecd3', '#ffffff']
      });
    }, 1400);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#050b1d] border border-gold-500/25 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(2,5,18,0.95),0_0_35px_rgba(212,175,55,0.15)] overflow-y-auto max-h-[92vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-gold-400 mb-1">
                <Zap className="w-3.5 h-3.5 text-gold-400" />
                MakeMyAim Open Investment Portal
              </div>
              <h3 className="text-2xl font-serif text-white">Pitch Your Startup or New Idea</h3>
              <p className="text-xs text-slate-400 mt-1">
                We invest in bold ideas, early startups, and growing businesses across India. Fast-track review in 7 business days.
              </p>
            </div>

            {/* Stepper Indicator */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
              {[
                { s: 1, label: '1. Venture Profile' },
                { s: 2, label: '2. Investment Stage' },
                { s: 3, label: '3. The Idea & Plan' }
              ].map((item) => (
                <div 
                  key={item.s} 
                  className={`flex items-center gap-2 text-xs font-mono ${
                    step === item.s 
                      ? 'text-gold-400 font-bold' 
                      : step > item.s 
                        ? 'text-emerald-400' 
                        : 'text-slate-500'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    step === item.s 
                      ? 'bg-gold-500 text-slate-950 font-bold' 
                      : step > item.s 
                        ? 'bg-emerald-500/20 text-emerald-300' 
                        : 'bg-slate-800 text-slate-400'
                  }`}>
                    {step > item.s ? '✓' : item.s}
                  </span>
                  <span className="hidden sm:inline">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Form Steps */}
            <form onSubmit={handleNextStep} className="space-y-4">
              
              {/* STEP 1: Basic Company Info */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Company / Project / Idea Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. FreshHarvest or SmartAI India"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Website or Link (Optional)</label>
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourbrand.in (or leave blank if just an idea)"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Founder / Team Lead Name *</label>
                      <input
                        type="text"
                        name="founderNames"
                        required
                        value={formData.founderNames}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Founder Email / WhatsApp Contact *</label>
                      <input
                        type="text"
                        name="founderEmail"
                        required
                        value={formData.founderEmail}
                        onChange={handleChange}
                        placeholder="founder@email.com or +91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Industry / Category *</label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-gold-400"
                    >
                      <option value="Tech & AI Apps">Tech, Mobile Apps, AI & Software</option>
                      <option value="Consumer & D2C">Consumer Brand, Food & D2C Retail</option>
                      <option value="AgriTech & Bharat">AgriTech, Dairy, Farming & Rural Markets</option>
                      <option value="Manufacturing & EV">Manufacturing, EV Mobility & Hardware</option>
                      <option value="Healthcare & Diagnostics">Healthcare Clinics, Pharma & MedTech</option>
                      <option value="Education & Services">Education, Career Services & Logistics</option>
                      <option value="Other New Business Idea">Other New Business Idea or Startup</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 2: Raise Details */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Current Business Stage *</label>
                      <select
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-gold-400"
                      >
                        <option value="Idea / Concept">💡 Idea / Concept (Need ₹25L - ₹1 Cr)</option>
                        <option value="Prototype / MVP">🛠️ Prototype / MVP Ready (Need ₹1 Cr - ₹4 Cr)</option>
                        <option value="Active Business / Revenue">🚀 Active Business / Revenue (Need ₹4 Cr - ₹15 Cr)</option>
                        <option value="Scaling & Expansion">📈 Scaling & Expansion (Need ₹15 Cr - ₹35 Cr+)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Investment Amount Needed *</label>
                      <input
                        type="text"
                        name="raiseAmount"
                        required
                        value={formData.raiseAmount}
                        onChange={handleChange}
                        placeholder="e.g. ₹50 Lakhs or ₹3 Crores"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Operating City / Location *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Bengaluru, Mumbai, Delhi-NCR, Pune, Ahmedabad, or any city/town in India"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">What Support Do You Need From MakeMyAim? *</label>
                    <select
                      name="supportType"
                      value={formData.supportType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-gold-400"
                    >
                      <option value="Funding + Financial Support (Capital & Virtual CFO)">💰 Both: Capital Funding + Complete Financial Management Support</option>
                      <option value="Direct Capital Investment Only">💵 Direct Equity Investment / Seed Funding Only</option>
                      <option value="Financial Support & Virtual CFO">📊 Financial Advisory, Cash Flow Strategy & Virtual CFO Support</option>
                      <option value="Working Capital & Bank Credit Lines">🏦 Working Capital Financing & Bank Credit Line Structuring</option>
                      <option value="Bookkeeping, Tax & GST Compliance">📑 Accounting, Bookkeeping, Tax & GST Regulatory Compliance</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">What is your business idea or model? *</label>
                    <textarea
                      name="oneLiner"
                      required
                      rows={2}
                      value={formData.oneLiner}
                      onChange={handleChange}
                      placeholder="e.g. Direct-to-consumer organic dairy brand, or an AI inventory app for small retail shops in tier-2 cities."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Technical Moat & Pitch Deck Link */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                      Pitch Deck or Document Link (Optional)
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="deckUrl"
                        value={formData.deckUrl}
                        onChange={handleChange}
                        placeholder="Google Drive, PDF, Notion, DocSend (leave blank if you don't have one)"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                      Why will this business succeed? What is your advantage? *
                    </label>
                    <textarea
                      name="technicalMoat"
                      required
                      rows={3}
                      value={formData.technicalMoat}
                      onChange={handleChange}
                      placeholder="Explain what makes your product/service special, why customers love it, how you plan to make money, or why your team can execute it..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>
                      100% Confidential: Your idea and pitch details are strictly protected under MakeMyAim's founder confidentiality policy.
                    </span>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Application...</span>
                    </>
                  ) : step < 3 ? (
                    <>
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit For Investment Review</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Submission Confirmation Screen */
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-3xl bg-gold-500/10 text-gold-400 border border-gold-400/30 flex items-center justify-center mx-auto shadow-gold-glow">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-gold-400 tracking-wider">
                Application Received • Pitch ID: #MMA-2026-{Math.floor(1000 + Math.random() * 9000)}
              </span>
              <h3 className="text-2xl font-serif text-white">
                Pitch Submitted to Investment Committee
              </h3>
            </div>

            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you for sharing your business vision for <strong className="text-white">{formData.companyName || 'your business'}</strong>. 
              At MakeMyAim, we believe every game-changing business started as a bold idea. Our partners review every application personally.
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Stage & Capital Target:</span>
                <span className="font-semibold text-white">{formData.stage} ({formData.raiseAmount})</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Support Requested:</span>
                <span className="font-semibold text-gold-300">{formData.supportType}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Sector / Category:</span>
                <span className="font-semibold text-gold-300 capitalize">{formData.sector}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Location:</span>
                <span className="font-semibold text-white">{formData.location || 'India'}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Partner Evaluation:</span>
                <span className="font-semibold text-emerald-400">Direct Partner Review Within 7 Days</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                Back to MakeMyAim Capital
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
