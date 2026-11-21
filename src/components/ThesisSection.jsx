import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Bot, 
  Cpu, 
  Dna, 
  Zap, 
  ArrowUpRight, 
  CheckCircle2, 
  Target, 
  Quote,
  Lightbulb
} from 'lucide-react';
import { INVESTMENT_PILLARS } from '../data/ventureData';

const iconMap = {
  BrainCircuit: BrainCircuit,
  Bot: Bot,
  Cpu: Cpu,
  Dna: Dna,
  Zap: Zap
};

export default function ThesisSection({ onSelectSectorFilter }) {
  const [activeTab, setActiveTab] = useState(INVESTMENT_PILLARS[0].id);

  const activePillar = INVESTMENT_PILLARS.find((p) => p.id === activeTab) || INVESTMENT_PILLARS[0];
  const IconComponent = iconMap[activePillar.icon] || BrainCircuit;

  return (
    <section id="thesis" className="py-24 relative border-t border-slate-800/80 overflow-hidden">
      {/* Background Accent */}
      <div className="ambient-glow-gold w-[500px] h-[500px] top-1/2 -left-48 opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gold-400 uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              Investment Scope & Sectors
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight">
              Where We <span className="italic text-gold-gradient">Invest.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-lg text-sm sm:text-base font-light leading-relaxed">
            Whether you have a breakthrough idea on a whiteboard, an early prototype, or an active business generating revenue — we provide stage-appropriate capital from ₹25 Lakhs to ₹35 Crores.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {INVESTMENT_PILLARS.map((pillar) => {
            const TabIcon = iconMap[pillar.icon] || BrainCircuit;
            const isActive = pillar.id === activeTab;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? 'bg-navy-800 text-white border-gold-400/90 shadow-gold-glow'
                    : 'bg-navy-900/60 text-slate-300 border-navy-700/80 hover:border-gold-500/50 hover:text-white'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-slate-400'}`} />
                <span>{pillar.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-gold-500/20 text-gold-300 font-bold' : 'bg-navy-950 text-slate-400'
                }`}>
                  {pillar.allocation}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/[0.08] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shadow-gold-glow">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-gold-400 tracking-wider">Sector Mandate</span>
                  <h3 className="text-xl sm:text-3xl font-serif text-white tracking-tight">{activePillar.title}</h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gold-200 font-serif italic leading-relaxed">
                "{activePillar.tagline}"
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activePillar.description}
              </p>

              {/* Focus areas pills */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
                  <Target className="w-3.5 h-3.5 text-gold-400" />
                  Key Opportunities We Seek:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePillar.focusAreas.map((area, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote from Partner */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                <Quote className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 italic font-serif text-sm">
                  {activePillar.quote}
                </p>
              </div>

            </div>

            {/* Right Meta Card (5 cols) */}
            <div className="lg:col-span-5 bg-navy-950/90 border border-gold-500/20 rounded-2xl p-6 space-y-5 shadow-navy-depth">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-slate-400">Capital Commitment</span>
                <span className="text-sm font-bold text-gold-400 font-mono">{activePillar.allocation}</span>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Investment Ticket Size:</span>
                  <span className="text-xs font-semibold text-white">{activePillar.metrics.avgCheck}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Applicable Stages:</span>
                  <span className="text-xs font-semibold text-white">{activePillar.metrics.targetStage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Funded Businesses in Sector:</span>
                  <span className="text-xs font-semibold text-gold-300">{activePillar.metrics.activeInvestments} Startups & Ideas</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">What We Provide:</span>
                  <span className="text-xs font-semibold text-white">Capital + Mentorship + Network</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <a
                  href="#portfolio"
                  onClick={() => {
                    const sectorKey = 
                      activePillar.id === 'new-ideas-tech' ? 'ai' :
                      activePillar.id === 'consumer-d2c' ? 'consumer' :
                      activePillar.id === 'agri-rural' ? 'agri' :
                      activePillar.id === 'manufacturing-msme' ? 'manufacturing' : 'health';
                    onSelectSectorFilter(sectorKey);
                  }}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 transition-colors hover:border-gold-400/50"
                >
                  <span>View Funded Startups in this Category</span>
                  <ArrowUpRight className="w-4 h-4 text-gold-400" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
