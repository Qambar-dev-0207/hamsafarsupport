import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, Clock, ShieldAlert, Navigation } from 'lucide-react';

export const CrisisContact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-28 md:py-40 bg-[#F0F4F1] text-[#542437] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#ED8584]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#B8839F]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#ED8584] bg-white border border-[#ED8584]/30 px-4 py-1.5 rounded-full shadow-2xs mb-3">
            <ShieldAlert className="w-4 h-4 text-[#ED8584]" />
            <span>{t.contactTag}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#542437] leading-[0.98] mb-3">
            {t.contactTitle}
          </h2>
          <p className="text-lg sm:text-xl text-[#542437]/80 font-normal">
            {t.contactSubtitle}
          </p>
        </div>

        {/* Redesigned Open Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: 24/7 Crisis Helpline (Clean White Bento Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white text-[#542437] p-8 sm:p-12 rounded-3xl shadow-xl border-2 border-[#ED8584]/40 hover:border-[#ED8584] transition-all flex flex-col justify-between space-y-8 relative overflow-hidden"
          >
            <div className="space-y-6">
              {/* Live Badge */}
              <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#ED8584]/15 border border-[#ED8584]/30 text-[#ED8584] font-black text-xs uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ED8584] animate-ping" />
                <span>{t.helplineHeader}</span>
              </div>

              <div>
                <div className="font-display text-4xl sm:text-5xl font-black text-[#542437] tracking-tight mb-2">
                  +91 98390 12345
                </div>
                <div className="text-sm font-semibold text-[#542437]/80">
                  Landline: +91 (0522) 233 4455
                </div>
              </div>

              {/* Redesigned Helpline Call Button */}
              <a
                href="tel:+919839012345"
                className="flex items-center justify-center space-x-3 w-full py-4 rounded-full bg-[#ED8584] hover:bg-[#E06F6E] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>24/7 HELPLINE: CALL NOW</span>
              </a>
            </div>

            {/* Office Hours Container */}
            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-[#F0F4F1] border border-[#B8839F]/30 text-[#542437]">
              <Clock className="w-6 h-6 text-[#ED8584] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-extrabold text-[#542437] mb-1">{t.hoursHeader}</div>
                <div className="text-xs text-[#542437]/80 font-normal">{t.hoursText}</div>
              </div>
            </div>

          </motion.div>

          {/* Right Card: HQ Address & Sitapur Unit (Clean White Bento Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white text-[#542437] p-8 sm:p-12 rounded-3xl shadow-xl border-2 border-[#B8839F]/30 hover:border-[#B8839F] transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#542437] text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-[#ED8584]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black text-[#542437] mb-2">
                    {t.addressHeader}
                  </h3>
                  <p className="text-base text-[#542437]/85 leading-relaxed font-normal">
                    {t.addressText}
                  </p>
                  
                  {/* Additional Unit Badge */}
                  <div className="mt-3 inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#ED8584]/15 text-[#542437] border border-[#ED8584]/30 text-xs font-bold uppercase tracking-wider">
                    <span>{t.additionalUnit}</span>
                  </div>
                </div>
              </div>

              {/* Map & Directions Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#B8839F]/30 bg-[#F0F4F1] p-6 text-center space-y-4 shadow-inner">
                <div className="w-10 h-10 rounded-full bg-[#ED8584] text-white flex items-center justify-center mx-auto shadow-md">
                  <Navigation className="w-5 h-5" />
                </div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#542437]">
                  Sector A, Mahanagar, Lucknow
                </div>
                <a
                  href="https://maps.google.com/?q=HUMSAFAR+Support+Centre+Lucknow"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#542437] hover:bg-[#3D1A28] text-white text-xs font-black uppercase tracking-wider transition-all shadow-sm hover:scale-102"
                >
                  <span>{t.getDirections}</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#B8839F]/20 text-xs text-[#542437]/70 flex flex-wrap items-center justify-between gap-2 font-medium">
              <span>Registered Trust (2008) • Lucknow</span>
              <span>Official Web: humsafarindia.org</span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
