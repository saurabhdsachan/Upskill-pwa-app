import Layout from '@components/Shared/Layout';
import PreFooter from '@components/Shared/PreFooter';
import Head from 'next/head';
import React from 'react';

const designView: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Design View @Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-80">
            <p>Design View Page</p>
          </div>
        </div>
        <PreFooter />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default designView;
