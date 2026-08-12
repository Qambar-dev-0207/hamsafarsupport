import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhoWeAre } from './components/WhoWeAre';
import { HowWeHelp } from './components/HowWeHelp';
import { ImpactNumbers } from './components/ImpactNumbers';
import { FocusAreas } from './components/FocusAreas';
import { GetInvolved } from './components/GetInvolved';
import { CrisisContact } from './components/CrisisContact';
import { Footer } from './components/Footer';
import { MobileCrisisBar } from './components/MobileCrisisBar';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F0F4F1] text-[#542437] font-sans relative pb-16 sm:pb-0">
        <Navbar />
        <main>
          <HeroSection />
          <WhoWeAre />
          <HowWeHelp />
          <ImpactNumbers />
          <FocusAreas />
          <GetInvolved />
          <CrisisContact />
        </main>
        <Footer />
        <MobileCrisisBar />
      </div>
    </LanguageProvider>
  );
}
