import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header/Header';

interface LayoutSubComponents {
  Banner: React.FC;
  Header: React.FC;
  Body: any;
  Footer: React.FC;
}

const Layout: any & LayoutSubComponents = ({ children }: { children: React.ReactNode }) => <>{children}</>;

Layout.Banner = () => <Banner />;

Layout.Header = () => <Header />;

Layout.Body = ({ children }: { children: React.ReactNode }) => <main id="main">{children}</main>;

Layout.Footer = () => <Footer />;

export default Layout;
