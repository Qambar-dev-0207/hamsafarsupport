import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TrendingUp, Scale, Building2, Users2, Award } from 'lucide-react';

export const ImpactNumbers = () => {
  const { t } = useLanguage();

  return (
    <section id="impact" className="py-28 md:py-40 bg-[#F0F4F1] text-[#542437] border-y border-[#B8839F]/25 relative overflow-hidden">
      
      {/* Glow highlight */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#ED8584]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#542437] bg-white border border-[#B8839F]/30 px-4 py-1.5 rounded-full shadow-2xs mb-4">
            <TrendingUp className="w-4 h-4 text-[#ED8584]" />
            <span>{t.impactTag}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#542437]">
            {t.impactTitle}
          </h2>
          <p className="text-lg text-[#542437]/80 mt-3 font-normal">
            {t.impactSubtitle}
          </p>
        </div>

        {/* 4 Multi-Color Bento Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#542437] text-[#F0F4F1] border-2 border-[#B8839F]/30 shadow-xl flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#ED8584]/20 text-[#ED8584] flex items-center justify-center mb-6">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display text-5xl sm:text-6xl font-extrabold text-[#ED8584] mb-2">{t.aboutStat1}</div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#F0F4F1] mb-2">{t.aboutStat1Label}</div>
              <div className="text-xs text-[#F0F4F1]/80 leading-relaxed font-normal">Legal court support, paralegal aid, medical assistance & crisis shelter.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#ED8584] text-white border-2 border-white/20 shadow-xl flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display text-5xl sm:text-6xl font-extrabold text-white mb-2">{t.aboutStat2}</div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-white mb-2">{t.aboutStat2Label}</div>
              <div className="text-xs text-white/90 leading-relaxed font-normal">Active community safety committees and Anganwadi worker training.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#B8839F] text-white border-2 border-white/20 shadow-xl flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6">
              <Users2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-display text-5xl sm:text-6xl font-extrabold text-white mb-2">{t.aboutStat3}</div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-white mb-2">{t.aboutStat3Label}</div>
              <div className="text-xs text-white/90 leading-relaxed font-normal">'Yuva Tarang' gender rights forums in 42 schools & colleges.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-3xl bg-white text-[#542437] border-2 border-[#ED8584] shadow-lg flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#ED8584]/15 text-[#ED8584] flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display text-5xl sm:text-6xl font-extrabold text-[#542437] mb-2">500+</div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#ED8584] mb-2">Friends of HUMSAFAR</div>
              <div className="text-xs text-[#542437]/80 leading-relaxed font-normal">Pro-bono lawyers, doctors, educators, retired judges & advocates.</div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
