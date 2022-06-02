import CommonSEO from '@components/Shared/SEO/DefaultSeo';
import { AuthProvider } from '@context/authContext';
import { SlotProvider } from '@context/slotContext';
import { PUBLIC_PAGE_ROUTES } from '@utils/constants';
import { verifyUser } from '@utils/constants/makeCalls';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { If, Then } from 'react-if';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const router = useRouter();
  const [isPermitted, setIsPermitted] = useState(false);

  const authCheck = useCallback(async (url) => {
    const path = url.split('?')[0];
    if (PUBLIC_PAGE_ROUTES.includes(path)) {
      return setIsPermitted(true);
    } else {
      const res = await verifyUser();
      if (res?.status === 200) {
        console.log('res', res?.data?.user);
        setIsPermitted(true);
      } else {
        setIsPermitted(false);
      }
    }
  }, []);

  useEffect(() => {
    // run auth check on initial load
    authCheck(router.asPath);

    // set authorized to false to hide page content while changing routes
    const hideContent = () => setIsPermitted(false);
    router.events.on('routeChangeStart', hideContent);

    // run auth check on route change
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, [authCheck, router]);

  return (
    <>
      <CommonSEO />
      <ThemeProvider theme={{}}>
        <AuthProvider>
          <SlotProvider>
            <If condition={isPermitted}>
              <Then>
                <Component {...pageProps} />
              </Then>
            </If>
          </SlotProvider>
        </AuthProvider>
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
