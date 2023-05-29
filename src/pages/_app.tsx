import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '@/theme';
import MainLayout from '@/Layouts/MainLayout/MainLayout';
import createEmotionCache from '../utils/createEmotionCache';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '@/Store/store';
import { Toaster } from 'react-hot-toast';

const clientSideEmotionCache = createEmotionCache();
const client = new QueryClient();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps) {
  return (
    <>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <CacheProvider value={emotionCache}>
            <Provider store={store}>
              <CssBaseline />
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
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
