import Loader from '@/components/Loader';
import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';
import { useGlobal } from '@/store/globals';
import { useGlobalsPersist } from '@/store/globalsPersist';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
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

  return (
    <>
      <Head>
        <title>Jonah Louis</title>
        <meta name='author' content='Jonah Louis' />
        <meta
          name='description'
          content='Jonah is a full-stack web developer in Canada 
          who specializes in developing high-quality websites and web applications.
          He also loves to spend his time volunteeing, watching movies, playing video games,
          and simply exploring what the world has to offer.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content='Portfolio - Jonah Louis' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://jonahlouis.ca/' />

        <meta
          name='image'
          property='og:image'
          content='https://jonahlouis.ca/jonah-louis-thumb.png'
        />
        <meta
          property='og:description'
          content='Full-stack web developer in Canada who specializes in developing high-quality websites and web applications.'
        />
      </Head>

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
