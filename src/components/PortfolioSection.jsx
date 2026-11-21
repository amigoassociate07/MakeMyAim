import React, { useState } from 'react';
import { 
  Search, 
  ExternalLink, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  MapPin, 
  DollarSign, 
  Calendar, 
  ArrowRight,
  X,
  Filter
} from 'lucide-react';
import { PORTFOLIO_COMPANIES } from '../data/ventureData';

export default function PortfolioSection({ selectedSector, setSelectedSector, onOpenPitch }) {
  const [selectedStage, setSelectedStage] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalCompany, setActiveModalCompany] = useState(null);

  // Filter companies
  const filteredCompanies = PORTFOLIO_COMPANIES.filter((company) => {
    const matchesSector = 
      selectedSector === 'all' || 
      company.sector === selectedSector;

    const matchesSearch = 
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.oneLiner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.founders.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSector && matchesSearch;
  });

  const sectors = [
    { id: 'all', label: 'All Guided Ventures' },
    { id: 'ai', label: 'Tech & AI' },
    { id: 'consumer', label: 'Consumer & D2C' }
  ];

  return (
    <section id="portfolio" className="py-24 relative border-t border-slate-800/80 overflow-hidden">
      {/* Background Glow */}
      <div className="ambient-glow-slate w-[500px] h-[500px] top-1/3 -right-40 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gold-400 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-gold-400" />
            Flagship Portfolio & Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-4">
            Ventures We <span className="italic text-gold-gradient">Guide & Fund.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            We don't take a passive backseat. When we back a company, we provide direct capital plus weekly 1-on-1 financial steering, cash flow roadmap, and operational guidance. Here is how we back builders from day zero:
          </p>
        </div>

        {/* Portfolio Showcase Grid: 2 Flagship Guided Companies + 1 "Your Startup Next" Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              onClick={() => setActiveModalCompany(company)}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/[0.08] hover:border-gold-500/40 flex flex-col justify-between cursor-pointer group relative overflow-hidden transition-all duration-300"
            >
              <div>
                
                {/* Top Bar: Category badge & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-slate-900 border border-slate-800 text-slate-300">
                    {company.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wide bg-gold-500/15 text-gold-300 border border-gold-500/30">
                    {company.status}
                  </span>
                </div>

                {/* Company Name & Icon */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-400 via-gold-600 to-amber-700 p-[1.5px] shadow-gold-glow flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full bg-[#0a0d14] rounded-[9.5px] flex items-center justify-center font-bold text-gold-300 text-base">
                      {company.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">
                      {company.stage}
                    </p>
                  </div>
                </div>

                {/* One-Liner */}
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                  {company.oneLiner}
                </p>

                {/* Highlight pill */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-4">
                  <div className="text-[10px] font-mono uppercase text-slate-500 mb-0.5">Support & Milestones</div>
                  <div className="text-xs font-semibold text-gold-300 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span className="line-clamp-1">{company.highlight}</span>
                  </div>
                </div>

              </div>

              {/* Footer of Card */}
              <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between">
                <div className="text-[10px] text-slate-400 font-mono">
                  Backed by MakeMyAim
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-gold-400 group-hover:translate-x-0.5 transition-transform">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}

          {/* Card 3: "+ Your Startup Next" Invitation Slot */}
          <div
            onClick={onOpenPitch}
            className="glass-panel p-6 rounded-2xl border-2 border-dashed border-gold-500/35 hover:border-gold-400 bg-gold-500/[0.03] hover:bg-gold-500/[0.08] transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer group min-h-[300px]"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:shadow-gold-glow transition-all my-2">
              <Sparkles className="w-6 h-6 text-gold-400" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 bg-gold-500/15 px-2.5 py-1 rounded-full border border-gold-500/30">
                Next Cohort Open
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                Your Startup Could Be Next
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                Got a new idea, prototype, or early business? Get direct seed funding + hands-on Virtual CFO mentorship from MakeMyAim.
              </p>
            </div>

            <button className="btn-gold mt-4 w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-gold-glow">
              <span>Pitch Your Vision</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>
          </div>

        </div>

      </div>

      {/* Deep Dive Modal */}
      {activeModalCompany && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0a0d15] border border-white/[0.12] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalCompany(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-amber-700 p-[1.5px] shadow-gold-glow flex-shrink-0">
                <div className="w-full h-full bg-[#0a0d14] rounded-[14px] flex items-center justify-center font-bold text-gold-300 text-xl">
                  {activeModalCompany.name.charAt(0)}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-slate-800 text-slate-300">
                    {activeModalCompany.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono text-gold-400 font-bold bg-gold-500/10 border border-gold-500/20">
                    {activeModalCompany.stage}
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-white">{activeModalCompany.name}</h3>
                <p className="text-xs text-slate-400 font-mono">{activeModalCompany.location}</p>
              </div>
            </div>

            {/* Core Story */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              <p className="text-base text-white font-medium">
                "{activeModalCompany.oneLiner}"
              </p>
              <p>
                {activeModalCompany.description}
              </p>
            </div>

            {/* Key Guidance Delivered */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-6">
              <div className="text-xs font-mono uppercase text-gold-400 mb-2">How MakeMyAim Guided & Funded This Venture</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeModalCompany.highlight}
              </p>
            </div>

            {/* CTA in Modal */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Want similar guidance and funding?</span>
              <button
                onClick={() => {
                  setActiveModalCompany(null);
                  onOpenPitch();
                }}
                className="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>Pitch Your Vision</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
