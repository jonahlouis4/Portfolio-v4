import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { DF_ITEM_VARIANT, DF_WRAPPER_VARIANT } from '@/data/variantData';
import { CITIES } from '@/data/cityData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Scrollbar } from "swiper";

import Image, { StaticImageData } from 'next/image';

import 'swiper/css';
import "swiper/css/scrollbar";

export default function ImageSlideModal(props: any) {
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
      <div className='fixed inset-0 bg-black/70 dark:bg-black/60' aria-hidden='true' />
      <motion.div
        className='w-full min-h-min z-40'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end'>
          <motion.button
            variants={DF_ITEM_VARIANT}
            onClick={handleClose}
            className='rounded-full p-1 z-40 bg-gray-100 shadow-2xl'
          >
            <XMarkIcon className='h-8 w-8 text-red-600 drop-shadow-lg hover:scale-110 transition ease-in-out duration-300' />
          </motion.button>
        </div>

        <div className='flex items-center h-full' >
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            scrollbar={{
              hide: false,
            }}
            modules={[EffectCreative, Scrollbar]}
            className='mySwiper w-full xl:w-2/4 h-[20em] sm:h-[32em] md:h-[36em] lg:h-[38em] xl:h-[40em] 3xl:h-[50em] rounded-3xl'
          >
              {images?.map((image) => (
                <SwiperSlide>
                  <Image
                    src={image}
                    className='bg-contain rounded-3xl h-full'
                    alt='image'
                  />
             
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </motion.div>
    </motion.div>
  );
}
