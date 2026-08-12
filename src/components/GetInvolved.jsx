import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { UserPlus, Award, Building, Heart, CheckCircle2 } from 'lucide-react';

export const GetInvolved = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'volunteers',
      label: t.tabVolunteers,
      icon: UserPlus,
      content: {
        heading: "Join as a Youth Leader or Community Volunteer",
        desc: "Participate in neighborhood awareness drives across 53 Lucknow neighborhoods, assist youth forums in 42 schools & colleges, or intern with our casework unit.",
        points: [
          "Field exposure in community organizing and paralegal support",
          "Structured training on gender rights, legal frameworks, and POSH",
          "Certificate of engagement & internship recommendations"
        ]
      }
    },
    {
      id: 'professionals',
      label: t.tabProfessionals,
      icon: Award,
      content: {
        heading: t.friendsTitle,
        desc: t.friendsDesc,
        points: [
          "Lawyers: Provide pro-bono court representation & DV Act filing guidance",
          "Doctors & Psychologists: Offer trauma-informed care and medical assistance",
          "Educators & Principals: Facilitate Yuva Tarang clubs in institutional spaces"
        ]
      }
    },
    {
      id: 'partners',
      label: t.tabPartners,
      icon: Building,
      content: {
        heading: "Partner with HUMSAFAR for Anganwadi & POSH Audits",
        desc: "We partner with UP Dept of Women & Child Welfare under ICDS to train Anganwadi workers, and deliver corporate POSH compliance training.",
        points: [
          "Full POSH Act 2013 compliance and training modules",
          "Feminist leadership workshops for students and corporate teams",
          "ICDS Anganwadi capacity building across Lucknow division"
        ]
      }
    },
    {
      id: 'donors',
      label: t.tabDonors,
      icon: Heart,
      content: {
        heading: "Fund Survivor Rehabilitation & Emergency Legal Aid",
        desc: "Your support directly covers court filing fees, medical emergency costs, shelter provision, and livelihood micro-grants for survivors.",
        points: [
          "Transparent governance & 20+ years of audited non-profit Trust operations",
          "Direct impact on domestic violence survivor rehabilitation",
          "CSR partnership opportunities with full reporting"
        ]
      }
    }
  ];

  return (
    <section id="get-involved" className="py-28 md:py-40 bg-[#F0F4F1] text-[#542437] border-t border-[#B8839F]/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#542437] bg-white border border-[#B8839F]/30 px-4 py-1.5 rounded-full shadow-2xs mb-4">
            <span>{t.involvedTag}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#542437]">
            {t.involvedTitle}
          </h2>
          <p className="text-lg text-[#542437]/80 mt-3 font-normal">
            {t.involvedSubtitle}
          </p>
        </div>

        {/* Multi-Color Tab Row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center space-x-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all ${
                  isActive
                    ? 'bg-[#ED8584] text-white shadow-lg scale-105 border-2 border-white'
                    : 'bg-white text-[#542437] hover:bg-[#FAF8F4] border border-[#B8839F]/30 shadow-2xs'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#ED8584]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Bento Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto p-8 sm:p-14 rounded-3xl bg-[#542437] text-white border-2 border-[#B8839F]/30 shadow-2xl space-y-8"
        >
          <div>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[#ED8584] mb-3">
              {tabs[activeTab].content.heading}
            </h3>
            <p className="text-base sm:text-lg text-[#F0F4F1]/90 leading-relaxed font-normal">
              {tabs[activeTab].content.desc}
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {tabs[activeTab].content.points.map((point, pIdx) => (
              <div key={pIdx} className="flex items-start space-x-3.5">
                <CheckCircle2 className="w-6 h-6 text-[#ED8584] shrink-0 mt-0.5" />
                <span className="text-base font-bold text-[#F0F4F1]">{point}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-[#B8839F]/30 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-bold text-[#B8839F] uppercase tracking-widest">
              HUMSAFAR Trust Registration • Lucknow, India
            </span>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-[#ED8584] hover:bg-[#E06F6E] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all"
            >
              Get In Touch With Our Team →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
