import React, { useState, useEffect } from 'react';
import { 
  Send, 
  X, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export default function Navbar({ onOpenPitch, isMenuOpen: propIsMenuOpen, setIsMenuOpen: propSetIsMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);

  const isMenuOpen = propIsMenuOpen !== undefined ? propIsMenuOpen : internalMenuOpen;
  const setIsMenuOpen = propSetIsMenuOpen || setInternalMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { num: '01', name: 'Sectors & Scope', href: '#thesis', desc: 'Tech, D2C, AgriTech, MSME & Health' },
    { num: '02', name: 'Funding & Finances', href: '#financial-support', desc: 'Direct Capital + Virtual CFO Support' },
    { num: '03', name: 'Guided Ventures', href: '#portfolio', desc: 'Flagship Portfolio & Showcase' },
    { num: '04', name: 'Valuation Model', href: '#simulator', desc: 'Model Your Raise & Runway' },
    { num: '05', name: 'Our Mindset & Vision', href: '#team', desc: 'Hands-on Guidance & Founder Principles' },
    { num: '06', name: 'FAQ', href: '#faq', desc: 'Criteria, Speed & Diligence Process' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#040816]/95 backdrop-blur-xl border-b border-gold-500/15 shadow-[0_10px_30px_rgba(2,5,18,0.8)] py-3 sm:py-3.5' 
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo - Styled with Luxury Editorial Presence */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-gold-300 via-gold-500 to-amber-700 p-[1.5px] shadow-gold-glow transition-all duration-300 group-hover:scale-105 flex-shrink-0">
                <div className="w-full h-full bg-[#050a1a] rounded-[9.5px] flex items-center justify-center border border-gold-500/30">
                  <span className="font-extrabold text-[10px] sm:text-[11px] tracking-wider bg-gradient-to-br from-white via-gold-300 to-gold-500 bg-clip-text text-transparent font-sans select-none">
                    MYA
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-[0.14em] text-white uppercase font-sans whitespace-nowrap">
                  MakeMyAim
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.24em] text-gold-400 font-mono uppercase -mt-0.5 whitespace-nowrap">
                  Venture Capital
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (>= 1024px) - Cleanly right-aligned, NO hamburger on full screen */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-8 flex-shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] xl:text-xs uppercase tracking-[0.14em] xl:tracking-[0.16em] font-medium text-slate-300 hover:text-gold-400 transition-colors duration-200 relative py-1 whitespace-nowrap group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Side: Hamburger Menu Icon (ONLY on mobile & tablet, 100% hidden on desktop full screen) */}
            <div className="flex lg:hidden items-center flex-shrink-0">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 -mr-1 text-white hover:text-gold-400 transition-colors focus:outline-none flex flex-col justify-center items-end gap-1.5 group cursor-pointer"
                title="Open Navigation Menu"
                aria-label="Open Navigation Menu"
              >
                <span className="w-7 h-[2px] bg-white group-hover:bg-gold-400 transition-colors rounded-full block" />
                <span className="w-7 h-[2px] bg-white group-hover:bg-gold-400 transition-colors rounded-full block" />
              </button>
            </div>

          </div>
        </div>

        {/* Slide-Over Navigation Drawer */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 animate-fadeIn">
            {/* Frosted Dark Backdrop */}
            <div 
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-[#030611]/85 backdrop-blur-md transition-opacity cursor-pointer"
            />

            {/* Slide-out Drawer Panel */}
            <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm sm:max-w-md bg-[#050b1d] border-l border-gold-500/30 shadow-[0_0_60px_rgba(2,5,18,0.95)] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10">
              
              {/* Drawer Top Header */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-navy-700/60 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-gold-300 via-gold-500 to-amber-700 p-[1.5px] shadow-gold-glow flex-shrink-0">
                      <div className="w-full h-full bg-[#050a1a] rounded-[9.5px] flex items-center justify-center border border-gold-500/30">
                        <span className="font-extrabold text-[10px] tracking-wider bg-gradient-to-br from-white via-gold-300 to-gold-500 bg-clip-text text-transparent font-sans">
                          MYA
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-bold tracking-wider text-white uppercase font-sans">
                        MakeMyAim
                      </span>
                      <span className="text-[9px] tracking-[0.25em] text-gold-400 font-mono uppercase -mt-0.5">
                        Venture Capital
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-xl bg-navy-900 border border-gold-500/30 text-gold-400 hover:text-white hover:border-gold-400 transition-colors"
                    aria-label="Close Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links inside Drawer */}
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="p-3.5 rounded-xl bg-navy-900/60 hover:bg-navy-800/90 border border-navy-700/60 hover:border-gold-500/50 transition-all flex items-center justify-between group shadow-sm"
                    >
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="text-[10px] font-mono text-gold-400 font-bold">{link.num}</span>
                          <span className="text-sm font-semibold text-white group-hover:text-gold-300 transition-colors">
                            {link.name}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 pl-6 font-light">
                          {link.desc}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom Actions & Footer */}
              <div className="pt-6 mt-6 border-t border-navy-700/60 space-y-4">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenPitch();
                  }}
                  className="w-full py-4 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 hover:from-gold-300 hover:to-gold-500 text-slate-950 rounded-sm text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-gold-glow active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Pitch Your Startup / Idea</span>
                </button>

                <div className="text-center space-y-1">
                  <div className="text-[10px] font-mono text-gold-400/90 uppercase tracking-widest">
                    Indore, Madhya Pradesh • Pan-India Reach
                  </div>
                  <div className="text-[10px] text-slate-500">
                    © 2026 MakeMyAim Capital • Funding & Financial Support
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </header>
    </>
  );
}
