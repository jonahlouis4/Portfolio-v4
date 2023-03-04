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

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className='bg-gray-50 absolute w-full h-screen z-40 shadow-2xl'
    >
      <div>Full page loader!</div>
    </motion.div>
  );
}
