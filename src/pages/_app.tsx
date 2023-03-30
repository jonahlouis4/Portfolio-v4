import Loader from '@/components/Loader';
import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';
import { useGlobal } from '@/store/globals';
import { useGlobalsPersist } from '@/store/globalsPersist';
import '@/styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mode = useGlobalsPersist((state) => state.mode);
  const isLoading = useGlobal((state) => state.loader);
  const isMenu = useGlobal((state) => state.menu);
  const router = useRouter();

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('bg-zinc-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('bg-zinc-900');
    }
  }, [mode]);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      console.log(e);
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const mouseVariant = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
  };

  return (
    <>
      <Head>
        <title>Jonah Louis</title>
        <meta
          name='description'
          content='Front-end web developer located in Ottawa, Ontario who specializes in developing high-quality websites and web applications.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content='Portfolio - Jonah Louis' />
        <meta
          name='image'
          property='og:image'
          content='https://jonahlouis.ca/jonah-louis-thumb.png'
        />
        <meta
          property='og:description'
          content='Front-end web developer located in Ottawa, Ontario who specializes in developing high-quality websites and web applications.'
        />
        <meta property='og:url' content='https://jonahlouis.ca/' />
        <meta name='author' content='Jonah Louis' />
      </Head>
      {/* Mouse div (follows mouse) */}
      <motion.div
        variants={mouseVariant}
        animate='default'
        className='invisible sm:visible flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-700 dark:border-gray-300 fixed top-0 left-0 z-40 pointer-events-none'
      >
        <div className='w-1 h-1 rounded-full bg-gray-700 dark:bg-gray-300' />
      </motion.div>

      {/* Show navbar only when loading is done */}
      {!isLoading ? <Navbar /> : null}

      {/* Show loader, menu, or page */}
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <Loader key='loader' />
        ) : isMenu ? (
          <Menu key='menu' />
        ) : (
          <Component {...pageProps} key={router.pathname} />
        )}
      </AnimatePresence>
    </>
  );
}
