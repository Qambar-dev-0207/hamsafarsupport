import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Phone, ChevronDown, HeartHandshake, Sparkles, Building2, Scale } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#F0F4F1] text-[#542437]">
      
      {/* Ambient Background Soft Glow Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-[#B8839F]/18 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#ED8584]/18 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[78vh]">
        
        {/* Open Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full my-auto">
          
          {/* Left Column: Refined Headlines & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Top Category Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white border border-[#B8839F]/35 text-[#542437] text-xs font-extrabold tracking-widest uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#ED8584] animate-ping shrink-0" />
              <span>CRISIS INTERVENTION & RIGHTS CENTRE • LUCKNOW</span>
            </div>

            {/* Proportional Display Headline */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#542437] leading-[1.1]">
              <span>{t.heroTitleLine1} </span>
              <span className="text-[#ED8584] block sm:inline font-black mt-1 sm:mt-0">{t.heroTitleLine2}</span>
            </h1>

            {/* Mission Subtitle */}
            <p className="max-w-xl text-base sm:text-lg text-[#542437]/85 leading-relaxed font-normal">
              {t.heroSubtitle}
            </p>

            {/* Hero Action Pill Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 w-full sm:w-auto">
              
              {/* Primary 24/7 HELPLINE SUPPORT Pill Button */}
              <a
                href="tel:+919839012345"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#ED8584] hover:bg-[#E06F6E] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-2.5 group"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>24/7 HELPLINE SUPPORT</span>
              </a>

              {/* Secondary EXPLORE OUR WORK Pill Button */}
              <a
                href="#how-we-help"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#F0F4F1] text-[#542437] border-2 border-[#B8839F]/30 hover:border-[#ED8584]/60 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-2"
              >
                <span>EXPLORE OUR WORK</span>
              </a>
            </div>

            {/* Live Metrics Row */}
            <div className="pt-4 border-t border-[#B8839F]/20 flex flex-wrap items-center gap-3 text-xs font-extrabold text-[#542437]/90">
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-[#B8839F]/30 shadow-2xs">
                <Scale className="w-3.5 h-3.5 text-[#ED8584]" />
                <span>10,000+ Cases Intervened</span>
              </div>

              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-[#B8839F]/30 shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-[#ED8584]" />
                <span>53 Neighborhoods</span>
              </div>

              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-[#B8839F]/30 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#ED8584]" />
                <span>42 Colleges & Schools</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Enhanced Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative p-2.5 rounded-3xl bg-white border-2 border-[#B8839F]/30 shadow-xl overflow-hidden group hover:border-[#ED8584]/50 transition-all duration-300">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] max-h-[440px]">
                <img
                  src="/images/humsafar_hero_hands_together.jpg"
                  alt="HUMSAFAR Hands Together Community Unity"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#542437]/80 via-transparent to-transparent opacity-90" />

                {/* Floating Highlight Pill */}
                <div className="absolute bottom-5 left-5 right-5 flex justify-center z-10">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#ED8584] text-white text-xs font-black uppercase tracking-wider shadow-lg backdrop-blur-md">
                    <HeartHandshake className="w-3.5 h-3.5 text-white" />
                    <span>Hands Together in Unity • Humsafar</span>
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
          className="mt-8 text-[#ED8584] hover:text-[#542437] transition-colors animate-bounce"
          title="Scroll Down"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.a>

      </div>
    </section>
  );
};
