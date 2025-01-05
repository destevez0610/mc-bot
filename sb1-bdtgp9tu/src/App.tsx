import React, { useState } from 'react';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Features } from './components/features/Features';
import { HowItWorks } from './components/how-it-works/HowItWorks';
import { PricingSection } from './components/pricing/PricingSection';
import { Footer } from './components/footer/Footer';
import { AnalysisModal } from './components/analysis/AnalysisModal';

export function App() {
  const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState(false);

  const handleAnalyze = () => {
    setIsAnalysisModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <AnalysisModal
        isOpen={isAnalysisModalOpen}
        onClose={() => setIsAnalysisModalOpen(false)}
        onComplete={() => setIsAnalysisModalOpen(false)}
      />
      <Header onAnalyze={handleAnalyze} />
      <Hero onAnalyze={handleAnalyze} />
      <Features />
      <HowItWorks />
      <PricingSection />
      <Footer />
    </div>
  );
}