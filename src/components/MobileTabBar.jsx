import React, { useState, useEffect } from 'react';
import { 
  Compass,
  Coins, 
  Layers, 
  Send
} from 'lucide-react';

export default function MobileTabBar({ onOpenPitch, onOpenMenu, isMenuOpen }) {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      const sections = [
        { id: 'team', key: 'team' },
        { id: 'simulator', key: 'simulator' },
        { id: 'portfolio', key: 'portfolio' },
        { id: 'financial-support', key: 'financial-support' },
        { id: 'thesis', key: 'thesis' }
      ];

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && scrollPos >= el.offsetTop) {
          setCurrentSection(sec.key);
          return;
        }
      }

      if (window.scrollY < 200) {
        setCurrentSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block lg:hidden pointer-events-auto">
      {/* Luxury Royal Midnight Dock */}
      <div className="relative bg-[#040816]/95 backdrop-blur-2xl border-t border-gold-500/25 shadow-[0_-8px_30px_rgba(2,5,18,0.95),0_0_20px_rgba(212,175,55,0.08)] px-2 sm:px-6 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))]">
        
        {/* Top hairline gold accent */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent pointer-events-none" />

        <nav className="max-w-md mx-auto grid grid-cols-5 items-center justify-items-center">
          
          {/* Tab 1: Sectors */}
          <button
            onClick={() => scrollTo('thesis')}
            className={`flex flex-col items-center justify-center w-full py-1 rounded-xl transition-all active:scale-95 ${
              currentSection === 'thesis' 
                ? 'text-gold-300 font-bold' 
                : 'text-slate-400 hover:text-slate-200 font-medium'
            }`}
          >
            <div className="relative">
              <Compass className={`w-5 h-5 transition-transform duration-200 ${currentSection === 'thesis' ? 'text-gold-400 scale-110' : 'text-slate-400'}`} />
              {currentSection === 'thesis' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400 shadow-[0_0_6px_#d4af37]" />
              )}
            </div>
            <span className="text-[10px] tracking-tight mt-1">Sectors</span>
          </button>

          {/* Tab 2: Finances */}
          <button
            onClick={() => scrollTo('financial-support')}
            className={`flex flex-col items-center justify-center w-full py-1 rounded-xl transition-all active:scale-95 ${
              currentSection === 'financial-support' 
                ? 'text-gold-300 font-bold' 
                : 'text-slate-400 hover:text-slate-200 font-medium'
            }`}
          >
            <div className="relative">
              <Coins className={`w-5 h-5 transition-transform duration-200 ${currentSection === 'financial-support' ? 'text-gold-400 scale-110' : 'text-slate-400'}`} />
              {currentSection === 'financial-support' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400 shadow-[0_0_6px_#d4af37]" />
              )}
            </div>
            <span className="text-[10px] tracking-tight mt-1">Finances</span>
          </button>

          {/* Tab 3: Center Elevated Pitch CTA */}
          <div className="flex items-center justify-center -translate-y-2">
            <button
              onClick={onOpenPitch}
              className="btn-gold flex flex-col items-center justify-center w-12 h-12 rounded-2xl shadow-[0_4px_25px_rgba(212,175,55,0.45)] border border-white/40 active:scale-90 transition-all group"
              title="Pitch Your Business"
              aria-label="Pitch Your Business"
            >
              <Send className="w-5 h-5 text-[#030611] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="text-[8px] font-black uppercase tracking-wider text-[#030611] -mt-0.5">Pitch</span>
            </button>
          </div>

          {/* Tab 4: Portfolio / Ventures */}
          <button
            onClick={() => scrollTo('portfolio')}
            className={`flex flex-col items-center justify-center w-full py-1 rounded-xl transition-all active:scale-95 ${
              currentSection === 'portfolio' 
                ? 'text-gold-300 font-bold' 
                : 'text-slate-400 hover:text-slate-200 font-medium'
            }`}
          >
            <div className="relative">
              <Layers className={`w-5 h-5 transition-transform duration-200 ${currentSection === 'portfolio' ? 'text-gold-400 scale-110' : 'text-slate-400'}`} />
              {currentSection === 'portfolio' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400 shadow-[0_0_6px_#d4af37]" />
              )}
            </div>
            <span className="text-[10px] tracking-tight mt-1">Ventures</span>
          </button>

          {/* Tab 5: Menu Drawer */}
          <button
            onClick={onOpenMenu}
            className={`flex flex-col items-center justify-center w-full py-1 rounded-xl transition-all active:scale-95 ${
              isMenuOpen 
                ? 'text-gold-300 font-bold' 
                : 'text-slate-400 hover:text-slate-200 font-medium'
            }`}
            title="Open Full Menu"
          >
            <div className="w-5 h-5 flex flex-col justify-between py-1 items-center">
              <span className={`w-4 h-[2px] rounded-full transition-colors ${isMenuOpen ? 'bg-gold-400' : 'bg-slate-400'}`} />
              <span className={`w-3 h-[2px] rounded-full transition-colors ml-1 ${isMenuOpen ? 'bg-gold-400' : 'bg-slate-400'}`} />
              <span className={`w-4 h-[2px] rounded-full transition-colors ${isMenuOpen ? 'bg-gold-400' : 'bg-slate-400'}`} />
            </div>
            <span className="text-[10px] tracking-tight mt-1">Menu</span>
          </button>

        </nav>
      </div>
    </div>
  );
}
