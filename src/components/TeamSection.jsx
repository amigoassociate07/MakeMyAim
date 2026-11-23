import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Sparkles, 
  CheckCircle,
  X,
  Compass,
  TrendingUp,
  Zap,
  ArrowRight,
  Target
} from 'lucide-react';
import { BRAND_STORY, FOUNDER_MINDSET, FOUNDER_TESTIMONIALS } from '../data/ventureData';

export default function TeamSection({ onOpenPitch }) {
  const [isOfficeHoursOpen, setIsOfficeHoursOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [founderEmail, setFounderEmail] = useState('');
  const [companyOneLiner, setCompanyOneLiner] = useState('');

  const handleBookHours = (e) => {
    e.preventDefault();
    if (!founderEmail) return;
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsOfficeHoursOpen(false);
      setFounderEmail('');
      setCompanyOneLiner('');
    }, 2800);
  };

  return (
    <section id="team" className="py-24 relative border-t border-slate-800/80 overflow-hidden">
      {/* Background Accent */}
      <div className="ambient-glow-gold w-[500px] h-[500px] top-1/2 -right-40 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Our Mindset & Vision */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gold-400 uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            Our Mindset & Vision
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-4">
            Hands-on Partners First. <br />
            <span className="italic text-gold-gradient">Investors Second.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            We are not distant boardroom investors. We believe early-stage founders don't just need capital—they need an authentic partner who takes ownership of their target and helps them hit the mark.
          </p>
        </div>

        {/* The Brand Story: Make My Aim Editorial Feature */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-gold-500/25 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-6 relative">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-gold-400">
              <Target className="w-4 h-4 text-gold-400" />
              The Brand Story : Make My Aim
            </div>
            
            <h3 className="text-2xl sm:text-4xl font-serif text-white tracking-tight leading-snug">
              Why We Call Ourselves <span className="italic text-gold-gradient">Make My Aim.</span>
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              <p>
                {BRAND_STORY.lead}
              </p>
              <p>
                {BRAND_STORY.challenge}
              </p>
              <div className="p-4 sm:p-5 rounded-2xl bg-gold-500/[0.04] border-l-2 border-gold-400 text-white font-normal leading-relaxed">
                <span className="text-gold-300 font-semibold block mb-1 font-mono text-xs uppercase tracking-wider">A Declaration Of Intent:</span>
                "{BRAND_STORY.mission}"
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Mindset Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {FOUNDER_MINDSET.principles.map((principle, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/[0.08] hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-gold-400 mb-3 bg-gold-500/10 inline-block px-2.5 py-1 rounded-md border border-gold-500/20">
                  {principle.tag}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                  {principle.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {principle.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Testimonials & Case Notes */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Unvarnished Founder Feedback</div>
            <h3 className="text-2xl sm:text-4xl font-serif font-normal text-white">
              What Backed Founders Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
            {FOUNDER_TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/[0.08] flex flex-col justify-between space-y-4 hover:border-gold-400/30 transition-all"
              >
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic font-serif">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="font-bold text-white text-sm">{t.author}</div>
                  <div className="text-xs text-gold-400 font-medium">{t.role}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1">{t.metrics}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 1-on-1 Office Hours CTA Banner */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold-500/25 max-w-3xl mx-auto text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mx-auto shadow-gold-glow">
              <Calendar className="w-6 h-6 text-gold-400" />
            </div>
            <h4 className="text-xl sm:text-2xl font-serif text-white">
              Have An Idea or Prototype? Let's Talk.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto font-light leading-relaxed">
              No formal pitch deck required. Schedule a 20-minute 1-on-1 founder session to discuss your business idea, financial model, or funding requirements directly with MakeMyAim.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => setIsOfficeHoursOpen(true)}
                className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-gold-glow"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-950" />
                <span>Book 1-on-1 Founder Session</span>
              </button>
              <button
                onClick={onOpenPitch}
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 hover:border-gold-500/40 transition-all"
              >
                <span>Submit Full Pitch</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Office Hours Request Modal */}
      {isOfficeHoursOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md bg-[#090d16] border border-gold-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsOfficeHoursOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-serif">Session Requested</h3>
                <p className="text-xs text-slate-400">
                  We will review your concept and reach out with a direct calendar link or WhatsApp message within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookHours} className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Calendar className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-serif">Book 1-on-1 Founder Call</h3>
                    <p className="text-xs text-gold-400 font-mono">MakeMyAim Guidance Session</p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Open to founders working on any idea or prototype across India. No formal pitch deck required.
                </p>

                <div>
                  <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">Your Email or WhatsApp *</label>
                  <input
                    type="text"
                    required
                    placeholder="founder@yourstartup.in or +91 98765 43210"
                    value={founderEmail}
                    onChange={(e) => setFounderEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase text-slate-400 block mb-1">What is your business idea or model? *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. D2C organic food brand, or AI tool for retailers"
                    value={companyOneLiner}
                    onChange={(e) => setCompanyOneLiner(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-3 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-slate-950" />
                  <span>Request 1-on-1 Session</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
