import Container from '@/components/Container';
import {
  DF_PAGE_ITEM_VARIANT,
  DF_WRAPPER_VARIANT,
} from '@/constants';
import { motion } from 'framer-motion';

export default function Journey() {
  type DividerProps = {
    start?: boolean;
    end?: boolean;
    section?: boolean;
    extend?: boolean;
  };

  const Divider = ({ start, end, section, extend }: DividerProps) => (
    <motion.div
      variants={DF_PAGE_ITEM_VARIANT}
      className={
        'flex flex-col justify-center items-center' +
        (extend ? ' py-10' : ' py-32')
      }
    >
      {start && (
        <>
          <div className='h-4 w-4 bg-stone-300 rounded-full' />
          <div className='h-12 border-r-2 border-stone-300' />
          <div className='h-4 w-4 bg-stone-300 rounded-full' />
        </>
      )}

      {section && (
        <>
          <div className='h-4 w-4 bg-stone-300 rounded-full' />
          <div className='h-6 border-r-2 border-stone-300' />
          <div className='h-6 border-r-2 border-stone-300 mt-2' />
          <div className='h-6 border-r-2 border-stone-300 mt-2' />
          <div className='h-6 border-r-2 border-stone-300 mt-2' />
          <div className='h-4 w-4 bg-stone-300 rounded-full' />
        </>
      )}

      {extend && <div className='h-12 border-r-2 border-stone-300' />}
    </motion.div>
  );

  const Header = ({ children }: any) => (
    <motion.h1
      variants={DF_PAGE_ITEM_VARIANT}
      className='text-xl font-extrabold drop-shadow-xl text-gray-800 text-center'
    >
      {children}
    </motion.h1>
  );

  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='pt-48 pb-16'
    >
      <Container>
        <motion.h1
          variants={DF_PAGE_ITEM_VARIANT}
          className='text-6xl font-extrabold drop-shadow-xl'
        >
          Journey
        </motion.h1>
      </Container>
    </motion.div>
  );
}
