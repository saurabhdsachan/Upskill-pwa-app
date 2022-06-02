import { useAuthStore } from '@context/authContext';
import { PRIVATE_PAGE_ROUTES, TOKEN } from '@utils/constants';
import { verifyUser } from '@utils/constants/makeCalls';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';
import LoadingState from '../LoadingState';

interface IBody {
  children: React.ReactNode;
}

const Body: React.FC<IBody> = ({ children }) => {
  const router = useRouter();
  const { authData, setAuthData } = useAuthStore();
  const [isPermitted, setIsPermitted] = useState(true);

  const authCheck = useCallback(async () => {
    const token = Cookies.get(TOKEN);
    const path = router?.asPath?.split('?')[0];
    if (!PRIVATE_PAGE_ROUTES.includes(path)) {
      // public page
      const res = await verifyUser();
      if (res?.status === 200) {
        const { userId, username, name, number, phoneNumber, profileImgUrl } = res?.data?.user;
        setAuthData({ userId, username, name, number, phoneNumber, profileImgUrl });
      }
    } else {
      if (!token) {
        router.push({
          pathname: '/auth',
          query: { returnUrl: router.asPath },
        });
      }
    }
  }, [router, setAuthData]);

  useEffect(() => {
    // run auth check on initial load
    authCheck();

    // set authorized to false to hide page content while changing routes
    const hideContent = () => setIsPermitted(true);
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
