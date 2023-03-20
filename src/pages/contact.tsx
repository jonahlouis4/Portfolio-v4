import { DF_WRAPPER_VARIANT, DF_PAGE_ITEM_VARIANT, SOCIALS } from '@/constants';
import Container from '@/components/Container';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='py-48'
    >
      <Container>
        <motion.h1
          variants={DF_PAGE_ITEM_VARIANT}
          className='text-6xl font-extrabold drop-shadow-xl'
        >
          Contact
        </motion.h1>
        <motion.div
          variants={DF_PAGE_ITEM_VARIANT}
          className='w-full border-2 border-gray-200 my-8'
        />
        <div className='flex justify-between'>
          <div>
            <motion.h1
              variants={DF_PAGE_ITEM_VARIANT}
              className='text-2xl font-bold mb-2'
            >
              Email
            </motion.h1>
            <motion.button
              variants={DF_PAGE_ITEM_VARIANT}
              className='flex items-center gap-x-1 text-gray-500 text-lg font-medium transition-colors duration-300 ease-in-out hover:text-gray-400'
            >
              <span>jonah_louis@outlook.com</span>
              <ArrowTopRightOnSquareIcon className='h-4 w-4' />
            </motion.button>
          </div>
          <div>
            <motion.h1
              variants={DF_PAGE_ITEM_VARIANT}
              className='text-2xl font-bold mb-2'
            >
              Social Medias
            </motion.h1>
            <div className='flex gap-8'>
              {SOCIALS.map((social) => (
                <motion.button
                  variants={DF_PAGE_ITEM_VARIANT}
                  className='flex items-center gap-x-1 text-gray-500 text-lg font-medium transition-colors duration-300 ease-in-out hover:text-gray-400'
                >
                  <span>{social.name}</span>
                  <ArrowTopRightOnSquareIcon className='h-4 w-4' />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
