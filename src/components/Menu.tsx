import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { DF_ITEM_VARIANT } from '@/constants';
import Container from './Container';


export default function Menu() {
  const navigation = [
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Journey', href: '/journey' },
  ];

  const socials = [
    { name: 'GitHub', href: '' },
    { name: 'LinkedIn', href: '' },
    { name: 'Resume', href: '' },
  ];

  const pageWrapper = {
    visible: {
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.6, 0.65, 1],
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
    hidden: {
      x: -2500,
    },
    exit: {
      x: -2500,
      transition: {
        duration: 0.6,
        ease: [1, 0.9, 0.80, 0.55],
        when: 'afterChildren',
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={pageWrapper}
      initial="hidden"
      animate="visible"
      exit="exit"
      className='flex items-center justify-center w-full h-screen dark:bg-gray-900 bg-gray-100 shadow-2xl border-r-2 border-gray-500'
    >
      <div className='w-full'>
        <Container>
          <div className='flex flex-col gap-y-10 mt-4'>
            {navigation.map((nav, index) => (
              <motion.div variants={DF_ITEM_VARIANT} className='flex items-baseline gap-x-2'>
                <h1 className='text-md dark:text-gray-400 text-gray-600'>0{index + 1}</h1>
                <button className='text-7xl dark:text-gray-300 text-gray-900 font-extrabold uppercase drop-shadow-xl'>
                  {nav.name}
                </button>
              </motion.div>
            ))}
          </div>
          <motion.div variants={DF_ITEM_VARIANT} className='w-full border-2 border-gray-200 my-8' />
          <div className='flex gap-12'>
            {socials.map((social, index) => (
              <motion.button variants={DF_ITEM_VARIANT} className='flex items-center gap-x-1 text-gray-400 text-lg font-medium'>
                <span>{social.name}</span>
                <ArrowTopRightOnSquareIcon className='h-4 w-4' />
              </motion.button>
            ))}
          </div>
        </Container>
      </div>
    </motion.div>
  );
}
