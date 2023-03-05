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
                    <button>my projects</button>
                    <button>contact me</button>
                  </div>
                </div>
                <div className='w-80 h-80 bg-gray-800 rounded-full' />
              </div>
            </>
          </Container>
        </div>
      </div>
    </motion.div>
  );
}
