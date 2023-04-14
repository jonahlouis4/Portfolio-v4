import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import homeEn from '@/locales/en/home.json';
import homeFr from '@/locales/fr/home.json';
import projectsEn from '@/locales/en/projects.json';
import projectsFr from '@/locales/fr/projects.json';
import journeyEn from '@/locales/en/journey.json';
import journeyFr from '@/locales/fr/journey.json';

const resources = {
  en: {
    home: homeEn,
    projects: projectsEn,
    journey: journeyEn
  },
  fr: {
    home: homeFr,
    projects: projectsFr,
    journey: journeyFr
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
