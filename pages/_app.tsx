import CommonSEO from '@components/Shared/SEO/DefaultSeo';
import { SlotProvider } from '@context/slotContext';
import type { AppProps } from 'next/app';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <CommonSEO />
      <ThemeProvider theme={{}}>
        <SlotProvider>
          <Component {...pageProps} />
        </SlotProvider>
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: 'shadow-lg',
          }}
        />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
