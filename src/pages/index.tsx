import Container from '@/components/Container';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { DF_WRAPPER_VARIANT, DF_ITEM_VARIANT } from '@/constants';

export default function Home() {
  const router = useRouter();
  const wrapper = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
    hidden: {
      opacity: 0,
    },
    exit: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.05,
      },
    },
  };

  const handleActionBtn = (href: string) => {
    router.push(href);
  };

  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='h-screen dark:bg-gray-900'
    >
      <motion.div className='h-full flex flex-col items-center justify-center'>
        <div className='w-full'>
          <Container>
            <>
              <div className='flex justify-between items-center'>
                <div className='max-w-xl'>
                  <motion.h1
                    variants={DF_ITEM_VARIANT}
                    className='dark:text-gray-200 text-7xl font-extrabold drop-shadow-lg'
                  >
                    Hey, I'm Jonah.
                  </motion.h1>
                  <motion.p
                    variants={DF_ITEM_VARIANT}
                    className='dark:text-gray-200 text-xl drop-shadow-lg mt-6'
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste provident fugiat, excepturi magni fugit veritatis
                    eveniet nihil itaque minima harum.
                  </motion.p>
                  <motion.div
                    variants={DF_ITEM_VARIANT}
                    className='flex gap-x-8 mt-10'
                  >
                    {/* TODO: Make this primary button */}
                    <button
                      onClick={() => handleActionBtn('/journey')}
                      className='rounded dark:bg-white bg-gray-900 dark:text-gray-900 text-white drop-shadow-lg font-semibold py-2 px-3 shadow-sm transition duration-150 ease-in-out dark:hover:bg-gray-300 hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500'
                    >
                      My journey
                    </button>
                    {/* TODO: Make this secondary button */}
                    <button
                      onClick={() => handleActionBtn('/projects')}
                      className='rounded dark:text-white text-gray-900 drop-shadow-lg font-semibold py-2 px-3 shadow-sm transition duration-300 ease-in-out ring-1 ring-inset ring-gray-300 dark:hover:bg-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500'
                    >
                      My projects
                    </button>
                  </motion.div>
                </div>
                <motion.div
                  variants={DF_ITEM_VARIANT}
                  className='w-80 h-80 dark:bg-gray-300 bg-gray-800 rounded-full shadow-xl '
                />
              </div>
            </>
          </Container>
        </div>
      </motion.div>
    </motion.div>
  );
}
