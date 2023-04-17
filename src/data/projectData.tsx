import studdybuddy_1 from '../assets/projects/studybuddy-1.png';
import studdybuddy_2 from '../assets/projects/studybuddy-2.png';
import studdybuddy_3 from '../assets/projects/studybuddy-3.png';
import studdybuddy_4 from '../assets/projects/studybuddy-4.png';
import studdybuddy_5 from '../assets/projects/studybuddy-5.png';
import studdybuddy_6 from '../assets/projects/studybuddy-6.png';
import studdybuddy_7 from '../assets/projects/studybuddy-7.png';

import covid19api_1 from '../assets/projects/covidapi-1.png';
import covid19api_2 from '../assets/projects/covidapi-2.png';
import covid19api_3 from '../assets/projects/covidapi-3.png';

import creativefloww_1 from '../assets/projects/creativefloww-1.png'
import creativefloww_2 from '../assets/projects/creativefloww-2.png'
import creativefloww_3 from '../assets/projects/creativefloww-3.png'
import creativefloww_4 from '../assets/projects/creativefloww-4.png'
import creativefloww_5 from '../assets/projects/creativefloww-5.png'
import creativefloww_6 from '../assets/projects/creativefloww-6.png'
import creativefloww_7 from '../assets/projects/creativefloww-7.png'
import creativefloww_8 from '../assets/projects/creativefloww-8.png'
import creativefloww_9 from '../assets/projects/creativefloww-9.png'

export const PROJECTS = [
  {
    active: false,
    name: 'StudyBuddy',
    description: 'studybuddy-desc',
    longDescription: 'studybuddy-ldesc',
    contribution: null,
    langs: ['React', 'TailwindCSS', 'Firebase', 'Framer Motion'],
    media: [
      { name: 'studybuddy-ss-1', image: studdybuddy_1 },
      { name: 'studybuddy-ss-2', image: studdybuddy_2 },
      { name: 'studybuddy-ss-3', image: studdybuddy_3 },
      { name: 'studybuddy-ss-4', image: studdybuddy_4 },
      { name: 'studybuddy-ss-5', image: studdybuddy_5 },
      { name: 'studybuddy-ss-6', image: studdybuddy_6 },
      { name: 'studybuddy-ss-7', image: studdybuddy_7 },
    ],
    links: [{ github: 'https://github.com/jonahlouis4/StudyBuddy' }],
    className: 'bg-gradient-to-br from-pink-500 to-fuchsia-600',
  },
  {
    active: false,
    name: 'COVID-19 Tracker',
    description: 'covid19app-desc',
    longDescription: 'covid19app-ldesc',
    contribution: null,
    langs: ['React', 'GraphQL', 'Apollo Client', 'Ant Design', 'AntV'],
    media: [
      { name: 'covid19app-ss-1', image: covid19api_1 },
      { name: 'covid19app-ss-2', image: covid19api_2 },
      { name: 'covid19app-ss-3', image: covid19api_3 },
    ],
    links: [{ github: 'https://github.com/jonahlouis4/COVID19-Tracker' }],
    className: 'bg-gradient-to-br from-fuchsia-500 to-purple-700',
  },
  {
    active: true,
    name: 'Royal Drip Check',
    description: 'royaldripcheck-desc',
    longDescription: 'royaldripcheck-ldesc',
    contribution: 'royaldripcheck-contribution',
    langs: ['Shopify', 'TailwindCSS'],
    media: null,
    links: [{ website: 'https://royaldripcheck.ca/' }],
    className: 'bg-gradient-to-br from-violet-700 to-violet-600',
  },
  {
    active: true,
    name: 'CreativeFloww',
    description: 'creativefloww-desc',
    longDescription: 'creativefloww-ldesc',
    contribution: 'creativefloww-contribution',
    langs: ['React', 'TailwindCSS'],
    media: [
      { name: 'creativefloww-ss-1', image: creativefloww_1 },
      { name: 'creativefloww-ss-2', image: creativefloww_2 },
      { name: 'creativefloww-ss-3', image: creativefloww_3 },
      { name: 'creativefloww-ss-4', image: creativefloww_4 },
      { name: 'creativefloww-ss-5', image: creativefloww_5 },
      { name: 'creativefloww-ss-6', image: creativefloww_6 },
      { name: 'creativefloww-ss-7', image: creativefloww_7 },
      { name: 'creativefloww-ss-8', image: creativefloww_8 },
      { name: 'creativefloww-ss-9', image: creativefloww_9 },
    ],
    links: [{ website: 'https://www.creativefloww.ca/' }],
    className: 'bg-gradient-to-br from-blue-700 to-blue-600',
  },
  {
    active: true,
    name: 'iContribute',
    description: 'icontribute-desc',
    longDescription: 'icontribute-ldesc',
    contribution: 'icontribute-contribution',
    langs: ['React Native', 'Firebase'],
    media: null,
    links: [
      { website: 'https://icontribute.community/#/' },
      {
        android:
          'https://play.google.com/store/apps/details?id=com.icontribute',
      },
      {
        ios: 'https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4',
      },
    ],
    className: 'bg-gradient-to-br from-blue-700 to-sky-500',
  },
];
