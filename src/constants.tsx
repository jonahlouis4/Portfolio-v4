/* ========= FRAMER MOTION VARIANTS ========= */
// outter container - fade in & stagger children
export const DF_WRAPPER_VARIANT = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.05,
    },
  },
};

// item - fade in, shift up, & bounce
export const DF_PAGE_ITEM_VARIANT = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 1,
    },
  },
  hidden: { opacity: 0, y: -70 },
  exit: {
    opacity: 0,
    y: -70,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

// item 2 - fade in only
export const DF_PAGE_ITEM_VARIANT_2 = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: { opacity: 0 },
};

export const DF_ITEM_VARIANT = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
};

/* ========= APPLICATION CONSTANTS ========= */
// Socials
export const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/jonahlouis4' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jonah-louis/' },
  { name: 'Resume', href: '/jonahlouis_resume.pdf' },
];

export const PROJECTS = [
  {
    active: false,
    name: 'StudyBuddy',
    description: 'Flashcard web application designed for studying.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, hic culpa. Nihil iste voluptates eligendi quasi, doloremque tempore voluptas ratione excepturi aspernatur placeat maiores dolor accusantium quae et animi saepe?',
    langs: [
      'React',
      'TailwindCSS',
      'Firebase',
      'Framer Motion'
    ],
    links: [
      { github: 'https://github.com/jonahlouis4/StudyBuddy' },
    ],
    className: 'bg-gradient-to-br from-pink-500 to-fuchsia-600',
  },
  {
    active: false,
    name: 'COVID-19 Tracker',
    description: 'Live COVID-19 web application tracker.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, hic culpa. Nihil iste voluptates eligendi quasi, doloremque tempore voluptas ratione excepturi aspernatur placeat maiores dolor accusantium quae et animi saepe?',
    langs: [
      'React',
      'GraphQL',
      'Apollo Client',
      'Ant Design',
      'AntV',
    ],
    links: [
      { github: 'https://github.com/jonahlouis4/COVID19-Tracker', }
    ],
    className: 'bg-gradient-to-br from-fuchsia-500 to-purple-700',
  },
  {
    active: true,
    name: 'Royal Drip Check',
    description: 'Streetwear reselling ecommerce website.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, hic culpa. Nihil iste voluptates eligendi quasi, doloremque tempore voluptas ratione excepturi aspernatur placeat maiores dolor accusantium quae et animi saepe?',
    langs: [
      'Shopify',
      'TailwindCSS'
    ],
    links: [
      { website: 'https://royaldripcheck.ca/' }
    ],
    className: 'bg-gradient-to-br from-violet-700 to-violet-600',
  },
  {
    active: true,
    name: 'CreativeFloww',
    description: 'Web agency landing page.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, hic culpa. Nihil iste voluptates eligendi quasi, doloremque tempore voluptas ratione excepturi aspernatur placeat maiores dolor accusantium quae et animi saepe?',
    langs: [
      'React',
      'TailwindCSS'
    ],
    links: [
      { website: 'https://www.creativefloww.ca/', }
    ],
    className: 'bg-gradient-to-br from-blue-700 to-blue-600',
  },
  {
    active: true,
    name: 'iContribute',
    description: 'Mobile application made for volunteering opportunities.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, hic culpa. Nihil iste voluptates eligendi quasi, doloremque tempore voluptas ratione excepturi aspernatur placeat maiores dolor accusantium quae et animi saepe?',
    langs: [
      'React Native',
      'Firebase',
    ],
    links: [
      { website: 'https://icontribute.community/#/' }
    ],
    className: 'bg-gradient-to-br from-blue-700 to-sky-500',
  },
];
