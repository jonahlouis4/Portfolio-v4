import Link from 'next/link';
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useGlobal } from '@/store/globals';

export default function Navbar() {
  const menu = useGlobal(state => state.menu)
  const setMenu = useGlobal(state => state.setMenu)
  const [mode, setMode] = useState<'dark' | 'light'>('light');

  const handleMenu = () => {
    setMenu()
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
    <div className='z-10 absolute w-full py-14 px-28'>
      <div className='flex gap-x-4 justify-between'>
        <Link
          href='/'
          className='bg-gray-200 px-4 py-2 rounded-lg shadow-sm font-extrabold text-2xl'
        >
          <span className='drop-shadow-lg'>J</span>
        </Link>
        <div className='flex items-center gap-x-4'>
          <button onClick={handleMode}>
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
                  <SunIcon className='h-5 w-5 text-gray-500 group-hover:text-yellow-500 drop-shadow-lg hover:scale-110 hover:text-yellow-500 transition ease-in-out duration-300 ' />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button onClick={handleMenu}>
            <AnimatePresence mode='wait'>
              {!menu ? (
                <motion.div
                  key='menuClosed'
                  variants={menuVariant}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                >
                  <Bars3Icon className='h-12 w-12 text-gray-500 drop-shadow-lg hover:scale-110 transition ease-in-out duration-300' />
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
          </button>
        </div>
      </div>
    </div>
  );
}
