import { useAuthStore } from '@context/authContext';
import { PRIVATE_PAGE_ROUTES } from '@utils/constants';
import { verifyUser } from '@utils/constants/makeCalls';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';
import Footer from './Footer';
import Header from './Header';
import PreFooter from './PreFooter';

interface LayoutSubComponents {
  Banner: React.FC;
  Header: React.FC;
  Body: any;
  PreFooter: React.FC;
  Footer: React.FC;
}

const Layout: any & LayoutSubComponents = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { authData, setAuthData } = useAuthStore();
  const [isPermitted, setIsPermitted] = useState(false);

  const authCheck = useCallback(
    async (url) => {
      const path = url.split('?')[0];
      if (!authData[0]?.userId) {
        const res = await verifyUser();
        if (res?.status === 200) {
          const { userId, username, name, number, phoneNumber, profileImgUrl } = res?.data?.user;
          setIsPermitted(true);
          setAuthData({ userId, username, name, number, phoneNumber, profileImgUrl });
        }
      } else {
        !PRIVATE_PAGE_ROUTES.includes(path) ? setIsPermitted(true) : setIsPermitted(false);
      }
    },
    [authData, setAuthData]
  );

  useEffect(() => {
    // run auth check on initial load
    authCheck(router?.asPath);

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
    <If condition={isPermitted}>
      <Then>{children}</Then>
      <Else>
        <p>Loading</p>
      </Else>
    </If>
  );
};

Layout.Header = ({ backflow, title }: { backflow?: boolean; title?: string }) => (
  //@ts-ignore
  <Header backflow={backflow ? true : false} title={title} />
);

Layout.Body = ({ children }: { children: React.ReactNode }) => <main id="main">{children}</main>;

Layout.PreFooter = () => <PreFooter />;

Layout.Footer = () => <Footer />;

export default Layout;
