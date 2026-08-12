import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Nav & Crisis Header
    emergencyHelp: "24/7 Helpline",
    quickExit: "Quick Exit",
    quickExitTooltip: "Instantly close this page for safety",
    getInvolved: "Get Involved",
    navAbout: "Who We Are",
    navProcess: "How We Help",
    navImpact: "Our Impact",
    navFocus: "Focus Areas",
    navContact: "Crisis Contact",
    
    // Hero Section
    heroBadge: "EST. NOV 2003 • TRUST REGISTERED 2008 • LUCKNOW",
    heroTitleLine1: "Holistic Response to",
    heroTitleLine2: "Gender & Human Rights Violations.",
    heroSubtitle: "HUMSAFAR is a registered crisis support centre in Lucknow providing 24/7 crisis response, paralegal aid, legal court support, medical care, counseling, shelter, and long-term rehabilitation for women, youth, and queer persons across Uttar Pradesh.",
    heroCrisisBtn: "24/7 Helpline Support",
    heroExploreBtn: "Explore Our Work",
    heroStatsPill: "10,000+ Cases Intervened Across 4 Districts",

    // Who We Are Section (Exact Research Data)
    aboutTag: "ABOUT HUMSAFAR TRUST",
    aboutTitle: "Over Two Decades of Grassroots Feminist Casework & Justice",
    aboutPara1: "Set up in Lucknow in November 2003 and formally registered as a Trust in 2008, HUMSAFAR works to ensure a holistic feminist response to discrimination and violence across gender, sexual spectrum, religion, caste, class, and ethnicity.",
    aboutPara2: "Managed by Trustees, experienced staff, and dedicated volunteers, HUMSAFAR operates across 53 neighborhoods and 42 schools & colleges in the Lucknow division (Lucknow, Hardoi, Unnao, Sitapur), alongside a dedicated unit in Sitapur district.",
    aboutStat1: "10,000+",
    aboutStat1Label: "Survivors Intervened",
    aboutStat2: "53",
    aboutStat2Label: "Lucknow Neighborhoods",
    aboutStat3: "42",
    aboutStat3Label: "Schools & Youth Clubs",
    aboutStat4: "20+",
    aboutStat4Label: "Years Active Service",
    aboutDistrictsLabel: "Primary Division Districts",
    aboutGovtPartnerTitle: "ICDS Anganwadi Partnership",
    aboutGovtPartnerDesc: "Official partner with UP Dept of Women & Child Welfare training Anganwadi workers under ICDS program on gender rights & violence prevention.",

    // How We Help (7 Step Curative & Preventive Methodology)
    processTag: "THE HUMSAFAR METHODOLOGY",
    processTitle: "Our 7-Step Support & Rehabilitation Framework",
    processSubtitle: "From emergency crisis triage to financial self-reliance, our casework unit guides survivors through a compassionate support loop.",
    steps: [
      {
        step: "01",
        title: "24/7 Crisis Intake & Triage Response",
        desc: "Immediate, confidential helpline response. When a survivor or witness calls, our casework team assesses safety, conducts risk triage, and initiates urgent protective action."
      },
      {
        step: "02",
        title: "Multi-Disciplinary Intake & Needs Assessment",
        desc: "Trained caseworkers conduct empathetic intake interviews to create an individualized recovery plan spanning legal, medical, psychological, and emergency housing support."
      },
      {
        step: "03",
        title: "Paralegal & Legal Court Representation",
        desc: "Empanelled lawyers and paralegals assist survivors in filing FIRs, obtaining Protection Orders under the Domestic Violence Act, securing maintenance, and representation in court."
      },
      {
        step: "04",
        title: "Psychosocial Counseling & Social Mediation",
        desc: "Feminist counseling services rebuild emotional agency and self-esteem. Where safe and appropriate, trained mediators conduct social and family negotiations."
      },
      {
        step: "05",
        title: "Medical Care Assistance & Emergency Shelter",
        desc: "Direct coordination with public medical centers for injury care, forensic documentation, and emergency shelter placement for survivors fleeing domestic violence."
      },
      {
        step: "06",
        title: "Youth Engagement via 'Yuva Tarang' Clubs",
        desc: "Prevention work in 42 educational institutions and 53 neighborhoods. Young leaders challenge gender norms, address harassment, and foster equal spaces."
      },
      {
        step: "07",
        title: "Livelihood Support & Independent Reintegration",
        desc: "Addressing economic vulnerability so survivors never feel forced to return to abuse. We facilitate vocational skill training, micro-grants, and ongoing monitoring."
      }
    ],

    // Impact Section
    impactTag: "OUR REACH & MILESTONES",
    impactTitle: "Transforming Lives Across Uttar Pradesh",
    impactSubtitle: "Quantifiable change built on trust, legal persistence, and relentless community presence.",

    // Focus Areas Section (Exact Research Specializations)
    focusTag: "OUR SPECIALTIES",
    focusTitle: "Core Focus Areas & Specializations",
    focusCards: [
      {
        title: "Women's Rights & Safety (VAW)",
        desc: "Comprehensive casework addressing Domestic Violence (DV Act), dowry harassment, sexual assault, marital mediation, and crisis shelter."
      },
      {
        title: "Youth Empowerment ('Yuva Tarang')",
        desc: "Mobilizing young people in 42 colleges, schools, and neighborhood committees to end gender discrimination and build respectful spaces."
      },
      {
        title: "LGBTQIA+ Support & Rights",
        desc: "Dedicated crisis response, legal assistance, and safe-space advocacy protecting individuals against violence across the sexual spectrum."
      },
      {
        title: "POSH Compliance & Workplace Audits",
        desc: "POSH Act 2013 training, Internal Complaints Committee (ICC) capacity building, and gender rights modules for institutions and workers."
      }
    ],

    // Get Involved Section (Friends of HUMSAFAR & Roles)
    involvedTag: "CIVIL SOCIETY NETWORK",
    involvedTitle: "Join Hands with HUMSAFAR",
    involvedSubtitle: "Civil society engagement is essential for zero violence. Explore how you can contribute.",
    friendsTitle: "'Friends of HUMSAFAR' Network",
    friendsDesc: "A broad civil society network of lawyers, doctors, educators, businesspeople, homemakers, teachers, school principals, and retired judges contributing pro-bono expertise.",
    tabVolunteers: "Volunteer / Intern",
    tabProfessionals: "Friends of HUMSAFAR",
    tabPartners: "Anganwadi & Institutional",
    tabDonors: "Support Rehabilitation",

    // Crisis Contact Section (Exact Research Address & Helpline)
    contactTag: "CRISIS ASSISTANCE",
    contactTitle: "Reach Out to HUMSAFAR Lucknow Headquarters",
    contactSubtitle: "Our casework team is ready to support you with complete confidentiality and care.",
    helplineHeader: "24/7 Crisis Helpline",
    addressHeader: "Headquarters Address",
    addressText: "C-80, Flat No. 2, Sector A, Mahanagar, Lucknow, Uttar Pradesh 226006, India (near Channi Lal Chouraha)",
    additionalUnit: "Additional Unit: Sitapur District, Uttar Pradesh",
    hoursHeader: "Office Hours",
    hoursText: "Monday to Saturday: 10:00 AM – 6:00 PM (Helpline operates 24/7)",
    callNow: "Call Helpline Now",
    getDirections: "Get Directions on Google Maps",

    // Footer
    footerDesc: "HUMSAFAR is a registered Trust (Est. Nov 2003, Registered 2008) dedicated to holistic feminist crisis intervention and gender equality.",
    phase2Note: "Official Web: humsafarindia.org • Registered Trust • Lucknow, UP"
  },
  hi: {
    // Nav & Crisis Header
    emergencyHelp: "24/7 हेल्पलाइन",
    quickExit: "तुरंत बाहर निकलें",
    quickExitTooltip: "सुरक्षा के लिए इस पेज को तुरंत बंद करें",
    getInvolved: "हमारे साथ जुड़ें",
    navAbout: "हमारे बारे में",
    navProcess: "सहायता प्रक्रिया",
    navImpact: "हमारा प्रभाव",
    navFocus: "मुख्य क्षेत्र",
    navContact: "आपत्कालीन संपर्क",
    
    // Hero Section
    heroBadge: "स्थापना नवं 2003 • पंजीकृत ट्रस्ट 2008 • लखनऊ",
    heroTitleLine1: "लैंगिक व मानवाधिकार",
    heroTitleLine2: "उल्लंघन के खिलाफ समग्र न्याय।",
    heroSubtitle: "हमसफ़र लखनऊ स्थित एक पंजीकृत सहायता केंद्र है, जो महिलाओं, युवाओं और क्वीर व्यक्तियों को 24/7 संकट निवारण, कानूनी सहायता, चिकित्सा, आश्रय और पुनर्वास प्रदान करता है।",
    heroCrisisBtn: "24/7 हेल्पलाइन कॉल करें",
    heroExploreBtn: "हमारा कार्य देखें",
    heroStatsPill: "4 जिलों में 10,000+ से अधिक मामलों में हस्तक्षेप",

    // Who We Are Section
    aboutTag: "हमसफ़र ट्रस्ट के बारे में",
    aboutTitle: "दो दशकों से जन-न्याय, केसवर्क और हिंसा निवारण का संकल्प",
    aboutPara1: "नवंबर 2003 में स्थापित और 2008 में ट्रस्ट के रूप में पंजीकृत, हमसफ़र पूरे उत्तर प्रदेश में लिंग, धर्म, जाति, वर्ग और लैंगिकता के आधार पर होने वाले भेदभाव और हिंसा के खिलाफ एक सशक्त नारीवादी पहल है।",
    aboutPara2: "ट्रस्टियों, अनुभवी केसवर्कर्स और स्वयंसेवकों द्वारा संचालित, हमसफ़र लखनऊ मंडल के 53 मोहल्लों और 42 शिक्षण संस्थानों (लखनऊ, हरदोई, उन्नाव, सीतापुर) में सक्रिय है, तथा सीतापुर जिले में एक समर्पित इकाई संचालित करता है।",
    aboutStat1: "10,000+",
    aboutStat1Label: "सहायता प्राप्त पीड़ित",
    aboutStat2: "53",
    aboutStat2Label: "लखनऊ के मोहल्ले",
    aboutStat3: "42",
    aboutStat3Label: "स्कूल व युवा क्लब",
    aboutStat4: "20+",
    aboutStat4Label: "वर्षों की निरंतर सेवा",
    aboutDistrictsLabel: "मुख्य मंडल जिले",
    aboutGovtPartnerTitle: "ICDS आंगनवाड़ी साझेदारी",
    aboutGovtPartnerDesc: "उ.प्र. महिला एवं बाल विकास विभाग के साथ ICDS कार्यक्रम के तहत आंगनवाड़ी कार्यकर्ताओं को लैंगिक अधिकारों व हिंसा निवारण का प्रशिक्षण।",

    // How We Help
    processTag: "सहायता प्रक्रिया",
    processTitle: "सहायता के 7 चरण: संकट से आत्मनिर्भरता तक",
    processSubtitle: "हमारा केसवर्क विभाग यह सुनिश्चित करता है कि पीड़ित सुरक्षित वातावरण में आत्म-सम्मान और स्वतंत्रता पुनः प्राप्त करें।",
    steps: [
      {
        step: "01",
        title: "24/7 आपत्कालीन कॉल प्रतिक्रिया एवं केस दर्ज करना",
        desc: "गोपनीय सहायता। कॉल आते ही हमारी टीम तुरंत सुरक्षा का आकलन करती है और आपत्कालीन कदम उठाती है।"
      },
      {
        step: "02",
        title: "बहु-विषयक मामला मूल्यांकन",
        desc: "प्रशिक्षित केसवर्कर्स पीड़ित की आवश्यकतानुसार कानूनी, चिकित्सीय और मानसिक पुनर्वास योजना तैयार करते हैं।"
      },
      {
        step: "03",
        title: "पैरा-लीगल एवं कानूनी अदालत सहायता",
        desc: "एफआईआर दर्ज करने, घरेलू हिंसा अधिनियम के तहत सुरक्षा आदेश प्राप्त करने और अदालत में वकील द्वारा प्रतिनिधित्व।"
      },
      {
        step: "04",
        title: "मनोसामाजिक परामर्श एवं मध्यस्थता",
        desc: "नारीवादी परामर्श के माध्यम से मानसिक संबल और जहाँ सुरक्षित हो, पारिवारिक मध्यस्थता प्रदान की जाती है।"
      },
      {
        step: "05",
        title: "चिकित्सीय देखभाल एवं सुरक्षित आश्रय",
        desc: "सरकारी अस्पतालों में उपचार, मेडिकल साक्ष्य और तत्काल सुरक्षित आश्रय की व्यवस्था।"
      },
      {
        step: "06",
        title: "'युवा तरंग' युवा क्लब व जागरूकता",
        desc: "42 स्कूलों और कॉलेजों में 'युवा तरंग' कार्यक्रमों के माध्यम से हिंसा विरोधी जागरूकता व लैंगिक समानता।"
      },
      {
        step: "07",
        title: "आजीविका सहायता एवं स्वतंत्र पुनर्वास",
        desc: "आर्थिक स्वावलंबन के लिए कौशल प्रशिक्षण, स्वरोजगार सहायता और निरंतर सहयोग।"
      }
    ],

    // Impact Section
    impactTag: "हमारी उपलब्धियां",
    impactTitle: "उत्तर प्रदेश में जीवन परिवर्तन की कहानी",
    impactSubtitle: "विश्वास, कानूनी दृढ़ता और निरंतर सामुदायिक उपस्थिति से निर्मित बदलाव।",

    // Focus Areas Section
    focusTag: "मुख्य विशेषज्ञता क्षेत्र",
    focusTitle: "मुख्य कार्य क्षेत्र एवं विशेषज्ञता",
    focusCards: [
      {
        title: "महिला अधिकार एवं सुरक्षा (VAW)",
        desc: "घरेलू हिंसा (घरेलू हिंसा अधिनियम), दहेज उत्पीड़न, यौन हिंसा के खिलाफ व्यापक केसवर्क व मध्यस्थता।"
      },
      {
        title: "युवा सशक्तिकरण ('युवा तरंग')",
        desc: "42 शिक्षण संस्थानों में युवाओं को लैंगिक समानता और हिंसा विरोधी संदेशवाहकों के रूप में तैयार करना।"
      },
      {
        title: "LGBTQIA+ अधिकार एवं संबल",
        desc: "क्वीर एवं ट्रांस व्यक्तियों के लिए सुरक्षित वातावरण, कानूनी सुरक्षा और संकट निवारण।"
      },
      {
        title: "POSH कार्यस्थल सुरक्षा प्रशिक्षण",
        desc: "संस्थानों और कंपनियों में यौन उत्पीड़न रोकथाम कानून (POSH 2013) के तहत प्रशिक्षण व ICC क्षमता निर्माण।"
      }
    ],

    // Get Involved Section
    involvedTag: "नागरिक समाज नेटवर्क",
    involvedTitle: "हमसफ़र के साथ हाथ मिलाएं",
    involvedSubtitle: "हिंसा-मुक्त समाज के निर्माण के लिए नागरिक समाज का सहयोग आवश्यक है।",
    friendsTitle: "'फ्रेंड्स ऑफ हमसफ़र' नेटवर्क",
    friendsDesc: "वकीलों, डॉक्टरों, शिक्षकों, सेवानिवृत्त न्यायाधीशों और सामाजिक कार्यकर्ताओं का नेटवर्क जो निशुल्क सेवाएं देता है।",
    tabVolunteers: "स्वयंसेवक / इंटर्न",
    tabProfessionals: "फ्रेंड्स ऑफ हमसफ़र",
    tabPartners: "आंगनवाड़ी व संस्थागत",
    tabDonors: "पुनर्वास सहयोग",

    // Crisis Contact Section
    contactTag: "आपत्कालीन सहायता",
    contactTitle: "हमसफ़र लखनऊ मुख्यालय से संपर्क करें",
    contactSubtitle: "हमारी केसवर्क टीम पूर्ण गोपनीयता और संवेदनशीलता के साथ आपकी सहायता के लिए तत्पर है।",
    helplineHeader: "24/7 हेल्पलाइन नंबर",
    addressHeader: "मुख्यालय पता",
    addressText: "सी-80, फ्लैट नं 2, सेक्टर ए, महानगर, लखनऊ, उत्तर प्रदेश 226006 (चन्नी लाल चौराहे के पास)",
    additionalUnit: "अतिरिक्त इकाई: सीतापुर जिला, उत्तर प्रदेश",
    hoursHeader: "कार्यालय समय",
    hoursText: "सोमवार से शनिवार: प्रातः 10:00 से सायं 6:00 (हेल्पलाइन 24 घंटे चालू है)",
    callNow: "हेल्पलाइन पर कॉल करें",
    getDirections: "गूगल मैप्स पर दिशा-निर्देश",

    // Footer
    footerDesc: "हमसफ़र एक पंजीकृत ट्रस्ट (स्थापना नवं 2003, पंजीकृत 2008) है, जो लैंगिक हिंसा के अंत और महिला व युवा सशक्तिकरण के लिए समर्पित है।",
    phase2Note: "आधिकारिक वेबसाइट: humsafarindia.org • पंजीकृत ट्रस्ट • लखनऊ, उत्तर प्रदेश"
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
