import CommonSEO from '@components/Shared/SEO/DefaultSeo';
import { AuthProvider } from '@context/authContext';
import { DataBusProvider } from '@context/dataBusContext';
import { SlotProvider } from '@context/slotContext';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import useAuth from '../hooks/useAuth';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const { setDeviceId } = useAuth();
  useEffect(() => {
    setDeviceId();
  });

  return (
    <>
      <CommonSEO />
      <ThemeProvider theme={{}}>
        <DataBusProvider>
          <AuthProvider>
            <SlotProvider>
              <Component {...pageProps} />
            </SlotProvider>
          </AuthProvider>
        </DataBusProvider>
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
