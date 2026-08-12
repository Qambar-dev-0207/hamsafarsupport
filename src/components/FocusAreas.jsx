import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Users, Rainbow, Briefcase, ChevronRight } from 'lucide-react';

const focusIcons = [Heart, Users, Rainbow, Briefcase];

const cardStyles = [
  "bg-[#542437] text-[#F0F4F1] border-2 border-[#B8839F]/30 shadow-xl", // Card 1: Deep Plum
  "bg-[#B8839F] text-white border-2 border-white/20 shadow-xl",       // Card 2: Rose Mauve
  "bg-white text-[#542437] border-2 border-[#ED8584] shadow-lg",       // Card 3: White + Coral Border
  "bg-[#ED8584] text-white border-2 border-white/20 shadow-xl"        // Card 4: Coral Blush
];

export const FocusAreas = () => {
  const { t } = useLanguage();

  return (
    <section id="focus-areas" className="py-28 md:py-40 bg-[#F0F4F1] text-[#542437]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#542437] bg-white border border-[#B8839F]/30 px-4 py-1.5 rounded-full shadow-2xs mb-3">
            <span>{t.focusTag}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#542437] leading-tight">
            {t.focusTitle}
          </h2>
        </div>

        {/* 4 Multi-Color Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.focusCards.map((card, index) => {
            const Icon = focusIcons[index] || Heart;
            const styleClass = cardStyles[index] || "bg-white text-[#542437]";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className={`group p-8 sm:p-10 rounded-3xl transition-all duration-300 flex flex-col justify-between ${styleClass}`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 border border-white/30 shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
                    {card.title}
                  </h3>

                  <p className="text-base sm:text-lg opacity-90 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-white/20 flex items-center text-xs font-extrabold uppercase tracking-wider">
                  <span>Explore specialization details</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
