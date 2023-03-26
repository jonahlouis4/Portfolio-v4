import Container from '@/components/Container';
import { DF_PAGE_ITEM_VARIANT, DF_WRAPPER_VARIANT } from '@/constants';
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
          className='w-full border-2 border-gray-200 mt-8'
        />

        <>
          <h1 className='pt-48 text-center font-extrabold text-3xl'>
            What I've been up to lately.
          </h1>

          {/* Experience 1 */}
          <div className='grid grid-cols-2 items-center py-48'>
            <div>
              <h2 className='text-md font-bold uppercase'>June 2021 - June 2022</h2>
              <h1 className='text-4xl font-extrabold '>NetFore Systems</h1>
            </div>
            <div>
              <p className='text-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas unde quibusdam vitae dolor nobis quo ut ex atque harum,
                ullam voluptatibus ipsum saepe dolorum? Consequatur voluptate
                doloremque accusamus deleniti molestiae!
              </p>
            </div>
          </div>

          {/* Experience 2 */}
          <div className='grid grid-cols-2 items-center pt-20 pb-48'>
            <div>
              <h2 className='text-md font-bold uppercase'>June 2021 - June 2022</h2>
              <h1 className='text-4xl font-extrabold '>iContribute</h1>
            </div>
            <div>
              <p className='text-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas unde quibusdam vitae dolor nobis quo ut ex atque harum,
                ullam voluptatibus ipsum saepe dolorum? Consequatur voluptate
                doloremque accusamus deleniti molestiae!
              </p>
            </div>
          </div>

          {/* Experience 3 */}
          <div className='grid grid-cols-2 items-center pt-20 pb-48'>
            <div>
              <h2 className='text-md font-bold uppercase'>June 2022 - Present</h2>
              <h1 className='text-4xl font-extrabold '>isha Foundation</h1>
            </div>
            <div>
              <p className='text-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas unde quibusdam vitae dolor nobis quo ut ex atque harum,
                ullam voluptatibus ipsum saepe dolorum? Consequatur voluptate
                doloremque accusamus deleniti molestiae!
              </p>
            </div>
          </div>
        </>
      </Container>
    </motion.div>
  );
}
