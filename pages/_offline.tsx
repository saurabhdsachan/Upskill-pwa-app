import ErrorState from '@components/Shared/ErrorState';
import Layout from '@components/Shared/Layout';
import Head from 'next/head';
import React from 'react';

const Offline: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Offline | Spacejoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Banner />
      <Layout.Header />
      <Layout.Body>
        <ErrorState status={0} />
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Offline;
