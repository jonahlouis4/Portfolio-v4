import Link from 'next/link';
import Image from 'next/image';
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useGlobal } from '@/store/globals';
import { useGlobalsPersist } from '@/store/globalsPersist';
import Container from './Container';
import { DF_PAGE_ITEM_VARIANT_2, DF_WRAPPER_VARIANT } from '@/data/variantData';
import { useRouter } from 'next/router';

export default function Navbar() {
  const mode = useGlobalsPersist((state) => state.mode);
  const setMode = useGlobalsPersist((state) => state.setMode);
  const menu = useGlobal((state) => state.menu);
  const setMenu = useGlobal((state) => state.setMenu);
  const router = useRouter();

  const handleHome = async () => {
    if (menu) {
      setMenu();
    }
    await router.push('/');
  };

  const handleMenu = () => {
    setMenu();
  };

  const handleMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
  };

  const menuVariant = {
    visible: { opacity: 1, transition: { ease: 'easeOut', duration: 0.1 } },
    hidden: { opacity: 0, transition: { ease: 'easeOut', duration: 0.1 } },
    exit: { opacity: 0, transition: { ease: 'easeOut', duration: 0.1 } },
  };

  const modeVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: 'easeOut', duration: 0.1 },
    },
    hidden: {
      opacity: 0,
      y: -10,
      transition: { ease: 'easeOut', duration: 0.1 },
    },
    exit: { opacity: 0, y: 10, transition: { ease: 'easeOut', duration: 0.1 } },
  };

  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      className='z-10 absolute w-full py-4 lg:py-10'
    >
      <Container narrow={false}>
        <div className='flex gap-x-4 justify-between'>
          <motion.div variants={DF_PAGE_ITEM_VARIANT_2}>
            <button onClick={handleHome}>
              <Image
                src='logo_v4.svg'
                alt="Jonah's portfolio logo"
                width={48}
                height={48}
                className='drop-shadow-xl'
              />
            </button>
          </motion.div>
          <div className='flex items-center gap-x-4'>
            <motion.button
              variants={DF_PAGE_ITEM_VARIANT_2}
              onClick={handleMode}
            >
              <AnimatePresence mode='wait'>
                {mode === 'light' ? (
                  <motion.div
                    key='darkMode'
                    variants={modeVariant}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                  >
                    <MoonIcon className='h-5 w-5 text-gray-500 group-hover:text-blue-500 drop-shadow-lg hover:scale-110 hover:text-blue-500 transition ease-in-out duration-300 ' />
                  </motion.div>
                ) : (
                  <motion.div
                    key='lightMode'
                    variants={modeVariant}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                  >
                    <SunIcon className='h-5 w-5 text-gray-400 group-hover:text-yellow-500 drop-shadow-lg hover:scale-110 hover:text-yellow-500 transition ease-in-out duration-300 ' />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            <motion.button
              variants={DF_PAGE_ITEM_VARIANT_2}
              onClick={handleMenu}
            >
              <AnimatePresence mode='wait'>
                {!menu ? (
                  <motion.div
                    key='menuClosed'
                    variants={menuVariant}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                  >
                    <Bars3Icon className='h-12 w-12 dark:text-gray-400 text-gray-500 drop-shadow-lg hover:scale-110 transition ease-in-out duration-300' />
                  </motion.div>
                ) : (
                  <motion.div
                    key='menuOpen'
                    variants={menuVariant}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                  >
                    <XMarkIcon className='h-12 w-12 text-red-600 drop-shadow-lg hover:scale-110 transition ease-in-out duration-300' />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
