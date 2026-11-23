import React, { useState } from 'react';
import { 
  ArrowUp, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Building2
} from 'lucide-react';

export default function Footer({ onOpenPitch }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const offices = [
    { city: 'Indore', address: 'Vijay Nagar', state: 'Madhya Pradesh 452010' }
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-black/30 backdrop-blur-xl pt-20 pb-28 sm:pb-14 relative overflow-hidden">
      
      {/* Subtle ambient glow */}
      <div className="ambient-glow-gold w-[500px] h-[500px] -bottom-48 -left-36 opacity-15"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-300 via-gold-500 to-amber-700 p-[1.5px] shadow-gold-glow flex-shrink-0">
                <div className="w-full h-full bg-[#050a1a] rounded-[9.5px] flex items-center justify-center border border-gold-500/30">
                  <span className="font-extrabold text-[11px] tracking-wider bg-gradient-to-br from-white via-gold-300 to-gold-500 bg-clip-text text-transparent font-sans select-none">
                    MYA
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider text-white uppercase font-sans">
                  MakeMyAim
                </span>
                <span className="text-[9px] tracking-[0.25em] text-gold-400 font-mono uppercase -mt-0.5">
                  Venture Capital
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              MakeMyAim is a venture capital and financial growth partner. We provide funding and financial support to bold ideas, early-stage startups, and growing businesses across India.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenPitch}
                className="btn-gold px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Pitch Your Business</span>
              </button>
            </div>
          </div>

          {/* Office Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-gold-400" />
              Office & Headquarters
            </h4>
            <div className="space-y-3">
              {offices.map((office) => (
                <div key={office.city} className="text-xs">
                  <div className="font-semibold text-white text-sm">{office.city}</div>
                  <div className="text-xs text-slate-300 mt-1">{office.address}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">{office.state}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dispatch / Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300">
              The MakeMyAim Bharat Dispatch
            </h4>
            <p className="text-xs text-slate-400">
              Fortnightly insights on startup fundraising, consumer brand growth, unit economics, and Virtual CFO frameworks read by 42,000+ founders and CXOs.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed! Check your inbox for our latest Founder Playbook.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="founder@yourstartup.in"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                />
                <button
                  type="submit"
                  className="btn-gold px-4 py-2.5 rounded-xl text-slate-950 text-xs font-bold transition-all flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
              <a href="#thesis" className="hover:text-gold-400 transition-colors">Venture Capital Mandate</a>
              <span>•</span>
              <a href="#financial-support" className="hover:text-gold-400 transition-colors">Funding & Finances</a>
            </div>
          </div>

        </div>

        {/* Legal & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © 2026 MakeMyAim Capital. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Founder Confidentiality</span>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-gold-400 transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
