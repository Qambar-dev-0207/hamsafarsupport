import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Phone, ChevronDown, HeartHandshake, Sparkles, Building2, Scale } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#F0F4F1] text-[#542437]">
      
      {/* Ambient Background Soft Glow Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-[#B8839F]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#ED8584]/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[82vh]">
        
        {/* Open Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full my-auto">
          
          {/* Left Column: Headlines & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left space-y-7"
          >
            {/* Giant Open Display Headline */}
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#542437] leading-[0.98]">
              <span className="block">{t.heroTitleLine1}</span>
              <span className="block text-[#ED8584] mt-2 font-black">{t.heroTitleLine2}</span>
            </h1>

            {/* Mission Subtitle */}
            <p className="max-w-2xl text-lg sm:text-xl text-[#542437]/85 leading-relaxed font-normal">
              {t.heroSubtitle}
            </p>

            {/* Hero Pill Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-3 w-full sm:w-auto">
              
              {/* Primary 24/7 HELPLINE SUPPORT Pill Button */}
              <a
                href="tel:+919839012345"
                className="w-full sm:w-auto px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-[#ED8584] hover:bg-[#E06F6E] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-3 group"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>24/7 HELPLINE SUPPORT</span>
              </a>

              {/* Secondary EXPLORE OUR WORK Pill Button */}
              <a
                href="#how-we-help"
                className="w-full sm:w-auto px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-white hover:bg-[#F0F4F1] text-[#542437] border-2 border-[#B8839F]/30 hover:border-[#ED8584]/60 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-2"
              >
                <span>EXPLORE OUR WORK</span>
              </a>
            </div>

            {/* Live Metrics Row */}
            <div className="pt-5 border-t border-[#B8839F]/20 flex flex-wrap items-center gap-4 text-xs font-extrabold text-[#542437]/90">
              <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B8839F]/30 shadow-2xs">
                <Scale className="w-4 h-4 text-[#ED8584]" />
                <span>10,000+ Cases Intervened</span>
              </div>

              <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B8839F]/30 shadow-2xs">
                <Building2 className="w-4 h-4 text-[#ED8584]" />
                <span>53 Neighborhoods</span>
              </div>

              <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B8839F]/30 shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#ED8584]" />
                <span>42 Colleges & Schools</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Photorealistic Hero Photo Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative p-2 rounded-3xl bg-white border-2 border-[#B8839F]/30 shadow-2xl overflow-hidden group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[500px]">
                <img
                  src="/images/humsafar_hero_real_people.png"
                  alt="HUMSAFAR Real People Community Portrait"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#542437]/80 via-transparent to-transparent opacity-90" />

                {/* Floating Highlight Pill */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-center z-10">
                  <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#ED8584] text-white text-xs font-black uppercase tracking-wider shadow-lg backdrop-blur-md">
                    <HeartHandshake className="w-4 h-4 text-white" />
                    <span>Humsafar Support Centre • Lucknow</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Down Arrow */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 text-[#ED8584] hover:text-[#542437] transition-colors animate-bounce"
          title="Scroll Down"
        >
          <ChevronDown className="w-9 h-9" />
        </motion.a>

      </div>
    </section>
  );
};
