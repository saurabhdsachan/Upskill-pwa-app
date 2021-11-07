import CookiesContent from '@components/Policies/CookiesContent';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <Layout>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <CookiesContent />
        <PreFooter />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default React.memo(CookiePolicy);
