import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThesisSection from './components/ThesisSection';
import FinancialSupportSection from './components/FinancialSupportSection';
import PortfolioSection from './components/PortfolioSection';
import ValuationSimulator from './components/ValuationSimulator';
import TeamSection from './components/TeamSection';
import InsightsSection from './components/InsightsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FounderPitchModal from './components/FounderPitchModal';
import { Send } from 'lucide-react';

export default function App() {
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [pitchData, setPitchData] = useState(null);
  const [selectedSector, setSelectedSector] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenPitch = (initialData = null) => {
    setPitchData(initialData);
    setIsPitchOpen(true);
  };

  const handleSelectSectorFromThesis = (sectorKey) => {
    setSelectedSector(sectorKey);
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-slate-100 flex flex-col font-sans selection:bg-gold-500/20 selection:text-gold-200 theme-midnight overflow-x-hidden w-full max-w-full">
      
      {/* Navigation Header */}
      <Navbar 
        onOpenPitch={() => handleOpenPitch(null)} 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero 
          onOpenPitch={() => handleOpenPitch(null)} 
          onOpenThesis={() => {
            const el = document.getElementById('thesis');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <ThesisSection 
          onSelectSectorFilter={handleSelectSectorFromThesis} 
        />

        <FinancialSupportSection 
          onOpenPitch={() => handleOpenPitch(null)} 
        />

        <PortfolioSection 
          selectedSector={selectedSector} 
          setSelectedSector={setSelectedSector} 
          onOpenPitch={() => handleOpenPitch(null)}
        />

        <ValuationSimulator 
          onOpenPitchWithData={(data) => handleOpenPitch(data)} 
        />

        <TeamSection 
          onOpenPitch={() => handleOpenPitch(null)} 
        />

        <InsightsSection />

        <FaqSection 
          onOpenPitch={() => handleOpenPitch(null)} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenPitch={() => handleOpenPitch(null)} 
      />

      {/* Pitch Modal */}
      <FounderPitchModal 
        isOpen={isPitchOpen} 
        onClose={() => setIsPitchOpen(false)} 
        initialData={pitchData}
      />

      {/* Floating Pitch Button (Desktop only) */}
      <button
        onClick={() => handleOpenPitch(null)}
        className="fixed bottom-6 right-6 z-40 px-5 py-3 rounded-sm bg-gradient-to-r from-gold-400 via-gold-500 to-amber-600 hover:from-gold-300 hover:to-gold-500 text-slate-950 font-bold text-xs uppercase tracking-[0.18em] shadow-gold-glow hover:scale-105 active:scale-95 transition-all hidden lg:flex items-center gap-2 group"
        title="Submit Pitch"
      >
        <Send className="w-3.5 h-3.5 text-slate-950" />
        <span>Pitch MakeMyAim</span>
      </button>

    </div>
  );
}
