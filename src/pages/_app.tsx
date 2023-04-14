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
import { useTranslation } from 'react-i18next';

import '@/translation/i18n';

export default function App({ Component, pageProps }: AppProps) {
  const language = useGlobal((state) => state.language);
  const setLanguage = useGlobal((state) => state.setLanguage);
  const mode = useGlobalsPersist((state) => state.mode);
  const isLoading = useGlobal((state) => state.loader);
  const isMenu = useGlobal((state) => state.menu);
  const router = useRouter();

  const { pathname, locale } = router;
  const { i18n } = useTranslation();

  // Handle dark mode toggle
  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('bg-zinc-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('bg-zinc-900');
    }
  }, [mode]);

  // Check if user came with french link
  useEffect(() => {
    if (locale === 'en' || locale === 'fr') {
      setLanguage(locale);
    }
  }, []);

  // Handle language change
  useEffect(() => {
    i18n.changeLanguage(language);

    router.push(pathname, pathname, {
      locale: language === 'fr' ? 'fr' : false,
    });
  }, [language, locale]);

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
          property='og:image'
          content='https://jonahlouis.ca/jonah-louis-thumb.png'
        />
        <meta
          property='og:description'
          content='Full-stack web developer in Canada who specializes in developing high-quality websites and web applications.'
        />
        {/* Twitter meta tags */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='https://jonahlouis.ca/' />
        <meta name='twitter:title' content='Portfolio - Jonah Louis' />
        <meta
          name='twitter:description'
          content='Jonah is a full-stack web developer in Canada 
          who specializes in developing high-quality websites and web applications.
          He also loves to spend his time volunteeing, watching movies, playing video games,
          and simply exploring what the world has to offer.'
        />
        <meta
          name='twitter:image'
          content='https://jonahlouis.ca/jonah-louis-thumb.png'
        />
        <meta
          name='twitter:image:alt'
          content="Front page of Jonah's portfolio"
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
