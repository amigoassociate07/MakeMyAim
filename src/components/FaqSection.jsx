import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/ventureData';

export default function FaqSection({ onOpenPitch }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gold-400 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            Clarity For Founders
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-4">
            Frequently Asked <span className="italic text-gold-gradient">Questions.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Everything you need to know about partnering with MakeMyAim Capital, our investment criteria, and our diligence cadence.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/[0.07] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:text-gold-300 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-gold-400 border-gold-400/40' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fadeIn font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-gold-500/20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-4">
            <h3 className="text-xl sm:text-3xl font-serif text-white">
              Building a foundational technology company?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
              Skip the gatekeepers. Send your deck directly to our general partners and receive feedback in under two weeks.
            </p>
            <div>
              <button
                onClick={onOpenPitch}
                className="btn-gold px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Submit Your Confidential Deck</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
