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

Layout.Header = ({ backflow, title }: { backflow?: boolean; title?: string }) => (
  //@ts-ignore
  <Header backflow={backflow ? true : false} title={title} />
);

Layout.Body = ({ children }: { children: React.ReactNode }) => <Body>{children}</Body>;

Layout.PreFooter = () => <PreFooter />;

Layout.Footer = () => <Footer />;

export default Layout;
