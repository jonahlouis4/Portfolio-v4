import { CITIES } from '@/data/cityData';
import { DF_ITEM_VARIANT, DF_WRAPPER_VARIANT } from '@/data/variantData';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image, { StaticImageData } from 'next/image';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type ImageSlideModalProps = {
  selectedCity: string | null;
  setSelectedCity: (city: string | null) => void;
};

export default function ImageSlideModal(props: ImageSlideModalProps) {
  const { selectedCity, setSelectedCity } = props;
  const [images, setImages] = useState<StaticImageData[] | null>(null);

  const handleClose = () => {
    document.documentElement.style.overflow = 'auto';
    setSelectedCity(null);
  };

  // Hide scrollbar when modal is active
  useEffect(() => {
    if (selectedCity) {
      document.documentElement.style.overflow = 'hidden';

      const city = CITIES.filter((city) => city.name === selectedCity);
      setImages(city[0].images);
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
      className='fixed inset-0 flex z-30 py-10 px-10'
      onClick={handleClose}
    >
      <div
        className='fixed inset-0 bg-black/70 dark:bg-black/60'
        aria-hidden='true'
      />
      <motion.div
        className='w-full min-h-min z-40'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end'>
          <motion.button
            variants={DF_ITEM_VARIANT}
            onClick={handleClose}
            className='rounded-full p-1 z-40 bg-gray-100 dark:bg-zinc-600 shadow-2xl'
          >
            <XMarkIcon className='h-8 w-8 text-red-600 drop-shadow-lg hover:scale-110 transition ease-in-out duration-300' />
          </motion.button>
        </div>

        <div className='flex items-center h-full'>
          <Swiper
            grabCursor={true}
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='mySwiper h-[25em] sm:h-[40em] lg:w-[60em] lg:h-[50em] 3xl:h-[60em] rounded-3xl'
          >
            {images?.map((image, index) => (
              <SwiperSlide key={'city-image-' + index} className='bg-black/50'>
                <div className='h-full flex items-center justify-center rounded-3xl'>
                  <Image
                    src={image}
                    className='object-cover rounded-3xl w-full w-full h-full lg:max-h-[60em]'
                    alt='memory in city'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </motion.div>
  );
}
