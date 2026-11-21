import React, { useState } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Download, 
  CheckCircle2
} from 'lucide-react';
import { FIRM_STATS } from '../data/ventureData';

export default function Hero({ onOpenPitch, onOpenThesis }) {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadThesis = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    }, 1200);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-44 md:pb-28 overflow-hidden">
      {/* Ambient luxury lighting */}
      <div className="ambient-glow-gold w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] -top-32 -left-20 opacity-60 pointer-events-none" />
      <div className="ambient-glow-slate w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] top-1/4 -right-36 opacity-40 pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-subtle opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Container - Strictly Left-Aligned on Mobile/Tablet matching Vaidure reference */}
        <div className="max-w-4xl text-left">
          
          {/* Reference Kicker Line: Gold line + tracked uppercase subtitle (compact, guaranteed 1-line on mobile) */}
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <span className="w-8 sm:w-12 h-[1px] bg-gold-400 flex-shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.26em] text-gold-400 font-bold whitespace-nowrap">
              Venture Capital & CFO
            </span>
          </div>

          {/* Reference Headline: 3 Balanced Lines with Italic Gold Accent */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-serif font-normal text-white mb-6 leading-[1.12] tracking-tight">
            We Fund Every <br />
            Bold Startup Vision <br />
            <span className="italic font-light text-gold-gradient">
              With Capital & CFO.
            </span>
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light max-w-2xl mb-8 sm:mb-10 leading-relaxed font-sans">
            Backing ambitious founders, early prototypes, and scaling enterprises across India. 
            <strong className="text-white font-medium"> MakeMyAim Venture Capital</strong> provides ₹25 Lakhs to ₹35 Crores in direct growth capital paired with end-to-end financial management, cash flow strategy, and dedicated Virtual CFO support.
          </p>

          {/* Reference Action Buttons: Solid Gold Rectangle + Dark Outlined Rectangle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 max-w-md sm:max-w-none">
            {/* Primary Solid Gold Button */}
            <button
              onClick={onOpenPitch}
              className="px-7 py-3.5 sm:px-8 sm:py-4 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 hover:from-gold-300 hover:to-gold-500 text-slate-950 font-bold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_4px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.55)] group rounded-sm active:scale-95"
            >
              <span>Pitch Your Vision</span>
              <ArrowRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Secondary Dark Outlined Button */}
            <a
              href="#financial-support"
              className="px-7 py-3.5 sm:px-8 sm:py-4 bg-navy-950/80 hover:bg-navy-900 border border-white/20 hover:border-gold-400/60 text-white hover:text-gold-300 font-bold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm rounded-sm active:scale-95 text-center"
            >
              <Layers className="w-4 h-4 text-gold-400" />
              <span>Financial Support</span>
            </a>
          </div>

          {/* Tertiary Subtle Guide Download Link */}
          <div className="flex items-center mb-12 sm:mb-14">
            <button
              onClick={handleDownloadThesis}
              disabled={downloading}
              className="text-xs uppercase tracking-[0.14em] text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-2 py-1 font-mono"
            >
              {downloading ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
                  <span>Generating Founder Guide...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Guide Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-gold-400" />
                  <span>Download 2026 Founder Investment Guide</span>
                </>
              )}
            </button>
          </div>

          {/* Focus Tags */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="text-gold-400/80 font-mono tracking-widest uppercase mr-1 text-[11px]">We Invest In:</span>
            {[
              'Tech Apps & AI Ideas', 
              'Consumer & D2C Brands', 
              'AgriTech & Food Processing', 
              'Manufacturing & MSME', 
              'Healthcare & Clinics', 
              'EdTech & Services', 
              'CleanTech & EV'
            ].map((sector) => (
              <span 
                key={sector} 
                className="px-3 py-1 rounded-full bg-navy-900/80 border border-navy-700/80 text-slate-300 text-xs hover:border-gold-400/60 hover:text-gold-200 transition-colors shadow-sm"
              >
                {sector}
              </span>
            ))}
          </div>

        </div>

        {/* Firm Stats Grid */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-navy-700/60">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
            {FIRM_STATS.map((stat, idx) => (
              <div 
                key={idx}
                className="glass-panel p-3.5 sm:p-5 rounded-xl sm:rounded-2xl hover:border-gold-400/50 hover:shadow-gold-glow transition-all duration-300 group"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white group-hover:text-gold-300 transition-colors tracking-tight font-sans">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-slate-400 mt-1 line-clamp-1">
                  {stat.label}
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono text-gold-400/90 mt-1.5 flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400" />
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
