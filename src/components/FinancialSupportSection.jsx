import React, { useState } from 'react';
import { 
  Coins, 
  LineChart, 
  FileSpreadsheet, 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Layers,
  Wallet,
  Calculator,
  Briefcase,
  HelpCircle,
  Zap
} from 'lucide-react';

export default function FinancialSupportSection({ onOpenPitch }) {
  const [selectedPersona, setSelectedPersona] = useState('idea'); // 'idea' | 'growth'

  const services = [
    {
      icon: Coins,
      title: "Direct Capital Funding",
      badge: "₹25L to ₹35 Cr Checks",
      description: "Direct equity investment, seed funding, and growth capital. We back bold ideas on day zero and write follow-on checks as you grow.",
      highlights: ["No red tape or lengthy bureaucracy", "Cheques cleared in 7 to 14 days", "Founder-friendly valuation terms"]
    },
    {
      icon: LineChart,
      title: "Virtual CFO & Financial Roadmap",
      badge: "Cash Flow Strategy",
      description: "You don't need an expensive full-time CFO on day one. Our financial experts build your 24-month runway model, track monthly burn, and plan budgets.",
      highlights: ["Monthly burn rate & runway tracking", "Budgeting and cash conservation", "Board-ready financial reporting"]
    },
    {
      icon: Building2,
      title: "Working Capital & Credit Lines",
      badge: "Bank & NBFC Partnerships",
      description: "Need working capital to purchase raw materials, inventory, or fulfill bulk orders? We arrange debt facilities, vendor financing, and collateral-free MSME credit.",
      highlights: ["Tied up with leading commercial banks", "Purchase order & invoice discounting", "Low-interest credit lines for expansion"]
    },
    {
      icon: FileSpreadsheet,
      title: "Accounting, GST & Tax Compliance",
      badge: "Zero-Headache Operations",
      description: "We handle your statutory compliance, GST reconciliations, MCA annual filings, and bookkeeping through our dedicated chartered accountants.",
      highlights: ["End-to-end bookkeeping & monthly ledger", "GST, TDS, and Advance Tax filings", "Clean books ready for future audits"]
    },
    {
      icon: TrendingUp,
      title: "Unit Economics & Margin Engineering",
      badge: "Profitability Focus",
      description: "We work directly on your cost structures to improve gross margins, reduce customer acquisition cost (CAC), and ensure your business becomes sustainably profitable.",
      highlights: ["Contribution margin optimization", "Vendor cost renegotiations", "Pricing strategy & discount guardrails"]
    },
    {
      icon: ShieldCheck,
      title: "Next-Round Investor Readiness",
      badge: "Syndicate Access",
      description: "When it's time to raise Series A or Series B, we build your investor data room, audit your financial statements, and introduce you to our global syndicate of LPs.",
      highlights: ["Data room & cap table structuring", "Financial audit readiness", "Direct access to Tier-1 co-investors"]
    }
  ];

  const personaContent = {
    idea: {
      tag: "For New Ideas & Early Startups",
      title: "Have an idea, but no capital or financial experience?",
      description: "You don't need a finance degree to launch a successful company. Bring your passion, idea, and commitment — MakeMyAim provides both the launch capital and takes care of your financial setup from day one.",
      perks: [
        { label: "Initial Seed Capital", desc: "₹25 Lakhs to ₹1.5 Crores to build your MVP, hire key engineers, or set up pilot production." },
        { label: "Company Incorporation & Legal", desc: "We register your Private Limited entity, draft founder agreements, and set up your current account." },
        { label: "Day-1 Bookkeeping & GST", desc: "No confusion over taxes. Our finance partners set up your accounting software and file monthly returns." },
        { label: "Founder Financial Mentorship", desc: "1-on-1 monthly sessions with finance partners to ensure every rupee spent yields maximum growth." }
      ]
    },
    growth: {
      tag: "For Active Businesses & Scaling Startups",
      title: "Running an active business and need capital to expand?",
      description: "Already generating revenue but held back by working capital constraints or messy finances? MakeMyAim injects growth capital and optimizes your unit economics to multiply enterprise value.",
      perks: [
        { label: "Expansion Funding", desc: "₹4 Crores to ₹35 Crores to open new locations, scale manufacturing, or invest in national marketing." },
        { label: "Working Capital Lines", desc: "Structured credit lines to bridge 60-90 day payment cycles with distributors and large enterprise buyers." },
        { label: "Margin & Profit Tuning", desc: "Detailed SKU-level unit economics analysis to turn break-even products into high-margin profit drivers." },
        { label: "Audit & Due Diligence Shield", desc: "Prepare clean financial records and data rooms that impress future institutional investors and lenders." }
      ]
    }
  };

  const activeData = personaContent[selectedPersona];

  return (
    <section id="financial-support" className="py-24 relative border-t border-white/[0.07] overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="ambient-glow-gold w-[600px] h-[600px] top-1/4 -right-48 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gold-400 uppercase mb-3">
            <Coins className="w-3.5 h-3.5 text-gold-400" />
            Complete Financial Backing
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-4">
            Funding + <span className="italic text-gold-gradient">Financial Support.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Capital is just one half of the equation. At <strong className="text-white">MakeMyAim</strong>, we provide direct investment checks alongside complete financial management, cash flow steering, and bookkeeping support so you never run out of money.
          </p>
        </div>

        {/* 6 Key Financial Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/[0.08] hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-400/25 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:shadow-gold-glow transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-gold-300">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Persona Comparison Banner */}
        <div className="glass-panel rounded-3xl border border-white/[0.1] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase text-gold-400">Tailored To Your Journey</span>
              <h3 className="text-xl sm:text-2xl font-serif text-white">How We Support You Financially</h3>
            </div>

            {/* Toggle Switch */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto p-1.5 rounded-2xl bg-navy-950/90 border border-gold-500/20 gap-1 sm:gap-0">
              <button
                onClick={() => setSelectedPersona('idea')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-center ${
                  selectedPersona === 'idea'
                    ? 'btn-gold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                💡 Early Ideas & Startups
              </button>
              <button
                onClick={() => setSelectedPersona('growth')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-center ${
                  selectedPersona === 'growth'
                    ? 'btn-gold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                🚀 Active & Growing Businesses
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-block px-3 py-1 rounded-md text-[10px] font-mono uppercase bg-gold-500/10 border border-gold-400/30 text-gold-300 font-bold">
                {activeData.tag}
              </div>
              <h4 className="text-2xl sm:text-3xl font-serif text-white leading-tight">
                {activeData.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {activeData.description}
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenPitch}
                  className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 group"
                >
                  <span>Apply for Capital & Financial Support</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Perks (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeData.perks.map((perk, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-navy-950/80 border border-gold-500/15 hover:border-gold-500/40 transition-all space-y-1.5 shadow-sm"
                >
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                    {perk.label}
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Fast Assurance Bar */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-navy-900/70 border border-gold-500/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 text-slate-200">
            <Zap className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>
              <strong className="text-gold-300">Our Commitment:</strong> We don't just invest and disappear. Every portfolio business receives dedicated financial advisory sessions every month.
            </span>
          </div>
          <button
            onClick={onOpenPitch}
            className="text-xs font-bold text-gold-400 hover:text-gold-300 underline underline-offset-4 flex-shrink-0"
          >
            Schedule a Financial Review Pitch →
          </button>
        </div>

      </div>
    </section>
  );
}
