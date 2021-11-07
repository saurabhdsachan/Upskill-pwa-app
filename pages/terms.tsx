import TermsContent from '@components/Policies/TermsContent';
import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import React from 'react';

const Terms: React.FC = () => {
  return (
    <Layout>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <TermsContent />
        <PreFooter />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Terms;
