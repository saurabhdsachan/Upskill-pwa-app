import React from 'react';
import Body from './Body';
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

const Layout: any & LayoutSubComponents = ({ children }: { children: React.ReactNode }) => <>{children}</>;

Layout.Header = ({
  backflow,
  title,
  showShare,
  showBooking,
}: {
  title?: string;
  backflow?: boolean;
  showShare?: boolean;
  showBooking?: boolean;
}) => (
  <Header
    //@ts-ignore
    title={title}
    backflow={backflow ? true : false}
    showShare={showShare ? true : false}
    showBooking={showBooking ? true : false}
  />
);

Layout.Body = ({ children }: { children: React.ReactNode }) => <Body>{children}</Body>;

Layout.PreFooter = () => <PreFooter />;

Layout.Footer = () => <Footer />;

export default Layout;
