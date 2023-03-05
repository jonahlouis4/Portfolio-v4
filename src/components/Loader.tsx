import { useGlobal } from '@/store/globals';
import { motion, usePresence } from 'framer-motion';
import { useEffect } from 'react';

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
    exit: {
      opacity: 0,
      y: -25,
      transition: {
        duration: 0.45,
      },
    },
  };

  return (
    <div className='flex items-center justify-center absolute w-full h-screen z-40 shadow-2xl'>
      <motion.h1
        initial={false}
        variants={item}
        exit='exit'
        className='text-lg font-extrabold'
      >
        Logo Animation
      </motion.h1>
    </div>
  );
}
