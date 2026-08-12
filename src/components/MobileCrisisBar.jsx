import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, ShieldAlert } from 'lucide-react';

export const MobileCrisisBar = () => {
  const { t } = useLanguage();

  const handleQuickExit = () => {
    window.location.replace('https://www.google.com/search?q=weather+today');
  };

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#F0F4F1]/95 backdrop-blur-lg border-t border-[#B8839F]/30 shadow-2xl flex items-center justify-between gap-2">
      <a
        href="tel:+919839012345"
        className="flex-1 py-3 px-4 rounded-full bg-[#ED8584] active:bg-[#E06F6E] text-white font-extrabold text-xs flex items-center justify-center space-x-2 shadow-lg tracking-wider uppercase"
      >
        <Phone className="w-4 h-4 fill-white" />
        <span>24/7 HELPLINE: CALL NOW</span>
      </a>

      <button
        onClick={handleQuickExit}
        className="py-3 px-3.5 rounded-full bg-white text-[#542437] border border-[#B8839F]/50 active:bg-gray-100 font-extrabold text-[10px] flex items-center space-x-1 uppercase tracking-wider"
        title="Quick Safe Exit"
      >
        <ShieldAlert className="w-3.5 h-3.5 text-[#ED8584]" />
        <span>SAFE EXIT</span>
      </button>
    </div>
  );
};
