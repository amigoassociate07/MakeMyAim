import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  ArrowRight,
  Award
} from 'lucide-react';

export default function ValuationSimulator({ onOpenPitchWithData }) {
  const [currency, setCurrency] = useState('INR'); // 'INR' (₹ Cr) or 'USD' ($M)
  const [stage, setStage] = useState('Seed');
  const [sector, setSector] = useState('tech');
  const [raiseAmountINR, setRaiseAmountINR] = useState(3.5); // in ₹ Crores (default ₹3.5 Cr)
  const [targetDilution, setTargetDilution] = useState(15); // in %
  const [monthlyBurnINR, setMonthlyBurnINR] = useState(15); // in ₹ Lakhs / month

  // USD equivalents when currency is USD
  const [raiseAmountUSD, setRaiseAmountUSD] = useState(1.0); // in $M
  const [monthlyBurnUSD, setMonthlyBurnUSD] = useState(25); // in $K / month

  // Calculations
  const isINR = currency === 'INR';
  const raise = isINR ? raiseAmountINR : raiseAmountUSD;
  const impliedPostMoney = raise / (targetDilution / 100);
  const impliedPreMoney = impliedPostMoney - raise;
  
  // Runway calculation
  const runwayMonths = isINR 
    ? Math.round((raiseAmountINR * 100) / (monthlyBurnINR || 1)) // 1 Cr = 100 Lakhs
    : Math.round((raiseAmountUSD * 1000) / (monthlyBurnUSD || 1));

  let fitScore = 96;
  let partner = "Rohan Singhania (Tech, AI & Platform Ventures)";
  let sectorNote = "Active Focus: Software, Consumer Tech & Scalable Platforms";

  if (sector === 'consumer') {
    fitScore = 95;
    partner = "Vikramaditya Oberoi (Consumer & D2C Brands)";
    sectorNote = "Active Focus: Packaged Goods, Lifestyle Brands & Omnichannel Retail";
  } else if (sector === 'agri') {
    fitScore = 97;
    partner = "Meera Krishnan (AgriTech & Bharat Markets)";
    sectorNote = "Active Focus: Rural Supply Chains, Dairy, Farming Tech & Tier-2/3 Commerce";
  } else if (sector === 'mfg') {
    fitScore = 94;
    partner = "Dr. Ananya Murthy (Manufacturing, EV & Hardware)";
    sectorNote = "Active Focus: Indian Precision MSME, Clean Energy & Clean Hardware";
  } else if (sector === 'health') {
    fitScore = 93;
    partner = "Meera Krishnan & Dr. Ananya Murthy";
    sectorNote = "Active Focus: Affordable Healthcare, Diagnostics & Clinical Services";
  }

  const handleApply = () => {
    onOpenPitchWithData({
      stage,
      sector,
      raiseAmount: isINR ? `₹${raiseAmountINR} Cr` : `$${raiseAmountUSD}M`,
      preMoney: isINR ? `₹${impliedPreMoney.toFixed(1)} Cr` : `$${impliedPreMoney.toFixed(1)}M`,
      runway: `${runwayMonths} months`
    });
  };

  return (
    <section id="simulator" className="py-24 relative border-t border-slate-800/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="ambient-glow-gold w-[550px] h-[550px] top-1/4 -left-36 opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gold-400 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            Indian Founder Toolkit
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-4">
            Founder Round & <span className="italic text-gold-gradient">Valuation Model.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Plan your next institutional round in <strong className="text-white">₹ Crores</strong> or <strong className="text-white">$ Millions</strong>. Model equity dilution, calculate runway extension, and verify your alignment with MakeMyAim Fund IV criteria.
          </p>
        </div>

        {/* Main Simulator Card */}
        <div className="glass-panel rounded-3xl border border-white/[0.08] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Input Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Currency Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase text-slate-400">Denomination:</span>
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 w-full sm:w-auto justify-between sm:justify-start">
                  <button
                    onClick={() => setCurrency('INR')}
                    className={`flex-1 sm:flex-initial px-3 py-1 rounded-lg text-xs font-bold transition-all text-center ${
                      currency === 'INR'
                        ? 'btn-gold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    ₹ INR (Crores / Lakhs)
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`flex-1 sm:flex-initial px-3 py-1 rounded-lg text-xs font-bold transition-all text-center ${
                      currency === 'USD'
                        ? 'btn-gold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    $ USD (Millions)
                  </button>
                </div>
              </div>

              {/* Round Stage Selector */}
              <div>
                <label className="text-xs font-mono uppercase text-slate-400 block mb-2">
                  1. Funding Round Stage:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { key: 'Idea & Prototype', inr: 0.8, usd: 0.1, dil: 12, burnInr: 4, burnUsd: 8 },
                    { key: 'Seed Stage', inr: 3.5, usd: 0.5, dil: 15, burnInr: 15, burnUsd: 25 },
                    { key: 'Series A', inr: 15, usd: 2.0, dil: 18, burnInr: 40, burnUsd: 65 },
                    { key: 'Growth & Scale', inr: 45, usd: 6.0, dil: 16, burnInr: 110, burnUsd: 160 },
                  ].map((s) => (
                    <button
                      key={s.key}
                      onClick={() => {
                        setStage(s.key);
                        setRaiseAmountINR(s.inr);
                        setRaiseAmountUSD(s.usd);
                        setTargetDilution(s.dil);
                        setMonthlyBurnINR(s.burnInr);
                        setMonthlyBurnUSD(s.burnUsd);
                      }}
                      className={`py-2.5 px-2 text-center rounded-xl text-xs font-bold transition-all ${
                        stage === s.key
                          ? 'btn-gold shadow-gold-glow'
                          : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {s.key}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sector selector */}
              <div>
                <label className="text-xs font-mono uppercase text-slate-400 block mb-2">
                  2. Business Category / Industry:
                </label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-gold-400"
                >
                  <option value="tech">Tech, Software, AI & Mobile Apps</option>
                  <option value="consumer">Consumer Brand, Food, Lifestyle & D2C</option>
                  <option value="agri">AgriTech, Dairy, Farming & Rural Bharat</option>
                  <option value="mfg">Manufacturing, EV Mobility & MSME Hardware</option>
                  <option value="health">Healthcare Clinics, Pharma & Diagnostics</option>
                </select>
              </div>

              {/* Slider 1: Target Raise */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-slate-300">Target Raise Amount:</span>
                  <span className="text-base font-extrabold text-gold-400 font-mono">
                    {isINR 
                      ? (raiseAmountINR < 1 
                          ? `₹${Math.round(raiseAmountINR * 100)} Lakhs` 
                          : `₹${raiseAmountINR.toFixed(2)} Crores`) 
                      : `$${raiseAmountUSD.toFixed(2)} Million`}
                  </span>
                </div>
                {isINR ? (
                  <input
                    type="range"
                    min="0.25"
                    max="100"
                    step="0.25"
                    value={raiseAmountINR}
                    onChange={(e) => setRaiseAmountINR(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                ) : (
                  <input
                    type="range"
                    min="0.05"
                    max="20"
                    step="0.05"
                    value={raiseAmountUSD}
                    onChange={(e) => setRaiseAmountUSD(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                )}
                <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-mono">
                  <span>{isINR ? '₹25 Lakhs (Idea / MVP)' : '$50K'}</span>
                  <span>{isINR ? '₹20 Crores' : '$2.5M'}</span>
                  <span>{isINR ? '₹100 Crores' : '$20M'}</span>
                </div>
              </div>

              {/* Slider 2: Target Dilution */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-slate-300">Target Round Dilution:</span>
                  <span className="text-base font-extrabold text-white font-mono">{targetDilution}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="28"
                  step="1"
                  value={targetDilution}
                  onChange={(e) => setTargetDilution(parseInt(e.target.value))}
                  className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-mono">
                  <span>10% (Founder Friendly)</span>
                  <span>18% (Indian Market Standard)</span>
                  <span>28% (Syndicated Growth)</span>
                </div>
              </div>

              {/* Slider 3: Projected Monthly Burn */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-slate-300">Projected Post-Round Monthly Burn:</span>
                  <span className="text-base font-extrabold text-slate-300 font-mono">
                    {isINR ? `₹${monthlyBurnINR} Lakhs / mo` : `$${monthlyBurnUSD}K / mo`}
                  </span>
                </div>
                {isINR ? (
                  <input
                    type="range"
                    min="5"
                    max="250"
                    step="5"
                    value={monthlyBurnINR}
                    onChange={(e) => setMonthlyBurnINR(parseInt(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                ) : (
                  <input
                    type="range"
                    min="20"
                    max="400"
                    step="5"
                    value={monthlyBurnUSD}
                    onChange={(e) => setMonthlyBurnUSD(parseInt(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                )}
                <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-mono">
                  <span>{isINR ? '₹5 Lakhs' : '$20K'}</span>
                  <span>{isINR ? '₹120 Lakhs' : '$200K'}</span>
                  <span>{isINR ? '₹250 Lakhs' : '$400K'}</span>
                </div>
              </div>

            </div>

            {/* Live Outputs & Fit Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-navy-900 to-navy-950 border border-gold-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-navy-depth">
              
              <div className="flex items-center justify-between pb-4 border-b border-navy-700/80">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-gold-400" />
                  <span className="text-xs font-mono uppercase text-gold-300">MakeMyAim Investment Fit</span>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/50 text-gold-300 text-xs font-bold font-mono">
                  {fitScore}% High Priority Fit
                </div>
              </div>

              {/* Financial Metrics Box */}
              <div className="space-y-3.5">
                
                <div className="p-3.5 rounded-xl bg-navy-950/90 border border-gold-500/15 flex justify-between items-center">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Implied Pre-Money</div>
                    <div className="text-lg font-bold text-white font-mono">
                      {isINR ? `₹${impliedPreMoney.toFixed(1)} Cr` : `$${impliedPreMoney.toFixed(2)}M`}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase text-slate-400">Implied Post-Money</div>
                    <div className="text-lg font-bold text-gold-400 font-mono">
                      {isINR ? `₹${impliedPostMoney.toFixed(1)} Cr` : `$${impliedPostMoney.toFixed(2)}M`}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-navy-950/90 border border-gold-500/15 flex justify-between items-center">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Capital Runway</div>
                    <div className="text-base font-bold text-white font-mono flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gold-400" />
                      {runwayMonths} Months
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase text-slate-400">Check Type</div>
                    <div className="text-xs font-semibold text-gold-300 mt-1">Lead or Co-Lead</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/25">
                  <div className="text-[10px] font-mono uppercase text-gold-400 mb-1">Assigned Partner Review:</div>
                  <div className="text-xs font-semibold text-white">{partner}</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">{sectorNote}</div>
                </div>

              </div>

              {/* Action Button */}
              <button
                onClick={handleApply}
                className="btn-gold w-full py-4 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 group"
              >
                <span>Pitch MakeMyAim with this Model</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] text-slate-500 text-center font-mono">
                *Simulated figures based on standard early-stage venture benchmarks. No binding commitment implied.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
