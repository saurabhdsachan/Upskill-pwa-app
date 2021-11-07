import RefundContent from '@components/Policies/RefundContent';
import Layout from '@components/Shared/Layout';
import React from 'react';

const Terms: React.FC = () => {
  return (
    <Layout>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <RefundContent />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Terms;
