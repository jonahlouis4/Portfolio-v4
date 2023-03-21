import { useGlobal } from '@/store/globals';
import { motion, usePresence } from 'framer-motion';
import { useEffect } from 'react';
import animatedLogo from '../assets/logo_v4_loading.mp4';

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
      y: -15,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className='dark:bg-gray-900 flex items-center justify-center absolute w-full h-screen z-40 shadow-2xl'>
      <motion.div
        initial={false}
        variants={item}
        exit='exit'
        className='dark:text-white text-lg font-extrabold'
      >
        {/* <video className='h-16 w-16' autoPlay muted>
          <source src='logo_v4_loading.mp4' type='video/mp4' />
        </video> */}
        logo animation
      </motion.div>
    </div>
  );
}
