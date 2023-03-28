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
  