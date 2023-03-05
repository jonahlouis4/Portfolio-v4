import { motion } from 'framer-motion';

export default function Menu() {
  return (
    <motion.div
      initial={{ x: -2500 }}
      animate={{
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.4, 0.6, 0.65, 1],
        },
      }}
      exit={{
        x: -2500,
        transition: { duration: 0.6, ease: [1, 0.65, 0.6, 0.4] },
      }}
      className='flex items-center justify-center w-full h-screen bg-gray-100 shadow-2xl border-r-2 border-gray-200'
    >
      <div>Menu</div>
    </motion.div>
  );
}
