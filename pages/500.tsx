import ErrorState from '@components/Shared/ErrorState';
import Layout from '@components/Shared/Layout';
import Head from 'next/head';
import React from 'react';

const ServerSideError: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Page Not Found | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header />
      <Layout.Body>
        <ErrorState status={500} />
      </Layout.Body>
    </Layout>
  );
};

export default ServerSideError;
