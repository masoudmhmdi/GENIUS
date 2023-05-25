import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '@/theme';
import MainLayout from '@/Layouts/MainLayout/MainLayout';

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          {Component.getLayout ? (
            Component.getLayout(<Component {...pageProps} />)
          ) : (
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          )}
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
