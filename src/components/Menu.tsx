import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { DF_PAGE_ITEM_VARIANT } from '@/data/variantData';
import { SOCIALS } from '@/data/socialData';
import { useRouter } from 'next/router';
import Container from './Container';
import { useGlobal } from '@/store/globals';

export default function Menu() {
  const setMenu = useGlobal((state) => state.setMenu);
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Journey', href: '/journey' },
    { name: 'Contact', href: '/contact' },
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
        ease: [1, 0.9, 0.8, 0.55],
        when: 'afterChildren',
        staggerChildren: 0.05,
      },
    },
  };

  const handlePage = async (href: string) => {
    await router.push(href);
    setMenu();
  };

  return (
    <motion.div
      variants={pageWrapper}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='flex items-center justify-center w-full h-screen dark:bg-zinc-800 bg-gray-100 shadow-2xl border-r-2 border-gray-500'
    >
      <div className='w-full'>
        <Container>
          <div className='flex flex-col gap-y-6 mt-4'>
            {navigation.map((nav, index) => (
              <motion.div
                key={nav.name}
                variants={DF_PAGE_ITEM_VARIANT}
                className='flex items-baseline gap-x-2'
              >
                <h1 className='text-md dark:text-gray-400 text-gray-600 font-bold'>
                  0{index + 1}
                </h1>
                <button
                  className='group w-[7em] py-2 text-left text-5xl md:text-6xl lg:text-7xl dark:text-gray-300 text-gray-900 font-extrabold uppercase tracking-widest dark:hover:text-gray-100 hover:text-gray-700 hover:tracking-normal transition-all duration-300'
                  onClick={() => handlePage(nav.href)}
                >
                  <span className='px-4'>{nav.name}</span>
                </button>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={DF_PAGE_ITEM_VARIANT}
            className='w-full border-2 border-gray-200 my-8'
          />
          <div className='flex gap-12'>
            {SOCIALS.map((social, index) => (
              <motion.a
                variants={DF_PAGE_ITEM_VARIANT}
                className='flex items-center gap-x-1 dark:text-gray-400 text-gray-500 text-lg font-medium transition-colors duration-300 ease-in-out dark:hover:text-gray-500 hover:text-gray-400'
                href={social.href}
                target="_blank"
                rel='noreferrer'
              >
                <span>{social.name}</span>
                <ArrowTopRightOnSquareIcon className='h-4 w-4' />
              </motion.a>
            ))}
          </div>
        </Container>
      </div>
    </motion.div>
  );
}
