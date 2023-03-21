import { useGlobal } from '@/store/globals';
import { motion, usePresence } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Loader() {
  const [isPresent, safeToRemove] = usePresence();
  const setLoader = useGlobal((state) => state.setLoader);

  // Animate for few seconds
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setLoader();
      document.body.style.overflow = 'auto';
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Remove from DOM when is no longer present
  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 100);
  }, [isPresent]);

  const item = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className='dark:bg-zinc-900 flex items-center justify-center absolute w-full h-screen z-40 shadow-2xl'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={item}
        exit='exit'
        className='dark:text-white text-lg font-extrabold'
      >
        <Image
          src='logo_v4.svg'
          alt="Jonah's portfolio logo"
          width={68}
          height={68}
          className='drop-shadow-xl'
        />
      </motion.div>
    </div>
  );
}
