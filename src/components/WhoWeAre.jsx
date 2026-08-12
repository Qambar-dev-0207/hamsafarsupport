import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Building2, MapPin, Award, Users2, Scale, HandHeart } from 'lucide-react';

export const WhoWeAre = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28 md:py-40 bg-[#F0F4F1] text-[#542437] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#B8839F]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#542437] bg-white border border-[#B8839F]/40 px-4 py-1.5 rounded-full shadow-2xs mb-3">
            <Shield className="w-4 h-4 text-[#ED8584]" />
            <span>{t.aboutTag}</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#542437] leading-[1.05]">
            {t.aboutTitle}
          </h2>
        </div>

        {/* 12-Column Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Bento Card 1 (7-Col): Deep Plum History & Mandate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#542437] text-[#F0F4F1] p-8 sm:p-12 rounded-3xl shadow-xl border-2 border-[#B8839F]/30 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#ED8584]">
                Founding & Registration (2003 / 2008)
              </div>
              <p className="text-lg sm:text-xl text-[#F0F4F1]/95 leading-relaxed font-normal">
                {t.aboutPara1}
              </p>
              <p className="text-base sm:text-lg text-[#F0F4F1]/80 leading-relaxed font-normal">
                {t.aboutPara2}
              </p>
            </div>

            {/* Regional Coverage Pills */}
            <div className="pt-4 border-t border-[#B8839F]/30 space-y-2.5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#ED8584]">
                {t.aboutDistrictsLabel}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Lucknow Division', 'Hardoi District', 'Unnao District', 'Sitapur District'].map((district, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#B8839F]/30 text-[#F0F4F1] border border-[#B8839F]/50 text-xs font-bold"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#ED8584]" />
                    <span>{district}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2 (5-Col): Rose Mauve Govt Partnership Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 bg-[#B8839F] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between space-y-6 border-2 border-white/20"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center border border-white/30">
                <HandHeart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-2xl font-extrabold text-white">
                {t.aboutGovtPartnerTitle}
              </h3>
              <p className="text-base text-white/90 leading-relaxed font-normal">
                {t.aboutGovtPartnerDesc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/15 border border-white/20 text-xs font-bold text-white uppercase tracking-wider">
              Sitapur District Dedicated Unit Active • UP Dept of Women & Child Welfare
            </div>
          </motion.div>

        </div>

        {/* 4 Stat Bento Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#ED8584] text-white shadow-lg border-2 border-[#ED8584]/50 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-1">{t.aboutStat1}</div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-white/90">{t.aboutStat1Label}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#542437] text-[#F0F4F1] shadow-lg border-2 border-[#B8839F]/30 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-[#ED8584]/20 flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5 text-[#ED8584]" />
            </div>
            <div>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#ED8584] mb-1">{t.aboutStat2}</div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#F0F4F1]/90">{t.aboutStat2Label}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white text-[#542437] shadow-md border-2 border-[#B8839F]/40 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-[#B8839F]/15 flex items-center justify-center mb-4">
              <Users2 className="w-5 h-5 text-[#542437]" />
            </div>
            <div>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#542437] mb-1">{t.aboutStat3}</div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#B8839F]">{t.aboutStat3Label}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-3xl bg-[#B8839F] text-white shadow-lg border-2 border-white/30 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-1">{t.aboutStat4}</div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-white/90">{t.aboutStat4Label}</div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
