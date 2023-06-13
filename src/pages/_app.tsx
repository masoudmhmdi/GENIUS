import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '@/theme';
import MainLayout from '@/Layouts/MainLayout/MainLayout';
import createEmotionCache from '../utils/createEmotionCache';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '@/Store/store';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import { cacheRtl } from '@/theme/loadRtl';
import Router from 'next/router';
import { useState } from 'react';
import NextNProgress from 'nextjs-progressbar';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools/build/lib/devtools';

const clientSideEmotionCache = createEmotionCache();

const client = new QueryClient();

export interface MyAppProps extends AppProps {
  Component: any;
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <CacheProvider value={emotionCache}>
            <CacheProvider value={cacheRtl}>
              <Provider store={store}>
                <CssBaseline />
                <NextNProgress color="#212529" />
                {Component.getLayout ? (
                  Component.getLayout(<Component {...pageProps} />)
                ) : (
                  <MainLayout>
                    <Component {...pageProps} />
                  </MainLayout>
                )}
                <Toaster
                  toastOptions={{
                    style: { backgroundColor: '#212529', color: 'white' },
                    position: 'top-left',
                  }}
                />
              </Provider>
            </CacheProvider>
          </CacheProvider>
        </ThemeProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </CacheProvider>
  );
}
