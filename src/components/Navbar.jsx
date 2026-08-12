import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, ShieldAlert, Globe, Menu, X } from 'lucide-react';

// Custom Elegant NGO Logo Symbol for Humsafar Support Centre
const HumsafarLogoMark = () => (
  <div className="relative w-10 h-10 rounded-xl bg-[#542437] flex items-center justify-center shadow-md p-2 border border-[#B8839F]/30 shrink-0">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="#ED8584"
      />
      <path
        d="M12 7c-1.5 0-3 1.2-3 2.5 0 2 3 4.5 3 4.5s3-2.5 3-4.5C15 8.2 13.5 7 12 7z"
        fill="#F0F4F1"
        opacity="0.9"
      />
    </svg>
  </div>
);

export const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuickExit = () => {
    window.location.replace('https://www.google.com/search?q=weather+today');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F0F4F1]/95 backdrop-blur-md py-3 shadow-md border-b border-[#B8839F]/20' : 'bg-transparent py-4 sm:py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* New Humsafar Support Centre Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <HumsafarLogoMark />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl text-[#542437] tracking-tight leading-tight group-hover:text-[#ED8584] transition-colors">
                Humsafar
              </span>
              <span className="text-xs font-semibold text-[#B8839F] tracking-wide leading-none">
                Support Centre
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-extrabold uppercase tracking-widest text-[#542437]/85">
            <a href="#about" className="hover:text-[#ED8584] transition-colors py-1 relative group">
              <span>{t.navAbout}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ED8584] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#how-we-help" className="hover:text-[#ED8584] transition-colors py-1 relative group">
              <span>{t.navProcess}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ED8584] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#impact" className="hover:text-[#ED8584] transition-colors py-1 relative group">
              <span>{t.navImpact}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ED8584] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#focus-areas" className="hover:text-[#ED8584] transition-colors py-1 relative group">
              <span>{t.navFocus}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ED8584] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#contact" className="hover:text-[#ED8584] transition-colors py-1 relative group">
              <span>{t.navContact}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ED8584] group-hover:w-full transition-all duration-300" />
            </a>
          </nav>

          {/* Redesigned Pill Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white border border-[#B8839F]/40 text-xs font-bold text-[#542437] hover:border-[#ED8584] hover:text-[#ED8584] shadow-xs transition-all"
              title="Toggle Language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5 text-[#ED8584]" />
              <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            {/* Quick Safe Exit Button */}
            <button
              onClick={handleQuickExit}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white border border-[#B8839F]/40 text-xs font-bold text-[#542437] hover:bg-[#542437] hover:text-white shadow-xs transition-all"
              title={t.quickExitTooltip}
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#ED8584]" />
              <span>{t.quickExit}</span>
            </button>

            {/* Redesigned 24/7 Helpline Pill Button */}
            <a
              href="tel:+919839012345"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#ED8584] hover:bg-[#E06F6E] text-white text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all active:translate-y-0"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>24/7 HELPLINE</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={handleQuickExit}
              className="px-3 py-1.5 rounded-full bg-[#542437] text-white font-extrabold text-[10px] flex items-center space-x-1"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#ED8584]" />
              <span>EXIT</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#542437] hover:text-[#ED8584] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F0F4F1] border-b border-[#B8839F]/30 px-6 pt-5 pb-8 shadow-2xl space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-[#B8839F]/20">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-xs font-bold text-[#542437] px-4 py-2 rounded-full bg-white border border-[#B8839F]/30"
            >
              <Globe className="w-4 h-4 text-[#ED8584]" />
              <span>Language: {lang === 'en' ? 'हिन्दी में पढ़ें' : 'Switch to English'}</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-3 text-base font-bold text-[#542437]">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#B8839F]/10">{t.navAbout}</a>
            <a href="#how-we-help" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#B8839F]/10">{t.navProcess}</a>
            <a href="#impact" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#B8839F]/10">{t.navImpact}</a>
            <a href="#focus-areas" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-[#B8839F]/10">{t.navFocus}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1">{t.navContact}</a>
          </nav>

          <div className="pt-2">
            <a
              href="tel:+919839012345"
              className="flex items-center justify-center space-x-2 w-full py-3.5 rounded-full bg-[#ED8584] text-white font-extrabold text-xs uppercase tracking-wider shadow-md"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>24/7 HELPLINE: +91 98390 12345</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
