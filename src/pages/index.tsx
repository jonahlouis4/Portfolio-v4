import Container from '@/components/Container';
import { motion } from 'framer-motion';

export default function Home() {
  const wrapper = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
    exit: { opacity: 0 },
  };

  const item = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
      },
    },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <motion.div
      variants={wrapper}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='h-full'
    >
      <div className='h-full flex flex-col items-center justify-center'>
        <div className='w-full'>
          <Container>
            <>
              <div className='flex justify-between items-center'>
                <div className='max-w-xl'>
                  <motion.h1
                    variants={item}
                    className='text-7xl font-extrabold drop-shadow-lg'
                  >
                    Hey, I'm Jonah.
                  </motion.h1>
                  <motion.p variants={item} className='text-xl drop-shadow-lg mt-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste provident fugiat, excepturi magni fugit veritatis
                    eveniet nihil itaque minima harum.
                  </motion.p>
                  <motion.div variants={item} className='flex gap-x-8 mt-10'>
                    {/* TODO: Make this primary button */}
                    <button className='rounded bg-gray-900 text-white drop-shadow-lg font-semibold py-2 px-3 shadow-sm transition duration-150 ease-in-out hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500'>
                      Contact me
                    </button>
                    {/* TODO: Make this secondary button */}
                    <button className='rounded text-gray-900 drop-shadow-lg font-semibold py-2 px-3 shadow-sm transition duration-300 ease-in-out ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500'>
                      My projects
                    </button>
                  </motion.div>
                </div>
                <motion.div
                  variants={item}
                  className='w-80 h-80 bg-gray-800 rounded-full shadow-xl '
                />
              </div>
            </>
          </Container>
        </div>
      </div>
    </motion.div>
  );
}
