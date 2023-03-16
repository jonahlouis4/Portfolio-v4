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
  { name: 'GitHub', href: '' },
  { name: 'LinkedIn', href: '' },
  { name: 'Resume', href: '' },
];

export const PROJECTS = [
  {
    name: 'StudyBuddy',
    description: 'Flashcard web application designed for studying.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, hic culpa. Nihil iste voluptates eligendi quasi, doloremque tempore voluptas ratione excepturi aspernatur placeat maiores dolor accusantium quae et animi saepe?',
    langs: [
      'React',
      'TailwindCSS',
      'Firebase'
    ],
    className: '',
  },
  {
    name: 'COVID-19 Tracker',
    description: 'Live COVID-19 web application tracker.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, hic culpa. Nihil iste voluptates eligendi quasi, doloremque tempore voluptas ratione excepturi aspernatur placeat maiores dolor accusantium quae et animi saepe?',
    langs: [
      'React',
      'Ant Design',
      'Ant Design Charts',
      'GraphQL'
    ],
    className: '',
  },
  {
    name: 'Royal Drip Check',
    description: 'Streetwear reselling ecommerce website.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, hic culpa. Nihil iste voluptates eligendi quasi, doloremque tempore voluptas ratione excepturi aspernatur placeat maiores dolor accusantium quae et animi saepe?',
    langs: [
      'Shopify',
      'TailwindCSS'
    ],
    className: '',
  },
  {
    name: 'CreativeFloww',
    description: 'Web agency landing page.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, hic culpa. Nihil iste voluptates eligendi quasi, doloremque tempore voluptas ratione excepturi aspernatur placeat maiores dolor accusantium quae et animi saepe?',
    langs: [
      'React',
      'TailwindCSS'
    ],
    className: '',
  },
  {
    name: 'iContribute',
    description: 'Mobile application made for volunteering opportunities.',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, hic culpa. Nihil iste voluptates eligendi quasi, doloremque tempore voluptas ratione excepturi aspernatur placeat maiores dolor accusantium quae et animi saepe?',
    langs: [
      'React Native',
      'Firebase',
    ],
    className: '',
  },
];
