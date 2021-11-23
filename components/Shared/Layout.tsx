import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header/Header';

interface LayoutSubComponents {
  Banner: React.FC;
  Header: React.FC;
  Body: React.FC;
  Footer: React.FC;
}

const Layout: React.FC & LayoutSubComponents = ({ children }) => <>{children}</>;

Layout.Banner = () => <Banner />;

Layout.Header = () => <Header />;

Layout.Body = ({ children }) => <main id="main">{children}</main>;

Layout.Footer = () => <Footer />;

export default Layout;
