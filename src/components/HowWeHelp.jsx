import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { PhoneCall, FileSearch, Scale, HeartHandshake, Stethoscope, GraduationCap, Sparkles } from 'lucide-react';

const stepIcons = [
  PhoneCall,
  FileSearch,
  Scale,
  HeartHandshake,
  Stethoscope,
  GraduationCap,
  Sparkles
];

const stepPhotos = {
  2: '/images/humsafar_legal_counseling_real.png',
  5: '/images/humsafar_youth_tarang_real.png'
};

const cardThemes = [
  "bg-[#542437] text-[#F0F4F1] border-2 border-[#B8839F]/30 shadow-xl", // Step 1: Deep Plum
  "bg-[#B8839F] text-white border-2 border-white/20 shadow-xl",       // Step 2: Rose Mauve
  "bg-white text-[#542437] border-2 border-[#ED8584] shadow-lg",       // Step 3: White + Coral Border (Legal)
  "bg-[#ED8584] text-white border-2 border-white/20 shadow-xl",       // Step 4: Coral Blush
  "bg-[#542437] text-[#F0F4F1] border-2 border-[#B8839F]/30 shadow-xl", // Step 5: Deep Plum
  "bg-white text-[#542437] border-2 border-[#B8839F] shadow-lg",        // Step 6: White + Mauve Border (Youth)
  "bg-[#B8839F]/20 text-[#542437] border-2 border-[#ED8584] shadow-md" // Step 7: Mauve Tint
];

export const HowWeHelp = () => {
  const { t } = useLanguage();

  return (
    <section id="how-we-help" className="py-32 md:py-48 bg-[#F0F4F1] text-[#542437] relative overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-[#B8839F]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#ED8584]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#542437] bg-white border border-[#B8839F]/30 px-4 py-1.5 rounded-full shadow-2xs mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ED8584] animate-ping" />
            <span>{t.processTag}</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#542437] leading-[0.98] mb-6">
            {t.processTitle}
          </h2>

          <p className="text-lg sm:text-xl text-[#542437]/80 leading-relaxed font-normal">
            {t.processSubtitle}
          </p>
        </div>

        {/* 7-Step Sequence Bento Cards */}
        <div className="relative space-y-8">
          
          {t.steps.map((item, index) => {
            const Icon = stepIcons[index] || Sparkles;
            const photoSrc = stepPhotos[index];
            const themeClass = cardThemes[index] || "bg-white text-[#542437]";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.04 }}
                className={`group relative p-8 sm:p-12 rounded-3xl transition-all duration-300 ${themeClass}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Step Numeral & Icon */}
                  <div className="lg:col-span-4 flex items-center space-x-6">
                    <span className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-none tracking-tighter opacity-90">
                      {item.step}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center border border-white/30 shrink-0 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Description & Photorealistic Image */}
                  <div className={`${photoSrc ? 'lg:col-span-5' : 'lg:col-span-8'} space-y-3`}>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg opacity-90 leading-relaxed font-normal">
                      {item.desc}
                    </p>

                    {index === 0 && (
                      <div className="pt-2">
                        <a
                          href="tel:+919839012345"
                          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#ED8584] hover:underline transition-colors bg-white px-4 py-2 rounded-full shadow-sm"
                        >
                          <span>24/7 Helpline: +91 98390 12345</span>
                          <span>→</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Photorealistic Photo Card */}
                  {photoSrc && (
                    <div className="lg:col-span-3 flex justify-center">
                      <div className="p-2 bg-white rounded-2xl shadow-lg border border-[#B8839F]/30 overflow-hidden group">
                        <img
                          src={photoSrc}
                          alt={item.title}
                          className="w-full max-w-[240px] h-[180px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
