import Container from '@/components/Container';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { DF_WRAPPER_VARIANT, DF_PAGE_ITEM_VARIANT } from '@/data/variantData';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import avatar from '../assets/avatar/jonah.jpg';

export default function Home() {
  const router = useRouter();

  const handleActionBtn = (href: string) => {
    router.push(href);
  };

  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='h-screen dark:bg-zinc-900 dark:bg-main-dark bg-main-light'
    >
      <motion.div className='h-full flex flex-col items-center justify-center'>
        <div className='w-full'>
          <Container>
            <>
              <div className='flex flex-col lg:flex-row justify-between items-center gap-y-12'>
                <div className='max-w-xl 3xl:max-w-2xl text-center lg:text-left'>
                  {/* Intro */}
                  <motion.h1
                    variants={DF_PAGE_ITEM_VARIANT}
                    className='dark:text-gray-200 text-gray-900 text-5xl lg:text-7xl font-extrabold drop-shadow-lg'
                  >
                    Hey, I'm{' '}
                    <span className='bg-clip-text animate-header text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
                      Jonah.
                    </span>
                  </motion.h1>
                  <motion.p
                    variants={DF_PAGE_ITEM_VARIANT}
                    className='dark:text-gray-200 text-gray-900 text-xl lg:text-3xl drop-shadow-lg mt-6'
                  >
                    I'm a full-stack web developer who loves to build things for
                    the web.
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                    variants={DF_PAGE_ITEM_VARIANT}
                    className='flex justify-center lg:justify-start gap-x-8 mt-10'
                  >
                    <button
                      onClick={() => handleActionBtn('/journey')}
                      className='flex items-center dark:text-gray-300 text-gray-700 font-bold tracking-wide text-lg lg:text-2xl dark:hover:text-gray-400 hover:text-gray-500 transition duration-150'
                    >
                      <span>My journey</span>
                      <ArrowLongRightIcon className='h-6 w-6' />
                    </button>
                    <button
                      onClick={() => handleActionBtn('/projects')}
                      className='flex items-center dark:text-gray-300 text-gray-700 font-bold tracking-wide text-lg lg:text-2xl dark:hover:text-gray-400 hover:text-gray-500 transition duration-150'
                    >
                      <span>My projects</span>
                      <ArrowLongRightIcon className='h-6 w-6' />
                    </button>
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  variants={DF_PAGE_ITEM_VARIANT}
                  className='hidden lg:block '
                >
                  <Image
                    src={avatar}
                    alt='Picture of Jonah Louis'
                    className='lg:w-80 lg:h-80 2xl:h-96 2xl:w-96 object-cover rounded-full drop-shadow-2xl'
                  />
                </motion.div>
              </div>
            </>
          </Container>
        </div>
      </motion.div>
    </motion.div>
  );
}
