import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import homeEn from '@/locales/en/home.json';
import homeFr from '@/locales/fr/home.json';
import projectsEn from '@/locales/en/projects.json';
import projectsFr from '@/locales/fr/projects.json';

const resources = {
  en: {
    home: homeEn,
    projects: projectsEn,
  },
  fr: {
    home: homeFr,
    projects: projectsFr,
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
