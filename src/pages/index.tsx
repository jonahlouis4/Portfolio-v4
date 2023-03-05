import Container from '@/components/Container';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      // initial={{ opacity: 0, x: -100 }}
      // animate={{ opacity: 1, x : 0 }}
      // exit={{ opacity: 0, x: 100 }}
      // transition={{ duration: 0.5 }}
      className='h-full'
    >
      <div className='h-full flex flex-col items-center justify-center'>
        <div className='w-full'>
          <Container>
            <>
              <div className='flex justify-between items-center'>
                <div className='max-w-xl'>
                  <h1 className='text-7xl font-extrabold'>Hey, I'm Jonah.</h1>
                  <p className='text-xl mt-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste provident fugiat, excepturi magni fugit veritatis
                    eveniet nihil itaque minima harum.
                  </p>
                  <div className='flex gap-x-8 mt-10'>
                    <button className='rounded bg-gray-900 text-white font-semibold py-2 px-3 shadow-md1 hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500'>
                      Contact me
                    </button>
                    <button className='rounded text-gray-900 font-semibold py-2 px-3 shadow-md1 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500'>
                      My projects
                    </button>
                  </div>
                </div>
                <div className='w-80 h-80 bg-gray-800 rounded-full shadow-xl' />
              </div>
            </>
          </Container>
        </div>
      </div>
    </motion.div>
  );
}
