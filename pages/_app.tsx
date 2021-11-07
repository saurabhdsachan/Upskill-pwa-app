import CommonSEO from '@components/Shared/SEO/DefaultSeo';
import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <CommonSEO />
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
