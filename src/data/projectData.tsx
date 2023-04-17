import covid19api_1 from '../assets/projects/covidapi-1.png'
import covid19api_2 from '../assets/projects/covidapi-2.png'
import covid19api_3 from '../assets/projects/covidapi-3.png'

export const PROJECTS = [
  {
    active: false,
    name: 'StudyBuddy',
    description: 'studybuddy-desc',
    longDescription: 'studybuddy-ldesc',
    contribution: null,
    langs: ['React', 'TailwindCSS', 'Firebase', 'Framer Motion'],
    media: null,
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
      { name: "covid19app-ss-1", image: covid19api_1 },
      { name: "covid19app-ss-2", image: covid19api_2 },
      { name: "covid19app-ss-3", image: covid19api_3 }
    ],
    links: [{ github: 'https://github.com/jonahlouis4/COVID19-Tracker' }],
    className: 'bg-gradient-to-br from-fuchsia-500 to-purple-700',
  },
  {
    active: true,
    name: 'Royal Drip Check',
    description: 'royaldripcheck-desc',
    longDescription: 'royaldripcheck-ldesc',
    contribution: "royaldripcheck-contribution",
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
    contribution: "creativefloww-contribution",
    langs: ['React', 'TailwindCSS'],
    media: null,
    links: [{ website: 'https://www.creativefloww.ca/' }],
    className: 'bg-gradient-to-br from-blue-700 to-blue-600',
  },
  {
    active: true,
    name: 'iContribute',
    description: 'icontribute-desc',
    longDescription: 'icontribute-ldesc',
    contribution: "icontribute-contribution",
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
