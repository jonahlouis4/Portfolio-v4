import Container from '@/components/Container';
import { DF_PAGE_ITEM_VARIANT, DF_WRAPPER_VARIANT } from '@/constants';
import { motion } from 'framer-motion';

export default function Journey() {
  const Divider = () => <div className='h-20 bg-blue-50 my-4' />
  
  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='pt-48'
    >
      <Container>
        <motion.h1
          variants={DF_PAGE_ITEM_VARIANT}
          className='text-6xl font-extrabold drop-shadow-xl'
        >
          Journey
        </motion.h1>
        {/* 
          01 May 2021:    
            - Graduate
          02 June 2021:
            - NetFore
            - iContribute
          03 June 2022
           - Isha Foundation
          04 March 2023
           - Return to Canada
          */}

        <div className='mt-16'>
          <h1>May 2021</h1>
          <Divider />

          <h1>June 2021</h1>
          <Divider />

          <h1>June 2022</h1>
          <Divider />

          <h1>March 2023</h1>
        </div>
      </Container>
    </motion.div>
  );
}
