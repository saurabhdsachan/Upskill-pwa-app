import { useAuthStore } from '@context/authContext';
import { initAnalytics, PwaInstalled, RouteChange } from '@utils/analytics';
import { verifyUser } from '@utils/apiData';
import { PRIVATE_PAGE_ROUTES, TOKEN } from '@utils/constants';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Else, If, Then } from 'react-if';
import LoadingState from '../LoadingState';

interface IBody {
  children: React.ReactNode;
}

const Body: React.FC<IBody> = ({ children }) => {
  const router = useRouter();
  const { authData, setAuthData } = useAuthStore();
  const [isPermitted, setIsPermitted] = useState(false);

  const hideContent = () => setIsPermitted(false);

  const authCheck = useCallback(async () => {
    const token = Cookies.get(TOKEN);
    const path = router?.asPath?.split('?')[0];
    if ((authData?.userId && token) || !PRIVATE_PAGE_ROUTES.includes(path)) {
      setIsPermitted(true);
    }

    if (!authData?.userId && token) {
      const res = await verifyUser();
      if (res?.status <= 400) {
        setIsPermitted(true);
        const { creator, userId, username, name, number, phoneNumber, profileImgUrl } = res?.data?.user;
        setAuthData({ creator, userId, username, name, number, phoneNumber, profileImgUrl });
      } else {
        toast.error(res?.status === 403 ? 'Unauthorized' : 'Network Authentication Required');
      }
    } else if (!token && PRIVATE_PAGE_ROUTES.includes(path)) {
      router.replace({
        pathname: '/auth',
        query: { returnUrl: router?.asPath },
      });
    }
  }, [authData, router, setAuthData]);

  useEffect(() => {
    // run auth check on initial load
    authCheck();

    // set authorized to false to hide page content while changing routes
    router.events.on('routeChangeStart', hideContent);

    // run auth check on route change
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, [authCheck, router]);

  useEffect(() => {
    initAnalytics();
    router.events.on('routeChangeComplete', () => RouteChange(window.location.pathname + window.location.search));
    window.addEventListener('appinstalled', (evt) => PwaInstalled({ evt }));
  });

  return (
    <main id="main">
      <If condition={isPermitted}>
        <Then>{children}</Then>
        <Else>
          <LoadingState />
        </Else>
      </If>
    </main>
  );
};

export default React.memo(Body);
