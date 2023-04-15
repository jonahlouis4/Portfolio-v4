import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import homeEn from '@/locales/en/home.json';
import homeFr from '@/locales/fr/home.json';
import projectsEn from '@/locales/en/projects.json';
import projectsFr from '@/locales/fr/projects.json';
import journeyEn from '@/locales/en/journey.json';
import journeyFr from '@/locales/fr/journey.json';
import contactEn from '@/locales/en/contact.json';
import contactFr from '@/locales/fr/contact.json';
import menuEn from '@/locales/en/menu.json';
import menuFr from '@/locales/fr/menu.json';

const resources = {
  en: {
    home: homeEn,
    projects: projectsEn,
    journey: journeyEn,
    contact: contactEn,
    menu: menuEn
  },
  fr: {
    home: homeFr,
    projects: projectsFr,
    journey: journeyFr,
    contact: contactFr,
    menu: menuFr
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
