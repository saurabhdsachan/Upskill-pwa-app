import CommonSEO from '@components/Shared/SEO/DefaultSeo';
import { AuthProvider } from '@context/authContext';
import { DataBusProvider } from '@context/dataBusContext';
import { SlotProvider } from '@context/slotContext';
import { initAnalytics, LandingPage, PwaInstalled, RouteChange } from '@utils/analytics';
import { DEVICE_ID } from '@utils/constants';
import Cookies from 'js-cookie';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import useAuth from '../hooks/useAuth';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const { setDeviceId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    initAnalytics();
    LandingPage(window.location.pathname + window.location.search);

    window.addEventListener('appinstalled', (evt) => PwaInstalled({ evt }));
    const handleRouteChange = () => RouteChange(window.location.pathname + window.location.search);

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const deviceID = Cookies.get(DEVICE_ID);
    !deviceID && setDeviceId();
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
          reverseOrder={true}
          toastOptions={{
            className: 'shadow-lg text-sm',
          }}
        />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
