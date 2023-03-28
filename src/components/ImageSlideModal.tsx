import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { DF_ITEM_VARIANT, DF_WRAPPER_VARIANT } from '@/data/variantData';
import { CITIES } from '@/data/cityData';
import Image from 'next/image';

export default function ImageSlideModal(props: any) {
  const { selectedCity, setSelectedCity } = props;

  const handleClose = () => {
    document.documentElement.style.overflow = 'auto';
    setSelectedCity(null)
  };

  // Hide scrollbar when modal is active
  useEffect(() => {
    if (selectedCity) {
      document.documentElement.style.overflow = 'hidden';
    }
  }, [selectedCity]);

  // Listen to 'ESC' key
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='fixed inset-0 flex justify-center items-center z-30'
      onClick={handleClose}
    >
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <motion.div
        className='p-4 mx-4 w-full min-h-min z-40'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end'>
          <motion.button
            variants={DF_ITEM_VARIANT}
            onClick={handleClose}
            className='rounded-full p-1 z-40'
          >
            <XMarkIcon className='h-8 w-8 text-red-600 drop-shadow-lg hover:scale-110 transition ease-in-out duration-300' />
          </motion.button>
        </div>
        
        <>
        
        </>
      </motion.div>
    </motion.div>
  );
}
