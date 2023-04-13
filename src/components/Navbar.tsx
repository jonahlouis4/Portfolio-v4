import { DF_PAGE_ITEM_VARIANT_2, DF_WRAPPER_VARIANT } from '@/data/variantData';
import { useGlobal } from '@/store/globals';
import { useGlobalsPersist } from '@/store/globalsPersist';
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Container from './Container';

export default function Navbar() {
  const language = useGlobalsPersist((state) => state.language);
  const setLanguage = useGlobalsPersist((state) => state.setLanguage);
  const mode = useGlobalsPersist((state) => state.mode);
  const setMode = useGlobalsPersist((state) => state.setMode);
  const menu = useGlobal((state) => state.menu);
  const setMenu = useGlobal((state) => state.setMenu);
  const router = useRouter();

  const handleHome = async () => {
    await router.push('/');

    if (menu) {
      setMenu();
    }
  };

  const handleMenu = () => {
    setMenu();
  };

  const handleMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
  };

  const handleLang = () => {
    language === 'english' ? setLanguage('francais') : setLanguage('english');
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
            {/* LANGUAGE */}
            <motion.button
              variants={DF_PAGE_ITEM_VARIANT_2}
              onClick={handleLang}
            >
              <AnimatePresence mode='wait'>
                {language === 'english' ? (
                  <motion.div
                    key='langEn'
                    variants={modeVariant}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                  >
                    EN
                  </motion.div>
                ) : (
                  <motion.div
                    key='langFr'
                    variants={modeVariant}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                  >
                    FR
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* MODE */}
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

            {/* MENU */}
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
