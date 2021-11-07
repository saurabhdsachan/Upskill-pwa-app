import ErrorState from '@components/Shared/ErrorState';
import Layout from '@components/Shared/Layout';
import Head from 'next/head';
import React from 'react';

const PageNotFound: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Page Not Found | Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <ErrorState status={404} />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default PageNotFound;
