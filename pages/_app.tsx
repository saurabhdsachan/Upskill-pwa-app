import CommonSEO from '@components/Shared/SEO/DefaultSeo';
import ShopFilterContextProvider from '@store/ShopFilterContext';
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
<<<<<<< HEAD
        <Component {...pageProps} />
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: 'shadow-lg',
          }}
        />
=======
        <ShopFilterContextProvider>
          <Component {...pageProps} />
        </ShopFilterContextProvider>
>>>>>>> 0d4f4c2 (WIP: asset store)
      </ThemeProvider>
    </>
  );
};

export default MyApp;
