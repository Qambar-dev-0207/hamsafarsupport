import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#542437] text-white border-t border-[#B8839F]/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Logo Mark & Name */}
          <div className="flex items-center space-x-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#ED8584] text-white flex items-center justify-center p-2 shadow-md shrink-0">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="#542437"
                />
                <path
                  d="M12 7c-1.5 0-3 1.2-3 2.5 0 2 3 4.5 3 4.5s3-2.5 3-4.5C15 8.2 13.5 7 12 7z"
                  fill="#F0F4F1"
                />
              </svg>
            </div>
            <div>
              <span className="font-display font-black text-xl text-white block leading-tight">
                Humsafar
              </span>
              <span className="text-xs text-[#ED8584] block font-extrabold uppercase tracking-wider">
                Support Centre for Women, Youth & Queer Persons
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-white/90">
            <a href="#about" className="hover:text-[#ED8584] transition-colors">{t.navAbout}</a>
            <a href="#how-we-help" className="hover:text-[#ED8584] transition-colors">{t.navProcess}</a>
            <a href="#impact" className="hover:text-[#ED8584] transition-colors">{t.navImpact}</a>
            <a href="#focus-areas" className="hover:text-[#ED8584] transition-colors">{t.navFocus}</a>
            <a href="#get-involved" className="hover:text-[#ED8584] transition-colors">{t.getInvolved}</a>
            <a href="#contact" className="hover:text-[#ED8584] transition-colors">{t.navContact}</a>
          </nav>

        </div>

        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70 text-center sm:text-left font-medium">
          <div>
            © {new Date().getFullYear()} HUMSAFAR Trust. Registered 2008, Lucknow, Uttar Pradesh.
          </div>
          <div className="flex items-center space-x-2 text-[#ED8584] font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#ED8584]" />
            <span>{t.phase2Note}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
