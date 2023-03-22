import Container from '@/components/Container';
import {
  DF_PAGE_ITEM_VARIANT,
  DF_WRAPPER_VARIANT,
} from '@/constants';
import { motion } from 'framer-motion';

export default function Journey() {

  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='pt-48 pb-16 dark:bg-main-dark bg-main-light'
    >
      <Container>
        <motion.h1
          variants={DF_PAGE_ITEM_VARIANT}
          className='text-6xl dark:text-gray-200 text-gray-900 font-extrabold drop-shadow-xl'
        >
          Journey
        </motion.h1>
        <motion.div
          variants={DF_PAGE_ITEM_VARIANT}
          className='w-full border-2 border-gray-200 my-8'
        />
      </Container>
    </motion.div>
  );
}
