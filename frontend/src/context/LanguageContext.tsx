'use client';

import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ta';

interface Translations {
  [key: string]: {
    en: string;
    ta: string;
  };
}

export const dictionary: Translations = {
  trustName: {
    en: 'Mahesh Trust & NGO',
    ta: 'மகேஷ் அறக்கட்டளை மற்றும் தன்னார்வ தொண்டு நிறுவனம்',
  },
  heroHeading: {
    en: 'Together We Can Build a Better Future',
    ta: 'ஒன்றாக இணைந்து சிறந்த எதிர்காலத்தை உருவாக்குவோம்',
  },
  heroSubheading: {
    en: 'Supporting education, healthcare, environment, women empowerment and community development through compassion and action.',
    ta: 'இரக்கம் மற்றும் செயல்பாட்டின் மூலம் கல்வி, மருத்துவம், சுற்றுச்சூழல், பெண்கள் முன்னேற்றம் மற்றும் சமுதாய வளர்ச்சியை ஆதரிக்கிறோம்.',
  },
  donateNow: {
    en: 'Donate Now',
    ta: 'இப்போதே நன்கொடை அளியுங்கள்',
  },
  becomeVolunteer: {
    en: 'Become Volunteer',
    ta: 'தன்னார்வலராக இணையுங்கள்',
  },
  home: { en: 'Home', ta: 'முகப்பு' },
  aboutUs: { en: 'About Us', ta: 'எங்களைப் பற்றி' },
  mission: { en: 'Our Mission', ta: 'எங்கள் நோக்கம்' },
  vision: { en: 'Our Vision', ta: 'எங்கள் தொலைநோக்கு' },
  whatWeDo: { en: 'What We Do', ta: 'நாங்கள் செய்பவை' },
  projects: { en: 'Projects', ta: 'திட்டங்கள்' },
  gallery: { en: 'Gallery', ta: 'கேலரி' },
  volunteer: { en: 'Volunteer', ta: 'தன்னார்வலர்' },
  donate: { en: 'Donate', ta: 'நன்கொடை' },
  events: { en: 'Events', ta: 'நிகழ்வுகள்' },
  transparency: { en: 'Transparency', ta: 'வெளிப்படைத்தன்மை' },
  contact: { en: 'Contact', ta: 'தொடர்புகொள்ள' },
  admin: { en: 'Admin Panel', ta: 'நிர்வாக பலகை' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    if (dictionary[key]) {
      return dictionary[key][language] || dictionary[key]['en'];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
