import Container from '@/components/Container';
import { SOCIALS } from '@/data/socialData';
import { DF_PAGE_ITEM_VARIANT, DF_WRAPPER_VARIANT } from '@/data/variantData';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='py-48 h-screen dark:bg-main-dark bg-main-light'
    >
      <Container>
        <motion.h1
          variants={DF_PAGE_ITEM_VARIANT}
          className='text-6xl dark:text-gray-200 text-gray-900 font-extrabold text-center sm:text-left drop-shadow-xl'
        >
          Contact
        </motion.h1>
        <motion.div
          variants={DF_PAGE_ITEM_VARIANT}
          className='w-full border-2 border-gray-200 my-8'
        />

        <div className='flex flex-col gap-y-16 sm:flex-row sm:gap-y-0 justify-between'>
          <div>
            <motion.h1
              variants={DF_PAGE_ITEM_VARIANT}
              className='text-2xl dark:text-gray-200 font-bold mb-2'
            >
              Email
            </motion.h1>
            <motion.button
              variants={DF_PAGE_ITEM_VARIANT}
              className='flex items-center gap-x-1 dark:text-gray-400 text-gray-500 text-lg font-medium transition-colors duration-300 ease-in-out hover:text-gray-400 dark:hover:text-gray-500'
            >
              <span>jonah_louis@outlook.com</span>
              <ArrowTopRightOnSquareIcon className='h-4 w-4' />
            </motion.button>
          </div>
          <div>
            <motion.h1
              variants={DF_PAGE_ITEM_VARIANT}
              className='text-2xl dark:text-gray-200 text-gray-900 font-bold mb-2'
            >
              Social Medias
            </motion.h1>
            <div className='flex gap-8'>
              {SOCIALS.map((social) => (
                <motion.a
                  variants={DF_PAGE_ITEM_VARIANT}
                  className='flex items-center gap-x-1 dark:text-gray-400 text-gray-500 text-lg font-medium transition-colors duration-300 ease-in-out hover:text-gray-400 dark:hover:text-gray-500'
                  href={social.href}
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>{social.name}</span>
                  <ArrowTopRightOnSquareIcon className='h-4 w-4' />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
