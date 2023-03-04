import Head from 'next/head';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x : 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className=''
    >
      <motion.div className='bg-blue-50'>home</motion.div>
    </motion.div>
  );
}
