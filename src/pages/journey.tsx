import Container from '@/components/Container';
import { DF_ITEM_VARIANT, DF_WRAPPER_VARIANT } from '@/constants';
import { motion } from 'framer-motion';

export default function Journey() {
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
          variants={DF_ITEM_VARIANT}
          className='text-6xl font-extrabold drop-shadow-xl'
        >
          Journey
        </motion.h1>
        <div>
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
        </div>
      </Container>
    </motion.div>
  );
}
